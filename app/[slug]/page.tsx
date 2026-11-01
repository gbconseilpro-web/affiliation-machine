import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticles, getArticleBySlug, getSeoBySlug, AWIN_LINKS } from '@/lib/articles'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const articles = getArticles()
  return articles.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const seo = getSeoBySlug(params.slug)
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return {
    title: seo?.meta_title || article.title,
    description: seo?.meta_desc || `Guide complet sur ${article.kw} pour indépendants et auto-entrepreneurs.`,
    alternates: { canonical: seo?.canonical || `https://facturationpro.com/${params.slug}` },
    openGraph: { title: seo?.og_title || article.title, description: seo?.meta_desc || '', type: 'article' },
  }
}

const GUIDE_ICONS: Record<string, string> = {
  'logiciel-facturation': '🧾',
  'devis-gratuit': '📋',
  'micro-entrepreneur': '🚀',
  'facture-en-ligne': '💻',
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const awin = AWIN_LINKS[params.slug as keyof typeof AWIN_LINKS]
  const allArticles = getArticles().filter(a => a.slug !== params.slug)
  const publishedDate = new Date(article.ts * 1000).toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600 transition-colors">Accueil</Link>
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-800 font-medium truncate">{article.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">

          {/* ===== COLONNE PRINCIPALE ===== */}
          <div className="min-w-0">

            {/* Article header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-xl">
                  {GUIDE_ICONS[params.slug] || '📄'}
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="badge badge-primary uppercase tracking-wide">Guide 2025</span>
                  <time className="text-sm text-gray-400">{publishedDate}</time>
                </div>
              </div>
            </header>

            {/* CTA Awin EN HAUT */}
            {awin && (
              <div className="rounded-2xl border border-accent-200 bg-gradient-to-r from-accent-50 to-orange-50 p-5 mb-8 flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs font-bold text-accent-700 uppercase tracking-wide mb-1">Notre recommandation</p>
                  <p className="font-bold text-gray-900 text-lg">{awin.name}</p>
                  <p className="text-gray-600 text-sm mt-0.5">{awin.desc}</p>
                </div>
                <a
                  href={awin.url}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="btn-accent shrink-0 px-5 py-3"
                >
                  {awin.cta} →
                </a>
              </div>
            )}

            {/* Body de l'article */}
            <div className="prose-article" dangerouslySetInnerHTML={{ __html: article.body }} />

            {/* CTA Awin EN BAS */}
            {awin && (
              <div className="mt-12 rounded-2xl bg-primary-900 text-white p-8 text-center">
                <div className="w-12 h-12 bg-primary-800 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                  {GUIDE_ICONS[params.slug] || '🚀'}
                </div>
                <h3 className="text-xl font-bold mb-2">Prêt à vous lancer ?</h3>
                <p className="text-primary-200 mb-5 text-sm max-w-md mx-auto">{awin.desc}</p>
                <a
                  href={awin.url}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  {awin.cta} →
                </a>
                <p className="text-xs text-primary-400 mt-3">Lien affilié : commission perçue sans surcoût pour vous</p>
              </div>
            )}

            {/* Autres guides */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Lire aussi</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {allArticles.map(a => (
                  <Link
                    key={a.slug}
                    href={`/${a.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:border-primary-200 hover:bg-primary-50 transition-all group"
                  >
                    <span className="text-xl">{GUIDE_ICONS[a.slug] || '📄'}</span>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">{a.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ===== SIDEBAR ===== */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            {/* CTA sidebar */}
            {awin && (
              <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-5 text-center">
                <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-3 text-xl">⭐</div>
                <p className="text-xs font-bold text-accent-700 uppercase tracking-wide mb-1">Notre n°1</p>
                <p className="font-bold text-gray-900 mb-1">{awin.name}</p>
                <p className="text-gray-500 text-xs mb-4">{awin.desc}</p>
                <a
                  href={awin.url}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="btn-accent w-full justify-center text-sm py-2.5"
                >
                  {awin.cta} →
                </a>
                <p className="text-xs text-gray-400 mt-2">Lien affilié</p>
              </div>
            )}

            {/* Autres guides sidebar */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-card p-5">
              <h4 className="font-bold text-gray-900 text-sm mb-3">Autres guides</h4>
              <ul className="space-y-2">
                {allArticles.map(a => (
                  <li key={a.slug}>
                    <Link href={`/${a.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors py-1">
                      <span>{GUIDE_ICONS[a.slug] || '📄'}</span>
                      <span className="truncate">{a.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note info */}
            <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-xs text-gray-500 leading-relaxed">
              <strong className="text-gray-700">Note éditoriale :</strong> Ce site contient des liens affiliés. En cliquant dessus, nous percevons une commission sans frais supplémentaires pour vous. Cela nous permet de financer notre travail éditorial.
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
