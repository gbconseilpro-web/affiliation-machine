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

function StarRating({ rating }: { rating: number }) {
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
      <span className="text-sm font-semibold ml-1">{rating}</span>
      <span className="text-xs text-gray-500">({reviewCount.toLocaleString('fr-FR')} avis)</span>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function StarRatingComponent({ rating, reviewCount }: { rating: number; reviewCount: number }) {
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
      <span className="text-sm font-semibold ml-1">{rating}</span>
      <span className="text-xs text-gray-500">({reviewCount.toLocaleString('fr-FR')} avis)</span>
    </div>
  )
}

export default function ComparatorTable({ products }: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`card p-6 ${index === 0 ? 'border-primary-500 border-2 ring-1 ring-primary-200' : ''}`}
        >
          {index === 0 && (
            <div className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-3">
              ⭐ Notre choix n°1
            </div>
          )}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Nom + badge */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold">{product.name}</h3>
                {product.badge && (
                  <span className={`badge ${product.badgeColor}`}>{product.badge}</span>
                )}
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="text-sm font-semibold ml-1">{product.rating}</span>
                <span className="text-xs text-gray-500">({product.reviewCount.toLocaleString('fr-FR')} avis)</span>
              </div>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <a
                href={product.ctaUrl}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-primary whitespace-nowrap"
              >
                {product.ctaText} →
              </a>
              <button
                onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                className="text-sm text-primary-600 hover:underline"
              >
                {expandedId === product.id ? 'Masquer les détails' : 'Voir les détails'}
              </button>
            </div>
          </div>

          {/* Détails expandables */}
          {expandedId === product.id && (
            <div className="mt-6 pt-6 border-t border-gray-100 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">✓ Points forts</h4>
                <ul className="space-y-1">
                  {product.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-2">✗ Points faibles</h4>
                <ul className="space-y-1">
                  {product.cons.map((con, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">✗</span> {con}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold mb-3">Fonctionnalités</h4>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(product.features).map(([feature, available]) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <span className={available ? 'text-green-500' : 'text-gray-300'}>
                        {available ? '✓' : '✗'}
                      </span>
                      <span className={available ? 'text-gray-800' : 'text-gray-400'}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
