import { CheckCircle2, Circle } from 'lucide-react'
import { learningPath, education } from '../data/education.js'

export default function Education() {
  return (
    <section id="education" className="section section--muted">
      <div className="section-inner">
        <p className="section__eyebrow">04 · Education</p>
        <h2 className="section__title">My Learning Journey</h2>

        <div className="learning-path">
          {learningPath.map((item, i) => (
            <div className="learning-path__node" key={item.step}>
              {item.status === 'done' ? (
                <CheckCircle2 className="learning-path__icon learning-path__icon--done" size={20} />
              ) : (
                <Circle className="learning-path__icon learning-path__icon--current" size={20} />
              )}
              <span>{item.step}</span>
              {i < learningPath.length - 1 && <span className="learning-path__connector" />}
            </div>
          ))}
        </div>

        <div className="timeline">
          {education.map((item) => (
            <div className="timeline__item" key={item.title}>
              <div className="timeline__marker" />
              <div className="timeline__card">
                <span className="timeline__period">{item.period}</span>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
