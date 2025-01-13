import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <footer>
      {/* Footer Above Section */}
      <div classname="footer-container">
      <div className="footer-above">
        <div className="footer-description">
          <img src="\nutrition_logo33.png" className="footer-logo" alt="Company Logo" />
          <p>
          Nutrition Fellowship for Nepal aims to unite three generations of stakeholders from Nepal and around the world—combining experience, innovation, and passion to accelerate the fight against undernutrition in Nepal.
          </p>
        </div>

        <div className="footer-links">
        <h4>Navigation Links</h4>
          <ul>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#special-initiatives">Special Initiatives</a></li>
            <li><a href="#place-your-thoughts">Place Your Thoughts</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Get in Touch</h4>
          <div className="social-icons">
            <a class="facebook" href="https://www.facebook.com/__nutfellowship/">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a class="instagram" href="https://www.instagram.com/__nutfellowship/">
              <i className="fab fa-instagram"></i>
            </a>
            <a class="linkedin" href="https://www.linkedin.com/__linkedin/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <hr /> 

    
      <div className="footer-below">
      <p className='email'>If you have any queries, feel free to email us at:-
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nutfellowship@gmail.com" target="_blank" rel="noopener noreferrer"> nutfellowship@gmail.com</a>
      </p>
        <p>
          Copyright © 2024 All Rights Reserved <span><a href="#navbar">NutritionFellowshipForNepal</a></span>
        </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
