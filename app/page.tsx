import type { Metadata } from 'next'
import { buildMetadata, buildFaqJsonLd, buildBreadcrumbJsonLd } from '@/lib/seo'
import { buildAffiliateLink } from '@/lib/affiliate'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.fr'

export const metadata: Metadata = buildMetadata({
  title: 'Facturation électronique obligatoire 2026 — Êtes-vous prêt ?',
  description: 'La facturation électronique devient obligatoire pour toutes les entreprises françaises. Découvrez les échéances, les obligations légales et les logiciels conformes pour être en règle.',
  path: '/',
  type: 'website',
})

const faqs = [
  {
    question: 'Qui est concerné par la facturation électronique obligatoire ?',
    answer: 'Toutes les entreprises assujetties à la TVA établies en France sont concernées. Cela inclut les TPE, PME, ETI et grandes entreprises. Les auto-entrepreneurs sont également concernés s\'ils sont assujettis à la TVA.',
  },
  {
    question: 'Quand la facturation électronique devient-elle obligatoire ?',
    answer: 'L\'obligation s\'applique en plusieurs étapes : à partir du 1er septembre 2026, toutes les entreprises doivent être capables de RECEVOIR des factures électroniques. L\'obligation d\'ÉMETTRE dépend de la taille de l\'entreprise (grandes entreprises d\'abord, puis ETI, puis PME/TPE).',
  },
  {
    question: 'Qu\'est-ce qu\'une plateforme de dématérialisation partenaire (PDP) ?',
    answer: 'Une PDP est une plateforme agréée par l\'État pour transmettre et recevoir des factures électroniques. Contrairement à un simple logiciel de facturation, une PDP est certifiée par la DGFiP et garantit la conformité légale de vos échanges.',
  },
  {
    question: 'Mon logiciel de facturation actuel sera-t-il suffisant ?',
    answer: 'Pas nécessairement. Votre logiciel doit être connecté à une PDP ou au Portail Public de Facturation (PPF). Vérifiez que votre éditeur est en cours de certification PDP ou qu\'il s\'interface avec une plateforme agréée.',
  },
  {
    question: 'Quelles sont les sanctions si je ne suis pas en conformité ?',
    answer: 'Le non-respect de l\'obligation de facturation électronique peut entraîner une amende de 15 euros par facture, avec un plafond de 15 000 euros par an. Le risque principal est surtout le blocage de vos relations commerciales avec des partenaires qui seront eux en conformité.',
  },
  {
    question: 'Quel format utiliser pour les factures électroniques ?',
    answer: 'Les formats acceptés sont : Factur-X (PDF/A-3 avec données XML intégrées), UBL (Universal Business Language) et CII (Cross Industry Invoice). Le format Factur-X est le plus simple pour les PME car il ressemble à un PDF classique tout en contenant les données structurées obligatoires.',
  },
]

const logiciels = [
  {
    id: 1,
    name: 'Pennylane',
    description: 'Solution tout-en-one : comptabilité + facturation électronique native. PDP en cours de certification.',
    badge: '⭐ Recommandé PME',
    price: 'À partir de 26€/mois',
    pdp: true,
    url: buildAffiliateLink({
      baseUrl: 'https://www.pennylane.com',
      network: 'awin',
      programId: '23751',
      subId: 'homepage',
    }),
  },
  {
    id: 2,
    name: 'Sellsy',
    description: 'CRM + facturation intégrés. Interface intuitive et conformité facturation électronique garantie.',
    badge: '🏢 Recommandé ETI',
    price: 'À partir de 35€/mois',
    pdp: true,
    url: buildAffiliateLink({
      baseUrl: 'https://www.sellsy.fr',
      network: 'awin',
      programId: '23752',
      subId: 'homepage',
    }),
  },
  {
    id: 3,
    name: 'Axonaut',
    description: 'ERP PME français avec module facturation électronique. Déploiement rapide, support francophone.',
    badge: '🇫🇷 100% Français',
    price: 'À partir de 29€/mois',
    pdp: false,
    url: buildAffiliateLink({
      baseUrl: 'https://www.axonaut.com',
      network: 'awin',
      programId: '23753',
      subId: 'homepage',
    }),
  },
]

