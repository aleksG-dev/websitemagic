import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import BeforeMockup from './mockups/BeforeMockup'
import { DragArrows } from './Icons'

/**
 * The signature moment: a draggable before/after wipe.
 *
 * Performance: while dragging we write the position straight to a CSS custom
 * property (`--pos`) on the frame — no React re-render per move, so it stays at
 * 60fps. React state only mirrors the value for the ARIA slider (screen
 * readers / keyboard), which never affects the visual position.
 *
 * Works with mouse, touch and keyboard. On touch, only a drag that *starts on
 * the handle* moves the slider, so the page can still be scrolled by swiping
 * over the image.
 */
export default function BeforeAfterSlider() {
  const frameRef = useRef(null)
  const handleRef = useRef(null)
  const posRef = useRef(50) // source of truth for the visual position
  const draggingRef = useRef(false)
  const interactedRef = useRef(false)
  const rafRef = useRef(0)
  const [pos, setPos] = useState(50) // mirror, for ARIA only
  const reduce = useReducedMotion()

  const clamp = (p) => Math.max(0, Math.min(100, p))

  const setVar = (p) => {
    posRef.current = p
    frameRef.current?.style.setProperty('--pos', `${p}%`)
  }

  const updateFromClientX = (clientX) => {
    const el = frameRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setVar(clamp(((clientX - rect.left) / rect.width) * 100))
    // throttle the (visual-free) ARIA mirror to one update per frame
    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0
        setPos(Math.round(posRef.current))
      })
    }
  }

  const onPointerDown = (e) => {
    const onHandle = handleRef.current?.contains(e.target)
    // touch on the image (not the handle) → let the page scroll
    if (e.pointerType !== 'mouse' && !onHandle) return
    interactedRef.current = true
    draggingRef.current = true
    handleRef.current?.focus()
    try {
      frameRef.current.setPointerCapture(e.pointerId)
    } catch {
      /* not all environments support capture */
    }
    e.preventDefault()
    updateFromClientX(e.clientX)
  }

  const onPointerMove = (e) => {
    if (draggingRef.current) updateFromClientX(e.clientX)
  }

  const endDrag = (e) => {
    if (!draggingRef.current) return
    draggingRef.current = false
    try {
      frameRef.current.releasePointerCapture(e.pointerId)
    } catch {
      /* ignore */
    }
    setPos(Math.round(posRef.current))
  }

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2
    let p = posRef.current
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        p -= step
        break
      case 'ArrowRight':
      case 'ArrowUp':
        p += step
        break
      case 'PageDown':
        p -= 10
        break
      case 'PageUp':
        p += 10
        break
      case 'Home':
        p = 0
        break
      case 'End':
        p = 100
        break
      default:
        return
    }
    e.preventDefault()
    interactedRef.current = true
    p = clamp(p)
    setVar(p)
    setPos(Math.round(p))
  }

  // Set the start position, then play a single, subtle "nudge" so people
  // realise the handle is draggable. Cancels the instant they touch it, and
  // is skipped entirely for reduced-motion visitors.
  useEffect(() => {
    setVar(50)
    if (reduce) return

    let raf = 0
    let startTs = 0
    const duration = 1800
    const tick = (ts) => {
      if (interactedRef.current) {
        setVar(50)
        return
      }
      if (!startTs) startTs = ts
      const t = Math.min(1, (ts - startTs) / duration)
      const envelope = 1 - t // fade the sweep out as it finishes
      setVar(50 + Math.sin(t * Math.PI * 2) * 13 * envelope)
      if (t < 1) raf = requestAnimationFrame(tick)
      else setVar(50)
    }
    const startId = setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, 650)

    return () => {
      clearTimeout(startId)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reduce])

  const rounded = Math.round(pos)

  return (
    <div
      ref={frameRef}
      className="ba-frame"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {/* AFTER — base layer, revealed as the handle moves left.
          The real Montfort site I built, embedded live. */}
      <div className="ba-layer ba-after" aria-hidden="true">
        <iframe
          src="https://montfort-next.vercel.app"
          title="Montfort — an immersive site I built"
          loading="lazy"
          className="ba-embed"
        />
      </div>

      {/* BEFORE — on top, clipped to the left of the handle */}
      <div className="ba-layer ba-before" aria-hidden="true">
        <BeforeMockup />
      </div>

      <span className="ba-label ba-label-before">Before</span>
      <span className="ba-label ba-label-after">After ✦</span>

      <div className="ba-divider" aria-hidden="true" />

      <button
        ref={handleRef}
        type="button"
        className="ba-handle"
        role="slider"
        aria-label="Drag to compare the old website with the redesign"
        aria-orientation="horizontal"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rounded}
        aria-valuetext={`${rounded}% redesigned`}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <DragArrows />
      </button>
    </div>
  )
}
