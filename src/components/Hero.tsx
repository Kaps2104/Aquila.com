import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Aquila Joels Lungu</h1>
        <p className="text-xl md:text-2xl mb-8">Full Stack Developer & UI/UX Enthusiast</p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/aquilajoelslungu" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition duration-300">
            <Github size={28} />
          </a>
          <a href="https://linkedin.com/in/aquilajoelslungu" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300 transition duration-300">
            <Linkedin size={28} />
          </a>
          <a href="mailto:aquila.joels.lungu@example.com" className="hover:text-indigo-300 transition duration-300">
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;