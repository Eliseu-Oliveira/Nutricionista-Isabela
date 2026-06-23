import { motion } from 'framer-motion'

const depoimentos = [
  {
    text: 'Finalmente encontrei uma profissional que me ouviu de verdade. Em 3 meses minha relação com a comida mudou completamente, sem nenhuma dieta restritiva.',
    name: 'Ana Paula M.',
    since: 'Paciente há 8 meses',
  },
  {
    text: 'Perdi 12 kg de forma saudável e sustentável. Mais do que o resultado, aprendi a me relacionar melhor comigo mesma e com o que eu como.',
    name: 'Camila R.',
    since: 'Paciente há 1 ano',
  },
  {
    text: 'A Bella tem uma abordagem diferente de tudo que já fiz. Humana, acolhedora e cientificamente embasada. Me sinto cuidada de verdade.',
    name: 'Fernanda C.',
    since: 'Paciente há 6 meses',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-marfim py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow mb-4">Depoimentos</p>
          <h2 className="section-title text-[clamp(1.9rem,3.8vw,3rem)]">
            O que minhas pacientes <em className="not-italic">dizem</em>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="bg-branco p-8 md:p-9 relative rounded-sm border border-vinho/[0.06]"
              style={{ boxShadow: '0 4px 24px -8px rgba(91,26,10,0.06)' }}
            >
              <span
                className="font-display text-[5rem] leading-[0.6] text-bege absolute top-6 left-7 select-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="font-display font-light italic text-[1.02rem] leading-[1.8] text-vinho/70 mt-8 mb-6 relative z-10">
                {d.text}
              </p>
              <div className="pt-4 border-t border-bege/70">
                <strong className="font-body text-[0.82rem] font-medium tracking-[0.05em] text-vinho block">
                  {d.name}
                </strong>
                <span className="font-body text-[0.72rem] text-vinho/45">
                  {d.since}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
