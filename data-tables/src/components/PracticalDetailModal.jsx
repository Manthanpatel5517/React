import { X, ArrowLeft } from 'lucide-react'
import StatusBadge from './StatusBadge.jsx'

export default function PracticalDetailModal({ practical, onClose, onSubmit }) {
  if (!practical) return null
  const isCompleted = practical.status === 'Completed'

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h3>Practical {practical.no}</h3>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="detail-grid">
            <div className="detail-item">
              <span>Topic</span>
              <strong>{practical.topic}</strong>
            </div>
            <div className="detail-item">
              <span>Task</span>
              <strong>{practical.task}</strong>
            </div>
            <div className="detail-item">
              <span>Date</span>
              <strong>{practical.date}</strong>
            </div>
            <div className="detail-item">
              <span>Submission</span>
              <strong>{practical.submission}</strong>
            </div>
            <div className="detail-item">
              <span>Marks</span>
              <strong>{isCompleted ? practical.marks : '—'}</strong>
            </div>
            <div className="detail-item">
              <span>Status</span>
              <StatusBadge status={practical.status} />
            </div>
          </div>

          <div className="detail-item">
            <span>Feedback</span>
            <div className="detail-feedback">
              {practical.feedback && practical.feedback.trim()
                ? practical.feedback
                : 'No feedback yet — this practical hasn\u2019t been reviewed.'}
            </div>
          </div>
        </div>

        <div className="modal-foot">
          <button className="btn btn-ghost" onClick={onClose}>
            <ArrowLeft size={15} />
            Back
          </button>
          {!isCompleted && (
            <button
              className="btn btn-primary"
              onClick={() => {
                onClose()
                onSubmit(practical)
              }}
            >
              Submit Practical
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
