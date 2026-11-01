import type { Metadata } from 'next'

export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité de FacturationPro.fr — données collectées, droits RGPD, cookies.',
  robots: 'noindex',
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>

      <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">1. Responsable du traitement</h2>
          <p>
            GB CONSEIL (SASU, SIRET 819 337 577 00012), 81 rue Réaumur, 75002 Paris.<br />
            Contact : contact@facturationpro.fr
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">2. Données collectées</h2>
          <p>Le site FacturationPro.fr collecte les données suivantes :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li><strong>Données de navigation</strong> : pages visitées, durée de visite, source de trafic (via Umami Analytics, solution hébergée en propre, sans cookies tiers).</li>
            <li><strong>Données de performance</strong> : données agrégées et anonymisées sur les performances SEO (via Google Search Console).</li>
            <li><strong>Cookies techniques</strong> : nécessaires au bon fonctionnement du site (préférences de navigation). Aucun cookie publicitaire ou de profilage n&apos;est déposé.</li>
          </ul>
          <p className="mt-3">
            <strong>Nous ne collectons aucune donnée personnelle identifiable</strong> (nom, email, téléphone) sans votre consentement explicite.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">3. Finalités du traitement</h2>
          <ul className="space-y-1 list-disc list-inside">
            <li>Améliorer les contenus et l&apos;expérience utilisateur du site</li>
            <li>Mesurer les performances du site (trafic, pages populaires)</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">4. Base légale du traitement</h2>
          <p>Le traitement des données de navigation repose sur notre <strong>intérêt légitime</strong> (amélioration du service) et sur le <strong>consentement</strong> pour les cookies non essentiels.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">5. Partage des données</h2>
          <p>Vos données ne sont <strong>jamais vendues ni louées</strong> à des tiers. Elles peuvent être partagées avec :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>OVHcloud (hébergeur) — dans le cadre strict de la prestation d&apos;hébergement</li>
            <li>Google (Search Console) — données agrégées anonymisées uniquement</li>
          </ul>
          <p className="mt-2">Les réseaux d&apos;affiliation (AWIN) peuvent déposer un cookie de tracking lorsque vous cliquez sur un lien affilié, conformément à leurs propres politiques de confidentialité.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">6. Durée de conservation</h2>
          <p>Les données de navigation anonymisées sont conservées pendant <strong>13 mois maximum</strong>. Les données analytiques agrégées peuvent être conservées sans limite de durée.</p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">7. Vos droits (RGPD)</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit d&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit de retirer votre consentement à tout moment</li>
          </ul>
          <p className="mt-3">
            Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@facturationpro.fr" className="text-indigo-600 hover:underline">contact@facturationpro.fr</a>
          </p>
          <p className="mt-2">
            Vous pouvez également introduire une réclamation auprès de la CNIL : <a href="https://www.cnil.fr" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 mb-3">8. Cookies</h2>
          <p>Ce site utilise uniquement :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li><strong>Cookies techniques essentiels</strong> : nécessaires au fonctionnement du site (session, préférences). Pas de consentement requis.</li>
            <li><strong>Analytics Umami</strong> : solution open-source sans cookies, hébergée sur nos propres serveurs. Aucune donnée n&apos;est transmise à des tiers.</li>
          </ul>
          <p className="mt-2">Aucun cookie publicitaire, de profilage ou de tracking inter-sites n&apos;est utilisé sur ce site.</p>
        </section>

        <p className="text-xs text-gray-400 mt-8">Dernière mise à jour : novembre 2026</p>
      </div>
    </div>
  )
}
