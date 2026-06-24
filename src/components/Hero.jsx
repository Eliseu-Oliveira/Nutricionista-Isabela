import { motion } from 'framer-motion'
import logoSimbol from '../assets/LOGO_SIMBOLO_BELLA_SALES.png'

const ease = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-svh flex items-center overflow-hidden pt-28 pb-20 px-6 md:px-10"
    >
      {/* Signature graphic — symbol anchored bottom-right, partially bled off-canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease }}
        className="absolute -right-[12%] md:right-[2%] bottom-[-8%] md:bottom-[-4%] pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="relative">
          <img
            src={logoSimbol}
            alt=""
            className="w-[58vw] md:w-[30vw] max-w-[460px] opacity-[0.85]"
          />
          {/* Soft vinho glow behind the symbol for depth */}
          <div
            className="absolute inset-0 -z-10 blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #5B1A0A 0%, transparent 70%)' }}
          />
        </div>
      </motion.div>

      {/* Vertical rule + label, editorial detail */}
      <div className="hidden lg:flex absolute right-[26%] top-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-none">
        <span
          className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-vinho/30"
          style={{ writingMode: 'vertical-rl' }}
        >
          Bella Sales
        </span>
        <div className="w-px h-16 bg-vinho/15" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="max-w-[600px]">
          <motion.p variants={item} className="eyebrow mb-7">
            Nutricionista Clínica e Comportamental
          </motion.p>

          <motion.h1
            variants={item}
            className="section-title text-[clamp(2.2rem,5.8vw,4.6rem)] mb-6 max-w-none whitespace-normal"
          >
            Sua relação com
            <br />
            a comida pode ser
            <br />
            <em className="not-italic text-terracota">saudável e leve.</em>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display font-light italic text-[clamp(1rem,2vw,1.3rem)] text-vinho/60 mb-11 max-w-[440px] leading-relaxed"
          >
            Cuidado nutricional baseado em ciência e escuta ativa — para quem
            quer saúde de verdade, sem dietas punitivas.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#contato"
              className="focus-ring font-body text-[0.82rem] font-medium tracking-[0.1em] uppercase bg-vinho text-marfim px-7 py-[0.95rem] rounded-sm hover:bg-terracota hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_-8px_rgba(91,26,10,0.45)]"
            >
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="focus-ring font-body text-[0.82rem] font-medium tracking-[0.1em] uppercase border border-vinho/30 text-vinho px-7 py-[0.95rem] rounded-sm hover:border-vinho hover:bg-vinho/5 transition-all"
            >
              Conheça Bella
            </a>
          </motion.div>
        </div>

        {/* Stats — vertical divider style, more editorial than a generic row */}
        <motion.div
          variants={item}
          className="mt-20 flex flex-wrap gap-x-12 gap-y-6"
        >
          {[
            { n: '5+', label: 'Anos de experiência' },
            { n: '500+', label: 'Pacientes atendidas' },
            { n: '98%', label: 'de satisfação' },
          ].map((s, i) => (
            <div key={s.label} className="flex items-baseline gap-3">
              {i > 0 && <span className="hidden sm:inline w-px h-8 bg-vinho/12 mr-3" />}
              <span className="font-display font-light text-[2.2rem] leading-none text-vinho tracking-[-0.02em]">
                {s.n}
              </span>
              <span className="font-body text-[0.7rem] tracking-[0.1em] uppercase text-vinho/45 max-w-[70px] leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-6 md:left-10 flex items-center gap-3 text-[0.66rem] tracking-[0.2em] uppercase text-vinho/35 select-none"
      >
        <motion.div
          className="w-px h-10 bg-vinho/25"
          animate={{ scaleY: [1, 0.55, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
