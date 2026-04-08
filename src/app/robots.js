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

const SITE_URL =
  toPublicOrigin(process.env.SITE_URL) ||
  toPublicOrigin(process.env.NEXT_PUBLIC_SITE_URL) ||
  FALLBACK_SITE_URL;

export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
