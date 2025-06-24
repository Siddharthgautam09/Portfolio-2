import React, { useEffect, useRef, useState } from 'react';
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setBlur(!entry.isIntersecting); // blur if Hero is out of view
      },
      {
        root: null,
        threshold: 0.5, // Adjust as needed
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      {/* Fixed Background */}
      <div
  className={`fixed inset-0 bg-cover bg-no-repeat bg-center z-0 bg-transition 
    ${blur ? 'backdrop-blur-md scale-105 opacity-90' : 'backdrop-blur-0 scale-100 opacity-90'}`}
  style={{
    backgroundImage:
      "url('https://framerusercontent.com/images/t6jT5g2xsOV9jDFck9iJYVPNmLw.jpg?scale-down-to=2048')",
    backgroundPosition: '57.8% 31%',
  }}
/>

      {/* Dark Overlay */}
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
        <Navbar />
        <BottomNav />
        <Footer />
      </div>
    </div>
  );
}

export default App;
