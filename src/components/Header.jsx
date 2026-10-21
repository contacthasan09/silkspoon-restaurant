import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LOGO = 'https://silkspoon.com.bd/public/media/silkspoon-logo.png'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Food Menu' },
  { to: '/gallery', label: 'Image Gallery' },
  { to: '/videos', label: 'Video Gallery' },
  { to: '/reservation', label: 'Reservation' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 767) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ padding: '12px 0' }}>
      <div className="container-max flex items-center justify-between gap-4">
        <Link to="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Silk Spoon" className="h-12 md:h-14 w-auto object-contain" />
        </Link>

        <nav className="nav-desktop hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/reservation" className="btn-pill hidden sm:inline-block">
            Book a Table
          </Link>
          <button
            className="mobile-toggle md:hidden flex items-center justify-center w-10 h-10 border-2 border-secondary rounded-full"
            style={{ display: 'none' }}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B5844" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-gray-100 md:hidden bg-white py-2">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link block px-5${isActive ? ' active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="px-5 py-3">
            <Link to="/reservation" className="btn-pill" onClick={() => setOpen(false)}>
              Book a Table
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
