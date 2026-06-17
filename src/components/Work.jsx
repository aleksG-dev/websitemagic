import Reveal from './Reveal'
import BrowserFrame from './BrowserFrame'
import TiltCard from './fx/TiltCard'
import { BarberMock, CafeMock, GymMock } from './mockups/WorkMockups'

// Each "work" item shows a sample design inside a browser frame.
// >>> TO ADD A REAL PROJECT: replace `mock: <BarberMock />` with a screenshot:
//     mock: <img src="/work/barber.png" alt="Barber site I built" className="block w-full" />
//     (drop the image in the /public folder). Update url + caption to match.
const work = [
  {
    url: 'fadeandblade.com',
    mock: <BarberMock />,
    tag: 'Barber · warm amber & charcoal',
    caption: 'Walk-ins turn into booked appointments — the chair stays full.',
  },
  {
    url: 'daybreakcoffee.com',
    mock: <CafeMock />,
    tag: 'Café · cream & forest green',
    caption: 'Regulars order before they arrive, so the morning rush runs smooth.',
  },
  {
    url: 'ironmethod.fit',
    mock: <GymMock />,
    tag: 'Gym · electric lime & black',
    caption: 'Free-trial signups roll in while you’re on the floor coaching.',
  },
]

export default function Work() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">The work</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
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

        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.url} delay={0.07 * i}>
              <figure>
                <TiltCard>
                  <BrowserFrame url={w.url}>{w.mock}</BrowserFrame>
                  {/* Clearly-marked placeholder until real screenshots are added */}
                  <span className="absolute right-3 top-12 z-10 rounded-full bg-base/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted ring-1 ring-inset ring-white/10 backdrop-blur">
                    Sample
                  </span>
                </TiltCard>
                <figcaption className="mt-5">
                  <p className="eyebrow">{w.tag}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink">
                    {w.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
