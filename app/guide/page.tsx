import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide complet',
  description: 'Guide expert pour bien choisir — tout ce que vous devez savoir avant de décider',
}

export default function GuidePage() {
  return (
    <div className="section max-w-3xl">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Guide complet</h1>
        <p className="text-gray-600 text-lg">
          Tout ce que vous devez savoir pour faire le bon choix, expliqué simplement.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Pourquoi ce guide ?</h2>
          <p className="text-gray-700 leading-relaxed">
            Face à une offre pléthorique, il est difficile de s&apos;y retrouver.
            Ce guide vous donne les clés pour évaluer objectivement chaque solution
            et trouver celle qui correspond à votre situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Les critères essentiels</h2>
          <div className="space-y-4">
            {[
              { title: '1. Vos besoins réels', desc: 'Avant tout, définissez précisément ce dont vous avez besoin. Une solution sur-dimensionnée coûte cher ; une solution sous-dimensionnée vous freinera.' },
              { title: '2. Le rapport qualité/prix', desc: 'Comparez le coût total de possession, pas seulement le tarif affiché. Frais cachés, coûts de formation, support payant...' },
              { title: '3. La facilité d\'utilisation', desc: 'Une solution que vous n\'utilisez pas est une solution inutile. Privilégiez l\'ergonomie et la prise en main rapide.' },
              { title: '4. L\'évolutivité', desc: 'Pensez à long terme. La solution doit pouvoir grandir avec vous sans changement majeur d\'infrastructure.' },
              { title: '5. Le support et la communauté', desc: 'En cas de problème, un support réactif et une communauté active font toute la différence.' },
            ].map((item) => (
              <div key={item.title} className="card p-5">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Notre méthode d&apos;évaluation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Chaque solution est testée selon un protocole rigoureux :
          </p>
          <ul className="space-y-2">
            {[
              'Test en conditions réelles sur 30 jours minimum',
              'Évaluation par plusieurs profils d\'utilisateurs',
              'Comparaison sur 20+ critères pondérés',
              'Vérification des avis utilisateurs sur les principales plateformes',
              'Mise à jour trimestrielle des données',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <span className="text-primary-600 mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 text-center">
          <h3 className="font-bold text-xl mb-2">Prêt à choisir ?</h3>
          <p className="text-gray-600 mb-4">Consultez notre comparatif pour une vue d&apos;ensemble complète.</p>
          <a href="/comparatif" className="btn-primary inline-block">
            Voir le comparatif →
          </a>
        </div>
      </div>
    </div>
  )
}
