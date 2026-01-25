import React, { useState } from 'react';
import { Menu, X, Copy, Check } from 'lucide-react';
import { IMAGES, CONTRACT_ADDRESS, TWITTER_URL } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'How to Buy', href: '#buy' },
    { name: 'Game', href: '#game' },
    { name: 'Chart', href: '#chart' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="fixed w-full z-50 top-0 bg-red-900/95 backdrop-blur-md border-b-4 border-amber-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img 
              src={IMAGES.LOGO} 
              alt="Peng Logo" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-amber-400 shadow-md"
            />
            <span className="font-chinese text-xl md:text-2xl text-amber-400 tracking-wider hidden sm:block">
              $PENG
            </span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Nav Links */}
            <div className="flex space-x-4 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 py-2 rounded-md text-sm font-bold text-white hover:text-amber-300 transition-colors duration-300 font-chinese uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CA Display */}
            <div 
              onClick={handleCopy}
              className="flex items-center gap-2 bg-black/40 hover:bg-black/60 px-3 py-1.5 rounded-full border border-amber-500/30 cursor-pointer transition-colors group"
              title="Copy Contract Address"
            >
              <span className="text-amber-200 text-xs font-mono">CA:</span>
              <span className="text-white text-xs font-mono">{truncateAddress(CONTRACT_ADDRESS)}</span>
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-amber-400 group-hover:text-white" />}
            </div>

            {/* X Logo */}
             <a 
              href={TWITTER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-10 h-10 bg-black rounded-full border border-white/20 hover:border-amber-400 hover:shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-white group-hover:fill-amber-400 transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>

            {/* Buy Button */}
            <a 
              href="#buy" 
              className="bg-amber-400 hover:bg-amber-500 text-red-900 px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg border-2 border-yellow-200 text-sm"
            >
              Buy Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
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
        <div className="lg:hidden bg-red-950 border-t border-amber-900">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {/* Mobile CA */}
            <div 
              onClick={handleCopy}
              className="flex items-center justify-between bg-black/40 px-4 py-3 rounded-lg border border-amber-500/30 cursor-pointer active:bg-black/60"
            >
              <span className="text-amber-200 font-mono text-sm">CA: {truncateAddress(CONTRACT_ADDRESS)}</span>
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-amber-400" />}
            </div>

             {/* Mobile X Link */}
             <a 
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-black hover:bg-gray-900 text-white py-3 rounded-lg border border-white/10"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
              <span>Follow on X</span>
            </a>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-white hover:bg-red-800 text-center font-chinese uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#buy"
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-amber-400 text-red-900 font-bold py-3 mt-4 rounded-md uppercase"
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