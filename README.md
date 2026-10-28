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
│   ├── layout.tsx          # Layout global (header/footer)
│   ├── page.tsx            # Page d'accueil
│   ├── comparatif/
│   │   └── page.tsx        # Page comparatif produits
│   └── guide/
│       └── page.tsx        # Guide achat
├── components/
│   └── ComparatorTable.tsx # Tableau comparatif interactif
├── lib/
│   ├── affiliate.ts        # Génération liens affiliés (Awin, Affilae)
│   └── seo.ts              # Métadonnées + JSON-LD structurés
└── agents/                 # (à venir) Agents Python autonomes
```

## Variables d'environnement

```env
SITE_NAME=MonSite
SITE_NICHE=logiciels-comptabilite
AFFILIATE_NETWORK=awin
NEXT_PUBLIC_SITE_URL=https://monsite.com
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

## Roadmap

- [x] Structure Next.js de base
- [x] Composant ComparatorTable
- [x] Lib affiliés (Awin + Affilae)
- [x] Lib SEO (métadonnées + JSON-LD)
- [ ] Agents Python (génération de contenu)
- [ ] CI/CD GitHub Actions → VPS
- [ ] Dashboard monitoring revenus
