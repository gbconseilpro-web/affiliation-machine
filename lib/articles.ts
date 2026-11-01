import fs from 'fs'
import path from 'path'

export interface Article {
  slug: string
  title: string
  body: string
  kw: string
  ts: number
}

export interface SeoData {
  slug: string
  meta_title: string
  meta_desc: string
  og_title: string
  canonical: string
}

// Liens Awin affiliation (publisher ID 1957421)
export const AWIN_LINKS = {
  'logiciel-facturation': {
    name: 'Freebe',
    url: 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=logiciel-facturation&p=https%3A%2F%2Fwww.freebe.me%2F',
    cta: 'Essayer Freebe gratuitement',
    desc: 'Logiciel de facturation pour freelances et auto-entrepreneurs'
  },
  'devis-gratuit': {
    name: 'Freebe',
    url: 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=devis-gratuit&p=https%3A%2F%2Fwww.freebe.me%2F',
    cta: 'Créer un devis gratuit avec Freebe',
    desc: 'Créez des devis professionnels en quelques clics'
  },
  'micro-entrepreneur': {
    name: 'Freebe',
    url: 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=micro-entrepreneur&p=https%3A%2F%2Fwww.freebe.me%2F',
    cta: 'Gérer mon activité avec Freebe',
    desc: 'La solution complète pour les micro-entrepreneurs'
  },
  'facture-en-ligne': {
    name: 'Freebe',
    url: 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=facture-en-ligne&p=https%3A%2F%2Fwww.freebe.me%2F',
    cta: 'Créer ma facture en ligne',
    desc: 'Facturation en ligne simple et rapide pour les indépendants'
  }
}

export function getArticles(): Article[] {
  const filePath = path.join(process.cwd(), 'agents', 'content_output.json')
  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function getSeoData(): SeoData[] {
  const filePath = path.join(process.cwd(), 'agents', 'seo_output.json')
  try {
    const raw = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export function getArticleBySlug(slug: string): Article | null {
  const articles = getArticles()
  return articles.find(a => a.slug === slug) || null
}

export function getSeoBySlug(slug: string): SeoData | null {
  const seoList = getSeoData()
  return seoList.find(s => s.slug === slug) || null
}
