'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = ['Software Engineer', 'Developer', 'Designer', 'Creator']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Ritya Godala
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-4xl text-gray-400 mb-8 h-12"
        >
          <span className="inline-block">
            {roles[currentRole]}
          </span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          href="/resume.pdf"
          download
          className="inline-block px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  )
}

