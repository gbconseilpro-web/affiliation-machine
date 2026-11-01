import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Finom 2026 : test complet du compte pro + facturation européen',
  description: 'Notre avis sur Finom après test : compte pro européen + facturation, cashback sur dépenses, tarifs. La fintech qui paie pour facturer ?',
  alternates: { canonical: 'https://facturationpro.fr/comparatif/finom' },
  openGraph: {
    title: 'Avis Finom 2026 : Test complet',
    description: 'Compte pro européen + facturation avec cashback : notre test complet de Finom, tarifs, avantages et limites.',
    type: 'article',
  },
}

const AFFILIATE_URL = 'https://finom.co/fr/?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=avis-finom'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Finom',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '14', priceCurrency: 'EUR' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.1', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'Finom est un compte pro européen avec facturation intégrée et cashback sur les dépenses professionnelles.',
}

export default function AvisFinom() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span>›</span>
              <Link href="/comparatif" className="hover:text-indigo-600">Comparatif</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium">Avis Finom</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Avis & Test 2026</span>
              <span className="text-xs text-gray-400">Mis à jour : novembre 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Avis Finom 2026 : test complet du compte pro + facturation européen
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Finom est-il le compte pro avec cashback qui vaut vraiment le détour ? Après test en conditions réelles, voici ce qu&apos;on pense vraiment de cette fintech européenne.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-indigo-600">4,1</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4].map(i => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  <span className="text-yellow-200 text-xl">★</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Le choix des entrepreneurs à profil international</p>
                <p className="text-sm text-gray-600">Cashback jusqu&apos;à 3%, IBAN européen, facturation intégrée. Idéal si vous travaillez avec l&apos;international.</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Essayer Finom →
              </a>
            </div>
          </header>

          {/* Points forts / limites */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Cashback jusqu&apos;à 3% sur toutes les dépenses professionnelles</li>
                <li>• IBAN européen (EU) valide dans 20+ pays</li>
                <li>• Factures et devis illimités inclus dans tous les plans</li>
                <li>• Carte virtuelle instantanée dès l&apos;inscription</li>
                <li>• Multi-devises : EUR, USD, GBP et plus</li>
                <li>• Disponible dans 20+ pays européens</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• IBAN européen (BE), pas français, peut poser problème avec certains organismes</li>
                <li>• Moins connu en France que ses concurrents</li>
                <li>• Support en anglais prioritaire</li>
                <li>• Pas de déclaration URSSAF intégrée</li>
              </ul>
            </div>
          </div>

          {/* Tableau des tarifs */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs Finom 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Plan</th>
                    <th className="px-4 py-3 text-center">Prix/mois</th>
                    <th className="px-4 py-3 text-center">Cashback</th>
                    <th className="px-4 py-3 text-center rounded-tr-xl">Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-4 py-3 font-semibold">Solo</td>
                    <td className="px-4 py-3 text-center font-bold">14€</td>
                    <td className="px-4 py-3 text-center">0,5%</td>
                    <td className="px-4 py-3 text-center text-gray-600">1 utilisateur, factures illimitées</td>
                  </tr>
                  <tr className="border-b border-gray-100 bg-indigo-50">
                    <td className="px-4 py-3 font-bold text-indigo-700">Start ⭐ Recommandé</td>
                    <td className="px-4 py-3 text-center font-bold">29€</td>
                    <td className="px-4 py-3 text-center font-bold text-green-700">1,5%</td>
                    <td className="px-4 py-3 text-center text-gray-600">3 utilisateurs, multi-devises, analytics</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Team</td>
                    <td className="px-4 py-3 text-center font-bold">49€</td>
                    <td className="px-4 py-3 text-center font-bold text-green-700">3%</td>
                    <td className="px-4 py-3 text-center text-gray-600">Utilisateurs illimités, API, comptable dédié</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Tarifs HT. Le cashback s&apos;applique sur toutes les dépenses par carte.</p>
          </section>

          {/* Fonctionnalités */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Le cashback : la vraie différence</h3>
            <p className="text-gray-600 mb-4">
              Le cashback Finom est sa fonctionnalité la plus distinctive. Contrairement à un simple programme de fidélité, le cashback s&apos;applique automatiquement sur chaque paiement par carte : abonnements SaaS, publicité en ligne, voyages d&apos;affaires. Pour un entrepreneur qui dépense 3 000€/mois en frais pro, le plan Team rapporte 90€/mois de cashback, soit plus que le coût de l&apos;abonnement.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Facturation intégrée</h3>
            <p className="text-gray-600 mb-4">
              Finom inclut un outil de facturation complet dans tous ses plans : devis, factures, avoirs, relances automatiques. L&apos;interface est propre et les modèles sont professionnels. La synchronisation avec le compte bancaire permet de rapprocher automatiquement les paiements reçus aux factures correspondantes.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Compte pro européen</h3>
            <p className="text-gray-600 mb-4">
              L&apos;IBAN Finom commence par BE (Belgique) mais est valide dans toute l&apos;UE pour les virements SEPA. La carte Mastercard Business est acceptée partout. Point d&apos;attention : certains organismes français exigent un IBAN commençant par FR, vérifiez avant d&apos;ouvrir votre compte.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Multi-devises et international</h3>
            <p className="text-gray-600 mb-6">
              Finom excelle dans les transactions internationales : conversion automatique EUR/USD/GBP aux meilleurs taux interbancaires, facturation en devises étrangères, paiements dans 20+ pays sans frais de change cachés. Idéal pour les freelances avec des clients hors France.
            </p>
          </section>

          {/* Pour qui ? */}
          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Finom : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Freelances européens travaillant avec l&apos;international</li>
                  <li>• E-commerçants avec fournisseurs étrangers</li>
                  <li>• Créateurs de contenu avec grosses dépenses pub (cashback !)</li>
                  <li>• Entrepreneurs actifs dans plusieurs pays UE</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Entrepreneurs ayant besoin d&apos;un IBAN FR obligatoire</li>
                  <li>• Auto-entrepreneurs cherchant une déclaration URSSAF automatisée</li>
                  <li>• PME nécessitant une comptabilité française complète</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparaison */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Finom vs la concurrence</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-indigo-700">Finom</th>
                    <th className="px-4 py-3 text-center">Shine</th>
                    <th className="px-4 py-3 text-center">Freebe</th>
                    <th className="px-4 py-3 text-center">Pennylane</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix mensuel', '14–49€', '7,90€', '9,90€', '29€'],
                    ['Cashback', '✅ jusqu\'à 3%', '❌', '❌', '❌'],
                    ['IBAN français', '❌ (BE)', '✅', '❌', '❌'],
                    ['Facturation', '✅', '✅', '✅', '✅'],
                    ['URSSAF auto', '❌', '❌', '✅', '❌'],
                    ['Multi-devises', '✅', '❌', '❌', '✅'],
                  ].map(([crit, finom, shine, freebe, penny]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-indigo-700">{finom}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{shine}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{freebe}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{penny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Verdict */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Notre verdict</h2>
            <p className="text-gray-600 mb-4">
              Finom est une fintech solide et innovante, idéale pour les entrepreneurs à profil international. Son cashback est unique sur le marché français et peut représenter un gain réel pour les entrepreneurs avec des dépenses professionnelles élevées.
            </p>
            <p className="text-gray-600 mb-4">
              La limite principale reste l&apos;IBAN européen : si vous avez des clients ou partenaires en France qui exigent un IBAN FR, <Link href="/comparatif/shine" className="text-indigo-600 hover:underline">Shine</Link> sera plus adapté. Si vous cherchez la facturation pure pour auto-entrepreneur, <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe</Link> reste notre n°1.
            </p>
            <p className="text-gray-600">
              Pour un freelance qui dépense 2 000€+/mois en frais pro et travaille avec l&apos;international, Finom se rembourse tout seul via le cashback.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Essayez Finom : compte pro + cashback</h3>
            <p className="text-indigo-200 mb-5">Ouvrez votre compte en quelques minutes. Facturation incluse dès le premier plan.</p>
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Ouvrir mon compte Finom →
            </a>
            <p className="text-xs text-indigo-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.</p>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur Finom</h2>
            <div className="space-y-3">
              {[
                {
                  q: 'Finom est-il agréé en France ?',
                  a: 'Finom est agréé EMI (établissement de monnaie électronique) par la Banque nationale de Belgique. Cet agrément est reconnu dans toute l\'Union européenne, y compris en France, conformément à la directive PSD2. Finom opère donc légalement en France.',
                },
                {
                  q: 'Le cashback Finom est-il imposable ?',
                  a: 'Oui, le cashback sur les dépenses professionnelles constitue un gain à déclarer comme revenu imposable. Le montant est généralement faible, mais consultez votre expert-comptable pour un traitement fiscal correct selon votre statut.',
                },
                {
                  q: 'Peut-on ouvrir un compte Finom sans société ?',
                  a: 'Non, Finom est réservé aux entrepreneurs avec une structure juridique : auto-entrepreneurs, SASU, EURL, SAS, SARL, etc. Vous ne pouvez pas ouvrir un compte Finom en tant que particulier.',
                },
                {
                  q: "L'IBAN Finom est-il accepté partout en France ?",
                  a: "L'IBAN Finom commence par BE (Belgique). La grande majorité des services l'acceptent, car tous les IBAN SEPA sont égaux en droit. Cependant, certains organismes publics français ou anciens systèmes peuvent exiger un IBAN commençant par FR. Vérifiez auprès de vos partenaires principaux avant d'ouvrir.",
                },
              ].map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-indigo-600 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Maillage interne */}
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { href: '/comparatif', label: '← Retour au comparatif complet' },
              { href: '/comparatif/shine', label: 'Avis Shine 2026 →' },
              { href: '/comparatif/pennylane', label: 'Avis Pennylane 2026 →' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="text-center bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-xl p-4 text-sm font-semibold text-gray-700 hover:text-indigo-700 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
