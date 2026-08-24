import { useEffect, useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)

      let current = 'home'
      for (const link of links) {
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top <= 140) {
          current = link.id
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => handleClick('home')} aria-label="Go to home">
          <Logo size={30} />
          <span>
            Manthan<span className="accent-text">.</span>Patel
          </span>
        </button>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="navbar__right">
          <a href="/resume.pdf" download className="btn btn--ghost btn--small navbar__resume">
            <FileDown size={16} /> Resume
          </a>

          <button
            className="navbar__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <nav className={`navbar__links--mobile ${open ? 'is-open' : ''}`} aria-label="Mobile">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
          >
            {link.label}
          </button>
        ))}
        <a href="/resume.pdf" download className="btn btn--primary navbar__resume-mobile">
          <FileDown size={16} /> Download Resume
        </a>
      </nav>
    </header>
  )
}
