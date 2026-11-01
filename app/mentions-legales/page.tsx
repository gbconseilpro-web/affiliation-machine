import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site FacturationPro.fr : éditeur, hébergeur, propriété intellectuelle.',
  robots: 'noindex',
}

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Mentions légales</h1>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">1. Éditeur du site</h2>
          <p>Le site FacturationPro.fr est édité par :</p>
          <p className="mt-2">
            <strong>GB CONSEIL</strong>, SASU au capital de 1 000€<br />
            SIRET : 819 337 577 00012<br />
            Siège social : 81 rue Réaumur, 75002 Paris<br />
            Adresse email : contact@facturationpro.fr
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">2. Directeur de la publication</h2>
          <p>Guillaume Berthier, en qualité de représentant légal de GB CONSEIL.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">3. Hébergement</h2>
          <p>
            Ce site est hébergé sur un serveur VPS OVHcloud :<br />
            <strong>OVH SAS</strong><br />
            2 rue Kellermann, 59100 Roubaix<br />
            RCS Roubaix-Tourcoing 424 761 419 00045<br />
            <a href="https://www.ovhcloud.com" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">www.ovhcloud.com</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">4. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus présents sur FacturationPro.fr (textes, images, logos, infographies) sont la propriété exclusive de GB CONSEIL ou de leurs auteurs respectifs, et sont protégés par le droit d&apos;auteur (Code de la Propriété Intellectuelle).
          </p>
          <p className="mt-2">
            Toute reproduction, même partielle, sans autorisation préalable et écrite est strictement interdite, à l&apos;exception des usages expressément autorisés par la loi.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">5. Liens affiliés</h2>
          <p>
            Ce site contient des liens affiliés vers des logiciels de facturation. Lorsque vous cliquez sur ces liens et souscrivez à un abonnement, FacturationPro perçoit une commission de la part de l&apos;éditeur du logiciel. Cette commission est sans surcoût pour vous et permet de financer la création et la mise à jour des contenus du site.
          </p>
          <p className="mt-2">
            Les partenaires affiliés actuels incluent notamment Freebe (réseau AWIN) et d&apos;autres logiciels listés dans notre comparatif. Notre politique éditoriale reste indépendante de ces partenariats.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">6. Limitation de responsabilité</h2>
          <p>
            Les informations publiées sur FacturationPro.fr sont données à titre informatif et ne constituent pas des conseils juridiques ou comptables. Pour toute question relative à votre situation fiscale ou comptable, nous vous recommandons de consulter un professionnel qualifié.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">7. Données personnelles</h2>
          <p>
            Pour toute information concernant le traitement de vos données personnelles, consultez notre <a href="/politique-confidentialite" className="text-indigo-600 hover:underline">Politique de confidentialité</a>.
          </p>
        </section>

        <p className="text-xs text-gray-400 mt-8">Dernière mise à jour : novembre 2026</p>
      </div>
    </div>
  )
}
