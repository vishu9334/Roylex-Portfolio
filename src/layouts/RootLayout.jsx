import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Lenis from 'lenis'

const RootLayout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // Smooth linear interpolation
      smoothWheel: true,
    })


    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className='relative w-full min-h-screen flex flex-col items-center bg-[#070a0f] text-white dot-grid'>
      <Navbar />
      <div className='relative z-10 w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
