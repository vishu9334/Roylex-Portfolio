import React from 'react'
import { motion } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Contact = () => {
  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vishal-kumar-46b05b258',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      hoverBorder: 'hover:border-blue-500/30',
      textColor: 'text-blue-400',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/vishu9334',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      hoverBorder: 'hover:border-white/30',
      textColor: 'text-white/80',
    },
  ]

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center bg-transparent overflow-hidden"
    >
      {/* Background Grid */}
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

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.08] blur-[120px] bg-gradient-to-br from-amber-500 via-emerald-500 to-blue-500 z-0" />

      {/* Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 sm:px-10 lg:px-16 py-20">

        {/* LEFT: Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center"
        >
          <div className="w-full max-w-md lg:max-w-lg">
            <DotLottieReact
              src="https://lottie.host/eef5b27c-705a-41ba-947a-1bb832d8d34a/gGElvbcDmZ.json"
              loop
              autoplay
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <div className="flex flex-col gap-8 text-left">

          {/* Tag */}
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs text-amber-500 uppercase tracking-[0.25em]"
          >
            — Get In Touch —
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-panchang text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500">Connect</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif italic text-white/40 text-base sm:text-lg"
          >
            Open for collaborations, freelance work, and full-time opportunities.
          </motion.p>

          {/* Email */}
          <motion.a
            href="mailto:vishalkumarptn32@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-mono text-sm text-emerald-400 hover:text-emerald-300 tracking-wider transition-colors underline underline-offset-4 decoration-emerald-400/30"
          >
            vishalkumarptn32@gmail.com
          </motion.a>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-4 flex-wrap"
          >
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.08] bg-white/[0.03] ${social.hoverBorder} hover:bg-white/[0.06] transition-all duration-300`}
              >
                <span className={`${social.textColor} group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </span>
                <span className={`font-mono text-sm ${social.textColor} tracking-wider uppercase`}>
                  {social.name}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Bottom Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 flex flex-col gap-3"
          >
            <div className="w-12 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
            <span className="font-mono text-[10px] text-white/15 tracking-[0.3em] uppercase">
              Vishal Kumar © 2025
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact