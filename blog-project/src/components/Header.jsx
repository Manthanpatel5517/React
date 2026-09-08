export default function Header({ onLogoClick }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <button className="wordmark" onClick={onLogoClick}>
          Marginalia
        </button>
        <p className="tagline">Notes on design, technology and paying attention</p>
      </div>
    </header>
  )
}
