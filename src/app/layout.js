import { memo } from 'react';
import localFont from 'next/font/local';
import { PATHS } from '@/paramsData';
import { getMetaData, SITE_URL } from '@/utils';
import { Footer, ClientProviders } from '@/Components';
import './globals.css';

export const generateMetadata = async () => {
  const m = await getMetaData(PATHS.timezoneConverter);
  return { metadataBase: new URL(SITE_URL), ...m };
};

export const viewport = {
  themeColor: '#1565C0',
  viewport: { width: 'device-width', initialScale: 1 },
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
  display: 'swap',
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
      </body>
    </html>
  );
};

export default memo(RootLayout);
