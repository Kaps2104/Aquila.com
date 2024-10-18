import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'EcoTrack',
    description: 'A React Native app for tracking and reducing carbon footprint.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    github: 'https://github.com/aquilajoes/ecotrack',
    live: 'https://ecotrack-demo.netlify.app',
    category: 'Mobile',
  },
  {
    title: 'DevConnect',
    description: 'A social platform for developers built with MERN stack.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    github: 'https://github.com/aquilajoes/devconnect',
    live: 'https://devconnect-app.herokuapp.com',
    category: 'Web',
  },
  {
    title: 'AI Task Manager',
    description: 'An AI-powered task management system using Python and TensorFlow.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    github: 'https://github.com/aquilajoes/ai-task-manager',
    live: 'https://ai-taskmanager.pythonanywhere.com',
    category: 'AI',
  },
];

const categories = ['All', 'Web', 'Mobile', 'AI'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 dark:text-indigo-300">My Projects</h2>
        <div className="flex justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-indigo-900 dark:text-indigo-300">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200">
                    <Github size={18} className="mr-1" /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;