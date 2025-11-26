'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project Name 1',
    description: 'A brief description of your project and what it does. Highlight key features and technologies used.',
    link: '#',
  },
  {
    title: 'Project Name 2',
    description: 'A brief description of your project and what it does. Highlight key features and technologies used.',
    link: '#',
  },
  {
    title: 'Project Name 3',
    description: 'A brief description of your project and what it does. Highlight key features and technologies used.',
    link: '#',
  },
  {
    title: 'Project Name 4',
    description: 'A brief description of your project and what it does. Highlight key features and technologies used.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl">✦</span>
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="block p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-all group"
            >
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.description}</p>
              <span className="text-sm text-gray-500 mt-2 inline-block group-hover:text-gray-400">
                Click to view →
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

