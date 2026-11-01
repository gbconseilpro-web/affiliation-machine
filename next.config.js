/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  staticPageGenerationTimeout: 180,

  // Compression gzip/brotli
  compress: true,

  // Variables d'environnement accessibles cote client
  env: {
    SITE_NAME: process.env.SITE_NAME || 'Mon Site',
    SITE_NICHE: process.env.SITE_NICHE || 'general',
    AFFILIATE_NETWORK: process.env.AFFILIATE_NETWORK || 'awin',
  },

  // Security headers + cache SVG/images statiques
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.awin1.com",
              "frame-ancestors 'none'",
            ].join('; '),
          },
        ],
      },
      {
        // Cache long pour les assets statiques (images, SVG, polices)
        source: '/(.*)\\.(svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache court pour les pages HTML
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
