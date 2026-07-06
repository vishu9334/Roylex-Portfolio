import React, { useState } from 'react'
import { navLinks } from '../constants/navLinks'
import { NavLink } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (sectionId) => {
    setIsOpen(false)
    // Small timeout to allow the menu drawer close animation to finish
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  // Framer Motion variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <>
      {/* Main Navbar Bar */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-6xl bg-[#070a0f]/40 backdrop-blur-md border border-white/10 flex justify-between items-center py-4 px-6 sm:px-10 rounded-[12px] font-panchang tracking-widest text-xs shadow-xl">
        {/* Left Side: Brand Text */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll('home')}>
          <span className="text-[11px] font-bold text-white uppercase tracking-[0.25em]">VISHAL KUMAR</span>
        </div>

        {/* Center: Desktop Navigation Links (hidden on mobile/tablet) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {navLinks.slice(0, 6).map((link) => (
            <NavLink
              key={link.id}
              to={link.href}
              onClick={() => handleScroll(link.sectionId)}
              className="px-4 py-2 rounded-full transition-all duration-300 text-white/50 hover:text-white hover:bg-white/5 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right Side: Hamburger Menu Button (visible only on mobile/tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 text-white/80 hover:text-white transition-colors focus:outline-none cursor-pointer z-[110]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Full-Screen Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[95] bg-[#070a0f] flex flex-col justify-center items-center px-6 sm:px-12 md:hidden"
          >
            {/* Background Grid Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }}
            />

            {/* Split layout inside Mobile Menu */}
            <div className="relative z-10 w-full max-w-lg grid grid-cols-1 gap-10 items-center justify-items-center">
              {/* Lottie Animation (Lottify Menu) */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 pointer-events-none">
                <DotLottieReact
                  src="https://lottie.host/eef5b27c-705a-41ba-947a-1bb832d8d34a/gGElvbcDmZ.json"
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>

              {/* Vertical Navigation Links with Responsive Font Sizes */}
              <div className="flex flex-col items-center gap-4 sm:gap-6 text-center w-full">
                {navLinks.slice(0, 6).map((link) => (
                  <motion.div key={link.id} variants={linkVariants} className="w-full">
                    <NavLink
                      to={link.href}
                      onClick={() => handleScroll(link.sectionId)}
                      className="inline-block font-panchang font-light uppercase tracking-widest text-[clamp(1.5rem,6vw,2.5rem)] text-white/50 hover:text-white transition-all duration-300 py-1 hover:scale-105 active:scale-95"
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Brand Line */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
              <span className="font-mono text-[9px] text-white/20 tracking-[0.3em] uppercase">
                VISHAL KUMAR © 2025
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
