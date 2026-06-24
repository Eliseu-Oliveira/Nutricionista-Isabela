import { motion } from 'framer-motion'
import fotoPerfil from '../assets/bella-sobre.jpeg'

const ease = [0.22, 1, 0.36, 1]

export default function Sobre() {
  return (
    <section id="sobre" className="bg-branco py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="relative"
        >
          <div
            className="aspect-[3/4] bg-bege rounded-sm overflow-hidden max-w-sm md:max-w-full mx-auto relative"
            style={{ boxShadow: '0 32px 64px -24px rgba(91,26,10,0.25)' }}
          >
            <img
              src={fotoPerfil}
              alt="Bella Sales, nutricionista"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-vinho/10" />
          </div>
          <div className="absolute bottom-7 -right-0 md:-right-7 bg-vinho text-marfim px-5 py-3 text-[0.7rem] font-medium tracking-[0.14em] uppercase shadow-[0_12px_28px_-8px_rgba(91,26,10,0.5)]">
            CRN 9 32776 · Nutricionista Registrada
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <p className="eyebrow mb-4">Sobre Bella Sales</p>
          <h2 className="section-title text-[clamp(1.9rem,3.8vw,3rem)] mb-7">
            Uma nutricionista que <em className="not-italic">ouve antes de prescrever</em>
          </h2>
          <p className="font-body text-[0.97rem] leading-[1.9] text-vinho/65 mb-4">
            Sou Bella Sales, nutricionista clínica e comportamental, apaixonada
            por ajudar pessoas a se reconectarem com o próprio corpo — sem
            culpa, sem restrição e sem sofrimento.
          </p>
          <p className="font-body text-[0.97rem] leading-[1.9] text-vinho/65 mb-9">
            Minha abordagem vai além do plano alimentar. Entendo que comer
            envolve história de vida, emoções e cultura — e é exatamente isso
            que tratamos juntos nas consultas.
          </p>

          {/* Credentials */}
          <div className="flex gap-8 md:gap-10 mb-10 flex-wrap pb-9 border-b border-bege/70">
            {[
              { n: '5+', label: 'Anos de experiência' },
              { n: '500+', label: 'Pacientes atendidas' },
              { n: '98%', label: 'Satisfação' },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-1">
                <span className="font-display font-light text-[2rem] leading-none text-vinho tracking-[-0.02em]">
                  {c.n}
                </span>
                <span className="font-body text-[0.7rem] tracking-[0.12em] uppercase text-vinho/45">
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            className="focus-ring inline-flex items-center gap-2 font-body text-[0.82rem] font-medium tracking-[0.1em] uppercase bg-vinho text-marfim px-7 py-[0.95rem] rounded-sm hover:bg-terracota hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_-8px_rgba(91,26,10,0.4)]"
          >
            Iniciar meu acompanhamento
          </a>
        </motion.div>
      </div>
    </section>
  )
}
