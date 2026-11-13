import type { Metadata } from 'next'
import {
  buildComparativeJsonLd,
  buildFaqJsonLd,
  buildBreadcrumbJsonLd,
  buildMetadata,
} from '@/lib/seo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://facturationpro.com'

export const metadata: Metadata = buildMetadata({
  title: 'Guide facturation electronique obligatoire 2026-2028 : tout comprendre',
  description: 'Guide complet reforme facturation electronique : echeances 2026-2028, formats Factur-X/UBL/CII, PDP vs PPF, micro-entrepreneurs, sanctions et plan d\'action en 5 etapes.',
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
    answer: "Le PPF est la plateforme gratuite mise en place par l'Etat (DGFiP) pour permettre la reception et la transmission de factures electroniques. Il offre des fonctionnalites de base. Pour des fonctionnalites avancees (suivi, relances, integration comptable), une PDP privee agreee est recommandee.",
  },
  {
    question: 'Comment savoir si mon logiciel actuel sera conforme ?',
    answer: "Posez deux questions a votre editeur : 1) Etes-vous en cours de certification PDP ou partenaire d'une PDP agreee ? 2) Generez-vous nativement le format Factur-X ? Si la reponse est non a l'une des deux, commencez a chercher une alternative. La liste des PDP certifiees est publiee sur le site de la DGFiP.",
  },
  {
    question: 'Dois-je conserver les factures electroniques recues ?',
    answer: "Oui. L'obligation d'archivage legal reste de 10 ans pour les factures professionnelles. Les logiciels conformes integrent un module d'archivage probatoire qui garantit l'integrite des documents sur cette duree. Un simple export PDF dans un dossier ne suffit pas.",
  },
  {
    question: "La reforme s'applique-t-elle aux micro-entrepreneurs en franchise de TVA ?",
    answer: "Non. Les micro-entrepreneurs sous le seuil de franchise de TVA (36 800 euros pour les prestations de services, 91 900 euros pour les ventes en 2026) ne sont pas concernes par l'obligation d'emission. En revanche, si votre chiffre d'affaires depasse ces seuils et que vous devenez assujetti a la TVA, l'obligation s'applique.",
  },
  {
    question: "La reforme s'applique-t-elle aux factures avec des clients etrangers ?",
    answer: "Non. La reforme concerne uniquement les transactions B2B domestiques entre entreprises francaises assujetties a la TVA. Les factures a l'export, avec des clients europeens ou des particuliers restent soumises aux regles actuelles.",
  },
  {
    question: "Quel est le cout d'une transition vers la facturation electronique ?",
    answer: "Cela depend de votre logiciel actuel. Si vous changez d'outil : comptez 10 a 50 euros/mois pour un logiciel SaaS conforme. Si votre logiciel actuel se met a jour : parfois inclus, parfois en option payante. Le PPF (portail public) est gratuit pour les fonctions de base. Dans tous les cas, le cout est sans commune mesure avec les 15 euros/facture non conforme de sanction.",
  },
  {
    question: "Qu'est-ce que l'e-reporting et en quoi ca differe de la facturation electronique ?",
    answer: "La facturation electronique concerne les echanges B2B entre entreprises francaises assujetties a la TVA. L'e-reporting couvre les autres transactions : ventes aux particuliers (B2C), ventes a l'international, et operations avec des entreprises en franchise de TVA. Ces donnees doivent etre transmises periodiquement a la DGFiP via une PDP ou le PPF. Les deux obligations entrent en vigueur sur le meme calendrier.",
  },
  {
    question: "Peut-on continuer a recevoir des factures papier de ses fournisseurs ?",
    answer: "Temporairement, oui. Un fournisseur peut continuer a vous envoyer des factures papier jusqu'a son echeance d'emission. Mais vous devez etre capable de recevoir des factures electroniques des le 1er septembre 2026. Pensez a verifier que votre logiciel est bien configure pour la reception.",
  },
  {
    question: "Qu'est-ce qu'une PDP et comment en choisir une ?",
    answer: "Une PDP (Plateforme de Dematerialisation Partenaire) est un operateur prive certifie par la DGFiP pour transmettre et recevoir des factures electroniques. La plupart des logiciels de facturation du marche (Pennylane, Tiime, etc.) sont soit eux-memes PDP soit connectes a une PDP. Criteres de choix : certification DGFiP officielle, integration avec votre logiciel de comptabilite, service client francophone et SLA de disponibilite.",
  },
  {
    question: "Que risque-t-on si on ne respecte pas les echeances ?",
    answer: "La sanction prevue est de 15 euros par facture non conforme, plafonnnee a 15 000 euros par an. Des lors que vous emettez des centaines de factures par an, le plafond est vite atteint. Mais au-dela de la sanction financiere, un client assujetti a la TVA peut refuser une facture non conforme et bloquer votre paiement.",
  },
  {
    question: "Freelance en portage salarial : suis-je concerne ?",
    answer: "En portage salarial, c'est la societe de portage qui emet les factures a vos clients. Vous n'etes donc pas directement concerne par l'obligation d'emission. En revanche, la societe de portage, elle, doit etre conforme. Verifiez que votre societe de portage a bien mis a jour ses processus.",
  },
]

