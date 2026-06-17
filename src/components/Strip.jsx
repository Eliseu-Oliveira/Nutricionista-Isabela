const items = [
  'Nutrição Clínica',
  'Abordagem Comportamental',
  'Online & Presencial',
  'Sem dietas restritivas',
  'Escuta ativa',
]

export default function Strip() {
  return (
    <div className="bg-vinho border-y border-marfim/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3.5 overflow-x-auto">
        <div className="flex items-center gap-8 md:gap-12 whitespace-nowrap w-max md:w-full md:justify-between">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-body text-[0.72rem] font-medium tracking-[0.15em] uppercase text-marfim/75"
            >
              <span className="w-1 h-1 rounded-full bg-terra-cl flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
