# Global Time Pro

Global Time Pro is a Next.js app for timezone conversion, DST checks, jet lag planning, and timezone data exports.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

## Build

```bash
npm run build
```

## AdSense Setup

This project is prepared for AdSense application with:

- Site-wide AdSense script injection in `src/app/layout.js`
- `google-adsense-account` meta support in `<head>`
- Auto-generated `public/ads.txt` during build/dev
- Crawlable trust pages (`/about`, `/contact`, `/privacy-policy`, `/terms`)

Set this environment variable in production:

```env
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXX
```

Then redeploy. The build step generates:

```text
public/ads.txt
```

with:

```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

## Related Scripts

- `npm run generate:ads-txt` writes `public/ads.txt`
- `npm run generate:sitemap` writes `public/sitemap.xml`
- `npm run generate:sw-config` updates service worker config
