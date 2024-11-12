<<<<<<< Updated upstream
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Home"
// import About from "./components/About"
import Blog from "./components/Blog"
// import Contact from "./components/Contact"
// import Layout from "./components/Layout"
// // import Gallery from "./components/Gallery"
import './App.css'
// import Footer from "./components/Footer"
=======


import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedSection from './components/HomeSection1';
import './App.css';

>>>>>>> Stashed changes


function App() {
  return (
    <div className="App">

  
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="blog" element={<Blog />} />
        {/* <Route path="layout" element={<Layout />} /> */}
        {/* <Route path="gallery" element={<Gallery />} /> */}
      </Routes>
      {/* <Footer /> */}
    </div>
  );

}

export default App;
 