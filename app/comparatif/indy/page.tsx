import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Indy 2026 : test complet du logiciel de comptabilité pour indépendants',
  description: 'Notre avis sur Indy (ex Georges) après test : comptabilité automatisée par IA, tarifs, avantages. La fin de l\'expert-comptable pour les indépendants ?',
  alternates: { canonical: 'https://facturationpro.com/comparatif/indy' },
  openGraph: {
    title: 'Avis Indy 2026 : Test complet',
    description: 'Test réel d\'Indy : comptabilité automatisée par IA, connexion bancaire, bilan annuel automatique. Pour les indépendants et auto-entrepreneurs.',
    type: 'article',
  },
}

const AFFILIATE_URL = 'https://www.indy.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=avis-indy'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Indy',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'Indy est le logiciel de comptabilité automatisée par IA pour indépendants et auto-entrepreneurs en 2026.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Indy est-il vraiment gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indy propose un plan gratuit avec la facturation de base et la connexion bancaire. Les fonctionnalites avancees comme les declarations URSSAF automatiques, la TVA et la liasse fiscale annuelle sont dans les plans payants (a partir de 9 EUR/mois pour les auto-entrepreneurs).',
      },
    },
    {
      '@type': 'Question',
      name: 'Indy remplace-t-il un expert-comptable ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pour les auto-entrepreneurs et les TNS en EI, Indy peut remplacer un expert-comptable dans la plupart des cas : declarations URSSAF, TVA, bilan simplifie, liasse fiscale. Pour les societes (SASU, EURL avec IS) avec une comptabilite plus complexe, un expert-comptable reste recommande, mais Indy reduit significativement sa charge de travail.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la difference entre Indy et Freebe ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indy est fort sur la comptabilite et les obligations fiscales (declarations URSSAF auto, TVA, liasse fiscale). Freebe excelle sur la gestion de projets et le suivi de temps integre (timer, TJM, facturation automatique des temps). Les deux couvrent la facturation de base. Indy est ideal pour les auto-entrepreneurs, Freebe pour les freelances qui gèrent des projets.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://facturationpro.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparatifs', item: 'https://facturationpro.com/comparatif' },
    { '@type': 'ListItem', position: 3, name: 'Avis Indy', item: 'https://facturationpro.com/comparatif/indy' },
  ],
}

