import { motion } from 'framer-motion'
import Button from '../components/Button'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Organic gradient orbs */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-accent-emerald/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-accent-green rounded-full" />
          <span className="text-white/70 text-sm">Chapter I: The Beginning</span>
        </motion.div>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-accent-green text-sm font-medium tracking-widest uppercase mb-4"
        >
          Health Tech Engineer
        </motion.p>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Hi, I'm{' '}
          <span className="text-gradient">Neeor Alam</span>
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-white/50 text-lg max-w-xl mx-auto mb-10 text-balance"
        >
          Building technology that bridges the gap between innovation and human health.
          Where code meets biology, meaningful change happens.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Button href="#showcase">Explore My Journey</Button>
          <Button href="#cta" variant="secondary">Connect</Button>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 bg-accent-green/60 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
