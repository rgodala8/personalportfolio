'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Company Name',
    period: 'Jan 2024 - Present',
  },
  {
    title: 'Software Development Intern',
    company: 'Company Name',
    period: 'Jun 2023 - Dec 2023',
  },
  {
    title: 'Full Stack Developer',
    company: 'Company Name',
    period: 'Jan 2022 - May 2023',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl">✦</span>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-2 border-gray-700 pl-6"
            >
              <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-xl text-gray-400 mb-2">{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

