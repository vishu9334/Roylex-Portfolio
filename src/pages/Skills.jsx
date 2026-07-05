import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '../constants/skills'

const Skills = () => {
  // Flatten all skills into a single array
  const allSkills = skillsData.flatMap(category => category.skills)

  // Split skills into two lists for the two vertical scrolling columns
  const half = Math.ceil(allSkills.length / 2)
  const col1Skills = allSkills.slice(0, half)
  const col2Skills = allSkills.slice(half)

  // Duplicate arrays to make infinite vertical marquee scrolling seamless
  const marquee1 = [...col1Skills, ...col1Skills]
  const marquee2 = [...col2Skills, ...col2Skills]

  return (
    <section
      id="skills"
      className="relative w-full overflow-hidden dot-grid bg-transparent"
    >
      {/* ── Background Glow Overlay ── */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none blur-[120px] z-0"
        style={{
          background: 'radial-gradient(circle, #b45309 10%, #10b981 50%, transparent 100%)',
        }}
      />

      {/* Line Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.040] z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

        {/* ── LEFT SIDE: Text Content ── */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left items-start">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs text-amber-400 uppercase tracking-[0.25em]"
          >
            — Technical Stack —
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-panchang text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white tracking-wide leading-none"
          >
            Works with the <br />
            tools you <br />
            already <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500">use</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/50 text-base sm:text-lg leading-relaxed max-w-xl"
          >
            Deep integrations with the most popular backend technologies, databases, APIs, DevOps platforms, and modern frontend tools. Every item represents a production-ready capability.
          </motion.p>
        </div>

        {/* ── RIGHT SIDE: Double Vertical Scrolling Columns ── */}
        <div className="lg:col-span-6 relative w-full h-[60vh] lg:h-[80vh] grid grid-cols-2 gap-6 overflow-hidden select-none pr-0 lg:pr-4">
          
          {/* Top and Bottom blur vignettes for vertical fade-out effect */}
          <div className="absolute inset-x-0 top-0 h-24 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 to-transparent z-20 pointer-events-none" />

          {/* COLUMN 1: Upward scrolling (y: 0% to -50%) */}
          <div className="h-full overflow-hidden flex flex-col justify-start">
            <motion.div
              className="flex flex-col gap-6 w-full py-4 items-center"
              animate={{ y: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 25,
              }}
            >
              {marquee1.map((skill, index) => (
                <motion.div
                  key={`c1-${index}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-center p-3 gap-2 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-emerald-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <span className="text-[10px] sm:text-[11px] font-mono text-white/50 group-hover:text-white/90 text-center truncate w-full transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* COLUMN 2: Downward scrolling (y: -50% to 0%) */}
          <div className="h-full overflow-hidden flex flex-col justify-start">
            <motion.div
              className="flex flex-col gap-6 w-full py-4 items-center"
              animate={{ y: ['-50%', '0%'] }}
              transition={{
                repeat: Infinity,
                ease: 'linear',
                duration: 25,
              }}
            >
              {marquee2.map((skill, index) => (
                <motion.div
                  key={`c2-${index}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-center p-3 gap-2 cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-amber-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <span className="text-[10px] sm:text-[11px] font-mono text-white/40 group-hover:text-white/90 text-center truncate w-full transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills