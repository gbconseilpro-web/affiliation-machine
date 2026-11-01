import type { Metadata } from 'next'
import {
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from '@/lib/seo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.fr'

export const metadata: Metadata = buildMetadata({
  title: 'Comparatif logiciels de facturation 2026 — Avis & Test complet',
  description: 'Comparatif des 8 meilleurs logiciels de facturation pour freelances et auto-entrepreneurs. Freebe, Pennylane, Indy, Tiime… Tests réels, tarifs, essais gratuits.',
  path: '/comparatif',
  type: 'article',
  publishedAt: '2026-01-01',
  updatedAt: new Date().toISOString().split('T')[0],
})

// ─── Logos SVG inline ────────────────────────────────────────────────────────

const LogoFreebe = () => (
  <svg viewBox="0 0 120 36" width="110" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Freebe">
    <rect x="0" y="2" width="30" height="30" rx="8" fill="#1E40AF"/>
    <text x="8" y="22" fontFamily="Arial" fontWeight="800" fontSize="18" fill="white">f</text>
    <text x="36" y="24" fontFamily="Arial" fontWeight="700" fontSize="19" fill="#1E40AF">reebe</text>
  </svg>
)

const LogoPennylane = () => (
  <svg viewBox="0 0 170 36" width="150" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Pennylane">
    <polygon points="15,4 27,18 15,32 3,18" fill="#10B981"/>
    <text x="35" y="24" fontFamily="Arial" fontWeight="700" fontSize="17" fill="#1F2937">Pennylane</text>
  </svg>
)

const LogoIndy = () => (
  <svg viewBox="0 0 80 36" width="70" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Indy">
    <text x="4" y="27" fontFamily="Arial" fontWeight="900" fontSize="25" fill="#EF4444">indy</text>
  </svg>
)

const LogoTiime = () => (
  <svg viewBox="0 0 110 36" width="100" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Tiime">
    <text x="4" y="26" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#1E3A5F">T</text>
    <text x="19" y="26" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#0EA5E9">i</text>
    <text x="27" y="26" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#1E3A5F">ime</text>
  </svg>
)

const LogoShine = () => (
  <svg viewBox="0 0 110 36" width="100" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Shine">
    <circle cx="14" cy="18" r="10" fill="#6366F1"/>
    <text x="7" y="23" fontFamily="Arial" fontWeight="900" fontSize="14" fill="white">S</text>
    <text x="30" y="25" fontFamily="Arial" fontWeight="700" fontSize="20" fill="#1F2937">Shine</text>
  </svg>
)

const LogoSellsy = () => (
  <svg viewBox="0 0 130 36" width="115" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Sellsy">
    <rect x="0" y="4" width="28" height="28" rx="6" fill="#1D4ED8"/>
    <text x="6" y="24" fontFamily="Arial" fontWeight="900" fontSize="16" fill="white">Se</text>
    <text x="34" y="25" fontFamily="Arial" fontWeight="700" fontSize="19" fill="#1D4ED8">sellsy</text>
  </svg>
)

const LogoFinom = () => (
  <svg viewBox="0 0 100 36" width="90" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Finom">
    <text x="4" y="27" fontFamily="Arial" fontWeight="700" fontSize="23" fill="#7C3AED">finom</text>
  </svg>
)

const LogoMyUnisoft = () => (
  <svg viewBox="0 0 160 36" width="140" height="33" xmlns="http://www.w3.org/2000/svg" aria-label="Logo MyUnisoft">
    <rect x="0" y="4" width="28" height="28" rx="6" fill="#1F2937"/>
    <text x="6" y="24" fontFamily="Arial" fontWeight="900" fontSize="16" fill="white">M</text>
    <text x="34" y="25" fontFamily="Arial" fontWeight="700" fontSize="17" fill="#1F2937">MyUnisoft</text>
  </svg>
)

// ─── Composant étoiles ───────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const empty = 5 - full - (hasHalf ? 1 : 0)
  return (
    <span className="text-yellow-400 text-xl leading-none" aria-label={`Note: ${rating} sur 5`}>
      {'★'.repeat(full)}{hasHalf ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  )
}

// ─── Données produits ────────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: 'Freebe',
    Logo: LogoFreebe,
    badge: '⭐ Notre recommandation n°1',
    badgeClass: 'bg-[#4f46e5]',
    tagline: 'Le meilleur pour les freelances et auto-entrepreneurs',
    rating: 4.8,
    reviewCount: 2100,
    price: 'Gratuit jusqu\'à 3 factures/mois, puis 9,90€/mois',
    essai: '30 jours gratuits',
    pros: [
      'Devis, factures, avoirs illimités',
      'Déclaration URSSAF intégrée (auto-entrepreneur)',
      'Relances automatiques des impayés',
      'Application mobile iOS et Android',
      'Support 7j/7 par chat',
    ],
    cons: [
      'Pas adapté aux entreprises avec salariés',
      'Comptabilité avancée absente (pas un logiciel compta)',
    ],
    ctaUrl: 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=comparatif&p=https%3A%2F%2Fwww.freebe.me%2F',
    ctaText: 'Essayer Freebe gratuitement →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': '30 jours',
      'Devis & factures': true,
      'Déclaration URSSAF': true,
      'Synchronisation bancaire': true,
      'App mobile': true,
      'Multi-utilisateurs': false,
      'Comptabilité complète': false,
    },
    idealFor: 'Freelances, auto-entrepreneurs',
  },
  {
    id: 2,
    name: 'Pennylane',
    Logo: LogoPennylane,
    badge: '💼 Idéal PME & comptable',
    badgeClass: 'bg-green-600',
    tagline: 'Facturation ET comptabilité dans un seul outil',
    rating: 4.6,
    reviewCount: 1580,
    price: 'À partir de 29€/mois',
    essai: '14 jours gratuits',
    pros: [
      'Facturation + comptabilité unifiées',
      'Synchronisation bancaire automatique',
      'Portail collaboratif avec votre expert-comptable',
      'Conformité facture électronique 2026',
      'Rapports financiers en temps réel',
    ],
    cons: [
      'Tarif plus élevé que les concurrents simples',
      'Fonctionnalités avancées réservées aux plans supérieurs',
    ],
    ctaUrl: '/go/pennylane',
    ctaText: 'Essayer Pennylane →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': '14 jours',
      'Devis & factures': true,
      'Déclaration URSSAF': false,
      'Synchronisation bancaire': true,
      'App mobile': true,
      'Multi-utilisateurs': true,
      'Comptabilité complète': true,
    },
    idealFor: 'PME, entrepreneurs avec expert-comptable',
  },
  {
    id: 3,
    name: 'Indy',
    Logo: LogoIndy,
    badge: '💰 Le moins cher du marché',
    badgeClass: 'bg-red-500',
    tagline: 'Fiscalité et comptabilité automatisées pour indépendants',
    rating: 4.4,
    reviewCount: 980,
    price: 'À partir de 7€/mois',
    essai: '1 mois gratuit',
    pros: [
      'Déclaration fiscale automatique (2042, CFE…)',
      'Import bancaire et catégorisation IA',
      'Interface ultra-simple, prise en main en 10 min',
      'Tarif imbattable pour les indépendants',
      'Liasse fiscale incluse',
    ],
    cons: [
      'Facturation moins complète que Freebe',
      'Support uniquement par email (délai 24-48h)',
    ],
    ctaUrl: '/go/indy',
    ctaText: 'Essayer Indy →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': '1 mois',
      'Devis & factures': true,
      'Déclaration URSSAF': true,
      'Synchronisation bancaire': true,
      'App mobile': false,
      'Multi-utilisateurs': false,
      'Comptabilité complète': true,
    },
    idealFor: 'Indépendants, micro-entrepreneurs fiscaux',
  },
  {
    id: 4,
    name: 'Tiime',
    Logo: LogoTiime,
    badge: '🤝 Favori des experts-comptables',
    badgeClass: 'bg-sky-600',
    tagline: 'Le pont entre le chef d\'entreprise et son comptable',
    rating: 4.3,
    reviewCount: 720,
    price: 'Gratuit (version de base)',
    essai: 'Version gratuite disponible',
    pros: [
      'Gratuit pour la facturation de base',
      'Conçu pour la collaboration comptable',
      'Gestion des notes de frais intégrée',
      'Tableau de bord trésorerie en temps réel',
    ],
    cons: [
      'Fonctions avancées payantes',
      'Moins adapté si pas d\'expert-comptable',
    ],
    ctaUrl: '/go/tiime',
    ctaText: 'Essayer Tiime →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': 'Plan gratuit',
      'Devis & factures': true,
      'Déclaration URSSAF': false,
      'Synchronisation bancaire': true,
      'App mobile': true,
      'Multi-utilisateurs': true,
      'Comptabilité complète': false,
    },
    idealFor: 'TPE avec expert-comptable',
  },
  {
    id: 5,
    name: 'Shine',
    Logo: LogoShine,
    badge: '🏦 Banque + facturation intégrées',
    badgeClass: 'bg-indigo-500',
    tagline: 'Compte pro + outils de gestion tout-en-un',
    rating: 4.2,
    reviewCount: 1240,
    price: 'À partir de 7,90€/mois',
    essai: '1 mois offert',
    pros: [
      'Compte bancaire professionnel intégré',
      'Facturation, devis, relances inclus',
      'Carte Mastercard pro incluse',
      'Déclarations URSSAF depuis l\'app',
      'Dépôt de capital en ligne',
    ],
    cons: [
      'Comptabilité non incluse (à connecter)',
      'Pas adapté aux entreprises avec TVA complexe',
    ],
    ctaUrl: '/go/shine',
    ctaText: 'Essayer Shine →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': '1 mois',
      'Devis & factures': true,
      'Déclaration URSSAF': true,
      'Synchronisation bancaire': true,
      'App mobile': true,
      'Multi-utilisateurs': false,
      'Comptabilité complète': false,
    },
    idealFor: 'Auto-entrepreneurs, créateurs de société',
  },
  {
    id: 6,
    name: 'Sellsy',
    Logo: LogoSellsy,
    badge: '🚀 CRM + facturation = combo puissant',
    badgeClass: 'bg-blue-700',
    tagline: 'Solution complète : CRM, facturation, gestion commerciale',
    rating: 4.1,
    reviewCount: 850,
    price: 'À partir de 29€/mois',
    essai: '15 jours gratuits',
    pros: [
      'CRM intégré à la facturation',
      'Pipeline commercial visuel',
      'Catalogue produits / services avancé',
      'Gestion des abonnements récurrents',
      'API et intégrations nombreuses',
    ],
    cons: [
      'Prise en main plus longue',
      'Surdimensionné pour un freelance solo',
    ],
    ctaUrl: '/go/sellsy',
    ctaText: 'Essayer Sellsy →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': '15 jours',
      'Devis & factures': true,
      'Déclaration URSSAF': false,
      'Synchronisation bancaire': true,
      'App mobile': true,
      'Multi-utilisateurs': true,
      'Comptabilité complète': false,
    },
    idealFor: 'PME avec activité commerciale',
  },
  {
    id: 7,
    name: 'Finom',
    Logo: LogoFinom,
    badge: '🌍 Idéal pour les structures internationales',
    badgeClass: 'bg-purple-600',
    tagline: 'Paiements internationaux + facturation multi-devises',
    rating: 4.0,
    reviewCount: 430,
    price: 'À partir de 0€/mois (plan Solo)',
    essai: 'Plan gratuit disponible',
    pros: [
      'Multi-devises (EUR, USD, GBP…)',
      'IBAN européen inclus',
      'Cashback sur les dépenses carte',
      'Facturation en ligne rapide',
    ],
    cons: [
      'Moins adapté à la fiscalité française spécifique',
      'Support client perfectible selon les avis',
    ],
    ctaUrl: '/go/finom',
    ctaText: 'Essayer Finom →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': 'Plan gratuit',
      'Devis & factures': true,
      'Déclaration URSSAF': false,
      'Synchronisation bancaire': true,
      'App mobile': true,
      'Multi-utilisateurs': false,
      'Comptabilité complète': false,
    },
    idealFor: 'Freelances avec clients internationaux',
  },
  {
    id: 8,
    name: 'MyUnisoft',
    Logo: LogoMyUnisoft,
    badge: '📊 Solution cabinet comptable',
    badgeClass: 'bg-gray-700',
    tagline: 'Logiciel comptable pro connecté à l\'entreprise cliente',
    rating: 4.2,
    reviewCount: 310,
    price: 'Sur devis (via cabinet comptable)',
    essai: 'Démo sur demande',
    pros: [
      'Liasse fiscale et bilans complets',
      'Portail collaboratif expert-comptable / client',
      'Import automatique des flux bancaires',
      'Tableaux de bord financiers avancés',
    ],
    cons: [
      'Accès principalement via cabinet comptable',
      'Interface moins moderne que Pennylane',
    ],
    ctaUrl: '/go/myunisoft',
    ctaText: 'Demander une démo →',
    ctaAffiliate: true,
    features: {
      'Essai gratuit': 'Démo',
      'Devis & factures': true,
      'Déclaration URSSAF': false,
      'Synchronisation bancaire': true,
      'App mobile': false,
      'Multi-utilisateurs': true,
      'Comptabilité complète': true,
    },
    idealFor: 'Entreprises avec cabinet comptable',
  },
]

