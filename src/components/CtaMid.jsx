import { motion } from 'framer-motion'
import fotoCta from '../assets/bella-hero.jpeg'

const ease = [0.22, 1, 0.36, 1]

export default function CtaMid() {
  return (
    <div className="relative bg-bege py-16 md:py-20 px-6 md:px-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease }}
        className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        {/* Foto, pequena, redonda — toque humano sem dominar a faixa */}
        <div
          className="hidden sm:block w-24 h-24 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0"
          style={{ boxShadow: '0 12px 28px -8px rgba(91,26,10,0.3)' }}
        >
          <img
            src={fotoCta}
            alt="Bella Sales"
            className="w-full h-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="flex-1">
          <h2 className="font-titulo uppercase text-vinho text-[clamp(1.6rem,3.5vw,2.6rem)] leading-[1.2] tracking-[0.02em]">
            Pronto(a) para cuidar de <em className="not-italic">você de verdade?</em>
          </h2>
          <p className="font-body text-[0.92rem] text-vinho/55 mt-3 max-w-md leading-relaxed">
            Primeira consulta com avaliação completa e plano de ação personalizado.
          </p>
        </div>

        <a
          href="#contato"
          className="focus-ring flex-shrink-0 font-body text-[0.82rem] font-medium tracking-[0.1em] uppercase bg-vinho text-marfim px-7 py-[0.95rem] rounded-sm hover:bg-terracota hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_-8px_rgba(91,26,10,0.35)]"
        >
          Agendar agora
        </a>
      </motion.div>
    </div>
  )
}
