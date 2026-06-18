import { useEffect, useState } from 'react'

/**
 * Short branded intro: a 0→100 counter that wipes up to reveal the page.
 * Skipped instantly for prefers-reduced-motion.
 */
export default function Preloader() {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const [pct, setPct] = useState(0)
  const [gone, setGone] = useState(reduce)

  useEffect(() => {
    if (reduce) return
    let v = 0
    const id = setInterval(() => {
      v = Math.min(100, v + Math.random() * 13 + 7)
      setPct(Math.round(v))
      if (v >= 100) {
        clearInterval(id)
        setTimeout(() => setGone(true), 480)
      }
    }, 85)
    return () => clearInterval(id)
  }, [reduce])

  if (gone) return null

  return (
    <div
      className={`preloader${pct >= 100 ? ' preloader--out' : ''}`}
      aria-hidden="true"
    >
      <div className="preloader__brand">
        Website Magic <span className="text-gold">✦</span>
      </div>
      <div className="preloader__bar">
        <i style={{ width: pct + '%' }} />
      </div>
      <div className="preloader__pct font-mono">{pct}</div>
    </div>
  )
}
