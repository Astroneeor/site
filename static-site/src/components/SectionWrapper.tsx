import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useScrollAnimation, staggerContainer } from '../hooks/useScrollAnimation'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionWrapper({
  children,
  className = '',
  id,
}: SectionWrapperProps) {
  const { ref, controls } = useScrollAnimation()

  return (
    <motion.section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className={`relative py-24 md:py-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {children}
      </div>
    </motion.section>
  )
}
