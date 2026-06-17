import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Como funciona o acompanhamento  online?',
    a: 'A consulta online é realizada por videochamada (via Google Meet), com a mesma qualidade e atenção do atendimento presencial, o que muda é somente a avaliação física, no online eu ensino o paciente a fazer em casa. O plano alimentar é enviado via grupo de acompanhamento, onde será apresentado e discutido sempre e podendo ser feito mudanças durante todo o tempo do acompanhamento.',
  },
  {
    q: 'Qual a duração de cada acompanhamento ?',
    a: 'A primeira reunião do acompanhamento tem duração de 60 a 90 minutos.',
  },
  {
    q: 'A nutrição comportamental substitui a psicologia?',
    a: 'Não. A nutrição comportamental trabalha especificamente a relação com a comida, mas não substitui o acompanhamento psicológico. Em muitos casos, o trabalho em conjunto potencializa os resultados.',
  },
  {
    q: 'Com que frequência devo retornar?',
    a: 'Nos primeiros meses, retornos mensais ou trimestrais são recomendados. Com a evolução, o acompanhamento pode se espaçar conforme a sua necessidade.',
  },
  {
    q: 'Atende plano de saúde?',
    a: 'No momento o atendimento é particular. Emito recibo para reembolso junto ao plano de saúde, conforme a cobertura de cada operadora. Entre em contato para saber mais.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="relative bg-vinho py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] translate-y-1/3 -translate-x-1/4 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(228,211,191,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="eyebrow mb-4 text-bege before:bg-bege">Dúvidas frequentes</p>
            <h2 className="font-titulo text-marfim text-[clamp(1.9rem,3.8vw,3rem)] leading-[1.08] tracking-[0.01em]">
              Perguntas <em className="font-display italic">comuns</em>
            </h2>
            <p className="font-body text-[0.92rem] text-marfim/45 mt-6 leading-[1.85] max-w-xs">
              Tire suas dúvidas antes de agendar. Se não encontrar sua
              pergunta, entre em contato direto pelo WhatsApp.
            </p>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex flex-col"
          >
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-marfim/15">
                <button
                  onClick={() => toggle(i)}
                  className="focus-ring w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-titulo text-[1.05rem] text-marfim">
                    {f.q}
                  </span>
                  <Plus
                    size={18}
                    strokeWidth={1.5}
                    className={`flex-shrink-0 text-marfim/50 transition-transform duration-300 ${
                      open === i ? 'rotate-45 text-marfim/90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    open === i ? 'max-h-48 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="font-body text-[0.88rem] leading-[1.85] text-marfim/55">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
