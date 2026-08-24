import PracticalBoard from '../components/PracticalBoard.jsx'

export default function Pending() {
  return (
    <>
      <div className="page-header">
        <h2>Pending Practicals</h2>
        <p>Still waiting on a submission from you — tackle these next.</p>
      </div>
      <PracticalBoard
        title="Pending"
        subtitle="Practicals that still need a submission."
        lockedFilter="Pending"
        showAdd={false}
      />
    </>
  )
}
