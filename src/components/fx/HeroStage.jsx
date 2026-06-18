import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'

/**
 * Mouse-reactive 3D tilt for the hero device. Crucially, it FLATTENS the moment
 * a pointer is pressed inside it — so grabbing the before/after slider drags
 * accurately (no skewed coordinates), then resumes tilting on release.
 * Reduced motion → a plain, untilted container.
 */
export default function HeroStage({ children, max = 6 }) {
  const ref = useRef(null)
  const active = useRef(true)
  const reduce = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const sx = useSpring(px, { stiffness: 120, damping: 20 })
  const sy = useSpring(py, { stiffness: 120, damping: 20 })
  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])

  if (reduce) return <div>{children}</div>

  const onMove = (e) => {
    if (!active.current || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }
  const flatten = () => {
    active.current = false
    reset()
  }
  const resume = () => {
    active.current = true
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onPointerDownCapture={flatten}
      onPointerUp={resume}
      onPointerCancel={resume}
    >
      {children}
    </motion.div>
  )
}
