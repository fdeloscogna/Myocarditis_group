import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Myocarditis_group',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
