import { motion, useScroll, useTransform } from 'framer-motion'

interface BackgroundProps {
  reducedMotion: boolean
}

export function Background({ reducedMotion }: BackgroundProps) {
  const { scrollYProgress } = useScroll()

  // Parallax: Image pans upward as user scrolls (0% to -30%)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  // Progressive overlay: Gets lighter as user "climbs" (0.85 to 0.1)
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 0.9],
    [0.85, 0.7, 0.5, 0.35, 0.1]
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-full h-[150vh]"
        style={{ y: reducedMotion ? 0 : backgroundY }}
      >
        {/* Mountain background image */}
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=2400&q=80"
          alt=""
          className="w-full h-full object-cover object-bottom"
          loading="eager"
          fetchPriority="high"
        />

        {/* Base gradient for image blending */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-transparent" />
      </motion.div>

      {/* Progressive dark overlay - gets lighter as user scrolls */}
      <motion.div
        className="absolute inset-0 bg-neutral-900"
        style={{ opacity: reducedMotion ? 0.5 : overlayOpacity }}
      />
    </div>
  )
}
