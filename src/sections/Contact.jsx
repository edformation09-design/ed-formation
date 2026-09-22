import { useState } from 'react'
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { CONTACT_FORM, FORMATIONS, SITE, whatsappLink } from '../data/content'
import Reveal from '../components/Reveal'

const FIELD_STYLES =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-700/40 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15'

function getFieldStyles(error) {
  return `${FIELD_STYLES} ${
    error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/15' : 'border-navy-900/15'
  }`
}

const INFO_ITEMS = [
  { icon: Phone, label: 'Téléphone', value: SITE.contact.phone },
  { icon: MessageCircle, label: 'WhatsApp', value: SITE.contact.whatsapp },
  { icon: Mail, label: 'E-mail', value: SITE.contact.email },
  { icon: MapPin, label: 'Localisation', value: SITE.contact.address },
]

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Veuillez indiquer votre nom complet.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères.'
  }

  const normalizedPhone = values.phone.replace(/[\s.\-()]/g, '')
  if (!values.phone.trim()) {
    errors.phone = 'Veuillez indiquer votre numéro de téléphone.'
  } else if (!/^(\+?\d{9,15})$/.test(normalizedPhone)) {
    errors.phone = 'Veuillez saisir un numéro de téléphone valide.'
  }

  if (!values.formation) {
    errors.formation = 'Veuillez choisir une formation.'
  }

  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Veuillez saisir une adresse e-mail valide.'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    formation: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) {
      setErrors((errs) => ({ ...errs, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
    }
  }

  const waLink = whatsappLink(
    'Bonjour ED FORMATION, j’aimerais avoir plus d’informations sur vos formations.'
  )

  return (
    <section id="contact" className="bg-neutral-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <Reveal className="flex flex-col">
            <span className="inline-flex w-fit items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
              Contact & inscription
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {CONTACT_FORM.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-700/70">
              {CONTACT_FORM.subtitle}
            </p>

            <div className="mt-9 space-y-4">
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-white p-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-white">
                    <item.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-navy-700/50">
                      {item.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-navy-900">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-50 p-6">
              <h3 className="font-display text-lg font-bold text-navy-900">
                {CONTACT_FORM.whatsapp.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-navy-700/70">
                Le plus simple : échangez directement avec l’équipe via WhatsApp.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                <MessageCircle className="h-4.5 w-4.5" />
                {CONTACT_FORM.whatsapp.cta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            {submitted ? (
              <div className="flex h-full min-h-[460px] flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-white p-10 text-center shadow-xl shadow-emerald-500/5">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Send className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                  {CONTACT_FORM.success.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy-700/70">
                  {CONTACT_FORM.success.message}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setValues({
                      name: '',
                      phone: '',
                      email: '',
                      city: '',
                      formation: '',
                      message: '',
                    })
                  }}
                  className="mt-8 rounded-full border border-navy-900/15 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-blue-500 hover:text-blue-500"
                >
                  Envoyer une nouvelle demande
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-3xl border border-navy-900/10 bg-white p-7 shadow-xl shadow-navy-900/[0.04] sm:p-10"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-navy-900"
                    >
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Votre nom et prénom"
                      aria-invalid={!!errors.name}
                      className={getFieldStyles(errors.name)}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-navy-900"
                    >
                      Numéro de téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      placeholder="+212 6XX XXX XXX"
                      aria-invalid={!!errors.phone}
                      className={getFieldStyles(errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="formation"
                    className="mb-2 block text-sm font-semibold text-navy-900"
                  >
                    Formation souhaitée <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="formation"
                    name="formation"
                    value={values.formation}
                    onChange={handleChange}
                    aria-invalid={!!errors.formation}
                    className={`${getFieldStyles(errors.formation)} ${
                      values.formation ? '' : 'text-navy-700/40'
                    }`}
                  >
                    <option value="" disabled>
                      Sélectionnez une formation
                    </option>
                    {FORMATIONS.map((formation) => (
                      <option key={formation.id} value={formation.name}>
                        {formation.name}
                      </option>
                    ))}
                  </select>
                  {errors.formation && (
                    <p className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.formation}
                    </p>
                  )}
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-navy-900"
                    >
                      Adresse e-mail{' '}
                      <span className="font-normal text-navy-700/50">(optionnel)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="vous@exemple.com"
                      aria-invalid={!!errors.email}
                      className={getFieldStyles(errors.email)}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-semibold text-navy-900"
                    >
                      Ville{' '}
                      <span className="font-normal text-navy-700/50">(optionnel)</span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={values.city}
                      onChange={handleChange}
                      placeholder="Votre ville"
                      className={getFieldStyles()}
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-navy-900"
                  >
                    Message{' '}
                    <span className="font-normal text-navy-700/50">(optionnel)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange}
                    placeholder="Parlez-nous en quelques mots de votre objectif..."
                    className={`${getFieldStyles()} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  {CONTACT_FORM.cta}
                  <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-navy-700/50">
                  <Clock className="h-3.5 w-3.5" />
                  Nous vous recontactons sous 24h ouvrées.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact