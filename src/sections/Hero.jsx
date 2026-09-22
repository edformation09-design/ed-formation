import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, ChartNoAxesCombined, Megaphone, TrendingUp, CheckCircle2 } from 'lucide-react'
import { HERO } from '../data/content'

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute inset-0 overflow-hidden rounded-3xl border border-navy-900/10 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-600 shadow-2xl shadow-navy-900/25"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/20 blur-2xl" />
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-blue-400/20 blur-2xl" />

        <div className="relative flex h-full flex-col p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="text-[11px] font-semibold text-white/90">
                Programme Marketing Digital
              </span>
            </div>
            <span className="rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold text-navy-950">
              Projet pratique
            </span>
          </div>

          <div className="mt-6 grid gap-3">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
                  <Megaphone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs text-white/60">Campagne publicitaire</p>
                  <p className="text-sm font-bold text-white">Facebook & Instagram Ads</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                En cours
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-3 flex items-center gap-2 text-[11px] font-medium text-white/60">
                <ChartNoAxesCombined className="h-3.5 w-3.5" />
                Performance de la campagne
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {[40, 60, 45, 75, 55, 85, 100].map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    className="flex-1 rounded-sm bg-gradient-to-t from-gold-500 to-gold-400"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between rounded-2xl bg-white p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-navy-700/60">Étape du parcours</p>
                <p className="text-sm font-bold text-navy-900">Stratégie bien définie</p>
              </div>
            </div>
            <TrendingUp className="h-6 w-6 text-emerald-500" />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="absolute -bottom-6 -left-4 rounded-2xl border border-navy-900/10 bg-white p-4 shadow-xl shadow-navy-900/10 sm:-left-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-navy-950">
            <CalendarCheck className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs text-navy-700/60">Séance d’orientation</p>
            <p className="text-sm font-bold text-navy-900">Gratuite & sans engagement</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Hero({ onOrientationClick }) {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white pt-28 pb-24 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(250,204,21,0.06),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            {HERO.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-7 font-display text-4xl font-bold leading-[1.12] tracking-tight text-navy-900 sm:text-5xl lg:text-[3.3rem]"
          >
            {HERO.title.split('. ').map((part, i) => (
              <span key={i} className={i > 0 ? 'block text-blue-500' : 'block'}>
                {part}.
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-700/70 sm:text-xl"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#formations"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              {HERO.primaryCta}
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              onClick={onOrientationClick}
              className="inline-flex items-center justify-center rounded-full border border-navy-900/15 bg-white px-7 py-3.5 text-base font-semibold text-navy-900 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
            >
              {HERO.secondaryCta}
            </button>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero