/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const deploymentId = process.env.VERCEL_DEPLOYMENT_ID || 'dev';

const withPWA = withPWAInit({
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  extendDefaultRuntimeCaching: true,
  workboxOptions: {
    // Tell next-pwa to use our custom service worker
    swSrc: 'service-worker.js',
  },
});

const nextConfig = {
  reactStrictMode: false,
  webpack(config, { isServer, webpack }) {
    if (!isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          __DEPLOYMENT_ID__: JSON.stringify(deploymentId),
        }),
      );
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/timezone-converter',
        permanent: true,
      },
    ];
  },
};

export default withPWA(nextConfig);
