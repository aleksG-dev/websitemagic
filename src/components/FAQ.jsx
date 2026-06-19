import Reveal from './Reveal'

const faqs = [
  {
    q: 'How much does a website cost?',
    a: "Most local-business sites land somewhere between a few hundred and around £1k, depending on size. You'll get a fixed price up front — no surprises, no hourly meter. DM me your trade and I'll give you a ballpark in minutes.",
  },
  {
    q: 'How long does it take?',
    a: 'Usually 1–2 weeks from our first chat to going live. A clean one-pager can be quicker. I send you a preview early so you can see it taking shape.',
  },
  {
    q: 'What do you need from me?',
    a: "Barely anything — your logo if you have one, a few photos, and your services and opening hours. I write the rest and you simply approve it.",
  },
  {
    q: 'Do I need to be techy?',
    a: 'Not even slightly. You message me on TikTok, I build it and send you a preview, we tweak it until it feels right, and it goes live. You never touch code.',
  },
  {
    q: 'Will it work on phones?',
    a: 'Every site is mobile-first. Most of your customers will find you on their phone, so that’s where it has to look and work brilliantly.',
  },
  {
    q: 'What about hosting and changes later?',
    a: "I set you up with fast, secure hosting and can handle updates whenever you need them — new prices, photos, opening hours. You’re never left stuck.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="chip">
            <span className="dot" aria-hidden="true" />
            Questions
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 sec-h">Everything you&apos;re wondering.</h2>
        </Reveal>

        <div className="faq-list mt-10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={0.04 * i}>
              <details className="faq-item">
                <summary>
                  {f.q}
                  <span className="faq-ic" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
