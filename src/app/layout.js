import { memo } from 'react';
import localFont from 'next/font/local';
import { SITE_URL, siteSchemaData } from '@/utils';
import { Footer, ClientProviders } from '@/Components';
import './globals.css';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Global Time Pro',
  title: {
    default: 'Global Time Pro',
    template: '%s | Global Time Pro',
  },
  description:
    'Timezone conversion, DST checks, jet lag planning, and timezone data export in one fast web app.',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'Global Time Pro',
    url: SITE_URL,
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Global Time Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GlobalTimePro',
    creator: '@GlobalTimePro',
    images: ['/opengraph-image.png'],
  },
};

export const viewport = {
  themeColor: '#1565C0',
  width: 'device-width',
  initialScale: 1,
};

const pretendard = localFont({
  src: [
    { path: '../Fonts/Pretendard-Medium.woff2', weight: '500' },
    { path: '../Fonts/Pretendard-SemiBold.woff2', weight: '600' },
    { path: '../Fonts/Pretendard-Bold.woff2', weight: '700' },
  ],
  display: 'swap',
  variable: '--theme-font',
  preload: true,
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={pretendard.variable} suppressHydrationWarning>
      <body>
        <div id="root">
          <div className="left_ad_box" />
          <main className="home_box">
            <div className="footer_top">{children}</div>
            <Footer />
          </main>
          <div className="right_ad_box" />
        </div>
        <ClientProviders />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchemaData) }}
        />
      </body>
    </html>
  );
};

export default memo(RootLayout);
