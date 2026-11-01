import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis Shine 2026 : test complet du compte pro + facturation pour freelances',
  description: 'Notre avis sur Shine après test : compte bancaire pro + facturation intégrés, tarifs, avantages. Le meilleur combo pour freelances ?',
  alternates: { canonical: 'https://facturationpro.com/comparatif/shine' },
  openGraph: {
    title: 'Avis Shine 2026 : Test complet',
    description: 'Test réel de Shine : compte pro + facturation intégrés, tarifs, avantages et inconvénients pour les freelances.',
    type: 'article',
  },
}

const AFFILIATE_URL = 'https://www.shine.fr/inscription?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=avis-shine'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'Shine',
    applicationCategory: 'BusinessApplication',
    offers: { '@type': 'Offer', price: '7.90', priceCurrency: 'EUR' },
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.2', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'Shine est le meilleur combo compte professionnel + facturation pour les freelances français en 2026.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Shine est-il une vraie banque ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shine est un etablissement de paiement agree par l\'ACPR (Autorite de controle prudentiel), pas une banque classique. Votre argent est protege et segregue, mais Shine n\'est pas couverte par le fonds de garantie des depots bancaires (FGDR) comme les banques traditionnelles. Pour les montants importants, une banque traditionnelle reste recommandee en complement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Shine propose-t-il un IBAN francais ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, Shine fournit un IBAN FR (francais) avec un BIC, ce qui facilite les relations avec certains clients ou fournisseurs qui refusent les IBAN etrangers. C\'est un avantage par rapport a certaines neobanques europeennes qui donnent des IBAN lituaniens ou irlandais.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelle est la difference entre Shine et Finom ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les deux sont des neobanques pro avec IBAN FR et facturation integree. Shine est historiquement positionnee sur les freelances francais avec un fort ecosysteme de partenaires. Finom est plus recente et propose un cashback attractif sur les depenses avec sa carte Mastercard. Shine a un plan d\'entree a 7,90 EUR/mois contre 0 EUR pour Finom (plan gratuit limité).',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://facturationpro.com' },
    { '@type': 'ListItem', position: 2, name: 'Comparatifs', item: 'https://facturationpro.com/comparatif' },
    { '@type': 'ListItem', position: 3, name: 'Avis Shine', item: 'https://facturationpro.com/comparatif/shine' },
  ],
}

