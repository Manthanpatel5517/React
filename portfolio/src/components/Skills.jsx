import { FileCode2, Palette, LayoutGrid, Braces, Atom, Cpu, Binary } from 'lucide-react'
import { skills } from '../data/skills.js'
import { useTilt } from '../hooks/useTilt.js'

const icons = {
  'HTML5': FileCode2,
  'CSS3': Palette,
  'Bootstrap': LayoutGrid,
  'JavaScript': Braces,
  'React.js': Atom,
  'C': Cpu,
  'C++': Binary,
}

function SkillCard({ skill }) {
  const tilt = useTilt({ max: 9, scale: 1.03 })
  const Icon = icons[skill.name]

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.handleMouseMove}
      onMouseLeave={tilt.handleMouseLeave}
      className={`skill-card tilt-card ${skill.primary ? 'skill-card--primary' : ''}`}
    >
      <div className="tilt-card__glow" aria-hidden="true" />
      <div className="skill-card__icon">
        <Icon size={26} />
      </div>
      <h3 className="skill-card__name">{skill.name}</h3>
      <span className="skill-card__category">{skill.category}</span>
      <p className="skill-card__desc">{skill.description}</p>
      <div className="skill-card__bar">
        <div className="skill-card__bar-fill" style={{ width: `${skill.level}%` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section--muted">
      <div className="section-inner">
        <p className="section__eyebrow">02 · Skills</p>
        <h2 className="section__title">What I Work With</h2>
        <p className="section__lead">
          A focused toolkit, built through consistent practice rather than a long checklist.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
