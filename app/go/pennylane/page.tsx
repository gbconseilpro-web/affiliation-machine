import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer Pennylane gratuitement — Solution comptable tout-en-un pour TPE/PME',
  description: 'Testez Pennylane : comptabilité automatisée, collaboration expert-comptable, rapports temps réel. La solution préférée des TPE et PME françaises.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Marc L.', job: 'Dirigeant TPE', text: 'Pennylane a transformé notre relation avec notre expert-comptable. Tout est centralisé, on gagne un temps fou.', stars: 5 },
  { name: 'Julie K.', job: 'CFO startup', text: 'Les rapports financiers en temps réel nous permettent de prendre des décisions rapidement. Indispensable.', stars: 5 },
  { name: 'Antoine B.', job: 'Gérant PME', text: 'La comptabilité automatisée a réduit nos erreurs de 90%. Je recommande à tous les chefs d\'entreprise.', stars: 4 },
]

export default function GoPennylane() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
        <Link href="/" className="text-indigo-600 font-bold text-lg">FacturationPro</Link>
        <span className="text-sm text-gray-500">Partenaire officiel Pennylane</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
          <span>✨</span>
          <span>Démo gratuite disponible — Sans engagement</span>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <svg viewBox="0 0 160 36" width="180" height="42" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Pennylane">
              <rect x="0" y="2" width="30" height="30" rx="8" fill="#00B4D8"/>
              <text x="6" y="22" fontFamily="Arial" fontWeight="800" fontSize="18" fill="white">P</text>
              <text x="36" y="24" fontFamily="Arial" fontWeight="700" fontSize="18" fill="#00B4D8">ennylane</text>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            La solution tout-en-un<br/>
            <span className="text-cyan-600">pour TPE et PME</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Comptabilité, facturation et collaboration expert-comptable dans une seule plateforme. Plus de 15 000 entreprises font confiance à Pennylane.
          </p>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className="flex" aria-label="Note 4,6/5">
            {['★','★','★','★','★'].map((s, i) => (
              <span key={i} className={`text-2xl ${i < 4 ? 'text-yellow-400' : 'text-yellow-300'}`}>{s}</span>
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4,6/5</span>
          <span className="text-gray-500 text-sm">(1 580+ avis vérifiés)</span>
        </div>

        <a href="https://www.pennylane.com/fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-pennylane" target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 mb-4">
          Demander une démo Pennylane
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-sm text-gray-500 mb-10">✅ Démo personnalisée · ✅ Sans engagement · ✅ Onboarding inclus</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
          {[
            { icon: '🤖', title: 'Comptabilité automatisée', desc: 'Rapprochements bancaires et saisies en temps réel' },
            { icon: '🤝', title: 'Collaboration expert-comptable', desc: 'Travaillez en temps réel avec votre comptable' },
            { icon: '📊', title: 'Rapports financiers', desc: 'Pilotez votre trésorerie à tout moment' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl w-full mb-10">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Ce que disent les utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex mb-2">{Array.from({length:r.stars}).map((_,i)=><span key={i} className="text-yellow-400">★</span>)}</div>
                <p className="text-sm text-gray-600 mb-3 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                <div className="text-xs text-gray-500">{r.job}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-5 max-w-lg w-full text-center mb-8">
          <div className="text-2xl font-bold text-gray-900 mb-1">À partir de 29€/mois</div>
          <div className="text-sm text-gray-600">Tout inclus : facturation, comptabilité, rapports</div>
        </div>

        <a href="https://www.pennylane.com/fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-pennylane-cta2" target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6">
          Commencer avec Pennylane
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">← Voir toutes les alternatives à Pennylane</Link>
      </main>

      <footer className="py-4 text-center text-xs text-gray-400">
        <p>FacturationPro est un site de comparaison indépendant. Ce lien est un lien affilié — nous pouvons percevoir une commission si vous souscrivez via ce lien, sans coût supplémentaire pour vous.{' '}
        <Link href="/comparatif" className="underline">Voir notre comparatif complet</Link></p>
      </footer>
    </div>
  )
}
