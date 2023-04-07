/** @type {import('next').NextConfig} **/

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

//module.exports = nextConfig
// deploying a Next.js Hybrid application with more than 100Mb app size, use the standalone
module.exports = {
  output:"standalone",
}