import { motion } from 'framer-motion'

const cards = [
  {
    num: '01',
    title: 'Nutrição Clínica',
    desc: 'Avaliação completa do estado nutricional, exames laboratoriais e condutas baseadas em evidências para cada condição de saúde.',
  },
  {
    num: '02',
    title: 'Comportamental',
    desc: 'Identificação dos gatilhos emocionais e comportamentos que influenciam a sua relação com a comida — e estratégias práticas para mudá-los.',
  },
  {
    num: '03',
    title: 'Plano Individualizado',
    desc: 'Nenhum plano alimentar é igual ao outro. Seu corpo, sua rotina e suas preferências são o ponto de partida, sempre.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Abordagem() {
  return (
    <section id="abordagem" className="bg-marfim py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow mb-4">Como trabalho</p>
          <h2 className="section-title text-[clamp(1.9rem,3.8vw,3rem)] max-w-xl">
            Uma abordagem <em className="not-italic">que vai além do prato</em>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="group relative bg-branco p-9 md:p-10 rounded-sm border border-vinho/[0.06] hover:border-vinho/15 transition-all duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: '0 1px 2px rgba(91,26,10,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 24px 48px -16px rgba(91,26,10,0.18)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 2px rgba(91,26,10,0.04)'
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-display font-light text-[3.2rem] leading-none text-bege group-hover:text-vinho/15 transition-colors duration-300">
                  {c.num}
                </span>
                <div className="w-9 h-9 rounded-full border border-vinho/10 group-hover:border-terracota/40 group-hover:bg-terracota/5 transition-all duration-300 flex items-center justify-center mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-terra-cl/40 group-hover:bg-terracota transition-colors duration-300" />
                </div>
              </div>
              <h3 className="font-body font-semibold text-[1.2rem] text-vinho mb-3">
                {c.title}
              </h3>
              <p className="font-body text-[0.89rem] leading-[1.85] text-vinho/55">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
