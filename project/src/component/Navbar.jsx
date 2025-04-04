
// Navbar.jsx 

import React, { useState } from 'react';
import { FaBars, FaTimes, FaInfoCircle, FaLaptopCode, FaIndustry, FaBook, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-blue-800 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Company Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl md:text-2xl font-bold whitespace-nowrap">⚡ENERGY ENNOVATIONS</span>
          </div>

          {/* Desktop Menu - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            <a href="#about" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base">
              <FaInfoCircle className="mr-1 lg:mr-2" /> ABOUT US
            </a>
            <a href="#tech" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base">
              <FaLaptopCode className="mr-1 lg:mr-2" /> TECHNOLOGIES
            </a>
            <a href="#industries" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base">
              <FaIndustry className="mr-1 lg:mr-2" /> INDUSTRIES
            </a>
            <a href="#resources" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base">
              <FaBook className="mr-1 lg:mr-2" /> RESOURCES
            </a>
            <a href="#contact" className="flex items-center px-3 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm lg:text-base">
              <FaEnvelope className="mr-1 lg:mr-2" /> CONTACT US
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - shown when isOpen is true */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 w-full absolute left-0 right-0">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#about"
              className="flex items-center px-3 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle className="mr-3" /> ABOUT US
            </a>
            <a
              href="#tech"
              className="flex items-center px-3 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <FaLaptopCode className="mr-3" /> TECHNOLOGIES
            </a>
            <a
              href="#industries"
              className="flex items-center px-3 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <FaIndustry className="mr-3" /> INDUSTRIES
            </a>
            <a
              href="#resources"
              className="flex items-center px-3 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <FaBook className="mr-3" /> RESOURCES
            </a>
            <a
              href="#contact"
              className="flex items-center px-3 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base"
              onClick={() => setIsOpen(false)}
            >
              <FaEnvelope className="mr-3" /> CONTACT US
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

