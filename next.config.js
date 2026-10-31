/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  staticPageGenerationTimeout: 180,

  // Variables d'environnement accessibles côté client
  env: {
    SITE_NAME: process.env.SITE_NAME || 'Mon Site',
    SITE_NICHE: process.env.SITE_NICHE || 'general',
    AFFILIATE_NETWORK: process.env.AFFILIATE_NETWORK || 'awin',
  },

  // Headers SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
