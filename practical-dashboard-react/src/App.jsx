import React, { useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  ExternalLink,
  FileText,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  X
} from "lucide-react";

const practicals = [
  {
    no: "12",
    topic: "Data Tables",
    type: "section",
    status: "Submission",
    children: [
      {
        no: "12.1",
        topic: "Make Data Tables",
        date: "20-Aug-2026",
        marks: "-",
        status: "Pending"
      }
    ]
  },
  {
    no: "11",
    topic: "React Forms",
    type: "section",
    status: "Completed",
    children: [
      {
        no: "11.1",
        topic: "Create a Responsive Form",
        date: "18-Aug-2026",
        marks: "9/10",
        status: "Excellent"
      }
    ]
  },
  {
    no: "10",
    topic: "React Router",
    type: "section",
    status: "Completed",
    children: [
      {
        no: "10.1",
        topic: "Multi-page Navigation",
        date: "16-Aug-2026",
        marks: "8/10",
        status: "Good"
      }
    ]
  },
  {
    no: "9",
    topic: "API Integration",
    type: "section",
    status: "Completed",
    children: [
      {
        no: "9.1",
        topic: "Fetch API Data",
        date: "14-Aug-2026",
        marks: "10/10",
        status: "Excellent"
      }
    ]
  }
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const rows = useMemo(() => {
    return practicals
      .flatMap((group) =>
        group.children.map((item) => ({
          ...item,
          parentNo: group.no,
          parentTopic: group.topic,
          parentStatus: group.status,
          parentLink: group.status === "Completed" ? "View Submission" : group.status
        }))
      )
      .filter((item) => {
        const matchesSearch =
          `${item.topic} ${item.parentTopic} ${item.no}`
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesFilter =
          filter === "All" ||
          (filter === "Pending" && item.status === "Pending") ||
          (filter === "Completed" && item.status !== "Pending");

        return matchesSearch && matchesFilter;
      });
  }, [search, filter]);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-icon"><BookOpen size={20} /></div>
          <div>
            <strong>Practical<span>Hub</span></strong>
            <small>Student Portal</small>
          </div>
          <button className="close-menu" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="side-nav">
          <a className="nav-item active" href="#dashboard">
            <LayoutDashboard size={19} /> Dashboard
          </a>
          <a className="nav-item" href="#practicals">
            <ClipboardList size={19} /> Practicals
          </a>
          <a className="nav-item" href="#calendar">
            <CalendarDays size={19} /> Calendar
          </a>
          <a className="nav-item" href="#documents">
            <FileText size={19} /> Resources
          </a>
        </nav>

        <div className="sidebar-bottom">
          <a className="nav-item" href="#settings">
            <Settings size={19} /> Settings
          </a>
          <div className="mini-profile">
            <div className="avatar">M</div>
            <div>
              <strong>Student</strong>
              <span>React Batch</span>
            </div>
          </div>
        </div>
      </aside>

      {mobileOpen && (
        <button
          className="sidebar-overlay"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <main className="main-content">
        <header className="topbar">
          <button className="menu-btn" onClick={() => setMobileOpen(true)}>
            <Menu size={22} />
          </button>
          <div>
            <p className="eyebrow">ACADEMIC WORKSPACE</p>
            <h1>Practical Management</h1>
          </div>
          <div className="topbar-actions">
            <div className="profile-avatar">M</div>
          </div>
        </header>

        <section className="welcome-card">
          <div>
            <span className="welcome-label">Your practical workspace</span>
            <h2>Stay on top of every practical.</h2>
            <p>Track topics, submission dates, feedback and marks in one clean dashboard.</p>
          </div>
          <div className="welcome-stat">
            <span>Overall Progress</span>
            <strong>78%</strong>
            <div className="progress"><span style={{ width: "78%" }} /></div>
          </div>
        </section>

        <section className="stats-grid">
          <Stat icon={<ClipboardList />} number="12" label="Total Practicals" />
          <Stat icon={<CheckCircle2 />} number="9" label="Completed" />
          <Stat icon={<CalendarDays />} number="3" label="Upcoming" />
          <Stat icon={<FileText />} number="87%" label="Average Marks" />
        </section>

        <section className="content-card" id="practicals">
          <div className="section-heading">
            <div>
              <span className="eyebrow">PRACTICAL RECORD</span>
              <h2>All Practicals</h2>
            </div>
            <div className="controls">
              <div className="search-box">
                <Search size={18} />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search practical..."
                />
              </div>
              <div className="select-wrap">
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  <option>All</option>
                  <option>Completed</option>
                  <option>Pending</option>
                </select>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Topics</th>
                  <th>Date</th>
                  <th>Feedback / Marks</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <React.Fragment key={row.no}>
                    <tr className="group-row">
                      <td>{row.parentNo}</td>
                      <td>
                        <strong>{row.parentTopic}</strong>
                      </td>
                      <td>
                        <a className={`submission ${row.parentStatus === "Completed" ? "done" : ""}`} href="#submission">
                          {row.parentLink}
                        </a>
                      </td>
                      <td></td>
                    </tr>
                    <tr className="detail-row">
                      <td>{row.no}</td>
                      <td>{row.topic}</td>
                      <td>{row.date}</td>
                      <td>
                        {row.marks === "-" ? (
                          <span className="marks pending">-</span>
                        ) : (
                          <span className="marks">{row.marks}</span>
                        )}
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>

            {rows.length === 0 && (
              <div className="empty-state">
                <Search size={28} />
                <h3>No practicals found</h3>
                <p>Try another search term or filter.</p>
              </div>
            )}
          </div>

          <div className="table-footer">
            <span>Showing {rows.length} practical record{rows.length !== 1 ? "s" : ""}</span>
            <a href="#all">View all <ExternalLink size={15} /></a>
          </div>
        </section>

        <footer>© 2026 PracticalHub · Academic Dashboard</footer>
      </main>
    </div>
  );
}

function Stat({ icon, number, label }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <strong>{number}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

export default App;