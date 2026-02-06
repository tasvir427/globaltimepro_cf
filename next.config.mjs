/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  turbopack: {},
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
