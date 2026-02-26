import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-7 py-3.5 rounded-full font-medium text-sm transition-all duration-200'

  const variants = {
    primary: 'bg-gradient-to-r from-accent-green to-accent-emerald text-forest-950 glow-hover',
    secondary: 'glass glass-hover text-white',
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.98 }}
        className={combinedStyles}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={combinedStyles}
    >
      {children}
    </motion.button>
  )
}
