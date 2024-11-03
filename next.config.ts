import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // optional: allows all paths
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**", // optional: allows all paths
      },
    ],
  },
};

export default nextConfig;
