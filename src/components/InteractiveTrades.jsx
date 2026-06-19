import { useRef } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { useState } from 'react'
import Reveal from './Reveal'

const trades = [
  { name: 'Barbers', img: 'https://images.unsplash.com/photo-1675599193990-33d71150902b?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Cafés', img: 'https://images.unsplash.com/photo-1743091584076-ea57d7aa161f?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Gyms', img: 'https://images.unsplash.com/photo-1757924284732-4189190321cf?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Salons', img: 'https://images.unsplash.com/photo-1637777277337-f114350fb088?q=80&w=1400&auto=format&fit=crop' },
  { name: 'Bakeries', img: 'https://images.unsplash.com/photo-1691862469586-9c7c183b27b7?q=80&w=1400&auto=format&fit=crop' },
]

function MagneticWord({ name, dim, onEnter }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 150, damping: 15, mass: 0.3 })

  const onMove = (e) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      className={`trade-word${dim ? ' is-dim' : ''}`}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={reset}
    >
      {name}
    </motion.button>
  )
}

export default function InteractiveTrades() {
  const [active, setActive] = useState(null)

  return (
    <section
      className="trades-sec relative overflow-hidden py-24 sm:py-32"
      onMouseLeave={() => setActive(null)}
    >
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key={active}
            className="trades-bg"
            style={{ backgroundImage: `url('${trades[active].img}')` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
        )}
      </AnimatePresence>
      <div className="trades-veil" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="chip">
            <span className="dot" aria-hidden="true" />
            Made for your trade
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 sec-h max-w-2xl">
            Whatever you do, your site will look the part.
          </h2>
        </Reveal>

        <ul className="trade-list mt-10">
          {trades.map((tr, i) => (
            <li key={tr.name}>
              <MagneticWord
                name={tr.name}
                dim={active !== null && active !== i}
                onEnter={() => setActive(i)}
              />
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted">
          …and everything in between. If you serve a local community, I&apos;ll
          build you a site that gets them through the door.
        </p>
      </div>
    </section>
  )
}
