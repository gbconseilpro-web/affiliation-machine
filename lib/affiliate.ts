/**
 * Utilitaires pour la gestion des liens affiliés
 * Les paramètres de tracking sont configurés par réseau
 */

export type AffiliateNetwork = 'awin' | 'affilae' | 'direct' | 'custom'

interface AffiliateLinkOptions {
  baseUrl: string
  network: AffiliateNetwork
  programId?: string
  subId?: string // tracking sub-ID for performance analysis
}

/**
 * Génère un lien affilié selon le réseau
 */
export function buildAffiliateLink(options: AffiliateLinkOptions): string {
  const { baseUrl, network, programId, subId } = options
  const url = new URL(baseUrl)

  switch (network) {
    case 'awin':
      // Format: https://www.awin1.com/cread.php?awinmid=XXXXX&awinaffid=YYYYY&ued=https://...
      const awinAffId = process.env.AWIN_AFFILIATE_ID || ''
      const awinLink = new URL('https://www.awin1.com/cread.php')
      awinLink.searchParams.set('awinmid', programId || '')
      awinLink.searchParams.set('awinaffid', awinAffId)
      if (subId) awinLink.searchParams.set('clickref', subId)
      awinLink.searchParams.set('ued', baseUrl)
      return awinLink.toString()

    case 'affilae':
      // Format: tracking link provided by Affilae per program
      url.searchParams.set('utm_source', 'affilae')
      url.searchParams.set('utm_medium', 'affiliate')
      if (subId) url.searchParams.set('aff_sub', subId)
      return url.toString()

    case 'direct':
      // Lien direct avec tracking UTM basique
      url.searchParams.set('ref', process.env.SITE_REF_ID || 'affiliate')
      if (subId) url.searchParams.set('sid', subId)
      return url.toString()

    case 'custom':
    default:
      return baseUrl
  }
}

/**
 * Crée un lien affilié avec clic tracking (à implémenter côté serveur)
 * Pour l'instant retourne le lien direct
 */
export function createTrackedLink(url: string, label: string): string {
  // TODO: logger le clic en base pour analytics
  return url
}

/**
 * Vérifie si une URL est un lien affilié
 */
export function isAffiliateLink(url: string): boolean {
  const affiliateDomains = ['awin1.com', 'affilae.com', 'prf.hn', 'shareasale.com']
  try {
    const parsed = new URL(url)
    return affiliateDomains.some(domain => parsed.hostname.includes(domain))
  } catch {
    return false
  }
}
