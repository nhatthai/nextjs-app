/** @type {import('next').NextConfig} **/

const nextConfig = {
  experimental: {
    appDir: true,
  },

  // deploying a Next.js Hybrid application with more than 100Mb app size, use the standalone
  output:"standalone"
}

module.exports = nextConfig