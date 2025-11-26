'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="text-2xl text-purple-400">✦</span>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-[#800020] bg-clip-text text-transparent">About</h2>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hi, I'm Ritya! I'm a passionate software engineer and developer with a keen interest 
          in building innovative solutions and creating exceptional user experiences. I love 
          working with modern technologies and turning complex problems into simple, elegant solutions.
        </p>
      </motion.div>
    </section>
  )
}

