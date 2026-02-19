import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true },
  async rewrites() {
    return [
      { source: "/planos.html", destination: "/planos.html" },
      { source: "/nossa-historia.html", destination: "/nossa-historia.html" },
    ];
  },
};

export default nextConfig;
