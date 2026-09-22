import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowRight, BrainCircuit, Clapperboard, Megaphone, PenTool, ShoppingCart } from 'lucide-react'
import { FORMATIONS } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import FormationModal from '../components/FormationModal'
import Reveal from '../components/Reveal'

const ICONS = {
  Megaphone,
  ShoppingCart,
  PenTool,
  Clapperboard,
  BrainCircuit,
}

function Formations() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="formations" className="bg-neutral-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Nos formations"
          title="Développez des compétences concrètes et directement applicables dans le monde professionnel."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FORMATIONS.map((formation, i) => {
            const Icon = ICONS[formation.icon]
            return (
              <Reveal key={formation.id} delay={i * 0.07}>
                <div className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-blue-500">
                    {Icon && <Icon className="h-5.5 w-5.5" />}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                    {formation.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-navy-700/70">
                    {formation.description}
                  </p>
                  <button
                    onClick={() => setSelected(formation)}
                    className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-blue-500 transition-colors hover:text-blue-600"
                  >
                    Voir le programme
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </Reveal>
            )
          })}
        </div>

        <AnimatePresence>
          {selected && (
            <FormationModal formation={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Formations