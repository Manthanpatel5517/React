import { Trash2, Eye } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'

export default function PracticalRow({ practical, onView, onSubmit, onDelete }) {
  const isCompleted = practical.status === 'Completed'

  return (
    <tr onClick={() => onView(practical)}>
      <td className="cell-no">{practical.no}</td>
      <td className="cell-topic">
        <strong>{practical.topic}</strong>
        <span>{practical.task}</span>
      </td>
      <td className="cell-date">{practical.date}</td>
      <td>{practical.submission}</td>
      <td>{isCompleted ? practical.marks : '—'}</td>
      <td>
        <StatusBadge status={practical.status} />
      </td>
      <td>
        <div className="cell-actions" onClick={(e) => e.stopPropagation()}>
          {isCompleted ? (
            <button className="btn btn-secondary btn-sm" onClick={() => onView(practical)}>
              <Eye size={14} />
              View
            </button>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => onSubmit(practical)}>
              Submit
            </button>
          )}
          <button
            className="icon-btn"
            style={{ width: 32, height: 32 }}
            onClick={() => onDelete(practical)}
            aria-label="Delete practical"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </tr>
  )
}
