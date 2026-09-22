function Logo({ variant = 'dark' }) {
  const isLight = variant === 'light'
  return (
    <a href="#accueil" className="group flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-900 transition-colors duration-300 group-hover:bg-blue-500">
        <span className="font-display text-sm font-bold tracking-tight text-white">
          ED
        </span>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-base font-bold tracking-tight ${
            isLight ? 'text-white' : 'text-navy-900'
          }`}
        >
          ED FORMATION
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span
            className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${
              isLight ? 'text-navy-700/80' : 'text-navy-600/70'
            }`}
          >
            Apprenez. Créez.
          </span>
        </span>
      </span>
    </a>
  )
}

export default Logo