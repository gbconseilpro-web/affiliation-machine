import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer MyUnisoft gratuitement : Logiciel comptable expert-comptable et entreprises',
  description: 'MyUnisoft : la plateforme comptable collaborative entre experts-comptables et leurs clients. Facturation, comptabilité, bilan : tout connecté en temps réel.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Isabelle M.', job: 'Expert-comptable', text: 'La collaboration en temps réel avec mes clients a transformé mon cabinet. Je gagne 2h par dossier chaque mois.', stars: 5 },
  { name: 'Stéphane K.', job: 'Dirigeant PME (25 salariés)', text: 'Mon comptable et moi voyons les mêmes chiffres en direct. Les clôtures se font en 2 jours au lieu de 2 semaines.', stars: 5 },
  { name: 'Aurélie D.', job: 'Directrice financière', text: 'L\'import automatique des factures fournisseurs nous a économisé 15h de saisie manuelle par mois.', stars: 5 },
]

export default function GoMyUnisoftPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex flex-col">
      <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
        <Link href="/" className="text-indigo-600 font-bold text-lg">FacturationPro</Link>
        <span className="text-sm text-gray-500">Partenaire officiel MyUnisoft</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Badge */}
        <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
          <span>🏆</span>
          <span>N°1 des plateformes comptables collaboratives en France</span>
        </div>

        {/* Logo + titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-blue-700 text-white px-5 py-2 rounded-xl font-bold text-lg mb-4">
            MyUnisoft
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            La comptabilité connectée<br/>
            <span className="text-blue-600">entre vous et votre expert-comptable</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Finis les allers-retours de fichiers Excel. Vous et votre comptable travaillez sur les mêmes données, en temps réel, depuis n&apos;importe où.
          </p>
        </div>

        {/* Étoiles */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-yellow-400 text-2xl">{s}</span>
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4,6/5</span>
          <span className="text-gray-500 text-sm">(1 800+ avis vérifiés)</span>
        </div>

        {/* CTA principal */}
        <a
          href="https://www.myunisoft.fr/demande-demo?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-myunisoft"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-blue-200 transition-all hover:scale-105 mb-4"
        >
          Demander une démo gratuite
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <p className="text-sm text-gray-500 mb-10">
          ✅ Démo personnalisée · ✅ Accompagnement à l&apos;onboarding · ✅ Support dédié en français
        </p>

        {/* Avantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
          {[
            { icon: '🔄', title: 'Temps réel partagé', desc: 'Votre comptable voit vos factures dès que vous les créez, fini les fichiers par email' },
            { icon: '📊', title: 'Tableaux de bord live', desc: 'CA, trésorerie, TVA à décaisser : vos chiffres clés toujours à jour' },
            { icon: '🤖', title: 'IA de saisie automatique', desc: "Vos factures fournisseurs sont lues et comptabilisées automatiquement" },
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
          href="https://www.myunisoft.fr/demande-demo?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-myunisoft"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6"
        >
          Voir MyUnisoft en action : démo gratuite
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">
          ← Voir toutes les alternatives à MyUnisoft
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
