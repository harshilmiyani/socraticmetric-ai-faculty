import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**",
      },
    ],
  },
  transpilePackages: ["lucide-react", "sanity", "next-sanity"],
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-navigation-menu'],
  },
};

export default nextConfig;
