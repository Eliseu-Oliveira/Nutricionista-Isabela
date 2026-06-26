import { motion } from 'framer-motion'
import logoSimbol from '../assets/LOGO_SIMBOLO_BELLA_SALES.png'
import fotoLifestyle from '../assets/bella-lifestyle.jpeg'

const ease = [0.22, 1, 0.36, 1]

export default function Manifesto() {
  return (
    <section className="relative bg-[#3D1207] py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      {/* Símbolo de marca, grande, ao fundo */}
      <img
        src={logoSimbol}
        alt=""
        aria-hidden="true"
        className="absolute right-[-8%] md:right-[2%] top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          width: 'min(620px, 64vw)',
          opacity: 0.16,
          filter: 'brightness(0) invert(1)',
        }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16 items-center">
        {/* Foto, pequena, lateral — presença humana sem dominar a composição */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="hidden lg:block"
        >
          <div
            className="aspect-[3/4] rounded-sm overflow-hidden"
            style={{ boxShadow: '0 24px 56px -16px rgba(0,0,0,0.5)' }}
          >
            <img
              src={fotoLifestyle}
              alt="Bella Sales"
              className="w-full h-full object-cover scale-125"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="relative text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <span className="w-12 h-px bg-marfim/30" />
          </div>

          <p className="font-titulo uppercase text-marfim text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.45] tracking-[0.02em]">
            Transformando conhecimento em liberdade
            <br />
            e cuidado em reencontro.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <span className="w-12 h-px bg-marfim/30" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
