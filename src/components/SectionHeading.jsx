import Reveal from './Reveal'

function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignment =
    align === 'center'
      ? 'mx-auto items-center text-center'
      : 'items-start text-left'

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex w-fit items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy-600">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-navy-700/70 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading