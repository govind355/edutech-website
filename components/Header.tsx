import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { INSTITUTE_NAME } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-royal text-white shadow-lg border-b-4 border-gold">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Area */}
        <Link to="/" className="flex items-center space-x-3 group" onClick={closeMenu}>
          <div className="bg-white p-2 rounded-full border-2 border-gold group-hover:scale-105 transition-transform duration-300">
             <GraduationCap className="h-8 w-8 text-royal" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wide leading-tight text-gold">
              {INSTITUTE_NAME}
            </h1>
            <span className="text-xs md:text-sm font-light text-gray-200">Jaipur, Rajasthan</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/" className={`hover:text-gold transition-colors ${isActive('/') ? 'text-gold' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-gold transition-colors ${isActive('/about') ? 'text-gold' : ''}`}>About Us</Link>
          <Link to="/courses" className={`hover:text-gold transition-colors ${isActive('/courses') ? 'text-gold' : ''}`}>Courses</Link>
          <Link to="/admissions" className={`hover:text-gold transition-colors ${isActive('/admissions') ? 'text-gold' : ''}`}>Admissions</Link>
          <Link to="/contact" className={`hover:text-gold transition-colors ${isActive('/contact') ? 'text-gold' : ''}`}>Contact</Link>
          <Link 
            to="/admissions" 
            className="bg-gold text-royal px-5 py-2 rounded-full font-bold hover:bg-white hover:text-maroon transition-all duration-300 transform hover:-translate-y-1 shadow-md"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-gold">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-royal border-t border-blue-800">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <Link to="/" className="block py-2 hover:text-gold border-b border-blue-900" onClick={closeMenu}>Home</Link>
            <Link to="/about" className="block py-2 hover:text-gold border-b border-blue-900" onClick={closeMenu}>About Us</Link>
            <Link to="/courses" className="block py-2 hover:text-gold border-b border-blue-900" onClick={closeMenu}>Courses</Link>
            <Link to="/admissions" className="block py-2 hover:text-gold border-b border-blue-900" onClick={closeMenu}>Admissions</Link>
            <Link to="/contact" className="block py-2 hover:text-gold border-b border-blue-900" onClick={closeMenu}>Contact</Link>
            <Link 
              to="/admissions" 
              className="inline-block text-center bg-gold text-royal px-4 py-2 rounded font-bold hover:bg-white w-full"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
