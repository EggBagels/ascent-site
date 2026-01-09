import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

const directionOffset = {
  up: { y: 50, x: 0 },
  down: { y: -50, x: 0 },
  left: { x: 50, y: 0 },
  right: { x: -50, y: 0 },
}

export function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = ''
}: RevealProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
