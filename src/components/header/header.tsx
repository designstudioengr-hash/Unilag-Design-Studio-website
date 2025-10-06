import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './header.css'
import logo from '../../assets/UDS LOGO.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (id: string) => {
    closeMenu()
    
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="main-header">
      <div className="header-left">
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
          <img src={logo} alt="Logo" className="header-logo" />
        </a>
        <span className="header-title">Unilag Design Studio</span>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
      </nav>
    </header>
  )
}

export default Header