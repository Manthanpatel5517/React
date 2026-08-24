import React from "react";
import { ArrowDownUp, Search, SlidersHorizontal } from "lucide-react";

export default function FilterBar({ search, setSearch, filter, setFilter, sort, setSort }) {
  return (
    <div className="filter-bar">
      <div className="search-field">
        <Search size={17} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search practical or topic..."
        />
      </div>

      <div className="filter-select">
        <SlidersHorizontal size={16} />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <button className="sort-button" onClick={() => setSort(sort === "asc" ? "desc" : "asc")}>
        <ArrowDownUp size={16} />
        Date {sort === "asc" ? "↑" : "↓"}
      </button>
    </div>
  );
}