export default function AvisShine() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="bg-white min-h-screen">
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span>›</span>
              <Link href="/comparatif" className="hover:text-indigo-600">Comparatif</Link>
              <span>›</span>
              <span className="text-gray-800 font-medium">Avis Shine</span>
            </nav>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Avis & Test 2026</span>
              <span className="text-xs text-gray-400">Mis à jour : novembre 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Avis Shine 2026 : notre test complet du compte pro + facturation
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Shine, ce n'est pas juste un logiciel de facturation : c'est un compte bancaire professionnel avec facturation intégrée. Après 30 jours de test, voici si ce combo unique vaut vraiment la peine.
            </p>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-amber-600">4,2</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4,5].map(i => (
                    <span key={i} className={`text-xl ${i <= 4 ? 'text-yellow-400' : 'text-yellow-200'}`}>★</span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">Le combo unique compte pro + facturation</p>
                <p className="text-sm text-gray-600">Plus de 100 000 freelances ont choisi Shine. IBAN français immédiat, carte Mastercard incluse, facturation dans la même app.</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Ouvrir mon compte Shine →
              </a>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Combo unique : compte pro + facturation dans une seule app</li>
                <li>• IBAN français immédiat (ouverture en 10 minutes)</li>
                <li>• Carte Mastercard incluse dans tous les plans</li>
                <li>• Plus de 100 000 freelances et indépendants utilisateurs</li>
                <li>• Application mobile 4,8/5 sur App Store et Google Play</li>
                <li>• Support client français disponible 7j/7</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pas un logiciel de comptabilité complet (pas de liasse fiscale)</li>
                <li>• Fonctionnalités de facturation moins avancées que Freebe</li>
                <li>• Moins intéressant si vous avez déjà un compte pro ailleurs</li>
                <li>• Pas de déclaration URSSAF intégrée</li>
              </ul>
            </div>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs Shine 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left rounded-tl-xl">Plan</th>
                    <th className="px-4 py-3 text-center">Prix/mois</th>
                    <th className="px-4 py-3 text-center">Carte</th>
                    <th className="px-4 py-3 text-center rounded-tr-xl">Inclus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 bg-amber-50">
                    <td className="px-4 py-3 font-bold text-amber-700">Shine Start ⭐ Recommandé</td>
                    <td className="px-4 py-3 text-center font-bold">7,90€</td>
                    <td className="px-4 py-3 text-center">Mastercard</td>
                    <td className="px-4 py-3 text-center text-gray-600">Compte pro + facturation + IBAN FR</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">Shine Basic</td>
                    <td className="px-4 py-3 text-center font-bold">11,90€</td>
                    <td className="px-4 py-3 text-center">Mastercard Gold</td>
                    <td className="px-4 py-3 text-center text-gray-600">Start + assurances, accès comptable</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">* Tarifs HT. Premier mois offert.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Le compte professionnel</h3>
            <p className="text-gray-600 mb-4">
              La grande originalité de Shine : c'est avant tout une néobanque professionnelle. L'ouverture de compte prend moins de 10 minutes (100% en ligne), vous obtenez un IBAN français immédiatement, et une carte Mastercard est incluse. Avec plus de 100 000 clients, c'est la référence chez les freelances français.
            </p>
            <p className="text-gray-600 mb-6">
              L'application mobile est particulièrement réussie (4,8/5 sur l'App Store), ce qui est rare pour un outil qui fait à la fois banque et facturation.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. La facturation intégrée</h3>
            <p className="text-gray-600 mb-6">
              La facturation dans Shine est fonctionnelle mais moins avancée que <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe</Link>. Vous créez des devis et factures conformes à la loi française, suivez vos paiements, et envoyez des relances manuelles. Ce qui manque : les relances automatiques avancées et le portail client dédié.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. La proposition unique de valeur</h3>
            <p className="text-gray-600 mb-6">
              L'argument numéro un de Shine : tout au même endroit. Vos encaissements arrivent directement sur votre compte Shine, sont rapprochés automatiquement avec vos factures, et vous avez une vue complète de votre trésorerie en temps réel. Plus besoin de jongler entre votre banque et un logiciel de facturation séparé.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Accès expert-comptable</h3>
            <p className="text-gray-600 mb-6">
              Le plan Basic inclut un accès pour votre expert-comptable, qui peut consulter vos transactions et exporter vos données directement depuis Shine. Une fonctionnalité utile si vous travaillez avec un comptable externe.
            </p>
          </section>

          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Shine : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Freelances qui cherchent un compte pro français</li>
                  <li>• Indépendants qui veulent tout centraliser dans une app</li>
                  <li>• Auto-entrepreneurs démarrant leur activité</li>
                  <li>• Créatifs, développeurs, consultants solos</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Indépendants ayant déjà un compte pro satisfaisant</li>
                  <li>• Profils cherchant des relances automatiques avancées</li>
                  <li>• Entreprises avec salariés (pas de paye)</li>
                  <li>• Auto-entrepreneurs voulant gérer l'URSSAF depuis l'outil</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Shine vs la concurrence</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-amber-700">Shine</th>
                    <th className="px-4 py-3 text-center">Freebe</th>
                    <th className="px-4 py-3 text-center">Qonto</th>
                    <th className="px-4 py-3 text-center">Pennylane</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Prix mensuel', '7,90€', '9,90€', '9€', '29€'],
                    ['Compte bancaire', '✅', '❌', '✅', '❌'],
                    ['IBAN français', '✅', '❌', '✅', '❌'],
                    ['Facturation', '✅ Basique', '✅ Avancée', '✅ Basique', '✅ Avancée'],
                    ['URSSAF', '❌', '✅', '❌', '❌'],
                    ['App mobile', '✅ 4,8/5', '✅', '✅', '✅'],
                  ].map(([crit, shine, freebe, qonto, penny]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-amber-700">{shine}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{freebe}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{qonto}</td>
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
              Shine occupe une <strong>position unique sur le marché</strong> : c'est la seule solution qui combine un vrai compte bancaire professionnel français avec un outil de facturation dans une seule application. Pour les freelances qui démarrent et cherchent à tout simplifier, c'est une proposition très convaincante à 7,90€/mois.
            </p>
            <p className="text-gray-600">
              En revanche, si vous avez déjà un compte pro et cherchez uniquement un logiciel de facturation avancé (relances automatiques, URSSAF, portail client), <Link href="/comparatif/freebe" className="text-indigo-600 hover:underline">Freebe</Link> reste notre recommandation principale.
            </p>
          </section>

          <div className="bg-amber-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Ouvrez votre compte Shine, 1 mois offert</h3>
            <p className="text-amber-200 mb-5">IBAN français en 10 minutes. Carte Mastercard incluse.</p>
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Démarrer avec Shine →
            </a>
            <p className="text-xs text-amber-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.</p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur Shine</h2>
            <div className="space-y-3">
              {[
                { q: 'Shine est-il une vraie banque ?', a: 'Shine est un établissement de paiement agréé par l\'ACPR (Autorité de Contrôle Prudentiel et de Résolution), adossé à Swan. Vos fonds sont cantonnés chez un établissement de crédit partenaire et garantis jusqu\'à 100 000€ par le Fonds de Garantie des Dépôts et de Résolution (FGDR).' },
                { q: 'Peut-on recevoir des virements clients sur Shine ?', a: 'Oui. Vous recevez un IBAN français (commençant par FR76) que vous communiquez à vos clients pour les virements. Vous pouvez également accepter les paiements par carte via des liens de paiement générés dans l\'application.' },
                { q: 'Shine remplace-t-il un logiciel de facturation dédié ?', a: 'Shine propose une facturation fonctionnelle (devis, factures conformes, suivi des paiements) mais moins avancée que des outils dédiés comme Freebe. Si votre activité génère peu de factures et que vous cherchez surtout à simplifier votre gestion, Shine suffit. Pour des relances automatiques avancées et une gestion URSSAF, Freebe est plus adapté.' },
                { q: 'Comment Shine se compare à Qonto ?', a: 'Shine et Qonto sont tous deux des néobanques pro françaises. Shine est plus orienté freelances/indépendants (moins cher, interface plus simple), tandis que Qonto vise davantage les TPE/PME avec des fonctionnalités de gestion d\'équipe. Pour un freelance solo, Shine à 7,90€/mois est généralement le meilleur choix.' },
              ].map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.q}</span>
                    <span className="text-amber-600 text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
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
              { href: '/comparatif/pennylane', label: 'Avis Pennylane 2026 →' },
            ].map(link => (
              <Link key={link.href} href={link.href}
                className="text-center bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-200 rounded-xl p-4 text-sm font-semibold text-gray-700 hover:text-amber-700 transition-all">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
