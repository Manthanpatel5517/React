import { useEffect, useState } from 'react'
import { ArrowRight, Mail, Github, Linkedin, FileDown } from 'lucide-react'
import ThreeBackground from './ThreeBackground.jsx'
import { useTilt } from '../hooks/useTilt.js'

const codeLines = [
  { indent: 0, text: 'const developer = {' },
  { indent: 1, text: "name: 'Manthan Patel'," },
  { indent: 1, text: "role: 'Frontend Developer'," },
  { indent: 1, text: "stack: ['React', 'JS', 'CSS3']," },
  { indent: 1, text: 'available: true,' },
  { indent: 0, text: '}' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const tilt = useTilt({ max: 7, scale: 1.015 })

  useEffect(() => {
    if (visibleLines >= codeLines.length) return
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 260)
    return () => clearTimeout(t)
  }, [visibleLines])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <ThreeBackground />
      <div className="section-inner hero__inner">
        <div className="hero__content fade-in-up">
          <p className="eyebrow">
            <span className="eyebrow__dot" /> Available for internships &amp; junior roles
          </p>
          <h1 className="hero__title">
            Hi, I'm <span className="accent-text">Manthan Patel</span>
          </h1>
          <h2 className="hero__subtitle">Frontend Developer &amp; React Developer</h2>
          <p className="hero__desc">
            I am a passionate web developer who has completed training in HTML, CSS, Bootstrap,
            JavaScript, C, C++, and React.js. I enjoy creating responsive, modern, and
            user-friendly websites and applications.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
              View My Projects <ArrowRight size={18} />
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              Contact Me <Mail size={18} />
            </button>
            <a href="/resume.pdf" download className="btn btn--outline">
              Resume <FileDown size={18} />
            </a>
          </div>
          <div className="hero__social">
            <a href="https://github.com/Manthanpatel5517" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={19} />
            </a>
            <a href="https://www.instagram.com/manthan_5517/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        <div className="hero__visual fade-in-up fade-in-up--delay">
          <div
            className="editor editor--tilt"
            ref={tilt.ref}
            onMouseMove={tilt.handleMouseMove}
            onMouseLeave={tilt.handleMouseLeave}
          >
            <div className="editor__bar">
              <span className="editor__dot editor__dot--red" />
              <span className="editor__dot editor__dot--yellow" />
              <span className="editor__dot editor__dot--green" />
              <span className="editor__filename">portfolio.jsx</span>
            </div>
            <div className="editor__body">
              {codeLines.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="editor__line" style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  <span className="editor__lineno">{i + 1}</span>
                  <span>{line.text}</span>
                </div>
              ))}
              {visibleLines < codeLines.length && <span className="editor__cursor" />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
