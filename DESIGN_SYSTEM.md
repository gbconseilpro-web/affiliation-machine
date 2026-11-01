# FacturationPro — Design System

> Référence visuelle et de composants pour tous les sites du réseau (facturationpro.fr et futurs domaines).  
> Objectif : cohérence maximale, conversion optimisée, maintenance simplifiée.

---

## 1. Palette de couleurs

### Couleurs primaires

| Token | Valeur | Usage |
|-------|--------|-------|
| `--color-primary` | `#4f46e5` (indigo-600) | CTA principal, liens, accents |
| `--color-primary-hover` | `#4338ca` (indigo-700) | État hover CTA |
| `--color-primary-shadow` | `rgba(79,70,229,0.25)` | Shadow CTA (indigo-200) |
| `--color-accent` | `#f97316` (orange-500) | CTA secondaire, urgence |
| `--color-accent-hover` | `#ea580c` (orange-600) | État hover CTA secondaire |

### Couleurs de fond

| Token | Valeur | Usage |
|-------|--------|-------|
| `--color-bg-page` | `from-indigo-50 via-white to-blue-50` | Gradient page landing |
| `--color-bg-card` | `#ffffff` | Cards, avis, features |
| `--color-bg-badge-urgence` | `#fff7ed` (orange-100) | Badge urgence |
| `--color-bg-badge-verified` | `#f0fdf4` (green-100) | Badge "Vérifié" |

### Couleurs de texte

| Token | Valeur | Usage |
|-------|--------|-------|
| `--color-text-heading` | `#111827` (gray-900) | Titres H1/H2 |
| `--color-text-body` | `#4b5563` (gray-600) | Corps de texte |
| `--color-text-muted` | `#6b7280` (gray-500) | Sous-titres, labels |
| `--color-text-micro` | `#9ca3af` (gray-400) | Footers, disclaimers |
| `--color-text-primary` | `#4f46e5` (indigo-600) | Liens, highlights |

### Couleurs de statut

| Token | Valeur | Usage |
|-------|--------|-------|
| `--color-stars` | `#facc15` (yellow-400) | Étoiles notation |
| `--color-verified` | `#15803d` (green-700) | Badge vérifié |
| `--color-trust-bar` | `#374151` (gray-700) | Logos barre de confiance |

---

## 2. Typographie

Tailwind utilise `font-sans` par défaut (system-ui, -apple-system, Inter).

| Niveau | Classes Tailwind | Usage |
|--------|-----------------|-------|
| Display H1 | `text-3xl md:text-4xl font-extrabold` | Titre principal page /go/ |
| H2 Section | `text-xl font-bold` | Titres sections |
| H2 Steps | `text-lg font-bold` | Sous-titres |
| Body large | `text-lg` | Description hero |
| Body | `text-sm md:text-base` | Cartes features, avis |
| Caption | `text-xs` | Labels, microcopy |
| CTA | `text-xl font-bold` | Bouton CTA principal |
| CTA secondaire | `font-bold` (base) | Bouton CTA secondaire |

---

## 3. Espacement

Grille d'espacement 4px (Tailwind default).

| Rôle | Classe | Valeur |
|------|--------|--------|
| Section gap | `mb-10` | 40px |
| Card padding | `p-5` | 20px |
| Header padding | `py-4 px-6` | 16/24px |
| CTA padding | `px-10 py-5` | 40/20px |
| Grid gap | `gap-4` | 16px |
| Badge padding | `px-4 py-2` | 16/8px |

---

## 4. Bordures & Rayons

| Élément | Classe | Valeur |
|---------|--------|--------|
| Cards | `rounded-2xl` | 16px |
| CTA principal | `rounded-2xl` | 16px |
| CTA secondaire | `rounded-xl` | 12px |
| Badge | `rounded-full` | 9999px |
| Step circle | `rounded-full` | 9999px |
| Trust logos | `rx="4"` (SVG) | 4px |
| Border cards | `border border-gray-100` | 1px #f3f4f6 |

