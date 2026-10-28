import type { Metadata } from 'next'
import ComparatorTable from '@/components/ComparatorTable'

export const metadata: Metadata = {
  title: 'Comparatif complet',
  description: 'Tableau comparatif des meilleures solutions du marché — prix, fonctionnalités, avis',
}

// Ces données seront générées dynamiquement par l'agent IA pour chaque niche
const products = [
  {
    id: 1,
    name: 'Solution A',
    logo: '/logos/solution-a.png',
    rating: 4.8,
    reviewCount: 1240,
    price: 'À partir de 29€/mois',
    badge: 'Meilleur rapport qualité/prix',
    badgeColor: 'bg-green-100 text-green-800',
    pros: ['Facile à prendre en main', 'Support réactif', 'Nombreuses intégrations'],
    cons: ['Prix élevé sur les gros volumes'],
    ctaUrl: 'https://example.com/solution-a?ref=affiliate',
    ctaText: 'Essai gratuit 30 jours',
    features: {
      'Fonctionnalité 1': true,
      'Fonctionnalité 2': true,
      'Fonctionnalité 3': true,
      'Fonctionnalité 4': false,
    }
  },
  {
    id: 2,
    name: 'Solution B',
    logo: '/logos/solution-b.png',
    rating: 4.5,
    reviewCount: 890,
    price: 'À partir de 19€/mois',
    badge: 'Meilleur débutant',
    badgeColor: 'bg-blue-100 text-blue-800',
    pros: ['Prix attractif', 'Interface intuitive'],
    cons: ['Moins de fonctionnalités avancées', 'Support limité'],
    ctaUrl: 'https://example.com/solution-b?ref=affiliate',
    ctaText: 'Commencer gratuitement',
    features: {
      'Fonctionnalité 1': true,
      'Fonctionnalité 2': true,
      'Fonctionnalité 3': false,
      'Fonctionnalité 4': false,
    }
  },
  {
    id: 3,
    name: 'Solution C',
    logo: '/logos/solution-c.png',
    rating: 4.6,
    reviewCount: 2100,
    price: 'À partir de 49€/mois',
    badge: 'Meilleur pour les pros',
    badgeColor: 'bg-purple-100 text-purple-800',
    pros: ['Fonctionnalités avancées', 'Très scalable', 'API complète'],
    cons: ['Courbe d\'apprentissage plus longue', 'Prix élevé'],
    ctaUrl: 'https://example.com/solution-c?ref=affiliate',
    ctaText: 'Demander une démo',
    features: {
      'Fonctionnalité 1': true,
      'Fonctionnalité 2': true,
      'Fonctionnalité 3': true,
      'Fonctionnalité 4': true,
    }
  },
]

export default function ComparatifPage() {
  return (
    <div className="section">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Comparatif complet</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Nous avons testé et comparé les principales solutions pour vous aider à choisir
        </p>
      </div>
      <ComparatorTable products={products} />
    </div>
  )
}
