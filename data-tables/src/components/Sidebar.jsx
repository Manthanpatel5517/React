import { NavLink } from 'react-router-dom'
import {
  GraduationCap,
  LayoutDashboard,
  FlaskConical,
  ClipboardList,
  FolderKanban,
  CheckCircle2,
  Clock,
  CalendarDays,
  Settings,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/practicals', label: 'Practicals', icon: FlaskConical },
  { to: '/assignments', label: 'Assignments', icon: ClipboardList },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/completed', label: 'Completed', icon: CheckCircle2 },
  { to: '/pending', label: 'Pending', icon: Clock },
  { to: '/calendar', label: 'Calendar', icon: CalendarDays },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ collapsed, mobileOpen, onCloseMobile, onToggleCollapse }) {
  return (
    <>
      <aside
        className={[
          'sidebar',
          collapsed ? 'collapsed' : '',
          mobileOpen ? 'mobile-open' : '',
        ].join(' ').trim()}
      >
        <div className="sidebar-brand">
          <div className="sidebar-brand-mark">
            <GraduationCap size={20} />
          </div>
          <div className="sidebar-brand-text">
            <strong>Data Tables</strong>
            <span>Student Dashboard</span>
          </div>
          <button
            className="sidebar-collapse-btn"
            onClick={onToggleCollapse}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronsRight size={16} /> : <ChevronsLeft size={16} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          <span className="sidebar-nav-label">Workspace</span>
          {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                'sidebar-link' + (isActive ? ' active' : '')
              }
            >
              <Icon size={18} strokeWidth={2} />
              <span className="sidebar-link-text">{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-user">
          <div className="sidebar-user-avatar">MP</div>
          <div className="sidebar-user-info">
            <strong>Manthan Patel</strong>
            <span>Frontend Developer</span>
          </div>
        </div>
      </aside>

      <div
        className={'sidebar-scrim' + (mobileOpen ? ' visible' : '')}
        onClick={onCloseMobile}
      />
    </>
  )
}
