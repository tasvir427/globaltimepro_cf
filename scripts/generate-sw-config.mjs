// scripts/generate-sw-config.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Try a few likely paramData paths; adjust if your repo differs:
const candidatePaths = [
  path.join(process.cwd(), 'src', 'paramsData.js'),
  path.join(process.cwd(), 'src', 'paramsData.mjs'),
  path.join(process.cwd(), 'params', 'paramsData.js'),
  path.join(process.cwd(), 'paramsData.js'),
];

let paramsDataPath = candidatePaths.find((p) => fs.existsSync(p));

if (!paramsDataPath) {
  console.warn(
    'Could not find paramsData automatically. Please edit scripts/generate-sw-config.mjs to point to your paramsData file.',
  );
  // Fallback to an empty PATHS
  const out = `self.__PATHS__ = {}; self.__DEPLOYMENT_ID__ = '${process.env.VERCEL_DEPLOYMENT_ID || process.env.GITHUB_SHA || 'dev'}';`;
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
    // Dynamic import of the user's module
    const module = await import(`file://${paramsDataPath}`);
    const PATHS = module.PATHS || module.default?.PATHS || module.default || {};

    const deploymentId =
      process.env.VERCEL_DEPLOYMENT_ID || process.env.GITHUB_SHA || 'dev';

    const out = `self.__PATHS__ = ${JSON.stringify(PATHS)}; self.__DEPLOYMENT_ID__ = ${JSON.stringify(deploymentId)};`;
    const outDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'sw-config.js'), out, 'utf8');
    console.log('Wrote public/sw-config.js');
  } catch (err) {
    console.error('Error generating sw-config.js:', err);
    process.exit(1);
  }
})();
