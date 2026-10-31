import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer Freebe gratuitement — Logiciel de facturation n°1 pour freelances',
  description: 'Testez Freebe gratuitement : 3 factures/mois offertes, sans CB. Le logiciel de facturation préféré de 50 000+ freelances et auto-entrepreneurs français.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Sophie M.', job: 'Graphiste freelance', text: 'Avant Freebe, je perdais 3h à faire mes factures chaque semaine. Maintenant c\'est 20 minutes. Les relances automatiques m\'ont récupéré 2 800€ d\'impayés.', stars: 5 },
  { name: 'Thomas R.', job: 'Développeur web', text: 'La synchro bancaire m\'évite de tout ressaisir à la main. Et le support répond en moins d\'1h — du jamais vu dans un SaaS à ce prix.', stars: 5 },
  { name: 'Camille D.', job: 'Consultante RH', text: 'La déclaration URSSAF pré-remplie, c\'est 2h de moins par trimestre. J\'aurais dû changer plus tôt — ça m\'a coûté des heures de ne pas le faire.', stars: 5 },
]

export default function GoFreebePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col">
      {/* Header minimaliste */}
      <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
        <Link href="/" className="text-indigo-600 font-bold text-lg">
          FacturationPro
        </Link>
        <span className="text-sm text-gray-500">Partenaire officiel Freebe</span>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Badge social proof */}
        <div className="bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
          <span>🔥</span>
          <span>50 283 freelances ont déjà choisi Freebe ce mois-ci</span>
        </div>

        {/* Logo + titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <svg viewBox="0 0 120 36" width="140" height="42" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Freebe">
              <rect x="0" y="2" width="30" height="30" rx="8" fill="#1E40AF"/>
              <text x="8" y="22" fontFamily="Arial" fontWeight="800" fontSize="18" fill="white">f</text>
              <text x="36" y="24" fontFamily="Arial" fontWeight="700" fontSize="19" fill="#1E40AF">reebe</text>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Fini les factures qui traînent —<br/>
            <span className="text-indigo-600">Freebe encaisse pour toi</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Devis, factures, relances automatiques, synchro bancaire et déclaration URSSAF. Tout ce qu&apos;un freelance déteste faire — automatisé en quelques clics.
          </p>
        </div>

        {/* Étoiles */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex" aria-label="Note 4,8/5">
            {'★★★★★'.split('').map((s, i) => (
              <span key={i} className="text-yellow-400 text-2xl">{s}</span>
            ))}
          </div>
          <span className="text-gray-700 font-semibold">4,8/5</span>
          <span className="text-gray-500 text-sm">(2 100+ avis vérifiés)</span>
        </div>

        {/* CTA principal */}
        <a
          href="https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=go-freebe&p=https%3A%2F%2Fwww.freebe.me%2F"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 mb-4"
        >
          Envoyer ma 1ère facture en 3 minutes
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        <p className="text-sm text-gray-500 mb-10">
          ✅ Tu testes sans risquer un centime · ✅ Sans CB · ✅ Support humain en français sous 1h
        </p>

        {/* Avantages clés */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
          {[
            { icon: '⏱️', title: '3 min pour facturer', desc: '3 factures/mois gratuites pour tester, sans engagement ni CB' },
            { icon: '🏦', title: 'Tes banques connectées', desc: 'Les transactions arrivent seules — tu ne ressaisis rien à la main' },
            { icon: '📊', title: 'URSSAF pré-remplie', desc: '2h économisées par trimestre — tu valides, Freebe déclare' },
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
                <div className="flex mb-2" aria-label={`Note ${r.stars}/5`}>
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
          href="https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=go-freebe-bottom&p=https%3A%2F%2Fwww.freebe.me%2F"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6"
        >
          Je veux récupérer mes heures perdues — c&apos;est gratuit
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>

        {/* Retour comparatif */}
        <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">
          ← Voir toutes les alternatives à Freebe
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
