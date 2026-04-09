// scripts/generate-sitemap.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Try to find paramsData which exports PATHS
const paramsCandidates = [
  path.join(process.cwd(), 'src', 'paramsData.js'),
  path.join(process.cwd(), 'src', 'paramsData.mjs'),
  path.join(process.cwd(), 'src', 'params', 'paramsData.js'),
  path.join(process.cwd(), 'src', 'params', 'paramsData.mjs'),
  path.join(process.cwd(), 'paramsData.js'),
  path.join(process.cwd(), 'paramsData.mjs'),
];

// Try to find robots.js (optional)
const robotsCandidates = [
  path.join(process.cwd(), 'src', 'app', 'robots.js'),
  path.join(process.cwd(), 'src', 'robots.js'),
  path.join(process.cwd(), 'app', 'robots.js'),
  path.join(process.cwd(), 'robots.js'),
];

function findExisting(pathsArray) {
  return pathsArray.find((p) => fs.existsSync(p));
}

async function importModuleIfExists(filepath) {
  try {
    if (!filepath) return null;
    const mod = await import(`file://${filepath}`);
    return mod;
  } catch (err) {
    // Import failed (likely because module uses path aliases). Ignore and fallback.
    console.warn(`Could not import ${filepath}: ${err.message}`);
    return null;
  }
}

(async () => {
  const FALLBACK_SITE_URL = 'https://www.globaltimepro.com';
  const toPublicOrigin = (value) => {
    if (!value) return null;

    try {
      const url = new URL(value);
      const host = url.hostname.toLowerCase();
      const isLocalhost =
        host === 'localhost' ||
        host === '127.0.0.1' ||
        host === '0.0.0.0' ||
        host.endsWith('.local');

      return isLocalhost ? null : url.origin;
    } catch {
      return null;
    }
  };

  // SITE_URL: prefer explicit production-safe origin, fallback to primary domain.
  const SITE_URL =
    toPublicOrigin(process.env.SITE_URL) ||
    toPublicOrigin(process.env.NEXT_PUBLIC_SITE_URL) ||
    FALLBACK_SITE_URL;

  const paramsPath = findExisting(paramsCandidates);
  let PATHS = {},
    DATES = {};
  if (paramsPath) {
    const paramsMod = await importModuleIfExists(paramsPath);
    if (paramsMod) {
      // try common export shapes
      PATHS =
        paramsMod.PATHS || paramsMod.default?.PATHS || paramsMod.default || {};
      DATES =
        paramsMod.DATES || paramsMod.default?.DATES || paramsMod.default || {};
    } else {
      console.warn(
        'paramsData exists but could not be imported; falling back to empty PATHS.',
      );
    }
  } else {
    console.warn(
      'Could not find paramsData; sitemap will be generated from no paths.',
    );
  }

  // robots
  const robotsPath = findExisting(robotsCandidates);
  let robotsObj = null;
  if (robotsPath) {
    const robotsMod = await importModuleIfExists(robotsPath);
    if (robotsMod && typeof robotsMod.default === 'function') {
      try {
        robotsObj = robotsMod.default();
      } catch (err) {
        console.warn('robots module found but calling it failed:', err.message);
      }
    } else if (robotsMod && typeof robotsMod.default === 'object') {
      robotsObj = robotsMod.default;
    }
  }

  // --- Generate robots.txt content ---
  const asArray = (value) => (Array.isArray(value) ? value : [value]);
  const lineFromValue = (label, value) =>
    asArray(value)
      .filter(Boolean)
      .map((entry) => `${label}: ${entry}`)
      .join('\n');

  let robotsTxt = '';
  if (robotsObj) {
    const rulesList = Array.isArray(robotsObj.rules)
      ? robotsObj.rules
      : [robotsObj.rules || { userAgent: '*' }];

    robotsTxt = rulesList
      .map((rule) => {
        const userAgentLines = lineFromValue(
          'User-agent',
          rule.userAgent || '*',
        );
        const allowLines = lineFromValue('Allow', rule.allow);
        const disallowLines = lineFromValue('Disallow', rule.disallow);

        return [userAgentLines, allowLines, disallowLines]
          .filter(Boolean)
          .join('\n');
      })
      .filter(Boolean)
      .join('\n\n');

    const sitemapLines = lineFromValue(
      'Sitemap',
      robotsObj.sitemap || `${SITE_URL}/sitemap.xml`,
    );
    const hostLine = robotsObj.host ? `Host: ${robotsObj.host}` : '';

    robotsTxt = [robotsTxt, sitemapLines, hostLine]
      .filter(Boolean)
      .join('\n\n');
  } else {
    // fallback
    robotsTxt = [
      'User-agent: *',
      'Allow: /',
      'Disallow: /private/',
      '',
      `Sitemap: ${SITE_URL}/sitemap.xml`,
    ].join('\n');
  }

  if (!robotsTxt.endsWith('\n')) robotsTxt += '\n';

  fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt, 'utf8');
  console.log('Wrote public/robots.txt');

  // --- Generate sitemap.xml content ---
  // Build a list of paths. Prefer PATHS object values; otherwise empty.
  const pathValues = Array.isArray(Object.values(PATHS))
    ? Object.values(PATHS)
    : [];

  // Always include homepage in sitemap and dedupe the rest.
  const uniquePaths = Array.from(
    new Set([
      '/',
      ...pathValues
        .filter((p) => typeof p === 'string' && p.trim().length > 0)
        .map((p) => p.trim()),
    ]),
  ).sort((a, b) => a.localeCompare(b));

  // Compose xml
  const xmlns = 'http://www.sitemaps.org/schemas/sitemap/0.9';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="${xmlns}">\n`;

  for (const p of uniquePaths) {
    const rel = String(p).replace(/^\/+|\/+$/g, '');
    const cleaned = rel ? `${SITE_URL}/${rel}` : `${SITE_URL}/`;

    const rawDate =
      typeof DATES !== 'undefined'
        ? DATES[p] ?? DATES[rel] ?? (p === '/' ? DATES[''] : null)
        : null;

    let lastmod = null;
    if (rawDate) {
      const d = new Date(rawDate);
      if (!Number.isNaN(d.valueOf())) lastmod = d.toISOString();
    }

    xml += `  <url>\n    <loc>${cleaned}</loc>\n`;
    if (lastmod) xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `  </url>\n`;
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
  console.log('Wrote public/sitemap.xml (generated from PATHS)');
})();
