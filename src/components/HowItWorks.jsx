import Reveal from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Tell me about your business',
    text: 'A quick DM on TikTok — your trade, your style, and what you want more of.',
  },
  {
    n: '02',
    title: 'I design your site',
    text: 'I build it custom and send you a preview. We tweak it until it feels exactly right.',
  },
  {
    n: '03',
    title: 'You get found & booked',
    text: 'Go live with a fast site that shows up on Google and turns visitors into customers.',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="chip">
              <span className="dot" aria-hidden="true" />
              How it works
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 sec-h">Simple from hello to booked.</h2>
          </Reveal>
        </div>

        <ol className="mt-12 grid items-stretch gap-6 sm:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={0.07 * i} className="h-full">
              <div className="card">
                <span className="step-num">{s.n}</span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
