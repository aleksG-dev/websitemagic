import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import BrowserFrame from '../BrowserFrame'
import BeforeMockup from '../mockups/BeforeMockup'
import TradeMock from './TradeMock'
import { TRADES } from '../../data/trades'

/**
 * The signature: a row of trade chips (an accessible WAI-ARIA tablist) that
 * morph a browser-framed mini homepage to the visitor's own trade, so they
 * picture THEIR business. A "see a before" toggle keeps the glow-up proof.
 *
 * Accessibility: real tabs (roving tabindex, arrow keys, Home/End), a focusable
 * tabpanel, and an auto-cycle that NEVER steals focus, pauses on any
 * hover/focus/interaction, and is switched off entirely under reduced motion.
 */
export default function TradeShowcase() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [showBefore, setShowBefore] = useState(false)
  const tabRefs = useRef([])
  const trade = TRADES[active]

  // Gentle auto-cycle until the visitor engages (and never under reduced motion)
  useEffect(() => {
    if (reduce || paused) return
    const id = setInterval(
      () => setActive((a) => (a + 1) % TRADES.length),
      3200,
    )
    return () => clearInterval(id)
  }, [reduce, paused])

  const pause = () => setPaused(true)
  const select = (i) => {
    pause()
    setShowBefore(false)
    setActive(i)
  }

  // Arrow-key navigation with automatic activation (APG tabs pattern)
  const onKeyDown = (e) => {
    const n = TRADES.length
    let i
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        i = (active + 1) % n
        break
      case 'ArrowLeft':
      case 'ArrowUp':
        i = (active - 1 + n) % n
        break
      case 'Home':
        i = 0
        break
      case 'End':
        i = n - 1
        break
      default:
        return
    }
    e.preventDefault()
    select(i)
    tabRefs.current[i]?.focus()
  }

  const morph = reduce
    ? { transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
      }

  return (
    <div onMouseEnter={pause} onFocusCapture={pause}>
      {/* Trade chips = tablist */}
      <div
        role="tablist"
        aria-label="Choose your trade to preview a site"
        className="mb-4 flex flex-wrap gap-2"
      >
        {TRADES.map((t, i) => {
          const selected = i === active
          return (
            <button
              key={t.id}
              ref={(el) => (tabRefs.current[i] = el)}
              role="tab"
              id={`trade-tab-${t.id}`}
              aria-selected={selected}
              aria-controls="trade-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => select(i)}
              onKeyDown={onKeyDown}
              className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium transition-colors ${
                selected ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
              style={
                selected
                  ? {
                      background: `${t.accent}22`,
                      boxShadow: `inset 0 0 0 1px ${t.accent}`,
                    }
                  : {
                      background: 'rgba(244,238,254,0.04)',
                      boxShadow: 'inset 0 0 0 1px rgba(192,132,252,0.16)',
                    }
              }
            >
              {t.label}
            </button>
          )
        })}
      </div>

      {/* The morphing preview = tabpanel */}
      <div
        id="trade-panel"
        role="tabpanel"
        aria-labelledby={`trade-tab-${trade.id}`}
        tabIndex={0}
        className="relative isolate rounded-2xl"
      >
        {/* Accent glow that re-tints to the chosen trade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-5 -z-10 rounded-[2rem] opacity-30 blur-3xl transition-colors duration-500"
          style={{ background: showBefore ? '#64748b' : trade.accent }}
        />
        <BrowserFrame url={showBefore ? `the-old-${trade.url}` : trade.url}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={trade.id + (showBefore ? '-before' : '')} {...morph}>
              {showBefore ? <BeforeMockup /> : <TradeMock trade={trade} />}
            </motion.div>
          </AnimatePresence>
        </BrowserFrame>
      </div>

      {/* Caption + before/after toggle */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted">
          That’s a <span className="text-ink">{trade.label.toLowerCase()}</span>{' '}
          site — yours would be designed fresh.
        </p>
        <button
          type="button"
          aria-pressed={showBefore}
          onClick={() => {
            pause()
            setShowBefore((s) => !s)
          }}
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-ink transition-colors hover:bg-white/5"
        >
          {showBefore ? 'Show the redesign ✦' : 'See a “before”'}
        </button>
      </div>
    </div>
  )
}
