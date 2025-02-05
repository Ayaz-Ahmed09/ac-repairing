/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: "dist",
  // assetPrefix: ".",
  reactStrictMode: true,
};

export default nextConfig;
