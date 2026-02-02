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
  // SITE_URL: prefer env var, otherwise sensible default (your original).
  const SITE_URL = process.env.SITE_URL || 'https://www.globaltimepro.com';

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
  let robotsTxt = '';
  if (robotsObj) {
    const rules = robotsObj.rules || {};
    const ua = rules.userAgent ?? '*';
    robotsTxt += `User-agent: ${ua}\n`;
    if (rules.allow) robotsTxt += `Allow: ${rules.allow}\n`;
    if (rules.disallow) robotsTxt += `Disallow: ${rules.disallow}\n`;
    if (Array.isArray(robotsObj.sitemap)) {
      robotsObj.sitemap.forEach((s) => (robotsTxt += `Sitemap: ${s}\n`));
    } else if (robotsObj.sitemap) {
      robotsTxt += `Sitemap: ${robotsObj.sitemap}\n`;
    } else {
      robotsTxt += `Sitemap: ${SITE_URL}/sitemap.xml\n`;
    }
  } else {
    // fallback
    robotsTxt =
      [
        'User-agent: *',
        'Allow: /',
        'Disallow: /private/',
        `Sitemap: ${SITE_URL}/sitemap.xml`,
      ].join('\n') + '\n';
  }

  fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsTxt, 'utf8');
  console.log('Wrote public/robots.txt');

  // --- Generate sitemap.xml content ---
  // Build a list of paths. Prefer PATHS object values; otherwise empty.
  const pathValues = Array.isArray(Object.values(PATHS))
    ? Object.values(PATHS)
    : [];

  // Remove falsy and ensure leading slash trimmed in join
  const uniquePaths = Array.from(new Set(pathValues.filter(Boolean)));

  // Compose xml
  const xmlns = 'http://www.sitemaps.org/schemas/sitemap/0.9';
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="${xmlns}">\n`;

  if (uniquePaths.length === 0) {
    xml += `  <url>\n    <loc>${SITE_URL}/</loc>\n  </url>\n`;
  } else {
    for (const p of uniquePaths) {
      const rel = String(p).replace(/^\/+|\/+$/g, '');
      const cleaned = `${SITE_URL}/${rel}`;

      const rawDate =
        typeof DATES !== 'undefined' ? (DATES[p] ?? DATES[rel]) : null;

      let lastmod = null;
      if (rawDate) {
        const d = new Date(rawDate);
        if (!Number.isNaN(d.valueOf())) lastmod = d.toISOString();
      }

      xml += `  <url>\n    <loc>${cleaned}</loc>\n`;
      if (lastmod) xml += `    <lastmod>${lastmod}</lastmod>\n`;
      xml += `  </url>\n`;
    }
  }

  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf8');
  console.log('Wrote public/sitemap.xml (generated from PATHS)');
})();
