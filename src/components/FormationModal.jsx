import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'

function FormationModal({ formation, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-navy-950/50 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
      >
        <div className="flex items-center justify-between border-b border-navy-900/10 bg-gradient-to-r from-navy-900 to-blue-600 px-6 py-5 sm:px-8">
          <div>
            <p className="font-display text-sm font-semibold text-gold-400">
              Programme de la formation
            </p>
            <h3 className="font-display text-2xl font-bold text-white">
              {formation.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          {formation.program.map((module) => (
            <div key={module.part} className="mb-7 last:mb-0">
              <h4 className="flex items-center gap-2.5 font-display text-base font-bold text-navy-900">
                <span className="h-2 w-2 rounded-full bg-gold-500" />
                {module.part}
              </h4>
              <ul className="mt-3.5 grid gap-2.5 pl-4">
                {module.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span className="text-sm leading-relaxed text-navy-800">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-navy-900/10 bg-neutral-50 px-6 py-4 sm:px-8">
          <a
            href="#contact"
            onClick={onClose}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
          >
            M’inscrire à cette formation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FormationModal