import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 dark:text-indigo-300">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Aquila Joels Lungu" className="rounded-lg shadow-lg w-64 h-64 object-cover mx-auto" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Hello! I'm Aquila Joels Lungu, a passionate full stack developer with a keen eye for creating elegant, efficient, and user-centric web applications. With over 5 years of experience in the tech industry, I've honed my skills in both front-end and back-end development, as well as UI/UX design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Code size={24} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Full Stack Dev</span>
              </div>
              <div className="flex items-center">
                <Palette size={24} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center">
                <Zap size={24} className="text-indigo-600 dark:text-indigo-400 mr-2" />
                <span className="text-gray-700 dark:text-gray-300">Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;