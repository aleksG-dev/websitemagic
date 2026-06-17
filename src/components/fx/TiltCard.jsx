import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'

// A 3D card that tilts toward the cursor, with a soft violet spotlight that
// tracks the pointer. Used on the work mockups so each one feels like a real,
// touchable screen. Reduced motion → a plain static container.
export default function TiltCard({ className = '', max = 7, children }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const glow = useMotionValue(0)

  const sx = useSpring(px, { stiffness: 150, damping: 18 })
  const sy = useSpring(py, { stiffness: 150, damping: 18 })
  const sGlow = useSpring(glow, { stiffness: 200, damping: 25 })

  const rotateY = useTransform(sx, [0, 1], [-max, max])
  const rotateX = useTransform(sy, [0, 1], [max, -max])
  const spotlight = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(240px circle at ${x * 100}% ${y * 100}%, rgba(192,132,252,0.22), transparent 60%)`,
  )

  if (reduce) return <div className={className}>{children}</div>

  const onMouseMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseEnter={() => glow.set(1)}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        glow.set(0)
        px.set(0.5)
        py.set(0.5)
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 150, damping: 18 }}
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: spotlight, opacity: sGlow }}
      />
    </motion.div>
  )
}
