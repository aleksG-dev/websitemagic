import Nav from './components/Nav'
import Hero from './components/Hero'
import WhatYouGet from './components/WhatYouGet'
import Work from './components/Work'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ContactForm from './components/ContactForm'
import ScrollProgress from './components/fx/ScrollProgress'
import Marquee from './components/fx/Marquee'
import Showcase3D from './components/Showcase3D'
import InteractiveTrades from './components/InteractiveTrades'
import HorizontalShowcase from './components/HorizontalShowcase'
import FAQ from './components/FAQ'
import SmoothScroll from './components/fx/SmoothScroll'
import Preloader from './components/fx/Preloader'
import Cursor from './components/fx/Cursor'
import MobileCTA from './components/MobileCTA'

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

      {/* animated gradient-mesh world */}
      <div className="mesh" aria-hidden="true" />
      <div className="sheen" aria-hidden="true" />

      <Preloader />
      <Cursor />
      <SmoothScroll />
      <div className="grain" aria-hidden="true" />
      <div className="grade" aria-hidden="true" />

      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Marquee items={TRADES} className="border-y border-white/5" />
        <Showcase3D />
        <WhatYouGet />
        <InteractiveTrades />
        <Work />
        <HowItWorks />
        <FAQ />
        <ContactForm />
        <HorizontalShowcase />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
