import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { fadeInUp } from '../hooks/useScrollAnimation'

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Visual Side */}
        <motion.div variants={fadeInUp} className="relative">
          <div className="relative aspect-square max-w-sm mx-auto">
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/15 to-accent-emerald/10 rounded-3xl blur-2xl" />

            {/* DNA helix decorative element */}
            <div className="relative glass rounded-3xl overflow-hidden h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent" />
              <svg className="w-32 h-48 text-accent-green/20" viewBox="0 0 100 150" fill="none">
                <path d="M30 10 Q50 30 70 50 Q50 70 30 90 Q50 110 70 130" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M70 10 Q50 30 30 50 Q50 70 70 90 Q50 110 30 130" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="30" cy="10" r="4" fill="currentColor" opacity="0.5"/>
                <circle cx="70" cy="50" r="4" fill="currentColor" opacity="0.5"/>
                <circle cx="30" cy="90" r="4" fill="currentColor" opacity="0.5"/>
                <circle cx="70" cy="130" r="4" fill="currentColor" opacity="0.5"/>
              </svg>
            </div>

            {/* Static badges */}
            <div className="absolute -top-4 -right-4 w-16 h-16 glass rounded-xl flex items-center justify-center text-2xl">
              🧬
            </div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 glass rounded-xl flex items-center justify-center text-xl">
              💊
            </div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div variants={fadeInUp}>
          <div className="inline-flex items-center gap-2 text-accent-green/70 text-sm mb-4">
            <span className="w-8 h-px bg-accent-green/30" />
            Chapter II: The Origin
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              I'm a software engineer with a deep passion for health technology
              and bioinformatics. My work sits at the intersection of code and
              biology—building tools that help researchers, clinicians, and
              patients navigate the complexity of human health.
            </p>
            <p>
              From genomic data pipelines to patient-facing health apps, I believe
              technology should make healthcare more accessible, not more complicated.
              Every line of code is an opportunity to create meaningful impact.
            </p>
            <p>
              When I'm not engineering solutions, I'm exploring the latest in
              biotech research or contributing to open-source health initiatives.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
            {[
              { number: '5+', label: 'Years in Health Tech' },
              { number: '20+', label: 'Health Projects' },
              { number: '10M+', label: 'Lives Impacted' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-bold text-gradient">
                  {stat.number}
                </div>
                <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
