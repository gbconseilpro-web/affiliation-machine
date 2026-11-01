import type { Metadata } from 'next'

const SITE_URL = 'https://facturationpro.com'
const AWIN_AFFID = '1957421'
const AWIN_MID = '22751'

function awinUrl(clickref: string, destination: string) {
  return `https://www.awin1.com/cread.php?awinmid=${AWIN_MID}&awinaffid=${AWIN_AFFID}&clickref=${clickref}&p=${encodeURIComponent(destination)}`
}

const FREEBE_URL = awinUrl('freebe-vs-tiime', 'https://www.freebe.me/')
const TIIME_URL = awinUrl('tiime-vs-freebe', 'https://tiime.fr/')

export const metadata: Metadata = {
  title: 'Freebe vs Tiime 2026 : quel logiciel pour freelance choisir ?',
  description: 'Comparatif Freebe vs Tiime : fonctionnalites, tarifs, avis. Deux logiciels de facturation pour independants, mais des positionnements differents. Notre analyse en 2026.',
  alternates: {
    canonical: `${SITE_URL}/comparatif/freebe-vs-tiime`,
  },
  openGraph: {
    title: 'Freebe vs Tiime 2026 : comparatif complet',
    description: 'Freebe ou Tiime pour votre facturation ? On compare les deux solutions pour freelances.',
    type: 'article',
  },
}

const criteria = [
  { label: 'Note globale', freebe: '4.5/5', tiime: '4.2/5', winner: 'freebe' },
  { label: 'Prix de depart', freebe: '20€/mois (HT)', tiime: 'Gratuit (version de base)', winner: 'tiime' },
  { label: 'Suivi de temps (TJM)', freebe: 'Oui, integre', tiime: 'Non', winner: 'freebe' },
  { label: 'Comptabilite integree', freebe: 'Oui (TVA, bilan)', tiime: 'Non (basique)', winner: 'freebe' },
  { label: 'Notes de frais', freebe: 'Oui', tiime: 'Oui (via Tiime Receipt)', winner: 'draw' },
  { label: 'Application mobile', freebe: 'Oui', tiime: 'Oui', winner: 'draw' },
  { label: 'Essai gratuit', freebe: '30 jours', tiime: 'Oui (version gratuite)', winner: 'tiime' },
  { label: 'Ideal pour', freebe: 'Freelances en SASU/EURL', tiime: 'Debutants, micro-entrepreneurs', winner: null },
]

