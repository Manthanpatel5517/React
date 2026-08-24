import { Trash2, Eye } from 'lucide-react'
import PracticalRow from './PracticalRow.jsx'
import StatusBadge from './StatusBadge.jsx'
import { EmptyState, LoadingState } from './EmptyState.jsx'

export default function PracticalTable({ practicals, loading, onView, onSubmit, onDelete }) {
  if (loading) return <LoadingState />
  if (practicals.length === 0) return <EmptyState />

  return (
    <>
      <div className="table-scroll">
        <table className="practical-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Topic / Task</th>
              <th>Date</th>
              <th>Submission</th>
              <th>Marks</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {practicals.map((p) => (
              <PracticalRow
                key={p.no}
                practical={p}
                onView={onView}
                onSubmit={onSubmit}
                onDelete={onDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="practical-cards">
        {practicals.map((p) => {
          const isCompleted = p.status === 'Completed'
          return (
            <div className="practical-card" key={p.no} onClick={() => onView(p)}>
              <div className="practical-card-top">
                <div>
                  <strong>{p.no} · {p.topic}</strong>
                  <span>{p.task}</span>
                </div>
                <StatusBadge status={p.status} />
              </div>
              <div className="practical-card-meta">
                <span>{p.date}</span>
                <span>{isCompleted ? `Marks: ${p.marks}` : p.submission}</span>
              </div>
              <div className="practical-card-actions" onClick={(e) => e.stopPropagation()}>
                {isCompleted ? (
                  <button className="btn btn-secondary btn-sm" onClick={() => onView(p)}>
                    <Eye size={14} /> View
                  </button>
                ) : (
                  <button className="btn btn-primary btn-sm" onClick={() => onSubmit(p)}>
                    Submit
                  </button>
                )}
                <button className="icon-btn" style={{ width: 32, height: 32 }} onClick={() => onDelete(p)} aria-label="Delete practical">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
