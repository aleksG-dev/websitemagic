import Reveal from './Reveal'
import { Wand, Phone, TrendUp } from './Icons'

const items = [
  {
    icon: Wand,
    title: 'Custom design, zero templates',
    text: 'Your site is built around your business — not stamped from a theme a hundred others already use.',
  },
  {
    icon: Phone,
    title: 'Flawless on every phone',
    text: 'Most customers find you on their phone. Yours will look sharp there first, then everywhere else.',
  },
  {
    icon: TrendUp,
    title: 'Built to get you booked',
    text: 'Clear buttons, fast pages, easy booking — designed to turn visitors into paying customers.',
  },
]

export default function WhatYouGet() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">What you get</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              No fluff. A site that works as hard as you do.
            </h2>
          </Reveal>
        </div>

        {/* Editorial 3-up — a top hairline gives structure without resorting to boxed cards */}
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={0.07 * i}>
              <div className="border-t border-white/10 pt-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-magic/12 text-magic-light ring-1 ring-inset ring-magic/25">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-muted">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
