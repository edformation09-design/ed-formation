import { ArrowRight } from 'lucide-react'
import { FINAL_CTA } from '../data/content'
import Reveal from '../components/Reveal'

function FinalCta({ onOrientationClick }) {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-950 via-navy-900 to-blue-600 px-6 py-16 text-center shadow-2xl shadow-navy-900/25 sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-blue-400/20 blur-2xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {FINAL_CTA.title}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              {FINAL_CTA.text}
            </p>
            <button
              onClick={onOrientationClick}
              className="group mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-navy-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
            >
              {FINAL_CTA.cta}
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default FinalCta