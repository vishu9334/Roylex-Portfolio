import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Assets Import
import logo from '../assets/CompanyLogo/logo.png'
import imgDoubtStudent from '../assets/SolveX/Student/DoubtStudent.png'
import imgStudentLanding from '../assets/SolveX/Student/StudentLanding.png'
import imgStudentDashboard from '../assets/SolveX/Student/StudentDashboard.png'
import imgAssessmentMCQ from '../assets/SolveX/Mentor/MentorAssessmentMCQ.png'
import imgMentorDashboard from '../assets/SolveX/Mentor/MentorDashboard.png'
import imgMentorLanding from '../assets/SolveX/Mentor/MentorLanding.png'
import imgStudentProfile from '../assets/SolveX/Student/StudentProfile.png'
import imgAssessmentEntry from '../assets/SolveX/Mentor/MentorAssessmentEntry.png'
import imgMentorProfile from '../assets/SolveX/Mentor/MentorProfile.png'

// ── Individual Project Case Study Card (Parallax Collage) ──────────────────
const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null)

  // Scroll tracker for parallax within this specific card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })

  // Different parallax offsets for the floating images to create depth (collage style)
  const y1 = useTransform(scrollYProgress, [0, 1], ['80px', '-80px'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['-120px', '120px'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['140px', '-140px'])

  const transformOffsets = [y1, y2, y3]

  return (
    <section
      ref={cardRef}
      className={`relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden ${project.bg}`}
    >
      {/* Background large faint index number */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none select-none opacity-[0.015] z-0">
        <span className="font-panchang text-[25vw] font-bold text-white uppercase tracking-widest">
          {project.num}
        </span>
      </div>

      {/* Floating images in a collage style around the centered text */}
      {project.images.map((img, i) => {
        const offset = transformOffsets[i] || y1
        return (
          <motion.div
            key={i}
            style={{ y: offset }}
            className={`hidden md:block overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_15px_45px_rgba(0,0,0,0.6)] ${img.className}`}
          >
            <img
              src={img.src}
              alt={`${project.title} screenshot ${i}`}
              className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        )
      })}

      {/* Center Text Group */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4 px-6 max-w-2xl select-none">

        {/* Category Tag */}
        <span className="text-[10px] font-mono tracking-[0.3em] text-amber-500 uppercase block mb-1">
          {project.tag}
        </span>

        {/* Big Bold Title */}
        <h2 className="font-panchang text-4xl sm:text-6xl md:text-7xl font-bold text-white uppercase tracking-tight leading-none">
          {project.title}
        </h2>

        {/* Thin Italic Subtitle */}
        <p className="font-serif italic text-white/50 text-base sm:text-lg tracking-wide mt-2">
          {project.subtitle}
        </p>

        {/* Small links under the title */}
        <div className="flex gap-6 mt-4 z-20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 tracking-wider uppercase transition-colors"
          >
            // GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-teal-400 hover:text-teal-300 tracking-wider uppercase transition-colors"
          >
            // Live Site
          </a>
        </div>
      </div>

      {/* Card Count Indices */}
      <div className="absolute top-12 left-6 sm:left-12 lg:left-20 text-xs font-mono text-white/20">
        <span className="text-white/80 font-bold italic font-serif text-sm mr-1">{project.num}</span>
        / {total}
      </div>
    </section>
  )
}

const Project = () => {
  const projectItems = [
    {
      num: '01',
      title: 'SOLVEX',
      tag: 'MERN PLATFORM',
      subtitle: 'peer-to-peer developer doubt resolution',
      bg: 'bg-[#0b0e0f]',
      github: 'https://github.com/vishu9334/Solve-X',
      live: 'https://www.solve2x.com',
      images: [
        { src: imgStudentLanding, className: 'absolute left-[6%] top-[15%] w-[30%] aspect-video z-0' },
        { src: imgDoubtStudent, className: 'absolute right-[6%] top-[18%] w-[26%] aspect-[4/3] z-0' },
        { src: imgStudentDashboard, className: 'absolute bottom-[10%] left-[22%] w-[33%] aspect-[16/10] z-0' }
      ]
    },
    {
      num: '02',
      title: 'MENTOR SYSTEM',
      tag: 'VERIFICATION SYSTEM',
      subtitle: 'competency testing & active dashboards',
      bg: 'bg-[#071318]',
      github: 'https://github.com/vishu9334/Solve-X',
      live: 'https://www.solve2x.com',
      images: [
        { src: imgAssessmentMCQ, className: 'absolute left-[8%] top-[18%] w-[28%] aspect-[4/3] z-0' },
        { src: imgMentorDashboard, className: 'absolute right-[8%] top-[12%] w-[32%] aspect-video z-0' },
        { src: imgMentorLanding, className: 'absolute bottom-[12%] right-[25%] w-[30%] aspect-[16/10] z-0' }
      ]
    },
    {
      num: '03',
      title: 'ADMIN PLATFORM',
      tag: 'CONTROL & METRICS',
      subtitle: 'mongo aggregations & security logs',
      bg: 'bg-[#0a0715]',
      github: 'https://github.com/vishu9334/Solve-X',
      live: 'https://www.solve2x.com',
      images: [
        { src: imgStudentProfile, className: 'absolute left-[5%] top-[14%] w-[30%] aspect-video z-0' },
        { src: imgAssessmentEntry, className: 'absolute right-[5%] top-[20%] w-[28%] aspect-[4/3] z-0' },
        { src: imgMentorProfile, className: 'absolute bottom-[8%] left-[24%] w-[32%] aspect-[16/10] z-0' }
      ]
    }
  ]

  return (
    <div className="relative w-full overflow-hidden">

      {/* ─────────────────────────────────────────────────
          INTRO SCREEN: Huge scattered WORK typography
      ───────────────────────────────────────────────── */}
      <section id="projects" className="relative min-h-screen w-full flex flex-col justify-center items-center bg-transparent overflow-hidden select-none">

        {/* Background Line Grid Pattern */}
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

        {/* Scattered "WORK" Text layout */}
        <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between p-12 sm:p-20 z-0">
          <div className="flex justify-between w-full">
            <span className="font-panchang text-[15vw] font-bold text-white/[0.03] leading-none">W</span>
            <span className="font-panchang text-[15vw] font-bold text-white/[0.03] leading-none">R</span>
          </div>
          <div className="flex justify-around w-full">
            <span className="font-panchang text-[15vw] font-bold text-white/[0.03] leading-none">O</span>
          </div>
          <div className="flex justify-end w-full">
            <span className="font-panchang text-[15vw] font-bold text-white/[0.03] leading-none">K</span>
          </div>
        </div>

        {/* Center Invitation */}
        <div className="text-center flex flex-col gap-4 z-10 px-6">
          <img src={logo} alt="Company Logo" className="w-10 h-10 object-contain mx-auto mb-4 animate-pulse" />
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.4em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.25em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-mono text-xs text-white uppercase tracking-[0.25em]"
          >
            — Projects —
          </motion.span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight tracking-tight text-white/95">
            Selected Works
          </h1>
          <p className="font-serif italic text-white text-base sm:text-lg mt-20">
            Scroll to explore case studies
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────
          CASE STUDIES: Vertical layout
      ───────────────────────────────────────────────── */}
      <div className="w-full">
        {projectItems.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            index={i}
            total="03"
          />
        ))}
      </div>

    </div>
  )
}

export default Project