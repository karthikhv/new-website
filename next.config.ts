import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/new-website",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
