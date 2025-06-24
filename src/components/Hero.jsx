import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="z-10 flex flex-col justify-start gap-[2vh] px-6 sm:px-10 md:px-[11%] pt-[40vh]"
        style={{
          outline: 'none',
          opacity: 1,
          transform: 'none',
        }}
      >
        <h3
          className="text-4xl sm:text-4xl md:text-6xl font-semibold"
          style={{
            color: 'rgb(255, 184, 0)',
            fontFamily: 'Albert Sans, sans-serif',
          }}
        >
          Hi I am
        </h3>

        <h3
          className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
          style={{
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Albert Sans, sans-serif',
          }}
        >
          Siddharth
          <br className="block lg:hidden" />
          <span className="lg:inline"> Gautam</span>
        </h3>

        {/* Contact Links */}
        <div className="mt-8 w-full flex justify-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-14 text-white text-lg sm:text-xl lg:text-2xl font-semibold text-left">
            <a
              href="mailto:siddharth.mtc09@gmail.com"
              className="hover:text-yellow-400 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              siddharth.mtc09@gmail.com
            </a>
            <a
              href="tel:+91989249092"
              className="hover:text-yellow-400 transition duration-200"
            >
              +91 98924 9092
            </a>
            <a
              href="https://www.linkedin.com/in/sid-gautam09/"
              className="hover:text-yellow-400 transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sid-gautam09
            </a>
            <span className="text-white">India</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
