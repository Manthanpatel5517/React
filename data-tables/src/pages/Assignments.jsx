import { ClipboardList } from 'lucide-react'

export default function Assignments() {
  return (
    <>
      <div className="page-header">
        <h2>Assignments</h2>
        <p>Written and theory assignments, separate from your lab practicals.</p>
      </div>
      <div className="card placeholder-card">
        <ClipboardList size={30} strokeWidth={1.6} style={{ color: 'var(--color-ink-faint)', marginBottom: 12 }} />
        <h4 style={{ marginBottom: 6, color: 'var(--color-ink)' }}>Nothing assigned here yet</h4>
        <p>Once your instructor posts a written assignment, it'll show up on this page alongside its due date and status.</p>
      </div>
    </>
  )
}
