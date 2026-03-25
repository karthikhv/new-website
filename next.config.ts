import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/new-website",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
