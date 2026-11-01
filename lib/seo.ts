/**
 * Utilitaires SEO
 * Génération de métadonnées structurées pour chaque type de page
 * Couvre : Article, Product, FAQPage, BreadcrumbList, Person
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
 * Utilise Person (auteur nommé) plutôt qu'Organization pour le signal GEO
 */
export function buildComparativeJsonLd(opts: {
  name: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  authorName?: string
  authorUrl?: string
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
      '@type': 'Person',
      name: opts.authorName || process.env.SITE_AUTHOR_NAME || SITE_NAME,
      url: opts.authorUrl || `${SITE_URL}/auteur`,
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
 * Génère le JSON-LD FAQPage
 * Obligatoire pour la visibilité dans Google AI Overviews et Perplexity
 * Minimum 6 questions, réponses de 50-150 mots
 */
export function buildFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

/**
 * Génère le JSON-LD BreadcrumbList
 * Améliore la navigation dans les SERPs et les extraits IA
 */
export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/**
 * Génère le JSON-LD Person pour la page auteur
 * Signal de confiance clé pour GEO (ChatGPT, Perplexity, Claude)
 */
export function buildPersonJsonLd(opts: {
  name: string
  description: string
  imageUrl?: string
  sameAs?: string[] // LinkedIn, Twitter, site perso
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}/auteur`,
    ...(opts.imageUrl && { image: opts.imageUrl }),
    ...(opts.sameAs && opts.sameAs.length > 0 && { sameAs: opts.sameAs }),
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}

/**
 * Genere le JSON-LD SoftwareApplication pour un logiciel
 * Signal fort pour GEO : ChatGPT, Perplexity et Claude extraient ce schema
 * pour repondre aux questions "quel logiciel de facturation choisir"
 */
export function buildSoftwareApplicationJsonLd(opts: {
  name: string
  description: string
  url: string
  applicationCategory?: string
  operatingSystem?: string
  price?: string
  rating: number
  reviewCount: number
  features?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: opts.applicationCategory || 'BusinessApplication',
    operatingSystem: opts.operatingSystem || 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: opts.price?.replace(/[^0-9.]/g, '') || '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: opts.rating,
      reviewCount: opts.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    ...(opts.features && opts.features.length > 0 && {
      featureList: opts.features.join(', '),
    }),
  }
}

/**
 * Genere un JSON-LD Review pour un logiciel
 * Combine avec SoftwareApplication pour un signal E-E-A-T maximal
 */
export function buildReviewJsonLd(opts: {
  itemName: string
  itemUrl: string
  itemType?: string
  reviewBody: string
  ratingValue: number
  authorName?: string
  datePublished?: string
  positiveNotes?: string[]
  negativeNotes?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': opts.itemType || 'SoftwareApplication',
      name: opts.itemName,
      url: opts.itemUrl,
    },
    reviewBody: opts.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: opts.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: opts.authorName || (process.env.SITE_AUTHOR_NAME || SITE_NAME),
      url: `${SITE_URL}/auteur`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    datePublished: opts.datePublished || new Date().toISOString().split('T')[0],
    ...(opts.positiveNotes && opts.positiveNotes.length > 0 && {
      positiveNotes: opts.positiveNotes.map(note => ({ '@type': 'ListItem', name: note })),
    }),
    ...(opts.negativeNotes && opts.negativeNotes.length > 0 && {
      negativeNotes: opts.negativeNotes.map(note => ({ '@type': 'ListItem', name: note })),
    }),
  }
}

/**
 * Genere un JSON-LD ItemList de SoftwareApplication pour les comparatifs
 * Format ideal pour apparaitre dans les AI Overviews Google et ChatGPT Search
 */
export function buildSoftwareComparisonListJsonLd(products: Array<{
  name: string
  description: string
  url: string
  rating: number
  reviewCount: number
  price?: string
  position: number
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Comparatif logiciels de facturation 2026',
    description: 'Classement des meilleurs logiciels de facturation electronique pour PME et independants',
    numberOfItems: products.length,
    itemListElement: products.map(product => ({
      '@type': 'ListItem',
      position: product.position,
      item: {
        '@type': 'SoftwareApplication',
        name: product.name,
        description: product.description,
        url: product.url,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: product.rating,
          reviewCount: product.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        ...(product.price && {
          offers: {
            '@type': 'Offer',
            price: product.price.replace(/[^0-9.]/g, ''),
            priceCurrency: 'EUR',
            availability: 'https://schema.org/InStock',
          },
        }),
      },
    })),
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
