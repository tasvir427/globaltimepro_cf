/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deploymentId =
  process.env.VERCEL_DEPLOYMENT_ID || process.env.GITHUB_SHA || 'dev';

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  turbopack: {},
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
};

export default nextConfig;
