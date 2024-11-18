import React from 'react';
import './CSS/HeroSection.css';
import image from '../Assets/images-1.jpeg';  // adjust path based on where HeroSection.js is located

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Explore the World with Us</h1>
                    <p>Discover amazing places and unique experiences.</p>
                    <button>Start Your Journey</button>
                </div>
                <div className="hero-image">
                    <img src={image} alt="Explore the world" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
