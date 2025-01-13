import "./Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <div className='navbar-container'>
            <Link to="/" className="navbar-logo">
                 <img src= '\Nutrition_logo333.png' alt ="Nutrition" className="logo-image" />
            </Link>

        </div>

      <div className='navitems-container'>
       
        <ul className='nav-items'>
          <a href='#aboutus'><li> About Us</li></a>
          <a href='#events'> <li> Events</li></a>
          <a href='#specialinitiatives'><li>Special Initiatives</li></a>
          <a href='#shareyourthoughts'><li>Share Your Thoughts</li></a>
          <a href='#contact'> <li> Contact Us</li></a>
        </ul>
      </div>

      </nav>
    </div>
  )
}

export default Navbar
