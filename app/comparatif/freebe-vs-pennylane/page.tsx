import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Freebe vs Pennylane 2026 : lequel choisir pour votre facturation ?',
  description: 'Comparatif Freebe vs Pennylane : fonctionnalites, tarifs, interface, support. Notre verdict pour choisir le meilleur logiciel de facturation freelance en 2026.',
  alternates: { canonical: 'https://facturationpro.com/comparatif/freebe-vs-pennylane' },
  openGraph: {
    title: 'Freebe vs Pennylane 2026 : comparatif complet',
    description: 'Freebe ou Pennylane ? On compare les deux solutions leaders pour les freelances et independants francais.',
    type: 'article',
  },
}

const FREEBE_URL = 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=freebe-vs-pennylane&p=https%3A%2F%2Fwww.freebe.me%2F'
const PENNYLANE_URL = 'https://pennylane.com/fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-pennylane'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Freebe vs Pennylane 2026 : lequel choisir pour votre facturation ?',
  description: 'Comparatif Freebe vs Pennylane : fonctionnalites, tarifs, interface, support.',
  author: { '@type': 'Organization', name: 'FacturationPro', url: 'https://facturationpro.com' },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  publisher: { '@type': 'Organization', name: 'FacturationPro' },
}

const criteria = [
  { label: 'Interface utilisateur', freebe: '9/10', pennylane: '8/10', winner: 'freebe' },
  { label: 'Facturation et devis', freebe: '9/10', pennylane: '9/10', winner: 'egal' },
  { label: 'Suivi de temps', freebe: '9/10', pennylane: '6/10', winner: 'freebe' },
  { label: 'Comptabilite', freebe: '7/10', pennylane: '9/10', winner: 'pennylane' },
  { label: 'Collaboration expert-comptable', freebe: '7/10', pennylane: '10/10', winner: 'pennylane' },
  { label: 'Application mobile', freebe: '8/10', pennylane: '8/10', winner: 'egal' },
  { label: 'Rapport qualite/prix', freebe: '9/10', pennylane: '7/10', winner: 'freebe' },
  { label: 'Support client', freebe: '8/10', pennylane: '8/10', winner: 'egal' },
]

export default function FreebeVsPennylane() {
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
              <span className="text-gray-800 font-medium">Freebe vs Pennylane</span>
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
              Freebe vs Pennylane 2026 : lequel choisir pour votre facturation ?
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Freebe et Pennylane sont deux des solutions de facturation et comptabilite les plus populaires chez les freelances et independants francais. Mais elles ne s&apos;adressent pas tout a fait au meme profil. On compare tout en detail pour vous aider a choisir.
            </p>
          </header>

          {/* Verdict rapide */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Freebe</p>
                  <p className="text-sm text-indigo-600 font-semibold">Note : 4,5/5</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Le choix ideal pour les freelances qui veulent gerer leur activite de bout en bout : facturation, suivi de temps, projets, notes de frais. Interface tres intuitive.
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ideal pour :</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-4">
                <li>Freelances en SASU ou EURL</li>
                <li>Consultants, developpeurs, designers</li>
                <li>Ceux qui facturent a l&apos;heure ou par projet</li>
              </ul>
              <p className="text-xs text-gray-500 mb-3">A partir de 9,99 EUR/mois · Essai gratuit 30 jours</p>
              <a href={FREEBE_URL} target="_blank" rel="noopener sponsored" className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
                Essayer Freebe gratuitement
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
                La meilleure solution si vous travaillez avec un expert-comptable ou souhaitez une comptabilite plus rigoureuse. Collaboration en temps reel avec votre EC integree.
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ideal pour :</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-4">
                <li>Freelances avec expert-comptable</li>
                <li>Professions liberales reglementees</li>
                <li>Entreprises avec plusieurs collaborateurs</li>
              </ul>
              <p className="text-xs text-gray-500 mb-3">A partir de 26 EUR/mois · Demo gratuite disponible</p>
              <a href={PENNYLANE_URL} target="_blank" rel="noopener sponsored" className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
                Decouvrir Pennylane
              </a>
            </div>
          </div>

          {/* Tableau comparatif */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tableau comparatif point par point</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left py-4 px-5 font-semibold text-gray-700 w-1/2">Critere</th>
                    <th className="text-center py-4 px-4 font-semibold text-indigo-700">Freebe</th>
                    <th className="text-center py-4 px-4 font-semibold text-emerald-700">Pennylane</th>
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">{row.label}</td>
                      <td className={`py-3.5 px-4 text-center font-semibold ${row.winner === 'freebe' ? 'text-indigo-600' : 'text-gray-500'}`}>
                        {row.freebe}
                        {row.winner === 'freebe' && <span className="ml-1 text-indigo-400">★</span>}
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Freebe en detail</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Freebe est ne en 2016 avec une vision claire : creer le couteau suisse du freelance francais. La plateforme couvre la facturation, le suivi de temps, la gestion de projets, les notes de frais et une comptabilite simplifiee. L&apos;interface, particulierement soignee, permet de creer une facture professionnelle en moins de deux minutes.
              </p>
              <p>
                <strong>Point fort majeur :</strong> le suivi de temps integre directement lie a la facturation. Si vous facturez a l&apos;heure, Freebe transforme automatiquement vos temps suivis en lignes de facturation. Un gain de temps considerable et zero risque d&apos;oubli.
              </p>
              <p>
                <strong>Limite principale :</strong> la comptabilite reste simplifiee. Si vous avez besoin d&apos;une vraie collaboration temps reel avec votre expert-comptable, Pennylane va plus loin.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pennylane en detail</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Pennylane se positionne comme le pont entre le freelance et son expert-comptable. La plateforme permet une collaboration en temps reel : votre EC acces directement a votre dossier, voit vos factures, categorise les transactions et prepare la cloture annuelle directement dans l&apos;outil. Resultat : moins de temps passe a envoyer des fichiers Excel, moins d&apos;erreurs, et une vision financiere plus claire.
              </p>
              <p>
                <strong>Point fort majeur :</strong> la reconciliation bancaire automatique et la comptabilite analytique. Pennylane importe vos releves bancaires, categorise automatiquement les transactions et tient votre comptabilite en temps reel. Pour les structures qui ont un expert-comptable, c&apos;est un gain de temps considerable.
              </p>
              <p>
                <strong>Limite principale :</strong> le prix est plus eleve (26 EUR/mois minimum) et l&apos;outil peut paraitre complexe pour un freelance qui cherche juste a faire de la facturation simple. Si vous n&apos;avez pas d&apos;EC ou peu de transactions, Freebe est plus adapte.
              </p>
            </div>
          </section>

          {/* Verdict */}
          <section className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre verdict</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-indigo-700 mb-2">Choisissez Freebe si :</p>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li>Vous etes freelance en solo (SASU, EURL, micro)</li>
                  <li>Vous facturez a l&apos;heure ou au projet</li>
                  <li>Vous gerez votre compta en autonomie</li>
                  <li>Votre budget est inferieur a 15 EUR/mois</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-emerald-700 mb-2">Choisissez Pennylane si :</p>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li>Vous avez un expert-comptable</li>
                  <li>Vous avez beaucoup de transactions bancaires</li>
                  <li>Vous visez une croissance de votre structure</li>
                  <li>La comptabilite rigoureuse est une priorite</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={FREEBE_URL} target="_blank" rel="noopener sponsored" className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
              Essayer Freebe gratuitement
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
