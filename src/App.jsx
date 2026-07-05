import { useState, useEffect, useRef } from 'react'
import { RouterProvider } from 'react-router/dom'
import { route } from './app/route'
import Preloader from './components/Preloader'
import { AnimatePresence } from 'framer-motion'
import useSound from 'use-sound'

const App = () => {
  const [hasEntered, setHasEntered] = useState(false)
  const [playBgMusic] = useSound('/sound/bg-music.wav', { volume: 0.5 })
  const musicStarted = useRef(false)

  useEffect(() => {
    if (hasEntered && !musicStarted.current) {
      musicStarted.current = true
      playBgMusic()
    }
  }, [hasEntered])

  return (
    <>
      <AnimatePresence>
        {!hasEntered && <Preloader key="preloader" onEnter={() => setHasEntered(true)} />}
      </AnimatePresence>
      <RouterProvider router={route}/>
    </>
  )
}

export default App