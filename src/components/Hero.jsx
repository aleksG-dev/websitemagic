import Reveal from './Reveal'
import MaskHeading from './fx/MaskHeading'
import Sparkles from './fx/Sparkles'
import MagneticButton from './fx/MagneticButton'
import TradeShowcase from './trades/TradeShowcase'
import { Sparkle, TikTok, PhoneCall } from './Icons'
import { TIKTOK_URL, PHONE_DISPLAY, PHONE_TEL } from '../config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        className="aurora aurora-a left-[calc(50%-16rem)] top-[-8rem] h-[30rem] w-[32rem] bg-magic/35"
        aria-hidden="true"
      />
      <Sparkles count={14} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.12fr] lg:gap-10">
        {/* Left — the pitch */}
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2">
              <Sparkle className="text-gold" size={13} />
              Custom websites for local business
            </p>
          </Reveal>

          <MaskHeading
            className="mt-5 text-balance text-[2.6rem] font-extrabold leading-[1.02] sm:text-6xl lg:text-[4rem]"
            lines={[
              'Websites that get',
              'local businesses',
              <span key="b" className="text-magic-light">
                booked solid.
              </span>,
            ]}
          />

          <Reveal delay={0.5}>
            <p className="mt-6 max-w-md text-pretty text-lg text-muted">
              Pick your trade and watch your new homepage build itself. Love it?
              I’m one DM away.
            </p>
          </Reveal>

          <Reveal delay={0.62}>
            <div className="mt-8 flex flex-col items-start gap-3">
              <MagneticButton
                as="a"
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base"
              >
                Get my website
                <Sparkle size={16} />
              </MagneticButton>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                <TikTok size={14} className="text-magic-light" />
                DM on TikTok, or call
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-1 text-ink underline decoration-magic/40 underline-offset-4 transition-colors hover:text-magic-light"
                >
                  <PhoneCall size={13} />
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right — the signature */}
        <Reveal delay={0.3}>
          <TradeShowcase />
        </Reveal>
      </div>
    </section>
  )
}
