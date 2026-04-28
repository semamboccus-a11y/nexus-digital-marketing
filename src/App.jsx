import { useState } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <Home onNavigate={handleNavClick} />
      case 'services':
        return <Services onNavigate={handleNavClick} />
      case 'about':
        return <AboutUs onNavigate={handleNavClick} />
      case 'contact':
        return <Contact onNavigate={handleNavClick} />
      default:
        return <Home onNavigate={handleNavClick} />
    }
  }

  const handleNavClick = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-section">
            <img src="/Nexuslogo.png" alt="Nexus Digital Marketing" className="logo" />
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li><button onClick={() => handleNavClick('home')} className={currentPage === 'home' ? 'active' : ''}>Home</button></li>
            <li><button onClick={() => handleNavClick('services')} className={currentPage === 'services' ? 'active' : ''}>Services</button></li>
            <li><button onClick={() => handleNavClick('about')} className={currentPage === 'about' ? 'active' : ''}>About Us</button></li>
            <li><button onClick={() => handleNavClick('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact</button></li>
          </ul>

          <div className="nav-social">
            <a href="https://www.facebook.com/NexusDigitalMU/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/23058219355" target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {renderPage()}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Nexus Digital Marketing</h3>
            <p>Your trusted partner for digital growth and success.</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-social">
              <a href="https://www.facebook.com/NexusDigitalMU/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://wa.me/23058219355" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Nexus Digital Marketing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
