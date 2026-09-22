import { METHOD } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function Method() {
  return (
    <section id="methode" className="bg-neutral-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Un parcours clair, du premier échange à la pratique"
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {METHOD.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="group relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-5xl font-bold text-blue-100 transition-colors duration-300 group-hover:text-blue-500/30">
                    {step.number}
                  </span>
                  {i < METHOD.length - 1 && (
                    <span className="h-px flex-1 bg-navy-900/10" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-700/70">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Method