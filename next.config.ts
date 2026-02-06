import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['lucide-react'], // Helps with icon tree-shaking
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@fancyapps/ui'],
  },
};

export default nextConfig;
