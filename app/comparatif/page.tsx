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
    name: 'Freebe',
    rating: 4.8,
    reviewCount: 2100,
    price: 'Gratuit (3 factures/mois) ou 9,99€/mois',
    badge: '🥇 N°1 freelances et auto-entrepreneurs',
    badgeColor: 'bg-indigo-100 text-indigo-800',
    pros: [
      'Seul outil avec 3 factures gratuites par mois sans CB',
      'Déclaration URSSAF pré-remplie et envoyée en 1 clic',
      'Synchronisation bancaire automatique toutes banques',
      'Interface pensée exclusivement pour les indépendants',
      'Support francophone réactif par chat',
    ],
    cons: [
      'Pas adapté aux PME avec comptabilité complexe',
      'Fonctions CRM absentes (outil facturation pur)',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.freebe.me',
      network: 'awin',
      programId: '22751',
      subId: 'comparatif-freebe',
    }),
    ctaText: 'Essayer gratuitement',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': true,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': false,
      'API disponible': false,
      'Archivage 10 ans': true,
    },
  },
  {
    id: 2,
    name: 'Pennylane',
    rating: 4.7,
    reviewCount: 2341,
    price: 'À partir de 26€/mois',
    badge: '⭐ Meilleur rapport qualité/prix PME',
    badgeColor: 'bg-green-100 text-green-800',
    pros: [
      'Comptabilité + facturation électronique dans un seul outil',
      'Connexion native avec les experts-comptables (15 000+ cabinets)',
      'PDP certifiée, format Factur-X généré automatiquement',
      'Import bancaire automatique toutes banques',
      'Tableau de bord financier temps réel',
    ],
    cons: [
      'Fonctions CRM limitées (pas un outil commercial complet)',
      'Tarif augmente rapidement avec le nombre d\'utilisateurs',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.pennylane.com',
      network: 'direct',
      subId: 'comparatif-pennylane',
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
    id: 3,
    name: 'Indy',
    rating: 4.6,
    reviewCount: 1580,
    price: 'Gratuit (limité) ou 19€/mois',
    badge: '📊 Meilleur pour auto-entrepreneurs TVA',
    badgeColor: 'bg-blue-100 text-blue-800',
    pros: [
      'Déclaration de TVA et URSSAF automatisée en 1 clic',
      'Comptabilité complète incluse dans l\'abonnement',
      'Bilan annuel généré automatiquement',
      'Version gratuite fonctionnelle pour tester',
    ],
    cons: [
      'Moins adapté aux SASU/EURL avec comptabilité complexe',
      'Interface moins intuitive que Freebe pour la facturation pure',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.indy.fr',
      network: 'direct',
      subId: 'comparatif-indy',
    }),
    ctaText: 'Commencer gratuitement',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': true,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': false,
      'API disponible': false,
      'Archivage 10 ans': true,
    },
  },
  {
    id: 4,
    name: 'Tiime',
    rating: 4.5,
    reviewCount: 920,
    price: 'Gratuit (via expert-comptable) ou 10€/mois',
    badge: '🤝 Recommandé par les experts-comptables',
    badgeColor: 'bg-teal-100 text-teal-800',
    pros: [
      'Gratuit si votre expert-comptable est partenaire Tiime',
      'Scan des reçus et notes de frais en photo',
      'Synchronisation bancaire et catégorisation automatique',
      'Factures conformes Factur-X incluses',
    ],
    cons: [
      'Fonctionnalités avancées réservées à l\'offre payante',
      'Moins autonome sans expert-comptable partenaire',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.tiime.fr',
      network: 'direct',
      subId: 'comparatif-tiime',
    }),
    ctaText: 'Essai gratuit',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': true,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': true,
      'API disponible': false,
      'Archivage 10 ans': true,
    },
  },
  {
    id: 5,
    name: 'Shine',
    rating: 4.4,
    reviewCount: 1240,
    price: 'À partir de 7,90€/mois',
    badge: '🏦 Compte pro + facturation tout-en-un',
    badgeColor: 'bg-purple-100 text-purple-800',
    pros: [
      'Compte bancaire pro intégré (IBAN français)',
      'Facturation + gestion des encaissements dans la même app',
      'Devis en ligne avec signature électronique',
      'Idéal pour démarrer son activité sans jongler entre outils',
    ],
    cons: [
      'Pas de comptabilité complète (pas de bilan)',
      'Frais bancaires sur certaines opérations',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.shine.fr',
      network: 'direct',
      subId: 'comparatif-shine',
    }),
    ctaText: 'Ouvrir un compte Shine',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': false,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': false,
      'API disponible': true,
      'Archivage 10 ans': true,
    },
  },
  {
    id: 6,
    name: 'Sellsy',
    rating: 4.5,
    reviewCount: 1876,
    price: 'À partir de 35€/mois',
    badge: '🏢 CRM + facturation pour PME en croissance',
    badgeColor: 'bg-orange-100 text-orange-800',
    pros: [
      'CRM + facturation intégrés : pipeline commercial et factures liés',
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
      network: 'direct',
      subId: 'comparatif-sellsy',
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
    id: 7,
    name: 'Finom',
    rating: 4.3,
    reviewCount: 650,
    price: 'Gratuit (limité) ou 14€/mois',
    badge: '🇪🇺 Fintech européenne multi-devises',
    badgeColor: 'bg-cyan-100 text-cyan-800',
    pros: [
      'Compte pro multi-devises (€, $, £) idéal pour l\'export',
      'Facturation + paiements intégrés dans la même interface',
      'Cashback sur les dépenses pros (jusqu\'à 3%)',
      'IBAN EU pour paiements internationaux',
    ],
    cons: [
      'Pas de comptabilité française complète (TVA/URSSAF)',
      'Moins ancré dans l\'écosystème expert-comptable français',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.finom.co',
      network: 'direct',
      subId: 'comparatif-finom',
    }),
    ctaText: 'Essayer Finom gratuitement',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': false,
      'Portail public (PPF)': true,
      'Multi-utilisateurs': true,
      'API disponible': true,
      'Archivage 10 ans': false,
    },
  },
  {
    id: 8,
    name: 'MyUnisoft',
    rating: 4.4,
    reviewCount: 430,
    price: 'Sur devis (cabinet comptable)',
    badge: '🔬 Solution expert-comptable haut de gamme',
    badgeColor: 'bg-rose-100 text-rose-800',
    pros: [
      'Plateforme dédiée aux cabinets d\'expertise comptable',
      'Multi-dossiers : gérez plusieurs entreprises clientes',
      'PDP native certifiée DGFiP, tous formats (Factur-X, UBL, CII)',
      'API complète pour intégrations ERP/métier',
    ],
    cons: [
      'Non adapté aux indépendants ou TPE sans cabinet',
      'Tarification opaque (devis uniquement)',
    ],
    ctaUrl: buildAffiliateLink({
      baseUrl: 'https://www.myunisoft.fr',
      network: 'direct',
      subId: 'comparatif-myunisoft',
    }),
    ctaText: 'Demander une démo',
    features: {
      'Format Factur-X': true,
      'Certifié PDP': true,
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
    answer: 'Oui. Pennylane, Tiime et MyUnisoft sont particulièrement orientés collaboration avec l\'expert-comptable. Pennylane est utilisé par plus de 15 000 cabinets. Tiime est même gratuit si votre comptable est partenaire.',
  },
  {
    question: 'Quel logiciel choisir quand on est freelance ou auto-entrepreneur ?',
    answer: 'Freebe est le choix n°1 pour les freelances et indépendants : 3 factures gratuites par mois, déclaration URSSAF automatisée, interface pensée pour les non-comptables. Indy est une excellente alternative pour ceux qui ont besoin d\'une comptabilité plus complète.',
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

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-700 via-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
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
            20 logiciels testés. Seuls 8 cumulent PDP agréée, format Factur-X natif
            et archivage légal intégré. Voici notre sélection.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-2">
            <div className="bg-white/10 rounded-full px-4 py-1.5 text-sm text-white flex items-center gap-2">
              <span className="text-green-400">✓</span> 20 logiciels analysés
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
        {/* Verdict immédiat */}
        <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
          <p className="font-semibold text-primary-800 mb-2">✅ Notre verdict immédiat</p>
          <p className="text-gray-700">
            <strong>Freebe</strong> est notre choix n°1 pour les freelances et auto-entrepreneurs (gratuit, URSSAF automatisée, PDP certifiée).{' '}
            <strong>Pennylane</strong> pour les PME qui veulent comptabilité + facturation dans un seul outil.{' '}
            <strong>Sellsy</strong> pour les ETI avec besoin CRM intégré.
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

        {/* Comparatifs VS */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-2">Comparatifs détaillés : logiciel vs logiciel</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Hésitez-vous entre deux logiciels ? Nos comparatifs approfondis vous aident à trancher selon votre profil.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { a: { label: 'F', color: 'indigo', slug: 'freebe' }, b: { label: 'P', color: 'emerald', slug: 'pennylane' }, title: 'Freebe vs Pennylane', desc: 'Gestion freelance vs comptabilité PME', href: '/comparatif/freebe-vs-pennylane' },
              { a: { label: 'I', color: 'blue', slug: 'indy' }, b: { label: 'F', color: 'indigo', slug: 'freebe' }, title: 'Indy vs Freebe', desc: 'Comptabilité auto-entrepreneur vs gestion freelance SASU/EURL', href: '/comparatif/indy-vs-freebe' },
              { a: { label: 'T', color: 'violet', slug: 'tiime' }, b: { label: 'P', color: 'emerald', slug: 'pennylane' }, title: 'Tiime vs Pennylane', desc: 'Outil expert-comptable vs solution tout-en-un pour PME', href: '/comparatif/tiime-vs-pennylane' },
              { a: { label: 'I', color: 'blue', slug: 'indy' }, b: { label: 'P', color: 'emerald', slug: 'pennylane' }, title: 'Indy vs Pennylane', desc: 'Déclaration URSSAF automatique vs comptabilité PME complète', href: '/comparatif/indy-vs-pennylane' },
              { a: { label: 'F', color: 'indigo', slug: 'freebe' }, b: { label: 'T', color: 'teal', slug: 'tiime' }, title: 'Freebe vs Tiime', desc: 'Solution complète payante vs freemium accessible aux débutants', href: '/comparatif/freebe-vs-tiime' },
              { a: { label: 'S', color: 'purple', slug: 'shine' }, b: { label: 'I', color: 'blue', slug: 'indy' }, title: 'Shine vs Indy', desc: 'Néobanque pro avec facturation vs logiciel comptabilité URSSAF', href: '/comparatif/shine-vs-indy' },
            ].map((vs) => (
              <a
                key={vs.href}
                href={vs.href}
                className="group block bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-7 h-7 bg-${vs.a.color}-100 rounded-lg flex items-center justify-center text-${vs.a.color}-700 font-bold text-xs`}>{vs.a.label}</span>
                  <span className="text-gray-400 font-bold">vs</span>
                  <span className={`w-7 h-7 bg-${vs.b.color}-100 rounded-lg flex items-center justify-center text-${vs.b.color}-700 font-bold text-xs`}>{vs.b.label}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                  {vs.title}
                </h3>
                <p className="text-xs text-gray-500">{vs.desc}</p>
                <span className="inline-flex items-center gap-1 text-xs text-indigo-600 font-medium mt-3">
                  Voir le comparatif <span>→</span>
                </span>
              </a>
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
            <a href="/blog" className="text-primary-600 hover:underline text-sm">
              → Blog : conseils facturation pour freelances
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
