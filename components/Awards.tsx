'use client'

import { motion } from 'framer-motion'

const awards = [
  {
    title: 'Award Name 1',
    organization: 'Organization Name',
    year: '2024',
  },
  {
    title: 'Award Name 2',
    organization: 'Organization Name',
    year: '2023',
  },
  {
    title: 'Award Name 3',
    organization: 'Organization Name',
    year: '2022',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl">✦</span>
          <h2 className="text-4xl font-bold">Awards</h2>
        </div>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-l-2 border-gray-700 pl-6"
            >
              <h3 className="text-2xl font-semibold mb-1">{award.title}</h3>
              <p className="text-xl text-gray-400 mb-2">{award.organization}</p>
              <p className="text-gray-500">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

