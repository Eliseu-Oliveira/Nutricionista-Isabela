import { MapPin } from 'lucide-react'
import logoSimbol from '../assets/LOGO_SIMBOLO_BELLA_SALES.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-vinho py-9 px-6 md:px-10 border-t border-marfim/[0.06]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5 md:gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2.5">
            <img
              src={logoSimbol}
              alt=""
              className="h-6 brightness-0 invert opacity-70"
              loading="lazy"
              decoding="async"
            />
            <span className="font-titulo uppercase text-marfim/70 text-[0.95rem] tracking-[0.02em] leading-none">
              Bella Sales
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-body text-[0.7rem] text-marfim/35 tracking-[0.04em]">
            <MapPin size={12} strokeWidth={1.8} />
            Uberlândia, MG · Atendimento presencial e online
          </span>
        </div>

        <ul className="flex flex-wrap gap-5 md:gap-8">
          {[
            { label: 'Sobre', href: '#sobre' },
            { label: 'Serviços', href: '#servicos' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Contato', href: '#contato' },
          ].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="focus-ring font-body text-[0.72rem] tracking-[0.12em] uppercase text-marfim/40 hover:text-marfim/85 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="font-body text-[0.68rem] text-marfim/25 tracking-[0.06em]">
          © {year} Bella Sales · Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}
