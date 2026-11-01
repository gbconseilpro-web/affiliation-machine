import type { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog-posts'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.com'

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

const comparatifPages = [
  'freebe',
  'pennylane',
  'indy',
  'tiime',
  'shine',
  'sellsy',
  'finom',
  'myunisoft',
]

const vsPages = [
  'freebe-vs-pennylane',
  'indy-vs-freebe',
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
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/auteur`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Pages avis individuelles /comparatif/[slug]
  const comparatifPageEntries: MetadataRoute.Sitemap = comparatifPages.map((slug) => ({
    url: `${SITE_URL}/comparatif/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Pages comparatifs vs /comparatif/[a-vs-b]
  const vsPageEntries: MetadataRoute.Sitemap = vsPages.map((slug) => ({
    url: `${SITE_URL}/comparatif/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.80,
  }))

  // Les pages /go/ sont en noindex mais on les inclut quand même pour le crawl interne
  const goPageEntries: MetadataRoute.Sitemap = goPages.map((slug) => ({
    url: `${SITE_URL}/go/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }))

  // Articles de blog
  const blogPosts = getAllBlogPosts()
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...comparatifPageEntries, ...vsPageEntries, ...blogEntries, ...goPageEntries]
}
