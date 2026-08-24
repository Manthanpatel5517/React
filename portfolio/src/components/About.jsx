import { Code2, Layers, Sparkles, GraduationCap } from 'lucide-react'

const stats = [
  { icon: Code2, value: '7+', label: 'Technologies Learned' },
  { icon: Layers, value: '4', label: 'Projects Built' },
  { icon: Sparkles, value: 'React', label: 'Developer' },
  { icon: GraduationCap, value: '∞', label: 'Always Learning' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="section__eyebrow">01 · About</p>
        <h2 className="section__title">About Me</h2>

        <div className="about__grid">
          <p className="about__text">
            I am a passionate and motivated developer focused on frontend development and
            React.js. I have completed my web development course and built projects using HTML,
            CSS, Bootstrap, JavaScript, and React. I am continuously improving my coding skills
            and looking forward to starting my professional journey as a developer.
          </p>

          <div className="about__stats">
            {stats.map(({ icon: Icon, value, label }) => (
              <div className="stat-card" key={label}>
                <Icon className="stat-card__icon" size={22} />
                <span className="stat-card__value">{value}</span>
                <span className="stat-card__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
