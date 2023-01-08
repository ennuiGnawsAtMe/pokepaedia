const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.pokemondb.net', 'spguvrptstnzyxfptgxn.supabase.co'],
  },
  experimental: {
    scrollRestoration: true,
    appDir: true,
  },
  headers: () => [
    {
      source: '/',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
}

module.exports = nextConfig
