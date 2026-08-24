import React, { useMemo, useState } from "react";
import {
  CalendarCheck2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileCheck2,
  Plus,
} from "lucide-react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import FilterBar from "./components/FilterBar";
import PracticalTable from "./components/PracticalTable";
import PracticalModal from "./components/PracticalModal";
import Footer from "./components/Footer";
import { practicals } from "./data";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("asc");
  const [selected, setSelected] = useState(null);

  const completed = practicals.filter((p) => p.status === "Completed").length;
  const pending = practicals.length - completed;
  const avg = Math.round(
    practicals
      .filter((p) => p.status === "Completed")
      .reduce((sum, p) => sum + Number(p.marks.split("/")[0]), 0) / completed * 10
  );
  const progress = Math.round((completed / practicals.length) * 100);

  const rows = useMemo(() => {
    const result = practicals.filter((p) => {
      const haystack = `${p.no} ${p.topic} ${p.task}`.toLowerCase();
      return (
        haystack.includes(search.toLowerCase()) &&
        (filter === "All" || p.status === filter)
      );
    });

    return [...result].sort((a, b) => {
      const da = new Date(a.date);
      const db = new Date(b.date);
      return sort === "asc" ? da - db : db - da;
    });
  }, [search, filter, sort]);

  return (
    <div className="app">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="main">
        <Header onMenu={() => setSidebarOpen(true)} />

        <section className="hero">
          <div className="hero-copy">
            <span className="hero-tag">YOUR PRACTICAL WORKSPACE</span>
            <h2>Keep every practical<br /><em>on track.</em></h2>
            <p>Manage submissions, deadlines and marks from one simple academic workspace.</p>
            <div className="hero-actions">
              <a href="#practicals" className="primary-button"><ClipboardList size={17} /> View Practicals</a>
              <a href="#calendar" className="secondary-button"><CalendarCheck2 size={17} /> Upcoming</a>
            </div>
          </div>

          <div className="progress-panel">
            <div className="progress-ring">
              <strong>{progress}%</strong>
              <span>Done</span>
            </div>
            <div>
              <span className="progress-label">Overall Progress</span>
              <h3>{completed} of {practicals.length} completed</h3>
              <div className="wide-progress"><span style={{ width: `${progress}%` }} /></div>
              <small>Keep going — you're doing great.</small>
            </div>
          </div>
        </section>

        <section className="stats">
          <StatsCard icon={<ClipboardList size={19} />} value={practicals.length} label="Total Practicals" detail="This semester" />
          <StatsCard icon={<CheckCircle2 size={19} />} value={completed} label="Completed" detail="Great progress" />
          <StatsCard icon={<Clock3 size={19} />} value={pending} label="Pending" detail="Needs attention" />
          <StatsCard icon={<FileCheck2 size={19} />} value={`${avg}%`} label="Average Marks" detail="Completed work" />
        </section>

        <section className="content" id="practicals">
          <div className="content-head">
            <div>
              <p className="kicker">PRACTICAL RECORD</p>
              <h2>All Practicals</h2>
              <p className="muted">Track every practical, submission and evaluation.</p>
            </div>
            <button className="add-button"><Plus size={17} /> Add Practical</button>
          </div>

          <FilterBar
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            sort={sort}
            setSort={setSort}
          />

          <PracticalTable rows={rows} onView={setSelected} />

          <div className="table-footer">
            <span>Showing {rows.length} of {practicals.length} practicals</span>
            <span className="footer-progress"><span style={{ width: `${progress}%` }} /></span>
          </div>
        </section>

        <Footer />
      </main>

      <PracticalModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}