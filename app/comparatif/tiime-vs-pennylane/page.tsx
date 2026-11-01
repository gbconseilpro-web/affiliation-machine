import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tiime vs Pennylane 2026 : comparatif pour independants',
  description: 'Tiime ou Pennylane ? Comparatif complet sur les fonctionnalites, la collaboration comptable, les tarifs et l\'experience utilisateur. Notre verdict 2026.',
  alternates: { canonical: 'https://facturationpro.com/comparatif/tiime-vs-pennylane' },
  openGraph: {
    title: 'Tiime vs Pennylane 2026 : lequel choisir ?',
    description: 'On compare Tiime et Pennylane sur tous les criteres pour aider les independants et leurs experts-comptables a choisir.',
    type: 'article',
  },
}

const TIIME_URL = 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=tiime-vs-pennylane&p=https%3A%2F%2Ftiime.fr%2F'
const PENNYLANE_URL = 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=pennylane-vs-tiime&p=https%3A%2F%2Fwww.pennylane.com%2F'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tiime vs Pennylane 2026 : comparatif pour independants',
  description: 'Tiime ou Pennylane ? Comparatif complet sur les fonctionnalites, la collaboration comptable, les tarifs.',
  author: { '@type': 'Organization', name: 'FacturationPro', url: 'https://facturationpro.com' },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  publisher: { '@type': 'Organization', name: 'FacturationPro' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://facturationpro.com/comparatif/tiime-vs-pennylane' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Tiime ou Pennylane : lequel choisir pour un freelance en 2026 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiime est plus adapte aux freelances et independants qui cherchent un rapport qualite/prix optimal avec une facturation et une comptabilite completes. Pennylane convient davantage aux entreprises ayant un expert-comptable, grace a sa collaboration en temps reel avec le cabinet. Les deux offrent des fonctionnalites de facturation et de comptabilite similaires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Pennylane est-il compatible avec mon expert-comptable ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Pennylane est specifiquement concu pour faciliter la collaboration avec les experts-comptables. L\'expert a acces en temps reel aux donnees de votre entreprise, peut valider les ecritures et preparer votre bilan directement dans la plateforme. C\'est l\'un des points forts majeurs de Pennylane par rapport a Tiime.',
      },
    },
    {
      '@type': 'Question',
      name: 'Tiime est-il gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tiime propose une offre d\'entree accessible avec les fonctionnalites essentielles de facturation. Les plans avances incluent la comptabilite en temps reel, les rapports et l\'integration bancaire. Tiime est generalement positionne sur des tarifs plus competitifs que Pennylane, ce qui en fait un meilleur choix pour les independants sensibles au prix.',
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
    { '@type': 'ListItem', position: 3, name: 'Tiime vs Pennylane', item: 'https://facturationpro.com/comparatif/tiime-vs-pennylane' },
  ],
}

const criteria = [
  { label: 'Interface utilisateur', tiime: '8/10', pennylane: '8/10', winner: 'egal' },
  { label: 'Facturation et devis', tiime: '9/10', pennylane: '9/10', winner: 'egal' },
  { label: 'Collaboration expert-comptable', tiime: '9/10', pennylane: '10/10', winner: 'pennylane' },
  { label: 'Comptabilite en temps reel', tiime: '9/10', pennylane: '9/10', winner: 'egal' },
  { label: 'Integration bancaire', tiime: '8/10', pennylane: '9/10', winner: 'pennylane' },
  { label: 'Rapports et tableaux de bord', tiime: '8/10', pennylane: '9/10', winner: 'pennylane' },
  { label: 'Rapport qualite/prix', tiime: '9/10', pennylane: '7/10', winner: 'tiime' },
  { label: 'Support client', tiime: '8/10', pennylane: '8/10', winner: 'egal' },
]

