import React from 'react'
import { navLinks } from '../constants/navLinks'
import { NavLink } from 'react-router'


const Navbar = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }
  return (  
    <div className='fixed top-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-6xl bg-[#070a0f]/20 backdrop-blur-md border-b border-white/20 flex justify-center items-center py-4 rounded-[10px] gap-4 sm:gap-10 font-panchang font-light uppercase tracking-widest text-xs shadow-lg'>
         {navLinks.slice(0, 6).map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            onClick={() => handleScroll(link.sectionId)}
            className='px-5 py-2 rounded-full transition-all duration-300 text-white/50 hover:text-white hover:bg-white/5 border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30'
          >
            {link.label}
          </NavLink>
         ))}
    </div>
  )
}
export default Navbar
