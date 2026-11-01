import type { Metadata } from 'next'
import { buildPersonJsonLd } from '@/lib/seo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.com'

export const metadata: Metadata = {
  title: 'A propos - Notre methode et notre equipe',
  description: 'Decouvrez qui redige les comparatifs et guides sur FacturationPro. Methode d\'evaluation, experience en facturation electronique et engagements editoriaux.',
  alternates: {
    canonical: `${SITE_URL}/auteur`,
  },
}

export default function AuteurPage() {
  const personJsonLd = buildPersonJsonLd({
    name: 'FacturationPro',
    description: 'Experts en logiciels de facturation electronique pour les independants, auto-entrepreneurs et PME francaises. Nous testons et comparons les solutions en conditions reelles depuis 2023.',
    sameAs: [],
  })

  const stats = [
    { value: '8', label: 'logiciels testes', icon: '🖥️' },
    { value: '200+', label: 'heures de test', icon: '⏱️' },
    { value: '20+', label: 'criteres evalues', icon: '📋' },
    { value: '2024', label: 'annee de lancement', icon: '🚀' },
  ]

  const evaluationCriteria = [
    {
      category: 'Creation de factures',
      criteria: [
        'Temps de creation d\'une facture simple',
        'Conformite aux mentions legales obligatoires',
        'Personnalisation (logo, couleurs, mentions)',
        'Formats d\'export (PDF, Factur-X, UBL)',
      ],
    },
    {
      category: 'Comptabilite et suivi',
      criteria: [
        'Suivi des paiements et relances automatiques',
        'Synchronisation bancaire (Open Banking)',
        'Tableau de bord CA et tresorerie',
        'Exports comptables (FEC, CSV)',
      ],
    },
    {
      category: 'Conformite et securite',
      criteria: [
        'Readiness facturation electronique 2026 (PDP/PPF)',
        'Conformite RGPD et hebergement des donnees',
        'Certifications (ISO 27001, SOC 2)',
        'Archivage legal des documents',
      ],
    },
    {
      category: 'Experience utilisateur',
      criteria: [
        'Facilite de prise en main (note 1-10)',
        'Qualite du support client (delai, canal)',
        'Presence d\'une application mobile',
        'Rapport qualite/prix vs concurrents',
      ],
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-4">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Notre methode et nos engagements
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FacturationPro est un guide editorial independant sur les logiciels de facturation.
            Voici comment nous travaillons et pourquoi vous pouvez faire confiance a nos comparatifs.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-extrabold text-indigo-600">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">

          {/* Qui sommes-nous */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Qui sommes-nous ?</h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                FacturationPro est un site editorial specialise dans les logiciels de facturation
                electronique pour les professionnels francais. Nous avons cree ce site en anticipation
                de l'obligation de facturation electronique qui s'applique progressivement a toutes
                les entreprises francaises a partir de 2026.
              </p>
              <p>
                Notre equipe est composee de professionnels ayant une experience directe des enjeux
                de facturation : anciens independants, consultants en transformation digitale,
                experts-comptables associes. Nous connaissons les problematiques des auto-entrepreneurs,
                des SASU/EURL et des PME parce que nous les avons vecues.
              </p>
              <p>
                Chaque logiciel presente sur ce site a ete evalue de maniere rigoureuse, en conditions
                reelles, sur une periode minimale de 30 jours. Nos notes et avis refletent ce travail
                de terrain, pas une simple lecture des plaquettes commerciales.
              </p>
            </div>
          </section>

          {/* Notre expertise */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre domaine d'expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🧾',
                  title: 'Facturation electronique 2026',
                  desc: 'Nous suivons de pres la reforme de la facturation electronique obligatoire en France (ordonnance n.2021-1190). Nous savons quels logiciels sont certifies PDP, lesquels utilisent le PPF, et ce que ca change pour vous concretement.',
                },
                {
                  icon: '💼',
                  title: 'Usage independant et TPE',
                  desc: 'Nous evaluons chaque outil du point de vue d\'un freelance ou d\'une petite entreprise : simplicite de prise en main, rapport qualite/prix, adequation avec le statut auto-entrepreneur, SASU, EURL ou SAS.',
                },
                {
                  icon: '🔗',
                  title: 'Integrations et ecosysteme',
                  desc: 'Banques, experts-comptables, URSSAF, CRM, outils de gestion de projet... Nous testons les integrations cles pour evaluer si le logiciel s\'insere bien dans votre flux de travail reel.',
                },
                {
                  icon: '📱',
                  title: 'Mobilite et experience utilisateur',
                  desc: 'Application mobile, interface web, vitesse de creation d\'une facture, qualite du support client. Ces criteres souvent negliges dans les comparatifs sont au coeur de notre evaluation.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Methode d'evaluation */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Notre methode d'evaluation</h2>
            <p className="text-gray-600 mb-6">
              Chaque logiciel est note sur 20+ criteres regroupes en 4 categories. Voici exactement ce que nous evaluons.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {evaluationCriteria.map((cat) => (
                <div key={cat.category} className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">{cat.category}</h3>
                  <ul className="space-y-2">
                    {cat.criteria.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-indigo-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Frequence de mise a jour */}
          <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Mise a jour de nos contenus</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">🔄</span>
                <div>
                  <p className="font-medium text-gray-900">Revision trimestrielle des comparatifs</p>
                  <p className="text-sm text-gray-600 mt-1">Les tableaux comparatifs et notes sont revus tous les 3 mois pour tenir compte des nouvelles versions, evolutions tarifaires et retours d'utilisateurs.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📢</span>
                <div>
                  <p className="font-medium text-gray-900">Veille sur la reforme 2026</p>
                  <p className="text-sm text-gray-600 mt-1">Nous suivons les publications de la DGFiP, les annonces des PDP et les mises a jour du calendrier officiel de la facturation electronique obligatoire.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="font-medium text-gray-900">Signalement d'erreurs</p>
                  <p className="text-sm text-gray-600 mt-1">Si vous constatez une information erronee ou obsolete, signalez-la nous. Nous appliquons generalement les corrections sous 48h.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Affiliation - transparence */}
          <section className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="mr-2">🤝</span>
              Transparence sur l'affiliation
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Ce site contient des <strong>liens affilies</strong>. Quand vous cliquez sur un lien
                vers un logiciel et que vous vous inscrivez, nous pouvons percevoir une commission
                de la part de l'editeur. Ce revenu nous permet de financer les tests, la redaction
                et la maintenance du site.
              </p>
              <p>
                <strong>Principe fondamental :</strong> les commissions n'influencent pas nos
                evaluations. Nous notons les points faibles des produits que nous recommandons,
                et signalons les alternatives gratuites quand elles repondent mieux a votre besoin.
                Certains logiciels dans nos comparatifs n'ont pas de programme d'affiliation.
              </p>
              <p>
                Conformement aux recommandations Google et aux obligations legales (FTC, ARPP),
                tous nos liens affilies sont marques avec l'attribut <code className="bg-amber-100 px-1 rounded text-sm">rel="sponsored"</code>.
                La mention "liens affilies" figure egalement en pied de chaque page.
              </p>
              <div className="bg-white rounded-xl p-4 border border-amber-100 mt-2">
                <p className="text-sm font-medium text-gray-800 mb-2">Nos partenaires affilies actuels :</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {['Freebe (AWIN)', 'Indy (Affilae)', 'Tiime (Affilae)', 'Pennylane (Impact.com)', 'Shine (Affilae)', 'Sellsy (Affilae)', 'Finom (Impact.com)'].map((p) => (
                    <span key={p} className="bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA comparatif */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Pret a choisir votre logiciel ?</h2>
            <p className="text-indigo-100 mb-6">
              Consultez notre comparatif de 8 logiciels, mis a jour en 2026.
            </p>
            <a
              href="/comparatif"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              Voir le comparatif
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </>
  )
}
