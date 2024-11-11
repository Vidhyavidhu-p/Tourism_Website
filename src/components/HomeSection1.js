import React from 'react';
import './HomeSection1.css';

function HomeSection1() {
    return (
        <section className="home-section">
            <div className="home-content">
                <div className="home-image-outer-container">
                    <div className="home-image">
                        <img src={Image} alt="Explore the world - Image 1" />
                    </div>
                    <div className="home-image">
                        <img src={Image} alt="Explore the world - Image 2" />
                    </div>
                </div>
                <div className="home-text">
                    <h1>Explore the world with us</h1>
                    <p>Discover amazing places and unique experiences.</p>
                    <button>Start Your Journey</button>
                </div>
            </div>
        </section>
    );
}

export default HomeSection1;
