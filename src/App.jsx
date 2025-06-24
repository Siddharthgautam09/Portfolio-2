import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

function App() {
  const heroRef = useRef(null);
  const [blur, setBlur] = useState(false);

  // Detect when the Hero section leaves the viewport
  useEffect(() => {
  const heroEl = document.getElementById("hero");
  const aboutEl = document.getElementById("about");

  let isHeroVisible = false;
  let isAboutVisible = false;

  const updateBlur = () => {
    // If both visible, apply blur
    if (isHeroVisible && isAboutVisible) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.target.id === "hero") {
        isHeroVisible = entry.isIntersecting;
      } else if (entry.target.id === "about") {
        isAboutVisible = entry.isIntersecting;
      }
      updateBlur();
    },
    {
      root: null,
      threshold: 0.3, // tweak for overlap sensitivity
    }
  );

  if (heroEl) observer.observe(heroEl);
  if (aboutEl) observer.observe(aboutEl);

  return () => {
    if (heroEl) observer.unobserve(heroEl);
    if (aboutEl) observer.unobserve(aboutEl);
  };
}, []);


  return (
    <div className="relative w-full min-h-screen overflow-hidden">
  {/* 🔳 Fixed Background Image */}
  <div
    className={`fixed inset-0 bg-cover bg-no-repeat bg-center z-0 bg-transition pointer-events-none 
      ${blur ? 'blurred-bg' : 'clear-bg'}`}
    style={{
      backgroundImage:
        "url('https://framerusercontent.com/images/t6jT5g2xsOV9jDFck9iJYVPNmLw.jpg?scale-down-to=2048')",
      backgroundPosition: '57.8% 31%',
      backgroundSize: 'cover',
    }}
  />

  {/* 💦 Optional Radial Splash Blur (Framer Motion) */}
  <AnimatePresence>
    {blur && (
      <motion.div
        key="splash-overlay"
        className="fixed inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)',
        }}
      />
    )}
  </AnimatePresence>

  {/* 🛠 Anti-Line Shadow Mask */}
  <div
    className="fixed inset-0 z-0 pointer-events-none"
    style={{
      boxShadow:
        'inset 0 -20px 20px -20px rgba(0,0,0,0.4), inset 0 20px 20px -20px rgba(0,0,0,0.4)',
    }}
  />

  {/* 🌓 Dark Overlay for contrast */}
  <div className="fixed inset-0 bg-black/60 z-0" />

  {/* Page Content */}
  <div className="relative z-10">
    <Navbar />
    <div ref={heroRef}>
      <Hero />
    </div>
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
