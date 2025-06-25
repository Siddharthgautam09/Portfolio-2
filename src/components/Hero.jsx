import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoIosFlag } from 'react-icons/io';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="relative w-full min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="z-10 flex flex-col justify-start gap-[2vh] px-6 sm:px-10 md:px-[11%] pt-[30vh]"
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
            className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-tight transition-all duration-300 ease-in-out 
            origin-left hover:scale-110 cursor-pointer"
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
              {/* Email */}
              <a
                href="mailto:siddharth.mtc09@gmail.com"
                className="hover:text-yellow-400 transition duration-200 flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-yellow-400" />
                siddharth.mtc09@gmail.com
              </a>

              {/* Phone */}
              <a
                href="tel:+91989249092"
                className="hover:text-yellow-400 transition duration-200 flex items-center gap-3"
              >
                <FaPhone className="text-yellow-400" />
                +91 98924 9092
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sid-gautam09/"
                className="hover:text-yellow-400 transition duration-200 flex items-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-yellow-400" />
                linkedin.com/in/sid-gautam09
              </a>

              {/* Location */}
              <span className="flex items-center gap-2 text-white">
                <IoIosFlag className="text-yellow-400" />
                India
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
