import { Menu, Search, Bell } from 'lucide-react'

export default function Navbar({ title, subtitle, onToggleMobile }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <button className="navbar-menu-btn" onClick={onToggleMobile} aria-label="Open menu">
          <Menu size={20} />
        </button>
        <div className="navbar-titles">
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <div className="navbar-right">
        <div className="navbar-search">
          <Search size={16} />
          <input type="text" placeholder="Search practicals, tasks..." />
        </div>

        <button className="icon-btn" aria-label="Notifications">
          <Bell size={18} />
          <span className="dot" />
        </button>

        <div className="navbar-profile">
          <div className="navbar-profile-avatar">MP</div>
          <span>Manthan Patel</span>
        </div>
      </div>
    </header>
  )
}
