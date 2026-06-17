import { Sparkle } from '../Icons'

// An endless, slow-drifting band of words (the trades I build for). Pauses on
// hover. Decorative kinetic texture — aria-hidden. The track holds two
// identical sets so the -50% loop is perfectly seamless.
export default function Marquee({ items, className = '' }) {
  const renderSet = (prefix) =>
    items.map((label, i) => (
      <span key={`${prefix}-${i}`} className="flex items-center">
        <span className="px-7 font-display text-3xl font-bold tracking-tight text-ink/25 sm:px-10 sm:text-5xl">
          {label}
        </span>
        <Sparkle className="shrink-0 text-gold/50" size={18} />
      </span>
    ))

  return (
    <div
      className={`marquee group relative flex overflow-hidden py-8 ${className}`}
      aria-hidden="true"
    >
      {/* soft edge fades so words drift in/out instead of hard-cutting */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
      <div className="marquee-track flex shrink-0 items-center">
        {renderSet('a')}
        {renderSet('b')}
      </div>
    </div>
  )
}
