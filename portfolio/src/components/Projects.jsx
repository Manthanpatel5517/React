import { useState, useMemo } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import { useTilt } from '../hooks/useTilt.js'

function ProjectCard({ project }) {
  const tilt = useTilt({ max: 6, scale: 1.015 })

  return (
    <article
      ref={tilt.ref}
      onMouseMove={tilt.handleMouseMove}
      onMouseLeave={tilt.handleMouseLeave}
      className={`project-card tilt-card project-card--${project.accent}`}
    >
      <div className="tilt-card__glow" aria-hidden="true" />
      <div className="project-card__media" aria-hidden="true">
        <span className="project-card__glyph">{project.title.charAt(0)}</span>
      </div>
      <div className="project-card__body">
        <span className="project-card__tag">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-pill">
              {t}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--small btn--ghost">
            <Github size={16} /> GitHub
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn--small btn--primary">
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((p) => p.category))],
    []
  )
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <p className="section__eyebrow">03 · Projects</p>
        <h2 className="section__title">Things I've Built</h2>
        <p className="section__lead">
          A snapshot of practical work — from dashboards to data-driven UI.
        </p>

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-chip ${filter === cat ? 'filter-chip--active' : ''}`}
              role="tab"
              aria-selected={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
