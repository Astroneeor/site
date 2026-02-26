import { useEffect, useRef } from 'react'
import { useInView, useAnimation, type AnimationControls } from 'framer-motion'

interface ScrollAnimationOptions {
  threshold?: number
  once?: boolean
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const { threshold = 0.15, once = true } = options
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { amount: threshold, once })
  const controls: AnimationControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else if (!once) {
      controls.start('hidden')
    }
  }, [isInView, controls, once])

  return { ref, controls, isInView }
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}