const ALL_FEATURES = ['Essai gratuit', 'Devis & factures', 'Déclaration URSSAF', 'Synchronisation bancaire', 'App mobile', 'Multi-utilisateurs', 'Comptabilité complète']

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: 'Quel est le meilleur logiciel de facturation pour un auto-entrepreneur en 2026 ?',
    answer: 'Pour un auto-entrepreneur, nous recommandons Freebe : interface intuitive, déclaration URSSAF intégrée, essai gratuit 30 jours sans carte bancaire, et tarif à 9,90€/mois. Indy est une excellente alternative si vous avez besoin de la fiscalité automatisée (déclarations 2042) à partir de 7€/mois.',
  },
  {
    question: 'Quelle différence entre un logiciel de facturation et un logiciel de comptabilité ?',
    answer: 'Un logiciel de facturation gère vos devis, factures, relances et paiements. Un logiciel de comptabilité va plus loin : il produit votre bilan, votre compte de résultat, votre liasse fiscale. Pennylane, Indy et MyUnisoft couvrent les deux. Freebe, Tiime et Shine sont orientés facturation + gestion opérationnelle.',
  },
  {
    question: 'Y a-t-il des logiciels de facturation gratuits ?',
    answer: 'Oui : Tiime propose une version gratuite pour la facturation de base. Finom a un plan Solo gratuit. Freebe offre 3 factures gratuites par mois. Attention : les fonctions avancées (relances auto, synchronisation bancaire, déclarations) restent payantes. Pour un usage professionnel régulier, un plan payant entre 7€ et 30€/mois est recommandé.',
  },
  {
    question: 'Ces logiciels sont-ils conformes à la facture électronique obligatoire 2026 ?',
    answer: 'La facture électronique devient obligatoire pour toutes les entreprises françaises à partir du 1er septembre 2026 (grandes entreprises) puis progressivement jusqu\'en 2027. Pennylane et MyUnisoft sont déjà conformes à la norme EN 16931. Freebe, Tiime et Sellsy annoncent leurs mises à jour pour 2026. Vérifiez la conformité de votre logiciel actuel avant l\'échéance.',
  },
  {
    question: 'Peut-on changer de logiciel de facturation facilement ?',
    answer: 'Oui. Tous les logiciels de ce comparatif proposent un export de vos données (CSV, PDF, XML). Pennylane et Indy offrent même une migration assistée depuis la concurrence. Prévoyez 2 à 4 heures pour une migration complète avec reprise des données historiques. Évitez de changer en milieu d\'exercice fiscal pour simplifier votre comptabilité.',
  },
  {
    question: 'Quel logiciel choisir si j\'ai déjà un expert-comptable ?',
    answer: 'Pennylane est le choix n°1 si votre expert-comptable l\'utilise déjà (nombreux cabinets partenaires). Tiime et MyUnisoft sont également très bien intégrés avec les cabinets. Freebe propose un export compatible avec la plupart des logiciels comptables. Demandez d\'abord à votre comptable quel outil il préfère.',
  },
]

