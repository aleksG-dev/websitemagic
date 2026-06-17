import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatYouGet from './components/WhatYouGet'
import Work from './components/Work'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ScrollProgress from './components/fx/ScrollProgress'
import Marquee from './components/fx/Marquee'

const TRADES = [
  'Barbers',
  'Cafés',
  'Gyms',
  'Salons',
  'Trades',
  'Bakeries',
  'Studios',
  'Clinics',
  'Tattooists',
  'Florists',
]

export default function App() {
  return (
    <div id="top" className="relative min-h-dvh">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only rounded-lg bg-magic px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>

      {/* very faint fixed backdrop wash — keeps the deep-violet world cohesive */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,102,241,0.12),transparent_60%)]"
        aria-hidden="true"
      />

      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee items={TRADES} className="border-y border-white/5" />
        <WhatYouGet />
        <Work />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