---

## 5. Ombres

| Élément | Classe | Usage |
|---------|--------|-------|
| CTA principal | `shadow-lg shadow-indigo-200` | Profondeur CTA hero |
| Step circles | `shadow-md shadow-indigo-200` | Accentuation étapes |
| Cards (hover) | `hover:shadow-md` | Interactivité cards |
| Sticky mobile | `shadow-2xl` | Élévation barre sticky |

---

## 6. Composants récurrents

### 6.1 Badge urgence
```tsx
<div className="bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
  <span>🔥</span>
  <span>Offre limitée : [texte]</span>
</div>
```

### 6.2 Badge "Vérifié"
```tsx
<span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
  </svg>
  Vérifié
</span>
```

### 6.3 CTA principal
```tsx
<a
  href={AFFILIATE_LINK}
  target="_blank"
  rel="nofollow sponsored noopener noreferrer"
  className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-105"
>
  [Texte CTA]
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</a>
```

### 6.4 CTA secondaire
```tsx
<a
  href={AFFILIATE_LINK_BOTTOM}
  target="_blank"
  rel="nofollow sponsored noopener noreferrer"
  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
>
  [Texte CTA] — c'est gratuit
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</a>
```

### 6.5 Card feature
```tsx
<div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-indigo-100 transition-all">
  <div className="text-3xl mb-2">{icon}</div>
  <div className="font-semibold text-gray-900 mb-1">{title}</div>
  <div className="text-sm text-gray-500">{desc}</div>
</div>
```

### 6.6 Card avis client
```tsx
<div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
  <div className="flex mb-2" aria-label={`Note ${stars}/5`}>
    {Array.from({ length: stars }).map((_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ))}
  </div>
  <p className="text-sm text-gray-600 mb-3 italic">&ldquo;{text}&rdquo;</p>
  <div className="text-sm font-semibold text-gray-900">{name}</div>
  <div className="text-xs text-gray-500">{job}</div>
</div>
```

### 6.7 Barre de confiance média
```tsx
<div className="w-full max-w-3xl mb-10">
  <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">Comme mentionné dans</p>
  <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
    {/* SVG logos ici — toujours en inline SVG, jamais d'images externes */}
  </div>
</div>
```

### 6.8 Steps visuels (3 étapes)
```tsx
<div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
  <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-0.5 bg-indigo-200" />
  {steps.map((step, i) => (
    <div key={step.num} className="flex md:flex-col items-center gap-4 md:gap-2 flex-1 relative">
      <div className="w-14 h-14 rounded-full bg-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md shadow-indigo-200 z-10">
        {step.num}
      </div>
      <div className="md:text-center">
        <div className="font-semibold text-gray-900">{step.label}</div>
        <div className="text-xs text-gray-500">{step.sub}</div>
      </div>
    </div>
  ))}
</div>
```

### 6.9 Sticky CTA mobile
```tsx
{/* Toujours en dehors du div principal, utiliser <> fragment */}
<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
  <a
    href={AFFILIATE_LINK}
    target="_blank"
    rel="nofollow sponsored noopener noreferrer"
    className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-base py-3.5 rounded-xl transition-colors"
  >
    [Texte CTA]
  </a>
  <p className="text-center text-xs text-gray-400 mt-1">Sans CB · Annulable à tout moment</p>
</div>
```
**Note** : Ajouter `pb-20 md:pb-0` sur le div principal pour éviter que le contenu passe sous le sticky.

---

## 7. Structure type d'une page /go/[software]

