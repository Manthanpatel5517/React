import { useMemo } from 'react'
import { BookOpen, CheckCircle2, Clock, Award } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import { PerformanceCard, RoadmapCard } from '../components/PerformanceCard.jsx'
import PracticalBoard from '../components/PracticalBoard.jsx'
import { usePracticalContext } from '../App.jsx'

export default function Dashboard() {
  const { practicals } = usePracticalContext()

  const stats = useMemo(() => {
    const total = practicals.length
    const completed = practicals.filter((p) => p.status === 'Completed').length
    const pending = practicals.filter((p) => p.status === 'Pending').length
    const upcoming = practicals.filter((p) => p.status === 'Upcoming').length

    const marksTotal = practicals
      .filter((p) => p.status === 'Completed' && p.marks.includes('/'))
      .map((p) => parseFloat(p.marks.split('/')[0]))
    const avg = marksTotal.length
      ? (marksTotal.reduce((a, b) => a + b, 0) / marksTotal.length).toFixed(1)
      : '0.0'

    const percent = total ? Math.round((completed / total) * 100) : 0

    return { total, completed, pending, upcoming, avg, percent }
  }, [practicals])

  return (
    <>
      <div className="stat-grid">
        <StatCard
          icon={BookOpen}
          label="Total Practicals"
          value={stats.total}
          tint={{ soft: 'var(--color-accent-soft)', solid: 'var(--color-accent-dark)' }}
        />
        <StatCard
          icon={CheckCircle2}
          label="Completed"
          value={stats.completed}
          tint={{ soft: 'var(--color-success-soft)', solid: 'var(--color-success)' }}
        />
        <StatCard
          icon={Clock}
          label="Pending"
          value={stats.pending}
          tint={{ soft: 'var(--color-warning-soft)', solid: 'var(--color-warning)' }}
        />
        <StatCard
          icon={Award}
          label="Average Marks"
          value={`${stats.avg}/10`}
          tint={{ soft: 'var(--color-info-soft)', solid: 'var(--color-info)' }}
        />
      </div>

      <div className="performance-grid">
        <PerformanceCard
          percent={stats.percent}
          completed={stats.completed}
          pending={stats.pending}
          upcoming={stats.upcoming}
        />
        <RoadmapCard practicals={practicals} />
      </div>

      <PracticalBoard />
    </>
  )
}
