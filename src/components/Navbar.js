import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className='navbar-container'>
          <div className="navbar-logo">
            <img src='/nutrition_logo333.png' alt="Nutrition" className="logo-image" />
          </div>

          {/* Hamburger menu button for mobile */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`navitems-container ${isOpen ? 'active' : ''}`}>
          <ul className='nav-items'>
            <a href='#documents'><li>Documents</li></a>
            <a href='#events'><li>Events and Updates  </li></a>
            <a href='#specialinitiatives'><li>Initiatives</li></a>
            <a href='#shareyourthoughts'><li>Share Your Thoughts</li></a>
            <a href='#contact'><li>Contact Us</li></a>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;