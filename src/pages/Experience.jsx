import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experienceData } from '../constants/experience'
import logo from '../assets/CompanyLogo/logo.png'

const Experience = () => {
  const [selectedId, setSelectedId] = useState(1)
  const currentExp = experienceData.find((exp) => exp.id === selectedId) || experienceData[0]

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-transparent py-24 px-4 sm:px-6 lg:px-16 overflow-hidden flex flex-col justify-center items-center"
    >
      {/* Background patterns */}
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
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.05] blur-[150px] bg-gradient-to-br from-amber-500 to-emerald-500 z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.05] blur-[150px] bg-gradient-to-br from-teal-500 to-blue-500 z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Heading */}
        <div className="text-center flex flex-col items-center gap-4">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs text-emerald-400 uppercase tracking-[0.25em]"
          >
            — Professional History —
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-panchang text-4xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-tight"
          >
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500">Letter</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif italic text-white/40 text-base sm:text-lg max-w-xl"
          >
            Click the folders on the left to review the official experience letter certificates.
          </motion.p>
        </div>

        {/* Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Selector (Folder tabs) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest block mb-2 px-2">
              Select Experience
            </span>
            <div className="flex flex-col gap-2.5 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
              {experienceData.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`group relative text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    selectedId === exp.id
                      ? 'bg-white/[0.04] border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.05)]'
                      : 'bg-white/[0.01] border-white/[0.05] hover:border-white/10 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Active Indicator Light */}
                    <div className="mt-1.5">
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedId === exp.id
                          ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]'
                          : 'bg-white/10 group-hover:bg-white/25'
                      }`} />
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className={`font-mono text-[10px] tracking-wider uppercase ${
                        selectedId === exp.id ? 'text-amber-500' : 'text-white/30'
                      }`}>
                        {exp.period} • {exp.type}
                      </span>
                      <h3 className={`text-sm font-semibold tracking-wide transition-colors ${
                        selectedId === exp.id ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                      }`}>
                        {exp.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Canva Style Certificate/Letter */}
          <div className="lg:col-span-8 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedId}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[700px] aspect-[1/1.414] bg-[#f9f8f6] text-[#1c1c1c] p-8 sm:p-14 md:p-16 rounded-lg shadow-[0_25px_60px_rgba(0,0,0,0.5)] border-[12px] border-[#e7e3da] overflow-hidden flex flex-col justify-between"
              >
                {/* Canva Border Accent Lines */}
                <div className="absolute inset-4 border border-[#d6cfbe] pointer-events-none" />
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#b89f74]" />
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#b89f74]" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#b89f74]" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#b89f74]" />

                {/* Letterhead Header */}
                <div className="flex flex-col items-center text-center gap-2 border-b border-[#ebdcc1] pb-6 mt-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={logo}
                      alt="Company Logo"
                      className="w-10 h-10 object-contain filter grayscale opacity-90"
                    />
                    <span className="font-panchang text-base font-extrabold tracking-wider text-[#222]">
                      SOLVEX LABS
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#777] uppercase tracking-widest">
                    Innovative Peer-to-Peer Developer Mentorship Ecosystem
                  </span>
                  <div className="flex gap-4 text-[9px] font-serif italic text-[#888] mt-1">
                    <span>Email: contact@solve2x.com</span>
                    <span>•</span>
                    <span>Web: www.solve2x.com</span>
                  </div>
                </div>

                {/* Document Subtitle / Title */}
                <div className="flex flex-col items-center text-center gap-2 mt-6">
                  <span className="font-mono text-[10px] font-semibold text-[#8e7544] tracking-[0.3em] uppercase">
                    CERTIFICATE OF ENGAGEMENT
                  </span>
                  <h1 className="font-panchang text-2xl font-bold tracking-tight text-[#111]">
                    EXPERIENCE LETTER
                  </h1>
                  <div className="w-16 h-[2px] bg-[#cbbda2] mt-1" />
                </div>

                {/* Letter Body (Using requested Edu VIC WA NT Beginner font) */}
                <div className="my-8 flex-grow flex flex-col justify-center gap-4 text-justify px-4 sm:px-6">
                  <p className="font-edu text-[17px] sm:text-[19px] leading-[1.7] text-[#2c2c2c] font-medium">
                    This is to officially certify that <span className="font-bold text-[#111] underline decoration-[#cbbda2] decoration-2 underline-offset-4">Vishal Kumar</span> has successfully engaged in the capacity of <span className="font-bold text-[#111]">{currentExp.title}</span> during the period of <span className="font-bold text-[#111]">{currentExp.period}</span>.
                  </p>

                  <p className="font-edu text-[17px] sm:text-[19px] leading-[1.7] text-[#2c2c2c] font-medium">
                    During this timeframe, they demonstrated exceptional skills in MERN stack architectures, focusing on {currentExp.description}.
                  </p>

                  <div className="mt-2">
                    <span className="font-mono text-[10px] font-bold text-[#8e7544] tracking-wider uppercase block mb-1">
                      Key Highlights & Contributions:
                    </span>
                    <ul className="grid grid-cols-1 gap-1 pl-1">
                      {currentExp.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="font-edu text-[15px] sm:text-[17px] text-[#3d3d3d] flex items-start gap-2">
                          <span className="text-[#8e7544] font-bold mt-0.5">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-2">
                    <span className="font-mono text-[10px] font-bold text-[#8e7544] tracking-wider uppercase block mb-1.5">
                      Verified Stack Capabilities:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentExp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[9px] font-mono text-[#555] bg-[#ebdcc1]/30 border border-[#d6cfbe]/60 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signatures & Seal Footer */}
                <div className="flex justify-between items-end border-t border-[#ebdcc1] pt-6 mb-2 px-4 sm:px-6">
                  {/* Authorized Signatory */}
                  <div className="flex flex-col items-start gap-1">
                    <span className="font-edu text-lg text-[#3a5a40] rotate-[-4deg] pl-2 select-none pointer-events-none font-bold">
                      SolveX Team
                    </span>
                    <div className="w-28 h-[1px] bg-[#d6cfbe]" />
                    <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider">
                      Authorized Signatory
                    </span>
                  </div>

                  {/* Stamp/Seal Badge */}
                  <div className="relative w-16 h-16 flex items-center justify-center rounded-full border border-dashed border-[#c5b597] bg-[#fdfdfc]">
                    <div className="w-12 h-12 rounded-full border-2 border-[#b89f74]/30 flex flex-col items-center justify-center text-[7px] text-[#b89f74] font-mono font-bold leading-tight text-center">
                      <span>OFFICIAL</span>
                      <span>SEAL</span>
                    </div>
                  </div>

                  {/* Candidate Signature */}
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-edu text-lg text-[#1e293b] rotate-[3deg] pr-2 select-none pointer-events-none font-bold">
                      Vishal Kumar
                    </span>
                    <div className="w-28 h-[1px] bg-[#d6cfbe]" />
                    <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider">
                      Engaged Candidate
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience