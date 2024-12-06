import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "**",
      },
    ],
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
};

export default nextConfig;
