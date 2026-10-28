import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Comparez les meilleures solutions et faites le bon choix',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trouvez la meilleure solution
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Comparatif complet, avis d&apos;experts et guide d&apos;achat pour faire le bon choix
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/comparatif" className="btn-primary bg-accent-500 hover:bg-accent-600">
              Voir le comparatif complet
            </Link>
            <Link href="/guide" className="btn-secondary border-white text-white hover:bg-primary-800">
              Lire le guide gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Features rapides */}
      <section className="section">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">100% Indépendant</h3>
            <p className="text-gray-600 text-sm">Analyses objectives basées sur des critères factuels</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Mis à jour régulièrement</h3>
            <p className="text-gray-600 text-sm">Informations actualisées pour vous garantir les meilleures offres</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Avis vérifiés</h3>
            <p className="text-gray-600 text-sm">Retours d&apos;expérience de vrais utilisateurs</p>
          </div>
        </div>
      </section>

      {/* CTA comparatif */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Notre sélection du moment</h2>
          <p className="text-gray-600 mb-8">Découvrez les solutions que nous recommandons après test</p>
          <Link href="/comparatif" className="btn-primary">
            Accéder au comparatif
          </Link>
        </div>
      </section>
    </>
  )
}
