'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Awards from '@/components/Awards'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Education />
      <Awards />
    </main>
  )
}

