import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-[#FFFFFF] to-[#D7B784] shadow py-2">
      <div className="mx-auto flex items-center justify-between relative max-w-screen-2xl">
        <Link to="/" className="inline-flex items-center p-0 h-10 md:h-16 flex-none" aria-label="Ir para a página inicial">
          <img src="/images/Logo_header.svg" alt="Sertão Maria" className="block h-10 md:h-16 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
            <ul className="flex gap-6 items-center">
            <li><Link to="/#personagens" className="text-sm md:text-base whitespace-nowrap">Personagens</Link></li>
            <li><Link to="/noticias" className="text-sm md:text-base whitespace-nowrap">Notícias</Link></li>
            <li><Link to="/#parcerias" className="text-sm md:text-base whitespace-nowrap">Parcerias</Link></li>
            <li><Link to="/#premiacoes" className="text-sm md:text-base whitespace-nowrap">Premiações</Link></li>
            <li><Link to="/sobre" className="text-sm md:text-base whitespace-nowrap">Sobre Nós</Link></li>
            <li><Link to="/#contato" className="text-sm md:text-base whitespace-nowrap">Contato</Link></li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
          <div id="mobile-menu" className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-40">
            <div className="px-4 py-3">
              <ul className="flex flex-col gap-2">
                <li><Link onClick={() => setOpen(false)} to="/#personagens" className="block text-sm md:text-base">Personagens</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/noticias" className="block text-sm md:text-base">Notícias</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/#parcerias" className="block text-sm md:text-base">Parcerias</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/#premiacoes" className="block text-sm md:text-base">Premiações</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/sobre" className="block text-sm md:text-base">Sobre Nós</Link></li>
                <li><Link onClick={() => setOpen(false)} to="/#contato" className="block text-sm md:text-base">Contato</Link></li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
