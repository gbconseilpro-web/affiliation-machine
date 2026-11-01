import type { Metadata } from 'next'
import {
  buildComparativeJsonLd,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from '@/lib/seo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.com'

export const metadata: Metadata = buildMetadata({
  title: 'Guide facturation electronique obligatoire 2026 : Tout comprendre',
  description: 'Guide complet sur la reforme facturation electronique 2026 : qui est concerne, les echeances, les formats (Factur-X, UBL), comment choisir sa PDP et les etapes de mise en conformite.',
  path: '/guide',
  type: 'article',
  publishedAt: '2026-01-01',
  updatedAt: new Date().toISOString().split('T')[0],
})

const faqs = [
  {
    question: 'La facture PDF envoyee par email sera-t-elle encore acceptee apres 2026 ?',
    answer: 'Non. Apres les echeances 2026-2027, un PDF simple envoye par email ne sera plus une facture electronique au sens legal. Il faudra obligatoirement utiliser un format structure (Factur-X, UBL, CII) transmis via une PDP ou le PPF.',
  },
  {
    question: "Qu'est-ce que le Portail Public de Facturation (PPF) ?",
    answer: "Le PPF est la plateforme gratuite mise en place par l'Etat pour permettre la reception et la transmission de factures electroniques. Il offre des fonctionnalites de base. Pour des fonctionnalites avancees (suivi, relances, comptabilite), une PDP privee est recommandee.",
  },
  {
    question: 'Comment savoir si mon logiciel actuel sera conforme ?',
    answer: "Contactez votre editeur et posez deux questions : 1) Etes-vous en cours de certification PDP ou partenaire d'une PDP agreee ? 2) Generez-vous nativement le format Factur-X ? Si la reponse est non a l'une des deux, commencez a chercher une alternative.",
  },
  {
    question: 'Dois-je conserver les factures electroniques recues ?',
    answer: "Oui. L'obligation d'archivage legal reste de 10 ans pour les factures professionnelles. Les logiciels conformes integrent un module d'archivage probatoire qui garantit l'integrite des documents sur cette duree.",
  },
  {
    question: 'La reforme s\'applique-t-elle aux factures avec des clients etrangers ?',
    answer: 'Non. La reforme concerne uniquement les transactions B2B domestiques (entre entreprises francaises assujetties a la TVA). Les factures a l\'export ou avec des clients europeens restent soumises aux regles actuelles.',
  },
  {
    question: "Quel est le cout d'une transition vers la facturation electronique ?",
    answer: 'Le cout depend de votre logiciel actuel. Si vous changez d\'outil : comptez 20 a 60 euros/mois pour un logiciel SaaS complet. Si votre logiciel actuel se met a jour : parfois inclus, parfois en option payante. Le PPF (portail public) est gratuit pour les fonctions de base.',
  },
]

const steps = [
  { step: '1', title: "Faites l'inventaire de vos outils actuels", desc: 'Listez vos logiciels de facturation, comptabilite et ERP. Demandez a vos editeurs leur calendrier de mise en conformite.' },
  { step: '2', title: 'Choisissez votre logiciel conforme', desc: 'Selectionnez un outil certifie PDP ou connecte au PPF. Verifiez qu\'il genere du Factur-X nativement.' },
  { step: '3', title: 'Migrez vos donnees et parametrez', desc: 'Importez vos clients, produits et historique. Parametrez vos modeles de factures aux nouvelles normes.' },
  { step: '4', title: 'Formez vos equipes', desc: 'Comptabilite, commercial, direction : chacun doit comprendre le nouveau flux de validation et d\'envoi.' },
  { step: '5', title: "Testez avant l'echeance", desc: 'Envoyez des factures de test a vos principaux clients et fournisseurs pour valider l\'interoperabilite.' },
]

export default function GuidePage() {
  const articleJsonLd = buildComparativeJsonLd({
    name: 'Guide facturation electronique obligatoire 2026',
    description: 'Guide complet sur la reforme facturation electronique 2026 : echeances, formats, PDP, mise en conformite.',
    url: `${SITE_URL}/guide`,
    datePublished: '2026-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  })

  const faqJsonLd = buildFaqJsonLd(faqs)

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Guide facturation electronique', path: '/guide' },
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
        <nav className="text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-primary-600">Accueil</a>
          <span className="mx-2">{'>'}</span>
          <span className="text-gray-800">Guide facturation electronique</span>
        </nav>

        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Obligation legale : Entree en vigueur septembre 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guide complet : la facturation electronique obligatoire en France
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Mis a jour le {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} - lecture : 8 minutes
          </p>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-primary-800 mb-2">L&apos;essentiel en 30 secondes</p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>- <strong>Qui ?</strong> Toutes les entreprises francaises assujetties a la TVA</li>
              <li>- <strong>Quand ?</strong> Reception obligatoire : 1er sept. 2026 / Emission PME : 1er sept. 2027</li>
              <li>- <strong>Comment ?</strong> Via une PDP agreee ou le Portail Public de Facturation</li>
              <li>- <strong>Format ?</strong> Factur-X (PDF enrichi), UBL ou CII - plus de simples PDF</li>
              <li>- <strong>Sanction ?</strong> 15 euros/facture non conforme, max 15 000 euros/an</li>
            </ul>
          </div>
        </div>

        <article className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pourquoi cette reforme, et pourquoi maintenant ?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              La reforme de la facturation electronique B2B en France decoule de la directive europeenne
              et de la loi de finances 2020. L&apos;objectif de l&apos;Etat est triple : lutter contre la fraude a la TVA
              (estimee a 14 milliards d&apos;euros de manque a gagner par an), moderniser les processus comptables
              des entreprises francaises, et aligner la France sur les standards europeens.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Concretement, chaque facture emise entre entreprises francaises sera transmise a l&apos;administration
              fiscale en temps quasi-reel. Fini le decalage entre la facturation declaree et les paiements reels.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Qui est concerne exactement ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Sont concernees :</strong> toutes les entreprises assujetties a la TVA etablies en France,
              pour leurs transactions B2B (entre professionnels) sur le territoire francais.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-2 font-semibold">Type d&apos;entreprise</th>
                    <th className="pb-2 font-semibold">Reception</th>
                    <th className="pb-2 font-semibold">Emission</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2">Grandes entreprises</td>
                    <td className="py-2 text-orange-600 font-medium">1er sept. 2026</td>
                    <td className="py-2 text-red-600 font-medium">1er sept. 2026</td>
                  </tr>
                  <tr>
                    <td className="py-2">ETI (250-5 000 salaries)</td>
                    <td className="py-2 text-orange-600 font-medium">1er sept. 2026</td>
                    <td className="py-2 text-red-600 font-medium">1er sept. 2026</td>
                  </tr>
                  <tr>
                    <td className="py-2">PME et TPE</td>
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
              <strong>Ne sont pas concernees :</strong> les transactions B2C (ventes aux particuliers),
              les transactions avec l&apos;etranger (export, intra-UE), et les entreprises en franchise de TVA.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Les formats acceptes</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La reforme impose des formats structures, lisibles par les machines. Trois formats sont reconnus :
            </p>
            <div className="space-y-4 my-6">
              <div className="card p-5">
                <h3 className="font-bold">Factur-X (recommande pour les PME)</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Un fichier PDF/A-3 qui contient a la fois le visuel de la facture (lisible par l&apos;humain)
                  et les donnees XML structurees (traitees automatiquement). C&apos;est le format le plus simple
                  a adopter car vos clients voient un PDF comme d&apos;habitude.
                </p>
              </div>
              <div className="card p-5">
                <h3 className="font-bold">UBL (Universal Business Language)</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Format XML pur, standard international. Privilegie pour les echanges avec des partenaires
                  europeens et les grandes entreprises avec systemes ERP.
                </p>
              </div>
              <div className="card p-5">
                <h3 className="font-bold">CII (Cross Industry Invoice)</h3>
                <p className="text-gray-600 text-sm mt-1">
                  Format XML adapte aux echanges B2B complexes. Utilise principalement dans les secteurs
                  industriels et les grandes entreprises avec des flux de facturation importants.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. PDP vs PPF : quelle plateforme choisir ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour transmettre et recevoir des factures electroniques, vous devez passer par l&apos;une de ces deux options :
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="card p-5 border-2 border-primary-200">
                <h3 className="font-bold mb-2">PPF - Portail Public de Facturation</h3>
                <div className="text-sm space-y-2 text-gray-600">
                  <div className="flex gap-2"><span className="text-green-500">ok</span> Gratuit</div>
                  <div className="flex gap-2"><span className="text-green-500">ok</span> Gere par l&apos;Etat (DGFiP)</div>
                  <div className="flex gap-2"><span className="text-red-500">x</span> Fonctions de base uniquement</div>
                  <div className="flex gap-2"><span className="text-red-500">x</span> Pas d&apos;integration comptable native</div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Adapte aux tres petites structures avec peu de factures</div>
              </div>
              <div className="card p-5 border-2 border-green-200">
                <h3 className="font-bold mb-2">PDP - Plateforme privee agreee</h3>
                <div className="text-sm space-y-2 text-gray-600">
                  <div className="flex gap-2"><span className="text-green-500">ok</span> Fonctions avancees (suivi, relances)</div>
                  <div className="flex gap-2"><span className="text-green-500">ok</span> Integration comptable native</div>
                  <div className="flex gap-2"><span className="text-green-500">ok</span> Automatisation des processus</div>
                  <div className="flex gap-2"><span className="text-red-500">x</span> Payant (inclus dans le logiciel)</div>
                </div>
                <div className="mt-3 text-xs text-gray-500">Recommande pour toutes les PME et ETI actives</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Plan d&apos;action en 5 etapes</h2>
            <div className="space-y-4 my-6">
              {steps.map(item => (
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
          </div>
        </article>

        <div className="mt-12 p-6 bg-primary-50 border border-primary-200 rounded-xl">
          <h3 className="font-bold text-lg mb-3">Pret a choisir votre logiciel ?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Notre comparatif analyse les 3 meilleures solutions sur leur conformite PDP, leur format Factur-X et leur facilite de deploiement.
          </p>
          <a href="/comparatif" className="btn-primary inline-block">
            Voir le comparatif des logiciels
          </a>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Questions frequentes</h2>
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

        <div className="mt-12 p-5 bg-gray-50 rounded-xl text-sm">
          <h3 className="font-semibold mb-3">Sources officielles</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="https://www.impots.gouv.fr/professionnel/facturation-electronique" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                DGFiP - Portail officiel facturation electronique
              </a>
            </li>
            <li>
              <a href="https://chorus-pro.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                Chorus Pro - Portail Public de Facturation
              </a>
            </li>
            <li>
              <a href="https://bofip.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                BOFIP - Bulletins officiels des finances publiques
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
