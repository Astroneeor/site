import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { fadeInUp } from '../hooks/useScrollAnimation'

const projects = [
  {
    title: 'Genomic Analysis Platform',
    category: 'Bioinformatics',
    description: 'End-to-end pipeline for processing whole-genome sequencing data with variant calling and clinical reporting.',
    tags: ['Python', 'AWS', 'NextFlow', 'React'],
    icon: '🧬',
  },
  {
    title: 'Patient Health Portal',
    category: 'Health Tech',
    description: 'HIPAA-compliant patient portal with real-time health metrics, appointment scheduling, and secure messaging.',
    tags: ['TypeScript', 'FHIR', 'PostgreSQL', 'OAuth'],
    icon: '🏥',
  },
  {
    title: 'Clinical Trial Dashboard',
    category: 'Research',
    description: 'Real-time monitoring dashboard for multi-site clinical trials with adverse event tracking and compliance alerts.',
    tags: ['React', 'D3.js', 'GraphQL', 'Docker'],
    icon: '📋',
  },
  {
    title: 'Wearable Health Analytics',
    category: 'Digital Health',
    description: 'Platform aggregating data from wearables to provide actionable health insights for preventive care.',
    tags: ['Python', 'ML', 'React Native', 'HL7'],
    icon: '⌚',
  },
]

export default function Showcase() {
  return (
    <SectionWrapper id="showcase">
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-accent-green/70 text-sm mb-4">
          <span className="w-8 h-px bg-accent-green/30" />
          Chapter IV: The Quest
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          Selected work that demonstrates my commitment to building
          technology that improves human health.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeInUp}
            className="group glass glass-hover rounded-2xl overflow-hidden"
          >
            {/* Project Header */}
            <div className="aspect-[2/1] bg-gradient-to-br from-accent-green/10 to-accent-emerald/5 relative flex items-center justify-center">
              <span className="text-5xl opacity-50 group-hover:opacity-70 transition-opacity duration-200">
                {project.icon}
              </span>

              <div className="absolute top-3 left-3 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <span className="text-accent-green text-xs font-medium">
                {project.category}
              </span>

              <h3 className="font-display text-xl font-semibold mt-2 mb-2 group-hover:text-accent-green transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-white/40 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/5 rounded text-xs text-white/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div variants={fadeInUp} className="text-center mt-10">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/40 hover:text-accent-green text-sm transition-colors duration-200"
        >
          <span>More on GitHub</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </SectionWrapper>
  )
}
