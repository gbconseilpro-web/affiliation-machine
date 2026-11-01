'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/comparatif', label: 'Comparatif logiciels' },
  { href: '/guide', label: 'Guide' },
  { href: '/blog', label: 'Blog' },
  { href: '/auteur', label: 'À propos' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Ferme le menu au changement de page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Empêche le scroll quand menu ouvert
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="md:hidden">
      {/* Bouton burger */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={open}
        className="flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span
          className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`}
        />
      </button>

      {/* Overlay + menu déroulant */}
      {open && (
        <>
          {/* Fond semi-transparent */}
          <div
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Panneau nav */}
          <nav className="fixed top-[57px] left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-md">
            <ul className="flex flex-col">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`block px-6 py-4 text-base font-medium border-b border-gray-100 transition-colors ${
                      pathname === href
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </div>
  )
}
