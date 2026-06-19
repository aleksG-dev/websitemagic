import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal'
import BrowserFrame from './BrowserFrame'
import TiltCard from './fx/TiltCard'
import { BarberNeon, SalonLuxe, GymBold } from './mockups/StyleMockups'

// Concept designs recreated in the styles of the reference sites, localised to
// real trades. Each links to a full, live demo build under /demos/.
const work = [
  {
    url: 'fadelab.co.uk',
    demo: '/demos/barber.html',
    mock: <BarberNeon />,
    tag: 'Barber · neon & glass',
    caption: 'Walk-ins fill the gaps; regulars rebook before they leave the chair.',
  },
  {
    url: 'bloomsalon.co.uk',
    demo: '/demos/salon.html',
    mock: <SalonLuxe />,
    tag: 'Hair salon · cream & gold',
    caption: 'Look every bit as premium as the prices on your menu.',
  },
  {
    url: 'forgefit.uk',
    demo: '/demos/gym.html',
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
              Real, clickable demo sites — open one and have a play. Every build
              is designed fresh for your trade and your town.
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
                  <a
                    href={w.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`Open the ${w.tag} live demo`}
                  >
                    <BrowserFrame url={w.url}>{w.mock}</BrowserFrame>
                  </a>
                  <span className="pointer-events-none absolute right-3 top-12 z-10 rounded-full bg-base/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted ring-1 ring-inset ring-white/10 backdrop-blur">
                    Live demo
                  </span>
                </TiltCard>
                <figcaption className="mt-5">
                  <p className="eyebrow">{w.tag}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink">
                    {w.caption}
                  </p>
                  <a
                    href={w.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-magic-light transition-colors hover:text-gold"
                  >
                    Open live demo ↗
                  </a>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