```
<> {/* Fragment React */}
  <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col pb-20 md:pb-0">
    <header>          <!-- Header minimaliste : logo + badge Vérifié -->
    <main>
      <!-- Badge urgence -->
      <!-- Logo SVG + H1 + description -->
      <!-- Étoiles + note -->
      <!-- CTA principal (indigo) -->
      <!-- Micro-copy rassurant (sans CB, annulable, support FR) -->
      <!-- Barre de confiance média -->
      <!-- Steps visuels (3 étapes) -->
      <!-- Grid features (3 cartes) -->
      <!-- Section avis (3 cartes) -->
      <!-- CTA secondaire (orange) -->
      <!-- Lien retour /comparatif -->
    </main>
    <footer>          <!-- Disclaimer affilié -->
  </div>
  <div>               <!-- Sticky CTA mobile (md:hidden, fixed bottom) -->
</>
```

---

## 8. Logos SVG inline (pattern)

Chaque produit a un logo SVG inline dans son fichier. Pattern :
- `viewBox="0 0 120 36"`, `width="140"`, `height="42"`
- Rectangle arrondi (fond couleur marque) + texte blanc pour initiale
- Texte "nom" en couleur marque à côté
- Toujours `aria-label="Logo [Nom]"` sur le `<svg>`

| Produit | Couleur fond | Couleur texte |
|---------|-------------|---------------|
| Freebe | `#1E40AF` | blanc / `#1E40AF` |
| Pennylane | `#00B4D8` | blanc / `#00B4D8` |
| Indy | `#6366F1` | blanc / `#6366F1` |
| Tiime | `#0EA5E9` | blanc / `#0EA5E9` |
| Shine | `#7C3AED` | blanc / `#7C3AED` |
| Sellsy | `#DC2626` | blanc / `#DC2626` |
| Finom | `#16A34A` | blanc / `#16A34A` |
| MyUnisoft | `#D97706` | blanc / `#D97706` |

---

## 9. SEO & Accessibilité

- `metadata.robots = 'noindex, nofollow'` sur toutes les pages /go/
- `aria-label` sur toutes les notations étoiles et logos SVG
- `aria-hidden="true"` sur les SVG décoratifs (flèches CTA)
- `rel="nofollow sponsored noopener noreferrer"` sur tous les liens affiliés
- `alt` équivalent via `aria-label` sur les logos SVG inline
- Images : aucune image externe — tout en SVG inline ou emoji

---

## 10. Animations & Micro-interactions

| Élément | Classes | Effet |
|---------|---------|-------|
| CTA hover | `hover:scale-105` | Léger agrandissement |
| CTA transition | `transition-all` | Smooth sur toutes props |
| Cards hover | `hover:shadow-md hover:border-indigo-100 transition-all` | Élévation + teinte |
| Avis hover | `hover:shadow-md transition-shadow` | Élévation seule |
| Sticky mobile | `active:bg-indigo-800` | Feedback tactile |

---

## 11. Checklist déploiement nouvelle page /go/

- [ ] Fichier `app/go/[software]/page.tsx` créé
- [ ] `metadata.title` optimisé (inclut le nom du logiciel + "gratuit")
- [ ] `metadata.description` avec les 3 arguments clés
- [ ] `metadata.robots = 'noindex, nofollow'`
- [ ] Lien affilié réel renseigné (sinon `href="#"` temporaire)
- [ ] Logo SVG inline avec `aria-label`
- [ ] H1 avec `<span>` coloré pour le mot-clé
- [ ] Note étoiles avec `aria-label`
- [ ] CTA principal en `bg-indigo-600`
- [ ] Micro-copy rassurant (sans CB, annulable, support FR)
- [ ] Barre de confiance média
- [ ] Section Steps visuels
- [ ] 3 cartes features
- [ ] 3 avis avec nom/job (fictifs mais plausibles)
- [ ] CTA secondaire en `bg-orange-500`
- [ ] Lien retour `/comparatif`
- [ ] Footer disclaimer affilié
- [ ] Sticky CTA mobile (`md:hidden`)
- [ ] `pb-20 md:pb-0` sur le div principal

---

*Document maintenu par FacturationPro — mise à jour au fil des itérations de design.*
