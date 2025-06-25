import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen px-6 sm:px-12 md:px-[11%] pt-24 pb-16"
    >
      {/* Heading */}
      <h2
        className="text-4xl sm:text-5xl font-bold mb-8"
        style={{
          color: 'rgb(255, 184, 0)',
          fontFamily: 'Albert Sans, sans-serif',
        }}
      >
        Summary
      </h2>

      {/* Paragraphs */}
      <div className="text-white text-base sm:text-lg leading-relaxed space-y-6 max-w-5xl">
        <p>
          I am an experienced and detail-oriented developer focused on crafting
          impactful digital solutions. My passion lies in blending intuitive
          design with smart functionality to elevate user experiences.
        </p>

        <p>
          I’ve collaborated across domains — with designers, engineers, and
          product managers — to deliver clean, scalable, and accessible results
          across web and mobile platforms.
        </p>
      </div>

      {/* Highlight Blockquote */}
      <div className="mt-10 border-l-4 border-yellow-500 pl-4 sm:pl-6 text-white text-lg sm:text-xl font-semibold max-w-4xl">
        Driven by a curiosity to learn and improve, I continuously explore new
        tools and technologies to enhance my work. I am committed to delivering
        high-quality results that make a difference for users and businesses
        alike.
      </div>
    </section>
  );
};

export default About;
