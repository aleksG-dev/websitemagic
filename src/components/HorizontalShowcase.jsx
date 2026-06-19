import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { TikTok } from './Icons'
import { TIKTOK_URL } from '../config'

const panels = [
  {
    name: 'Barbers',
    line: 'Chairs booked solid — even while you cut.',
    img: 'https://images.unsplash.com/photo-1675599193990-33d71150902b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Cafés',
    line: 'Tables full before the kettle boils.',
    img: 'https://images.unsplash.com/photo-1743091584076-ea57d7aa161f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Gyms',
    line: 'New members signing up at midnight.',
    img: 'https://images.unsplash.com/photo-1757924284732-4189190321cf?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Salons',
    line: 'Clients rebook before they leave the chair.',
    img: 'https://images.unsplash.com/photo-1637777277337-f114350fb088?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Bakeries',
    line: 'Pre-orders stacked up before you open.',
    img: 'https://images.unsplash.com/photo-1691862469586-9c7c183b27b7?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function HorizontalShowcase() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${(panels.length - 1) * 100}vw`],
  )

  if (reduce) {
    return (
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="chip">
            <span className="dot" aria-hidden="true" />
            Where you&apos;ll shine
          </p>
          <h2 className="mt-5 sec-h">A glimpse of the worlds we build for.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {panels.map((p) => (
              <div
                key={p.name}
                className="hs-static"
                style={{ backgroundImage: `url('${p.img}')` }}
              >
                <span className="hs-name-sm">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={ref}
      className="hs-track"
      style={{ height: `${panels.length * 85}vh` }}
      aria-label="A glimpse of the worlds we build for"
    >
      <div className="hs-sticky">
        <motion.div className="hs-row" style={{ x }}>
          {panels.map((p, i) => (
            <article key={p.name} className="hs-panel">
              <div className="hs-img" style={{ backgroundImage: `url('${p.img}')` }} />
              <div className="hs-veil" aria-hidden="true" />
              <div className="hs-content">
                <span className="hs-index">
                  {String(i + 1).padStart(2, '0')} / {String(panels.length).padStart(2, '0')}
                </span>
                <h3 className="hs-name">{p.name}</h3>
                <p className="hs-line">{p.line}</p>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hs-cta"
                >
                  <TikTok size={16} />
                  Get yours
                </a>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
