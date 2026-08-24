import { useState } from 'react'
import { X } from 'lucide-react'

const EMPTY_FORM = {
  no: '',
  topic: '',
  task: '',
  date: '',
  status: 'Pending',
  marks: '',
  feedback: '',
}

export default function AddPracticalModal({ mode = 'add', initialData, onClose, onSave }) {
  const isSubmitMode = mode === 'submit'
  const [form, setForm] = useState(
    initialData
      ? { ...EMPTY_FORM, ...initialData, marks: initialData.marks === '-' ? '' : initialData.marks }
      : EMPTY_FORM
  )
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.no.trim() || !form.topic.trim() || !form.task.trim() || !form.date.trim()) {
      setError('Please fill in practical number, topic, task and date.')
      return
    }

    const payload = isSubmitMode
      ? {
          ...form,
          status: 'Completed',
          submission: 'Submitted',
          marks: form.marks.trim() ? form.marks.trim() : '—',
        }
      : {
          ...form,
          submission: form.status === 'Completed' ? 'Submitted' : 'Not submitted',
          marks: form.status === 'Completed' && form.marks.trim() ? form.marks.trim() : '-',
        }

    onSave(payload)
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <form className="modal" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        <div className="modal-head">
          <h3>{isSubmitMode ? 'Submit Practical' : 'Add Practical'}</h3>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {error && (
            <div className="badge badge-pending" style={{ width: '100%' }}>
              {error}
            </div>
          )}

          <div className="form-row">
            <div className="form-field">
              <label>Practical Number</label>
              <input
                type="text"
                placeholder="e.g. 17"
                value={form.no}
                onChange={update('no')}
                disabled={isSubmitMode}
                required
              />
            </div>
            <div className="form-field">
              <label>Date</label>
              <input
                type="text"
                placeholder="e.g. 02-Sep-2026"
                value={form.date}
                onChange={update('date')}
                disabled={isSubmitMode}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label>Topic</label>
            <input
              type="text"
              placeholder="e.g. State Management"
              value={form.topic}
              onChange={update('topic')}
              disabled={isSubmitMode}
              required
            />
          </div>

          <div className="form-field">
            <label>Task</label>
            <input
              type="text"
              placeholder="e.g. Implement Context API"
              value={form.task}
              onChange={update('task')}
              disabled={isSubmitMode}
              required
            />
          </div>

          {!isSubmitMode && (
            <div className="form-field">
              <label>Status</label>
              <select value={form.status} onChange={update('status')}>
                <option value="Pending">Pending</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          )}

          <div className="form-row">
            <div className="form-field">
              <label>Marks {isSubmitMode ? '' : '(optional)'}</label>
              <input
                type="text"
                placeholder="e.g. 9/10"
                value={form.marks}
                onChange={update('marks')}
              />
            </div>
          </div>

          <div className="form-field">
            <label>Feedback {isSubmitMode ? '' : '(optional)'}</label>
            <textarea
              placeholder="Add notes on the submission..."
              value={form.feedback}
              onChange={update('feedback')}
            />
          </div>
        </div>

        <div className="modal-foot">
          <button type="button" className="btn btn-ghost" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {isSubmitMode ? 'Submit Practical' : 'Add Practical'}
          </button>
        </div>
      </form>
    </div>
  )
}
