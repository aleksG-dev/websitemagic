import { motion, useReducedMotion } from 'framer-motion'

/**
 * A tasteful, single-purpose entrance reveal: fade + small rise as the element
 * scrolls into view, once. If the visitor prefers reduced motion we render a
 * plain element with no animation at all.
 */
export default function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 18,
  className = '',
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
