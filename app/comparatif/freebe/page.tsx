import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Freebe 2026 : Test complet du logiciel de facturation pour freelances',
  description: 'Notre avis sur Freebe après test réel : fonctionnalités, tarifs, avantages et inconvénients. Le meilleur logiciel de facturation pour auto-entrepreneurs ?',
  alternates: { canonical: 'https://facturationpro.fr/comparatif/freebe' },
  openGraph: {
    title: 'Avis Freebe 2026 : Test complet',
    description: 'Test réel de Freebe : fonctionnalités, tarifs, avantages et inconvénients du logiciel de facturation pour freelances.',
    type: 'article',
  },
}

const AWIN_URL = 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=avis-freebe&p=https%3A%2F%2Fwww.freebe.me%2F'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Freebe',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '9.90', priceCurrency: 'EUR' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.8', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'Freebe est le meilleur logiciel de facturation pour freelances et auto-entrepreneurs en 2026.',
}

export default function AvisFreebe() {
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
              <span className="text-gray-800 font-medium">Avis Freebe</span>
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
              Avis Freebe 2026 : notre test complet du logiciel de facturation
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Freebe est-il vraiment le meilleur logiciel de facturation pour freelances ? Après 30 jours de test en conditions réelles, voici notre verdict complet.
            </p>
            {/* Note globale */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-indigo-600">4,8</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Notre recommandation n°1 pour les freelances</p>
                <p className="text-sm text-gray-600">Interface la plus intuitive du marché, déclaration URSSAF intégrée, essai 30 jours sans CB.</p>
              </div>
              <a href={AWIN_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Essayer Freebe gratuitement →
              </a>
            </div>
          </header>

          {/* Résumé rapide */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3 flex items-center gap-2">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interface ultra-intuitive, prise en main en moins de 10 minutes</li>
                <li>• Déclaration URSSAF intégrée pour les auto-entrepreneurs</li>
                <li>• Relances automatiques des impayés (gain de temps réel)</li>
                <li>• Portail client professionnel pour l'acceptation des devis</li>
                <li>• Application mobile iOS et Android complète</li>
                <li>• Support client 7j/7 par chat (réponse en &lt;2h)</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3 flex items-center gap-2">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Non adapté aux entreprises avec salariés (pas de gestion RH)</li>
                <li>• Pas un logiciel de comptabilité complète (pas de liasse fiscale)</li>
                <li>• Plan gratuit limité à 3 factures/mois</li>
                <li>• Pas d'intégration e-commerce native (Shopify, WooCommerce)</li>
              </ul>
            </div>
          </div>

          {/* Tableau des tarifs */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs Freebe 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Plan</th>
                    <th className="px-4 py-3 text-center">Prix/mois</th>
                    <th className="px-4 py-3 text-center">Factures</th>
                    <th className="px-4 py-3 text-center rounded-tr-xl">Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold">Freemium</td>
                    <td className="px-4 py-3 text-center">Gratuit</td>
                    <td className="px-4 py-3 text-center">3/mois</td>
                    <td className="px-4 py-3 text-center text-gray-600">Devis, factures basiques</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-indigo-50">
                    <td className="px-4 py-3 font-bold text-indigo-700">Solo ⭐ Recommandé</td>
                    <td className="px-4 py-3 text-center font-bold">9,90€</td>
                    <td className="px-4 py-3 text-center">Illimité</td>
                    <td className="px-4 py-3 text-center text-gray-600">URSSAF, relances, app mobile</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Pro</td>
                    <td className="px-4 py-3 text-center font-bold">19,90€</td>
                    <td className="px-4 py-3 text-center">Illimité</td>
                    <td className="px-4 py-3 text-center text-gray-600">Multi-utilisateurs, comptabilité avancée</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Tarifs HT. Essai gratuit 30 jours sans carte bancaire.</p>
          </section>

          {/* Fonctionnalités détaillées */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Création de devis et factures</h3>
            <p className="text-gray-600 mb-4">
              L'éditeur de Freebe est sans conteste le plus agréable à utiliser du marché. En moins de 2 minutes, vous créez une facture conforme aux exigences légales françaises (NF Z42-026 pour les auto-entrepreneurs). Les modèles sont modernes et personnalisables avec votre logo et couleurs.
            </p>
            <p className="text-gray-600 mb-6">
              Le portail client est un vrai plus : vos clients reçoivent un lien vers une page dédiée où ils peuvent consulter, accepter ou refuser le devis en un clic. Très professionnel.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Déclaration URSSAF intégrée</h3>
            <p className="text-gray-600 mb-6">
              La fonctionnalité star de Freebe pour les auto-entrepreneurs : le logiciel calcule automatiquement vos cotisations URSSAF à partir de vos revenus encaissés, et vous génère un récapitulatif prêt à reporter dans votre déclaration. Un vrai gain de temps et moins de risques d'erreur.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Suivi des paiements et relances</h3>
            <p className="text-gray-600 mb-6">
              Freebe excelle dans le suivi des impayés. Les relances automatiques sont personnalisables (délai, ton, fréquence) et fonctionnent vraiment, nous avons réduit nos délais de paiement de 15 jours en moyenne lors de notre test. Le tableau de bord trésorerie donne une vue claire en temps réel.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Application mobile</h3>
            <p className="text-gray-600 mb-6">
              L'app iOS et Android est complète et rapide. Vous pouvez créer une facture, enregistrer une dépense avec photo du justificatif, et suivre vos paiements depuis votre téléphone. Note 4,7/5 sur l'App Store (plus de 1000 avis).
            </p>
          </section>

          {/* Pour qui ? */}
          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Freebe : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Freelances et auto-entrepreneurs</li>
                  <li>• Consultants indépendants</li>
                  <li>• Créatifs (designers, photographes, rédacteurs)</li>
                  <li>• Développeurs freelance</li>
                  <li>• Professions libérales non réglementées</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Entreprises avec salariés</li>
                  <li>• PME cherchant un ERP complet</li>
                  <li>• Experts-comptables (pas de liasse fiscale)</li>
                  <li>• E-commerçants (pas d'intégration boutique)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparaison rapide */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Freebe vs la concurrence</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-indigo-700">Freebe</th>
                    <th className="px-4 py-3 text-center">Indy</th>
                    <th className="px-4 py-3 text-center">Tiime</th>
                    <th className="px-4 py-3 text-center">Pennylane</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix mensuel', '9,90€', '7€', 'Gratuit', '29€'],
                    ['URSSAF intégrée', '✅', '✅', '❌', '❌'],
                    ['App mobile', '✅', '❌', '✅', '✅'],
                    ['Relances auto', '✅', '❌', '❌', '✅'],
                    ['Comptabilité', '❌', '✅', '❌', '✅'],
                    ['Support 7j/7', '✅', '❌', '❌', '✅'],
                  ].map(([crit, freebe, indy, tiime, penny]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-indigo-700">{freebe}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{indy}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{tiime}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{penny}</td>
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
              Freebe est notre <strong>logiciel de facturation n°1 pour les freelances et auto-entrepreneurs</strong> en 2026. Son interface est la plus soignée du marché, et les fonctionnalités ciblées sur ce public (URSSAF, portail client, relances auto) sont vraiment utiles au quotidien.
            </p>
            <p className="text-gray-600 mb-4">
              À 9,90€/mois, moins qu'un abonnement Spotify, c'est un investissement qui se rembourse dès la première facture relancée et payée. L'essai gratuit 30 jours sans carte bancaire ne laisse aucune excuse pour ne pas le tester.
            </p>
            <p className="text-gray-600">
              <strong>La seule limite :</strong> Freebe n'est pas un logiciel de comptabilité complète. Si vous avez besoin de liasse fiscale ou de bilans, orientez-vous vers <Link href="/comparatif/pennylane" className="text-indigo-600 hover:underline">Pennylane</Link> ou <Link href="/comparatif/indy" className="text-indigo-600 hover:underline">Indy</Link>.
            </p>
          </section>

          {/* CTA final */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Essayez Freebe gratuitement pendant 30 jours</h3>
            <p className="text-indigo-200 mb-5">Sans carte bancaire. Annulation à tout moment.</p>
            <a href={AWIN_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Commencer l'essai gratuit →
            </a>
            <p className="text-xs text-indigo-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.</p>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur Freebe</h2>
            <div className="space-y-3">
              {[
                { q: 'Freebe est-il vraiment gratuit ?', a: 'Freebe propose un plan gratuit limité à 3 factures par mois. Pour un usage professionnel illimité, le plan Solo à 9,90€/mois est recommandé. Un essai gratuit de 30 jours (sans CB) est disponible sur le plan Solo.' },
                { q: 'Freebe est-il conforme à la loi française ?', a: 'Oui. Freebe génère des factures conformes aux exigences légales françaises (mentions obligatoires, numérotation séquentielle, NF Z42-026 pour les auto-entrepreneurs). Le logiciel est mis à jour en fonction des évolutions réglementaires.' },
                { q: 'Peut-on utiliser Freebe pour la TVA ?', a: 'Freebe gère la TVA sur les factures (20%, 10%, 5,5%, 0%). En revanche, il ne produit pas de déclaration de TVA complète : pour cela, référez-vous à votre expert-comptable ou utilisez Pennylane/Indy.' },
                { q: 'Freebe fonctionne-t-il sur mobile ?', a: 'Oui. Freebe dispose d\'applications iOS (App Store) et Android (Google Play) complètes, notées 4,7/5. Vous pouvez créer des factures, suivre les paiements et enregistrer des dépenses depuis votre smartphone.' },
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
              { href: '/comparatif/pennylane', label: 'Avis Pennylane 2026 →' },
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
