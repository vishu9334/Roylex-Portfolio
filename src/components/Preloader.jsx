import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useSound from 'use-sound'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const CustomCursor = ({ mousePosition }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000]"
      animate={{ x: mousePosition.x, y: mousePosition.y }}
      transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      style={{ marginLeft: '-4px', marginTop: '-4px' }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
      >
        <path 
          d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L5.85 2.86c-.31-.31-.85-.09-.85.35Z" 
          stroke="rgba(0,0,0,0.5)" 
          strokeWidth="1" 
          strokeLinejoin="round" 
        />
      </svg>
    </motion.div>
  )
}

const Preloader = ({ onEnter }) => {
  const [step, setStep] = useState(0)
  const [playEnter] = useSound('/sound/well-Enter.wav')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [textMousePos, setTextMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const textContainerRef = useRef(null)

  const handleMouseMove = (e) => {
    // Global mouse tracking for custom cursor
    setMousePosition({ x: e.clientX, y: e.clientY })

    // Relative mouse tracking for text spotlight
    if (textContainerRef.current) {
      const rect = textContainerRef.current.getBoundingClientRect()
      setTextMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleStart = () => {
    playEnter()
    setStep(1)
  }

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => {
        setStep(2)
        onEnter()
      }, 5500)
      return () => clearTimeout(timer)
    }
  }, [step, onEnter])

  const words = ['Fantasy', 'Developer']

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.1 },
    },
  }

  const wordVariant = {
    hidden: { opacity: 0, y: 60, filter: 'blur(20px)', scale: 0.85 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: { type: 'spring', stiffness: 70, damping: 14 },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col overflow-hidden dot-grid bg-[radial-gradient(ellipse_at_top_left,#b45309_0%,#1e1b4b_40%,#070a0f_80%,#000000_100%)] cursor-none"
      exit={{ y: '-100vh' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      onMouseMove={handleMouseMove}
    >
      <CustomCursor mousePosition={mousePosition} />

      {/* ── Centre content ── */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
        <AnimatePresence mode="wait">

          {/* STEP 0: Arrow Button */}
          {step === 0 && (
            <motion.button
              key="start-btn"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: 'blur(16px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              onClick={handleStart}
              className="group relative flex items-center justify-center w-24 h-24 rounded-full focus:outline-none bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.37),inset_0_1px_0_rgba(255,255,255,0.4)] cursor-none"
            >
              {/* Pulsing ring */}
              <span className="absolute inset-0 rounded-full animate-ping bg-indigo-500/20" />
              <svg
                className="w-10 h-10 text-white relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          )}

          {/* STEP 1: Fantasy Developer text */}
          {step === 1 && (
            <motion.div
              key="text-anim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center gap-6 w-full"
            >
              <motion.div
                ref={textContainerRef}
                variants={container}
                initial="hidden"
                animate="visible"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative flex flex-wrap justify-center gap-x-6 gap-y-2 p-8 sm:p-12"
              >
                {/* 
                  When hovering, we apply a mask-image that acts like a spotlight bulb.
                  It reveals the text fully near the cursor and dims it slightly further away.
                  Because it's a mask on the text container, the light stays *inside* the font.
                */}
                <motion.div
                  className="flex flex-wrap justify-center gap-x-6 gap-y-2"
                  animate={{
                    WebkitMaskImage: isHovering
                      ? `radial-gradient(300px circle at ${textMousePos.x}px ${textMousePos.y}px, rgba(0,0,0,1) 20%, rgba(0,0,0,0.3) 100%)`
                      : `radial-gradient(100% 100% at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)`,
                  }}
                  transition={{ type: 'tween', duration: 0.2 }}
                >
                  {words.map((word, index) => (
                    <motion.span
                      key={index}
                      variants={wordVariant}
                      className={`relative z-10 inline-block font-panchang font-bold uppercase leading-none tracking-widest text-5xl sm:text-6xl md:text-8xl bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(99,102,241,0.5)] ${
                        index === 0
                          ? 'bg-gradient-to-br from-white via-indigo-200 to-indigo-500'
                          : 'bg-gradient-to-br from-indigo-500 via-indigo-800 to-white'
                      }`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-white/40 font-mono text-xs uppercase tracking-[0.4em]"
              >
                Welcome to my portfolio
              </motion.p>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── Waving Hand — flex bottom section ── */}
      <AnimatePresence>
        {step === 1 && (
          <motion.div
            key="waving-hand"
            initial={{ y: '100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100vh', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 55, damping: 14, delay: 0.2 }}
            className="flex justify-center w-full pointer-events-none"
          >
            <div className="w-64 h-64 sm:w-96 sm:h-96">
              <DotLottieReact
                src="https://lottie.host/5d3407ef-1e45-468b-92ee-4200e8e53b9f/jBlkFXiRJP.json"
                loop
                autoplay
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}

export default Preloader
