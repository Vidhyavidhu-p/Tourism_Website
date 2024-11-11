import React from 'react';
import './HeroSection.css';

function HeroSection({ image }) {  // Accept image prop
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Welcome to world Explore</h1>
                    <p>Discover places and unique experiences.</p>
                    <button>Start Your Journey</button>
                </div>
                <div className="hero-image">
                    <img src={image} alt="Explore the world" />  {/* Use the passed image */}
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
