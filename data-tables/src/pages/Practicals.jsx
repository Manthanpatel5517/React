import PracticalBoard from '../components/PracticalBoard.jsx'

export default function Practicals() {
  return (
    <>
      <div className="page-header">
        <h2>All Practicals</h2>
        <p>Every practical assigned so far, searchable and sortable.</p>
      </div>
      <PracticalBoard title="Practical List" subtitle="Search, filter and manage every practical in one place." />
    </>
  )
}
