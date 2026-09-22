import { ABOUT, SITE } from '../data/content'
import Reveal from '../components/Reveal'

function About() {
  return (
    <section id="a-propos" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal className="flex flex-col items-start gap-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              {SITE.name}
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {ABOUT.title}
            </h2>
            {ABOUT.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-xl text-base leading-relaxed text-navy-700/70 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-xl shadow-navy-900/10">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-900">
                  <span className="font-display text-2xl font-bold text-white">ED</span>
                </span>
                <div className="px-2">
                  <p className="font-display text-lg font-bold text-navy-900">
                    {SITE.name}
                  </p>
                  <p className="text-sm font-medium text-blue-500">{SITE.slogan}</p>
                </div>
              </div>

              <div className="w-full rounded-2xl bg-gradient-to-br from-navy-900 to-blue-600 p-6 text-white sm:p-8">
                <h3 className="font-display text-lg font-bold">
                  La pratique d’abord
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  Chaque module est pensé pour être appliqué : exercices, cas
                  concrets et mises en situation professionnelle.
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold-500" />
                  <span className="h-2 w-2 rounded-full bg-gold-500/70" />
                  <span className="h-2 w-2 rounded-full bg-gold-500/40" />
                  <span className="text-xs font-medium text-white/70">
                    Apprentissage orienté résultat
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About