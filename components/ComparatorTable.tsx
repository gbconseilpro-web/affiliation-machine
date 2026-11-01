'use client'

import { useState } from 'react'

interface Product {
  id: number
  name: string
  logo?: string
  rating: number
  reviewCount: number
  price: string
  badge?: string
  badgeColor?: string
  pros: string[]
  cons: string[]
  ctaUrl: string
  ctaText: string
  features: Record<string, boolean>
}

interface Props {
  products: Product[]
}

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-bold ml-1 text-gray-800">{rating}</span>
      <span className="text-xs text-gray-500 ml-0.5">({reviewCount.toLocaleString('fr-FR')} avis)</span>
    </div>
  )
}

const LOGO_COLORS: Record<string, string> = {
  Pennylane: 'bg-emerald-600',
  Sellsy: 'bg-blue-600',
  Axonaut: 'bg-violet-600',
}

function LogoPlaceholder({ name }: { name: string }) {
  const color = LOGO_COLORS[name] || 'bg-gray-600'
  return (
    <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center flex-shrink-0 shadow`}>
      <span className="text-white font-bold text-lg">{name[0]}</span>
    </div>
  )
}

export default function ComparatorTable({ products }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="space-y-5">
      {products.map((product, index) => {
        const isTop = index === 0
        const isExpanded = expandedId === product.id

        return (
          <div
            key={product.id}
            className={`rounded-2xl overflow-hidden shadow-sm transition-shadow hover:shadow-md ${
              isTop
                ? 'border-2 border-indigo-500 ring-4 ring-indigo-50'
                : 'border border-gray-200'
            }`}
          >
            {/* Bandeau "Notre choix n°1" */}
            {isTop && (
              <div className="bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-1.5 flex items-center gap-2">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Notre choix n°1 — Meilleur pour les PME
              </div>
            )}

            <div className="bg-white p-6">
              {/* Ligne principale */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Logo + infos */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <LogoPlaceholder name={product.name} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      {product.badge && (
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <StarRating rating={product.rating} reviewCount={product.reviewCount} />
                    <p className="text-sm text-gray-500 mt-0.5">{product.price}</p>
                  </div>
                </div>

                {/* Tags conformité + CTA */}
                <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
                  {/* Badges conformité */}
                  <div className="flex flex-wrap gap-1.5">
                    {product.features['Certifié PDP'] && (
                      <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">
                        <span className="text-green-500">✓</span> PDP certifiée
                      </span>
                    )}
                    {product.features['Format Factur-X'] && (
                      <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                        <span>✓</span> Factur-X
                      </span>
                    )}
                    {product.features['Archivage 10 ans'] && (
                      <span className="inline-flex items-center gap-1 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">
                        <span>✓</span> Archivage 10 ans
                      </span>
                    )}
                  </div>

                  <a
                    href={product.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className={`inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap ${
                      isTop
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {product.ctaText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bouton toggle */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : product.id)}
                className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 font-medium"
              >
                <svg
                  className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {isExpanded ? 'Masquer les détails' : 'Voir points forts et détails complets'}
              </button>

              {/* Détails expandables */}
              {isExpanded && (
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-1.5">
                        <span className="text-green-500 text-lg">✓</span> Points forts
                      </h4>
                      <ul className="space-y-2">
                        {product.pros.map((pro, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-1.5">
                        <span className="text-red-400 text-lg">✗</span> Points faibles
                      </h4>
                      <ul className="space-y-2">
                        {product.cons.map((con, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-gray-800 mb-3">Fonctionnalités conformité 2026</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {Object.entries(product.features).map(([feature, available]) => (
                          <div
                            key={feature}
                            className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg ${
                              available ? 'bg-green-50 text-green-800' : 'bg-gray-50 text-gray-400'
                            }`}
                          >
                            <span className={available ? 'text-green-500 font-bold' : 'text-gray-300'}>
                              {available ? '✓' : '✗'}
                            </span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <p className="text-sm text-gray-600">
                      Convaincu par <strong>{product.name}</strong> ?
                    </p>
                    <a
                      href={product.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap ${
                        isTop
                          ? 'bg-orange-500 hover:bg-orange-600 text-white'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}
                    >
                      {product.ctaText}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
