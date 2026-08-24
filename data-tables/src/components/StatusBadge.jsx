import { CheckCircle2, Clock, CalendarClock } from 'lucide-react'

const CONFIG = {
  Completed: { className: 'badge-completed', Icon: CheckCircle2 },
  Pending: { className: 'badge-pending', Icon: Clock },
  Upcoming: { className: 'badge-upcoming', Icon: CalendarClock },
}

export default function StatusBadge({ status }) {
  const config = CONFIG[status] || CONFIG.Pending
  const { className, Icon } = config

  return (
    <span className={`badge ${className}`}>
      <Icon size={13} strokeWidth={2.4} />
      {status}
    </span>
  )
}
