import { useState } from 'react'

export default function Settings() {
  const [notifyEmail, setNotifyEmail] = useState(true)
  const [notifyDeadline, setNotifyDeadline] = useState(true)
  const [saved, setSaved] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <>
      <div className="page-header">
        <h2>Settings</h2>
        <p>Manage your profile details and notification preferences.</p>
      </div>

      <form className="settings-grid" onSubmit={handleSave}>
        <div className="card settings-card">
          <h4>Profile</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="form-field">
              <label>Full name</label>
              <input type="text" defaultValue="Manthan Patel" />
            </div>
            <div className="form-field">
              <label>Role</label>
              <input type="text" defaultValue="Frontend Developer" />
            </div>
            <div className="form-field">
              <label>Email</label>
              <input type="email" placeholder="you@college.edu" />
            </div>
          </div>
        </div>

        <div className="card settings-card">
          <h4>Notifications</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5 }}>
              <input
                type="checkbox"
                checked={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.checked)}
              />
              Email me when a practical is graded
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13.5 }}>
              <input
                type="checkbox"
                checked={notifyDeadline}
                onChange={(e) => setNotifyDeadline(e.target.checked)}
              />
              Remind me 2 days before a deadline
            </label>
          </div>

          <div style={{ marginTop: 20, display: 'flex', gap: 10, alignItems: 'center' }}>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
            {saved && (
              <span style={{ fontSize: 12.5, color: 'var(--color-success)', fontWeight: 600 }}>
                Saved!
              </span>
            )}
          </div>
        </div>
      </form>
    </>
  )
}
