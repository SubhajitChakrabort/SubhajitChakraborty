'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name Section */}
          {/* <div className="font-mono text-lg md:text-xl">
            <span className="text-blue-400">class</span>
            <span className="text-green-400">{` Developer`}</span>
            <span className="text-white">{`:`}</span>
            <br className="md:hidden" />
            <span className="text-yellow-400 ml-4">def</span>
            <span className="text-purple-400">{` __init__`}</span>
            <span className="text-white">{`(self):`}</span>
            <br className="md:hidden" />
            <span className="text-cyan-400 ml-8">self.call</span>
            <span className="text-white">{` = `}</span>
            <span className="text-orange-400">{`"SChaky"`}</span>
          </div> */}
          <div className="font-mono text-lg md:text-xl">
            <span className="text-blue-400">{`const `}</span>
            <span className="text-green-400">developer</span>
            <span className="text-white">{` = {`}</span>
            <br className="md:hidden" />
            <span className="text-yellow-400 ml-4">name:</span>
            <span className="text-purple-400">{` "Subhajit Chakraborty"`}</span>
            <span className="text-white">{`};`}</span>
          </div>

          {/* Desktop Navigation with Hire Me Button */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            
            <a href="#projects" className="text-white hover:text-cyan-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-white hover:text-cyan-400 transition-colors">
              Skills
            </a>
             <a href="#achievements" className="text-white hover:text-cyan-400 transition-colors">
              Achievements
            </a>
            <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-2 text-cyan-400 border border-cyan-400 rounded-full
                hover:bg-cyan-400 hover:text-black transition-all duration-300
                animate-pulse hover:animate-none"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Navigation with Hire Me Button */}
          <div
            className={`${isOpen ? 'block' : 'hidden'
              } md:hidden absolute top-16 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm`}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">
                About
              </a>

              <a href="#projects" className="text-white hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-white hover:text-cyan-400 transition-colors">
                Skills
              </a>
               <a href="#achievements" className="text-white hover:text-cyan-400 transition-colors">
              Achievements
            </a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">
                Contact
              </a>
              <a
                href="#contact"
                className="px-6 py-2 text-cyan-400 border border-cyan-400 rounded-full
                  hover:bg-cyan-400 hover:text-black transition-all duration-300
                  animate-pulse hover:animate-none"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