export default function TiimeVsPennylane() {
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
              <span className="text-gray-800 font-medium">Tiime vs Pennylane</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Comparatif 2026</span>
              <span className="text-xs text-gray-400">Mis a jour : novembre 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Tiime vs Pennylane 2026 : comparatif pour independants
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Tiime et Pennylane sont deux solutions orientees collaboration avec l&apos;expert-comptable. Toutes deux permettent une comptabilite en temps reel et une vision claire de vos finances. Mais elles ne coutent pas le meme prix et n&apos;ont pas tout a fait les memes points forts. On fait le tour.
            </p>
          </header>

          {/* Contexte */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 mb-10">
            <p className="text-sm text-amber-800">
              <strong>Note :</strong> Tiime et Pennylane s&apos;adressent tous les deux aux structures travaillant avec un expert-comptable. Si vous etes freelance en solo sans EC, Freebe ou Indy seront probablement plus adaptes et moins onereux.
            </p>
          </div>

          {/* Verdict rapide */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Tiime</p>
                  <p className="text-sm text-teal-600 font-semibold">Note : 4,2/5</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Solution solide et bien positionnee pour les independants qui veulent une comptabilite temps reel sans se ruiner. Interface claire, bonne integration bancaire, tarif plus accessible que Pennylane.
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ideal pour :</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-4">
                <li>Freelances avec expert-comptable sur un budget maitrise</li>
                <li>TPE et petites structures</li>
                <li>Ceux qui cherchent une alternative abordable a Pennylane</li>
              </ul>
              <p className="text-xs text-gray-500 mb-3">Tarification variable · Contacter Tiime</p>
              <a href={TIIME_URL} target="_blank" rel="noopener sponsored" className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
                Decouvrir Tiime
              </a>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Pennylane</p>
                  <p className="text-sm text-emerald-600 font-semibold">Note : 4,3/5</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                La reference du marche pour la collaboration expert-comptable en France. Tableaux de bord avances, reconciliation bancaire automatique, et une adoption massive par les cabinets comptables francais.
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ideal pour :</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-4">
                <li>Structures avec un EC deja sur Pennylane</li>
                <li>Entreprises voulant les meilleurs tableaux de bord</li>
                <li>Ceux dont l&apos;EC recommande specifiquement Pennylane</li>
              </ul>
              <p className="text-xs text-gray-500 mb-3">A partir de 26 EUR/mois · Demo gratuite</p>
              <a href={PENNYLANE_URL} target="_blank" rel="noopener sponsored" className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
                Decouvrir Pennylane
              </a>
            </div>
          </div>

          {/* Tableau comparatif */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tableau comparatif Tiime vs Pennylane</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left py-4 px-5 font-semibold text-gray-700 w-1/2">Critere</th>
                    <th className="text-center py-4 px-4 font-semibold text-teal-700">Tiime</th>
                    <th className="text-center py-4 px-4 font-semibold text-emerald-700">Pennylane</th>
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">{row.label}</td>
                      <td className={`py-3.5 px-4 text-center font-semibold ${row.winner === 'tiime' ? 'text-teal-600' : 'text-gray-500'}`}>
                        {row.tiime}
                        {row.winner === 'tiime' && <span className="ml-1 text-teal-400">★</span>}
                      </td>
                      <td className={`py-3.5 px-4 text-center font-semibold ${row.winner === 'pennylane' ? 'text-emerald-600' : 'text-gray-500'}`}>
                        {row.pennylane}
                        {row.winner === 'pennylane' && <span className="ml-1 text-emerald-400">★</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sections detail */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tiime en detail</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Tiime est une solution de comptabilite collaborative cree en France, initialement concue pour les cabinets d&apos;expertise comptable et leurs clients. La plateforme propose une interface propre permettant de suivre sa tresorerie, categoriser ses transactions bancaires et collaborer avec son EC en temps reel.
              </p>
              <p>
                <strong>Point fort majeur :</strong> le rapport qualite/prix. Tiime propose des fonctionnalites proches de Pennylane a un tarif generalement inferieur, ce qui en fait une alternative credible pour les structures qui n&apos;ont pas encore leur EC sur Pennylane.
              </p>
              <p>
                <strong>Limite principale :</strong> l&apos;ecosysteme est moins developpe que Pennylane. Moins de cabinets comptables utilisent Tiime, ce qui peut poser probleme si votre EC a deja son workflow sur une autre plateforme.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pennylane en detail</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Pennylane s&apos;est impose comme le leader francais de la comptabilite collaborative entre freelances et experts-comptables. La plateforme permet une vision financiere en temps reel, une reconciliation bancaire automatique tres performante, et des tableaux de bord analytiques avances.
              </p>
              <p>
                <strong>Point fort majeur :</strong> l&apos;adoption par les cabinets comptables. Des milliers de cabinets en France utilisent Pennylane, ce qui signifie que votre EC connait probablement deja l&apos;outil. La transition est donc fluide et le gain de temps reel.
              </p>
              <p>
                <strong>Limite principale :</strong> le prix reste un frein. A 26 EUR/mois minimum (et souvent plus selon les options et la formule choisie avec votre EC), Pennylane est la solution la plus chere du comparatif. Si votre activite est modeste, le ROI peut etre long a atteindre.
              </p>
            </div>
          </section>

          {/* Verdict */}
          <section className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre verdict</h2>
            <p className="text-gray-600 text-sm mb-5">
              Ce comparatif est plus serre que les autres : Tiime et Pennylane sont deux bonnes solutions. Le critere decisif est souvent... votre expert-comptable.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-teal-700 mb-2">Choisissez Tiime si :</p>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li>Votre EC n&apos;est pas encore sur Pennylane</li>
                  <li>Votre budget est inferieur a 20 EUR/mois</li>
                  <li>Vous voulez tester une alternative moins connue</li>
                  <li>Votre volume de transactions est faible</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-emerald-700 mb-2">Choisissez Pennylane si :</p>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li>Votre expert-comptable utilise deja Pennylane</li>
                  <li>Vous avez besoin des meilleurs tableaux de bord</li>
                  <li>Votre volume de transactions est important</li>
                  <li>Vous visez une croissance et avez besoin d&apos;un outil scalable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={TIIME_URL} target="_blank" rel="noopener sponsored" className="flex-1 text-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
              Decouvrir Tiime
            </a>
            <a href={PENNYLANE_URL} target="_blank" rel="noopener sponsored" className="flex-1 text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
              Decouvrir Pennylane
            </a>
            <Link href="/comparatif" className="flex-1 text-center border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-colors">
              Voir tous les comparatifs
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
