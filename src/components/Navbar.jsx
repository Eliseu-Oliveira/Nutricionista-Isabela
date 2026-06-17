import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoHorizontal from '../assets/LOGO_HORIZONTAL_BELLA_SALES.png'

const links = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_24px_rgba(91,26,10,0.10)]' : ''
      }`}
      style={{
        background: 'rgba(243,238,223,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(91,26,10,0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[70px]">
        {/* Logo */}
        <a href="#inicio" onClick={() => handleLink('#inicio')}>
          <img src={logoHorizontal} alt="Bella Sales" className="h-8 md:h-9" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleLink(l.href)}
                className="group relative font-body text-[0.78rem] font-medium tracking-[0.14em] uppercase text-vinho opacity-65 hover:opacity-100 transition-opacity focus-ring py-1"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-terracota group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleLink('#contato')}
              className="focus-ring font-body text-[0.78rem] font-medium tracking-[0.1em] uppercase bg-vinho text-marfim px-5 py-2.5 rounded-sm hover:bg-terracota hover:-translate-y-0.5 transition-all shadow-[0_6px_16px_-6px_rgba(91,26,10,0.4)]"
            >
              Agendar Consulta
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-vinho p-1"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-80 border-t border-vinho/10' : 'max-h-0'
        }`}
        style={{ background: 'rgba(243,238,223,0.97)' }}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => handleLink(l.href)}
                className="font-body text-sm font-medium tracking-widest uppercase text-vinho opacity-70 hover:opacity-100 transition-opacity w-full text-left"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => handleLink('#contato')}
              className="w-full font-body text-sm font-medium tracking-widest uppercase bg-vinho text-marfim px-5 py-3 rounded-sm hover:bg-terracota transition-colors text-center"
            >
              Agendar Consulta
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
