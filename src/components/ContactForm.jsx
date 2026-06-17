import { useState } from 'react'
import Reveal from './Reveal'
import { Sparkle, TikTok } from './Icons'
import { TIKTOK_URL } from '../config'

/**
 * A real, working enquiry form wired to Netlify Forms (no backend, no API keys).
 * Submissions land in your Netlify dashboard → Forms, and you can switch on
 * email notifications there. The matching hidden static form in index.html is
 * what lets Netlify detect this form on a JS-rendered (Vite) site.
 *
 * States: idle → sending → success / error (per the accessibility + UX guidance).
 */
export default function ContactForm() {
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const field =
    'mt-2 w-full rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-magic focus:bg-white/[0.06]'
  const labelCls = 'text-sm font-medium text-ink'

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-md">
          <Reveal>
            <p className="eyebrow">Get in touch</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Tell me about your business.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted">
              Send a couple of lines about your trade and what you want your site
              to do. I’ll reply within a day with a few ideas — no pressure, no
              jargon.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted">
              <TikTok size={15} className="text-magic-light" />
              Prefer to chat? DM me on{' '}
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-magic/40 underline-offset-4 hover:text-magic-light"
              >
                TikTok
              </a>
              .
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {status === 'success' ? (
            <div className="rounded-2xl border border-magic/25 bg-panel/60 p-8 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-magic/15 text-gold">
                <Sparkle size={22} />
              </div>
              <h3 className="mt-4 text-xl font-bold">Got it — thank you!</h3>
              <p className="mx-auto mt-2 max-w-sm text-[15px] text-muted">
                Your message is on its way to me. I’ll get back to you within a
                day. Want to skip the wait?
              </p>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6 text-base"
              >
                <TikTok size={18} />
                DM me on TikTok
              </a>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-panel/50 p-6 sm:p-8"
            >
              {/* Netlify plumbing */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className={labelCls}>
                    Your name
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Jordan"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="cf-business" className={labelCls}>
                    Business / trade
                  </label>
                  <input
                    id="cf-business"
                    name="business"
                    type="text"
                    autoComplete="organization"
                    placeholder="Barber, café, gym…"
                    className={field}
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-email" className={labelCls}>
                    Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="cf-phone" className={labelCls}>
                    Phone{' '}
                    <span className="font-normal text-muted">(optional)</span>
                  </label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="07…"
                    className={field}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="cf-message" className={labelCls}>
                  What do you want your website to do?
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="e.g. I’m a barber in Leeds and I want more online bookings."
                  className={field}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary mt-6 w-full text-base disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    Send it
                    <Sparkle size={16} />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p role="alert" className="mt-4 text-sm text-[#ffb1a8]">
                  Something went wrong sending that. Please try again — or DM me
                  on TikTok and I’ll pick it up there.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
