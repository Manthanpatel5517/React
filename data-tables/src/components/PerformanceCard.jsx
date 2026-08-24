export function PerformanceCard({ percent, completed, pending, upcoming }) {
  return (
    <div className="card performance-card">
      <div className="performance-top">
        <h3>Overall Performance</h3>
        <span className="performance-value">{percent}%</span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>

      <div className="performance-breakdown">
        <div className="performance-breakdown-item">
          <span className="swatch" style={{ background: 'var(--color-success)' }} />
          Completed: {completed}
        </div>
        <div className="performance-breakdown-item">
          <span className="swatch" style={{ background: 'var(--color-warning)' }} />
          Pending: {pending}
        </div>
        <div className="performance-breakdown-item">
          <span className="swatch" style={{ background: 'var(--color-info)' }} />
          Upcoming: {upcoming}
        </div>
      </div>
    </div>
  )
}

export function RoadmapCard({ practicals }) {
  const sorted = [...practicals].sort(
    (a, b) => parseFloat(a.no) - parseFloat(b.no)
  )
  const statusClass = {
    Completed: 'done',
    Pending: 'pending',
    Upcoming: 'upcoming',
  }

  return (
    <div className="card roadmap-card">
      <h3>Practical Roadmap</h3>
      <p>Your syllabus sequence at a glance, no. 11 through 16.</p>
      <div className="roadmap-track">
        {sorted.map((p, i) => (
          <div className="roadmap-node" key={p.no}>
            <div
              className={`roadmap-dot ${statusClass[p.status] || 'pending'}`}
              title={`${p.no} · ${p.topic} · ${p.status}`}
            >
              {p.no}
            </div>
            {i < sorted.length - 1 && <div className="roadmap-line" />}
          </div>
        ))}
      </div>
    </div>
  )
}
