import type { Metadata } from 'next'

const SITE_URL = 'https://facturationpro.com'
const AWIN_AFFID = '1957421'
const AWIN_MID = '22751'

function awinUrl(clickref: string, destination: string) {
  return `https://www.awin1.com/cread.php?awinmid=${AWIN_MID}&awinaffid=${AWIN_AFFID}&clickref=${clickref}&p=${encodeURIComponent(destination)}`
}

const SHINE_URL = awinUrl('shine-vs-indy', 'https://shine.fr/')
const INDY_URL = 'https://www.indy.fr/?via=facturationpro&utm_source=facturationpro&utm_medium=affiliation&utm_campaign=shine-vs-indy'

export const metadata: Metadata = {
  title: 'Shine vs Indy 2026 : banque pro ou logiciel comptable pour freelance ?',
  description: 'Comparatif Shine vs Indy 2026 : deux outils tres differents pour independants. Shine = compte bancaire pro + facturation. Indy = comptabilite + declaration URSSAF. Lequel choisir ?',
  alternates: {
    canonical: `${SITE_URL}/comparatif/shine-vs-indy`,
  },
  openGraph: {
    title: 'Shine vs Indy 2026 : quel outil pour votre activite ?',
    description: 'Shine ou Indy pour votre activite independante ? Un comparatif clair pour choisir entre banque pro et logiciel de comptabilite.',
    type: 'article',
  },
}

const criteria = [
  { label: 'Note globale', shine: '4.1/5', indy: '4.4/5', winner: 'indy' },
  { label: 'Compte bancaire integre', shine: 'Oui (IBAN FR)', indy: 'Non', winner: 'shine' },
  { label: 'Declaration URSSAF', shine: 'Non', indy: 'Oui, automatique', winner: 'indy' },
  { label: 'Facturation', shine: 'Oui (basique)', indy: 'Oui (complete)', winner: 'indy' },
  { label: 'Comptabilite complete', shine: 'Non', indy: 'Oui', winner: 'indy' },
  { label: 'Synchro bancaire', shine: 'Natif (son propre compte)', indy: 'Oui (open banking)', winner: 'draw' },
  { label: 'Prix de depart', shine: '8€/mois', indy: '7€/mois', winner: 'indy' },
  { label: 'Ideal pour', shine: 'Freelance ayant besoin d\'un compte pro', indy: 'Micro-entrepreneur autonome', winner: null },
]

