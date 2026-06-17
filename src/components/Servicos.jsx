import { motion } from 'framer-motion'
import { Sun, Heart, ClipboardList, Sparkles } from 'lucide-react'

const servicos = [
  {
    Icon: Sun,
    title: 'Consulta de Nutrição Clínica',
    desc: 'Avaliação completa do estado de saúde, histórico alimentar e objetivos. Disponível online ou presencial.',
  },
  {
    Icon: Heart,
    title: 'Nutrição Comportamental',
    desc: 'Trabalho com a relação emocional com a comida, comer compulsivo, restrição cognitiva e muito mais.',
  },
  {
    Icon: ClipboardList,
    title: 'Plano Alimentar Personalizado',
    desc: 'Cardápios adaptados à sua rotina, preferências e objetivos, com foco em praticidade e prazer.',
  },
  {
    Icon: Sparkles,
    title: 'Reeducação Alimentar',
    desc: 'Processo contínuo de transformação de hábitos, sem promessas milagrosas e com resultados duradouros.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="relative bg-vinho py-24 md:py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* Subtle radial depth */}
      <div
        className="absolute top-0 right-0 w-[50vw] h-[50vw] -translate-y-1/3 translate-x-1/4 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(228,211,191,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <p className="eyebrow mb-4 text-bege before:bg-bege">Serviços</p>
            <h2 className="font-titulo text-marfim text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.08] tracking-[0.01em]">
              O que ofereço
            </h2>
          </div>
          <p className="font-body text-[0.88rem] text-marfim/45 max-w-xs leading-relaxed">
            Cada modalidade pode ser combinada conforme sua necessidade —
            converse comigo para montarmos o melhor caminho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
          {servicos.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
              className="group flex gap-5 p-8 md:p-10 border-t border-marfim/[0.08] first:border-t md:[&:nth-child(-n+2)]:border-t md:[&:nth-child(n+3)]:border-t hover:bg-marfim/[0.035] transition-colors duration-300"
            >
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center border border-marfim/20 rounded-full group-hover:border-bege/60 group-hover:bg-bege/[0.08] transition-all duration-300">
                <Icon size={18} className="text-marfim/75 group-hover:text-bege transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-titulo text-[1.2rem] text-marfim mb-2.5">
                  {title}
                </h3>
                <p className="font-body text-[0.87rem] leading-[1.8] text-marfim/50">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