export default function HomePage() {
  const faqJsonLd = buildFaqJsonLd(faqs)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO — angle pain point direct */}
      <section className="bg-gradient-to-b from-red-50 to-white border-b border-red-100">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            ⚠️ Obligation légale — Entrée en vigueur : 1er septembre 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            La facturation électronique<br />
            <span className="text-red-600">devient obligatoire</span> pour votre entreprise
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Toutes les entreprises françaises assujetties à la TVA doivent migrer vers la facturation électronique.
            Êtes-vous en conformité ?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/guide" className="btn-primary text-lg px-8 py-4">
              Comprendre l&apos;obligation →
            </a>
            <a href="/comparatif" className="btn-secondary text-lg px-8 py-4">
              Comparer les logiciels conformes
            </a>
          </div>
        </div>
      </section>

      {/* ÉCHÉANCES CLÉS */}
      <section className="section max-w-5xl">
        <h2 className="text-2xl font-bold text-center mb-10">Les échéances à ne pas manquer</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 border-l-4 border-orange-400">
            <div className="text-sm font-semibold text-orange-600 mb-1">1er septembre 2026</div>
            <div className="font-bold text-lg mb-2">Réception obligatoire</div>
            <p className="text-gray-600 text-sm">Toutes les entreprises doivent être capables de recevoir des factures électroniques via une PDP ou le portail public.</p>
          </div>
          <div className="card p-6 border-l-4 border-red-500">
            <div className="text-sm font-semibold text-red-600 mb-1">1er septembre 2026</div>
            <div className="font-bold text-lg mb-2">Émission — Grandes entreprises</div>
            <p className="text-gray-600 text-sm">Les grandes entreprises et ETI doivent émettre toutes leurs factures en format électronique structuré.</p>
          </div>
          <div className="card p-6 border-l-4 border-red-700">
            <div className="text-sm font-semibold text-red-700 mb-1">1er septembre 2027</div>
            <div className="font-bold text-lg mb-2">Émission — PME/TPE</div>
            <p className="text-gray-600 text-sm">Les PME et TPE rejoignent l&apos;obligation d&apos;émission. Aucune exception : toutes les factures B2B doivent être électroniques.</p>
          </div>
        </div>
      </section>

      {/* CE QUI CHANGE VRAIMENT */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Ce qui change concrètement</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-red-600">❌ Ce qui ne suffira plus</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> Envoyer un PDF par email</li>
                <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> Utiliser un logiciel non certifié</li>
                <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> Factures Word ou Excel</li>
                <li className="flex gap-3"><span className="text-red-500 mt-1">✗</span> Factures papier entre entreprises</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-green-600">✅ Ce qui sera requis</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Format structuré : Factur-X, UBL ou CII</li>
                <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Transmission via une PDP agréée</li>
                <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Archivage légal 10 ans</li>
                <li className="flex gap-3"><span className="text-green-500 mt-1">✓</span> Suivi du statut des factures en temps réel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOGICIELS CONFORMES — TL;DR */}
      <section className="section max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Logiciels conformes à la réforme</h2>
          <a href="/comparatif" className="text-primary-600 hover:underline text-sm font-medium">
            Voir le comparatif complet →
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {logiciels.map((logiciel) => (
            <div key={logiciel.id} className="card p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-lg">{logiciel.name}</span>
                {logiciel.pdp && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">PDP ✓</span>
                )}
              </div>
              <div className="text-sm text-gray-500 mb-3">{logiciel.price}</div>
              <p className="text-gray-600 text-sm mb-4">{logiciel.description}</p>
              <div className="text-xs text-primary-700 font-semibold mb-4">{logiciel.badge}</div>
              <a
                href={logiciel.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Essai gratuit →
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-6">
          Ce site contient des liens affiliés. Nous percevons une commission sans frais supplémentaires pour vous.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Questions fréquentes sur la réforme</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card p-5 group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-600 ml-2 flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA GUIDE */}
      <section className="section max-w-3xl text-center">
        <div className="bg-primary-50 border border-primary-200 rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-4">Besoin d&apos;un guide complet ?</h2>
          <p className="text-gray-600 mb-6">
            Notre guide détaillé explique étape par étape comment migrer vers la facturation électronique :
            choisir sa PDP, paramétrer ses logiciels, former ses équipes.
          </p>
          <a href="/guide" className="btn-primary text-lg px-8 py-4">
            Lire le guide complet →
          </a>
        </div>
      </section>
    </>
  )
}
