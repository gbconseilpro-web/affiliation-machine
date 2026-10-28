import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: process.env.SITE_NAME || 'Site Affiliation',
    template: `%s | ${process.env.SITE_NAME || 'Site Affiliation'}`,
  },
  description: 'Comparatif et guide pour bien choisir',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="text-xl font-bold text-primary-700">
              {process.env.SITE_NAME || 'Site Affiliation'}
            </a>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="/comparatif" className="hover:text-primary-600">Comparatif</a>
              <a href="/guide" className="hover:text-primary-600">Guide</a>
              <a href="/avis" className="hover:text-primary-600">Avis</a>
              <a href="/auteur" className="hover:text-primary-600">À propos</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-500">
            <p>Ce site contient des liens affiliés. En cliquant, nous percevons une commission sans coût supplémentaire pour vous.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
