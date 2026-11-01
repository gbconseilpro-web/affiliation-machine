import type { Metadata } from 'next'
import { buildPersonJsonLd } from '@/lib/seo'

const SITE_NAME = process.env.SITE_NAME || 'Site Affiliation'
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
const AUTHOR_NAME = process.env.SITE_AUTHOR_NAME || 'Expert Affiliation'
const AUTHOR_DESCRIPTION = process.env.SITE_AUTHOR_DESCRIPTION || 'Expert en logiciels et solutions digitales pour les professionnels'

export const metadata: Metadata = {
  title: `À propos de ${AUTHOR_NAME}`,
  description: `Découvrez qui rédige les comparatifs et avis sur ${SITE_NAME}. Méthode d'évaluation, expérience et engagements.`,
  alternates: {
    canonical: `${SITE_URL}/auteur`,
  },
}

export default function AuteurPage() {
  const personJsonLd = buildPersonJsonLd({
    name: AUTHOR_NAME,
    description: AUTHOR_DESCRIPTION,
    sameAs: [
      // Ajoutez vos profils vérifiables ici pour le signal GEO
      // 'https://www.linkedin.com/in/votre-profil',
      // 'https://twitter.com/votre-handle',
    ],
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="section max-w-3xl">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">À propos de l&apos;auteur</h1>
          <p className="text-gray-600 text-lg">
            Transparence totale sur qui rédige ces comparatifs et comment nous les évaluons.
          </p>
        </div>

        <div className="space-y-8">
          {/* Qui suis-je */}
          <section className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Qui rédige ces comparatifs ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Je suis <strong>{AUTHOR_NAME}</strong>, {AUTHOR_DESCRIPTION}.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chaque comparatif publié sur ce site résulte d&apos;une évaluation personnelle,
              avec des tests en conditions réelles quand c&apos;est possible,
              ou d&apos;une analyse rigoureuse des avis d&apos;utilisateurs vérifiés.
            </p>
          </section>

          {/* Méthode */}
          <section className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Notre méthode d&apos;évaluation</h2>
            <ul className="space-y-3">
              {[
                { icon: '🔍', text: 'Test en conditions réelles sur 30 jours minimum' },
                { icon: '👥', text: 'Croisement avec les avis utilisateurs sur Capterra, G2 et Trustpilot' },
                { icon: '📊', text: 'Comparaison sur 20+ critères pondérés selon votre usage' },
                { icon: '🔄', text: 'Mise à jour trimestrielle de tous les contenus' },
                { icon: '💡', text: 'Prise en compte des dernières versions logicielles' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-gray-700">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Affiliation */}
          <section className="card p-6 border-amber-200 bg-amber-50">
            <h2 className="text-2xl font-bold mb-4">🤝 Transparence sur l&apos;affiliation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ce site contient des liens affiliés. Cela signifie que si vous cliquez sur un
              lien et effectuez un achat, je peux percevoir une commission, <strong>sans
              surcoût pour vous</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ces commissions nous permettent de financer le temps de test et de rédaction.
              Elles n&apos;influencent pas nos recommandations : nous signalons toujours les
              défauts des produits que nous recommandons, et recommandons parfois des produits
              sans lien affilié quand ils sont meilleurs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Tous les liens affiliés sont marqués avec l&apos;attribut <code>rel="sponsored"</code>
              conformément aux directives Google et FTC.
            </p>
          </section>

          {/* Contact */}
          <section className="card p-6">
            <h2 className="text-2xl font-bold mb-4">Une question ? Une correction ?</h2>
            <p className="text-gray-700 leading-relaxed">
              Si vous constatez une information erronée ou obsolète, ou si vous avez une
              suggestion de comparatif, contactez-nous. Nous mettons à jour rapidement.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
