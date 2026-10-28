/**
 * Utilitaires SEO
 * Génération de métadonnées structurées pour chaque type de page
 */

import type { Metadata } from 'next'

interface SeoOptions {
  title: string
  description: string
  path?: string
  imageUrl?: string
  type?: 'website' | 'article'
  publishedAt?: string
  updatedAt?: string
}

const SITE_NAME = process.env.SITE_NAME || 'Site Affiliation'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

/**
 * Génère les métadonnées Next.js pour une page
 */
export function buildMetadata(options: SeoOptions): Metadata {
  const { title, description, path = '/', imageUrl, type = 'website', publishedAt, updatedAt } = options
  const canonicalUrl = `${SITE_URL}${path}`
  const ogImage = imageUrl || `${SITE_URL}/og-default.png`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type,
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(updatedAt && { modifiedTime: updatedAt }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Génère le JSON-LD pour un article de comparatif
 */
export function buildComparativeJsonLd(opts: {
  name: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.name,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

/**
 * Génère le JSON-LD pour un produit (schema.org Product)
 */
export function buildProductJsonLd(opts: {
  name: string
  description: string
  url: string
  rating: number
  reviewCount: number
  price?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: opts.rating,
      reviewCount: opts.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    ...(opts.price && {
      offers: {
        '@type': 'Offer',
        price: opts.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
      },
    }),
  }
}

/**
 * Slugifie un string pour les URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
