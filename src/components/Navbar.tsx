import { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-indigo-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <Brain className="w-10 h-10 text-indigo-500" />
              <div className="absolute inset-0 blur-xl bg-indigo-500/50 -z-10"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Skill Quiz LAB
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
            <a
              href="https://appstoreai.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Download
            </a>
            <button
              onClick={onLoginClick}
              className="px-6 py-2.5 text-gray-300 hover:text-white transition-colors duration-200"
            >
              Admin
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-slate-900/95 backdrop-blur-lg rounded-b-2xl">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('vision')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
            >
              Career
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
            >
              Contact
            </button>
            <a
              href="https://appstoreai.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mx-4 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-center"
            >
              Download
            </a>
            <button
              onClick={onLoginClick}
              className="block w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-600/20 transition-colors duration-200"
            >
              Admin
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
