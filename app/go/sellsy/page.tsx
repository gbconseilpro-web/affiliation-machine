import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer Sellsy gratuitement — CRM + Facturation pour PME françaises',
  description: 'Sellsy réunit CRM, facturation, gestion commerciale et trésorerie dans une seule plateforme 100% française. La solution all-in-one préférée des PME de 5 à 200 salariés.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Nathalie B.', job: 'DG d\'une PME (35 sal.)', text: 'Avant Sellsy, on avait 4 outils différents. Maintenant tout est dans Sellsy — nos commerciaux gagnent 3h par semaine.', stars: 5 },
  { name: 'Romain T.', job: 'Directeur commercial', text: 'Le pipeline CRM connecté à la facturation change tout. De la signature du devis à la facture payée : tout automatisé.', stars: 5 },
  { name: 'Céline A.', job: 'Responsable finance', text: 'Les relances automatiques ont réduit notre DSO de 45 jours à 28 jours. Le ROI est évident.', stars: 5 },
]

export default function GoSellsyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
        <Link href="/" className="text-indigo-600 font-bold text-lg">FacturationPro</Link>
        <span className="text-sm text-gray-500">Partenaire officiel Sellsy</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Badge */}
        <div className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
          <span>🇫🇷</span>
          <span>Plateforme 100% française — données hébergées en France</span>
        </div>

        {/* Titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold text-lg mb-4">
            Sellsy
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Du prospect à la facture payée :<br/>
            <span className="text-emerald-600">tout se passe dans Sellsy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            CRM, devis, facturation, trésorerie — une seule plateforme pour toute votre activité commerciale. Sans jongler entre 4 outils.
          </p>
        </div>

        {/* Étoiles */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-yellow-400 text-2xl">{s}</span>
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4,5/5</span>
          <span className="text-gray-500 text-sm">(2 400+ avis vérifiés)</span>
        </div>

        {/* CTA principal */}
        <a
          href="https://go.sellsy.com/essai-gratuit?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-sellsy"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-emerald-200 transition-all hover:scale-105 mb-4"
        >
          Essayer Sellsy 15 jours gratuits
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <p className="text-sm text-gray-500 mb-10">
          ✅ 15 jours d&apos;essai gratuit · ✅ Sans CB · ✅ Accompagnement humain inclus
        </p>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
          {[
            { icon: '👥', title: 'CRM intégré', desc: 'Pipeline commercial, suivi des leads et historique client centralisés' },
            { icon: '⚡', title: 'Devis → Facture en 1 clic', desc: 'Transformez un devis signé en facture instantanément, sans ressaisie' },
            { icon: '💸', title: 'Trésorerie en temps réel', desc: 'Prévisions de cash, rapprochement bancaire et relances automatiques' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Avis clients */}
        <div className="max-w-3xl w-full mb-10">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
            Ce que disent les utilisateurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex mb-2">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-3 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                <div className="text-xs text-gray-500">{r.job}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA secondaire */}
        <a
          href="https://go.sellsy.com/essai-gratuit?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-sellsy"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6"
        >
          Démarrer mon essai gratuit maintenant
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">
          ← Voir toutes les alternatives à Sellsy
        </Link>
      </main>

      <footer className="py-4 text-center text-xs text-gray-400">
        <p>
          FacturationPro est un site de comparaison indépendant. Ce lien est un lien affilié — nous pouvons percevoir une commission si vous souscrivez via ce lien, sans coût supplémentaire pour vous.{' '}
          <Link href="/comparatif" className="underline">Voir notre comparatif complet</Link>
        </p>
      </footer>
    </div>
  )
}
