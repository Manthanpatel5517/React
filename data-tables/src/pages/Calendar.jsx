import { useMemo } from 'react'
import { usePracticalContext } from '../App.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import { EmptyState } from '../components/EmptyState.jsx'

export default function CalendarPage() {
  const { practicals } = usePracticalContext()

  const sorted = useMemo(
    () =>
      [...practicals].sort(
        (a, b) => new Date(a.date.replace(/-/g, ' ')) - new Date(b.date.replace(/-/g, ' '))
      ),
    [practicals]
  )

  return (
    <>
      <div className="page-header">
        <h2>Calendar</h2>
        <p>Every practical deadline, ordered by date.</p>
      </div>

      <div className="card" style={{ padding: 22 }}>
        {sorted.length === 0 ? (
          <EmptyState title="No dates yet" message="Add a practical to see it show up on your calendar." />
        ) : (
          <div className="calendar-list">
            {sorted.map((p) => {
              const [day, month] = p.date.split('-')
              return (
                <div className="calendar-row" key={p.no}>
                  <div className="calendar-date-chip">
                    <span>{day}</span>
                    <span>{month.toUpperCase()}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <strong style={{ display: 'block', fontSize: 14, fontWeight: 600 }}>
                      {p.no} · {p.topic}
                    </strong>
                    <span style={{ fontSize: 12.5, color: 'var(--color-ink-soft)' }}>{p.task}</span>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}
