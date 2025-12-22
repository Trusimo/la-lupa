import { useState } from 'react';
import logoLupa from '../assets/img/logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-left">
          <a href="#"><img src={logoLupa} alt="Logo" className="navbar-logo" /></a>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className={isOpen ? "icon open" : "icon"}></span>
        </button>

        <nav className={`navbar-right ${isOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#menu" onClick={closeMenu}>Menù</a></li>
            <li><a href="#piatti" onClick={closeMenu}>I nostri piatti</a></li>
            <li><a href="#contatti" onClick={closeMenu}>Contatti</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;