export default function FreebeVsTiime() {
  const comparatifSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Freebe vs Tiime 2026 : comparatif complet pour freelances',
    description: 'Comparatif Freebe vs Tiime : fonctionnalites, tarifs, avis pour choisir le bon logiciel de facturation.',
    datePublished: '2026-11-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: { '@type': 'Person', name: 'FacturationPro', url: `${SITE_URL}/auteur` },
    publisher: { '@type': 'Organization', name: 'FacturationPro', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/comparatif/freebe-vs-tiime` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Comparatif', item: `${SITE_URL}/comparatif` },
      { '@type': 'ListItem', position: 3, name: 'Freebe vs Tiime', item: `${SITE_URL}/comparatif/freebe-vs-tiime` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Freebe ou Tiime pour un freelance debutant ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour un debutant, Tiime est plus accessible car il propose une version gratuite sans engagement. Freebe demande un abonnement de 20€/mois mais offre beaucoup plus de fonctionnalites (comptabilite, suivi de temps, declarations). Si vous demarrez avec un petit CA, commencez par Tiime et basculez sur Freebe quand votre activite se developpe.',
        },
      },
      {
        '@type': 'Question',
        name: 'Freebe vaut-il vraiment 20€/mois face a Tiime gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, si vous avez une activite reguliere. Freebe inclut la comptabilite complete (TVA, bilan, declarations), le suivi de temps par projet, les relances automatiques et la gestion des frais. Pour un freelance qui facture plus de 3 000€/mois, le gain de temps justifie largement les 20€/mois. Pour un complement de revenu ponctuel, Tiime suffit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Tiime est-il vraiment gratuit ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tiime propose une version de base gratuite pour la facturation simple. Les fonctionnalites avancees (suivi de temps, relances automatiques, notes de frais avec OCR via Tiime Receipt) sont payantes. Le plan complet Tiime Account, incluant la comptabilite, depasse les 30€/mois, ce qui le rend plus cher que sa reputation de solution gratuite ne le laisse penser.',
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
          <span className="text-gray-800 font-medium">Freebe vs Tiime</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Freebe vs Tiime 2026 : quel logiciel choisir ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Freebe est la reference pour les freelances qui veulent une solution complete (facturation, comptabilite,
            suivi de temps). Tiime attire par sa version gratuite et sa simplicite. Voici notre analyse detaillee.
          </p>
        </div>

        {/* Score cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🟣</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Freebe</h2>
            <div className="text-4xl font-extrabold text-indigo-600 mb-1">4.5<span className="text-xl">/5</span></div>
            <p className="text-sm text-gray-500 mb-4">Notre note</p>
            <p className="text-sm text-gray-600 mb-5">
              La solution la plus complete pour les freelances en SASU/EURL qui veulent tout dans un seul outil.
            </p>
            <a
              href={FREEBE_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              Essayer Freebe gratuitement
            </a>
            <p className="text-xs text-gray-400 mt-2">30 jours gratuits, sans CB</p>
          </div>

          <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🔷</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Tiime</h2>
            <div className="text-4xl font-extrabold text-teal-600 mb-1">4.2<span className="text-xl">/5</span></div>
            <p className="text-sm text-gray-500 mb-4">Notre note</p>
            <p className="text-sm text-gray-600 mb-5">
              La solution d'entree pour debuter sans budget, avec une version gratuite fonctionnelle.
            </p>
            <a
              href={TIIME_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-block w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              Essayer Tiime gratuitement
            </a>
            <p className="text-xs text-gray-400 mt-2">Version de base gratuite</p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-10">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Tableau comparatif Freebe vs Tiime</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 w-1/3">Critere</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-indigo-700 w-1/4">Freebe</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-teal-700 w-1/4">Tiime</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 w-1/6">Gagnant</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">{row.label}</td>
                    <td className={`py-3 px-4 text-sm text-center ${row.winner === 'freebe' ? 'text-indigo-700 font-semibold' : 'text-gray-600'}`}>
                      {row.freebe}
                    </td>
                    <td className={`py-3 px-4 text-sm text-center ${row.winner === 'tiime' ? 'text-teal-700 font-semibold' : 'text-gray-600'}`}>
                      {row.tiime}
                    </td>
                    <td className="py-3 px-4 text-sm text-center">
                      {row.winner === 'freebe' && <span className="text-indigo-600 font-semibold">🟣 Freebe</span>}
                      {row.winner === 'tiime' && <span className="text-teal-600 font-semibold">🔷 Tiime</span>}
                      {row.winner === 'draw' && <span className="text-gray-400">Egalite</span>}
                      {row.winner === null && <span className="text-gray-300">-</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed analysis */}
        <div className="space-y-6 mb-10">

          <div className="bg-indigo-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              <span className="text-indigo-600 mr-2">🟣</span>
              Freebe : la solution complete pour freelances serieux
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Freebe se distingue par sa vision globale du metier de freelance : facturation, comptabilite, suivi de temps,
              gestion des projets et des clients, notes de frais, declarations fiscales. Tout est reuni dans une seule interface.
              C'est particulierement precieux pour les freelances en <strong>SASU ou EURL</strong> qui ont des obligations
              comptables plus complexes qu'un micro-entrepreneur.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le <strong>suivi du TJM (Taux Journalier Moyen)</strong> est unique a Freebe : vous visualisez en temps reel
              la rentabilite de chaque mission, le temps passe par client, et l'ecart entre le temps facture et le temps reel.
              Un outil de pilotage indispensable pour les freelances qui veulent optimiser leur activite.
            </p>
          </div>

          <div className="bg-teal-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              <span className="text-teal-600 mr-2">🔷</span>
              Tiime : l'accessibilite avant tout
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tiime a construit sa reputation sur sa <strong>version gratuite</strong>, qui permet de creer et envoyer des
              factures basiques sans abonnement. Pour un debutant ou quelqu'un qui facture occasionnellement, c'est une
              bonne porte d'entree dans le monde des logiciels de facturation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Attention cependant : les fonctionnalites qui font vraiment la difference (suivi du temps, relances automatiques,
              comptabilite avancee via Tiime Account) sont payantes. Et le plan complet revient souvent plus cher qu'on ne
              l'anticipe, parfois autant que Freebe pour des fonctionnalites moins etendues.
            </p>
          </div>

          {/* Warning box */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-sm font-semibold text-amber-800 mb-2">A noter sur la facturation electronique 2026</p>
            <p className="text-sm text-amber-700">
              Aucun des deux n'est encore certifie PDP pour la facturation electronique obligatoire 2026.
              Si la conformite PDP est votre priorite principale, considerez Pennylane ou Freebe (en cours de certification).
              Verifiez l'avancement de la certification avant de vous engager.
            </p>
          </div>

        </div>

        {/* Verdict */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 mb-10 text-white">
          <h2 className="text-2xl font-bold mb-4">Notre verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-semibold text-indigo-300 mb-2">Choisissez Freebe si...</p>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>Vous etes en SASU ou EURL</li>
                <li>Vous avez besoin de suivre votre temps/TJM</li>
                <li>Vous voulez la comptabilite + facturation integrees</li>
                <li>Vous facturez regulierement (plus de 5 clients/mois)</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-semibold text-teal-300 mb-2">Choisissez Tiime si...</p>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>Vous debutez et voulez tester sans budget</li>
                <li>Vous etes micro-entrepreneur avec peu de factures</li>
                <li>Vous avez juste besoin de facturation basique</li>
                <li>Vous voulez migrer vers Tiime Account plus tard</li>
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
                q: 'Freebe ou Tiime pour un freelance debutant ?',
                a: 'Pour un debutant, Tiime est plus accessible avec sa version gratuite. Basculez sur Freebe quand votre activite se developpe et que vous avez besoin de comptabilite et de suivi de temps.',
              },
              {
                q: 'Freebe vaut-il 20€/mois face a Tiime gratuit ?',
                a: 'Oui si vous avez une activite reguliere. Freebe inclut comptabilite complete, suivi de temps, relances automatiques. Le gain de temps justifie les 20€/mois pour un freelance qui facture plus de 3 000€/mois.',
              },
              {
                q: 'Tiime est-il vraiment gratuit ?',
                a: 'La facturation de base est gratuite. Les fonctionnalites avancees (Tiime Receipt, Tiime Account) sont payantes. Le plan complet avec comptabilite depasse souvent 30€/mois.',
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
          <h2 className="text-2xl font-bold mb-3">Voir tous les logiciels</h2>
          <p className="text-indigo-100 mb-6">
            Notre comparatif complet de 8 logiciels de facturation pour independants.
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
