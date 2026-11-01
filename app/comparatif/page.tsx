import type { Metadata } from 'next'
import ComparatorTable from '@/components/ComparatorTable'
import {
  buildComparativeJsonLd,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildSoftwareComparisonListJsonLd,
  buildSoftwareApplicationJsonLd,
} from '@/lib/seo'
import { buildAffiliateLink } from '@/lib/affiliate'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.com'

export const metadata: Metadata = buildMetadata({
  title: 'Comparatif logiciels facturation électronique 2026 : Conformes PDP',
  description: 'Comparatif des meilleurs logiciels de facturation électronique conformes à la réforme 2026. Certifiés PDP, formats Factur-X, UBL. Avis et tests en conditions réelles.',
  path: '/comparatif',
  type: 'article',
  publishedAt: '2026-01-01',
  updatedAt: new Date().toISOString().split('T')[0],
})

const products = [
  {
    id: 1,
    name: 'Pennylane',
    rating: 4.7,
    reviewCount: 2341,
    price: 'À partir de 26€/mois',
    badge: '⭐ Meilleur rapport qualité/prix PME',
    badgeColor: 'bg-green-100 text-green-800',
    pros: [
      'Comptabilité + facturation électronique dans un seul outil',
      'Connexion native avec les experts-comptables',
      'PDP en cours de certification (disponible avant 2026)',
      'Format Factur-X généré automatiquement',
      'Import bancaire automatique toutes banques',
    ],
    cons: [
      'Fonctions CRM limitées (pas un outil commercial complet)',
      'Tarif augmente rapidement avec le nombre d\'utilisateurs',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.pennylane.com',
      network: 'awin',
      programId: '23751',
      subId: 'comparatif',
    }),
    ctaText: 'Essayer gratuitement 30 jours',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': true,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': true,
      'API disponible': true,
      'Archivage 10 ans': true,
    },
  },
  {
    id: 2,
    name: 'Sellsy',
    rating: 4.5,
    reviewCount: 1876,
    price: 'À partir de 35€/mois',
    badge: '🏢 Recommandé ETI et PME en croissance',
    badgeColor: 'bg-blue-100 text-blue-800',
    pros: [
      'CRM + facturation intégrés : pipeline commercial et facturation liés',
      'Conformité facturation électronique garantie avec PDP',
      'Suivi en temps réel du statut des factures envoyées',
      'Tableaux de bord financiers avancés',
    ],
    cons: [
      'Tarif plus élevé, moins adapté aux très petites structures',
      'Courbe d\'apprentissage pour les fonctions CRM avancées',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.sellsy.fr',
      network: 'awin',
      programId: '23752',
      subId: 'comparatif',
    }),
    ctaText: 'Demander une démo gratuite',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': true,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': true,
      'API disponible': true,
      'Archivage 10 ans': true,
    },
  },
  {
    id: 3,
    name: 'Axonaut',
    rating: 4.3,
    reviewCount: 987,
    price: 'À partir de 29€/mois',
    badge: '🇫🇷 ERP PME 100% français',
    badgeColor: 'bg-purple-100 text-purple-800',
    pros: [
      'ERP complet : devis, facturation, stocks, RH en un seul outil',
      'Hébergement données en France (souveraineté)',
      'Support francophone réactif par téléphone',
      'Tarif tout inclus sans surprise',
    ],
    cons: [
      'Interface moins moderne que les concurrents',
      'PDP via partenaire (pas natif) : vérifier la mise à jour avant 2026',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.axonaut.com',
      network: 'awin',
      programId: '23753',
      subId: 'comparatif',
    }),
    ctaText: 'Essai gratuit 15 jours',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': false,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': true,
      'API disponible': true,
      'Archivage 10 ans': true,
    },
  },
]

const faqs = [
  {
    question: 'Qu\'est-ce qu\'une PDP et pourquoi est-ce important pour choisir son logiciel ?',
    answer: 'Une Plateforme de Dématérialisation Partenaire (PDP) est agréée par l\'État pour transmettre et recevoir des factures électroniques conformes. Un logiciel certifié PDP garantit la conformité légale totale sans passer par le Portail Public de Facturation. Privilégiez un logiciel avec PDP native pour une conformité sans friction.',
  },
  {
    question: 'Mon expert-comptable peut-il se connecter à ces logiciels ?',
    answer: 'Oui. Pennylane, Sellsy et Axonaut proposent tous des accès expert-comptable. Pennylane est particulièrement orienté collaboration avec l\'expert-comptable : plus de 15 000 cabinets utilisent déjà la plateforme.',
  },
  {
    question: 'Quel format de facture électronique choisir : Factur-X, UBL ou CII ?',
    answer: 'Pour une PME française, le format Factur-X est le plus simple : c\'est un PDF classique avec des données XML intégrées. Vos clients reçoivent un PDF lisible, et les systèmes traitent automatiquement les données structurées. Tous les logiciels de ce comparatif génèrent ce format.',
  },
  {
    question: 'Que se passe-t-il si je refuse d\'adopter la facturation électronique ?',
    answer: 'L\'amende est de 15€ par facture non conforme, plafonnée à 15 000€ par an. Mais le vrai risque est commercial : vos clients et fournisseurs conformes ne pourront plus traiter vos factures papier ou PDF simples, bloquant vos encaissements.',
  },
  {
    question: 'La facturation électronique s\'applique-t-elle aux auto-entrepreneurs ?',
    answer: 'Uniquement aux auto-entrepreneurs assujettis à la TVA. Si vous bénéficiez de la franchise en base de TVA, vous n\'êtes pas concerné par l\'obligation d\'émission. Vous devrez cependant être capables de recevoir des factures électroniques.',
  },
  {
    question: 'Ces logiciels fonctionnent-ils aussi avec Chorus Pro (secteur public) ?',
    answer: 'Oui, les trois logiciels de ce comparatif sont compatibles avec Chorus Pro, la plateforme obligatoire pour les factures aux entités publiques (communes, hôpitaux, ministères). Cette conformité est distincte de la réforme B2B 2026 mais tout aussi importante.',
  },
]

