import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllBlogPosts, getBlogPost } from '@/lib/blog-posts'

export const dynamic = 'force-static'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllBlogPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  const ogImage = post.image
    ? `https://facturationpro.com${post.image}`
    : 'https://facturationpro.com/og-default.svg'
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://facturationpro.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  }
}

// CTA contextuel par outil / slug
interface CtaConfig {
  title: string
  subtitle: string
  buttons: Array<{
    label: string
    href: string
    primary: boolean
  }>
}

function getCtaForSlug(slug: string): CtaConfig {
  const s = slug.toLowerCase()

  // Comparatifs VS : detecter avant les patterns simples
  if (s.includes('pennylane') && s.includes('indy')) {
    return {
      title: 'Pennylane ou Indy : essayez les deux gratuitement',
      subtitle: 'Testez chaque solution avant de choisir. Essais gratuits disponibles sans carte bancaire.',
      buttons: [
        { label: 'Essayer Pennylane', href: 'https://www.pennylane.com/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Essayer Indy', href: 'https://www.indy.fr/?ae=2183', primary: false },
      ],
    }
  }
  if (s.includes('freebe') && s.includes('pennylane')) {
    return {
      title: 'Freebe ou Pennylane : essayez les deux gratuitement',
      subtitle: 'Facturation pure ou comptabilite integree ? Testez avant de vous decider.',
      buttons: [
        { label: 'Essayer Freebe', href: 'https://www.freebe.me/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Essayer Pennylane', href: 'https://www.pennylane.com/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: false },
      ],
    }
  }
  if (s.includes('axonaut') && s.includes('sellsy')) {
    return {
      title: 'Axonaut ou Sellsy : essayez les deux gratuitement',
      subtitle: 'Deux CRM-ERP puissants pour TPE et PME. Comparez par vous-meme avant de choisir.',
      buttons: [
        { label: 'Essayer Axonaut', href: 'https://axonaut.com/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Essayer Sellsy', href: 'https://sellsy.fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: false },
      ],
    }
  }
  if (s.includes('pennylane') && s.includes('shine')) {
    return {
      title: 'Pennylane ou Shine : essayez les deux gratuitement',
      subtitle: 'Comptabilite autonome ou compte pro tout-en-un ? Testez sans engagement.',
      buttons: [
        { label: 'Essayer Pennylane', href: 'https://www.pennylane.com/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Essayer Shine', href: 'https://www.shine.fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: false },
      ],
    }
  }
  if (s.includes('indy') && s.includes('freebe')) {
    return {
      title: 'Indy ou Freebe : essayez les deux gratuitement',
      subtitle: 'Comptabilite autonome ou facturation pure ? Testez avant de vous decider.',
      buttons: [
        { label: 'Essayer Indy', href: 'https://www.indy.fr/?ae=2183', primary: true },
        { label: 'Essayer Freebe', href: 'https://www.freebe.me/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: false },
      ],
    }
  }

  if (s.includes('pennylane')) {
    return {
      title: 'Essayer Pennylane gratuitement',
      subtitle: 'La solution comptable complete pour freelances et TPE. Essai gratuit 14 jours, sans carte bancaire.',
      buttons: [
        { label: 'Essayer Pennylane', href: 'https://www.pennylane.com/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('shine')) {
    return {
      title: 'Ouvrir un compte Shine',
      subtitle: 'Le compte pro tout-en-un pour independants. Facturation, IBAN pro et gestion en un seul endroit.',
      buttons: [
        { label: 'Essayer Shine', href: 'https://www.shine.fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('axonaut')) {
    return {
      title: 'Essayer Axonaut gratuitement',
      subtitle: 'CRM + Facturation + Compta tout-en-un pour consultants et agences. 15 jours d\'essai gratuit.',
      buttons: [
        { label: 'Essayer Axonaut', href: 'https://axonaut.com/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('finom')) {
    return {
      title: 'Ouvrir un compte Finom',
      subtitle: 'Le compte pro europeen avec cashback. Facturation integree et IBAN multi-devises pour freelances.',
      buttons: [
        { label: 'Essayer Finom', href: 'https://finom.co/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('sellsy')) {
    return {
      title: 'Essayer Sellsy gratuitement',
      subtitle: 'La suite CRM + facturation pour PME. Devis, factures, relances et pipeline commercial centralises.',
      buttons: [
        { label: 'Essayer Sellsy', href: 'https://sellsy.fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('tiime')) {
    return {
      title: 'Essayer Tiime gratuitement',
      subtitle: 'La facturation gratuite pour micro-entrepreneurs, synchronisee avec votre expert-comptable.',
      buttons: [
        { label: 'Essayer Tiime', href: 'https://www.tiime.fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('myunisoft')) {
    return {
      title: 'Essayer MyUnisoft gratuitement',
      subtitle: 'Le logiciel de comptabilite et facturation pour cabinets et entreprises. Essai gratuit disponible.',
      buttons: [
        { label: 'Essayer MyUnisoft', href: 'https://www.myunisoft.fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('indy')) {
    return {
      title: 'Essayer Indy gratuitement',
      subtitle: 'La comptabilite autonome pour independants. Synchronisation bancaire et declarations automatisees.',
      buttons: [
        { label: 'Essayer Indy', href: 'https://www.indy.fr/?ae=2183', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  if (s.includes('freebe')) {
    return {
      title: 'Essayer Freebe gratuitement',
      subtitle: 'Le logiciel de facturation pense pour les freelances. Devis, factures et suivi TJM sans prise de tete.',
      buttons: [
        { label: 'Essayer Freebe', href: 'https://www.freebe.me/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: true },
        { label: 'Voir le comparatif', href: '/comparatif', primary: false },
      ],
    }
  }
  // Default : comparatif complet
  return {
    title: 'Trouver le meilleur logiciel de facturation',
    subtitle: 'Comparez Freebe, Pennylane, Indy, Tiime et bien d\'autres. Gratuit, sans engagement.',
    buttons: [
      { label: 'Voir le comparatif complet', href: '/comparatif', primary: true },
      { label: 'Essayer Freebe', href: 'https://www.freebe.me/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=blog', primary: false },
    ],
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) return notFound()

  const cta = getCtaForSlug(params.slug)

  const ogImage = post.image
    ? `https://facturationpro.com${post.image}`
    : 'https://facturationpro.com/og-default.svg'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: ogImage,
    author: {
      '@type': 'Person',
      name: 'FacturationPro',
      url: 'https://facturationpro.com/auteur',
    },
    publisher: {
      '@type': 'Organization',
      name: 'FacturationPro',
      url: 'https://facturationpro.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://facturationpro.com/blog/${post.slug}`,
    },
    keywords: post.keywords?.join(', ') ?? '',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://facturationpro.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://facturationpro.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://facturationpro.com/blog/${post.slug}` },
    ],
  }

  const categoryColors: Record<string, string> = {
    'Comparatifs': 'bg-indigo-100 text-indigo-700',
    'Guides': 'bg-emerald-100 text-emerald-700',
    'Avis logiciels': 'bg-orange-100 text-orange-700',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-indigo-600">Accueil</a>
          <span className="mx-2">/</span>
          <a href="/blog" className="hover:text-indigo-600">Blog</a>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{post.title.substring(0, 40)}...</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'}`}>
              {post.category}
            </span>
            <span className="text-sm text-gray-400">
              {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
            <span className="text-sm text-gray-400">· {post.readTime} min</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-indigo-200 pl-4">
            {post.excerpt}
          </p>
        </header>

        {/* Hero image */}
        {post.image && (
          <div className="rounded-2xl overflow-hidden mb-8 bg-gray-50">
            <img
              src={post.image}
              alt={post.title}
              width={800}
              height={450}
              className="w-full h-auto"
              loading="eager"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="max-w-none [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_a]:text-indigo-600 [&_a]:no-underline hover:[&_a]:underline [&_ul]:space-y-1 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:text-gray-900 [&_strong]:font-semibold [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-200 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:bg-gray-100 [&_code]:px-1 [&_code]:rounded [&_code]:text-sm"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA box contextuel */}
        <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
          <p className="font-semibold text-gray-900 mb-2">{cta.title}</p>
          <p className="text-sm text-gray-600 mb-4">{cta.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            {cta.buttons.map((btn, i) =>
              btn.primary ? (
                <a
                  key={i}
                  href={btn.href}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  {btn.label}
                </a>
              ) : (
                <a
                  key={i}
                  href={btn.href}
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors"
                >
                  {btn.label}
                </a>
              )
            )}
          </div>
        </div>

        {/* Back to blog */}
        <div className="mt-8">
          <a href="/blog" className="text-sm text-gray-500 hover:text-indigo-600 transition-colors">
            ← Retour au blog
          </a>
        </div>
      </div>
    </>
  )
}
