import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Avis MyUnisoft 2026 : test complet du logiciel de comptabilité cabinet',
  description: 'Notre avis sur MyUnisoft après test : logiciel comptabilité cloud pour cabinets d\'experts-comptables, tarifs, avantages. La révolution de la compta collaborative ?',
  alternates: { canonical: 'https://facturationpro.fr/comparatif/myunisoft' },
  openGraph: {
    title: 'Avis MyUnisoft 2026 : Test complet',
    description: 'Test réel de MyUnisoft : le logiciel comptabilité cloud pour cabinets d\'experts-comptables. Notre verdict complet.',
    type: 'article',
  },
}

const AFFILIATE_URL = 'https://www.myunisoft.fr/demande-demo?utm_source=facturationpro&utm_medium=affiliation&utm_campaign=avis-myunisoft'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'SoftwareApplication',
    name: 'MyUnisoft',
    applicationCategory: 'BusinessApplication',
  },
  reviewRating: { '@type': 'Rating', ratingValue: '4.5', bestRating: '5' },
  author: { '@type': 'Organization', name: 'FacturationPro' },
  datePublished: '2026-01-01',
  reviewBody: 'MyUnisoft est le logiciel de comptabilité cloud de référence pour les cabinets d\'experts-comptables français.',
}

export default function AvisMyUnisoft() {
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
              <span className="text-gray-800 font-medium">Avis MyUnisoft</span>
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
              Avis MyUnisoft 2026 : test complet du logiciel de comptabilité cabinet
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              MyUnisoft révolutionne-t-il vraiment la comptabilité des cabinets ? Après test approfondi, voici notre verdict complet sur ce logiciel cloud pour experts-comptables.
            </p>
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
              <div className="text-center">
                <div className="text-5xl font-black text-indigo-600">4,5</div>
                <div className="flex justify-center gap-0.5 mt-1">
                  {[1,2,3,4].map(i => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  <span className="text-yellow-200 text-xl">★</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Note FacturationPro</div>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900 mb-1">La référence cloud pour les cabinets comptables</p>
                <p className="text-sm text-gray-600">Liasse fiscale, FEC, collaboration client en temps réel. Le logiciel le plus complet pour les experts-comptables.</p>
              </div>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0">
                Demander une démo →
              </a>
            </div>
          </header>

          {/* Alerte public cible */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="font-bold text-amber-800 mb-1">MyUnisoft est destiné aux cabinets comptables</p>
              <p className="text-sm text-amber-700">Ce logiciel est conçu pour les experts-comptables et leurs équipes, pas pour les entrepreneurs ou freelances. Si vous cherchez à gérer votre propre comptabilité, consultez notre <Link href="/comparatif/indy" className="underline">avis Indy</Link> ou <Link href="/comparatif/pennylane" className="underline">avis Pennylane</Link>.</p>
            </div>
          </div>

          {/* Points forts / limites */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h2 className="font-bold text-green-800 mb-3">✅ Points forts</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Conçu spécifiquement pour les cabinets d&apos;experts-comptables</li>
                <li>• Dossiers clients illimités</li>
                <li>• Liasse fiscale intégrée et conforme</li>
                <li>• Accès client en temps réel (portail collaboratif)</li>
                <li>• API ouverte pour intégrations tierces</li>
                <li>• Conforme FEC et normes CNCC</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h2 className="font-bold text-red-800 mb-3">❌ Limites</h2>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pas un outil pour les freelances ou dirigeants</li>
                <li>• Nécessite une formation initiale</li>
                <li>• Prix sur devis (tarification opaque)</li>
                <li>• Pas adapté si vous gérez votre comptabilité vous-même</li>
              </ul>
            </div>
          </div>

          {/* Tarifs */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Tarifs MyUnisoft 2026</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tarification sur devis</h3>
              <p className="text-gray-600 mb-4">MyUnisoft pratique une tarification personnalisée selon le nombre de dossiers clients du cabinet. Il n&apos;y a pas de grille tarifaire publique.</p>
              <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all">
                Obtenir un devis personnalisé →
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-3">* La démo est gratuite et sans engagement. Un conseiller MyUnisoft vous contacte sous 24h.</p>
          </section>

          {/* Fonctionnalités */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Fonctionnalités détaillées</h2>

            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Comptabilité collaborative cloud</h3>
            <p className="text-gray-600 mb-4">
              MyUnisoft est construit autour d&apos;un principe : la comptabilité en temps réel entre le cabinet et ses clients. Le portail client permet aux entrepreneurs de transmettre leurs documents directement dans le logiciel, de consulter leurs bilans et d&apos;échanger avec leur comptable, sans email ni pièce jointe.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Liasse fiscale et conformité</h3>
            <p className="text-gray-600 mb-4">
              La liasse fiscale est intégrée et mise à jour automatiquement selon les évolutions réglementaires. MyUnisoft est conforme aux exigences FEC (Fichier des Écritures Comptables), à la norme CNCC et aux obligations de télétransmission DGFiP. Pas besoin de logiciel tiers pour la déclaration fiscale.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">3. API ouverte et intégrations</h3>
            <p className="text-gray-600 mb-4">
              MyUnisoft propose une API REST complète permettant l&apos;intégration avec d&apos;autres outils : logiciels de paie, CRM cabinet, outils de gestion du temps, solutions bancaires. Plus de 200 intégrations disponibles via partenariats ou API directe.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Gestion du cabinet</h3>
            <p className="text-gray-600 mb-6">
              Au-delà de la comptabilité, MyUnisoft inclut des outils de gestion interne du cabinet : suivi du temps par dossier, planification des missions, tableaux de bord de rentabilité. Un vrai ERP cabinet, pas juste un logiciel de saisie.
            </p>
          </section>

          {/* Pour qui ? */}
          <section className="mb-10 bg-gray-50 rounded-2xl p-6">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">MyUnisoft : pour qui ?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-green-700 mb-2">✅ Idéal pour :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cabinets d&apos;experts-comptables</li>
                  <li>• Commissaires aux comptes</li>
                  <li>• Experts-comptables indépendants</li>
                  <li>• Cabinets souhaitant passer au cloud collaboratif</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-red-700 mb-2">❌ Pas adapté à :</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Entrepreneurs et freelances (outil cabinet)</li>
                  <li>• Dirigeants gérant leur propre comptabilité</li>
                  <li>• Petites structures sans expert-comptable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Comparaison */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">MyUnisoft vs logiciels cabinet concurrents</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left">Critère</th>
                    <th className="px-4 py-3 text-center font-bold text-indigo-700">MyUnisoft</th>
                    <th className="px-4 py-3 text-center">Sage 100</th>
                    <th className="px-4 py-3 text-center">ACD</th>
                    <th className="px-4 py-3 text-center">Cegid</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Architecture', '100% cloud', 'Hybride', 'Cloud', 'Cloud'],
                    ['Portail client', '✅ inclus', '⚠️ option', '✅', '✅'],
                    ['API ouverte', '✅', '❌', '⚠️ limitée', '✅'],
                    ['Liasse fiscale', '✅', '✅', '✅', '✅'],
                    ['FEC conforme', '✅', '✅', '✅', '✅'],
                    ['Intégrations', '200+', '50+', '30+', '100+'],
                  ].map(([crit, myuni, sage, acd, cegid]) => (
                    <tr key={crit} className="border-b border-gray-100 even:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-700">{crit}</td>
                      <td className="px-4 py-3 text-center font-semibold text-indigo-700">{myuni}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{sage}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{acd}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{cegid}</td>
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
              MyUnisoft est l&apos;un des meilleurs logiciels de comptabilité cloud pour les cabinets d&apos;experts-comptables en France. Son architecture 100% cloud, son portail client collaboratif et ses 200+ intégrations en font une plateforme moderne qui améliore significativement la productivité des équipes.
            </p>
            <p className="text-gray-600 mb-4">
              La tarification sur devis est la principale opacité : il faut contacter l&apos;équipe commerciale pour avoir un prix. Mais la démo gratuite permet d&apos;évaluer le produit sans engagement, et les retours des cabinets utilisateurs sont très positifs.
            </p>
            <p className="text-gray-600">
              <strong>À retenir :</strong> MyUnisoft n&apos;est pas un logiciel pour les entrepreneurs. Si vous êtes dirigeant cherchant à gérer votre comptabilité, orientez-vous vers <Link href="/comparatif/indy" className="text-indigo-600 hover:underline">Indy</Link> ou <Link href="/comparatif/pennylane" className="text-indigo-600 hover:underline">Pennylane</Link>. MyUnisoft est l&apos;outil de votre expert-comptable.
            </p>
          </section>

          {/* CTA */}
          <div className="bg-indigo-600 rounded-2xl p-8 text-center text-white mb-10">
            <h3 className="text-2xl font-bold mb-2">Demandez une démo MyUnisoft</h3>
            <p className="text-indigo-200 mb-5">Démo gratuite et personnalisée. Un conseiller vous contacte sous 24h.</p>
            <a href={AFFILIATE_URL} target="_blank" rel="nofollow sponsored noopener"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all">
              Demander une démo gratuite →
            </a>
            <p className="text-xs text-indigo-300 mt-3">Lien affilié : nous percevons une commission si vous souscrivez, sans surcoût pour vous.</p>
          </div>

          {/* FAQ */}
          <section className="mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Questions fréquentes sur MyUnisoft</h2>
            <div className="space-y-3">
              {[
                {
                  q: 'MyUnisoft remplace-t-il un expert-comptable ?',
                  a: 'Non : MyUnisoft est l\'outil de travail DE l\'expert-comptable, pas une alternative à ses services. Si vous cherchez à gérer votre propre comptabilité sans expert-comptable, orientez-vous vers Indy ou Pennylane qui sont conçus pour les dirigeants.',
                },
                {
                  q: "MyUnisoft est-il homologué par l'Ordre des experts-comptables ?",
                  a: "Oui, MyUnisoft est conforme aux normes de l'Ordre des experts-comptables français et aux exigences FEC (Fichier des Écritures Comptables). Le logiciel est régulièrement mis à jour pour intégrer les évolutions réglementaires françaises.",
                },
                {
                  q: 'Quel est le prix de MyUnisoft ?',
                  a: 'MyUnisoft pratique une tarification sur devis selon le nombre de dossiers clients du cabinet et les fonctionnalités souhaitées. Demandez une démo gratuite sur leur site pour obtenir un devis personnalisé en fonction de la taille de votre cabinet.',
                },
                {
                  q: 'MyUnisoft propose-t-il une version d\'essai ?',
                  a: 'MyUnisoft propose des démos guidées sur demande avec un conseiller. Il n\'y a pas d\'essai libre en autonomie : le produit nécessite une prise en main accompagnée compte tenu de sa richesse fonctionnelle. La démo est gratuite et sans engagement.',
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
              { href: '/comparatif/pennylane', label: 'Avis Pennylane 2026 →' },
              { href: '/comparatif/indy', label: 'Avis Indy 2026 →' },
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
