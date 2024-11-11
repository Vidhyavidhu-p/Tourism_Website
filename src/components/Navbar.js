// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Navbar.css'; // Import the CSS for styling the navbar

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home"); // Active link state

  // Function to set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header>
      <nav>
        <div className="logo">TourNest.com</div>
        <ul className="nav-links">
          {/* Link to home page */}y
          <li
            className={activeLink === "Home" ? "active" : ""}
            onClick={() => handleLinkClick("Home")}
          >
            <Link to="/" onClick={() => handleLinkClick("Home")}>Home</Link>
          </li>
          {/* Link to about page */}
          <li
            className={activeLink === "About" ? "active" : ""}
            onClick={() => handleLinkClick("About")}
          >
            <Link to="/about" onClick={() => handleLinkClick("About")}>About</Link>
          </li>
          {/* Link to services page */}
          <li
            className={activeLink === "Services" ? "active" : ""}
            onClick={() => handleLinkClick("Services")}
          >
            <Link to="/services" onClick={() => handleLinkClick("Services")}>Services</Link>
          </li>
          {/* Link to blog page */}
          <li
            className={activeLink === "Blog" ? "active" : ""}
            onClick={() => handleLinkClick("Blog")}
          >
            <Link to="/blog" onClick={() => handleLinkClick("Blog")}>Blog</Link>
          </li>
          {/* Link to contact page */}
          <li
            className={activeLink === "Contact" ? "active" : ""}
            onClick={() => handleLinkClick("Contact")}
          >
            <Link to="/contact" onClick={() => handleLinkClick("Contact")}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
