import  { useState } from 'react'
import './header.css'
import logo from '../../assets/UDS LOGO.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="main-header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <span className="header-title">Unilag Design Studio</span>
      </div>
      <div className="mobile-menu-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>
    </header>
  )
}

export default Header