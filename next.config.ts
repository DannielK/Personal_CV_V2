import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  basePath: "",
  assetPrefix: "",
};

export default nextConfig;
