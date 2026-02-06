// scripts/generate-sw-config.mjs
import fs from 'fs';
import path from 'path';

const candidatePaths = [
  path.join(process.cwd(), 'src', 'paramsData.js'),
  path.join(process.cwd(), 'src', 'paramsData.mjs'),
  path.join(process.cwd(), 'params', 'paramsData.js'),
  path.join(process.cwd(), 'paramsData.js'),
];

let paramsDataPath = candidatePaths.find((p) => fs.existsSync(p));

// Cloudflare Pages specific environment variables
// CF_PAGES_COMMIT_SHA - The Git commit SHA of the current deployment
// CF_PAGES_URL - The deployment URL
// CF_PAGES_BRANCH - The branch name
const deploymentId = process.env.CF_PAGES_COMMIT_SHA || `dev-${Date.now()}`; // Fallback for local development

console.log('Building with deployment ID:', deploymentId);

if (!paramsDataPath) {
  console.warn('Could not find paramsData. Using empty PATHS.');
  const out = `self.__PATHS__ = {};\nself.__DEPLOYMENT_ID__ = '${deploymentId}';`;
  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sw-config.js'),
    out,
    'utf8',
  );
  console.log('Wrote public/sw-config.js with empty PATHS (fallback).');
  process.exit(0);
}

(async () => {
  try {
    const module = await import(`file://${paramsDataPath}`);
    const PATHS = module.PATHS || module.default?.PATHS || module.default || {};

    const out = `self.__PATHS__ = ${JSON.stringify(PATHS)};\nself.__DEPLOYMENT_ID__ = '${deploymentId}';`;
    const outDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'sw-config.js'), out, 'utf8');
    console.log(
      `Wrote public/sw-config.js with deployment ID: ${deploymentId}`,
    );
  } catch (err) {
    console.error('Error generating sw-config.js:', err);
    process.exit(1);
  }
})();
