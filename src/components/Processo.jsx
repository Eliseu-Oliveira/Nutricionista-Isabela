import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Primeiro Contato',
    desc: 'Você agenda pelo WhatsApp e escolhe horário e modalidade — online ou presencial.',
  },
  {
    num: '02',
    title: 'Anamnese Completa',
    desc: 'Na primeira consulta mapeamos seu histórico, objetivos, rotina, exames e relação com a comida.',
  },
  {
    num: '03',
    title: 'Plano Personalizado',
    desc: 'Entrego um plano alimentar feito sob medida, com orientações práticas e fáceis de seguir.',
  },
  {
    num: '04',
    title: 'Acompanhamento',
    desc: 'Retornos regulares para ajustes, suporte contínuo e evolução monitorada dos seus resultados.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Processo() {
  return (
    <section id="processo" className="bg-branco py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow mb-4">Como funciona</p>
          <h2 className="section-title text-[clamp(1.9rem,3.8vw,3rem)]">
            Do primeiro contato ao <em className="italic">resultado</em>
          </h2>
        </motion.div>

        <div className="mt-16 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[10px] left-0 right-0 h-px bg-bege" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                className="relative pt-7"
              >
                <div className="lg:hidden absolute top-0 left-0 w-full h-px bg-bege" />
                <div className="hidden lg:block absolute top-[-5px] left-0 w-3 h-3 rounded-full bg-marfim border-2 border-terracota" />
                <span className="font-body text-[0.72rem] font-medium tracking-[0.18em] uppercase text-terra-cl block mb-3">
                  {s.num}
                </span>
                <h3 className="font-display font-normal text-[1.18rem] text-vinho mb-2.5">
                  {s.title}
                </h3>
                <p className="font-body text-[0.86rem] leading-[1.85] text-vinho/55">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