// ─── JSON-LD ItemList ────────────────────────────────────────────────────────

function buildItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Comparatif logiciels de facturation 2026',
    description: 'Les 8 meilleurs logiciels de facturation pour freelances et auto-entrepreneurs',
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: p.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: p.rating,
          reviewCount: p.reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        offers: {
          '@type': 'Offer',
          price: p.price,
          priceCurrency: 'EUR',
        },
      },
    })),
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ComparatifPage() {
  const itemListJsonLd = buildItemListJsonLd()
  const faqJsonLd = buildFaqJsonLd(faqs)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Comparatif logiciels de facturation', path: '/comparatif' },
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
          <a href="/" className="hover:text-[#4f46e5]">Accueil</a>
          <span className="mx-2">›</span>
          <span className="text-gray-800 font-medium">Comparatif logiciels de facturation</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 text-xs font-bold text-indigo-700 uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Mis à jour octobre 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Comparatif des 8 meilleurs logiciels<br className="hidden md:block"/> de facturation en 2026
          </h1>

          {/* Verdict immédiat (signal GEO) */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6">
            <p className="font-bold text-indigo-900 mb-2">✅ Notre verdict en 30 secondes</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              <strong>Freebe</strong> est notre recommandation n°1 pour freelances et auto-entrepreneurs (essai 30j gratuit, déclaration URSSAF intégrée).
              <strong> Pennylane</strong> si vous voulez facturation + comptabilité dans un seul outil.
              <strong> Indy</strong> pour le meilleur rapport qualité/prix à partir de 7€/mois.
            </p>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Nous avons testé et comparé les 8 principaux logiciels de facturation du marché français sur 25 critères : tarifs, facilité d'utilisation, fonctionnalités, support client, conformité réglementaire. Chaque outil a été évalué en conditions réelles pendant 30 jours minimum. Mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}.
          </p>
        </div>

        {/* Cartes produits */}
        <section aria-label="Liste des logiciels de facturation" className="space-y-5 mb-14">
          {products.map((p) => (
            <article
              key={p.id}
              id={`logiciel-${p.name.toLowerCase().replace(/\s/g, '-')}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              {/* Bandeau badge */}
              <div className={`${p.badgeClass} text-white text-sm font-bold px-4 py-2.5 flex items-center gap-3`}>
                <span className="bg-white/20 rounded-full w-7 h-7 flex items-center justify-center font-extrabold text-sm shrink-0 border border-white/30">
                  {p.id}
                </span>
                <span>{p.badge}</span>
              </div>

              <div className="p-5 md:p-6">
                <div className="flex flex-col md:flex-row gap-5">

                  {/* Colonne gauche : logo + note + essai */}
                  <div className="md:w-52 shrink-0">
                    <div className="mb-3">
                      <p.Logo />
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <Stars rating={p.rating} />
                      <span className="font-bold text-gray-900 text-sm" itemProp="ratingValue">{p.rating}</span>
                      <span className="text-gray-400 text-xs">({p.reviewCount.toLocaleString('fr-FR')} avis)</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3 italic">{p.tagline}</p>
                    <div className="bg-green-50 border border-green-100 rounded-lg px-3 py-2 text-xs font-semibold text-green-700 inline-flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                      {p.essai}
                    </div>
                  </div>

                  {/* Colonne centrale : pros/cons + prix */}
                  <div className="flex-1 min-w-0">
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Points forts</p>
                        <ul className="space-y-1.5">
                          {p.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                              <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                              </svg>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">Points faibles</p>
                        <ul className="space-y-1.5">
                          {p.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 112 0v4a1 1 0 11-2 0V7zm0 6a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"/>
                              </svg>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-500">💶 <strong className="text-gray-800">{p.price}</strong></span>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-xs text-gray-500">👤 Idéal pour : <strong className="text-gray-700">{p.idealFor}</strong></span>
                    </div>
                  </div>

                  {/* Colonne droite : CTA */}
                  <div className="md:w-44 shrink-0 flex flex-col justify-center">
                    <a
                      href={p.ctaUrl}
                      target={p.ctaUrl !== '#' ? '_blank' : undefined}
                      rel={p.ctaAffiliate ? 'nofollow sponsored noopener' : 'noopener'}
                      className="block w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold py-3.5 rounded-xl text-center transition-colors text-sm leading-tight"
                    >
                      {p.ctaText}
                    </a>
                    {p.ctaAffiliate && (
                      <p className="text-xs text-gray-400 text-center mt-2 leading-tight">Lien affilié — sans surcoût</p>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Tableau comparatif des fonctionnalités */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Tableau comparatif des fonctionnalités</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#4f46e5] text-white">
                  <th className="text-left px-4 py-3 font-bold rounded-tl-2xl w-44">Logiciel</th>
                  {ALL_FEATURES.map((f, i) => (
                    <th key={f} className={`text-center px-3 py-3 font-semibold text-xs ${i === ALL_FEATURES.length - 1 ? 'rounded-tr-2xl' : ''}`}>
                      {f}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {products.map((p, idx) => (
                  <tr key={p.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-bold text-gray-800">
                      <a href={`#logiciel-${p.name.toLowerCase().replace(/\s/g, '-')}`} className="hover:text-[#4f46e5] transition-colors">
                        {p.name}
                      </a>
                    </td>
                    {ALL_FEATURES.map((f) => {
                      const val = p.features[f as keyof typeof p.features]
                      return (
                        <td key={f} className="text-center px-3 py-3">
                          {typeof val === 'boolean' ? (
                            val ? (
                              <span className="text-green-500 font-bold text-base" title="Oui">✓</span>
                            ) : (
                              <span className="text-gray-300 font-bold text-base" title="Non">✗</span>
                            )
                          ) : (
                            <span className="text-xs text-gray-600 font-medium">{val}</span>
                          )}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notre méthode */}
        <section className="mb-14 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-900 mb-3">Notre méthode de test</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🔬</span>
              <div>
                <p className="font-bold text-gray-800 mb-1">Tests réels</p>
                <p>Chaque logiciel testé minimum 30 jours en conditions réelles avec de vraies factures et clients.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">📊</span>
              <div>
                <p className="font-bold text-gray-800 mb-1">25 critères analysés</p>
                <p>UX, tarifs, fonctionnalités, support, conformité réglementaire, intégrations tierces.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl shrink-0">🔄</span>
              <div>
                <p className="font-bold text-gray-800 mb-1">Mise à jour trimestrielle</p>
                <p>Tarifs et fonctionnalités vérifiés tous les 3 mois pour vous garantir l'information la plus récente.</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4 leading-relaxed">
            <strong>Transparence :</strong> certains liens de ce comparatif sont des liens affiliés (marqués &ldquo;lien affilié&rdquo;). Nous percevons une commission si vous souscrivez via nos liens, sans aucun surcoût pour vous. Cette rémunération n'influence pas nos recommandations, établies sur des critères objectifs.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Questions fréquentes sur les logiciels de facturation</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-xl p-5 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-3">
                  <span>{faq.question}</span>
                  <span className="text-[#4f46e5] text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Maillage interne */}
        <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
          <h3 className="font-extrabold text-gray-900 mb-4">Guides complémentaires</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '/guide', label: '→ Guide complet : choisir son logiciel de facturation' },
              { href: '/comparatif/freebe', label: '→ Avis Freebe 2026 : test complet' },
              { href: '/comparatif/pennylane', label: '→ Avis Pennylane 2026 : test complet' },
              { href: '/comparatif/indy', label: '→ Avis Indy 2026 : test complet' },
              { href: '/comparatif/tiime', label: '→ Avis Tiime 2026 : test complet' },
              { href: '/comparatif/shine', label: '→ Avis Shine 2026 : test complet' },
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-[#4f46e5] hover:text-[#3730a3] font-semibold text-sm transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
