import React from "react";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  ClipboardList,
  FileText,
  Settings,
  X,
} from "lucide-react";

const links = [
  [BarChart3, "Dashboard"],
  [ClipboardList, "Practicals"],
  [FileText, "Assignments"],
  [CalendarDays, "Calendar"],
  [BookOpen, "Resources"],
  [Settings, "Settings"],
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><BookOpen size={20} /></div>
          <div>
            <h2>Practical<span>Hub</span></h2>
            <p>Student Portal</p>
          </div>
          <button className="mobile-close" onClick={onClose}><X size={20} /></button>
        </div>

        <nav className="nav-list">
          {links.map(([Icon, label], index) => (
            <a href={`#${label.toLowerCase()}`} className={`nav-link ${index === 1 ? "active" : ""}`} key={label}>
              <Icon size={18} />
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <div className="student-card">
          <div className="avatar small">M</div>
          <div>
            <strong>Student</strong>
            <span>React Development</span>
          </div>
        </div>
      </aside>
      {open && <button className="overlay" onClick={onClose} aria-label="Close sidebar" />}
    </>
  );
}