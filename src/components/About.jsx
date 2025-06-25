import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 sm:px-12 md:px-[11%] pt-40 pb-16"
    >
      {/* Heading */}
      <h2
        className="text-5xl sm:text-5xl md:text-6xl font-bold mb-8"
        style={{
          color: 'rgb(255, 184, 0)',
          fontFamily: 'Albert Sans, sans-serif',
        }}
      >
        About Me
      </h2>

      {/* Paragraphs */}
      <div className="text-white text-base sm:text-lg leading-relaxed space-y-6 max-w-2xl">
        <p>
          Full-stack dev turning bold ideas into slick, user-first products. I paint interfaces with React + Tailwind, wire them to bulletproof Node/Express APIs, and turbo-charge data with MongoDB. Blending design flair with engineering precision, I ship clean, accessible code that scales—from micro-interactions to millisecond queries.
        </p>

        <p>
          I’ve collaborated across domains — with designers, engineers, and
          product managers — to deliver clean, scalable, and accessible results
          across web and mobile platforms.
        </p>
      </div>

      {/* Highlight Blockquote */}
      <div className="mt-10 border-l-4 border-yellow-500 pl-4 sm:pl-6 text-white text-lg sm:text-xl font-semibold max-w-2xl">
      Fueled by curiosity and a passion for growth, I constantly explore new tools and technologies to sharpen my craft. I’m driven to deliver high-impact solutions that not only perform flawlessly but truly elevate user and business outcomes.
      </div>
    </section>
  );
};

export default About;
