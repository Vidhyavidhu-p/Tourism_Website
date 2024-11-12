

import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Header.css';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
    };

    return (
        <header>
            <nav>
                <div className="logo">TourNest.com</div>
                {/* Hamburger menu icon on mobile */}
                <button className="toggle-button" onClick={toggleMenu}>
                    <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
                    </li>
                    <li>
                        <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
