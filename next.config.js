/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["apod.nasa.gov", "img.youtube.com"],
  },
};

module.exports = nextConfig;
