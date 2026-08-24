import { SearchX } from 'lucide-react'

export function EmptyState({ title = 'No practicals found', message = 'Try a different search term or filter.' }) {
  return (
    <div className="empty-state">
      <SearchX size={32} strokeWidth={1.6} />
      <h4>{title}</h4>
      <p>{message}</p>
    </div>
  )
}

export function LoadingState({ label = 'Loading practicals...' }) {
  return (
    <div className="loading-state">
      <div className="spinner" />
      <span>{label}</span>
    </div>
  )
}
