import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better development practices
  reactStrictMode: true,
  images: {
    // Serve resized/compressed images (AVIF/WebP) so phones don't download
    // the full-size PNGs.
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    // Tree-shake barrel imports from the animation/icon libraries so a page
    // only ships the components it actually renders, not the whole package.
    optimizePackageImports: [
      "framer-motion",
      "@phosphor-icons/react",
      "gsap",
    ],
    // Optimize CSS (Tailwind v4)
    optimizeCss: true,
  },
  // Compress assets
  compress: true,
  // Remove powered by header
  poweredByHeader: false,
  // Generate ETags for better caching
  generateEtags: true,
};

export default nextConfig;
