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
    description: seo?.meta_desc || `Guide complet sur ${article.kw} - FacturationPro`,
    alternates: {
      canonical: seo?.canonical || `https://facturationpro.fr/${params.slug}`,
    },
    openGraph: {
      title: seo?.og_title || article.title,
      description: seo?.meta_desc || `Guide complet sur ${article.kw}`,
      type: 'article',
    },
  }
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const awin = AWIN_LINKS[params.slug as keyof typeof AWIN_LINKS]
  const publishedDate = new Date(article.ts * 1000).toLocaleDateString('fr-FR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary-600">Accueil</Link>
        <span>›</span>
        <span className="text-gray-800">{article.title}</span>
      </nav>

      <article>
        {/* CTA Awin en haut */}
        {awin && (
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 border border-accent-200 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-semibold text-accent-700 mb-1">✨ Notre recommandation</p>
              <p className="font-bold text-gray-900">{awin.name}</p>
              <p className="text-gray-600 text-sm">{awin.desc}</p>
            </div>
            <a
              href={awin.url}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
            >
              {awin.cta} →
            </a>
          </div>
        )}

        {/* Article header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Guide 2025
            </span>
            <time className="text-sm text-gray-500">{publishedDate}</time>
          </div>
        </header>

        {/* Article body */}
        <div
          className="prose prose-lg prose-gray max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h1:text-3xl prose-h1:mb-6
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* CTA Awin en bas */}
        {awin && (
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Prêt à commencer ?
            </h3>
            <p className="text-gray-600 mb-6">{awin.desc}</p>
            <a
              href={awin.url}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              {awin.cta} →
            </a>
            <p className="text-xs text-gray-400 mt-3">
              * Lien affilié — nous percevons une commission si vous souscrivez via ce lien, sans coût supplémentaire pour vous.
            </p>
          </div>
        )}
      </article>

      {/* Navigation vers d'autres articles */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Lire aussi</h3>
        <div className="flex flex-wrap gap-3">
          {Object.entries(AWIN_LINKS)
            .filter(([slug]) => slug !== params.slug)
            .map(([slug, data]) => (
              <Link
                key={slug}
                href={`/${slug}`}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium border border-primary-200 rounded-lg px-4 py-2 hover:bg-primary-50 transition-colors"
              >
                {slug.replace(/-/g, ' ')} →
              </Link>
            ))}
        </div>
      </div>
    </div>
  )
}
