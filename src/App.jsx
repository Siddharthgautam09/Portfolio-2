import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { useBgBlur } from './hooks/useBgBlur';

function App() {
  const blur = useBgBlur(0.25); // 👈 Trigger blur after 25% scroll

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔳 Fixed Background Image with Blur on Scroll */}
      <div
        className={`fixed inset-0 bg-cover bg-no-repeat bg-center z-0 pointer-events-none transition-all duration-500 ${
          blur ? 'backdrop-blur-md' : ''
        }`}
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/t6jT5g2xsOV9jDFck9iJYVPNmLw.jpg?scale-down-to=2048')",
          backgroundPosition: '57.8% 31%',
          backgroundSize: 'cover',
        }}
      />

      {/* 🌓 Dark Overlay with optional blur */}
      <div
        className={`fixed inset-0 bg-black/40 z-0 transition-all duration-500 ${
          blur ? 'backdrop-blur-sm' : ''
        }`}
      />

      {/* 🔼 Page Content */}
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
