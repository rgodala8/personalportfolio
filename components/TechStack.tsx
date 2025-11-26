'use client'

import { motion } from 'framer-motion'

const technologies = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Java',
  'C++',
  'Git',
  'Docker',
  'AWS',
  'MongoDB',
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl">✦</span>
          <h2 className="text-4xl font-bold">Tech Stack</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
            >
              <span className="text-lg">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

