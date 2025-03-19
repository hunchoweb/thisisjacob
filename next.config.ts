import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com', 'img.clerk.com'], // Add your external image domains here
  },
};

export default nextConfig;
