import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Guide complet : Choisir son logiciel de facturation en 2025',
  description: 'Comment choisir le meilleur logiciel de facturation pour freelance ou auto-entrepreneur ? Critères, comparaison des prix, fonctionnalités indispensables. Guide expert 2025.',
  openGraph: {
    title: 'Guide complet : Choisir son logiciel de facturation en 2025',
    description: 'Tout ce qu\'il faut savoir pour choisir le bon logiciel de facturation selon votre statut et vos besoins.',
    type: 'article',
  },
}

const tableOfContents = [
  { id: 'pourquoi', label: 'Pourquoi utiliser un logiciel de facturation ?' },
  { id: 'statuts', label: 'Selon votre statut : auto-entrepreneur, freelance, EURL...' },
  { id: 'criteres', label: 'Les 7 critères essentiels pour bien choisir' },
  { id: 'fonctionnalites', label: 'Fonctionnalités indispensables vs bonus' },
  { id: 'prix', label: 'Combien ça coûte ? Analyse des tarifs 2025' },
  { id: 'comparatif', label: 'Quel logiciel choisir selon votre situation ?' },
  { id: 'migration', label: 'Comment migrer depuis Excel ou un ancien logiciel' },
  { id: 'faq', label: 'Questions fréquentes' },
]

export default function GuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Guide complet : Choisir son logiciel de facturation en 2025',
            description: 'Comment choisir le meilleur logiciel de facturation pour freelance ou auto-entrepreneur ?',
            author: { '@type': 'Person', name: 'Équipe FacturationPro' },
            publisher: { '@type': 'Organization', name: 'FacturationPro' },
            datePublished: '2025-01-01',
            dateModified: new Date().toISOString().split('T')[0],
          }),
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid lg:grid-cols-[1fr_280px] gap-10">
          {/* Contenu principal */}
          <article className="min-w-0">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
              <Link href="/" className="hover:text-indigo-600">Accueil</Link>
              <span>›</span>
              <span className="text-gray-900">Guide</span>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-semibold px-3 py-1.5 rounded-full mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>
                Guide expert · Mis à jour novembre 2025
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                Comment choisir le meilleur logiciel de facturation en 2025
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                En tant que freelance ou auto-entrepreneur, votre logiciel de facturation est votre allié quotidien. Un mauvais choix, c&apos;est des heures perdues chaque mois. Ce guide vous aide à choisir sans vous tromper.
              </p>

              {/* Highlights box */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-sm font-semibold text-amber-900 mb-2">💡 L&apos;essentiel en 30 secondes</p>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>✅ Freebe est le meilleur pour les auto-entrepreneurs (3 factures/mois gratuites)</li>
                  <li>✅ Pennylane excelle pour les entrepreneurs avec comptable</li>
                  <li>✅ Indy est idéal si vous voulez gérer comptabilité + facturation</li>
                  <li>✅ Évitez Excel : illégal si vous n&apos;archivez pas correctement</li>
                </ul>
              </div>
            </header>

            {/* Section 1 */}
            <section id="pourquoi" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pourquoi utiliser un logiciel de facturation ?</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Depuis 2018 en France, la <strong>loi anti-fraude à la TVA</strong> impose que les logiciels de facturation utilisés par les professionnels soient certifiés. Utiliser Excel ou Word pour facturer est légalement risqué si vous n&apos;archivez pas selon les normes.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Au-delà du cadre légal, un bon logiciel vous fait gagner du temps :
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '⏱️', title: '2h économisées par semaine', desc: 'Automatisation des relances, devis en 1 clic, récapitulatifs automatiques' },
                  { icon: '💰', title: 'Moins d\'erreurs = plus de revenus', desc: 'Les factures oubliées ou mal calculées représentent en moyenne 3% du CA perdu' },
                  { icon: '📊', title: 'Visibilité financière', desc: 'Tableau de bord en temps réel : CA, factures en attente, revenus mensuels' },
                  { icon: '🔒', title: 'Conformité légale garantie', desc: 'Numérotation automatique, archivage 10 ans, TVA calculée correctement' },
                ].map(item => (
                  <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2 */}
            <section id="statuts" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Choisir selon votre statut</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Les besoins varient énormément selon votre structure. Voici ce dont vous avez besoin selon votre cas :
              </p>

              <div className="space-y-4">
                {[
                  {
                    statut: '🏃 Auto-entrepreneur / Micro-entrepreneur',
                    besoins: ['Facturation simple', '3 factures/mois suffisent pour démarrer', 'Déclaration CA URSSAF intégrée', 'Budget < 10€/mois idéalement'],
                    recommandation: 'Freebe (gratuit jusqu\'à 3 factures/mois)',
                    lien: '/go/freebe',
                  },
                  {
                    statut: '💼 Freelance (EURL, SASU)',
                    besoins: ['Devis + factures illimités', 'Suivi des paiements', 'Export comptable', 'Connexion bancaire'],
                    recommandation: 'Pennylane ou Indy',
                    lien: '/go/pennylane',
                  },
                  {
                    statut: '🏢 TPE / Petite entreprise',
                    besoins: ['Facturation multi-utilisateurs', 'Gestion des stocks (optionnel)', 'Compatibilité expert-comptable', 'Suivi projet/client'],
                    recommandation: 'Pennylane ou Sellsy',
                    lien: '/go/sellsy',
                  },
                ].map(item => (
                  <div key={item.statut} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-bold text-gray-900 mb-3">{item.statut}</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Vos besoins</p>
                        <ul className="space-y-1">
                          {item.besoins.map(b => (
                            <li key={b} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-indigo-500 mt-0.5">•</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-1">Notre recommandation</p>
                        <p className="text-sm font-bold text-indigo-900 mb-3">{item.recommandation}</p>
                        <Link href={item.lien} className="text-xs bg-indigo-600 text-white font-semibold px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors">
                          Essayer gratuitement →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="criteres" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Les 7 critères essentiels</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Pour évaluer objectivement chaque logiciel, nous utilisons 7 critères pondérés. Les voici par ordre d&apos;importance :
              </p>

              <div className="space-y-3">
                {[
                  { num: '01', titre: 'Facilité d\'utilisation', poids: '25%', desc: 'Un logiciel compliqué ne sera pas utilisé. La prise en main doit être immédiate, même sans formation.' },
                  { num: '02', titre: 'Conformité légale', poids: '20%', desc: 'Numérotation séquentielle, archivage 10 ans, mentions légales obligatoires, gestion TVA.' },
                  { num: '03', titre: 'Rapport qualité/prix', poids: '15%', desc: 'Coût mensuel par rapport aux fonctionnalités offertes. Les logiciels gratuits peuvent cacher des limites importantes.' },
                  { num: '04', titre: 'Intégration bancaire', poids: '15%', desc: 'La synchronisation bancaire automatique économise des heures de rapprochement chaque mois.' },
                  { num: '05', titre: 'Support client', poids: '10%', desc: 'En cas de problème avec une facture cliente, vous avez besoin d\'aide rapidement. Chat en direct = gros avantage.' },
                  { num: '06', titre: 'Fonctionnalités comptables', poids: '10%', desc: 'Export comptable, collaboration expert-comptable, déclarations fiscales pré-remplies.' },
                  { num: '07', titre: 'Évolutivité', poids: '5%', desc: 'Pourrez-vous rester sur ce logiciel quand votre activité va grandir ?' },
                ].map(item => (
                  <div key={item.num} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-sm transition-shadow">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-sm flex items-center justify-center">
                      {item.num}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-gray-900">{item.titre}</h3>
                        <span className="text-xs bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded-full">Poids : {item.poids}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="fonctionnalites" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Fonctionnalités indispensables vs bonus</h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-green-500">✅</span> Indispensables
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Création de devis et factures',
                      'Numérotation automatique et conforme',
                      'Mentions légales pré-remplies',
                      'Envoi par email intégré',
                      'Suivi des paiements',
                      'Relances automatiques',
                      'Archivage sécurisé 10 ans',
                      'Export PDF professionnel',
                    ].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-500">⭐</span> Fonctionnalités premium
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Synchronisation bancaire automatique',
                      'Tableau de bord CA en temps réel',
                      'Déclaration URSSAF intégrée',
                      'Signature électronique des devis',
                      'Portail client (suivi en ligne)',
                      'Gestion des avoirs',
                      'Multi-devise',
                      'API / Intégrations tierces',
                    ].map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="prix" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Combien ça coûte ? Les prix 2025</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Le marché des logiciels de facturation propose des offres allant de 0€ à plus de 50€/mois. Voici une analyse honnête des prix pratiqués :
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Logiciel</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Gratuit</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Entrée de gamme</th>
                      <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { logiciel: 'Freebe', gratuit: '3 factures/mois', entree: '9,99€/mois', pro: '14,99€/mois' },
                      { logiciel: 'Indy', gratuit: 'Limité', entree: '7€/mois', pro: '15€/mois' },
                      { logiciel: 'Pennylane', gratuit: '❌', entree: '22€/mois', pro: '42€/mois' },
                      { logiciel: 'Tiime', gratuit: 'Plan Free', entree: '9€/mois', pro: '19€/mois' },
                      { logiciel: 'Shine', gratuit: '❌', entree: '7,99€/mois', pro: '12,99€/mois' },
                      { logiciel: 'Sellsy', gratuit: '❌', entree: '29€/mois', pro: '59€/mois' },
                    ].map((row, i) => (
                      <tr key={row.logiciel} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-3 font-medium text-gray-900 border border-gray-200">{row.logiciel}</td>
                        <td className="p-3 text-gray-600 border border-gray-200">{row.gratuit}</td>
                        <td className="p-3 text-gray-600 border border-gray-200">{row.entree}</td>
                        <td className="p-3 text-gray-600 border border-gray-200">{row.pro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2">* Prix indicatifs, vérifiez sur les sites officiels pour les tarifs exacts.</p>
            </section>

            {/* Section 6 */}
            <section id="comparatif" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Quel logiciel selon votre situation ?</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    situation: 'Je démarre en auto-entrepreneur',
                    choix: 'Freebe',
                    raison: 'Gratuit jusqu\'à 3 factures/mois, pensé pour les micro-entrepreneurs, déclaration URSSAF intégrée.',
                    lien: '/go/freebe',
                    badge: '🏆 Notre #1',
                  },
                  {
                    situation: 'Je veux tout-en-un comptabilité + facturation',
                    choix: 'Indy',
                    raison: 'Combine facturation, suivi bancaire et déclarations fiscales. Idéal pour se passer d\'un comptable.',
                    lien: '/go/indy',
                    badge: '⭐ Populaire',
                  },
                  {
                    situation: 'J\'ai un expert-comptable et veux collaborer',
                    choix: 'Pennylane',
                    raison: 'La collaboration comptable est le point fort de Pennylane. Exports OCR intégré pour votre comptable.',
                    lien: '/go/pennylane',
                    badge: '💼 Pro',
                  },
                  {
                    situation: 'Je veux un compte pro + facturation ensemble',
                    choix: 'Shine',
                    raison: 'Compte bancaire pro + logiciel de facturation intégré. Une seule plateforme pour gérer l\'argent et les factures.',
                    lien: '/go/shine',
                    badge: '🏦 Banque+',
                  },
                ].map(item => (
                  <div key={item.situation} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-gray-900 text-sm">{item.situation}</h3>
                      <span className="text-xs bg-indigo-50 text-indigo-700 font-medium px-2 py-0.5 rounded-full whitespace-nowrap">{item.badge}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">→ <strong>{item.choix}</strong> : {item.raison}</p>
                    <Link href={item.lien} className="text-sm text-indigo-600 font-semibold hover:underline">
                      Essayer {item.choix} gratuitement →
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link href="/comparatif" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
                  Voir le comparatif complet
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
                </Link>
              </div>
            </section>

            {/* Section 7 */}
            <section id="migration" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Migrer depuis Excel ou un ancien logiciel</h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                La migration fait peur, mais elle est plus simple qu&apos;on ne le pense. La plupart des logiciels proposent des outils d&apos;import automatique.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
                <h3 className="font-bold text-blue-900 mb-2">📋 Checklist de migration</h3>
                <ul className="space-y-2">
                  {[
                    'Exporter toutes vos factures existantes en PDF (conservez-les 10 ans)',
                    'Noter le dernier numéro de facture utilisé',
                    'Préparer la liste de vos clients (nom, email, adresse)',
                    'Choisir une date de démarrage (début du mois idéalement)',
                    'Créer votre compte sur le nouveau logiciel',
                    'Importer vos clients via CSV (tous les logiciels le permettent)',
                    'Configurer votre modèle de facture (logo, conditions de paiement)',
                    'Faire une facture test avant la mise en production',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Questions fréquentes</h2>

              <div className="space-y-4">
                {[
                  {
                    q: 'Ai-je vraiment besoin d\'un logiciel de facturation, ou Excel suffit ?',
                    r: 'Légalement, Excel est accepté si vous respectez les exigences de la loi anti-fraude 2018 : inaltérabilité, sécurisation, conservation et archivage. En pratique, un logiciel dédié est bien plus sûr et économise du temps. Pour un auto-entrepreneur, Freebe est gratuit jusqu\'à 3 factures/mois — il n\'y a aucune raison de rester sur Excel.',
                  },
                  {
                    q: 'La facture doit-elle obligatoirement être envoyée en PDF ?',
                    r: 'Oui, depuis 2020, la facture électronique doit être au format PDF pour être légalement valide entre professionnels. Pour les particuliers, un PDF ou papier sont tous deux acceptés. À partir de 2026, la facture électronique sera obligatoire pour les échanges B2B.',
                  },
                  {
                    q: 'Puis-je avoir une facture sans numéro de TVA en auto-entrepreneur ?',
                    r: 'Oui ! Les auto-entrepreneurs en franchise de TVA (CA < 36 800€ pour les services) ne collectent pas la TVA. Votre facture doit alors mentionner "TVA non applicable - article 293 B du CGI" à la place du montant de TVA. Tous les logiciels cités gèrent ce cas automatiquement.',
                  },
                  {
                    q: 'Quelle est la différence entre un devis et une facture ?',
                    r: 'Le devis est un document commercial non obligatoire qui décrit la prestation et le prix avant exécution. La facture est un document comptable et légal émis après la prestation (ou à la livraison). Le devis signé peut servir de bon de commande. La facture doit être conservée 10 ans.',
                  },
                  {
                    q: 'Comment choisir entre Freebe, Pennylane et Indy ?',
                    r: 'Freebe est optimal pour les auto-entrepreneurs qui commencent (gratuit, simple). Pennylane est parfait si vous avez un expert-comptable et souhaitez collaborer (fonctionnalités avancées, plus cher). Indy est le choix "tout-en-un" si vous voulez vous passer de comptable et gérer facturation + déclarations fiscales en autonomie.',
                  },
                ].map((item, i) => (
                  <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                      <span>{item.q}</span>
                      <svg className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {item.r}
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* CTA Final */}
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
              <h2 className="text-2xl font-bold mb-2">Prêt à choisir votre logiciel ?</h2>
              <p className="text-indigo-100 mb-6">Notre recommandation #1 : Freebe, gratuit jusqu&apos;à 3 factures/mois, sans CB.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/go/freebe"
                  className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors"
                >
                  Essayer Freebe gratuitement
                </Link>
                <Link
                  href="/comparatif"
                  className="text-indigo-100 font-semibold hover:text-white transition-colors"
                >
                  Voir toutes les alternatives →
                </Link>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {/* Table des matières */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">📖 Sommaire</h3>
                <nav className="space-y-1">
                  {tableOfContents.map((item, i) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-start gap-2 text-sm text-gray-600 hover:text-indigo-600 py-1 transition-colors"
                    >
                      <span className="text-gray-300 font-medium mt-0.5 flex-shrink-0">{i + 1}.</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* CTA Sidebar */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
                <div className="text-2xl mb-2">🏆</div>
                <h3 className="font-bold text-gray-900 mb-1">Notre recommandation</h3>
                <p className="text-sm text-gray-600 mb-3">Freebe — gratuit pour démarrer, simple et complet</p>
                <Link href="/go/freebe" className="block text-center bg-indigo-600 text-white font-semibold text-sm px-4 py-2.5 rounded-lg hover:bg-indigo-700 transition-colors">
                  Essayer gratuitement
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
