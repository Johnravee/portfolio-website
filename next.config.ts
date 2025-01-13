import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['imgs.search.brave.com'], // Add the allowed external image domain here
  },
};

export default nextConfig;
