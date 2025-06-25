import React from 'react';
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section 
      id="skills"
      className="min-h-screen px-6 sm:px-12 md:px-[11%] py-16 text-white pt-40"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text"
        style={{
        color: 'rgb(255, 184, 0)',
        fontFamily: 'Albert Sans, sans-serif',
        }}>Skills & Tools</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-medium">
        <div>
          <ul className="space-y-4 list-disc list-inside text-yellow-400">
            <li className="text-white">React.js</li>
            <li className="text-white">Tailwind CSS</li>
            <li className="text-white">Responsive Web Design</li>
            <li className="text-white">Component-Based Architecture</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4 list-disc list-inside text-yellow-400">
            <li className="text-white">Node.js</li>
            <li className="text-white">Express.js</li>
            <li className="text-white">MongoDB</li>
            <li className="text-white">RESTful APIs</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <SiReact size={48} className="text-cyan-400" />
          <span className="text-sm">React</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiTailwindcss size={48} className="text-sky-400" />
          <span className="text-sm">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiNodedotjs size={48} className="text-green-500" />
          <span className="text-sm">Node.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiExpress size={48} className="text-gray-300" />
          <span className="text-sm">Express.js</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <SiMongodb size={48} className="text-green-400" />
          <span className="text-sm">MongoDB</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
