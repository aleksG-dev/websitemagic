import Reveal from './Reveal'
import BrowserFrame from './BrowserFrame'
import BeforeAfterSlider from './BeforeAfterSlider'
import MaskHeading from './fx/MaskHeading'
import Sparkles from './fx/Sparkles'
import MagneticButton from './fx/MagneticButton'
import { Sparkle, TikTok } from './Icons'
import { TIKTOK_URL } from '../config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      {/* living aurora glows + a scatter of sparkles */}
      <div
        className="aurora aurora-a left-[calc(50%-13rem)] top-[-6rem] h-[26rem] w-[26rem] bg-magic/40"
        aria-hidden="true"
      />
      <div
        className="aurora aurora-b right-[-4rem] top-40 h-[20rem] w-[20rem] bg-iris/30"
        aria-hidden="true"
      />
      <Sparkles count={16} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="chip">
              <span className="dot" aria-hidden="true" />
              Custom websites for local business
            </p>
          </Reveal>

          <MaskHeading
            className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[4.25rem]"
            lines={[
              'Your website should be',
              <>
                <span className="grad-text">winning you customers</span> —
              </>,
              'not collecting dust.',
            ]}
          />

          <Reveal delay={0.6}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted sm:text-xl">
              I build fast, modern websites that turn “just looking” into booked
              appointments — designed around your business, never a template.
            </p>
          </Reveal>

          <Reveal delay={0.72}>
            <div className="mt-9 flex flex-col items-center gap-3">
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
              <p className="flex items-center gap-1.5 text-sm text-muted">
                <TikTok size={14} className="text-magic-light" />
                A quick DM on TikTok is all it takes to start.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.8}>
            <div className="mt-7 trust">
              <span>UK local trades</span>
              <span className="sep" aria-hidden="true" />
              <span>Mobile-first</span>
              <span className="sep" aria-hidden="true" />
              <span>Built to get you booked</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.85}>
          <figure className="mx-auto mt-14 max-w-5xl">
            <BrowserFrame url="your-business.com">
              <BeforeAfterSlider />
            </BrowserFrame>
            <figcaption className="mx-auto mt-4 max-w-md text-center text-sm text-muted">
              Drag the handle — that tired old site becomes the one on the
              right.{' '}
              <span className="text-gold">That’s exactly what I do for you.</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
