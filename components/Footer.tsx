import React from 'react';
import { IMAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-amber-400 py-12 border-t-4 border-red-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-4">
            <img 
              src={IMAGES.LOGO} 
              alt="Logo" 
              className="w-16 h-16 rounded-full border-2 border-amber-400 grayscale hover:grayscale-0 transition-all" 
            />
            <div>
              <h3 className="font-chinese text-2xl tracking-wider">CHINESE PENG 企鹅</h3>
              <p className="text-red-500 text-sm">$PENG</p>
            </div>
          </div>

          <div className="flex gap-8 font-chinese text-lg">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#buy" className="hover:text-white transition-colors">Buy</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-red-900/50 text-center text-red-700/60 font-mono text-sm">
          <p>© 2026 Chinese peng 企鹅. All rights reserved.</p>
          <p className="mt-2 text-xs">Cryptocurrency trading involves high risk. This is a memecoin for entertainment purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;