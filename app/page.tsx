import type { Metadata } from 'next'
import Link from 'next/link'
import { getArticles, AWIN_LINKS } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'FacturationPro — Meilleurs logiciels de facturation 2025',
  description: 'Comparez les meilleurs logiciels de facturation pour freelances et auto-entrepreneurs. Guides experts, comparatifs et avis 2025.',
}

const GUIDE_ICONS: Record<string, string> = {
  'logiciel-facturation': '🧾',
  'devis-gratuit': '📋',
  'micro-entrepreneur': '🚀',
  'facture-en-ligne': '💻',
}

export default function HomePage() {
  const articles = getArticles()

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-400 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Mis à jour octobre 2025
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Le meilleur logiciel de<br />
              <span className="text-accent-400">facturation</span> pour votre activité
            </h1>

            <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Guides experts, comparatifs objectifs et avis vérifiés pour freelances et auto-entrepreneurs qui veulent facturer sans galère.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/comparatif" className="btn-accent text-base px-8 py-4">
                Voir le comparatif 2025
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/logiciel-facturation" className="btn-secondary text-base px-8 py-4 border-white/30 bg-white/10 text-white hover:bg-white/20">
                Lire le guide gratuit
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-200">
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>100% indépendant</span>
              <span className="hidden sm:block w-1 h-1 bg-primary-500 rounded-full" />
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>Comparaisons objectives</span>
              <span className="hidden sm:block w-1 h-1 bg-primary-500 rounded-full" />
              <span className="flex items-center gap-1.5"><svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>Mis à jour régulièrement</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== RECOMMANDATION #1 ===== */}
      <section className="bg-gradient-to-r from-accent-50 to-orange-50 border-y border-accent-100 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-2xl border border-accent-200 p-6 md:p-8 shadow-card">
            {/* Badge */}
            <div className="shrink-0">
              <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center text-3xl">🏆</div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <span className="badge badge-accent uppercase tracking-wide">Notre n°1</span>
                <span className="text-yellow-400 text-sm">★★★★★</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Freebe — Le logiciel taillé pour les indépendants</h2>
              <p className="text-gray-600 mb-3 text-sm md:text-base">Devis, factures, paiements et déclaration URSSAf en un seul outil. Adopté par plus de 100 000 freelances en France.</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-700 justify-center md:justify-start">
                {['Devis illimités', 'Factures automatiques', 'Déclaration URSSAf', '30 jours offerts'].map(f => (
                  <span key={f} className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="shrink-0 text-center">
              <a
                href="https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=homepage-hero&p=https%3A%2F%2Fwww.freebe.me%2F"
                target="_blank"
                rel="nofollow sponsored noopener"
                className="inline-flex flex-col items-center gap-1"
              >
                <span className="btn-accent text-base px-7 py-3.5">
                  Essayer gratuitement →
                </span>
                <span className="text-xs text-gray-400">Sans carte bancaire requise</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUIDES / ARTICLES ===== */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-primary uppercase tracking-wide mb-3">Ressources</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Nos guides 2025</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Tout ce que vous devez savoir pour gérer votre facturation en tant qu'indépendant</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {articles.map(article => {
              const awin = AWIN_LINKS[article.slug as keyof typeof AWIN_LINKS]
              const icon = GUIDE_ICONS[article.slug] || '📄'
              return (
                <div key={article.slug} className="card p-6 flex flex-col gap-4 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-2xl shrink-0 group-hover:bg-primary-100 transition-colors">
                      {icon}
                    </div>
                    <div>
                      <span className="badge badge-primary uppercase tracking-wide mb-2">Guide 2025</span>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        <Link href={`/${article.slug}`} className="hover:text-primary-600">
                          {article.title}
                        </Link>
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    Guide complet sur {article.kw} : conseils d&apos;experts, comparaisons de solutions et recommandations adaptées aux indépendants.
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <Link href={`/${article.slug}`} className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1">
                      Lire le guide
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    {awin && (
                      <a href={awin.url} target="_blank" rel="nofollow sponsored noopener"
                        className="text-xs font-medium text-accent-600 border border-accent-200 bg-accent-50 hover:bg-accent-100 px-3 py-1.5 rounded-lg transition-colors">
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

      {/* ===== POURQUOI NOUS ===== */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Pourquoi nous faire confiance ?</h2>
            <p className="text-gray-500">Notre méthode pour des comparatifs objectifs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: '100% Indépendant',
                desc: 'Aucun partenariat éditorial. Nos recommandations sont basées sur des critères factuels et des tests réels.',
              },
              {
                icon: '🔄',
                title: 'Mis à jour 2025',
                desc: 'Nous vérifions régulièrement les tarifs, fonctionnalités et offres pour vous garantir une info à jour.',
              },
              {
                icon: '👥',
                title: 'Pour les indépendants',
                desc: 'Conçu par et pour les freelances, auto-entrepreneurs et micro-entreprises. On connaît vos besoins réels.',
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card text-center">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Prêt à simplifier votre facturation ?</h2>
          <p className="text-gray-500 mb-7">Commencez avec Freebe, notre recommandation n°1 pour les indépendants. 30 jours gratuits, sans carte bancaire.</p>
          <a
            href="https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=homepage-bottom&p=https%3A%2F%2Fwww.freebe.me%2F"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="btn-accent text-base px-8 py-4"
          >
            Essayer Freebe gratuitement →
          </a>
          <p className="text-xs text-gray-400 mt-3">Lien affilié — commission perçue sans surcoût pour vous</p>
        </div>
      </section>
    </>
  )
}
