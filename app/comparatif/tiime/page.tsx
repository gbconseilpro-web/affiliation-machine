import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Tiime 2026 : test complet du logiciel de facturation gratuit',
  description: 'Notre avis sur Tiime après test : fonctionnalités du plan gratuit, tarifs, avantages. Le meilleur logiciel de facturation gratuit pour indépendants ?',
  alternates: { canonical: 'https://facturationpro.com/comparatif/tiime' },
  openGraph: {
    title: 'Avis Tiime 2026 : Test complet',
    description: 'Test réel de Tiime : plan gratuit, fonctionnalités, tarifs, avantages et inconvénients du logiciel de facturation pour indépendants.',
    type: 'article',
  },
}

const AFFILIATE_URL = 'https://www.tiime.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=avis-tiime'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Tiime',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.3', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'Tiime est le meilleur logiciel de facturation gratuit pour indépendants en 2026 grâce à son plan de base très généreux.',
}

export default function AvisTiime() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="bg-white min-h-screen">
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span>›</span>
              <Link href="/comparatif" className="hover:text-indigo-600">Comparatif</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium">Avis Tiime</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Avis & Test 2026</span>
              <span className="text-xs text-gray-400">Mis à jour : novembre 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Avis Tiime 2026 : notre test complet du logiciel de facturation gratuit
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Tiime est-il vraiment le meilleur logiciel de facturation gratuit pour indépendants ? Après 30 jours de test, voici notre verdict complet sur la version gratuite et les plans payants.
            </p>
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-emerald-600">4,3</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={`text-xl ${i <= 4 ? 'text-yellow-400' : 'text-yellow-200'}`}>★</span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Le meilleur plan gratuit du marché</p>
                <p className="text-sm text-gray-600">Factures et devis illimités en version gratuite, synchronisation bancaire incluse, sans CB requise.</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Essayer Tiime gratuitement →
              </a>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Plan gratuit très généreux : factures et devis illimités</li>
                <li>• Interface épurée et rapide, prise en main immédiate</li>
                <li>• Synchronisation bancaire incluse dans le gratuit</li>
                <li>• Export comptable (FEC) pour l'expert-comptable</li>
                <li>• Templates modernes personnalisables</li>
                <li>• Aucune carte bancaire requise pour démarrer</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pas de déclaration URSSAF intégrée (contrairement à Freebe)</li>
                <li>• Application mobile moins complète que la version web</li>
                <li>• Support client limité en version gratuite (email uniquement)</li>
                <li>• Relances automatiques moins avancées que Freebe</li>
              </ul>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs Tiime 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Plan</th>
                    <th className="px-4 py-3 text-center">Prix/mois</th>
                    <th className="px-4 py-3 text-center">Factures</th>
                    <th className="px-4 py-3 text-center rounded-tr-xl">Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-emerald-50">
                    <td className="px-4 py-3 font-bold text-emerald-700">Gratuit ⭐</td>
                    <td className="px-4 py-3 text-center font-bold">0€</td>
                    <td className="px-4 py-3 text-center">Illimité</td>
                    <td className="px-4 py-3 text-center text-gray-600">Devis, factures, synchro bancaire</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Avancé</td>
                    <td className="px-4 py-3 text-center font-bold">9€</td>
                    <td className="px-4 py-3 text-center">Illimité</td>
                    <td className="px-4 py-3 text-center text-gray-600">Relances, rapports, multi-devises</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Tarifs HT. Plan gratuit sans limite de durée.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Plan gratuit : vraiment généreux</h3>
            <p className="text-gray-600 mb-4">
              La grande force de Tiime, c'est son plan gratuit. Contrairement à la plupart des concurrents qui limitent à 3 ou 5 factures par mois, Tiime propose des factures et devis en nombre illimité sans frais. C'est idéal pour démarrer son activité sans engager de budget.
            </p>
            <p className="text-gray-600 mb-6">
              La synchronisation bancaire est également incluse dans le plan gratuit, ce qui est rare sur le marché. Vous pouvez connecter votre compte bancaire et rapprocher automatiquement vos paiements avec vos factures.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Interface et prise en main</h3>
            <p className="text-gray-600 mb-6">
              L'interface de Tiime est l'une des plus épurées du marché. En moins de 5 minutes, vous créez votre première facture conforme aux exigences légales françaises. Les templates sont modernes et professionnels, largement supérieurs aux logiciels gratuits concurrents.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Export comptable</h3>
            <p className="text-gray-600 mb-6">
              Tiime propose un export FEC (Fichier d'Écritures Comptables) compatible avec tous les logiciels d'expertise comptable. Si vous travaillez avec un expert-comptable, c'est un vrai gain de temps pour votre clôture annuelle.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Ce qui manque vs Freebe</h3>
            <p className="text-gray-600 mb-6">
              Tiime n'intègre pas de module de déclaration URSSAF, un point fort de <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe</Link>. Les relances automatiques sont également moins poussées. Si vous êtes auto-entrepreneur et souhaitez gérer vos cotisations directement depuis votre logiciel, Freebe reste le choix numéro un.
            </p>
          </section>

          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tiime : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Indépendants qui démarrent leur activité</li>
                  <li>• Freelances avec budget serré</li>
                  <li>• Entrepreneurs cherchant une solution gratuite durable</li>
                  <li>• Professions libérales avec expert-comptable</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Auto-entrepreneurs souhaitant gérer l'URSSAF depuis l'outil</li>
                  <li>• Profils cherchant des relances automatiques avancées</li>
                  <li>• Utilisateurs très mobiles (app mobile moins complète)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tiime vs la concurrence</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-emerald-700">Tiime</th>
                    <th className="px-4 py-3 text-center">Freebe</th>
                    <th className="px-4 py-3 text-center">Indy</th>
                    <th className="px-4 py-3 text-center">Pennylane</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Plan gratuit', '✅ Illimité', '❌ 3 factures', '❌ Non', '❌ Non'],
                    ['Prix payant', '9€', '9,90€', '7€', '29€'],
                    ['URSSAF intégrée', '❌', '✅', '✅', '❌'],
                    ['Synchro bancaire', '✅ Gratuit', '✅', '✅', '✅'],
                    ['Export FEC', '✅', '❌', '✅', '✅'],
                    ['App mobile', '⚠️ Partielle', '✅', '❌', '✅'],
                  ].map(([crit, tiime, freebe, indy, penny]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-emerald-700">{tiime}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{freebe}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{indy}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{penny}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Notre verdict</h2>
            <p className="text-gray-600 mb-4">
              Tiime est notre <strong>recommandation n°1 pour les indépendants qui veulent démarrer sans frais</strong>. Son plan gratuit avec factures illimitées et synchronisation bancaire est sans équivalent sur le marché français en 2026.
            </p>
            <p className="text-gray-600">
              En revanche, si vous êtes auto-entrepreneur et que vous voulez gérer vos déclarations URSSAF directement depuis votre outil, ou si vous cherchez des relances automatiques avancées, <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe à 9,90€/mois</Link> reste notre recommandation principale.
            </p>
          </section>

          <div className="bg-emerald-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Essayez Tiime gratuitement, sans CB</h3>
            <p className="text-emerald-200 mb-5">Plan de base illimité, sans engagement, sans carte bancaire.</p>
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Créer mon compte Tiime gratuit →
            </a>
            <p className="text-xs text-emerald-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez au plan payant, sans surcoût pour vous.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur Tiime</h2>
            <div className="space-y-3">
              {[
                { q: 'Le plan gratuit Tiime est-il vraiment illimité ?', a: 'Oui. Tiime propose un plan gratuit sans limite de durée ni de nombre de factures. Vous pouvez créer autant de devis et factures que vous le souhaitez, et connecter votre compte bancaire, sans jamais payer. Le plan avancé à 9€/mois ajoute les relances automatiques, les rapports avancés et le support prioritaire.' },
                { q: 'Tiime est-il conforme à la loi française ?', a: 'Oui. Tiime génère des factures conformes aux exigences légales françaises avec toutes les mentions obligatoires, une numérotation séquentielle, et respecte la norme NF Z42-026 pour les auto-entrepreneurs. Le logiciel est mis à jour régulièrement.' },
                { q: 'Peut-on utiliser Tiime avec un expert-comptable ?', a: 'Absolument. Tiime propose un export FEC (Fichier d\'Écritures Comptables) compatible avec tous les logiciels d\'expertise comptable (Sage, Cegid, ACD, etc.). C\'est l\'une de ses forces par rapport à d\'autres logiciels de facturation du même prix.' },
                { q: 'Quelle différence entre Tiime et Freebe ?', a: 'La différence principale : Tiime est gratuit mais sans module URSSAF, Freebe est payant (9,90€/mois) mais intègre la déclaration URSSAF pour les auto-entrepreneurs et des relances automatiques plus avancées. Si vous êtes auto-entrepreneur et gérez vos cotisations, Freebe est plus adapté. Si vous cherchez un outil gratuit durable, Tiime est le choix n°1.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-emerald-600 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { href: '/comparatif', label: '← Retour au comparatif complet' },
              { href: '/comparatif/freebe', label: 'Avis Freebe 2026 →' },
              { href: '/comparatif/indy', label: 'Avis Indy 2026 →' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="text-center bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-200 rounded-xl p-4 text-sm font-semibold text-gray-700 hover:text-emerald-700 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
