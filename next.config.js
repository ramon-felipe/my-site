/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    formats:['image/webp']
  }
}

module.exports = nextConfig
