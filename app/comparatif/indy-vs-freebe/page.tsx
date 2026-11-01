import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Indy vs Freebe 2026 : comparatif complet pour freelances',
  description: 'Indy ou Freebe ? Comparatif complet : fonctionnalites, tarifs, comptabilite, interface. Notre avis pour choisir le bon logiciel de facturation en 2026.',
  alternates: { canonical: 'https://facturationpro.com/comparatif/indy-vs-freebe' },
  openGraph: {
    title: 'Indy vs Freebe 2026 : lequel choisir ?',
    description: 'On compare Indy et Freebe sur tous les criteres pour vous aider a choisir le meilleur outil de gestion freelance.',
    type: 'article',
  },
}

const INDY_URL = 'https://www.indy.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-indy'
const FREEBE_URL = 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=freebe-vs-indy&p=https%3A%2F%2Fwww.freebe.me%2F'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Indy vs Freebe 2026 : comparatif complet pour freelances',
  description: 'Indy ou Freebe ? Comparatif complet : fonctionnalites, tarifs, comptabilite, interface.',
  author: { '@type': 'Organization', name: 'FacturationPro', url: 'https://facturationpro.com' },
  datePublished: '2026-11-01',
  dateModified: '2026-11-01',
  publisher: { '@type': 'Organization', name: 'FacturationPro' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://facturationpro.com/comparatif/indy-vs-freebe' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Indy ou Freebe : lequel est le mieux pour un freelance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cela depend de votre statut. Indy est superieur pour les auto-entrepreneurs et TNS qui ont besoin de declarations URSSAF automatiques et d\'un suivi comptable complet. Freebe excelle pour les freelances qui veulent une gestion du temps et des projets integree, avec une interface plus visuelle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Indy est-il vraiment gratuit ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Indy propose une offre gratuite avec les fonctionnalites de base (facturation, suivi de tresorerie). Les fonctionnalites avancees comme les declarations URSSAF automatiques et la comptabilite complete sont accessibles dans les plans payants (a partir de 9 EUR/mois).',
      },
    },
    {
      '@type': 'Question',
      name: 'Freebe convient-il aux auto-entrepreneurs ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Freebe est entierement adapte aux auto-entrepreneurs. Il permet de creer des devis et factures conformes, de suivre le CA par rapport aux seuils micro-entreprise, et de gerer les notes de frais. La version gratuite est suffisante pour de nombreux auto-entrepreneurs debutants.',
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
    { '@type': 'ListItem', position: 3, name: 'Indy vs Freebe', item: 'https://facturationpro.com/comparatif/indy-vs-freebe' },
  ],
}

const criteria = [
  { label: 'Interface utilisateur', indy: '8/10', freebe: '9/10', winner: 'freebe' },
  { label: 'Facturation et devis', indy: '8/10', freebe: '9/10', winner: 'freebe' },
  { label: 'Suivi de temps', indy: '5/10', freebe: '9/10', winner: 'freebe' },
  { label: 'Comptabilite et fiscalite', indy: '10/10', freebe: '7/10', winner: 'indy' },
  { label: 'Declaration URSSAF', indy: '10/10', freebe: '6/10', winner: 'indy' },
  { label: 'Application mobile', indy: '8/10', freebe: '8/10', winner: 'egal' },
  { label: 'Rapport qualite/prix', indy: '9/10', freebe: '9/10', winner: 'egal' },
  { label: 'Support client', indy: '8/10', freebe: '8/10', winner: 'egal' },
]