export default function ShineVsIndy() {
  const comparatifSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Shine vs Indy 2026 : comparatif complet pour independants',
    description: 'Comparatif Shine vs Indy 2026 : deux approches differentes pour les freelances. Shine pour le compte bancaire pro, Indy pour la comptabilite et les declarations.',
    datePublished: '2026-11-01',
    dateModified: new Date().toISOString().split('T')[0],
    author: { '@type': 'Person', name: 'FacturationPro', url: `${SITE_URL}/auteur` },
    publisher: { '@type': 'Organization', name: 'FacturationPro', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/comparatif/shine-vs-indy` },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Comparatif', item: `${SITE_URL}/comparatif` },
      { '@type': 'ListItem', position: 3, name: 'Shine vs Indy', item: `${SITE_URL}/comparatif/shine-vs-indy` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Shine ou Indy pour un micro-entrepreneur ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pour un micro-entrepreneur, Indy est generalement le meilleur choix : il gere la comptabilite, les declarations URSSAF et la facturation de bout en bout. Shine est utile si vous avez aussi besoin d\'un compte bancaire professionnel integre. Les deux ne s\'excluent pas : certains freelances utilisent Shine pour le banking et Indy pour la comptabilite.',
        },
      },
      {
        '@type': 'Question',
        name: 'Shine remplace-t-il un logiciel de comptabilite ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Non. Shine est avant tout un compte bancaire pro avec des fonctionnalites de facturation basique. Il ne fait pas de declarations URSSAF, pas de bilan comptable, pas de suivi fiscal. Pour la comptabilite, il faut associer Shine a un outil comme Indy, Freebe ou Pennylane.',
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on utiliser Indy sans compte Shine ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, tout a fait. Indy fonctionne avec n\'importe quelle banque via la synchronisation open banking. Vous pouvez connecter votre compte Shine, BNP Paribas, Boursorama ou n\'importe quel compte pro a Indy pour centraliser votre comptabilite.',
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
          <span className="text-gray-800 font-medium">Shine vs Indy</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Shine vs Indy 2026 : banque pro ou comptabilite ?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Shine et Indy s'adressent tous deux aux independants, mais ils repondent a des besoins tres differents.
            Shine est une <strong>neobanque pro</strong> avec facturation integree. Indy est un <strong>logiciel de
            comptabilite</strong> avec declarations URSSAF automatiques. Voici comment choisir.
          </p>
        </div>

        {/* Important note */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">
          <p className="text-sm font-semibold text-blue-800 mb-1">Attention : ce ne sont pas des concurrents directs</p>
          <p className="text-sm text-blue-700">
            Shine et Indy couvrent des besoins differents. Il est courant pour un freelance d'utiliser les deux :
            Shine pour le compte bancaire, Indy pour la comptabilite. Ce comparatif vous aide a comprendre lequel
            vous manque vraiment.
          </p>
        </div>

        {/* Score cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">💜</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Shine</h2>
            <div className="text-4xl font-extrabold text-purple-600 mb-1">4.1<span className="text-xl">/5</span></div>
            <p className="text-sm text-gray-500 mb-4">Notre note</p>
            <p className="text-sm text-gray-600 mb-5">
              Neobanque pro francaise avec IBAN FR, carte Mastercard, et facturation integree pour freelances.
            </p>
            <a
              href={SHINE_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              Ouvrir un compte Shine
            </a>
            <p className="text-xs text-gray-400 mt-2">A partir de 8€/mois</p>
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🔵</div>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Indy</h2>
            <div className="text-4xl font-extrabold text-blue-600 mb-1">4.4<span className="text-xl">/5</span></div>
            <p className="text-sm text-gray-500 mb-4">Notre note</p>
            <p className="text-sm text-gray-600 mb-5">
              Logiciel de comptabilite et de declaration URSSAF pour micro-entrepreneurs et independants.
            </p>
            <a
              href={INDY_URL}
              target="_blank"
              rel="noopener sponsored"
              className="inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              Essayer Indy gratuitement
            </a>
            <p className="text-xs text-gray-400 mt-2">30 jours gratuits, sans CB</p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-10">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Tableau comparatif Shine vs Indy</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600 w-1/3">Critere</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-purple-700 w-1/4">Shine</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-blue-700 w-1/4">Indy</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600 w-1/6">Gagnant</th>
                </tr>
              </thead>
              <tbody>
                {criteria.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-700">{row.label}</td>
                    <td className={`py-3 px-4 text-sm text-center ${row.winner === 'shine' ? 'text-purple-700 font-semibold' : 'text-gray-600'}`}>
                      {row.shine}
                    </td>
                    <td className={`py-3 px-4 text-sm text-center ${row.winner === 'indy' ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>
                      {row.indy}
                    </td>
                    <td className="py-3 px-4 text-sm text-center">
                      {row.winner === 'shine' && <span className="text-purple-600 font-semibold">💜 Shine</span>}
                      {row.winner === 'indy' && <span className="text-blue-600 font-semibold">🔵 Indy</span>}
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

          <div className="bg-purple-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              <span className="text-purple-600 mr-2">💜</span>
              Shine : le compte bancaire pro des freelances
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shine est une <strong>neobanque francaise</strong> specialisee pour les independants (auto-entrepreneurs,
              freelances, TPE). Elle offre un IBAN francais, une carte Mastercard, et des fonctionnalites bancaires
              completes : virements, prelevements, gestion des depenses. La facturation integree permet de creer et
              envoyer des devis et factures directement depuis l'application.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ce que Shine ne fait pas : les declarations URSSAF, la comptabilite au sens propre, le suivi fiscal
              avance. C'est une banque, pas un logiciel de comptabilite. Si vous avez deja un compte pro ailleurs
              et cherchez un outil comptable, Shine n'est pas la bonne reponse.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              <span className="text-blue-600 mr-2">🔵</span>
              Indy : la comptabilite automatisee pour micro-entrepreneurs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Indy est un <strong>logiciel de comptabilite</strong> concu pour les micro-entrepreneurs et
              independants. Son point fort : les <strong>declarations URSSAF automatiques</strong>. Il categorise
              vos transactions, calcule vos cotisations sociales, et vous permet de declarer en quelques clics.
              La synchronisation bancaire (open banking) s'connecte a n'importe quelle banque, y compris Shine.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La facturation d'Indy est complete : devis, factures, acomptes, avoirs, relances. A 7€/mois,
              c'est l'une des solutions les plus abordables pour une comptabilite complete. Son seul manque :
              il n'est pas encore certifie PDP pour la facturation electronique 2026.
            </p>
          </div>

          {/* Use case */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="text-sm font-semibold text-amber-800 mb-2">Cas d'usage : peut-on utiliser les deux ?</p>
            <p className="text-sm text-amber-700">
              Oui, et c'est une configuration populaire : ouvrir un compte Shine pour le banking (IBAN FR, carte pro,
              gestion des depenses), puis connecter ce compte a Indy via l'open banking pour la comptabilite et les
              declarations URSSAF. Cette combinaison couvre tous les besoins d'un micro-entrepreneur pour environ
              15€/mois.
            </p>
          </div>

        </div>

        {/* Verdict */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 mb-10 text-white">
          <h2 className="text-2xl font-bold mb-4">Notre verdict</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-semibold text-purple-300 mb-2">Choisissez Shine si...</p>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>Vous n'avez pas de compte bancaire pro</li>
                <li>Vous voulez tout centraliser (banque + factures)</li>
                <li>Vous preferez une neobanque francaise (IBAN FR)</li>
                <li>Votre comptabilite reste simple</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-semibold text-blue-300 mb-2">Choisissez Indy si...</p>
              <ul className="space-y-1.5 text-sm text-gray-300">
                <li>Vous cherchez un logiciel de comptabilite</li>
                <li>Vous voulez automatiser vos declarations URSSAF</li>
                <li>Vous avez deja un compte bancaire pro</li>
                <li>Vous etes micro-entrepreneur actif</li>
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
                q: 'Shine ou Indy pour un micro-entrepreneur ?',
                a: 'Pour un micro-entrepreneur, Indy est generalement le meilleur choix : comptabilite, declarations URSSAF, facturation complete. Shine est utile si vous avez aussi besoin d\'un compte bancaire professionnel. Les deux sont complementaires.',
              },
              {
                q: 'Shine remplace-t-il un logiciel de comptabilite ?',
                a: 'Non. Shine est une neobanque pro avec facturation basique. Il ne fait pas de declarations URSSAF, pas de bilan comptable, pas de suivi fiscal avance. Pour la comptabilite, il faut un outil comme Indy, Freebe ou Pennylane.',
              },
              {
                q: 'Peut-on utiliser Indy sans compte Shine ?',
                a: 'Oui, tout a fait. Indy fonctionne avec n\'importe quelle banque via la synchronisation open banking : BNP Paribas, Boursorama, Shine, ou n\'importe quel compte pro.',
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
              { title: 'Indy vs Pennylane', href: '/comparatif/indy-vs-pennylane' },
              { title: 'Freebe vs Pennylane', href: '/comparatif/freebe-vs-pennylane' },
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
