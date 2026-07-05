import React, { useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import useSound from 'use-sound'

const LikeButton = () => {
  // 1. Total persistent likes count (starts at 0)
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('portfolio_likes')
    return savedLikes ? parseInt(savedLikes, 10) : 0
  })

  // 2. Progress percentage (0 to 100)
  const [progress, setProgress] = useState(() => {
    const savedProgress = localStorage.getItem('portfolio_like_progress')
    return savedProgress ? parseInt(savedProgress, 10) : 0
  })

  // 3. Status if 100% completed
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem('portfolio_has_liked') === 'true'
  })

  const [playClicky1] = useSound('/sound/clicky1.wav', { volume: 0.5 })
  const [playClicky2] = useSound('/sound/clicky2.wav', { volume: 0.5 })
  const [playClicky3] = useSound('/sound/clicky3.wav', { volume: 0.5 })
  const controls = useAnimation()

  const handleLikeClick = async () => {
    if (hasLiked) return // Already liked 100%

    const newProgress = Math.min(progress + 10, 100)

    // Play sequential clicky sounds based on progress
    if (newProgress <= 40) {
      playClicky1()
    } else if (newProgress <= 80) {
      playClicky2()
    } else {
      playClicky3()
    }

    setProgress(newProgress)
    localStorage.setItem('portfolio_like_progress', newProgress)

    // Whimsical spring bounce on each click
    controls.start({
      scale: [1, 1.25, 0.9, 1],
      transition: { duration: 0.25 }
    })

    // If it reaches 100%, increment total likes and lock it
    if (newProgress === 100) {
      const newTotalLikes = likes + 1
      setLikes(newTotalLikes)
      setHasLiked(true)
      localStorage.setItem('portfolio_likes', newTotalLikes)
      localStorage.setItem('portfolio_has_liked', 'true')

      // Huge heart pop animation
      await controls.start({
        scale: [1, 1.6, 0.8, 1.2, 1],
        rotate: [0, -15, 15, -5, 0],
        transition: { duration: 0.5, ease: "easeInOut" }
      })
    }
  }

  // Calculate SVG clipping Y position (24 is fully empty, 0 is fully filled)
  const clipY = 24 - (progress / 100) * 24

  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <motion.button
        animate={controls}
        whileHover={{ scale: hasLiked ? 1 : 1.15 }}
        whileTap={{ scale: hasLiked ? 1 : 0.85 }}
        onClick={handleLikeClick}
        disabled={hasLiked}
        className="relative w-16 h-16 flex items-center justify-center focus:outline-none cursor-pointer"
      >
        {/* Glowing aura around heart when filling */}
        {progress > 0 && (
          <div
            className="absolute inset-0 rounded-full blur-xl transition-all duration-300 z-0"
            style={{
              background: `radial-gradient(circle, ${hasLiked ? 'rgba(236,72,153,0.3)' : 'rgba(16,185,129,0.2)'} 0%, transparent 70%)`
            }}
          />
        )}

        {/* Custom SVG Heart with Liquid Fill */}
        <svg
          viewBox="0 0 24 24"
          className="w-12 h-12 z-10 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
        >
          <defs>
            {/* The Clip Path that rises up like water */}
            <clipPath id="heart-liquid-clip">
              <rect x="0" y={clipY} width="24" height="24" />
            </clipPath>
          </defs>

          {/* Background Outline Heart (empty/gray) */}
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1.5"
          />

          {/* Filled Heart (revealed by the clip path) */}
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill={hasLiked ? "#ec4899" : "#10b981"} // Pink when 100%, Emerald green when filling
            clipPath="url(#heart-liquid-clip)"
          />
        </svg>

        {/* Floating progress text indicator */}
        {!hasLiked && progress > 0 && (
          <div className="absolute -top-3 bg-emerald-500 text-white font-mono text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md z-30 pointer-events-none animate-bounce">
            {progress}%
          </div>
        )}
      </motion.button>

      {/* Persistent Likes Counter */}
      <div className="font-mono text-xs text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/5 backdrop-blur-sm select-none">
        {likes} {likes === 1 ? 'Like' : 'Likes'}
      </div>
    </div>
  )
}

export default LikeButton
