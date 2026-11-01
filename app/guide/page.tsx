import type { Metadata } from 'next'
import {
  buildComparativeJsonLd,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from '@/lib/seo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.fr'

export const metadata: Metadata = buildMetadata({
  title: 'Guide facturation électronique obligatoire 2026 : Tout comprendre',
  description: 'Guide complet sur la réforme facturation électronique 2026 : qui est concerné, les échéances, les formats (Factur-X, UBL), comment choisir sa PDP et les étapes de mise en conformité.',
  path: '/guide',
  type: 'article',
  publishedAt: '2026-01-01',
  updatedAt: new Date().toISOString().split('T')[0],
})

const faqs = [
  {
    question: 'La facture PDF envoyée par email sera-t-elle encore acceptée après 2026 ?',
    answer: 'Non. Après les échéances 2026-2027, un PDF simple envoyé par email ne sera plus une facture électronique au sens légal. Il faudra obligatoirement utiliser un format structuré (Factur-X, UBL, CII) transmis via une PDP ou le PPF.',
  },
  {
    question: 'Qu\'est-ce que le Portail Public de Facturation (PPF) ?',
    answer: 'Le PPF est la plateforme gratuite mise en place par l\'État pour permettre la réception et la transmission de factures électroniques. Il offre des fonctionnalités de base. Pour des fonctionnalités avancées (suivi, relances, comptabilité), une PDP privée est recommandée.',
  },
  {
    question: 'Comment savoir si mon logiciel actuel sera conforme ?',
    answer: 'Contactez votre éditeur et posez deux questions : 1) Êtes-vous en cours de certification PDP ou partenaire d\'une PDP agréée ? 2) Générez-vous nativement le format Factur-X ? Si la réponse est non à l\'une des deux, commencez à chercher une alternative.',
  },
  {
    question: 'Dois-je conserver les factures électroniques reçues ?',
    answer: 'Oui. L\'obligation d\'archivage légal reste de 10 ans pour les factures professionnelles. Les logiciels conformes intègrent un module d\'archivage probatoire qui garantit l\'intégrité des documents sur cette durée.',
  },
  {
    question: 'La réforme s\'applique-t-elle aux factures avec des clients étrangers ?',
    answer: 'Non. La réforme concerne uniquement les transactions B2B domestiques (entre entreprises françaises assujetties à la TVA). Les factures à l\'export ou avec des clients européens restent soumises aux règles actuelles.',
  },
  {
    question: 'Quel est le coût d\'une transition vers la facturation électronique ?',
    answer: 'Le coût dépend de votre logiciel actuel. Si vous changez d\'outil : comptez 20 à 60€/mois pour un logiciel SaaS complet. Si votre logiciel actuel se met à jour : parfois inclus, parfois en option payante. Le PPF (portail public) est gratuit pour les fonctions de base.',
  },
]

export default function GuidePage() {
  const articleJsonLd = buildComparativeJsonLd({
    name: 'Guide facturation électronique obligatoire 2026',
    description: 'Guide complet sur la réforme facturation électronique 2026 : échéances, formats, PDP, mise en conformité.',
    url: `${SITE_URL}/guide`,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  })

  const faqJsonLd = buildFaqJsonLd(faqs)

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Guide facturation électronique', path: '/guide' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="section max-w-3xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-primary-600">Accueil</a>
          <span className="mx-2">›</span>
          <span className="text-gray-800">Guide facturation électronique</span>
        </nav>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            ⚠️ Obligation légale : Entrée en vigueur septembre 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guide complet : la facturation électronique obligatoire en France
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Mis à jour le {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} - lecture : 8 minutes
          </p>

          {/* TL;DR */}
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-primary-800 mb-2">📋 L&apos;essentiel en 30 secondes</p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• <strong>Qui ?</strong> Toutes les entreprises françaises assujetties à la TVA</li>
              <li>• <strong>Quand ?</strong> Réception obligatoire : 1er sept. 2026 / Émission PME : 1er sept. 2027</li>
              <li>• <strong>Comment ?</strong> Via une PDP agréée ou le Portail Public de Facturation</li>
              <li>• <strong>Format ?</strong> Factur-X (PDF enrichi), UBL ou CII - plus de simples PDF</li>
              <li>• <strong>Sanction ?</strong> 15€/facture non conforme, max 15 000€/an</li>
            </ul>
          </div>
        </div>

        {/* CONTENU PRINCIPAL */}
        <article className="space-y-8">

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pourquoi cette réforme, et pourquoi maintenant ?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              La réforme de la facturation électronique B2B en France découle de la directive européenne
              et de la loi de finances 2020. L&apos;objectif de l&apos;État est triple : lutter contre la fraude à la TVA
              (estimée à 14 milliards d&apos;euros de manque à gagner par an), moderniser les processus comptables
              des entreprises françaises, et aligner la France sur les standards européens.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Concrètement, chaque facture émise entre entreprises françaises sera transmise à l&apos;administration
              fiscale en temps quasi-réel. Fini le décalage entre la facturation déclarée et les paiements réels.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Qui est concerné exactement ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Sont concernées :</strong> toutes les entreprises assujetties à la TVA établies en France,
              pour leurs transactions B2B (entre professionnels) sur le territoire français.
            </p>
          <div className="not-prose bg-gray-50 rounded-xl p-5 my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200">
                  <th className="pb-2 font-semibold">Type d&apos;entreprise</th>
                  <th className="pb-2 font-semibold">Réception</th>
                  <th className="pb-2 font-semibold">Émission</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-2">Grandes entreprises (&gt;5 000 salariés)</td>
                  <td className="py-2 text-orange-600 font-medium">1er sept. 2026</td>
                  <td className="py-2 text-red-600 font-medium">1er sept. 2026</td>
                </tr>
                <tr>
                  <td className="py-2">ETI (250-5 000 salariés)</td>
                  <td className="py-2 text-orange-600 font-medium">1er sept. 2026</td>
                  <td className="py-2 text-red-600 font-medium">1er sept. 2026</td>
                </tr>
                <tr>
                  <td className="py-2">PME et TPE (&lt;250 salariés)</td>
                  <td className="py-2 text-orange-600 font-medium">1er sept. 2026</td>
                  <td className="py-2 text-red-700 font-medium">1er sept. 2027</td>
                </tr>
                <tr>
                  <td className="py-2">Auto-entrepreneurs (assujettis TVA)</td>
                  <td className="py-2 text-orange-600 font-medium">1er sept. 2026</td>
                  <td className="py-2 text-red-700 font-medium">1er sept. 2027</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mt-4">
            <strong>Ne sont pas concernées :</strong> les transactions B2C (ventes aux particuliers),
            les transactions avec l&apos;étranger (export, intra-UE), et les entreprises en franchise de TVA
            (pour l&apos;obligation d&apos;émission).
          </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Les formats acceptés</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La réforme impose des formats structurés, lisibles par les machines. Trois formats sont reconnus :
            </p>
          <div className="not-prose space-y-4 my-6">
            <div className="card p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📄</span>
                <div>
                  <h3 className="font-bold">Factur-X (recommandé pour les PME)</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Un fichier PDF/A-3 qui contient à la fois le visuel de la facture (lisible par l&apos;humain)
                    et les données XML structurées (traitées automatiquement). C&apos;est le format le plus simple
                    à adopter car vos clients voient un PDF comme d&apos;habitude.
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔗</span>
                <div>
                  <h3 className="font-bold">UBL (Universal Business Language)</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Format XML pur, standard international. Privilégié pour les échanges avec des partenaires
                    européens et les grandes entreprises avec systèmes ERP.
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-5">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏭</span>
                <div>
                  <h3 className="font-bold">CII (Cross Industry Invoice)</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Format XML adapté aux échanges B2B complexes. Utilisé principalement dans les secteurs
                    industriels et les grandes entreprises avec des flux de facturation importants.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. PDP vs PPF : quelle plateforme choisir ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour transmettre et recevoir des factures électroniques, vous devez passer par l&apos;une de ces deux options :
            </p>
          <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
            <div className="card p-5 border-2 border-primary-200">
              <h3 className="font-bold mb-2">PPF - Portail Public de Facturation</h3>
              <div className="text-sm space-y-2 text-gray-600">
                <div className="flex gap-2"><span className="text-green-500">✓</span> Gratuit</div>
                <div className="flex gap-2"><span className="text-green-500">✓</span> Géré par l&apos;État (DGFiP)</div>
                <div className="flex gap-2"><span className="text-red-500">✗</span> Fonctions de base uniquement</div>
                <div className="flex gap-2"><span className="text-red-500">✗</span> Pas d&apos;intégration comptable native</div>
              </div>
              <div className="mt-3 text-xs text-gray-500">→ Adapté aux très petites structures avec peu de factures</div>
            </div>
            <div className="card p-5 border-2 border-green-200">
              <h3 className="font-bold mb-2">PDP - Plateforme privée agréée</h3>
              <div className="text-sm space-y-2 text-gray-600">
                <div className="flex gap-2"><span className="text-green-500">✓</span> Fonctions avancées (suivi, relances)</div>
                <div className="flex gap-2"><span className="text-green-500">✓</span> Intégration comptable native</div>
                <div className="flex gap-2"><span className="text-green-500">✓</span> Automatisation des processus</div>
                <div className="flex gap-2"><span className="text-red-500">✗</span> Payant (inclus dans le logiciel)</div>
              </div>
              <div className="mt-3 text-xs text-gray-500">→ Recommandé pour toutes les PME et ETI actives</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Plan d&apos;action en 5 étapes</h2>
          <div className="not-prose space-y-4 my-6">
            {[
              { step: '1', title: 'Faites l\'inventaire de vos outils actuels', desc: 'Listez vos logiciels de facturation, comptabilité et ERP. Demandez à vos éditeurs leur calendrier de mise en conformité.' },
              { step: '2', title: 'Choisissez votre logiciel conforme', desc: 'Sélectionnez un outil certifié PDP ou connecté au PPF. Vérifiez qu\'il génère du Factur-X nativement.' },
              { step: '3', title: 'Migrez vos données et paramétrez', desc: 'Importez vos clients, produits et historique. Paramétrez vos modèles de factures aux nouvelles normes.' },
              { step: '4', title: 'Formez vos équipes', desc: 'Comptabilité, commercial, direction : chacun doit comprendre le nouveau flux de validation et d\'envoi.' },
              { step: '5', title: 'Testez avant l\'échéance', desc: 'Envoyez des factures de test à vos principaux clients et fournisseurs pour valider l\'interopérabilité.' },
            ].map(item => (
              <div key={item.step} className="flex gap-4 card p-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* CTA comparatif */}
        <div className="mt-12 p-6 bg-primary-50 border border-primary-200 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Prêt à choisir votre logiciel ?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Notre comparatif analyse les 3 meilleures solutions sur leur conformité PDP, leur format Factur-X et leur facilité de déploiement.
          </p>
          <a href="/comparatif" className="btn-primary inline-block">
            Voir le comparatif des logiciels →
          </a>
        </div>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card p-5">
                <summary className="font-semibold cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-primary-600 ml-2 flex-shrink-0">+</span>
                </summary>
                <p className="text-gray-600 mt-3 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Sources officielles */}
        <div className="mt-12 p-5 bg-gray-50 rounded-xl text-sm">
          <h3 className="font-semibold mb-3">Sources officielles</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="https://www.impots.gouv.fr/professionnel/facturation-electronique" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                → DGFiP - Portail officiel facturation électronique
              </a>
            </li>
            <li>
              <a href="https://chorus-pro.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                → Chorus Pro - Portail Public de Facturation
              </a>
            </li>
            <li>
              <a href="https://bofip.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                → BOFIP - Bulletins officiels des finances publiques
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
