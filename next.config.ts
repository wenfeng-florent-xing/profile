import type { NextConfig } from "next";

export const basePath = "profile"

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: `/${basePath}/`,
};

export default nextConfig;