import { CheckCircle2 } from 'lucide-react'
import { WHY } from '../data/content'
import Reveal from '../components/Reveal'

function Why() {
  return (
    <section id="pourquoi" className="bg-neutral-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Pourquoi choisir ED FORMATION ?
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {WHY.map((point, i) => (
            <Reveal key={point} delay={i * 0.06}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-navy-900/10 bg-white p-5 transition-all duration-300 hover:border-blue-500/40">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-500" />
                <p className="text-sm font-medium leading-relaxed text-navy-800">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Why