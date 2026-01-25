import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'How to Buy', href: '#buy' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-red-900/90 backdrop-blur-md border-b-4 border-amber-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={IMAGES.LOGO} 
              alt="Peng Logo" 
              className="h-12 w-12 rounded-full border-2 border-amber-400 shadow-md"
            />
            <span className="font-chinese text-2xl text-amber-400 tracking-wider">
              $PENG
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-bold text-white hover:text-amber-300 transition-colors duration-300 font-chinese uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#buy" 
                className="bg-amber-400 hover:bg-amber-500 text-red-900 px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg border-2 border-yellow-200"
              >
                Buy Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-white hover:bg-red-800 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-950 border-t border-amber-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-white hover:bg-red-800 text-center font-chinese"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#buy"
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-amber-400 text-red-900 font-bold py-3 mt-4 rounded-md"
            >
              Buy on Pump.fun
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;