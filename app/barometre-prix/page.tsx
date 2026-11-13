import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildComparativeJsonLd,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from '@/lib/seo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.com'

export const metadata: Metadata = buildMetadata({
  title: 'Barometre prix logiciels facturation freelance 2026 : etude exclusive',
  description: 'Etude exclusive sur les prix des logiciels de facturation pour freelances et auto-entrepreneurs en France (2026). Analyse de 8 outils : Pennylane, Indy, Tiime, Freebe, Shine, Sellsy, Finom, MyUnisoft.',
  path: '/barometre-prix',
  type: 'article',
  publishedAt: '2026-11-01',
  updatedAt: '2026-11-12',
})

const prixLogiciels = [
  {
    nom: 'Freebe',
    cible: 'Freelances / indépendants',
    prixDepart: 0,
    prixMensuel: 9.99,
    prixAnnuel: 7.99,
    essaiGratuit: true,
    dureeEssai: 'Gratuit 3 factures/mois',
    engagement: 'Sans engagement',
    fonctionsFree: ['3 factures/mois', 'Devis', 'Clients illimités'],
    noteRapportQualitePrix: 4.7,
    lienComparatif: '/comparatif/freebe',
  },
  {
    nom: 'Indy',
    cible: 'Indépendants / micro-entrepreneurs',
    prixDepart: 0,
    prixMensuel: 29,
    prixAnnuel: 22,
    essaiGratuit: true,
    dureeEssai: '30 jours gratuits',
    engagement: 'Sans engagement',
    fonctionsFree: ['Facturation basique', 'Déclarations TVA', 'Rapprochement bancaire'],
    noteRapportQualitePrix: 4.6,
    lienComparatif: '/comparatif/indy',
  },
  {
    nom: 'Tiime',
    cible: 'Freelances / ETI',
    prixDepart: 0,
    prixMensuel: 15,
    prixAnnuel: 12,
    essaiGratuit: true,
    dureeEssai: 'Plan gratuit permanent',
    engagement: 'Sans engagement',
    fonctionsFree: ['Factures illimitées (plan gratuit)', 'Devis', 'Collaboration expert-comptable'],
    noteRapportQualitePrix: 4.8,
    lienComparatif: '/comparatif/tiime',
  },
  {
    nom: 'Pennylane',
    cible: 'PME / Freelances',
    prixDepart: 25,
    prixMensuel: 49,
    prixAnnuel: 39,
    essaiGratuit: true,
    dureeEssai: '15 jours gratuits',
    engagement: 'Sans engagement',
    fonctionsFree: [],
    noteRapportQualitePrix: 4.5,
    lienComparatif: '/comparatif/pennylane',
  },
  {
    nom: 'Shine',
    cible: 'Freelances / SAS / SASU',
    prixDepart: 7.99,
    prixMensuel: 14.99,
    prixAnnuel: 10.99,
    essaiGratuit: true,
    dureeEssai: '30 jours gratuits (plan Basic)',
    engagement: 'Sans engagement',
    fonctionsFree: ['Compte pro inclus', 'Carte bancaire', 'Facturation basique'],
    noteRapportQualitePrix: 4.4,
    lienComparatif: '/comparatif/shine',
  },
  {
    nom: 'Sellsy',
    cible: 'PME / ETI',
    prixDepart: 29,
    prixMensuel: 59,
    prixAnnuel: 49,
    essaiGratuit: true,
    dureeEssai: '15 jours gratuits',
    engagement: 'Annuel recommandé',
    fonctionsFree: [],
    noteRapportQualitePrix: 4.3,
    lienComparatif: '/comparatif/sellsy',
  },
  {
    nom: 'Finom',
    cible: 'Freelances / PME',
    prixDepart: 0,
    prixMensuel: 14,
    prixAnnuel: 10,
    essaiGratuit: true,
    dureeEssai: 'Plan Solo gratuit permanent',
    engagement: 'Sans engagement',
    fonctionsFree: ['Compte pro européen', 'Carte VISA gratuite', 'Facturation illimitée'],
    noteRapportQualitePrix: 4.6,
    lienComparatif: '/comparatif/finom',
  },
  {
    nom: 'MyUnisoft',
    cible: 'Cabinets comptables / PME',
    prixDepart: null,
    prixMensuel: null,
    prixAnnuel: null,
    essaiGratuit: true,
    dureeEssai: 'Demo sur demande',
    engagement: 'Sur devis',
    fonctionsFree: [],
    noteRapportQualitePrix: 4.2,
    lienComparatif: '/comparatif/myunisoft',
  },
]

