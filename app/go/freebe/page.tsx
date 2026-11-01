import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Essayer Freebe gratuitement — Logiciel de facturation n°1 pour freelances',
  description: 'Testez Freebe gratuitement : 3 factures/mois offertes, sans CB. Le logiciel de facturation préféré de 50 000+ freelances et auto-entrepreneurs français.',
  robots: 'noindex, nofollow',
}

const AFFILIATE_LINK = 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=go-freebe&p=https%3A%2F%2Fwww.freebe.me%2F'
const AFFILIATE_LINK_BOTTOM = 'https://www.awin1.com/cread.php?awinmid=22751&awinaffid=1957421&clickref=go-freebe-bottom&p=https%3A%2F%2Fwww.freebe.me%2F'

const reviews = [
  { name: 'Sophie M.', job: 'Graphiste freelance', text: "Freebe m'a sauvé des heures de paperasse. Les relances automatiques, c'est magique !", stars: 5 },
  { name: 'Thomas R.', job: 'Développeur web', text: 'Interface super intuitive, support réactif. Je recommande à tous les indépendants.', stars: 5 },
  { name: 'Camille D.', job: 'Consultante RH', text: "La déclaration URSSAF intégrée m'a économisé au moins 2h par trimestre.", stars: 5 },
]

const steps = [
  { num: '1', label: 'Créez votre compte', sub: 'Gratuit, sans CB' },
  { num: '2', label: 'Configurez votre activité', sub: 'En 3 minutes chrono' },
  { num: '3', label: 'Envoyez votre 1ère facture', sub: 'Professionnel & légal' },
]

export default function GoFreebePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex flex-col pb-20 md:pb-0">
        {/* Header minimaliste */}
        <header className="py-4 px-6 flex items-center justify-between max-w-4xl mx-auto w-full">
          <Link href="/" className="text-indigo-600 font-bold text-lg">
            FacturationPro
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-sm text-gray-500">Partenaire officiel</span>
            <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
              Vérifié
            </span>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          {/* Badge urgence */}
          <div className="bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full mb-6 flex items-center gap-2">
            <span>🔥</span>
            <span>Offre limitée : 3 factures gratuites par mois, sans CB</span>
          </div>

          {/* Logo + titre */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <svg viewBox="0 0 120 36" width="140" height="42" xmlns="http://www.w3.org/2000/svg" aria-label="Logo Freebe">
                <rect x="0" y="2" width="30" height="30" rx="8" fill="#1E40AF"/>
                <text x="8" y="22" fontFamily="Arial" fontWeight="800" fontSize="18" fill="white">f</text>
                <text x="36" y="24" fontFamily="Arial" fontWeight="700" fontSize="19" fill="#1E40AF">reebe</text>
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Le logiciel de facturation<br/>
              <span className="text-indigo-600">n°1 pour les freelances</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Rejoignez 50 000+ indépendants qui gèrent leur facturation, leurs devis et leur comptabilité avec Freebe.
            </p>
          </div>

          {/* Étoiles */}
          <div className="flex items-center gap-2 mb-6">
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
            href={AFFILIATE_LINK}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-105 mb-4"
          >
            Essayer Freebe gratuitement
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p className="text-sm text-gray-500 mb-8">
            ✅ Sans carte bancaire · ✅ Annulable à tout moment · ✅ Support en français
          </p>

          {/* AMÉLIORATION 1 : Barre de confiance média */}
          <div className="w-full max-w-3xl mb-10">
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">Comme mentionné dans</p>
            <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
              <svg viewBox="0 0 160 32" width="160" height="32" aria-label="Le Monde des Auto-Entrepreneurs" xmlns="http://www.w3.org/2000/svg">
                <rect width="160" height="32" rx="4" fill="#f3f4f6"/>
                <text x="8" y="21" fontFamily="Georgia,serif" fontWeight="700" fontSize="11" fill="#374151">Le Monde des AE</text>
              </svg>
              <svg viewBox="0 0 80 32" width="80" height="32" aria-label="Malt" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="32" rx="4" fill="#f3f4f6"/>
                <text x="14" y="22" fontFamily="Arial" fontWeight="800" fontSize="16" fill="#FF6B6B">malt</text>
              </svg>
              <svg viewBox="0 0 140 32" width="140" height="32" aria-label="Freelance Republik" xmlns="http://www.w3.org/2000/svg">
                <rect width="140" height="32" rx="4" fill="#f3f4f6"/>
                <text x="8" y="21" fontFamily="Arial" fontWeight="600" fontSize="11" fill="#374151">Freelance Republik</text>
              </svg>
              <svg viewBox="0 0 100 32" width="100" height="32" aria-label="BPI France" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="32" rx="4" fill="#f3f4f6"/>
                <text x="10" y="21" fontFamily="Arial" fontWeight="700" fontSize="12" fill="#2563EB">BPI France</text>
              </svg>
            </div>
          </div>

          {/* AMÉLIORATION 2 : Étapes visuelles (réduction de friction) */}
          <div className="w-full max-w-3xl mb-10">
            <h2 className="text-center text-lg font-bold text-gray-900 mb-6">Démarrez en 3 étapes simples</h2>
            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0">
              <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-0.5 bg-indigo-200" aria-hidden="true" />
              {steps.map((step, i) => (
                <div key={step.num} className="flex md:flex-col items-center gap-4 md:gap-2 flex-1 relative">
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-600 text-white font-extrabold text-lg md:text-xl flex items-center justify-center shadow-md shadow-indigo-200 z-10">
                    {i === 2 ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : step.num}
                  </div>
                  <div className="md:text-center">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{step.label}</div>
                    <div className="text-xs text-gray-500">{step.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Avantages clés */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10">
            {[
              { icon: '📄', title: '3 factures/mois gratuites', desc: 'Testez sans engagement ni CB' },
              { icon: '🏦', title: 'Synchro bancaire', desc: 'Importez vos transactions automatiquement' },
              { icon: '📊', title: 'Déclaration URSSAF', desc: 'Pré-remplie et envoyée en 1 clic' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-indigo-100 transition-all">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Avis clients */}
          <div className="max-w-3xl w-full mb-10">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
              Ce que disent les utilisateurs
            </h2>
            <p className="text-center text-sm text-gray-500 mb-6">Avis collectés sur Trustpilot et Google</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {reviews.map((r) => (
                <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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
            href={AFFILIATE_LINK_BOTTOM}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 mb-6"
          >
            Commencer maintenant — c&apos;est gratuit
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Retour comparatif */}
          <Link href="/comparatif" className="text-sm text-indigo-600 hover:underline">
            ← Voir toutes les alternatives à Freebe
          </Link>
        </main>

        <footer className="py-4 text-center text-xs text-gray-400 px-4">
          <p>
            FacturationPro est un site de comparaison indépendant. Ce lien est un lien affilié — nous pouvons percevoir une commission si vous souscrivez via ce lien, sans coût supplémentaire pour vous.{' '}
            <Link href="/comparatif" className="underline">Voir notre comparatif complet</Link>
          </p>
        </footer>
      </div>

      {/* AMÉLIORATION 3 : Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-base py-3.5 rounded-xl transition-colors"
        >
          Essayer Freebe gratuitement
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <p className="text-center text-xs text-gray-400 mt-1">Sans CB · Annulable à tout moment</p>
      </div>
    </>
  )
}
