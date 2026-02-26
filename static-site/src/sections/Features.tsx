import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import { fadeInUp } from '../hooks/useScrollAnimation'

const skills = [
  {
    icon: '🧬',
    title: 'Bioinformatics',
    description: 'Processing genomic data, building analysis pipelines, and translating biological insights into actionable tools.',
  },
  {
    icon: '🏥',
    title: 'Health Platforms',
    description: 'Patient portals, clinical dashboards, and HIPAA-compliant systems that put care first.',
  },
  {
    icon: '📊',
    title: 'Data Engineering',
    description: 'ETL pipelines for health data, real-time analytics, and ML-ready data infrastructure.',
  },
  {
    icon: '⚛️',
    title: 'Frontend Development',
    description: 'Accessible, performant interfaces with React and TypeScript that clinicians and patients love.',
  },
  {
    icon: '🔬',
    title: 'Research Tools',
    description: 'Custom software for labs and research teams—from sample tracking to experiment visualization.',
  },
  {
    icon: '☁️',
    title: 'Cloud Infrastructure',
    description: 'Secure, scalable cloud architecture on AWS and GCP for healthcare workloads.',
  },
]

export default function Features() {
  return (
    <SectionWrapper id="features" className="bg-forest-900/30">
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-accent-green/70 text-sm mb-4">
          <span className="w-8 h-px bg-accent-green/30" />
          Chapter III: The Toolkit
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          Specialized in the unique challenges of health technology—
          where precision, security, and user trust are non-negotiable.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.title}
            variants={fadeInUp}
            className="group glass glass-hover rounded-xl p-6"
          >
            <div className="w-12 h-12 glass rounded-lg flex items-center justify-center text-2xl mb-4">
              {skill.icon}
            </div>

            <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent-green transition-colors duration-200">
              {skill.title}
            </h3>

            <p className="text-white/40 text-sm leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack */}
      <motion.div variants={fadeInUp} className="mt-12">
        <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-4">
          Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            'React', 'TypeScript', 'Python', 'R', 'AWS',
            'PostgreSQL', 'FHIR', 'HL7', 'Docker', 'Terraform'
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 glass rounded-full text-xs text-white/50 hover:text-white/70 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
