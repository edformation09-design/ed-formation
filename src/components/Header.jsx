import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'
import Logo from './Logo'

function Header({ onOrientationClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-navy-900/10 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-blue-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={onOrientationClick}
            className="group inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Réserver une séance d’orientation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy-900 transition-colors hover:bg-navy-900/5 lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-20 z-40 bg-white transition-all duration-300 lg:hidden ${
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-8">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={`rounded-lg px-4 py-3 text-lg font-medium text-navy-800 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsOpen(false)
              onOrientationClick()
            }}
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Réserver une séance d’orientation
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header