import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import BrowserFrame from './BrowserFrame'
import { BuilderMock, SalonMock, PlumberMock } from './mockups/WorkMockups'

const slides = [
  { url: 'hartleybuild.co.uk', label: 'Builder', mock: <BuilderMock /> },
  { url: 'bloomhairstudio.co.uk', label: 'Hair salon', mock: <SalonMock /> },
  { url: 'calderplumbing.co.uk', label: 'Plumber', mock: <PlumberMock /> },
]

/**
 * Auto-cycling 3D "coverflow" — website previews flip in and out in 3D.
 * Pauses on hover, jumpable via dots, and falls back to a calm crossfade
 * for reduced-motion visitors.
 */
export default function Showcase3D() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused) return
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 3800)
    return () => clearInterval(id)
  }, [reduce, paused])

  const s = slides[i]

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="chip mx-auto">
              <span className="dot" aria-hidden="true" />
              In motion
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 sec-h">Every build feels alive.</h2>
          </Reveal>
        </div>

        <div
          className="show3d mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.url}
              className="show3d-card"
              initial={reduce ? { opacity: 0 } : { opacity: 0, rotateY: 35 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, rotateY: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, rotateY: -35 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <BrowserFrame url={s.url}>{s.mock}</BrowserFrame>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2.5">
          {slides.map((sl, idx) => (
            <button
              key={sl.url}
              type="button"
              aria-label={`Show ${sl.label} preview`}
              onClick={() => setI(idx)}
              className={`show3d-dot${idx === i ? ' is-on' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
