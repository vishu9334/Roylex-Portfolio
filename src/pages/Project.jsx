import React from 'react'
import { motion } from 'framer-motion'

// Assets Import
import logo from '../assets/CompanyLogo/logo.png'
import imgLanding from '../assets/SolveX/Public/landing.webp'

const Project = () => {
  const project = {
    title: 'SOLVEX',
    tag: 'MERN PLATFORM',
    subtitle: 'peer-to-peer developer doubt resolution',
    description: 'A student doubt-solving platform that connects students with verified mentors in real time.',
    github: 'https://github.com/vishu9334/Solve-X',
    live: 'https://www.solve2x.com',
    image: imgLanding,
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-transparent py-24 overflow-hidden select-none"
    >
      {/* Background Line Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Intro Header */}
      <div className="text-center flex flex-col gap-4 z-10 px-6 mb-12">
        <img src={logo} alt="Company Logo" className="w-10 h-10 object-contain mx-auto mb-4 animate-pulse" />
        <motion.span
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs text-white uppercase tracking-[0.25em]"
        >
          — Featured Work —
        </motion.span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white/95 uppercase">
          Selected Work
        </h1>
      </div>

      {/* Single Project Showcase Card */}
      <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center">
        <div className="relative w-full py-8 flex flex-col items-center gap-6">
          
          {/* Project Header Info */}
          <div className="text-center flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-amber-500/80">01</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase">
                {project.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-panchang text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none">
              {project.title}
            </h2>

            {/* Subtitle */}
            <p className="font-serif italic text-white/50 text-sm tracking-wide mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Calligraphy Description */}
          <p className="font-edu text-[18px] sm:text-[20px] text-amber-100/90 max-w-xl leading-relaxed text-center px-4">
            {project.description}
          </p>

          {/* Links */}
          <div className="flex gap-6 mt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 tracking-wider uppercase transition-colors"
            >
              // GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-teal-400 hover:text-teal-300 tracking-wider uppercase transition-colors"
            >
              // Live Site
            </a>
          </div>

          {/* Showcase Single Screenshot Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl mt-6 aspect-video overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/20"
          >
            <img
              src={project.image}
              alt="SolveX Landing Showcase"
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Project