import React from 'react';
import './CSS/HomeSection1.css';
import image2 from '../Assets/images-2.jpeg';  // import image2
import image3 from '../Assets/images-3.jpeg';  // import image3

function HomeSection1() {
    return (
        <section className="home-section">
            <div className="home-content">
                <div className="home-image-outer-container">
                    <div className="home-image">
                        <img src={image2} alt="Explore the world" />
                    </div>
                    <div className="home-image">
                        <img src={image3} alt="Explore the world" />
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
