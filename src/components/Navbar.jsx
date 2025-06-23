import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Replace with your actual CV download logic
    console.log('Downloading CV...');
    // Example: window.open('path/to/your/cv.pdf', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-7.5">
      <div className="max-w-full mx-auto px-6 sm:px-8 md:px-50 flex justify-between items-center h-12 sm:h-14">
        {/* Open to work status */}
        <div className="flex items-center gap-2 sm:gap-3 text-white">
          <div className="relative">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-ping opacity-75"></div>
          </div>
          <span className="text-lg sm:text-xl font-medium">Open to work</span>
        </div>

        {/* Download CV button */}
        <button
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-amber-600 
                     text-black px-6 py-2.5 rounded-full 
                     text-base font-semibold
                     transform hover:-translate-y-0.5 transition-all duration-200
                     shadow-lg hover:shadow-xl shadow-amber-500/30 hover:shadow-amber-500/40"
        >
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Navbar;