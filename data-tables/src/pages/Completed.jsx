import PracticalBoard from '../components/PracticalBoard.jsx'

export default function Completed() {
  return (
    <>
      <div className="page-header">
        <h2>Completed Practicals</h2>
        <p>Graded and submitted work, with feedback from your instructor.</p>
      </div>
      <PracticalBoard
        title="Completed"
        subtitle="Everything you've already submitted and had graded."
        lockedFilter="Completed"
        showAdd={false}
      />
    </>
  )
}
