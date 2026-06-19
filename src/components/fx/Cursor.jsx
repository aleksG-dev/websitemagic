import { useEffect, useRef } from 'react'

/**
 * Custom cursor: a small dot that tracks 1:1 and a lagging ring that grows over
 * interactive elements. Only on devices with a fine pointer (skipped on touch).
 */
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let dx = window.innerWidth / 2
    let dy = window.innerHeight / 2
    let rx = dx
    let ry = dy
    let raf

    const move = (e) => {
      dx = e.clientX
      dy = e.clientY
      if (dot.current) dot.current.style.transform = `translate(${dx}px, ${dy}px)`
    }
    const loop = () => {
      rx += (dx - rx) * 0.18
      ry += (dy - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(loop)
    }
    const sel = 'a, button, input, textarea, label, .trade-word, .ba-handle, .show3d-dot'
    const over = (e) => {
      if (e.target.closest?.(sel)) ring.current?.classList.add('is-grow')
    }
    const out = (e) => {
      if (e.target.closest?.(sel)) ring.current?.classList.remove('is-grow')
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.addEventListener('mouseout', out)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cur-ring" aria-hidden="true" />
      <div ref={dot} className="cur-dot" aria-hidden="true" />
    </>
  )
}
