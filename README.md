# Affiliation Machine 🚀

Machine de génération automatique de sites d'affiliation — Next.js 14 + agents Claude.

## Stack technique

- **Framework** : Next.js 14 (App Router, TypeScript)
- **Style** : Tailwind CSS
- **Agents IA** : Claude API (Anthropic)
- **Hébergement** : VPS OVH + Nginx
- **Réseaux d'affiliation** : Awin, Affilae

## Structure du projet

```
affiliation-machine/
├── app/
│   ├── layout.tsx          # Layout global (header/footer/nav)
│   ├── page.tsx            # Page d'accueil
│   ├── sitemap.ts          # Sitemap dynamique (SEO)
│   ├── robots.ts           # robots.txt (GPTBot, PerplexityBot autorisés — GEO)
│   ├── comparatif/
│   │   └── page.tsx        # Comparatif — TL;DR, FAQ 6Q, schemas Article+FAQ+Breadcrumb
│   ├── guide/
│   │   └── page.tsx        # Guide achat
│   └── auteur/
│       └── page.tsx        # Page auteur — schema Person, sameAs (signal GEO)
├── components/
│   └── ComparatorTable.tsx # Tableau comparatif — 2 CTA, rel=sponsored
├── lib/
│   ├── affiliate.ts        # Génération liens affiliés (Awin, Affilae)
│   └── seo.ts              # Métadonnées + JSON-LD (Article, Product, FAQ, Breadcrumb, Person)
└── agents/                 # (à venir) Agents Python autonomes
```

## Variables d'environnement

```env
# Identité du site
SITE_NAME=MonSite
SITE_NICHE=logiciels-comptabilite
NEXT_PUBLIC_SITE_URL=https://monsite.com

# Auteur (signaux GEO/LLM — confiance ChatGPT, Perplexity, Google AIO)
SITE_AUTHOR_NAME=Prénom Nom
SITE_AUTHOR_DESCRIPTION=Expert en logiciels X avec 10 ans d'expérience

# Affiliation
AFFILIATE_NETWORK=awin
AWIN_AFFILIATE_ID=123456
SITE_REF_ID=monsite
```

## Démarrage local

```bash
npm install
npm run dev
```

## Déploiement VPS

```bash
# Build
npm run build

# PM2 (production)
pm2 start npm --name "monsite" -- start
```

## Architecture SEO/GEO (best practices 2026)

| Signal | Implémentation |
|--------|---------------|
| Core Web Vitals | SSG + `next/image` + `next/font` |
| Canonical URLs | `buildMetadata()` sur chaque page |
| JSON-LD schemas | Article, FAQPage, BreadcrumbList, Person, Product |
| GEO/LLM visibility | TL;DR en tête, FAQ 6+ questions, auteur nommé, robots.ts permissif |
| CRO | 2 CTA par produit, 3 produits max, verdict immédiat |
| Crawl IA | GPTBot, PerplexityBot, ClaudeBot, Google-Extended autorisés |
| Affiliate compliance | `rel="noopener noreferrer sponsored"` sur tous les liens |

## Roadmap

- [x] Structure Next.js de base
- [x] Composant ComparatorTable (2 CTA, rel=sponsored)
- [x] Lib affiliés (Awin + Affilae)
- [x] Lib SEO (Article, FAQ, Breadcrumb, Person JSON-LD)
- [x] Sitemap dynamique + robots.ts GEO-friendly
- [x] Page auteur (signal E-E-A-T + Person schema)
- [x] Page comparatif optimisée GEO (TL;DR, FAQ 6Q, breadcrumb)
- [ ] Page `/avis/[slug]` — reviews individuelles
- [ ] Agents Python autonomes (Research, Content, SEO, Analytics)
- [ ] CI/CD GitHub Actions → VPS OVH
- [ ] Dashboard monitoring revenus
