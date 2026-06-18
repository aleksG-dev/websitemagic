import Reveal from './Reveal'
import BrowserFrame from './BrowserFrame'
import TiltCard from './fx/TiltCard'
import { BuilderMock, SalonMock, PlumberMock } from './mockups/WorkMockups'

// Each "work" item shows a DEMO / CONCEPT design inside a browser frame —
// honest showcases of range, not claimed clients (note the "Demo design" badge).
// >>> TO ADD A REAL PROJECT: replace `mock: <BuilderMock />` with a screenshot:
//     mock: <img src="/work/builder.png" alt="Builder site I built" className="block w-full" />
//     (drop the image in the /public folder). Update url + caption to match.
const work = [
  {
    url: 'hartleybuild.co.uk',
    mock: <BuilderMock />,
    tag: 'Builder · steel & safety orange',
    caption: 'Quote requests land in your inbox before a rival even calls back.',
  },
  {
    url: 'bloomhairstudio.co.uk',
    mock: <SalonMock />,
    tag: 'Hair salon · blush & plum',
    caption: 'Chairs fill themselves — clients rebook before they leave the seat.',
  },
  {
    url: 'calderplumbing.co.uk',
    mock: <PlumberMock />,
    tag: 'Plumber · navy & clean cyan',
    caption: 'Emergencies turn into booked jobs, day or night, with you hands-free.',
  },
]

export default function Work() {
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

        <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-3">
          {work.map((w, i) => (
            <Reveal key={w.url} delay={0.07 * i}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
