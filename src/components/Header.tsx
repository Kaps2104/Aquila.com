import React from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-indigo-900 dark:bg-gray-900 text-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Aquila Joels Lungu</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-indigo-300 transition duration-300">About</a>
          <a href="#skills" className="hover:text-indigo-300 transition duration-300">Skills</a>
          <a href="#projects" className="hover:text-indigo-300 transition duration-300">Projects</a>
          <a href="#contact" className="hover:text-indigo-300 transition duration-300">Contact</a>
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
        <div className="md:hidden flex items-center">
          <button onClick={toggleDarkMode} className="mr-4 focus:outline-none">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-indigo-800 dark:bg-gray-800">
          <a href="#about" className="block px-4 py-2 hover:bg-indigo-700 dark:hover:bg-gray-700">About</a>
          <a href="#skills" className="block px-4 py-2 hover:bg-indigo-700 dark:hover:bg-gray-700">Skills</a>
          <a href="#projects" className="block px-4 py-2 hover:bg-indigo-700 dark:hover:bg-gray-700">Projects</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-indigo-700 dark:hover:bg-gray-700">Contact</a>
        </nav>
      )}
    </header>
  );
};

export default Header;