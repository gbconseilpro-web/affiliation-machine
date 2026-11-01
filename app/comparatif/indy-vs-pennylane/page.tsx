import type { Metadata } from 'next'

const SITE_URL = 'https://facturationpro.com'
const AWIN_AFFID = '1957421'
const AWIN_MID = '22751'

function awinUrl(clickref: string, destination: string) {
  return `https://www.awin1.com/cread.php?awinmid=${AWIN_MID}&awinaffid=${AWIN_AFFID}&clickref=${clickref}&p=${encodeURIComponent(destination)}`
}

const INDY_URL = 'https://www.indy.fr/?via=facturationpro&utm_source=facturationpro&utm_medium=affiliation&utm_campaign=indy-vs-pennylane'
const PENNYLANE_URL = awinUrl('pennylane-vs-indy', 'https://www.pennylane.com/')

export const metadata: Metadata = {
  title: 'Indy vs Pennylane 2026 : lequel choisir pour votre comptabilite ?',
  description: 'Comparatif Indy vs Pennylane : fonctionnalites, tarifs, avis utilisateurs. Quel logiciel de comptabilite choisir pour votre activite independante en 2026 ?',
  alternates: {
    canonical: `${SITE_URL}/comparatif/indy-vs-pennylane`,
  },
  openGraph: {
    title: 'Indy vs Pennylane 2026 : comparatif complet',
    description: 'Indy ou Pennylane : deux philosophies differentes pour gerer votre comptabilite. Notre analyse detaillee pour vous aider a choisir.',
    type: 'article',
  },
}

const criteria = [
  { label: 'Note globale', indy: '4.4/5', pennylane: '4.3/5', winner: 'indy' },
  { label: 'Prix de depart', indy: 'A partir de 7€/mois', pennylane: 'A partir de 26€/mois', winner: 'indy' },
  { label: 'Declaration URSSAF auto', indy: 'Oui (inclus)', pennylane: 'Non', winner: 'indy' },
  { label: 'Collaboration expert-comptable', indy: 'Limitee', pennylane: 'Native (fonctionnalite cle)', winner: 'pennylane' },
  { label: 'Synchronisation bancaire', indy: 'Oui, toutes banques', pennylane: 'Oui, Open Banking', winner: 'draw' },
  { label: 'Facturation electronique 2026', indy: 'En cours de certification', pennylane: 'PDP certifie', winner: 'pennylane' },
  { label: 'Application mobile', indy: 'Oui (iOS + Android)', pennylane: 'Oui (iOS + Android)', winner: 'draw' },
  { label: 'Essai gratuit', indy: '30 jours', pennylane: '30 jours', winner: 'draw' },
]

