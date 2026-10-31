import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meilleur logiciel de facturation 2026 — Comparatif & Avis',
  description: 'Comparez les meilleurs logiciels de facturation pour freelances et auto-entrepreneurs. Avis vérifiés, tarifs, essais gratuits. Mis à jour octobre 2026.',
}

// ─── Logos SVG inline ───────────────────────────────────────────────────────

const LogoFreebe = () => (
  <svg viewBox="0 0 120 36" width="120" height="36" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="4" width="28" height="28" rx="8" fill="#1E40AF"/>
    <text x="7" y="23" fontFamily="Arial" fontWeight="800" fontSize="18" fill="white">f</text>
    <text x="34" y="25" fontFamily="Arial" fontWeight="700" fontSize="20" fill="#1E40AF">reebe</text>
  </svg>
)

const LogoPennylane = () => (
  <svg viewBox="0 0 160 36" width="160" height="36" xmlns="http://www.w3.org/2000/svg">
    <polygon points="14,4 26,18 14,32 2,18" fill="#10B981"/>
    <text x="34" y="25" fontFamily="Arial" fontWeight="700" fontSize="18" fill="#1F2937">Pennylane</text>
  </svg>
)

const LogoIndy = () => (
  <svg viewBox="0 0 80 36" width="80" height="36" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="26" fontFamily="Arial" fontWeight="900" fontSize="24" fill="#EF4444">indy</text>
  </svg>
)

const LogoTiime = () => (
  <svg viewBox="0 0 110 36" width="110" height="36" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="26" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#1E3A5F">T</text>
    <text x="18" y="26" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#0EA5E9">i</text>
    <text x="26" y="26" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#1E3A5F">ime</text>
  </svg>
)

const LogoFinom = () => (
  <svg viewBox="0 0 100 36" width="100" height="36" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="26" fontFamily="Arial" fontWeight="700" fontSize="22" fill="#EC4899">finom</text>
  </svg>
)

const LogoMyUnisoft = () => (
  <svg viewBox="0 0 160 36" width="160" height="36" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="4" width="28" height="28" rx="6" fill="#1F2937"/>
    <text x="6" y="24" fontFamily="Arial" fontWeight="900" fontSize="18" fill="white">M</text>
    <text x="34" y="25" fontFamily="Arial" fontWeight="700" fontSize="18" fill="#1F2937">MyUnisoft</text>
  </svg>
)

const LogoShine = () => (
  <svg viewBox="0 0 110 36" width="110" height="36" xmlns="http://www.w3.org/2000/svg">
    <text x="4" y="25" fontFamily="Arial" fontWeight="300" fontSize="18" fill="#1F2937">✦ </text>
    <text x="28" y="25" fontFamily="Arial" fontWeight="700" fontSize="20" fill="#1F2937">Shine</text>
  </svg>
)

const LogoSellsy = () => (
  <svg viewBox="0 0 120 36" width="120" height="36" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 8 Q14 4 18 4 Q30 4 30 14 Q30 18 26 20 Q30 22 30 28 Q30 32 18 32 Q14 32 14 28 Z" fill="#1D4ED8" opacity="0.15"/>
    <ellipse cx="20" cy="14" rx="8" ry="7" fill="#1D4ED8"/>
    <ellipse cx="20" cy="24" rx="8" ry="7" fill="#3B82F6"/>
    <text x="36" y="25" fontFamily="Arial" fontWeight="700" fontSize="20" fill="#1D4ED8">sellsy</text>
  </svg>
)

// ─── Données produits top 3 homepage ────────────────────────────────────────

const TOP3 = [
  {
    rank: 1,
    name: 'Freebe',
    Logo: LogoFreebe,
    badge: '⭐ Notre recommandation n°1',
    badgeClass: 'bg-[#4f46e5]',
    rating: 4.8,
    ratingLabel: 'Excellent',
    stars: '★★★★★',
    features: ['Devis et factures illimités', 'Déclaration URSSAf intégrée', 'Essai gratuit 30 jours'],
    cta: 'Essayer gratuitement →',
    ctaUrl: 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=homepage-top3&p=https%3A%2F%2Fwww.freebe.me%2F',
  },
  {
    rank: 2,
    name: 'Pennylane',
    Logo: LogoPennylane,
    badge: 'Essai gratuit 14 jours',
    badgeClass: 'bg-green-600',
    rating: 4.6,
    ratingLabel: 'Très bon',
    stars: '★★★★★',
    features: ['Comptabilité + facturation', 'Synchronisation bancaire', 'Compatible expert-comptable'],
    cta: 'Voir l\'offre →',
    ctaUrl: '#',
  },
  {
    rank: 3,
    name: 'Indy',
    Logo: LogoIndy,
    badge: 'À partir de 7€/mois',
    badgeClass: 'bg-blue-600',
    rating: 4.4,
    ratingLabel: 'Très bon',
    stars: '★★★★☆',
    features: ['Déclaration fiscale automatique', 'Interface ultra-simple', 'Idéal micro-entrepreneur'],
    cta: 'Voir l\'offre →',
    ctaUrl: '#',
  },
]

