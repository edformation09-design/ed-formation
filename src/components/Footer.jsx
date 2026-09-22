import { Mail, MessageCircle, Phone } from 'lucide-react'
import { NAV_LINKS, SITE, whatsappLink } from '../data/content'
import Logo from '../components/Logo'

function FacebookIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  const waLink = whatsappLink(
    'Bonjour ED FORMATION, j’aimerais avoir plus d’informations sur vos formations.'
  )

  const contactItems = [
    { icon: Phone, label: SITE.contact.phone, href: `tel:${SITE.contact.phone.replace(/\s/g, '')}` },
    { icon: MessageCircle, label: SITE.contact.whatsapp, href: waLink },
    { icon: Mail, label: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
  ]

  const socialItems = [
    { icon: FacebookIcon, label: 'Facebook', href: SITE.socials.facebook },
    { icon: InstagramIcon, label: 'Instagram', href: SITE.socials.instagram },
  ]

  return (
    <footer className="bg-navy-950 pt-16 pb-8 text-navy-700/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 font-display text-sm font-semibold text-white">
              {SITE.slogan}
            </p>
            <p className="mt-3 text-sm leading-relaxed">
              Centre de formation au Maroc. Des formations pratiques en
              Marketing Digital, E-commerce, Graphic Design, Montage Vidéo et
              Intelligence Artificielle.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 text-sm transition-colors hover:text-white"
                    {...(item.href.startsWith('https')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    <item.icon className="h-4 w-4 shrink-0 text-gold-500" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Suivez-nous
            </h3>
            <div className="mt-5 flex gap-3">
              {socialItems.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-700/40 text-navy-700/60 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-navy-950"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed">
              Casablanca, Maroc
              <br />
              Réponse sous 24h ouvrées.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-navy-700/30 pt-8 sm:flex-row">
          <p className="text-xs">
            © {year} {SITE.name} — Tous droits réservés.
          </p>
          <p className="font-display text-xs font-semibold text-white/70">
            {SITE.slogan}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer