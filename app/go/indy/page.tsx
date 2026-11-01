import type { Metadata } from 'next'

export const dynamic = 'force-static'

const AFFILIATE_LINK = 'https://www.indy.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-indy'
const AFFILIATE_LINK_CTA2 = 'https://www.indy.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=go-indy-cta2'

export const metadata: Metadata = {
  title: 'Essayer Indy gratuitement : Comptabilité simplifiée pour indépendants',
  description: 'Indy : déclarations fiscales automatisées, catégorisation bancaire, idéal micro-entrepreneurs. 200 000+ indépendants font confiance à Indy.',
  robots: 'noindex, nofollow',
}

const reviews = [
  { name: 'Laura M.', job: 'Auto-entrepreneur', text: 'Indy m\'a aidée à faire ma première déclaration de revenus sans stresser. Tout est expliqué pas à pas.', stars: 5 },
  { name: 'Kevin D.', job: 'Freelance IT', text: 'La catégorisation automatique est bluffante. Je passe 10 minutes par mois sur ma compta au lieu de 3 heures.', stars: 5 },
  { name: 'Nadia T.', job: 'Coach certifiée', text: 'Parfait pour les micro-entrepreneurs. Le tarif est imbattable et les fonctionnalités sont au rendez-vous.', stars: 4 },
]

const steps = [
  { num: '1', title: 'Créez votre compte', desc: 'Inscription en 2 minutes, aucune carte requise. Accès immédiat à la plateforme.' },
  { num: '2', title: 'Connectez votre banque', desc: 'Synchronisation sécurisée (DSP2) pour importer et catégoriser toutes vos transactions auto.' },
  { num: '3', title: 'Pilotez votre compta', desc: 'Déclarations TVA, liasse fiscale, bilan : tout est généré et guidé étape par étape.' },
]

export default function GoIndy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Trust bar */}
      <div className="bg-indigo-50 border-b border-indigo-100 py-2 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-4 text-xs text-indigo-700 font-medium">
          <span>🏆 Classé n°1 sur Trustpilot</span>
          <span className="hidden sm:inline">•</span>
          <span>✅ Agréé par l'Ordre des Experts-Comptables</span>
          <span className="hidden sm:inline">•</span>
          <span>🔒 Données hébergées en France</span>
        </div>
      </div>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-10 w-full">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-violet-100 text-violet-800 text-sm font-semibold px-4 py-1.5 rounded-full">
            🚀 Essai gratuit sans engagement
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            La comptabilité pensée pour<br/>
            <span className="text-indigo-600">les indépendants français</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Déclarations fiscales, TVA, bilan : Indy automatise votre comptabilité de A à Z. Rejoignez 200 000+ freelances qui ont simplifié leur gestion.
          </p>
        </div>

        {/* Stars */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex">
            {[0,1,2,3,4].map((i) => (
              <span key={i} className={`text-xl ${i < 4 ? 'text-yellow-400' : 'text-yellow-200'}`}>★</span>
            ))}
          </div>
          <span className="text-gray-800 font-semibold">4,4/5</span>
          <span className="text-gray-500 text-sm">sur Trustpilot et Google</span>
        </div>

        {/* CTA principal */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold px-10 py-5 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-105"
          >
            Essayer Indy gratuitement
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-sm text-gray-500">✅ Sans carte bancaire · ✅ Accès immédiat · ✅ Support humain inclus</p>
        </div>

        {/* Étapes visuelles */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="bg-indigo-50 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '📋', title: 'Déclarations fiscales guidées', desc: 'IS, TVA, BNC/BIC : tout expliqué en langage simple, étape par étape.' },
            { icon: '🏷️', title: 'Catégorisation automatique', desc: 'Vos transactions classifiées en temps réel, sans saisie manuelle.' },
            { icon: '🛵', title: 'Taillé pour les micro-entrepreneurs', desc: 'Conçu spécifiquement pour le régime micro et la déclaration de CA.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
              <div className="text-sm text-gray-500">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Avis */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Ce que disent les utilisateurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <div className="flex mb-2">{Array.from({length: r.stars}).map((_,i) => <span key={i} className="text-yellow-400">★</span>)}</div>
                <p className="text-sm text-gray-600 mb-3 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                <div className="text-xs text-gray-500">{r.job}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Prix */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 max-w-lg mx-auto text-center mb-8">
          <div className="text-2xl font-bold text-gray-900 mb-1">À partir de 7€/mois</div>
          <div className="text-sm text-gray-600">Le tarif le plus accessible du marché pour une comptabilité complète et légale.</div>
        </div>

        {/* CTA secondaire orange */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <a
            href={AFFILIATE_LINK_CTA2}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Commencer avec Indy maintenant
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="/comparatif" className="text-sm text-indigo-600 hover:underline">← Voir toutes les alternatives à Indy</a>
        </div>

        {/* Disclaimer affilié */}
        <p className="text-xs text-gray-400 text-center max-w-lg mx-auto">
          FacturationPro est un comparatif indépendant. Ce lien est un lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.{' '}
          <a href="/comparatif" className="underline">Voir notre comparatif complet</a>.
        </p>
      </main>

      {/* Sticky CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl px-4 py-3">
        <a
          href={AFFILIATE_LINK}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl w-full text-base"
        >
          Essayer Indy gratuitement
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>

      <div className="h-20 md:h-0" /> {/* Spacer for mobile sticky */}
    </div>
  )
}
