/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  reactStrictMode: true,
  images: {
    domains: [
      "img.pokemondb.net",
      "spguvrptstnzyxfptgxn.supabase.co"
    ]
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
