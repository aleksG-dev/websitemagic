import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Buttery smooth scroll (Lenis) + a very subtle scroll-velocity skew on the
 * main content — the "premium" feel, but disabled entirely for users who
 * prefer reduced motion. No layout cost: pure transform.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    const main = document.getElementById('main')
    let raf

    const loop = (t) => {
      lenis.raf(t)
      if (main) {
        const v = Math.max(-1.6, Math.min(1.6, (lenis.velocity || 0) * 0.2))
        main.style.transform = `skewY(${v.toFixed(3)}deg)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      if (main) main.style.transform = ''
    }
  }, [])

  return null
}
