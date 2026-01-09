import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export function Hero() {
  const reducedMotion = useReducedMotion()

  const MotionWrapper = reducedMotion ? 'div' : motion.div

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-20"
    >
      {/* Section-specific overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/30 via-neutral-900/60 to-neutral-950/90 -z-10" />

      <MotionWrapper
        className="max-w-4xl"
        {...(!reducedMotion && {
          variants: containerVariants,
          initial: 'hidden',
          animate: 'visible',
        })}
      >
        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          variants={!reducedMotion ? itemVariants : undefined}
        >
          <div className="h-px w-12 bg-white/40" />
          <p className="text-xs font-mono tracking-widest text-neutral-300 uppercase">
            Base Camp — Elevation 0m
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold tracking-tight text-white mb-8 leading-[0.95]"
          variants={!reducedMotion ? itemVariants : undefined}
        >
          Strategic Real Estate
          <br />
          <span className="text-neutral-400">for Serious Investors</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed border-l-2 border-white/20 pl-6 mb-12"
          variants={!reducedMotion ? itemVariants : undefined}
        >
          Ascent Real Estate delivers disproportionate value at every stage of
          the ownership cycle—from site selection and capital planning to
          operational efficiency and long-term asset positioning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center"
          variants={!reducedMotion ? itemVariants : undefined}
        >
          <a
            href="#contact"
            className="bg-white text-neutral-900 px-8 md:px-10 py-4 md:py-5 text-sm font-semibold tracking-wide hover:bg-neutral-100 transition-colors duration-300"
          >
            Let's Connect
          </a>
          <a
            href="#services"
            className="border-2 border-white/60 text-white px-8 md:px-10 py-4 md:py-5 text-sm font-semibold tracking-wide hover:bg-white hover:text-neutral-900 transition-all duration-300"
          >
            View Services
          </a>
        </motion.div>

        {/* Helper text */}
        <motion.p
          className="mt-12 text-neutral-400 text-sm"
          variants={!reducedMotion ? itemVariants : undefined}
        >
          Serving Oklahoma and the Central United States
        </motion.p>
      </MotionWrapper>
    </section>
  )
}
