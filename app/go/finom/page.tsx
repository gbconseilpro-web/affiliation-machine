import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer Finom gratuitement : Compte pro + facturation tout-en-un',
  description: 'Finom : compte bancaire pro + logiciel de facturation en une seule app. Facturation illimitée, carte Mastercard, cashback. Testé par 100 000+ entrepreneurs européens.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Alexandre B.', job: 'Consultant indépendant', text: 'J\'ai enfin arrêté jongler entre ma banque et mon logiciel de factu. Finom fait les deux, impeccablement.', stars: 5 },
  { name: 'Marie-Claire T.', job: 'Designer freelance', text: 'Le cashback sur mes dépenses pro compense largement l\'abonnement. Et les factures se génèrent en 30 secondes.', stars: 5 },
  { name: 'Julien F.', job: 'Développeur front-end', text: 'Interface propre, IBAN français, carte Mastercard livrable en 48h. Exactement ce qu\'il me fallait.', stars: 5 },
]

export default function GoFinomPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50 flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
        <Link href="/" className="text-indigo-600 font-bold text-lg">FacturationPro</Link>
        <span className="text-sm text-gray-500">Partenaire officiel Finom</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Badge */}
        <div className="bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
          <span>💳</span>
          <span>1 mois offert sur tous les plans, sans engagement</span>
        </div>

        {/* Titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-xl font-bold text-lg mb-4">
            finom
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Banque pro + facturation :<br/>
            <span className="text-violet-600">enfin réunis en une seule app</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Ouvrez votre compte pro en 15 minutes, émettez des factures professionnelles et encaissez vos paiements : tout au même endroit.
          </p>
        </div>

        {/* Étoiles */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-yellow-400 text-2xl">{s}</span>
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4,7/5</span>
          <span className="text-gray-500 text-sm">(3 200+ avis vérifiés)</span>
        </div>

        {/* CTA principal */}
        <a
          href="https://finom.co/fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-finom"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-violet-200 transition-all hover:scale-105 mb-4"
        >
          Ouvrir mon compte Finom
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <p className="text-sm text-gray-500 mb-10">
          ✅ IBAN français · ✅ Carte Mastercard incluse · ✅ Cashback sur vos achats pro
        </p>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
          {[
            { icon: '🏦', title: 'Compte bancaire pro', desc: 'IBAN FR, virements SEPA, carte Mastercard virtuelle ou physique' },
            { icon: '📄', title: 'Facturation illimitée', desc: 'Devis et factures en PDF, envoi par email, suivi des paiements' },
            { icon: '💰', title: 'Cashback automatique', desc: "Jusqu'à 3% de remise sur vos dépenses professionnelles" },
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
          href="https://finom.co/fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-finom"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6"
        >
          Démarrer gratuitement 1 mois
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">
          ← Voir toutes les alternatives à Finom
        </Link>
      </main>

      <footer className="py-4 text-center text-xs text-gray-400">
        <p>
          FacturationPro est un site de comparaison indépendant. Ce lien est un lien affilié : nous pouvons percevoir une commission si vous souscrivez via ce lien, sans coût supplémentaire pour vous.{' '}
          <Link href="/comparatif" className="underline">Voir notre comparatif complet</Link>
        </p>
      </footer>
    </div>
  )
}
