import { Smartphone, Atom, Sparkles, Zap } from 'lucide-react'

const reasons = [
  {
    icon: Smartphone,
    title: 'Responsive Web Development',
    desc: 'Interfaces that adapt cleanly across desktop, tablet and mobile.',
  },
  {
    icon: Atom,
    title: 'React.js Development',
    desc: 'Component-driven builds with hooks, routing and reusable UI.',
  },
  {
    icon: Sparkles,
    title: 'Clean & Modern UI',
    desc: 'Thoughtful spacing, typography and detail in every screen.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    desc: 'Quick to pick up new tools, feedback and best practices.',
  },
]

export default function WhyHireMe() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="section__eyebrow">05 · Why Hire Me</p>
        <h2 className="section__title">Why Work With Me</h2>
        <p className="section__lead">
          I'm motivated to begin my professional career and contribute to real-world projects —
          bringing energy, curiosity, and a willingness to learn fast to every team I join.
        </p>

        <div className="why-grid">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div className="why-card" key={title}>
              <Icon className="why-card__icon" size={24} />
              <h3 className="why-card__title">{title}</h3>
              <p className="why-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
