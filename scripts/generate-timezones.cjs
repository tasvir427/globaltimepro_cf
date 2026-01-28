const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..', 'src');
const modPath = path.join(root, 'timezones.js');

if (!fs.existsSync(modPath)) {
  console.error(`Cannot find module at ${modPath}`);
  process.exit(1);
}

let mod;
try {
  mod = require(modPath);
} catch (err) {
  console.error(`Failed to require ${modPath}:`, err);
  process.exit(1);
}

const timezones = mod.timezones ?? mod.default ?? mod;

if (!timezones || typeof timezones !== 'object') {
  console.error(
    `The required module did not export a timezones object.\n` +
      `Export keys from module: ${Object.keys(mod).join(', ')}\n` +
      `Make sure the file exports like: export const timezones = ... OR module.exports = { timezones }`,
  );
  process.exit(1);
}

const outDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, 'timezones.json');
fs.writeFileSync(outPath, JSON.stringify(timezones), 'utf8');

const sizeKB = (Buffer.byteLength(JSON.stringify(timezones)) / 1024).toFixed(1);
console.log(
  `✅ timezones.json generated at ${outPath} (${sizeKB} KB) — source: ${modPath}`,
);
