import type { NextConfig } from "next";

export const basePath = process.env.NODE_ENV === "development" ? "" : "/profile"

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: `${basePath}/`,
};

export default nextConfig;