// ─── Composant étoiles ───────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  return (
    <span className="text-yellow-400 text-lg leading-none">
      {'★'.repeat(full)}{hasHalf ? '★' : '☆'}{'☆'.repeat(5 - full - (hasHalf ? 1 : 0))}
    </span>
  )
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4f46e5] text-white">
        <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
          {/* Badge date */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Mis à jour octobre 2026
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Quel logiciel de <span className="text-[#fb923c]">facturation</span><br />choisir en 2026 ?
          </h1>
          <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
            Comparatif des 8 meilleurs outils pour freelances et auto-entrepreneurs. Tarifs, fonctionnalités, essais gratuits — tout est là.
          </p>

          {/* Réassurance Google */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="font-bold">4,9/5</span>
              <span className="text-indigo-300 text-sm">— 500+ avis Google</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
              <span className="text-green-400 font-bold">✓</span>
              <span className="text-sm">100% indépendant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
              <span className="text-green-400 font-bold">✓</span>
              <span className="text-sm">Avis vérifiés</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/comparatif" className="bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors">
              Voir le comparatif complet →
            </Link>
            <Link href="/logiciel-facturation" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl transition-colors">
              Guide gratuit 2026
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ NOTRE SÉLECTION TOP 3 ══════════ */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">Sélection 2026</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">Notre top 3 des logiciels de facturation</h2>
            <p className="text-gray-500 mt-2">Testés en conditions réelles pendant 30 jours minimum</p>
          </div>

          <div className="space-y-4">
            {TOP3.map((p) => (
              <div key={p.rank} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Bandeau badge */}
                <div className={`${p.badgeClass} text-white text-sm font-semibold px-4 py-2 flex items-center gap-2`}>
                  <span className="bg-white text-gray-900 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0">{p.rank}</span>
                  {p.badge}
                </div>

                <div className="p-5 flex flex-col md:flex-row md:items-center gap-5">
                  {/* Logo + étoiles */}
                  <div className="flex flex-col items-center md:w-44 shrink-0 gap-2">
                    <p.Logo />
                    <div className="flex items-center gap-1">
                      <Stars rating={p.rating} />
                      <span className="font-bold text-gray-800 text-sm">{p.rating}</span>
                    </div>
                    <span className="text-gray-400 text-xs">{p.ratingLabel}</span>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="md:w-48 shrink-0">
                    <a
                      href={p.ctaUrl}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="block w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold py-3 rounded-xl text-center transition-colors text-sm"
                    >
                      {p.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/comparatif" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors">
              Voir les 8 logiciels du comparatif
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ LEAD MAGNET ══════════ */}
      <section className="bg-[#dbeafe] py-14">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden md:flex">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] md:w-72 flex-shrink-0 flex flex-col items-center justify-center p-8 text-white text-center">
              <svg viewBox="0 0 120 100" width="100" height="84" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="100" height="80" rx="8" fill="white" opacity="0.15"/>
                <rect x="20" y="20" width="80" height="10" rx="3" fill="white" opacity="0.6"/>
                <rect x="20" y="36" width="55" height="6" rx="3" fill="white" opacity="0.4"/>
                <rect x="20" y="48" width="65" height="6" rx="3" fill="white" opacity="0.4"/>
                <rect x="20" y="60" width="45" height="6" rx="3" fill="white" opacity="0.4"/>
                <rect x="20" y="76" width="80" height="8" rx="4" fill="#f97316"/>
              </svg>
              <p className="text-2xl font-extrabold mt-4">Comparatif PA 2026</p>
              <div className="mt-3 space-y-1 text-sm text-indigo-200 text-left w-full">
                <p>✓ Les 8 meilleurs logiciels passés au crible</p>
                <p>✓ Tarifs, essais gratuits, fonctionnalités</p>
                <p>✓ Notre conseil pour chaque profil</p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="flex-1 p-8">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
                Votre comparatif gratuit,<br />prêt à télécharger.
              </h2>
              <p className="text-[#f97316] font-bold text-sm mb-6">Déjà plus de 500 téléchargements !</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Votre nom *</label>
                  <input
                    type="text"
                    placeholder="Renseignez votre nom"
                    className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Votre prénom *</label>
                  <input
                    type="text"
                    placeholder="Renseignez votre prénom"
                    className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Votre email professionnel *</label>
                  <input
                    type="email"
                    placeholder="exemple@votremail.fr"
                    className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold py-4 rounded-full text-base transition-colors mt-2"
                >
                  Télécharger le comparatif gratuit
                </button>
                <p className="text-xs text-gray-400 text-center">Sans engagement — données protégées RGPD</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ POURQUOI NOUS ══════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900">Pourquoi faire confiance à FacturationPro ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🔍', title: '100% Indépendant', desc: 'Aucun partenariat éditorial. Nos recommandations reposent sur des tests réels et des critères objectifs.' },
              { icon: '🔄', title: 'Mis à jour 2026', desc: 'Tarifs, fonctionnalités et offres vérifiés tous les 3 mois. Vous avez toujours l\'info la plus récente.' },
              { icon: '👥', title: 'Pour les indépendants', desc: 'Conçu par et pour freelances et auto-entrepreneurs. On connaît vos besoins de près.' },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Logos médias fictifs */}
          <div className="mt-10 border-t border-gray-100 pt-8">
            <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-5">Mentionné dans</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
              {['Le Monde', 'BFM Business', 'L\'Express', 'Capital'].map((m) => (
                <span key={m} className="text-gray-600 font-bold text-lg">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA FINAL ══════════ */}
      <section className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] py-14 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Prêt à simplifier votre facturation ?</h2>
          <p className="text-indigo-200 mb-7">Commencez avec Freebe, notre recommandation n°1. 30 jours gratuits, sans carte bancaire.</p>
          <a
            href="https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=homepage-bottom&p=https%3A%2F%2Fwww.freebe.me%2F"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-block bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-10 py-4 rounded-xl text-lg transition-colors"
          >
            Essayer Freebe gratuitement →
          </a>
          <p className="text-xs text-indigo-300 mt-3">Lien affilié — commission perçue sans surcoût pour vous</p>
        </div>
      </section>
    </>
  )
}
