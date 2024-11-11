import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Myimage from './Images/Photo1.jpeg';
import Myimage2 from './Images/Photo2.jpeg';  // Correctly import the image
import HeroSection from './components/HeroSection';


import FeaturedSection from './components/HomeSection1';

import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <HeroSection image={Myimage} />  {/* Pass the image to HeroSection */}
            <FeaturedSection image={Myimage2} />
            
        </div>
    );
}

export default App;