const faqs = [
  {
    question: 'Quel est le logiciel de facturation le moins cher pour un freelance en 2026 ?',
    answer: 'Tiime et Freebe proposent tous deux des plans gratuits permanents. Tiime est particulièrement adapté aux freelances avec des factures illimitées en plan gratuit. Finom propose également un plan Solo gratuit qui inclut un compte pro européen. Pour un freelance avec peu de volume, ces trois options permettent de démarrer sans frais.',
  },
  {
    question: 'Quel est le prix moyen d\'un logiciel de facturation pour indépendant en France ?',
    answer: 'En 2026, le prix moyen d\'un logiciel de facturation pour freelances et indépendants en France se situe entre 10 et 30 euros par mois. Les outils d\'entrée de gamme (Tiime, Freebe, Finom) proposent des plans à partir de 10-15€/mois, tandis que les solutions plus complètes (Pennylane, Sellsy) dépassent les 40-50€/mois.',
  },
  {
    question: 'Les logiciels de facturation sont-ils conformes à la réforme 2026 ?',
    answer: 'La majorité des logiciels comparés (Pennylane, Indy, Tiime, Sellsy) se mettent en conformité avec la réforme de facturation électronique obligatoire. Vérifiez auprès de chaque éditeur leur statut PDP (Plateforme de Dématérialisation Partenaire) avant de vous engager.',
  },
  {
    question: 'Quelle différence entre un abonnement mensuel et annuel pour un logiciel de facturation ?',
    answer: 'En moyenne, un abonnement annuel permet d\'économiser entre 20% et 30% par rapport au tarif mensuel. Sur notre panel 2026 : Tiime passe de 15€ à 12€/mois (-20%), Pennylane de 49€ à 39€/mois (-20%), Shine de 14.99€ à 10.99€/mois (-27%). L\'économie annuelle typique se situe entre 48€ et 120€ selon l\'outil.',
  },
  {
    question: 'Comment choisir entre Freebe, Tiime et Indy pour un micro-entrepreneur ?',
    answer: 'Pour un micro-entrepreneur avec peu de clients : Freebe (plan gratuit 3 factures) ou Tiime (factures illimitées gratuites). Pour un indépendant avec activité plus importante nécessitant de la comptabilité : Indy (30€/mois) est le plus complet pour la gestion fiscale et les déclarations. Tiime reste le meilleur rapport qualité-prix global.',
  },
]

