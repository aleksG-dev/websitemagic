import { useMemo } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Sparkle } from '../Icons'

// A scattering of slow, twinkling sparkles — the "magic" texture. Purely
// decorative (aria-hidden) and skipped entirely under reduced motion.
export default function Sparkles({ count = 16, className = '' }) {
  const reduce = useReducedMotion()

  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 7 + Math.random() * 15,
        delay: Math.random() * 6,
        dur: 4 + Math.random() * 5,
        gold: Math.random() > 0.6,
      })),
    [count],
  )

  if (reduce) return null

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {items.map((s) => (
        <span
          key={s.id}
          className="sparkle absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            color: s.gold ? 'var(--color-gold)' : 'var(--color-magic-light)',
            '--dur': `${s.dur}s`,
            animationDelay: `${s.delay}s`,
          }}
        >
          <Sparkle size={s.size} />
        </span>
      ))}
    </div>
  )
}
