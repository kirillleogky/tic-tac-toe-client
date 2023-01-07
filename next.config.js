/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ADMIN_SECRET: process.env.ADMIN_SECRET,
    GRAPHQL_ENGINE_URL: process.env.GRAPHQL_ENGINE_URL,
  },
};

module.exports = nextConfig;
