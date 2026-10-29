import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticles, AWIN_LINKS } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'FacturationPro — Logiciels de facturation & guides 2025',
  description: 'Comparez les meilleurs logiciels de facturation pour freelances et auto-entrepreneurs. Guides, comparatifs et avis experts.',
}

export default function HomePage() {
  const articles = getArticles()

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trouvez le meilleur logiciel de facturation
          </h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Guides experts, comparatifs et avis pour freelances et auto-entrepreneurs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/comparatif" className="btn-primary bg-accent-500 hover:bg-accent-600">
              Voir le comparatif 2025
            </Link>
            <Link href="/guide" className="btn-secondary border-white text-white hover:bg-primary-800">
              Lire le guide gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Notre recommandation principale */}
      <section className="section bg-accent-50 border-b border-accent-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-accent-200 p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <span className="text-xs font-semibold text-accent-600 uppercase tracking-wide">⭐ Notre n°1</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-2">Freebe — Le logiciel idéal pour les indépendants</h2>
              <p className="text-gray-600 mb-4">
                Devis, factures, suivi des paiements et déclaration URSSAf en un seul outil.
                Adopté par plus de 100 000 freelances en France.
              </p>
              <ul className="flex flex-wrap gap-3 text-sm text-gray-700">
                <li className="flex items-center gap-1"><span className="text-green-500">✓</span> Devis illimités</li>
                <li className="flex items-center gap-1"><span className="text-green-500">✓</span> Factures automatiques</li>
                <li className="flex items-center gap-1"><span className="text-green-500">✓</span> Déclaration URSSAf</li>
                <li className="flex items-center gap-1"><span className="text-green-500">✓</span> 30 jours gratuits</li>
              </ul>
            </div>
            <div className="text-center">
              <a
                href="https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=homepage-hero&p=https%3A%2F%2Fwww.freebe.me%2F"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
              >
                Essayer gratuitement →
              </a>
              <p className="text-xs text-gray-400 mt-2">Sans carte bancaire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles / Guides */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Nos guides 2025</h2>
            <p className="text-gray-600">Tout ce que vous devez savoir sur la facturation pour indépendants</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map(article => {
              const awin = AWIN_LINKS[article.slug as keyof typeof AWIN_LINKS]
              return (
                <div key={article.slug} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-md uppercase tracking-wide">
                        Guide
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mt-2">
                        <Link href={`/${article.slug}`} className="hover:text-primary-600 transition-colors">
                          {article.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    Guide complet sur {article.kw} — conseils d&apos;experts, comparaisons et recommandations.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/${article.slug}`}
                      className="text-primary-600 font-semibold text-sm hover:text-primary-700"
                    >
                      Lire le guide →
                    </Link>
                    {awin && (
                      <a
                        href={awin.url}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="text-xs text-accent-600 border border-accent-200 px-3 py-1.5 rounded-lg hover:bg-accent-50 transition-colors font-medium"
                      >
                        {awin.name} →
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
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
              <h3 className="text-lg font-semibold mb-2">Mis à jour 2025</h3>
              <p className="text-gray-600 text-sm">Informations actualisées pour vous garantir les meilleures offres</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">+100 000 utilisateurs</h3>
              <p className="text-gray-600 text-sm">Des milliers de freelances font confiance à nos recommandations</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
