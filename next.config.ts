import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cvkwimczgnxhwynkgjsx.supabase.co",
      },
    ],
  },
};

export default nextConfig;
