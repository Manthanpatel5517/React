import { Search, Plus } from 'lucide-react'

const FILTERS = ['All', 'Completed', 'Pending', 'Upcoming']

export default function SearchFilter({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  sortOrder,
  onSortChange,
  onAdd,
  showAdd = true,
  hidePills = false,
}) {
  return (
    <>
      <div className="section-toolbar">
        <div className="toolbar-search">
          <Search size={15} />
          <input
            type="text"
            placeholder="Search by no., topic or task"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <select
          className="select-input"
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value)}
          aria-label="Sort by date"
        >
          <option value="asc">
            Date: Oldest first
          </option>
          <option value="desc">Date: Newest first</option>
        </select>

        {showAdd && (
          <button className="btn btn-primary" onClick={onAdd}>
            <Plus size={16} />
            Add Practical
          </button>
        )}
      </div>

      {!hidePills && (
      <div className="filter-pills">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={'filter-pill' + (filter === f ? ' active' : '')}
            onClick={() => onFilterChange(f)}
          >
            {f}
          </button>
        ))}
      </div>
      )}
    </>
  )
}
