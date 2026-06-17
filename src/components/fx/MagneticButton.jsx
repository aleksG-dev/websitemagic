import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

// A button that's gently pulled toward the cursor. Uses motion values +
// springs (never React state), so it stays smooth and never re-renders the
// tree. Reduced motion → a plain, still element.
export default function MagneticButton({
  as = 'a',
  strength = 0.3,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.3 })
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.3 })

  const onMouseMove = (e) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion[as] ?? motion.a

  if (reduce) {
    const Tag = as
    return (
      <Tag className={className} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
