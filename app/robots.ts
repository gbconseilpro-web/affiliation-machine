import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/go/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'GoogleOther',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/go/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/go/'],
      },
    ],
    sitemap: 'https://facturationpro.com/sitemap.xml',
    host: 'https://facturationpro.com',
  }
}
