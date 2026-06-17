import Reveal from './Reveal'
import Sparkles from './fx/Sparkles'
import MagneticButton from './fx/MagneticButton'
import { Sparkle, TikTok } from './Icons'
import { TIKTOK_URL } from '../config'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="aurora aurora-a left-[calc(50%-18rem)] top-[calc(50%-12rem)] h-[24rem] w-[36rem] bg-magic/30"
        aria-hidden="true"
      />
      <Sparkles count={12} />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow inline-flex items-center gap-2">
            <Sparkle className="text-gold" size={13} />
            Your move
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl">
            Let’s make your business the one people{' '}
            <span className="text-gold">can’t scroll past.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Tell me your trade and I’ll show you what’s possible — no pressure, no
            jargon, no obligation.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-9 flex justify-center">
            <MagneticButton
              as="a"
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base"
            >
              <TikTok size={18} />
              DM me on TikTok
              <Sparkle size={16} />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
