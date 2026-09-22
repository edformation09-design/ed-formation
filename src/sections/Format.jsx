import { ArrowRight, Check } from 'lucide-react'
import { FORMATS } from '../data/content'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

function Format({ onChooseFormat }) {
  return (
    <section id="format" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Format des formations"
          title="Un format adapté à votre rythme"
          description="Deux façons de suivre une formation, selon votre objectif et vos disponibilités."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {FORMATS.map((format, i) => (
            <Reveal key={format.id} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 sm:p-10 ${
                  format.id === 'groupe'
                    ? 'border-navy-900 bg-navy-900 text-white shadow-2xl shadow-navy-900/20'
                    : 'border-navy-900/10 bg-white hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-display text-2xl font-bold ${
                      format.id === 'groupe' ? 'text-white' : 'text-navy-900'
                    }`}
                  >
                    {format.name}
                  </h3>
                  {format.id === 'groupe' && (
                    <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-bold text-navy-950">
                      Recommandé
                    </span>
                  )}
                </div>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    format.id === 'groupe' ? 'text-navy-700/80' : 'text-navy-700/70'
                  }`}
                >
                  {format.description}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {format.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          format.id === 'groupe' ? 'bg-gold-500' : 'bg-blue-50'
                        }`}
                      >
                        <Check className="h-3 w-3 text-navy-950" />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          format.id === 'groupe'
                            ? 'text-navy-700/90'
                            : 'text-navy-800'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onChooseFormat(format)}
                  className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    format.id === 'groupe'
                      ? 'bg-gold-500 text-navy-950 hover:bg-gold-400'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {format.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Format