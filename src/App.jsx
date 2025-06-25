import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔳 Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-no-repeat bg-center z-0 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/t6jT5g2xsOV9jDFck9iJYVPNmLw.jpg?scale-down-to=2048')",
          backgroundPosition: '57.8% 31%',
          backgroundSize: 'cover',
        }}
      />

      {/* 🌓 Dark Overlay for contrast */}
      <div className="fixed inset-0 bg-black/60 z-0" />

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <BottomNav />
        <Footer />
      </div>
    </div>
  );
}

export default App;
