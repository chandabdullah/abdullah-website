import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Systems page was folded into the home page's approach section.
      { source: "/systems", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
