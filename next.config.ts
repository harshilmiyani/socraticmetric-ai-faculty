import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  transpilePackages: ["lucide-react", "sanity", "next-sanity"],
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@fancyapps/ui'],
  },
};

export default nextConfig;
