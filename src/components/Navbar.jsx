import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import { IoFlash } from 'react-icons/io5'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled && 'scrolled'}`}>
      <div className="navbar__inner">
        {/* LOGO */}
        <div className="navbar__logo" onClick={() => navigate('/')}>
          Flash<span><IoFlash style={{ fill: '#e67147e1', height: "19px", width: "20px" }} />dev</span>
        </div>

        {/* DESKTOP NAV */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="https://ik.imagekit.io/cblndrocc/main-dharmapal-resume.pdf"
          className="navbar__resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>


        {/* HAMBURGER */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <NavLink key={link.path} to={link.path} onClick={closeMenu}>
            {link.label}
          </NavLink>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--accent)' }}
          onClick={closeMenu}
        >
          Resume ↗
        </a>
      </div>
    </nav>
  )
}