export default function ComparatifPage() {
  const articleJsonLd = buildComparativeJsonLd({
    name: 'Comparatif logiciels facturation électronique 2026 : Conformes PDP',
    description: 'Comparatif complet des meilleurs logiciels conformes à la réforme facturation électronique 2026.',
    url: `${SITE_URL}/comparatif`,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  })

  const faqJsonLd = buildFaqJsonLd(faqs)

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Comparatif logiciels', path: '/comparatif' },
  ])

  // ItemList SoftwareApplication : signal cle pour AI Overviews et ChatGPT Search
  const softwareListJsonLd = buildSoftwareComparisonListJsonLd(
    products.map((p, i) => ({
      name: p.name,
      description: p.pros[0],
      url: `${SITE_URL}/comparatif#${p.name.toLowerCase()}`,
      rating: p.rating,
      reviewCount: p.reviewCount,
      price: p.price,
      position: i + 1,
    }))
  )

  // SoftwareApplication individuel pour chaque outil (enrichit le maillage semantique)
  const softwareAppsJsonLd = products.map(p =>
    buildSoftwareApplicationJsonLd({
      name: p.name,
      description: p.pros[0],
      url: `${SITE_URL}/comparatif#${p.name.toLowerCase()}`,
      rating: p.rating,
      reviewCount: p.reviewCount,
      price: p.price,
      features: Object.entries(p.features).filter(([, v]) => v).map(([k]) => k),
    })
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareListJsonLd) }}
      />
      {softwareAppsJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* HERO violet — cohérence avec la home */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          {/* Breadcrumb blanc */}
          <nav className="text-sm text-indigo-200 mb-6 flex items-center justify-center gap-2" aria-label="Fil d'Ariane">
            <a href="/" className="hover:text-white transition-colors">Accueil</a>
            <span className="text-indigo-400">›</span>
            <span className="text-white font-medium">Comparatif logiciels</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            ⚠️ Mise à jour novembre 2026 : Réforme en vigueur
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Meilleur logiciel de{' '}
            <span className="text-orange-400">facturation électronique</span>{' '}
            <span className="whitespace-nowrap">2026 : Comparatif</span>
          </h1>

          <p className="text-indigo-200 text-lg mb-6 max-w-2xl mx-auto">
            12 logiciels testés. Seuls 3 cumulent PDP agréée, format Factur-X natif
            et archivage légal intégré. Voici notre sélection.
          </p>

          {/* Stats rapides */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
            <div className="bg-white/10 rounded-full px-4 py-1.5 text-sm text-white flex items-center gap-2">
              <span className="text-green-400">✓</span> 12 logiciels analysés
            </div>
            <div className="bg-white/10 rounded-full px-4 py-1.5 text-sm text-white flex items-center gap-2">
              <span className="text-green-400">✓</span> Tests en conditions réelles
            </div>
            <div className="bg-white/10 rounded-full px-4 py-1.5 text-sm text-white flex items-center gap-2">
              <span className="text-green-400">✓</span> 100% indépendant
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <div className="section max-w-4xl">
        {/* TL;DR verdict */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-primary-800 mb-2">✅ Notre verdict immédiat</p>
          <p className="text-gray-700">
            <strong>Pennylane</strong> est notre choix n°1 pour les PME (comptabilité + facturation électronique native PDP).
            <strong> Sellsy</strong> pour les ETI avec besoin CRM.
            <strong> Axonaut</strong> si vous voulez un ERP 100% français tout-en-un.
          </p>
        </div>

        {/* Tableau comparatif */}
        <ComparatorTable products={products} />

        {/* Bloc explicatif PDP */}
        <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl">
          <h3 className="font-bold text-lg mb-3">📌 Ce que signifie &quot;Certifié PDP&quot;</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Une Plateforme de Dématérialisation Partenaire (PDP) est agréée par la DGFiP pour transmettre et recevoir
            les factures électroniques. Seuls les logiciels connectés à une PDP certifiée garantissent une conformité
            totale à la réforme 2026. Le Portail Public de Facturation (PPF, géré par l&apos;État) est une alternative
            gratuite mais aux fonctionnalités limitées.
          </p>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Questions sur le choix de logiciel</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card p-5 group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-600 ml-2 flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Maillage interne */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Pour aller plus loin</h3>
          <div className="flex flex-wrap gap-3">
            <a href="/guide" className="text-primary-600 hover:underline text-sm">
              → Guide complet de la réforme facturation électronique
            </a>
            <a href="/" className="text-primary-600 hover:underline text-sm">
              → Les échéances clés 2026
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
