import { Github, Linkedin, Instagram } from 'lucide-react'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__brand">
          <Logo size={30} />
          <div>
            <p className="footer__name">Manthan Patel</p>
            <p className="footer__role">Frontend Developer | React Developer</p>
          </div>
        </div>

        <div className="footer__social">
          <a href="https://github.com/Manthanpatel5517" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a href="https://www.instagram.com/manthan_5517/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a href="https://www.instagram.com/manthan_5517/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={19} />
          </a>
        </div>
      </div>
      <p className="footer__copy">© 2026 Manthan Patel. All Rights Reserved.</p>
    </footer>
  )
}
