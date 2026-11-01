import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Sellsy 2026 : test complet du CRM + facturation pour PME',
  description: 'Notre avis sur Sellsy après test : CRM + facturation + trésorerie, tarifs, avantages. La solution tout-en-un pour les PME qui veulent tout gérer depuis un seul outil ?',
  alternates: { canonical: 'https://facturationpro.com/comparatif/sellsy' },
  openGraph: {
    title: 'Avis Sellsy 2026 : Test complet',
    description: 'Test réel de Sellsy : CRM + facturation + trésorerie, tarifs, avantages et inconvénients pour les PME.',
    type: 'article',
  },
}

const AFFILIATE_URL = 'https://go.sellsy.com/essai-gratuit?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=avis-sellsy'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Sellsy',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '29', priceCurrency: 'EUR' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.4', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'Sellsy est la meilleure solution CRM + facturation + trésorerie pour les PME françaises en 2026.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Sellsy convient-il aux PME ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Sellsy est concu specifiquement pour les PME francaises. Il combine CRM, facturation et tresorerie dans un seul outil, ce qui le rend ideal pour les entreprises de 5 a 200 salaries qui veulent centraliser leur gestion commerciale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le tarif de Sellsy en 2026 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sellsy propose plusieurs formules a partir de 29 EUR/mois pour la facturation seule, jusqu\'a 129 EUR/mois pour la suite complete CRM + facturation + tresorerie. Un essai gratuit de 15 jours est disponible sans carte bancaire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la difference entre Sellsy et un logiciel de facturation classique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Contrairement a un simple logiciel de facturation, Sellsy integre un CRM complet (gestion des contacts, pipeline commercial, relances automatiques) et un module de tresorerie. C\'est une solution tout-en-un qui evite d\'utiliser plusieurs outils separes.',
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
    { '@type': 'ListItem', position: 3, name: 'Avis Sellsy', item: 'https://facturationpro.com/comparatif/sellsy' },
  ],
}

