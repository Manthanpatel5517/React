import { useState, useEffect, useMemo } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useOutletContext, Outlet } from 'react-router-dom'

import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import AddPracticalModal from './components/AddPracticalModal.jsx'
import PracticalDetailModal from './components/PracticalDetailModal.jsx'
import ConfirmDialog from './components/ConfirmDialog.jsx'

import Dashboard from './pages/Dashboard.jsx'
import Practicals from './pages/Practicals.jsx'
import Assignments from './pages/Assignments.jsx'
import Projects from './pages/Projects.jsx'
import Completed from './pages/Completed.jsx'
import Pending from './pages/Pending.jsx'
import Calendar from './pages/Calendar.jsx'
import Settings from './pages/Settings.jsx'

import { initialPracticals } from './data/practicalData.js'

const PAGE_META = {
  '/': { title: 'Dashboard', subtitle: 'Track your practical work, submissions and performance.' },
  '/practicals': { title: 'Practical Assignments', subtitle: 'Manage and track your practical submissions.' },
  '/assignments': { title: 'Assignments', subtitle: 'Everything due, in one place.' },
  '/projects': { title: 'Projects', subtitle: 'Larger builds tied to your coursework.' },
  '/completed': { title: 'Completed', subtitle: 'Practicals you\u2019ve already submitted and graded.' },
  '/pending': { title: 'Pending', subtitle: 'Practicals waiting on a submission from you.' },
  '/calendar': { title: 'Calendar', subtitle: 'Upcoming deadlines at a glance.' },
  '/settings': { title: 'Settings', subtitle: 'Manage your profile and preferences.' },
}

function Layout() {
  const [practicals, setPracticals] = useState(initialPracticals)
  const [loading, setLoading] = useState(true)
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const [showAddModal, setShowAddModal] = useState(false)
  const [submitTarget, setSubmitTarget] = useState(null)
  const [viewTarget, setViewTarget] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)

  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const addPractical = (data) => {
    setPracticals((prev) => [...prev, data])
    setShowAddModal(false)
  }

  const submitPractical = (data) => {
    setPracticals((prev) => prev.map((p) => (p.no === data.no ? { ...p, ...data } : p)))
    setSubmitTarget(null)
  }

  const requestDelete = (practical) => setDeleteTarget(practical)

  const confirmDelete = () => {
    setPracticals((prev) => prev.filter((p) => p.no !== deleteTarget.no))
    setDeleteTarget(null)
  }

  const meta = PAGE_META[location.pathname] || PAGE_META['/']

  const context = useMemo(
    () => ({
      practicals,
      loading,
      openAddModal: () => setShowAddModal(true),
      openSubmitModal: setSubmitTarget,
      openViewModal: setViewTarget,
      requestDelete,
    }),
    [practicals, loading]
  )

  return (
    <div className={'app-shell' + (collapsed ? ' sidebar-collapsed' : '')}>
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
        onToggleCollapse={() => setCollapsed((v) => !v)}
      />

      <div className="app-main">
        <Navbar
          title={meta.title}
          subtitle={meta.subtitle}
          onToggleMobile={() => setMobileOpen((v) => !v)}
        />

        <main className="page-content">
          <Outlet context={context} />
        </main>
      </div>

      {showAddModal && (
        <AddPracticalModal
          mode="add"
          onClose={() => setShowAddModal(false)}
          onSave={addPractical}
        />
      )}

      {submitTarget && (
        <AddPracticalModal
          mode="submit"
          initialData={submitTarget}
          onClose={() => setSubmitTarget(null)}
          onSave={submitPractical}
        />
      )}

      {viewTarget && (
        <PracticalDetailModal
          practical={viewTarget}
          onClose={() => setViewTarget(null)}
          onSubmit={(p) => setSubmitTarget(p)}
        />
      )}

      {deleteTarget && (
        <ConfirmDialog
          title="Delete this practical?"
          message={`This will permanently remove practical no. ${deleteTarget.no} \u2014 "${deleteTarget.topic}" from your list.`}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
    </div>
  )
}

export function usePracticalContext() {
  return useOutletContext()
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/practicals" element={<Practicals />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
