/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  basePath: 'public',
  images: {
    domains: ['faucet.patoni.online'],
    unoptimized: true
  }
}

module.exports = nextConfig
