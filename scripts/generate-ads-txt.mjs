import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const extractPublisherDigits = (value) => {
  if (!value) return null;

  const trimmed = String(value).trim();
  if (!trimmed) return null;

  if (/^\d+$/.test(trimmed)) return trimmed;
  if (/^ca-pub-\d+$/i.test(trimmed)) return trimmed.replace(/^ca-pub-/i, '');
  if (/^pub-\d+$/i.test(trimmed)) return trimmed.replace(/^pub-/i, '');

  return trimmed.replace(/\D/g, '') || null;
};

const publisherDigits = extractPublisherDigits(
  process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ||
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT,
);

const adsTxtPublisherId = publisherDigits ? `pub-${publisherDigits}` : null;

const adsTxt = adsTxtPublisherId
  ? `google.com, ${adsTxtPublisherId}, DIRECT, f08c47fec0942fa0\n`
  : [
      '# AdSense publisher ID is not set yet.',
      '# Add NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX (or pub-XXXXXXXXXXXXXXXX) to your environment.',
      '# Rebuild/deploy after updating the environment value.',
      '',
    ].join('\n');

const outPath = path.join(outDir, 'ads.txt');
fs.writeFileSync(outPath, adsTxt, 'utf8');

console.log('Wrote public/ads.txt');
