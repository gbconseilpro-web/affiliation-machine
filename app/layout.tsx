import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FacturationPro — Logiciels de facturation pour indépendants',
    template: '%s | FacturationPro',
  },
  description: 'Comparez les meilleurs logiciels de facturation pour freelances et auto-entrepreneurs. Guides, avis et comparatifs 2025.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { type: 'website', locale: 'fr_FR' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 flex-shrink-0 bg-primary-600 rounded-lg flex items-center justify-center overflow-hidden">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-gray-900 whitespace-nowrap">Facturation<span className="text-primary-600">Pro</span></span>
            </a>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-1">
              <a href="/comparatif" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">Comparatif</a>
              <a href="/guide" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">Guide</a>
              <a href="/auteur" className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors">À propos</a>
            </nav>

            {/* CTA */}
            <a
              href="https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=header-cta&p=https%3A%2F%2Fwww.freebe.me%2F"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="hidden sm:inline-flex items-center gap-1.5 bg-accent-500 hover:bg-accent-600 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Essayer Freebe gratuit
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 flex-shrink-0 bg-primary-600 rounded-md flex items-center justify-center overflow-hidden">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="font-bold text-white">Facturation<span className="text-primary-400">Pro</span></span>
                </div>
                <p className="text-sm leading-relaxed">Le guide de référence pour choisir votre logiciel de facturation. Indépendant et objectif.</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Logiciels</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/go/freebe" className="hover:text-white transition-colors">Freebe</a></li>
                  <li><a href="/go/pennylane" className="hover:text-white transition-colors">Pennylane</a></li>
                  <li><a href="/go/indy" className="hover:text-white transition-colors">Indy</a></li>
                  <li><a href="/go/tiime" className="hover:text-white transition-colors">Tiime</a></li>
                  <li><a href="/go/shine" className="hover:text-white transition-colors">Shine</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Le site</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/comparatif" className="hover:text-white transition-colors">Comparatif 2025</a></li>
                  <li><a href="/guide" className="hover:text-white transition-colors">Guide complet</a></li>
                  <li><a href="/auteur" className="hover:text-white transition-colors">À propos</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-xs text-center text-gray-500">
              Ce site contient des liens affiliés. En cliquant, nous percevons une commission sans coût supplémentaire pour vous. © 2025 FacturationPro
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
