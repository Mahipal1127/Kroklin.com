import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve resized/compressed images (AVIF/WebP) so phones don't download
    // the full-size PNGs.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
