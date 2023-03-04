/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["apod.nasa.gov", "img.youtube.com", "i.vimeocdn.com"],
  },
};

module.exports = nextConfig;