export default function IndyVsPennylane() {
  const comparatifSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Indy vs Pennylane 2026 : comparatif complet',
    description: 'Comparatif Indy vs Pennylane : fonctionnalites, tarifs, avis pour choisir le meilleur logiciel de comptabilite.',
    datePublished: '2026-11-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: { '@type': 'Person', name: 'FacturationPro', url: `${SITE_URL}/auteur` },
    publisher: { '@type': 'Organization', name: 'FacturationPro', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/comparatif/indy-vs-pennylane` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Comparatif', item: `${SITE_URL}/comparatif` },
      { '@type': 'ListItem', position: 3, name: 'Indy vs Pennylane', item: `${SITE_URL}/comparatif/indy-vs-pennylane` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Indy ou Pennylane : lequel est le moins cher ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Indy est nettement moins cher que Pennylane. Indy demarre a 7€/mois pour les micro-entrepreneurs, contre 26€/mois minimum pour Pennylane. Pour un freelance en societe (SASU/EURL), Indy propose une offre complete a 20€/mois, la ou Pennylane revient a 47€/mois minimum avec l\'acces expert-comptable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle solution est la meilleure pour un micro-entrepreneur ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour un micro-entrepreneur, Indy est clairement superieur : il inclut la declaration de CA automatisee vers l\'URSSAF, un tableau de bord CA en temps reel, et des outils dedies au regime micro. Pennylane n\'a pas ces fonctionnalites specifiques au regime micro-entrepreneur.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pennylane est-il mieux qu\'Indy pour travailler avec un expert-comptable ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, Pennylane est superieur sur ce point. Son modele collaboratif permet a votre expert-comptable d\'acceder en temps reel a votre dossier, de valider vos ecritures et de preparer votre bilan directement dans l\'outil. C\'est sa force principale, particulierement pour les professions liberales et les PME en croissance.',
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparatifSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <a href="/" className="hover:text-indigo-600">Accueil</a>
          <span>›</span>
          <a href="/comparatif" className="hover:text-indigo-600">Comparatif</a>
          <span>›</span>
          <span className="text-gray-800 font-medium">Indy vs Pennylane</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Indy vs Pennylane 2026 : lequel choisir ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Deux excellents logiciels de comptabilite, mais des philosophies radicalement differentes.
            Indy excelle pour les micro-entrepreneurs et les independants qui veulent l'autonomie.
            Pennylane est fait pour ceux qui travaillent etroitement avec un expert-comptable.
          </p>
        </div>

        {/* Score cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🔵</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Indy</h2>
            <div className="text-4xl font-extrabold text-blue-600 mb-1">4.4<span className="text-xl">/5</span></div>
            <p className="text-sm text-gray-500 mb-4">Notre note</p>
            <p className="text-sm text-gray-600 mb-5">
              Le choix des micro-entrepreneurs et des independants qui veulent gerer leur comptabilite en autonomie.
            </p>
            <a
              href={INDY_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              Essayer Indy gratuitement
            </a>
            <p className="text-xs text-gray-400 mt-2">A partir de 7€/mois</p>
          </div>

          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🟢</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Pennylane</h2>
            <div className="text-4xl font-extrabold text-emerald-600 mb-1">4.3<span className="text-xl">/5</span></div>
            <p className="text-sm text-gray-500 mb-4">Notre note</p>
            <p className="text-sm text-gray-600 mb-5">
              Le choix des freelances et PME qui collaborent activement avec leur expert-comptable.
            </p>
            <a
              href={PENNYLANE_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              Essayer Pennylane gratuitement
            </a>
            <p className="text-xs text-gray-400 mt-2">A partir de 26€/mois</p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-10">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Tableau comparatif Indy vs Pennylane</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 w-1/3">Critere</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-blue-700 w-1/4">Indy</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-emerald-700 w-1/4">Pennylane</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 w-1/6">Gagnant</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">{row.label}</td>
                    <td className={`py-3 px-4 text-sm text-center ${row.winner === 'indy' ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>
                      {row.indy}
                    </td>
                    <td className={`py-3 px-4 text-sm text-center ${row.winner === 'pennylane' ? 'text-emerald-700 font-semibold' : 'text-gray-600'}`}>
                      {row.pennylane}
                    </td>
                    <td className="py-3 px-4 text-sm text-center">
                      {row.winner === 'indy' && <span className="text-blue-600 font-semibold">🔵 Indy</span>}
                      {row.winner === 'pennylane' && <span className="text-emerald-600 font-semibold">🟢 Pennylane</span>}
                      {row.winner === 'draw' && <span className="text-gray-400">Egalite</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed analysis */}
        <div className="space-y-6 mb-10">

          <div className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              <span className="text-blue-600 mr-2">🔵</span>
              Indy : la force de l'autonomie comptable
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Indy s'est construit autour d'une promesse simple : permettre aux independants de gerer leur comptabilite
              sans expertise comptable. Son atout majeur est la <strong>declaration automatique du CA a l'URSSAF</strong>,
              une fonctionnalite unique sur le marche qui interesse directement les 2,5 millions de micro-entrepreneurs francais.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              L'application mobile est tres complete : creation de factures, scan de notes de frais, suivi des encaissements.
              Et surtout, le <strong>tarif est imbattable</strong> : 7€/mois pour un micro-entrepreneur, 20€/mois pour une SASU ou une EURL.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">Points forts</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Declaration URSSAF automatisee</li>
                  <li>✓ Tarif tres accessible</li>
                  <li>✓ Interface tres intuitive</li>
                  <li>✓ 200 000 utilisateurs</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-700 mb-2">Points faibles</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✗ Collaboration EC limitee vs Pennylane</li>
                  <li>✗ Certif. facturation electronique en cours</li>
                  <li>✗ Moins adapte aux PME multi-utilisateurs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              <span className="text-emerald-600 mr-2">🟢</span>
              Pennylane : la revolution de la collaboration comptable
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pennylane a fait le pari d'integrer l'expert-comptable au coeur du produit. Votre EC accede en temps reel
              a votre dossier, valide vos ecritures, prepare votre bilan : le temps de clôture annuelle est reduit de 60%
              selon Pennylane. C'est une proposition de valeur unique.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              La contrepartie : un <strong>tarif superieur</strong> (26€ a 47€/mois selon le plan) et une
              complexite plus elevee qui peut decourager les debutants. Pennylane est clairement destine aux
              professionnels qui ont deja un EC et souhaitent optimiser cette relation.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">Points forts</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ Collaboration EC native et temps reel</li>
                  <li>✓ PDP certifie pour 2026</li>
                  <li>✓ Rapports financiers avances</li>
                  <li>✓ Integration bancaire complete</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-700 mb-2">Points faibles</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✗ Plus cher qu'Indy</li>
                  <li>✗ Pas de declaration URSSAF auto</li>
                  <li>✗ Moins adapte aux micro-entrepreneurs</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Verdict */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 mb-10 text-white">
          <h2 className="text-2xl font-bold mb-4">Notre verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-semibold text-blue-300 mb-2">Choisissez Indy si...</p>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>Vous etes micro-entrepreneur</li>
                <li>Vous voulez gerer votre comptabilite vous-meme</li>
                <li>Le budget est une contrainte importante</li>
                <li>Vous avez besoin de la declaration URSSAF automatique</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-semibold text-emerald-300 mb-2">Choisissez Pennylane si...</p>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>Vous travaillez avec un expert-comptable</li>
                <li>Vous etes en SASU/EURL avec du CA important</li>
                <li>La conformite facturation electronique est prioritaire</li>
                <li>Vous voulez des rapports financiers detailles</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Indy ou Pennylane : lequel est le moins cher ?',
                a: 'Indy est nettement moins cher. Indy demarre a 7€/mois pour les micro-entrepreneurs, contre 26€/mois pour Pennylane. Pour un freelance en societe, Indy est a 20€/mois contre 47€/mois pour Pennylane avec acces expert-comptable.',
              },
              {
                q: 'Quelle solution pour un micro-entrepreneur ?',
                a: 'Indy, sans hesitation. Il inclut la declaration de CA automatisee vers l\'URSSAF, le tableau de bord CA, et des outils dedies au regime micro. Pennylane n\'a pas ces fonctionnalites specifiques.',
              },
              {
                q: 'Pennylane est-il mieux pour travailler avec un expert-comptable ?',
                a: 'Oui. Pennylane permet a votre expert-comptable d\'acceder en temps reel a votre dossier et de valider vos ecritures directement dans l\'outil. C\'est sa force principale, particulierement pour les professions liberales.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related comparisons */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Autres comparatifs utiles</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { title: 'Indy vs Freebe', href: '/comparatif/indy-vs-freebe' },
              { title: 'Freebe vs Pennylane', href: '/comparatif/freebe-vs-pennylane' },
              { title: 'Tiime vs Pennylane', href: '/comparatif/tiime-vs-pennylane' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 bg-white border border-gray-200 hover:border-indigo-300 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <span className="text-indigo-400">→</span>
                {link.title}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Comparer tous les logiciels</h2>
          <p className="text-indigo-100 mb-6">
            Consultez notre tableau comparatif complet de 8 logiciels de facturation.
          </p>
          <a
            href="/comparatif"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Voir le comparatif complet
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

      </div>
    </>
  )
}
