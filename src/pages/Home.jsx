import About from './About'
import Skills from './Skills'
import Project from './Project'
import Experience from './Experience'
import Contact from './Contact'
import LikeButton from '../components/LikeButton'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import useSound from 'use-sound'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { aboutData } from '../constants/about'

const Home = () => {
  const containerRef = useRef(null)
  const [playBirdNature, { stop }] = useSound('/sound/bird-nature.mp3', {
    volume: 0.5,
    preload: true,
    interrupt: true,
  })
  const [showLotties, setShowLotties] = useState(false)
  const [isTitleHovered, setIsTitleHovered] = useState(false)
  const touchTimeoutRef = useRef(null)

  const handleTouchStart = () => {
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current)
    setIsTitleHovered(true)
    stop()
    playBirdNature()

    // Keep the liquid distortion active for 2.5 seconds on tap, then gently reset
    touchTimeoutRef.current = setTimeout(() => {
      setIsTitleHovered(false)
      stop()
    }, 2500)
  }

  useEffect(() => {
    // Delay loading heavy Lotties by 6 seconds to ensure the Preloader runs at a buttery smooth 60fps
    const timer = setTimeout(() => {
      setShowLotties(true)
    }, 6000)
    return () => {
      clearTimeout(timer)
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Scroll animations for main text block
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className='w-full bg-[#070a0f] text-white'>
      {/* Liquid Water Filter Definition (Invisible but rendered to prevent iOS/Safari display:none exclusion bugs) */}
      <svg style={{ position: 'absolute', width: '1px', height: '1px', opacity: 0, pointerEvents: 'none', zIndex: -1 }}>
        <filter id="water-liquid">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="2" result="noise">
            <animate attributeName="baseFrequency" values="0.015; 0.025; 0.015" dur="3s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="16" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* ── HERO SECTION ── */}
      {/* Grid structure is used here to stack background layers smoothly without position absolute breaking responsiveness */}
      <section
        id='home'
        ref={containerRef}
        className='w-full min-h-screen grid grid-cols-1 grid-rows-1 place-items-center overflow-hidden dot-grid bg-[radial-gradient(ellipse_at_top_left,#b45309_0%,#1e1b4b_40%,#070a0f_80%,#000000_100%)]'
      >






        {/* Foreground Lottie Layers (Deferred until preloader is done to prevent lag) */}
        {showLotties && (
          <>
            {/* LAYER 2: Clouds (Restored) */}
            <div className="col-start-1 row-start-1 w-full h-full z-10 pointer-events-none">
              <DotLottieReact
                src="https://lottie.host/50c2fcb4-5f81-4d6e-a9ef-bea4605d4b18/P6EDpF02x8.json"
                loop
                autoplay
              />
            </div>

            {/* LAYER 4: Left Side Tree (Monkey Tree - Scaled down slightly) */}
            <div className="col-start-1 row-start-1 w-full h-full z-30 pointer-events-none hidden md:flex items-end justify-start">
              <div className="h-[80vh] max-w-[65vw] pb-0 -translate-x-[40%] translate-y-[5%] flex ">
                <DotLottieReact
                  src="https://lottie.host/384b6b62-6602-4b12-93fe-f48615385ccb/Hfn2McyP2F.json"
                  loop
                  autoplay
                  style={{ height: '100%', width: 'auto' }}
                />
              </div>
            </div>



            {/* LAYER 6: Right Side Tree (Scaled down and positioned at top-right) */}
            <div className="col-start-1 row-start-1 w-full h-full z-30 pointer-events-none hidden md:flex items-start justify-end">
              <div className="h-[80vh] w-auto max-w-[65vw] pb-0 translate-x-[20%] -translate-y-[5%] flex items-start">
                <DotLottieReact
                  src="https://lottie.host/31d35a15-b082-4326-81e1-caff3849d4cf/ageZyh6ITs.json"
                  loop
                  autoplay
                  style={{ height: '100%', width: 'auto' }}
                />
              </div>
            </div>
          </>
        )}

        {/* LAYER 7: Hero Content Wrapper (Z-40) */}
        <motion.div
          style={{ y: textY, opacity: opacityFade }}
          className="col-start-1 row-start-1 flex flex-col items-center text-center gap-8 px-4 w-full max-w-5xl z-40 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 py-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-[inset_0_0_20px_rgba(16,185,129,0.1)] pointer-events-auto max-w-sm sm:max-w-lg"
          >
            <span className="text-xs sm:text-sm text-emerald-300 font-semibold block mb-1">
              वृन्दावन का कण-कण बोले श्री राधे-राधे 🙏
            </span>
            <span className="text-[10px] sm:text-xs text-emerald-400/80 font-light block leading-relaxed">
              हे शिव आप मेरे गुरु हैं मैं आपका शिष्य हूं मुझे शिष्य पर दया करें
            </span>
          </motion.div>

          {/* Main Headline (with Word Fly Animation from the Trees + Liquid Hover) */}
          <motion.div
            className="relative cursor-default group pointer-events-auto"
            onMouseEnter={() => { setIsTitleHovered(true); stop(); playBirdNature(); }}
            onMouseLeave={() => { setIsTitleHovered(false); stop(); }}
            onTouchStart={handleTouchStart}
          >
            {/* Base Text (Fades out on hover) */}
            <h1 className={`font-panchang text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[1.1] tracking-wide text-white drop-shadow-2xl transition-opacity duration-500 ${isTitleHovered ? 'opacity-0' : 'opacity-100'}`}>
              <motion.span
                className="inline-block"
                initial={{ x: -250, opacity: 0, rotate: -8 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                MERN
              </motion.span>{" "}
              <motion.span
                className="inline-block"
                initial={{ x: 250, opacity: 0, rotate: 8 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              >
                STACK
              </motion.span> <br />
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-green-600"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                DEVELOPER
              </motion.span>
            </h1>

            <h1
              className={`absolute inset-0 font-panchang text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[1.1] tracking-wide text-white drop-shadow-2xl transition-opacity duration-500 pointer-events-none ${isTitleHovered ? 'opacity-100' : 'opacity-0'}`}
              style={{ filter: 'url(#water-liquid)', transform: 'translate3d(0,0,0)', willChange: 'filter' }}
            >
              MERN STACK <br />
              <span className="text-emerald-400">
                DEVELOPER
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 text-sm sm:text-lg md:text-xl lg:text-2xl font-light max-w-3xl leading-relaxed mt-2 pointer-events-auto"
          >
            {aboutData.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-6 pointer-events-auto"
          >
            <motion.a
              href={aboutData.resumeLink}
              download="Vishal_Kumar_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-medium uppercase tracking-widest text-sm rounded-full transition-colors hover:bg-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]"
            >
              <span>{aboutData.resumeText}</span>
            </motion.a>

            <div className="flex items-center gap-6">
              <span className="text-white/30 font-mono text-xs uppercase tracking-widest hidden sm:block">
                — OR —
              </span>
              <LikeButton />
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* ── OTHER SECTIONS ── */}
      <About />
      <Skills />
      <Project />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home
