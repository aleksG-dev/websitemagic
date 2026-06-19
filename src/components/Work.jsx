import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import BrowserFrame from './BrowserFrame'
import TiltCard from './fx/TiltCard'
import { BarberNeon, SalonLuxe, GymBold } from './mockups/StyleMockups'

// Each "work" item shows a DEMO / CONCEPT design inside a browser frame —
// honest showcases of range, not claimed clients (note the "Demo design" badge).
const work = [
  {
    url: 'fadelab.co.uk',
    mock: <BarberNeon />,
    tag: 'Barber · neon & glass',
    caption: 'Walk-ins fill the gaps; regulars rebook before they leave the chair.',
  },
  {
    url: 'bloomsalon.co.uk',
    mock: <SalonLuxe />,
    tag: 'Hair salon · cream & gold',
    caption: 'Look every bit as premium as the prices on your menu.',
  },
  {
    url: 'forgefit.uk',
    mock: <GymBold />,
    tag: 'Gym · electric yellow',
    caption: 'Bold enough to stop the scroll and fill your 6am class.',
  },
]

export default function Work() {
  const reduce = useReducedMotion()
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="chip">
              <span className="dot" aria-hidden="true" />
              The work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 sec-h">
              One look, and people trust you before they call.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted">
              A few directions to show range — every build is designed fresh for
              your trade and your town.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3 work-persp">
          {work.map((w, i) => (
            <motion.div
              key={w.url}
              initial={reduce ? false : { opacity: 0, rotateY: -24, y: 44 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -80px 0px' }}
              transition={{ duration: 0.85, delay: 0.09 * i, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1200 }}
            >
              <figure>
                <TiltCard>
                  <BrowserFrame url={w.url}>{w.mock}</BrowserFrame>
                  {/* Honest label — these are concept designs, not claimed clients */}
                  <span className="absolute right-3 top-12 z-10 rounded-full bg-base/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted ring-1 ring-inset ring-white/10 backdrop-blur">
                    Demo design
                  </span>
                </TiltCard>
                <figcaption className="mt-5">
                  <p className="eyebrow">{w.tag}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink">
                    {w.caption}
                  </p>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
