import type { Metadata } from 'next'
import ComparatorTable from '@/components/ComparatorTable'
import {
  buildComparativeJsonLd,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from '@/lib/seo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
const SITE_NAME = process.env.SITE_NAME || 'Site Affiliation'

export const metadata: Metadata = buildMetadata({
  title: 'Comparatif des meilleures solutions — Avis & Test 2026',
  description: 'Découvrez notre comparatif complet des meilleures solutions. Tests en conditions réelles, avis vérifiés et recommandation pour chaque profil.',
  path: '/comparatif',
  type: 'article',
  publishedAt: '2026-01-01',
  updatedAt: new Date().toISOString().split('T')[0],
})

// Exemple de données — à remplacer par vos vrais produits
const products = [
  {
    id: 1,
    name: 'Solution A',
    rating: 4.8,
    reviewCount: 1247,
    price: 'À partir de 29€/mois',
    badge: 'Meilleur rapport qualité/prix',
    badgeColor: 'bg-green-100 text-green-800',
    pros: [
      'Interface intuitive, prise en main en moins d\'1h',
      'Support réactif 7j/7 par chat',
      'Intégrations natives avec les principaux outils',
      'Essai gratuit 14 jours sans CB',
    ],
    cons: [
      'Rapports avancés réservés au plan Pro',
      'Export limité en CSV sur le plan de base',
    ],
    ctaUrl: '#',
    ctaText: 'Essayer gratuitement',
    features: {
      'Import automatique': true,
      'Signature électronique': true,
      'Multi-utilisateurs': true,
      'API disponible': true,
      'Application mobile': true,
      'Rapports avancés': false,
    },
  },
  {
    id: 2,
    name: 'Solution B',
    rating: 4.5,
    reviewCount: 863,
    price: 'À partir de 19€/mois',
    badge: 'Le moins cher',
    badgeColor: 'bg-blue-100 text-blue-800',
    pros: [
      'Tarif le plus compétitif du marché',
      'Fonctionnalités de base complètes',
      'Migration depuis la concurrence assistée',
    ],
    cons: [
      'Support uniquement par email (délai 24-48h)',
      'Pas d\'application mobile native',
      'Pas d\'API publique',
    ],
    ctaUrl: '#',
    ctaText: 'Voir les tarifs',
    features: {
      'Import automatique': true,
      'Signature électronique': false,
      'Multi-utilisateurs': true,
      'API disponible': false,
      'Application mobile': false,
      'Rapports avancés': false,
    },
  },
  {
    id: 3,
    name: 'Solution C',
    rating: 4.3,
    reviewCount: 512,
    price: 'À partir de 49€/mois',
    badge: 'Le plus complet',
    badgeColor: 'bg-purple-100 text-purple-800',
    pros: [
      'Fonctionnalités les plus avancées du marché',
      'Rapports personnalisables à l\'infini',
      'Support dédié avec gestionnaire de compte',
    ],
    cons: [
      'Courbe d\'apprentissage plus longue',
      'Tarif élevé pour les petites structures',
    ],
    ctaUrl: '#',
    ctaText: 'Demander une démo',
    features: {
      'Import automatique': true,
      'Signature électronique': true,
      'Multi-utilisateurs': true,
      'API disponible': true,
      'Application mobile': true,
      'Rapports avancés': true,
    },
  },
]

// FAQ — minimum 6 questions pour FAQPage schema (signal GEO/LLM)
const faqs = [
  {
    question: 'Quelle est la meilleure solution pour une TPE ou startup ?',
    answer: 'Pour une TPE ou startup, nous recommandons Solution A : son interface intuitive évite une longue formation, l\'essai gratuit de 14 jours sans carte bancaire permet de tester sans engagement, et le tarif de 29€/mois reste accessible. Solution B est une alternative si le budget est très contraint.',
  },
  {
    question: 'Y a-t-il des frais cachés à prévoir ?',
    answer: 'Aucune des solutions de ce comparatif ne présente de frais d\'activation. Attention cependant aux utilisateurs supplémentaires (facturés en sus sur Solution A et B) et aux modules optionnels comme la signature électronique avancée. Consultez la grille tarifaire complète avant de souscrire.',
  },
  {
    question: 'Est-ce qu\'on peut changer de solution facilement ?',
    answer: 'Oui, les trois solutions proposent un export de vos données en CSV ou XML. Solution B propose même une migration assistée depuis la concurrence. Prévoyez 2 à 4 heures pour une migration complète avec reprise des données historiques.',
  },
  {
    question: 'Ces solutions sont-elles conformes à la réglementation française ?',
    answer: 'Oui, les trois solutions sont conformes au RGPD, hébergées dans l\'UE, et respectent les obligations légales françaises. Solution A et Solution C sont également certifiées pour la facturation électronique (norme EN 16931), obligatoire pour les entreprises françaises à partir de 2026.',
  },
  {
    question: 'Peut-on tester gratuitement avant d\'acheter ?',
    answer: 'Solution A propose 14 jours d\'essai gratuit sans carte bancaire. Solution B offre un plan gratuit limité à 5 utilisateurs. Solution C propose des démonstrations personnalisées sur demande. Dans tous les cas, aucun engagement avant la souscription.',
  },
  {
    question: 'Ces comparatifs sont-ils régulièrement mis à jour ?',
    answer: 'Oui, nous mettons à jour l\'ensemble de nos comparatifs tous les 3 mois pour refléter les nouvelles versions, les évolutions tarifaires et les retours utilisateurs. La date de dernière mise à jour est indiquée sur chaque page.',
  },
]

export default function ComparatifPage() {
  const articleJsonLd = buildComparativeJsonLd({
    name: `Comparatif ${SITE_NAME} 2026 — Avis & Tests`,
    description: 'Comparatif complet des meilleures solutions, testées en conditions réelles.',
    url: `${SITE_URL}/comparatif`,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  })

  const faqJsonLd = buildFaqJsonLd(faqs)

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Comparatif', path: '/comparatif' },
  ])

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

      <div className="section max-w-4xl">
        {/* Breadcrumb visible */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
          <a href="/" className="hover:text-primary-600">Accueil</a>
          <span className="mx-2">›</span>
          <span className="text-gray-800">Comparatif</span>
        </nav>

        {/* Header + verdict immédiat (best practice GEO : répondre dans les 200 premiers mots) */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Meilleure solution : comparatif complet 2026
          </h1>
          {/* TL;DR — verdict en haut pour GEO/LLM */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
            <p className="font-semibold text-primary-800 mb-1">✅ Notre verdict rapide</p>
            <p className="text-gray-700">
              <strong>Solution A</strong> est notre recommandation principale pour les TPE et PME.
              <strong> Solution B</strong> si vous avez un budget serré.
              <strong> Solution C</strong> pour les équipes avec des besoins avancés.
            </p>
          </div>
          <p className="text-gray-600 text-lg">
            Nous avons testé et comparé les 3 principales solutions du marché sur 20+ critères.
            Chaque produit a été évalué en conditions réelles pendant au minimum 30 jours.
            Mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}.
          </p>
        </div>

        {/* Tableau comparatif — 1er CTA (placement optimal) */}
        <ComparatorTable products={products} />

        {/* FAQ — signal GEO critique */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card p-5 group">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-600 ml-2">+</span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Liens internes — maillage hub & satellites */}
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Pour aller plus loin</h3>
          <div className="flex flex-wrap gap-3">
            <a href="/guide" className="text-primary-600 hover:underline text-sm">
              → Guide complet d&apos;achat
            </a>
            <a href="/auteur" className="text-primary-600 hover:underline text-sm">
              → Notre méthode d&apos;évaluation
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
