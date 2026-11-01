import type { MetadataRoute } from 'next'

const SITE_URL = 'https://facturationpro.com'

// All blog post slugs - synced with lib/blog-posts.ts
const blogSlugs = [
  'logiciel-facturation-freelance-2026',
  'auto-entrepreneur-logiciel-gestion-2026',
  'freebe-avis-test-complet',
  'mentions-obligatoires-facture-france',
  'delai-paiement-facture-freelance',
  'logiciel-facturation-auto-entrepreneur',
  'facturation-electronique-2026-guide',
  'meilleur-logiciel-facturation-freelance',
  'application-facturation-debutant-freelance',
  'facturation-urssaf-logiciel',
  'erreurs-facturation-freelance',
  'pennylane-avis-test-complet',
  'note-de-frais-freelance-logiciel',
  'sasu-eurl-choisir-statut-freelance',
  'indy-avis-test-complet',
  'tiime-avis-test-complet',
  'shine-avis-test-complet',
  'devis-vs-facture-difference',
  'logiciel-facturation-artisan',
  'tva-auto-entrepreneur-guide',
  'relance-facture-impayee-modele',
  'cotisations-sociales-freelance-guide',
  'sellsy-avis-test-complet',
  'finom-avis-test-complet',
  'logiciel-facturation-pme-comparatif',
  'note-de-frais-auto-entrepreneur-guide',
  'deductibilite-charges-freelance',
  'contrat-freelance-modele-gratuit',
  'taux-journalier-moyen-freelance',
  'facturer-client-etranger-auto-entrepreneur',
  'portage-salarial-vs-freelance',
  'comment-trouver-clients-freelance',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const lastMonth = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/comparatif`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
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
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/mentions-legales`,
      lastModified: lastMonth,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Comparatif VS pages
  const comparatifVsPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/comparatif/freebe-vs-pennylane`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparatif/indy-vs-freebe`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparatif/tiime-vs-pennylane`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparatif/indy-vs-pennylane`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparatif/freebe-vs-tiime`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/comparatif/shine-vs-indy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Redirect pages (go/*)
  const goPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/go/freebe`, lastModified: lastMonth, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${SITE_URL}/go/indy`, lastModified: lastMonth, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${SITE_URL}/go/pennylane`, lastModified: lastMonth, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${SITE_URL}/go/tiime`, lastModified: lastMonth, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${SITE_URL}/go/shine`, lastModified: lastMonth, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${SITE_URL}/go/sellsy`, lastModified: lastMonth, changeFrequency: 'monthly' as const, priority: 0.4 },
    { url: `${SITE_URL}/go/finom`, lastModified: lastMonth, changeFrequency: 'monthly' as const, priority: 0.4 },
  ]

  return [
    ...staticPages,
    ...comparatifVsPages,
    ...blogPages,
    ...goPages,
  ]
}
