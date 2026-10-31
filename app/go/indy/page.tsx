import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer Indy gratuitement — Comptabilité simplifiée pour indépendants',
  description: 'Testez Indy : déclarations fiscales guidées, catégorisation automatique, idéal pour micro-entrepreneurs. La comptabilité sans prise de tête.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Laura M.', job: 'Auto-entrepreneur', text: 'Indy m\'a aidée à faire ma première déclaration de revenus sans stresser. Tout est expliqué pas à pas.', stars: 5 },
  { name: 'Kevin D.', job: 'Freelance IT', text: 'La catégorisation automatique est bluffante. Je passe 10 minutes par mois sur ma compta au lieu de 3 heures.', stars: 5 },
  { name: 'Nadia T.', job: 'Coach certifiée', text: 'Parfait pour les micro-entrepreneurs. Le tarif est imbattable et les fonctionnalités sont top.', stars: 4 },
]

export default function GoIndy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
        <Link href="/" className="text-indigo-600 font-bold text-lg">FacturationPro</Link>
        <span className="text-sm text-gray-500">Partenaire officiel Indy</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
          <span>🚀</span>
          <span>Essai gratuit — Idéal micro-entrepreneurs et freelances</span>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <svg viewBox="0 0 100 36" width="120" height="42" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Indy">
              <rect x="0" y="2" width="30" height="30" rx="8" fill="#6366F1"/>
              <text x="8" y="22" fontFamily="Arial" fontWeight="800" fontSize="18" fill="white">I</text>
              <text x="36" y="24" fontFamily="Arial" fontWeight="700" fontSize="18" fill="#6366F1">ndy</text>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            La comptabilité simplifiée<br/>
            <span className="text-violet-600">pour indépendants</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Déclarations fiscales, TVA, liasse fiscale — Indy gère tout pour vous. Plus de 200 000 indépendants font confiance à Indy.
          </p>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className="flex" aria-label="Note 4,4/5">
            {[0,1,2,3,4].map((i) => (
              <span key={i} className={`text-2xl ${i < 4 ? 'text-yellow-400' : 'text-yellow-200'}`}>★</span>
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4,4/5</span>
          <span className="text-gray-500 text-sm">(980+ avis vérifiés)</span>
        </div>

        <a href="#" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 mb-4">
          Essayer Indy gratuitement
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-sm text-gray-500 mb-10">✅ Sans carte bancaire · ✅ Accès immédiat · ✅ Support humain inclus</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
          {[
            { icon: '📋', title: 'Déclarations fiscales guidées', desc: 'IS, TVA, BNC/BIC — tout expliqué en langage simple' },
            { icon: '🏷️', title: 'Catégorisation automatique', desc: 'Vos transactions classées sans effort' },
            { icon: '🛵', title: 'Idéal micro-entrepreneurs', desc: 'Conçu spécifiquement pour votre statut' },
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

        <div className="bg-violet-50 border border-violet-100 rounded-2xl p-5 max-w-lg w-full text-center mb-8">
          <div className="text-2xl font-bold text-gray-900 mb-1">À partir de 7€/mois</div>
          <div className="text-sm text-gray-600">Le prix le plus bas du marché pour une compta complète</div>
        </div>

        <a href="#" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6">
          Commencer avec Indy
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">← Voir toutes les alternatives à Indy</Link>
      </main>

      <footer className="py-4 text-center text-xs text-gray-400">
        <p>FacturationPro est un site de comparaison indépendant. Ce lien est un lien affilié — nous pouvons percevoir une commission si vous souscrivez via ce lien, sans coût supplémentaire pour vous.{' '}
        <Link href="/comparatif" className="underline">Voir notre comparatif complet</Link></p>
      </footer>
    </div>
  )
}
