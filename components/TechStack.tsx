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
          <span className="text-2xl text-purple-400">✦</span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-[#800020] bg-clip-text text-transparent">Tech Stack</h2>
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
              className="px-6 py-3 bg-gradient-to-r from-purple-900/50 to-[#800020]/50 rounded-lg border border-purple-600/50 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-800/70 hover:to-[#5C0015]/70 transition-all"
            >
              <span className="text-lg">{tech}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

