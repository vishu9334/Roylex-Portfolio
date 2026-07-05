import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { Layers, ShieldCheck, KeyRound, MessageSquareCode, Database, Cloud } from 'lucide-react'
import { aboutData } from '../constants/about'

const About = () => {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Parallax on image – moves slower than scroll
  const imageY = useTransform(heroScroll, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(heroScroll, [0, 1], [1, 1.06])

  // Background orb parallax
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden dot-grid bg-transparent"
    >
      {/* ── Floating ambient orbs (matching home sunrise theme) */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[5%] left-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
      />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ─────────────────────────────────────────────────
          BLOCK 1 · Split Hero — Text Left + Glowing Image Right
      ───────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden"
      >
        {/* Left: Text column */}
        <div className="relative z-10 flex flex-col gap-10 px-6 sm:px-12 lg:px-20 py-32 lg:py-28">

          {/* Section tag pill */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm text-xs font-mono uppercase tracking-widest text-amber-300/80"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(251,191,36,1)] animate-pulse" />
            About Me
          </motion.span>

          {/* Big headline */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-panchang text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight"
          >
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500">
              real-world
            </span>{' '}
            apps with{' '}
            <span className="inline-flex items-end gap-2">
              {/* Inline sparkle - like EatNaked */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                className="inline-block w-12 h-12 mb-1"
                animate={{ rotate: [0, 15, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              >
                <path d="M50.8403 35.437C34.2081 38.1721 31.2512 41.6464 29.0336 61.9007C28.9597 62.566 27.9987 62.566 27.9248 61.9007C25.7072 41.6464 22.7503 38.246 6.11811 35.437C5.45282 35.3631 5.45282 34.4021 6.11811 34.3282C22.7503 31.5931 25.7072 28.1928 27.9248 7.93842C27.9987 7.27313 28.9597 7.27313 29.0336 7.93842C31.2512 28.1928 34.2081 31.5192 50.8403 34.3282C51.4317 34.4021 51.4317 35.2892 50.8403 35.437Z" fill="#10b981" />
                <path d="M57.937 12.0784C52.7626 13.1133 51.2841 14.8135 50.3971 20.875C50.3232 21.5403 49.3622 21.5403 49.2883 20.875C48.4012 14.8135 46.9228 13.1133 41.7483 12.0045C41.157 11.8566 41.157 11.0435 41.7483 10.8957C46.8489 9.86077 48.4012 8.16058 49.2883 2.09906C49.3622 1.43378 50.3622 1.43378 50.3971 2.09906C51.2841 8.16058 52.7626 9.86077 57.937 10.9696C58.5284 11.1174 58.5284 12.0045 57.937 12.0784Z" fill="#34d399" />
              </motion.svg>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">purpose.</span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/50 text-lg leading-relaxed max-w-xl"
          >
            <span className="text-white/80">Focused on building responsive, scalable applications.</span>{' '}
            {aboutData.description}
          </motion.p>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-wrap gap-3"
          >
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-white/40 text-xs font-mono uppercase tracking-widest">
              📍 {aboutData.location}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono uppercase tracking-widest">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              Open to opportunities
            </span>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="grid grid-cols-3 gap-6 pt-4 border-t border-white/[0.08]"
          >
            {[
              { number: '10+', label: 'Projects' },
              { number: '15+', label: 'Technologies' },
              { number: '100%', label: 'Passion' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.5, type: 'spring' }}
              >
                <span className="text-3xl font-bold font-panchang text-emerald-400 block">{stat.number}</span>
                <span className="text-xs font-mono text-white/30 uppercase tracking-wider">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right: Glowing Developer Image */}
        <div className="relative h-full min-h-[60vh] lg:min-h-screen overflow-hidden">

          {/* Deep warm amber vignette on left edge to blend into the gradient */}
          <div className="absolute inset-y-0 left-0 w-32 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to right, rgba(7,10,15,0.95), transparent)' }}
          />
          {/* Bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-40 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #070a0f, transparent)' }}
          />
          {/* Top vignette */}
          <div className="absolute inset-x-0 top-0 h-32 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(7,10,15,0.6), transparent)' }}
          />

          {/* The Lottie animation with parallax */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <DotLottieReact
              src="https://lottie.host/c7a42786-fa76-43b0-88a0-a94783c22c04/bRx4T1zV0T.json"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>

          {/* Emerald screen-glow overlay — the "bulb is on" effect */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'radial-gradient(ellipse at 60% 50%, rgba(16,185,129,0.08) 0%, transparent 65%)',
            }}
          />

          {/* Amber sunrise glow from top-left — matching Hero theme */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: 'radial-gradient(ellipse at 0% 0%, rgba(180,83,9,0.25) 0%, transparent 60%)',
            }}
          />

          {/* Floating role badge on image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-16 right-8 z-30 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl p-5 max-w-[220px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-emerald-400"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <span className="text-xs font-mono text-emerald-400/80 uppercase tracking-widest">Status</span>
            </div>
            <p className="text-white/80 text-sm font-medium leading-snug">{aboutData.role}</p>
            <p className="text-white/30 text-xs mt-1 font-mono">Available for work ✦</p>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          BLOCK 2 · Full-width Bold Statement
      ───────────────────────────────────────────────── */}
      <div className="px-6 sm:px-12 lg:px-20 py-24">
        <motion.p
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-panchang text-3xl sm:text-4xl lg:text-5xl text-white/80 leading-[1.3] max-w-5xl"
        >
          My focus is on{' '}
          <span className="text-emerald-400">fullstack architecture,</span>{' '}
          secure auth flows, real-time features, and{' '}
          <span className="text-amber-400">deployment-ready</span>{' '}
          production workflows.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-white/35 text-base leading-relaxed max-w-xl ml-auto"
        >
          {aboutData.secondDescription}
        </motion.p>
      </div>

      {/* ─────────────────────────────────────────────────
          BLOCK 3 · Numbered Highlight Cards
      ───────────────────────────────────────────────── */}
      <div className="px-6 sm:px-12 lg:px-20 py-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs font-mono uppercase tracking-widest text-amber-400/50 mb-12"
        >
          — Key Highlights —
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aboutData.highlights.map((item, i) => {
            const highlightStyles = [
              {
                icon: Layers,
                color: "text-[#61dafb]",
                bg: "bg-[#61dafb]/10",
                border: "border-[#61dafb]/20 group-hover:border-[#61dafb]/40",
                shadow: "shadow-[0_0_15px_rgba(97,218,251,0.1)]",
                glow: "rgba(97,218,251,0.06)"
              },
              {
                icon: ShieldCheck,
                color: "text-[#fb015b]",
                bg: "bg-[#fb015b]/10",
                border: "border-[#fb015b]/20 group-hover:border-[#fb015b]/40",
                shadow: "shadow-[0_0_15px_rgba(251,1,91,0.1)]",
                glow: "rgba(251,1,91,0.06)"
              },
              {
                icon: KeyRound,
                color: "text-[#06b6d4]",
                bg: "bg-[#06b6d4]/10",
                border: "border-[#06b6d4]/20 group-hover:border-[#06b6d4]/40",
                shadow: "shadow-[0_0_15px_rgba(6,182,212,0.1)]",
                glow: "rgba(6,182,212,0.06)"
              },
              {
                icon: MessageSquareCode,
                color: "text-[#a78bfa]",
                bg: "bg-[#a78bfa]/10",
                border: "border-[#a78bfa]/20 group-hover:border-[#a78bfa]/40",
                shadow: "shadow-[0_0_15px_rgba(167,139,250,0.1)]",
                glow: "rgba(167,139,250,0.06)"
              },
              {
                icon: Database,
                color: "text-[#10b981]",
                bg: "bg-[#10b981]/10",
                border: "border-[#10b981]/20 group-hover:border-[#10b981]/40",
                shadow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
                glow: "rgba(16,185,129,0.06)"
              },
              {
                icon: Cloud,
                color: "text-[#3b82f6]",
                bg: "bg-[#3b82f6]/10",
                border: "border-[#3b82f6]/20 group-hover:border-[#3b82f6]/40",
                shadow: "shadow-[0_0_15px_rgba(59,130,246,0.1)]",
                glow: "rgba(59,130,246,0.06)"
              }
            ]
            
            const currentStyle = highlightStyles[i] || highlightStyles[0]
            const IconComponent = currentStyle.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-white/[0.07] backdrop-blur-sm p-7 overflow-hidden cursor-default transition-all duration-500"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                {/* Hover glow linked to platform color */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 70%, ${currentStyle.glow}, transparent 60%)` }} />

                {/* Top Row: Icon + Index */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${currentStyle.bg} ${currentStyle.border} ${currentStyle.color} ${currentStyle.shadow}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-white/20 group-hover:text-white/40 transition-colors duration-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <p className="text-white/65 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {item}
                </p>
                {/* Bottom accent line animation */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px"
                  style={{ background: 'linear-gradient(to right, #b45309, #10b981, transparent)' }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: '70%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.08 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          BLOCK 4 · Two-column: Focus Areas + Currently Learning
      ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">

        {/* Focus Areas */}
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-white/25 mb-8">Focus Areas</p>
            <div className="flex flex-col">
              {aboutData.focusAreas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group flex items-center justify-between py-4 border-b border-white/[0.06] cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-white/15">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-white/60 text-base group-hover:text-white transition-colors duration-300">
                      {area}
                    </span>
                  </div>
                  <span className="text-white-400 text-sm opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Currently Learning */}
        <div className="px-6 sm:px-12 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-blue-700/95 mb-8">
              Currently Learning
              <motion.span
                className="ml-2 w-1.5 h-1.5 inline-block rounded-full bg-lime-500"
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </p>
            <div className="flex flex-wrap gap-3 mb-12">
              {aboutData.currentlyLearning.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, type: 'spring', stiffness: 150 }}
                  className="px-4 py-2 rounded-full border border-black-500/20 bg-green-800/15 text-white-300/75 text-xs font-mono cursor-default hover:border-white-500/40 hover:bg-green-500/12 hover:text-black transition-colors duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pl-5 border-l-2 border-red-500"
            >
              <p className="text-red/25 text-sm leading-relaxed italic">
                "Always building, always learning — the goal is production-ready code that solves real problems."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────
          BLOCK 5 · Scrolling Ticker
      ───────────────────────────────────────────────── */}
      <div className="py-5 overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...aboutData.focusAreas, ...aboutData.currentlyLearning, ...aboutData.focusAreas, ...aboutData.currentlyLearning].map((item, i) => (
            <span key={i} className="text-[11px] font-mono text-green-400 uppercase tracking-[0.25em]">
              <span className="text-cyan-500/95 mr-4">✦</span>
              {item}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  )
}

export default About
