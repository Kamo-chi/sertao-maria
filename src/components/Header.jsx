import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="mx-auto px-6 py-4 flex items-center justify-between relative max-w-screen-2xl">
        <a href="#" className="text-xl md:text-2xl font-bold whitespace-nowrap">Sertão Maria</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 items-center">
            <li><a href="#personagens" className="text-sm md:text-base whitespace-nowrap">Personagens</a></li>
            <li><a href="#noticias" className="text-sm md:text-base whitespace-nowrap">Notícias</a></li>
            <li><a href="#parcerias" className="text-sm md:text-base whitespace-nowrap">Parcerias</a></li>
            <li><a href="#premiacoes" className="text-sm md:text-base whitespace-nowrap">Premiações</a></li>
            <li><a href="#sobre-nos" className="text-sm md:text-base whitespace-nowrap">Sobre Nós</a></li>
            <li><a href="#contato" className="text-sm md:text-base whitespace-nowrap">Contato</a></li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Abrir menu</span>
            {/* simple hamburger icon */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu (dropdown) */}
        {open && (
          <div id="mobile-menu" className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
            <div className="px-4 py-3">
              <ul className="flex flex-col gap-2">
                <li><a onClick={() => setOpen(false)} href="#personagens" className="block text-sm md:text-base">Personagens</a></li>
                <li><a onClick={() => setOpen(false)} href="#noticias" className="block text-sm md:text-base">Notícias</a></li>
                <li><a onClick={() => setOpen(false)} href="#parcerias" className="block text-sm md:text-base">Parcerias</a></li>
                <li><a onClick={() => setOpen(false)} href="#premiacoes" className="block text-sm md:text-base">Premiações</a></li>
                <li><a onClick={() => setOpen(false)} href="#sobre-nos" className="block text-sm md:text-base">Sobre Nós</a></li>
                <li><a onClick={() => setOpen(false)} href="#contato" className="block text-sm md:text-base">Contato</a></li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