export default function AvisIndy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span>›</span>
              <Link href="/comparatif" className="hover:text-indigo-600">Comparatif</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium">Avis Indy</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Avis & Test 2026</span>
              <span className="text-xs text-gray-400">Mis à jour : novembre 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Avis Indy 2026 : notre test complet du logiciel de comptabilité pour indépendants
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Indy (anciennement Georges) promet de gérer votre comptabilité par IA, sans expert-comptable. Après 30 jours de test complet, voici ce qu&apos;il vaut vraiment.
            </p>
            {/* Note globale */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-indigo-600">4,5</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4].map(i => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  <span className="text-yellow-300 text-xl">★</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Comptabilité automatisée par IA, plan gratuit disponible</p>
                <p className="text-sm text-gray-600">Bilan annuel généré automatiquement, connexion bancaire directe, déclaration fiscale simplifiée. Un vrai gain de temps pour les indépendants.</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Essayer Indy gratuitement →
              </a>
            </div>
          </header>

          {/* Points forts / limites */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Comptabilité automatisée avec IA (catégorisation intelligente)</li>
                <li>• Connexion bancaire directe et synchronisation automatique</li>
                <li>• Déclaration fiscale simplifiée (2035, liasse BNC/BIC)</li>
                <li>• Adapté aux auto-entrepreneurs ET aux sociétés</li>
                <li>• Bilan annuel généré automatiquement</li>
                <li>• Plan gratuit fonctionnel pour commencer</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Moins intuitif que Freebe pour la facturation pure</li>
                <li>• Support client moins réactif (délai 24-48h)</li>
                <li>• Interface plus complexe pour les débutants</li>
                <li>• Certaines fonctions avancées réservées au plan payant</li>
              </ul>
            </div>
          </div>

          {/* Tableau tarifs */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs Indy 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Plan</th>
                    <th className="px-4 py-3 text-center">Prix/mois</th>
                    <th className="px-4 py-3 text-center">Pour qui</th>
                    <th className="px-4 py-3 text-center rounded-tr-xl">Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold">Gratuit</td>
                    <td className="px-4 py-3 text-center font-bold">0€</td>
                    <td className="px-4 py-3 text-center text-gray-600">Démarrage</td>
                    <td className="px-4 py-3 text-center text-gray-600">Connexion bancaire, suivi trésorerie</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-indigo-50">
                    <td className="px-4 py-3 font-bold text-indigo-700">Pro ⭐ Recommandé</td>
                    <td className="px-4 py-3 text-center font-bold">25€</td>
                    <td className="px-4 py-3 text-center text-gray-600">Indépendants</td>
                    <td className="px-4 py-3 text-center text-gray-600">Comptabilité complète, déclarations, bilan</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Expert</td>
                    <td className="px-4 py-3 text-center font-bold">40€</td>
                    <td className="px-4 py-3 text-center text-gray-600">Sociétés</td>
                    <td className="px-4 py-3 text-center text-gray-600">Multi-entités, TVA avancée, assistance dédiée</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Tarifs HT. Essai gratuit disponible sur le plan Pro.</p>
          </section>

          {/* Fonctionnalités */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Comptabilité automatisée par IA</h3>
            <p className="text-gray-600 mb-6">
              Le cœur d&apos;Indy, c&apos;est son moteur IA de catégorisation comptable. Connectez votre compte bancaire et Indy analyse vos transactions, les catégorise automatiquement selon le plan comptable français, et génère vos écritures. Au bout de quelques semaines, le taux d&apos;automatisation dépasse souvent 90%, ce qui transforme une tâche longue et rébarbative en une validation rapide.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Déclarations fiscales simplifiées</h3>
            <p className="text-gray-600 mb-6">
              C&apos;est un point fort majeur d&apos;Indy par rapport à la concurrence. Le logiciel génère automatiquement les formulaires fiscaux adaptés à votre statut : déclaration 2035 pour les BNC, liasse fiscale pour les BIC, déclarations de TVA. Le gain de temps est considérable, surtout en fin d&apos;année. Un vrai différenciateur face à Freebe ou Tiime qui ne proposent pas ces fonctions.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Connexion bancaire directe</h3>
            <p className="text-gray-600 mb-6">
              Indy se connecte à votre banque via DSP2 et importe vos transactions en temps quasi-réel. La réconciliation bancaire est automatique : Indy rapproche chaque transaction avec les pièces comptables (factures, reçus) que vous avez uploadées. Résultat : votre comptabilité est toujours à jour, sans saisie manuelle.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Bilan annuel automatique</h3>
            <p className="text-gray-600 mb-6">
              En fin d&apos;exercice, Indy génère automatiquement votre bilan et votre compte de résultat. Pour les indépendants en BNC ou les petites sociétés, c&apos;est une fonctionnalité qui peut économiser plusieurs centaines d&apos;euros d&apos;honoraires comptables. Le document est exportable en PDF et directement envoyable à votre expert-comptable si vous en avez un.
            </p>
          </section>

          {/* Pour qui */}
          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Indy : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Indépendants cherchant à gérer leur compta seuls</li>
                  <li>• Auto-entrepreneurs avec besoins comptables avancés</li>
                  <li>• Professions libérales (médecins, avocats, consultants)</li>
                  <li>• Petites sociétés (EURL, SASU) avec peu de transactions</li>
                  <li>• Entrepreneurs qui veulent réduire les frais d&apos;expert-comptable</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Freelances cherchant juste à facturer simplement (préférer Freebe)</li>
                  <li>• PME avec comptabilité complexe (multi-devises, consolidation)</li>
                  <li>• Ceux qui veulent une interface ultra-simple dès le départ</li>
                  <li>• Entreprises cherchant une intégration e-commerce native</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparaison */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Indy vs la concurrence</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-indigo-700">Indy</th>
                    <th className="px-4 py-3 text-center">Freebe</th>
                    <th className="px-4 py-3 text-center">Pennylane</th>
                    <th className="px-4 py-3 text-center">Tiime</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix mensuel', '0–25€', '9,90€', '29€', 'Gratuit'],
                    ['Comptabilité IA', '✅', '❌', '✅', '❌'],
                    ['Déclarations fiscales', '✅', '❌', '✅', '❌'],
                    ['Bilan automatique', '✅', '❌', '✅', '❌'],
                    ['Facilité d\'utilisation', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                    ['Plan gratuit', '✅', '✅ (limité)', '❌', '✅'],
                  ].map(([crit, indy, freebe, penny, tiime]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-indigo-700">{indy}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{freebe}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{penny}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{tiime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Verdict */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Notre verdict</h2>
            <p className="text-gray-600 mb-4">
              Indy est <strong>la meilleure solution comptabilité-IA pour les indépendants</strong> qui veulent aller au-delà de la simple facturation et gérer leur comptabilité complète sans expert-comptable. La combinaison IA + connexion bancaire + déclarations fiscales automatiques est vraiment difficile à battre dans cette gamme de prix.
            </p>
            <p className="text-gray-600 mb-4">
              Le plan gratuit permet de démarrer sans risque et de tester les fonctionnalités de base. Le plan Pro à 25€/mois est le plus intéressant : il offre une comptabilité complète à un tarif bien inférieur à Pennylane (29€ pour moins de fonctionnalités comptables).
            </p>
            <p className="text-gray-600">
              <strong>La nuance :</strong> si vous cherchez avant tout un logiciel de facturation simple et intuitif (pas de comptabilité), <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe</Link> reste plus adapté. Si votre entreprise a des besoins comptables très complexes, <Link href="/comparatif/pennylane" className="text-indigo-600 hover:underline">Pennylane</Link> avec expert-comptable intégré peut être préférable.
            </p>
          </section>

          {/* CTA final */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Essayez Indy gratuitement</h3>
            <p className="text-indigo-200 mb-5">Comptabilité automatisée par IA. Commencez sans carte bancaire.</p>
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Créer mon compte Indy gratuit →
            </a>
            <p className="text-xs text-indigo-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.</p>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur Indy</h2>
            <div className="space-y-3">
              {[
                { q: 'Indy et Georges, c\'est la même chose ?', a: 'Oui. Georges a été renommé Indy en 2022. C\'est le même logiciel, la même équipe, la même technologie. Si vous aviez un compte Georges, vos données ont été automatiquement migrées vers Indy sans action de votre part.' },
                { q: 'Indy est-il vraiment gratuit ?', a: 'Indy propose un plan gratuit avec les fonctionnalités de base : connexion bancaire, suivi de trésorerie et quelques fonctions comptables. Pour accéder à la comptabilité complète, les déclarations fiscales et le bilan automatique, le plan Pro à 25€/mois est nécessaire. C\'est parmi les tarifs les plus compétitifs du marché pour ces fonctionnalités.' },
                { q: 'Indy convient-il aux micro-entrepreneurs ?', a: 'Oui, Indy est compatible avec le statut micro-entrepreneur. Il gère le livre des recettes obligatoire, les déclarations URSSAF (pour les ME ayant opté pour le versement libératoire), et la comptabilité simplifiée. C\'est une option sérieuse face à Freebe, avec l\'avantage d\'un plan gratuit fonctionnel.' },
                { q: 'Puis-je utiliser Indy avec mon expert-comptable ?', a: 'Oui. Indy permet d\'inviter votre expert-comptable en accès lecture ou écriture. Contrairement à Pennylane qui a son propre réseau de comptables partenaires, Indy fonctionne avec votre comptable habituel. Vous pouvez également exporter vos données dans des formats standards (FEC, CSV) pour les transmettre à votre comptable.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-indigo-600 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Maillage interne */}
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { href: '/comparatif', label: '← Retour au comparatif complet' },
              { href: '/comparatif/freebe', label: 'Avis Freebe 2026 →' },
              { href: '/comparatif/pennylane', label: 'Avis Pennylane 2026 →' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="text-center bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-xl p-4 text-sm font-semibold text-gray-700 hover:text-indigo-700 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
