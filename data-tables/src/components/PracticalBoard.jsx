import { useState, useMemo } from 'react'
import SearchFilter from './SearchFilter.jsx'
import PracticalTable from './PracticalTable.jsx'
import { usePracticalContext } from '../App.jsx'

function parseDate(str) {
  // Format: DD-Mon-YYYY, e.g. 20-Aug-2026
  return new Date(str.replace(/-/g, ' '))
}

export default function PracticalBoard({
  title = 'Practical Assignments',
  subtitle = 'Manage and track your practical submissions.',
  lockedFilter,
  showAdd = true,
}) {
  const { practicals, loading, openAddModal, openSubmitModal, openViewModal, requestDelete } =
    usePracticalContext()

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState(lockedFilter || 'All')
  const [sortOrder, setSortOrder] = useState('asc')

  const visible = useMemo(() => {
    const base = lockedFilter ? practicals.filter((p) => p.status === lockedFilter) : practicals

    const filtered = base.filter((p) => {
      const matchesFilter = filter === 'All' || p.status === filter
      const q = search.trim().toLowerCase()
      const matchesSearch =
        !q ||
        p.no.toLowerCase().includes(q) ||
        p.topic.toLowerCase().includes(q) ||
        p.task.toLowerCase().includes(q)
      return matchesFilter && matchesSearch
    })

    return [...filtered].sort((a, b) => {
      const diff = parseDate(a.date) - parseDate(b.date)
      return sortOrder === 'asc' ? diff : -diff
    })
  }, [practicals, filter, search, sortOrder, lockedFilter])

  return (
    <div className="card section-card">
      <div className="section-card-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <SearchFilter
          search={search}
          onSearchChange={setSearch}
          filter={filter}
          onFilterChange={lockedFilter ? () => {} : setFilter}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
          onAdd={openAddModal}
          showAdd={showAdd}
          hidePills={!!lockedFilter}
        />
      </div>

      <PracticalTable
        practicals={visible}
        loading={loading}
        onView={openViewModal}
        onSubmit={openSubmitModal}
        onDelete={requestDelete}
      />
    </div>
  )
}
