'use client';
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 py-4 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="./Physics-Wallah-Logo-White.png" className="w-auto h-8 sm:h-12 mr-2" alt="PW Logo" />
          <h1 className="text-xl sm:text-2xl font-bold text-green-400">PW Games</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-400 transition-colors">Home</a>
          <a href="#" className="hover:text-green-400 transition-colors">Categories</a>
          <a href="#" className="hover:text-green-400 transition-colors">New Games</a>
          <a href="#" className="hover:text-green-400 transition-colors">Popular</a>
          <a href="#" className="hover:text-green-400 transition-colors">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="bg-blue-700 hover:bg-blue-900 px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base rounded-full transition-colors">
            Login/Register
          </button>
          <button 
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 mt-2 py-3 px-4 border-t border-gray-700">
          <nav className="flex flex-col space-y-3">
            <a href="#" className="hover:text-green-400 transition-colors py-1">Home</a>
            <a href="#" className="hover:text-green-400 transition-colors py-1">Categories</a>
            <a href="#" className="hover:text-green-400 transition-colors py-1">New Games</a>
            <a href="#" className="hover:text-green-400 transition-colors py-1">Popular</a>
            <a href="#" className="hover:text-green-400 transition-colors py-1">About</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;