const steps = [
  { step: '1', title: "Faites l'inventaire de vos outils", desc: 'Listez vos logiciels de facturation, comptabilite et ERP. Verifiez leur statut de certification PDP sur le site de la DGFiP.' },
  { step: '2', title: 'Choisissez votre solution conforme', desc: 'Selectionnez un outil certifie PDP ou connecte au PPF. Verifiez qu\'il genere nativement le format Factur-X et propose un archivage probatoire 10 ans.' },
  { step: '3', title: 'Configurez la reception', desc: 'Meme si votre echeance d\'emission est en 2027/2028, vous devez pouvoir recevoir des factures electroniques des septembre 2026. Configurez votre boite de reception PDP.' },
  { step: '4', title: 'Migrez vos donnees et parametrez', desc: 'Importez vos clients, produits et historique. Parametrez vos modeles de factures aux nouvelles normes. Testez la generation Factur-X sur quelques factures reelles.' },
  { step: '5', title: 'Testez et formez avant l\'echeance', desc: 'Envoyez des factures de test a vos principaux clients et fournisseurs. Formez vos equipes (comptabilite, commercial) au nouveau flux de validation et d\'envoi.' },
]

export default function GuidePage() {
  const articleJsonLd = buildComparativeJsonLd({
    name: 'Guide facturation electronique obligatoire 2026-2028',
    description: 'Guide complet sur la reforme facturation electronique : echeances, formats, PDP, micro-entrepreneurs, sanctions et mise en conformite.',
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
            Obligation legale : Reception en vigueur depuis septembre 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guide complet : la facturation electronique obligatoire en France (2026-2028)
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            Mis a jour le {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })} - lecture : 18 minutes
          </p>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
            <p className="font-bold text-primary-800 mb-2">L&apos;essentiel en 30 secondes</p>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>- <strong>Qui ?</strong> Toutes les entreprises francaises assujetties a la TVA (B2B domestique)</li>
              <li>- <strong>Reception :</strong> Obligatoire depuis le 1er sept. 2026 pour toutes les entreprises</li>
              <li>- <strong>Emission :</strong> Grandes entreprises/ETI : 1er sept. 2026 / PME-TPE : 1er sept. 2027 / Micro : 1er sept. 2028</li>
              <li>- <strong>Comment ?</strong> Via une PDP agreee ou le Portail Public de Facturation (PPF)</li>
              <li>- <strong>Format ?</strong> Factur-X (PDF enrichi), UBL ou CII - plus de simples PDF</li>
              <li>- <strong>Sanction ?</strong> 15 euros/facture non conforme, max 15 000 euros/an</li>
            </ul>
          </div>

          {/* Sommaire */}
          <div className="bg-gray-50 rounded-xl p-5 mb-8">
            <p className="font-semibold text-gray-800 mb-3">Sommaire</p>
            <ol className="space-y-1 text-sm text-primary-700">
              <li><a href="#pourquoi" className="hover:underline">1. Pourquoi cette reforme et pourquoi maintenant</a></li>
              <li><a href="#qui" className="hover:underline">2. Qui est concerne : le calendrier complet 2026-2028</a></li>
              <li><a href="#formats" className="hover:underline">3. Les formats acceptes : Factur-X, UBL, CII</a></li>
              <li><a href="#pdp-ppf" className="hover:underline">4. PDP vs PPF : quelle plateforme choisir</a></li>
              <li><a href="#ereporting" className="hover:underline">5. E-reporting : l&apos;obligation soeur de la facturation electronique</a></li>
              <li><a href="#logiciels" className="hover:underline">6. Quels logiciels sont deja conformes</a></li>
              <li><a href="#microentrepreneurs" className="hover:underline">7. Cas particulier : freelances et micro-entrepreneurs</a></li>
              <li><a href="#sanctions" className="hover:underline">8. Sanctions et risques en cas de non-conformite</a></li>
              <li><a href="#plan" className="hover:underline">9. Plan d&apos;action en 5 etapes</a></li>
              <li><a href="#faq" className="hover:underline">10. FAQ : toutes vos questions</a></li>
            </ol>
          </div>
        </div>

        <article className="space-y-10">

          <div id="pourquoi">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Pourquoi cette reforme, et pourquoi maintenant ?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              La reforme de la facturation electronique B2B en France decoule de la directive europeenne
              et de la loi de finances 2020. L&apos;objectif de l&apos;Etat est triple : lutter contre la fraude a la TVA
              (estimee a 14 milliards d&apos;euros de manque a gagner par an), moderniser les processus comptables
              des entreprises francaises, et aligner la France sur les standards europeens deja en vigueur en Italie, Espagne et Allemagne.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Concretement, chaque facture emise entre entreprises francaises sera transmise a l&apos;administration
              fiscale en temps quasi-reel via une plateforme agreee. Fini le decalage entre la facturation declaree et les paiements reels.
              La DGFiP disposera d&apos;une vision exhaustive des flux B2B, ce qui lui permettra de pre-remplir les declarations de TVA et d&apos;automatiser les controles fiscaux.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Pour les entreprises, au-dela de la contrainte de mise en conformite, les gains sont reels : reduction des delais de paiement
              (la facture arrive instantanement et est traitee automatiquement), elimination des erreurs de ressaisie, et reduction du cout de traitement d&apos;une facture
              de 10-15 euros en moyenne (facture papier) a moins de 2 euros (facture electronique).
            </p>
          </div>

          <div id="qui">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Qui est concerne : le calendrier complet 2026-2028</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La reforme s&apos;applique a toutes les entreprises assujetties a la TVA etablies en France, pour leurs transactions B2B sur le territoire francais.
              Le calendrier est progressif selon la taille de l&apos;entreprise.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-2 font-semibold">Type d&apos;entreprise</th>
                    <th className="pb-2 font-semibold">Reception</th>
                    <th className="pb-2 font-semibold">Emission</th>
                    <th className="pb-2 font-semibold">E-reporting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-2">Grandes entreprises (&gt; 5 000 salaries ou CA &gt; 1,5 Md€)</td>
                    <td className="py-2 text-orange-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                    <td className="py-2 text-red-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                    <td className="py-2 text-red-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">ETI (250-5 000 salaries)</td>
                    <td className="py-2 text-orange-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                    <td className="py-2 text-red-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                    <td className="py-2 text-red-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">PME et TPE (assujetties TVA)</td>
                    <td className="py-2 text-orange-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                    <td className="py-2 text-red-700 font-medium whitespace-nowrap">1er sept. 2027</td>
                    <td className="py-2 text-red-700 font-medium whitespace-nowrap">1er sept. 2027</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-2">Micro-entrepreneurs (assujettis TVA)</td>
                    <td className="py-2 text-orange-600 font-medium whitespace-nowrap">1er sept. 2026</td>
                    <td className="py-2 text-red-800 font-medium whitespace-nowrap">1er sept. 2028</td>
                    <td className="py-2 text-red-800 font-medium whitespace-nowrap">1er sept. 2028</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
              <strong>Important :</strong> la reception est obligatoire pour toutes les entreprises depuis le 1er septembre 2026, quelle que soit leur taille.
              Meme si votre echeance d&apos;emission est en 2027 ou 2028, vous devez deja etre en mesure de recevoir des factures electroniques de vos fournisseurs.
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              <strong>Ne sont pas concernes :</strong> les transactions B2C (ventes aux particuliers),
              les transactions avec l&apos;etranger (export, intra-UE), les transactions avec des entreprises en franchise de TVA,
              et les micro-entrepreneurs qui restent sous le seuil de franchise de TVA.
            </p>
          </div>

          <div id="formats">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Les formats acceptes : Factur-X, UBL, CII</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La reforme impose des formats structures, lisibles par les machines. Trois formats sont reconnus par la DGFiP.
              Un simple PDF, meme bien presente, ne sera plus suffisant.
            </p>
            <div className="space-y-4 my-6">
              <div className="card p-5 border-l-4 border-primary-500">
                <h3 className="font-bold">Factur-X : le format recommande pour les PME et freelances</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Un fichier PDF/A-3 hybride qui contient a la fois le visuel de la facture (lisible par l&apos;humain comme un PDF classique)
                  et les donnees XML structurees (traitees automatiquement par les logiciels). C&apos;est le format le plus simple
                  a adopter car vos clients voient un PDF exactement comme avant. Plusieurs niveaux de conformite (Minimum, Basic, EN 16931).
                </p>
                <div className="mt-2 text-xs text-primary-700 font-medium">Recommande pour les TPE, PME et freelances</div>
              </div>
              <div className="card p-5 border-l-4 border-gray-300">
                <h3 className="font-bold">UBL (Universal Business Language)</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Format XML pur, standard international ISO. Privilegie pour les echanges avec des partenaires
                  europeens et les grandes entreprises avec des systemes ERP (SAP, Oracle). Lisible uniquement par machine, necessite un visualiseur.
                </p>
                <div className="mt-2 text-xs text-gray-500 font-medium">Pour les entreprises avec des flux ERP importants ou des partenaires europeens</div>
              </div>
              <div className="card p-5 border-l-4 border-gray-300">
                <h3 className="font-bold">CII (Cross Industry Invoice)</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Format XML adapte aux echanges B2B complexes. Utilise principalement dans les secteurs
                  industriels et les grandes entreprises avec des flux de facturation importants. Base sur la norme UN/CEFACT.
                </p>
                <div className="mt-2 text-xs text-gray-500 font-medium">Principalement pour les grandes entreprises et les secteurs industriels</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              La norme europeenne EN 16931 s&apos;applique aux trois formats. La DGFiP a publie des specifications techniques detaillees sur son portail.
              Pour la grande majorite des freelances et TPE, Factur-X est le seul format a considerer : vos clients voient un PDF habituel, et les donnees structurees sont integrees de facon transparente.
            </p>
          </div>

          <div id="pdp-ppf">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. PDP vs PPF : quelle plateforme choisir ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pour transmettre et recevoir des factures electroniques, vous devez obligatoirement passer par l&apos;une de ces deux options.
              Il n&apos;est pas possible d&apos;envoyer directement une facture electronique par email, meme en Factur-X.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="card p-5 border-2 border-primary-200">
                <h3 className="font-bold mb-2">PPF : Portail Public de Facturation</h3>
                <div className="text-sm space-y-2 text-gray-600">
                  <div className="flex gap-2"><span className="text-green-500 font-bold">+</span> Gratuit</div>
                  <div className="flex gap-2"><span className="text-green-500 font-bold">+</span> Gere par l&apos;Etat (DGFiP)</div>
                  <div className="flex gap-2"><span className="text-green-500 font-bold">+</span> Acces garanti pour toutes les entreprises</div>
                  <div className="flex gap-2"><span className="text-red-500 font-bold">-</span> Fonctions de base uniquement</div>
                  <div className="flex gap-2"><span className="text-red-500 font-bold">-</span> Pas d&apos;integration comptable native</div>
                  <div className="flex gap-2"><span className="text-red-500 font-bold">-</span> Interface manuelle, pas d&apos;API</div>
                </div>
                <div className="mt-3 text-xs text-gray-500 bg-gray-50 rounded p-2">Adapte aux tres petites structures avec moins de 20 factures/mois</div>
              </div>
              <div className="card p-5 border-2 border-green-200">
                <h3 className="font-bold mb-2">PDP : Plateforme privee agreee</h3>
                <div className="text-sm space-y-2 text-gray-600">
                  <div className="flex gap-2"><span className="text-green-500 font-bold">+</span> Fonctions avancees (suivi, relances auto)</div>
                  <div className="flex gap-2"><span className="text-green-500 font-bold">+</span> Integration comptable native</div>
                  <div className="flex gap-2"><span className="text-green-500 font-bold">+</span> Automatisation des processus</div>
                  <div className="flex gap-2"><span className="text-green-500 font-bold">+</span> API et connecteurs ERP/CRM</div>
                  <div className="flex gap-2"><span className="text-red-500 font-bold">-</span> Payant (generalement inclus dans le logiciel)</div>
                </div>
                <div className="mt-3 text-xs text-gray-500 bg-gray-50 rounded p-2">Recommande pour toutes les PME et ETI avec un flux regulier de factures</div>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              La liste officielle des PDP certifiees est disponible sur le site de la DGFiP. En pratique, si vous utilisez deja un logiciel de facturation SaaS (Pennylane, Tiime, Freebe, Indy, Axonaut),
              verifiez simplement s&apos;il est PDP certifie ou s&apos;il est connecte a une PDP. La plupart des editeurs majeurs ont obtenu ou sont en cours d&apos;obtention de leur certification.
            </p>
          </div>

          <div id="ereporting">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. E-reporting : l&apos;obligation soeur de la facturation electronique</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              La reforme comporte deux volets distincts que l&apos;on confond souvent. La facturation electronique ne couvre que les transactions B2B entre entreprises francaises assujetties a la TVA.
              L&apos;e-reporting couvre tout le reste.
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-2 font-semibold">Type de transaction</th>
                    <th className="pb-2 font-semibold">Mecanisme</th>
                    <th className="pb-2 font-semibold">Transmission</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2">B2B France (TVA)</td>
                    <td className="py-2">Facturation electronique</td>
                    <td className="py-2">Facture electronique via PDP/PPF</td>
                  </tr>
                  <tr>
                    <td className="py-2">B2C (ventes aux particuliers)</td>
                    <td className="py-2">E-reporting</td>
                    <td className="py-2">Donnees agregees via PDP/PPF</td>
                  </tr>
                  <tr>
                    <td className="py-2">B2B international (export, UE)</td>
                    <td className="py-2">E-reporting</td>
                    <td className="py-2">Donnees agregees via PDP/PPF</td>
                  </tr>
                  <tr>
                    <td className="py-2">B2B franchise de TVA</td>
                    <td className="py-2">E-reporting</td>
                    <td className="py-2">Donnees agregees via PDP/PPF</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              Pour les freelances qui facturent majoritairement des entreprises francaises assujetties, l&apos;e-reporting est marginal. Mais si vous avez des clients etrangers ou particuliers,
              vous devrez transmettre les donnees de ces transactions periodiquement (toutes les semaines ou tous les mois selon le regime TVA) via votre PDP ou le PPF.
            </p>
          </div>

          <div id="logiciels">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Quels logiciels sont deja conformes ?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La certification PDP est un processus rigoureux mene par la DGFiP. Voici l&apos;etat des principaux logiciels du marche freelance/TPE au 13 novembre 2026 :
            </p>
            <div className="bg-gray-50 rounded-xl p-5 my-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-gray-200">
                    <th className="pb-2 font-semibold">Logiciel</th>
                    <th className="pb-2 font-semibold">Statut PDP</th>
                    <th className="pb-2 font-semibold">Factur-X</th>
                    <th className="pb-2 font-semibold">Reception</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 font-medium"><a href="/blog/tiime-avis-test-complet" className="text-primary-600 hover:underline">Tiime</a></td>
                    <td className="py-2 text-green-600 font-medium">Certifie PDP</td>
                    <td className="py-2 text-green-600">Oui</td>
                    <td className="py-2 text-green-600">Oui</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium"><a href="/blog/pennylane-avis-test-complet" className="text-primary-600 hover:underline">Pennylane</a></td>
                    <td className="py-2 text-green-600 font-medium">Certifie PDP</td>
                    <td className="py-2 text-green-600">Oui</td>
                    <td className="py-2 text-green-600">Oui</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium"><a href="/blog/indy-avis-test-complet" className="text-primary-600 hover:underline">Indy</a></td>
                    <td className="py-2 text-orange-600 font-medium">En cours</td>
                    <td className="py-2 text-orange-600">Partiel</td>
                    <td className="py-2 text-green-600">Oui</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium"><a href="/blog/freebe-avis-test-complet" className="text-primary-600 hover:underline">Freebe</a></td>
                    <td className="py-2 text-orange-600 font-medium">En cours</td>
                    <td className="py-2 text-orange-600">Partiel</td>
                    <td className="py-2 text-green-600">Oui</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Axonaut</td>
                    <td className="py-2 text-orange-600 font-medium">En cours</td>
                    <td className="py-2 text-green-600">Oui</td>
                    <td className="py-2 text-green-600">Oui</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium"><a href="/blog/shine-avis-test-complet" className="text-primary-600 hover:underline">Shine</a></td>
                    <td className="py-2 text-orange-600 font-medium">En cours</td>
                    <td className="py-2 text-orange-600">Partiel</td>
                    <td className="py-2 text-orange-600">Partiel</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-xs">
              Source : communications editeurs et DGFiP, novembre 2026. Verifiez aupres de votre editeur l&apos;etat exact de la certification.
              La liste officielle des PDP certifiees est sur impots.gouv.fr.
            </p>
          </div>

          <div id="microentrepreneurs">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cas particulier : freelances et micro-entrepreneurs</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              La situation des freelances depend directement de leur statut TVA, pas de leur statut juridique.
            </p>
            <div className="space-y-4 my-6">
              <div className="card p-5 border-l-4 border-orange-400">
                <h3 className="font-bold mb-2">Micro-entrepreneur en franchise de TVA</h3>
                <p className="text-gray-600 text-sm">
                  Vous etes sous les seuils (36 800 euros pour les services, 91 900 euros pour les ventes en 2026) et vos factures portent la mention "TVA non applicable - art. 293 B du CGI".
                  Vous n&apos;etes <strong>pas concerne par l&apos;obligation d&apos;emission</strong>. En revanche, vous devrez etre capable de recevoir des factures electroniques de vos fournisseurs assujettis.
                </p>
              </div>
              <div className="card p-5 border-l-4 border-red-500">
                <h3 className="font-bold mb-2">Micro-entrepreneur assujetti a la TVA</h3>
                <p className="text-gray-600 text-sm">
                  Vous avez depasse les seuils de franchise et collectez la TVA. Vous etes concerne par l&apos;obligation d&apos;emission a partir du <strong>1er septembre 2028</strong>.
                  Anticipez des maintenant en choisissant un logiciel sur la roadmap de certification PDP.
                </p>
              </div>
              <div className="card p-5 border-l-4 border-blue-400">
                <h3 className="font-bold mb-2">Freelance en SASU ou EURL (assujetti TVA)</h3>
                <p className="text-gray-600 text-sm">
                  Vous etes concerne par l&apos;obligation d&apos;emission a partir du <strong>1er septembre 2027</strong> (PME-TPE).
                  Si votre chiffre d&apos;affaires est superieur a 50 millions d&apos;euros, vous pouvez etre classe ETI et soumis des 2026, mais c&apos;est rare en freelance.
                  Privilegiez Freebe, Pennylane ou Tiime pour leur avancement sur la certification PDP.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 text-sm mt-4">
              <strong>Conseil pratique :</strong> meme si votre echeance d&apos;emission est en 2027 ou 2028, configurez maintenant votre logiciel pour la <em>reception</em>.
              Vos gros clients (grandes entreprises) vous enverront des factures electroniques des septembre 2026, et vous devez pouvoir les traiter.
            </div>
          </div>

          <div id="sanctions">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Sanctions et risques en cas de non-conformite</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Le non-respect des obligations de facturation electronique expose a deux types de risques : les sanctions legales et les blocages operationnels.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="card p-5 bg-red-50 border border-red-200">
                <h3 className="font-bold text-red-800 mb-3">Sanctions legales</h3>
                <ul className="text-sm text-red-700 space-y-2">
                  <li><strong>15 euros</strong> par facture non conforme</li>
                  <li>Plafond : <strong>15 000 euros par an</strong></li>
                  <li>Amende applicable par exercice fiscal</li>
                  <li>Controle DGFiP facilite par la traçabilite en temps reel</li>
                </ul>
              </div>
              <div className="card p-5 bg-orange-50 border border-orange-200">
                <h3 className="font-bold text-orange-800 mb-3">Risques operationnels</h3>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li>Un client assujetti peut <strong>refuser votre facture</strong> non conforme</li>
                  <li>Blocage du paiement en cas de non-conformite</li>
                  <li>Perte de clients grands comptes qui exigent la conformite</li>
                  <li>Rejet automatique par les systemes ERP des grandes entreprises</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">
              En pratique, le risque operationnel est souvent plus immediat que la sanction legale : un grand compte qui ne peut pas integrer votre facture dans son ERP
              peut simplement la rejeter et attendre que vous en envoyiez une conforme. Dans un contexte de tensions sur les delais de paiement, c&apos;est un risque concret pour votre tresorerie.
            </p>
          </div>

          <div id="plan">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Plan d&apos;action en 5 etapes</h2>
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
          <h3 className="font-bold text-lg mb-3">Pret a choisir votre logiciel conforme ?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Notre comparatif analyse 7 logiciels sur leur statut PDP, leur support Factur-X, leur tarif et leur adaptation au profil freelance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/comparatif" className="btn-primary inline-block text-center">
              Voir le comparatif des 7 logiciels
            </a>
            <a href="/blog/logiciel-facturation-freelance-2026" className="btn-secondary inline-block text-center">
              Guide : meilleur logiciel freelance 2026
            </a>
          </div>
        </div>

        <section id="faq" className="mt-16">
          <h2 className="text-2xl font-bold mb-6">10. Questions frequentes</h2>
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
                DGFiP : Portail officiel facturation electronique
              </a>
            </li>
            <li>
              <a href="https://chorus-pro.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                Chorus Pro : Portail Public de Facturation
              </a>
            </li>
            <li>
              <a href="https://bofip.impots.gouv.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                BOFIP : Bulletins officiels des finances publiques
              </a>
            </li>
            <li>
              <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000041444855" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                Legifrance : Loi de finances 2020, article 153
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
