import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.fr'

const goPages = [
  'freebe',
  'pennylane',
  'indy',
  'tiime',
  'shine',
  'sellsy',
  'finom',
  'myunisoft',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/comparatif`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/auteur`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Les pages /go/ sont en noindex mais on les inclut quand même pour le crawl interne
  const goPageEntries: MetadataRoute.Sitemap = goPages.map((slug) => ({
    url: `${SITE_URL}/go/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  return [...staticPages, ...goPageEntries]
}
