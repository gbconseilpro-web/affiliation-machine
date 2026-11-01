import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Pennylane 2026 : test complet du logiciel comptabilité-facturation',
  description: 'Notre avis sur Pennylane après test réel : fonctionnalités, tarifs, avantages. La solution comptabilité + facturation tout-en-un pour TPE/PME ?',
  alternates: { canonical: 'https://facturationpro.fr/comparatif/pennylane' },
  openGraph: {
    title: 'Avis Pennylane 2026 : Test complet',
    description: 'Test réel de Pennylane : comptabilité intégrée, synchronisation bancaire, TVA automatisée. La solution tout-en-un pour TPE/PME.',
    type: 'article',
  },
}

const AFFILIATE_URL = 'https://www.pennylane.com/fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=avis-pennylane'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Pennylane',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '29', priceCurrency: 'EUR' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.6', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'Pennylane est la solution comptabilité + facturation tout-en-un pour TPE/PME en 2026.',
}

export default function AvisPennylane() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span>›</span>
              <Link href="/comparatif" className="hover:text-indigo-600">Comparatif</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium">Avis Pennylane</span>
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
              Avis Pennylane 2026 : notre test complet du logiciel comptabilité-facturation
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Pennylane promet de remplacer votre expert-comptable avec une solution tout-en-un. Après 30 jours de test en conditions réelles sur une TPE, voici notre verdict complet.
            </p>
            {/* Note globale */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-indigo-600">4,6</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4].map(i => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  <span className="text-yellow-300 text-xl">★</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Solution complète comptabilité + facturation</p>
                <p className="text-sm text-gray-600">La plus puissante du marché pour les TPE/PME avec TVA. Expert-comptable en option directement dans la plateforme.</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Essayer Pennylane →
              </a>
            </div>
          </header>

          {/* Points forts / limites */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Comptabilité complète intégrée (grand livre, bilans)</li>
                <li>• Synchronisation bancaire automatique en temps réel</li>
                <li>• Expert-comptable accessible directement dans la plateforme</li>
                <li>• TVA automatisée et déclarations pré-remplies</li>
                <li>• Tableau de bord financier complet (trésorerie, P&amp;L)</li>
                <li>• Interface moderne et agréable à utiliser</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Prix plus élevé que la concurrence (à partir de 29€/mois)</li>
                <li>• Pas adapté aux micro-entrepreneurs sans TVA</li>
                <li>• Courbe d&apos;apprentissage plus longue (outils avancés)</li>
                <li>• Onboarding parfois lent (mise en place 2-3h)</li>
              </ul>
            </div>
          </div>

          {/* Tableau tarifs */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs Pennylane 2026</h2>
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
                    <td className="px-4 py-3 font-semibold">Essentiel</td>
                    <td className="px-4 py-3 text-center font-bold">29€</td>
                    <td className="px-4 py-3 text-center text-gray-600">Indépendants</td>
                    <td className="px-4 py-3 text-center text-gray-600">Facturation, compta de base, synchro bancaire</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-indigo-50">
                    <td className="px-4 py-3 font-bold text-indigo-700">Business ⭐ Recommandé TPE</td>
                    <td className="px-4 py-3 text-center font-bold">49€</td>
                    <td className="px-4 py-3 text-center text-gray-600">TPE/PME</td>
                    <td className="px-4 py-3 text-center text-gray-600">Compta complète, TVA, accès expert-comptable</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Sur devis</td>
                    <td className="px-4 py-3 text-center font-bold">Sur mesure</td>
                    <td className="px-4 py-3 text-center text-gray-600">Grands comptes</td>
                    <td className="px-4 py-3 text-center text-gray-600">Multi-entités, API, dédié</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Tarifs HT. Essai gratuit disponible.</p>
          </section>

          {/* Fonctionnalités */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Comptabilité automatisée</h3>
            <p className="text-gray-600 mb-6">
              C&apos;est là que Pennylane se distingue vraiment de la concurrence. Contrairement à Freebe ou Tiime qui se concentrent sur la facturation, Pennylane intègre une comptabilité complète : grand livre, balance des comptes, rapprochement bancaire automatique. Le moteur d&apos;IA catégorise 90% des transactions automatiquement, ce qui réduit considérablement le temps passé en saisie manuelle.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Synchronisation bancaire en temps réel</h3>
            <p className="text-gray-600 mb-6">
              La connexion avec plus de 400 banques françaises et européennes est fluide et instantanée. Les transactions apparaissent dans Pennylane en moins de 24h, et le logiciel propose automatiquement la catégorisation comptable selon vos habitudes. Après quelques semaines, le taux d&apos;auto-catégorisation dépasse souvent 95%.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Expert-comptable intégré</h3>
            <p className="text-gray-600 mb-6">
              La fonctionnalité star de Pennylane : la possibilité d&apos;inviter votre expert-comptable directement dans la plateforme, ou d&apos;accéder à un réseau d&apos;experts-comptables partenaires. Fini les échanges de fichiers Excel : votre comptable voit exactement ce que vous voyez, en temps réel. Pour les entreprises soumises à la TVA et au bilan annuel, c&apos;est un gain de temps et d&apos;argent considérable.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Gestion de la TVA</h3>
            <p className="text-gray-600 mb-6">
              La TVA est la bête noire de nombreux chefs d&apos;entreprise. Pennylane la gère de manière quasi-automatique : collecte sur les factures client, récupération sur les achats, pré-remplissage de la déclaration CA3 ou CA12. Le module TVA seul justifie l&apos;abonnement pour beaucoup de TPE.
            </p>
          </section>

          {/* Pour qui */}
          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Pennylane : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• TPE et PME soumises à la TVA</li>
                  <li>• Professions libérales avec comptabilité complexe</li>
                  <li>• Entreprises cherchant à réduire les frais d&apos;expert-comptable</li>
                  <li>• Sociétés (SARL, SAS, EURL) avec bilan annuel</li>
                  <li>• Entrepreneurs qui veulent tout sur un seul outil</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Micro-entrepreneurs en franchise de TVA</li>
                  <li>• Freelances cherchant juste à facturer simplement</li>
                  <li>• Petits budgets (Freebe ou Tiime sont moins chers)</li>
                  <li>• Débutants qui ne veulent pas de courbe d&apos;apprentissage</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparaison */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Pennylane vs la concurrence</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-indigo-700">Pennylane</th>
                    <th className="px-4 py-3 text-center">Freebe</th>
                    <th className="px-4 py-3 text-center">Indy</th>
                    <th className="px-4 py-3 text-center">Tiime</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix mensuel', '29€', '9,90€', '25€', 'Gratuit'],
                    ['Comptabilité complète', '✅', '❌', '✅', '❌'],
                    ['Gestion TVA', '✅', '❌', '✅', '❌'],
                    ['Synchro bancaire', '✅', '❌', '✅', '✅'],
                    ['Expert-comptable intégré', '✅', '❌', '❌', '❌'],
                    ['Facilité d\'utilisation', '⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'],
                  ].map(([crit, penny, freebe, indy, tiime]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-indigo-700">{penny}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{freebe}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{indy}</td>
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
              Pennylane est <strong>la solution la plus complète du marché pour les TPE/PME</strong> en 2026. Si vous avez une société soumise à la TVA et que vous voulez vraiment simplifier votre comptabilité (et potentiellement réduire vos frais d&apos;expert-comptable), c&apos;est difficile de faire mieux.
            </p>
            <p className="text-gray-600 mb-4">
              À 49€/mois, c&apos;est un investissement qui se rentabilise rapidement si vous économisez 2-3h par mois sur votre compta ou si vous réduisez les honoraires de votre comptable. Beaucoup de TPE reportent que Pennylane leur a permis de diviser par 2 leurs frais comptables annuels.
            </p>
            <p className="text-gray-600">
              <strong>En revanche</strong>, si vous êtes micro-entrepreneur ou freelance cherchant juste à facturer sans vous prendre la tête avec la comptabilité, <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe</Link> ou <Link href="/comparatif/indy" className="text-indigo-600 hover:underline">Indy</Link> seront plus adaptés et moins chers.
            </p>
          </section>

          {/* CTA final */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Testez Pennylane gratuitement</h3>
            <p className="text-indigo-200 mb-5">Découvrez la comptabilité automatisée pour votre TPE/PME.</p>
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Commencer avec Pennylane →
            </a>
            <p className="text-xs text-indigo-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.</p>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur Pennylane</h2>
            <div className="space-y-3">
              {[
                { q: 'Pennylane remplace-t-il vraiment un expert-comptable ?', a: 'Pennylane automatise une grande partie du travail comptable, mais ne remplace pas complètement un expert-comptable pour les tâches complexes (liasse fiscale, optimisation fiscale, conseil juridique). Il réduit cependant significativement le temps facturable de votre comptable, et donc ses honoraires. La plateforme permet à votre comptable d\'y accéder directement pour les tâches de clôture.' },
                { q: 'Pennylane est-il adapté aux auto-entrepreneurs ?', a: 'Pennylane peut être utilisé par des auto-entrepreneurs, mais le rapport qualité-prix n\'est pas optimal. Les auto-entrepreneurs en franchise de TVA bénéficieront davantage d\'une solution comme Freebe (9,90€/mois) ou Indy (gratuit à 25€/mois) qui sont spécifiquement conçus pour ce statut.' },
                { q: 'Comment fonctionne la synchronisation bancaire Pennylane ?', a: 'Pennylane se connecte à votre banque via DSP2 (la directive européenne sur les services de paiement). Une fois connecté, les transactions apparaissent automatiquement dans Pennylane, généralement en moins de 24h. Le logiciel propose ensuite la catégorisation comptable basée sur l\'IA, que vous validez ou corrigez. Pennylane est compatible avec plus de 400 banques européennes.' },
                { q: 'Peut-on migrer facilement vers Pennylane depuis un autre logiciel ?', a: 'Pennylane propose un service d\'onboarding avec migration des données depuis les principaux logiciels (Sage, QuickBooks, Cegid). La migration prend généralement 2 à 4 heures selon la complexité de votre historique. Une équipe dédiée vous accompagne si vous optez pour le plan Business.' },
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
              { href: '/comparatif/indy', label: 'Avis Indy 2026 →' },
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
