export default function StatCard({ icon: Icon, label, value, tint }) {
  return (
    <div className="card stat-card">
      <div
        className="stat-card-icon"
        style={{ background: tint.soft, color: tint.solid }}
      >
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <div>
        <div className="stat-card-value">{value}</div>
        <div className="stat-card-label">{label}</div>
      </div>
    </div>
  )
}
