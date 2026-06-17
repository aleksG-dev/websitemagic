import { motion, useReducedMotion } from 'framer-motion'

// A line-by-line "mask" reveal: each line rises up from behind a clip.
// Distinctive entrance for the hero headline. Falls back to static text
// when the visitor prefers reduced motion.
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
}
const lineVariant = {
  hidden: { y: '115%' },
  visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function MaskHeading({ lines, className = '' }) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <h1 className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
    )
  }

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span className="block" variants={lineVariant}>
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  )
}
