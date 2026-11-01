import type { Metadata } from 'next'
import { getAllBlogPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Blog : Guides et conseils facturation pour indépendants',
  description: 'Guides pratiques, comparatifs et conseils pour gérer votre facturation en tant que freelance ou auto-entrepreneur.',
  alternates: { canonical: 'https://facturationpro.com/blog' },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  const categoryColors: Record<string, string> = {
    'Comparatifs': 'bg-indigo-100 text-indigo-700',
    'Guides': 'bg-emerald-100 text-emerald-700',
    'Avis logiciels': 'bg-orange-100 text-orange-700',
  }

  const categoryIcons: Record<string, string> = {
    'Comparatifs': '⚖️',
    'Guides': '📖',
    'Avis logiciels': '🔍',
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Blog FacturationPro
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Guides, comparatifs et conseils pour mieux gérer votre facturation en tant qu&apos;indépendant.
        </p>
      </div>

      {/* Posts grid */}
      <div className="grid gap-6">
        {posts.map(post => (
          <article key={post.slug} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex items-start gap-4">
              {post.image ? (
                <div className="flex-shrink-0 w-24 h-14 rounded-xl overflow-hidden bg-gray-50 hidden sm:block">
                  <img
                    src={post.image}
                    alt=""
                    width={96}
                    height={56}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-2xl hidden sm:flex" aria-hidden="true">
                  {categoryIcons[post.category] ?? '📄'}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">
                    {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <span className="text-xs text-gray-400">· {post.readTime} min de lecture</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  <a href={`/blog/${post.slug}`} className="hover:text-indigo-600 transition-colors">
                    {post.title}
                  </a>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Lire l&apos;article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-indigo-50 rounded-2xl p-8 text-center">
        <p className="text-gray-700 font-medium mb-4">Prêt à simplifier votre facturation ?</p>
        <a
          href="/comparatif"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Voir le comparatif des logiciels
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  )
}