export default function IndyVsFreebe() {
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
              <span className="text-gray-800 font-medium">Indy vs Freebe</span>
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
              Indy vs Freebe 2026 : comparatif complet pour freelances
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Indy et Freebe sont deux des logiciels de gestion les plus utilises par les independants francais. L&apos;un mise tout sur la comptabilite et les obligations fiscales, l&apos;autre sur la gestion de projets et le suivi de temps. On compare tout pour vous aider a choisir.
            </p>
          </header>

          {/* Verdict rapide */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Indy</p>
                  <p className="text-sm text-blue-600 font-semibold">Note : 4,4/5</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Le choix numero un pour les auto-entrepreneurs et micro-entrepreneurs. Indy calcule automatiquement vos cotisations, prepare vos declarations et s&apos;integre directement avec le portail URSSAF.
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ideal pour :</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-4">
                <li>Auto-entrepreneurs et micro-entrepreneurs</li>
                <li>Professions liberales avec obligations fiscales complexes</li>
                <li>Ceux qui veulent tout automatiser (TVA, IS, cotisations)</li>
              </ul>
              <p className="text-xs text-gray-500 mb-3">A partir de 0 EUR/mois (plan gratuit) · Essai Premium 30 jours</p>
              <a href={INDY_URL} target="_blank" rel="noopener sponsored" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
                Essayer Indy gratuitement
              </a>
            </div>

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
                Le meilleur outil si vous facturez a la journee ou a l&apos;heure. Le suivi de temps integre transforme automatiquement vos heures trackees en lignes de facture, sans saisie manuelle.
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ideal pour :</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4 mb-4">
                <li>Freelances en SASU ou EURL</li>
                <li>Consultants, developpeurs, designers au forfait ou TJM</li>
                <li>Ceux qui gèrent plusieurs projets simultanes</li>
              </ul>
              <p className="text-xs text-gray-500 mb-3">A partir de 9,99 EUR/mois · Essai gratuit 30 jours</p>
              <a href={FREEBE_URL} target="_blank" rel="noopener sponsored" className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors">
                Essayer Freebe gratuitement
              </a>
            </div>
          </div>

          {/* Tableau comparatif */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tableau comparatif Indy vs Freebe</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left py-4 px-5 font-semibold text-gray-700 w-1/2">Critere</th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-700">Indy</th>
                    <th className="text-center py-4 px-4 font-semibold text-indigo-700">Freebe</th>
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="py-3.5 px-5 text-gray-700 font-medium">{row.label}</td>
                      <td className={`py-3.5 px-4 text-center font-semibold ${row.winner === 'indy' ? 'text-blue-600' : 'text-gray-500'}`}>
                        {row.indy}
                        {row.winner === 'indy' && <span className="ml-1 text-blue-400">★</span>}
                      </td>
                      <td className={`py-3.5 px-4 text-center font-semibold ${row.winner === 'freebe' ? 'text-indigo-600' : 'text-gray-500'}`}>
                        {row.freebe}
                        {row.winner === 'freebe' && <span className="ml-1 text-indigo-400">★</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Sections detail */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indy en detail</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Indy (anciennement Shine) est ne avec une ambition claire : rendre la comptabilite accessible aux independants sans passer par un expert-comptable. Le logiciel calcule automatiquement vos cotisations URSSAF, prepare vos declarations de TVA, et propose meme un accompagnement pour la liasse fiscale annuelle. Pour un auto-entrepreneur, c&apos;est un gain de temps considerable.
              </p>
              <p>
                <strong>Point fort majeur :</strong> l&apos;integration URSSAF. Indy synchronise vos donnees avec le portail URSSAF et prepare vos declarations en quelques clics. Pour les auto-entrepreneurs qui declarent leurs revenus tous les mois ou tous les trimestres, c&apos;est une revolution.
              </p>
              <p>
                <strong>Limite principale :</strong> le suivi de temps est absent ou tres basique. Si vous facturez a l&apos;heure et avez besoin de tracker vos temps par projet, Freebe est nettement superieur sur ce point.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Freebe en detail</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Freebe s&apos;est impose comme la reference pour les freelances en SASU ou EURL qui ont besoin de gerer leurs projets de bout en bout. L&apos;outil couvre la facturation, les devis, le suivi de temps par projet, les notes de frais et une comptabilite simplifiee. L&apos;interface est particulierement soignee et intuitive.
              </p>
              <p>
                <strong>Point fort majeur :</strong> le timer de suivi de temps directement integre a la facturation. Vous demarrez un timer sur un projet, et a la fin du mois, Freebe genere automatiquement votre facture avec toutes les lignes de temps trackees. Zero saisie manuelle, zero oubli.
              </p>
              <p>
                <strong>Limite principale :</strong> la partie fiscale est moins developpee qu&apos;Indy. Si vous etes auto-entrepreneur avec des obligations URSSAF recurrentes, Indy vous simplifiera davantage la vie sur ce point precis.
              </p>
            </div>
          </section>

          {/* Verdict */}
          <section className="bg-gray-50 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre verdict : Indy ou Freebe ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-blue-700 mb-2">Choisissez Indy si :</p>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li>Vous etes auto-entrepreneur ou micro-entrepreneur</li>
                  <li>Les declarations URSSAF vous font peur</li>
                  <li>Vous voulez une comptabilite automatisee sans EC</li>
                  <li>Vous avez un budget serre (plan gratuit disponible)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-indigo-700 mb-2">Choisissez Freebe si :</p>
                <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li>Vous facturez a l&apos;heure ou au TJM</li>
                  <li>Vous gerez plusieurs projets en parallele</li>
                  <li>Vous etes en SASU ou EURL</li>
                  <li>L&apos;interface et l&apos;experience utilisateur sont prioritaires</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={INDY_URL} target="_blank" rel="noopener sponsored" className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
              Essayer Indy gratuitement
            </a>
            <a href={FREEBE_URL} target="_blank" rel="noopener sponsored" className="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
              Essayer Freebe gratuitement
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
