import type { Metadata } from 'next'
import './globals.css'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: {
    default: 'FacturationPro : Facturation électronique obligatoire 2026',
    template: '%s | FacturationPro',
  },
  description: 'Tout comprendre sur la facturation électronique obligatoire en France. Comparatif des meilleurs logiciels conformes, guide pratique et checklist de mise en conformité.',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'FacturationPro',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 text-xl font-bold text-primary-700">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Facturation<span className="text-accent-500">Pro</span>
            </a>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="/comparatif" className="hover:text-primary-600">Comparatif logiciels</a>
              <a href="/guide" className="hover:text-primary-600">Guide</a>
              <a href="/blog" className="hover:text-primary-600">Blog</a>
              <a href="/auteur" className="hover:text-primary-600">À propos</a>
            </nav>
            <MobileNav />
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-10">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="font-bold text-gray-800 mb-2">FacturationPro</p>
                <p className="text-sm text-gray-500">Votre guide indépendant pour la facturation électronique obligatoire en France.</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-2">Ressources</p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li><a href="/guide" className="hover:text-primary-600">Guide facturation électronique</a></li>
                  <li><a href="/comparatif" className="hover:text-primary-600">Comparatif logiciels</a></li>
                  <li><a href="/blog" className="hover:text-primary-600">Blog</a></li>
                  <li><a href="/auteur" className="hover:text-primary-600">Notre méthode</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-700 mb-2">Liens utiles</p>
                <ul className="space-y-1 text-sm text-gray-500">
                  <li><a href="https://www.impots.gouv.fr/professionnel/facturation-electronique" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">impots.gouv.fr</a></li>
                  <li><a href="https://chorus-pro.gouv.fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">Chorus Pro</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
              <p>Ce site contient des liens affiliés. En cliquant, nous percevons une commission sans coût supplémentaire pour vous. Nos recommandations restent indépendantes.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
