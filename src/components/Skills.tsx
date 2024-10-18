import React from 'react';
import { Code, Server, Palette, Zap, Database, Cloud } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Code },
  { name: 'Backend Development', icon: Server },
  { name: 'UI/UX Design', icon: Palette },
  { name: 'Performance Optimization', icon: Zap },
  { name: 'Database Management', icon: Database },
  { name: 'Cloud Services', icon: Cloud },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 dark:text-indigo-300">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex items-center">
              <skill.icon size={32} className="text-indigo-600 dark:text-indigo-400 mr-4" />
              <span className="text-gray-800 dark:text-gray-200 text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;