'use client'

export default function LeadMagnetForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Votre nom *</label>
        <input
          type="text"
          placeholder="Renseignez votre nom"
          className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Votre prénom *</label>
        <input
          type="text"
          placeholder="Renseignez votre prénom"
          className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Votre email professionnel *</label>
        <input
          type="email"
          placeholder="exemple@votremail.fr"
          className="w-full border-b-2 border-gray-200 focus:border-indigo-500 outline-none py-2 text-gray-800 placeholder-gray-400 bg-transparent transition-colors"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold py-4 rounded-full text-base transition-colors mt-2"
      >
        Télécharger le comparatif gratuit
      </button>
      <p className="text-xs text-gray-400 text-center">Sans engagement, données protégées RGPD</p>
    </form>
  )
}
