import { useState } from 'react';
import logoLupa from '../assets/img/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-left">
          <img src={logoLupa} alt="Logo" className="navbar-logo" />
        </div>

        {/* Pulsante Hamburger per Mobile */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "icon open" : "icon"}></span>
        </button>

        {/* Menu di Navigazione */}
        <nav className={`navbar-right ${isOpen ? "active" : ""}`}>
          <ul>
            <li>Menù</li>
            <li>I nostri piatti</li>
            <li>Contatti</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;