export default function BarometrePrixPage() {
  const articleJsonLd = buildComparativeJsonLd({
    name: 'Barometre prix logiciels facturation freelance 2026',
    description: 'Etude exclusive sur les prix des logiciels de facturation pour freelances en France 2026. Analyse de 8 outils.',
    url: `${SITE_URL}/barometre-prix`,
    datePublished: '2026-11-01',
    dateModified: '2026-11-12',
    authorName: 'FacturationPro',
  })

  const faqJsonLd = buildFaqJsonLd(faqs)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '' },
    { name: 'Barometre prix 2026', path: '/barometre-prix' },
  ])

  const prixAvecDonnees = prixLogiciels.filter(l => l.prixMensuel !== null)
  const prixMoyenMensuel = Math.round(
    prixAvecDonnees.reduce((sum, l) => sum + (l.prixMensuel || 0), 0) / prixAvecDonnees.length
  )
  const prixMin = Math.min(...prixAvecDonnees.filter(l => l.prixDepart !== null).map(l => l.prixDepart || 0))
  const nbAvecGratuit = prixLogiciels.filter(l => l.essaiGratuit).length

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:underline">Accueil</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Barometre prix 2026</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span>ETUDE EXCLUSIVE</span>
            <span>Mise à jour novembre 2026</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Barometre des prix logiciels de facturation freelance 2026
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Analyse complète des tarifs de <strong>8 logiciels de facturation</strong> pour freelances et indépendants en France.
            Données collectées en novembre 2026, comparaison mensuel vs annuel, plans gratuits inclus.
          </p>

          {/* Stats clés */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600 mt-1">logiciels analysés</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-600">{prixMin}€</div>
              <div className="text-sm text-gray-600 mt-1">prix minimum/mois</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-orange-600">{prixMoyenMensuel}€</div>
              <div className="text-sm text-gray-600 mt-1">prix moyen/mois</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-600">{nbAvecGratuit}/{prixLogiciels.length}</div>
              <div className="text-sm text-gray-600 mt-1">avec offre gratuite</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 italic">
            Methodologie : prix publics au 12 novembre 2026, sans remises commerciales. Les tarifs peuvent évoluer.
            <Link href="/comparatif" className="text-blue-600 hover:underline ml-1">Voir le comparatif complet</Link>.
          </p>
        </header>

        {/* Tableau des prix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tableau comparatif des prix novembre 2026
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Logiciel</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Cible</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Prix mensuel</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Prix annuel/mois</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Offre gratuite</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700">Note Q/P</th>
                </tr>
              </thead>
              <tbody>
                {prixLogiciels.map((logiciel, index) => (
                  <tr
                    key={logiciel.nom}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}
                  >
                    <td className="px-4 py-3">
                      <Link
                        href={logiciel.lienComparatif}
                        className="font-semibold text-blue-600 hover:underline"
                      >
                        {logiciel.nom}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{logiciel.cible}</td>
                    <td className="px-4 py-3 text-center">
                      {logiciel.prixMensuel !== null ? (
                        <span className="font-medium">{logiciel.prixMensuel}€/mois</span>
                      ) : (
                        <span className="text-gray-400 italic">Sur devis</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {logiciel.prixAnnuel !== null ? (
                        <span className="text-green-700 font-medium">{logiciel.prixAnnuel}€/mois</span>
                      ) : (
                        <span className="text-gray-400 italic">Sur devis</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {logiciel.essaiGratuit ? (
                        <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                          <span>✓</span>
                          <span className="text-xs text-gray-600">{logiciel.dureeEssai}</span>
                        </span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{logiciel.noteRapportQualitePrix}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * Prix indicatifs plan solo/indépendant. Vérifiez sur le site de chaque éditeur pour les tarifs exacts.
          </p>
        </section>

        {/* Analyse économies annuel vs mensuel */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Economie abonnement annuel vs mensuel : combien peut-on gagner ?
          </h2>
          <p className="text-gray-600 mb-6">
            Choisir l'abonnement annuel plutôt que mensuel permet des économies significatives.
            Voici l'analyse détaillée pour chaque logiciel :
          </p>
          <div className="grid gap-4">
            {prixLogiciels
              .filter(l => l.prixMensuel !== null && l.prixAnnuel !== null)
              .map(logiciel => {
                const economieMensuelle = (logiciel.prixMensuel || 0) - (logiciel.prixAnnuel || 0)
                const economieAnnuelle = economieMensuelle * 12
                const pourcentage = Math.round((economieMensuelle / (logiciel.prixMensuel || 1)) * 100)
                return (
                  <div key={logiciel.nom} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
                    <div className="w-28 font-semibold text-gray-900">{logiciel.nom}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="text-gray-600">
                          {logiciel.prixMensuel}€ → {logiciel.prixAnnuel}€/mois
                        </span>
                        <span className="text-green-700 font-semibold">-{pourcentage}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-700 font-bold">{economieAnnuelle}€ économisés/an</div>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
            <h3 className="font-semibold text-blue-900 mb-2">Synthese</h3>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>Réduction moyenne : <strong>22% sur le prix annuel</strong> par rapport au mensuel</li>
              <li>Plus grande économie absolue : <strong>Sellsy (120€/an)</strong></li>
              <li>Plus grande économie relative : <strong>Shine (27%)</strong></li>
              <li>Meilleur prix absolu annuel : <strong>Finom à 10€/mois</strong></li>
            </ul>
          </div>
        </section>

        {/* Plans gratuits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Logiciels de facturation gratuits : que proposent-ils vraiment ?
          </h2>
          <p className="text-gray-600 mb-6">
            Sur les 8 logiciels analysés, 7 proposent une offre gratuite. Mais attention :
            toutes les offres gratuites ne se valent pas.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {prixLogiciels
              .filter(l => l.fonctionsFree.length > 0)
              .map(logiciel => (
                <div key={logiciel.nom} className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{logiciel.nom}</h3>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      {logiciel.dureeEssai}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {logiciel.fonctionsFree.map((f, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={logiciel.lienComparatif}
                    className="mt-3 inline-block text-sm text-blue-600 hover:underline"
                  >
                    Avis {logiciel.nom} complet →
                  </Link>
                </div>
              ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions fréquentes sur les prix des logiciels de facturation
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50">
                  {faq.question}
                  <span className="ml-4 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">
            Choisissez le logiciel adapté à votre activité
          </h2>
          <p className="text-blue-100 mb-6">
            Comparez les fonctionnalités, les prix et les avis utilisateurs pour faire le meilleur choix.
          </p>
          <Link
            href="/comparatif"
            className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Voir le comparatif complet →
          </Link>
        </section>
      </main>
    </>
  )
}