export default function AvisSellsy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-white min-h-screen">
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span>›</span>
              <Link href="/comparatif" className="hover:text-indigo-600">Comparatif</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium">Avis Sellsy</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Avis & Test 2026</span>
              <span className="text-xs text-gray-400">Mis à jour : novembre 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Avis Sellsy 2026 : notre test complet du CRM + facturation tout-en-un
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Sellsy n'est pas qu'un logiciel de facturation : c'est une plateforme CRM + facturation + trésorerie en un seul outil. Après 30 jours de test intensif, voici notre avis complet pour les PME françaises.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-blue-600">4,4</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={`text-xl ${i <= 4 ? 'text-yellow-400' : 'text-yellow-200'}`}>★</span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">La solution tout-en-un pour PME ambitieuses</p>
                <p className="text-sm text-gray-600">CRM + facturation + trésorerie + gestion commerciale dans un seul outil. Puissant, mais demande du temps de configuration.</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Essayer Sellsy gratuitement →
              </a>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• CRM + facturation + trésorerie dans un seul outil</li>
                <li>• Pipeline commercial visuel (type Kanban) très efficace</li>
                <li>• Gestion des abonnements et contrats récurrents</li>
                <li>• Rapports personnalisables et tableaux de bord avancés</li>
                <li>• API complète pour intégrations sur mesure</li>
                <li>• Solution 100% française, hébergée en France</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Prix élevé pour les petites structures (dès 29€/mois)</li>
                <li>• Courbe d'apprentissage importante, prise en main longue</li>
                <li>• Moins adapté aux freelances solo</li>
                <li>• Configuration initiale chronophage (1 à 2 semaines)</li>
              </ul>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs Sellsy 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Plan</th>
                    <th className="px-4 py-3 text-center">Prix/mois</th>
                    <th className="px-4 py-3 text-center">Utilisateurs</th>
                    <th className="px-4 py-3 text-center rounded-tr-xl">Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-blue-50">
                    <td className="px-4 py-3 font-bold text-blue-700">Starter ⭐ Recommandé</td>
                    <td className="px-4 py-3 text-center font-bold">29€</td>
                    <td className="px-4 py-3 text-center">1</td>
                    <td className="px-4 py-3 text-center text-gray-600">CRM + facturation + trésorerie</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold">Growth</td>
                    <td className="px-4 py-3 text-center font-bold">49€</td>
                    <td className="px-4 py-3 text-center">3</td>
                    <td className="px-4 py-3 text-center text-gray-600">Starter + automatisations, rapports avancés</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Enterprise</td>
                    <td className="px-4 py-3 text-center font-bold">Sur devis</td>
                    <td className="px-4 py-3 text-center">Illimité</td>
                    <td className="px-4 py-3 text-center text-gray-600">Growth + API, intégrations avancées, support dédié</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Tarifs HT par utilisateur. Essai gratuit 15 jours sans CB.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. CRM commercial : le point fort de Sellsy</h3>
            <p className="text-gray-600 mb-4">
              Ce qui distingue vraiment Sellsy de tous les logiciels de facturation : son CRM intégré. Le pipeline commercial en vue Kanban (prospects → devis → contrats → facturation) est particulièrement bien conçu. Chaque opportunité commerciale est liée directement à ses devis et factures, ce qui élimine la double saisie.
            </p>
            <p className="text-gray-600 mb-6">
              Pour une PME qui fait beaucoup de prospection commerciale, c'est un avantage considérable par rapport à des outils comme <Link href="/comparatif/pennylane" className="text-indigo-600 hover:underline">Pennylane</Link> ou <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe</Link>, qui n'ont pas de CRM.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Facturation et gestion des abonnements</h3>
            <p className="text-gray-600 mb-6">
              La facturation de Sellsy est complète : devis, bons de commande, factures, avoirs, relances automatiques, et surtout une gestion des contrats récurrents et abonnements. Si votre modèle économique inclut des revenus récurrents (SaaS, maintenance, retainer), Sellsy est l'outil le plus adapté du marché français.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Trésorerie et rapports</h3>
            <p className="text-gray-600 mb-6">
              Le module trésorerie de Sellsy permet de suivre en temps réel vos flux financiers, de prévoir votre trésorerie à 30/60/90 jours, et de créer des rapports personnalisés. Pour les dirigeants de PME qui veulent un tableau de bord financier complet, c'est une vraie valeur ajoutée.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. API et intégrations</h3>
            <p className="text-gray-600 mb-6">
              Sellsy propose une API REST complète et des intégrations natives avec les outils courants (Slack, HubSpot, Zapier, Stripe). Pour les PME avec des besoins d'intégration spécifiques, c'est un avantage important par rapport aux solutions plus fermées.
            </p>
          </section>

          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Sellsy : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• PME de 2 à 50 salariés avec équipe commerciale</li>
                  <li>• Structures avec revenus récurrents (SaaS, abonnements)</li>
                  <li>• Dirigeants voulant un tableau de bord commercial complet</li>
                  <li>• Entreprises cherchant une solution 100% française</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Freelances ou auto-entrepreneurs (trop cher et complexe)</li>
                  <li>• TPE cherchant une solution simple à prendre en main</li>
                  <li>• Structures avec budget limité (&lt; 50€/mois)</li>
                  <li>• Profils cherchant à démarrer vite sans formation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Sellsy vs la concurrence</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-blue-700">Sellsy</th>
                    <th className="px-4 py-3 text-center">Pennylane</th>
                    <th className="px-4 py-3 text-center">Freebe</th>
                    <th className="px-4 py-3 text-center">Indy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix mensuel', '29€', '29€', '9,90€', '7€'],
                    ['CRM intégré', '✅ Avancé', '❌', '❌', '❌'],
                    ['Abonnements récurrents', '✅', '❌', '❌', '❌'],
                    ['Trésorerie prévisionnelle', '✅', '✅', '❌', '❌'],
                    ['Comptabilité', '❌', '✅', '❌', '✅'],
                    ['Facilité de prise en main', '⚠️ Complexe', '⚠️ Moyenne', '✅ Simple', '✅ Simple'],
                  ].map(([crit, sellsy, penny, freebe, indy]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-blue-700">{sellsy}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{penny}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{freebe}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{indy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Notre verdict</h2>
            <p className="text-gray-600 mb-4">
              Sellsy est <strong>l'outil le plus puissant du marché pour les PME françaises</strong> qui veulent gérer leur activité commerciale et financière depuis une seule plateforme. Son CRM intégré, sa gestion des abonnements et ses rapports avancés n'ont pas d'équivalent dans cette gamme de prix.
            </p>
            <p className="text-gray-600">
              En revanche, pour un freelance ou une très petite structure, la complexité et le prix de Sellsy ne sont pas justifiés. Dans ce cas, <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe (9,90€/mois)</Link> ou <Link href="/comparatif/tiime" className="text-indigo-600 hover:underline">Tiime (gratuit)</Link> sont bien plus adaptés.
            </p>
          </section>

          <div className="bg-blue-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Testez Sellsy gratuitement pendant 15 jours</h3>
            <p className="text-blue-200 mb-5">Sans carte bancaire. Accès complet à toutes les fonctionnalités.</p>
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Démarrer l'essai gratuit Sellsy →
            </a>
            <p className="text-xs text-blue-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur Sellsy</h2>
            <div className="space-y-3">
              {[
                { q: 'Sellsy est-il adapté aux auto-entrepreneurs ?', a: 'Sellsy est conçu pour les PME et TPE, pas vraiment pour les auto-entrepreneurs. Son prix (à partir de 29€/mois) et sa complexité sont surdimensionnés pour une activité en nom propre. Pour un auto-entrepreneur, nous recommandons Freebe (9,90€/mois) ou Tiime (gratuit), qui sont plus simples et moins chers.' },
                { q: 'Sellsy inclut-il la comptabilité ?', a: 'Non. Sellsy est une solution de gestion commerciale et de facturation, pas un logiciel de comptabilité. Vous pouvez exporter vos données vers votre expert-comptable ou un logiciel de comptabilité, mais Sellsy ne produit pas de bilan ni de liasse fiscale. Pour une comptabilité intégrée, Pennylane ou Indy sont plus adaptés.' },
                { q: 'Combien de temps faut-il pour prendre en main Sellsy ?', a: 'Sellsy est l\'outil le plus complet mais aussi le plus complexe de notre comparatif. Comptez 1 à 2 semaines pour configurer correctement votre espace (pipeline commercial, modèles de documents, intégrations) et vous sentir à l\'aise avec toutes les fonctionnalités. Sellsy propose une équipe d\'onboarding pour les plans Growth et Enterprise.' },
                { q: 'Sellsy est-il hébergé en France ?', a: 'Oui. Sellsy est une entreprise française (fondée à La Rochelle en 2009) et ses données sont hébergées en France, dans des datacenters certifiés ISO 27001. C\'est un point important pour les PME soucieuses de la souveraineté de leurs données.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-blue-600 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { href: '/comparatif', label: '← Retour au comparatif complet' },
              { href: '/comparatif/pennylane', label: 'Avis Pennylane 2026 →' },
              { href: '/comparatif/myunisoft', label: 'Avis MyUnisoft 2026 →' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="text-center bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-4 text-sm font-semibold text-gray-700 hover:text-blue-700 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
