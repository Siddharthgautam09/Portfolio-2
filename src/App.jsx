import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center z-0"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/t6jT5g2xsOV9jDFck9iJYVPNmLw.jpg?scale-down-to=2048')",
          backgroundPosition: '57.8% 31%',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
