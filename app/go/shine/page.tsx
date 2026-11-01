import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer Shine — Le compte pro et facturation pour freelances modernes',
  description: 'Testez Shine : compte pro + facturation intégrés, IBAN français immédiat, app mobile 5 étoiles. Le combo parfait pour les freelances et indépendants.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Alexia R.', job: 'UX Designer freelance', text: 'Shine c\'est mon compte pro ET ma facturation. Plus besoin de jongler entre plusieurs apps. La vie est simple.', stars: 5 },
  { name: 'Mathieu C.', job: 'Développeur mobile', text: 'L\'IBAN français en 24h et l\'app ultra-fluide. J\'ai ouvert mon compte en 10 minutes, factures envoyées le soir.', stars: 5 },
  { name: 'Emma V.', job: 'Rédactrice web', text: 'Le support client est exceptionnel. Une vraie équipe humaine qui répond vite. Rare de nos jours.', stars: 5 },
]

export default function GoShine() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50 flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
        <Link href="/" className="text-indigo-600 font-bold text-lg">FacturationPro</Link>
        <span className="text-sm text-gray-500">Partenaire officiel Shine</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
          <span>⚡</span>
          <span>Compte pro ouvert en 10 minutes — IBAN français immédiat</span>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <svg viewBox="0 0 110 36" width="130" height="42" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Shine">
              <rect x="0" y="2" width="30" height="30" rx="8" fill="#F59E0B"/>
              <text x="7" y="22" fontFamily="Arial" fontWeight="800" fontSize="16" fill="white">Sh</text>
              <text x="36" y="24" fontFamily="Arial" fontWeight="700" fontSize="18" fill="#F59E0B">ine</text>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Le compte pro des<br/>
            <span className="text-amber-600">freelances modernes</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Compte bancaire pro + facturation dans une seule app. Plus de 100 000 freelances et indépendants ont choisi Shine.
          </p>
        </div>

        <div className="flex items-center gap-2 mb-8">
          <div className="flex" aria-label="Note 4,2/5">
            {[0,1,2,3,4].map((i) => (
              <span key={i} className={`text-2xl ${i < 4 ? 'text-yellow-400' : 'text-yellow-200'}`}>★</span>
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4,2/5</span>
          <span className="text-gray-500 text-sm">(1 240+ avis vérifiés)</span>
        </div>

        <a href="https://www.shine.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-shine" target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 mb-4">
          Ouvrir mon compte Shine
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-sm text-gray-500 mb-10">✅ IBAN français · ✅ Carte Mastercard · ✅ 1 mois offert</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
          {[
            { icon: '🏦', title: 'Compte pro + facturation', desc: 'Tout au même endroit, une seule app' },
            { icon: '🇫🇷', title: 'IBAN français immédiat', desc: 'Ouverture en 10 minutes, utilisable de suite' },
            { icon: '📱', title: 'App mobile top-notée', desc: '4,8/5 sur l\'App Store et Google Play' },
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

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 max-w-lg w-full text-center mb-8">
          <div className="text-2xl font-bold text-gray-900 mb-1">À partir de 7,90€/mois</div>
          <div className="text-sm text-gray-600">Compte pro + facturation + carte Mastercard incluse</div>
        </div>

        <a href="https://www.shine.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-shine-cta2" target="_blank" rel="nofollow sponsored noopener" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6">
          Démarrer avec Shine
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">← Voir toutes les alternatives à Shine</Link>
      </main>

      <footer className="py-4 text-center text-xs text-gray-400">
        <p>FacturationPro est un site de comparaison indépendant. Ce lien est un lien affilié — nous pouvons percevoir une commission si vous souscrivez via ce lien, sans coût supplémentaire pour vous.{' '}
        <Link href="/comparatif" className="underline">Voir notre comparatif complet</Link></p>
      </footer>
    </div>
  )
}
