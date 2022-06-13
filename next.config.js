/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  images: {
    domains: ["img.pokemondb.net"]
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
