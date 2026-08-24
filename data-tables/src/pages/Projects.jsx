import { FolderKanban } from 'lucide-react'

export default function Projects() {
  return (
    <>
      <div className="page-header">
        <h2>Projects</h2>
        <p>Larger, multi-week builds that tie several practicals together.</p>
      </div>
      <div className="card placeholder-card">
        <FolderKanban size={30} strokeWidth={1.6} style={{ color: 'var(--color-ink-faint)', marginBottom: 12 }} />
        <h4 style={{ marginBottom: 6, color: 'var(--color-ink)' }}>No projects underway</h4>
        <p>Term projects will appear here once one is assigned, with its own milestones and submission tracker.</p>
      </div>
    </>
  )
}
