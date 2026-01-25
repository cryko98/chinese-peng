import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { CONTRACT_ADDRESS, IMAGES, TWITTER_URL } from '../constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative h-screen flex flex-col justify-end items-center overflow-hidden pb-12 md:pb-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${IMAGES.HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient overlay: Dark at bottom for text readability, transparent at top/center for the penguin */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950 via-red-950/20 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <h1 className="font-chinese text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-t from-amber-300 to-yellow-500 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] mb-2 animate-pulse">
          CHINESE PENG 企鹅
        </h1>
        
        <p className="font-chinese text-xl md:text-3xl text-white mb-6 drop-shadow-md">
          $PENG
        </p>

        {/* Contract Address Box */}
        <div className="bg-red-950/80 backdrop-blur-sm border-2 border-amber-400 rounded-xl p-3 md:p-4 mb-6 max-w-2xl mx-auto shadow-[0_0_20px_rgba(251,191,36,0.3)]">
          <p className="text-amber-200 text-xs md:text-sm mb-1 font-bold uppercase tracking-widest">Solana Contract Address</p>
          <div className="flex items-center justify-between gap-2 bg-black/40 rounded-lg p-2 md:p-3 border border-red-800">
            <span className="font-mono text-xs md:text-lg text-white truncate w-full text-center">
              {CONTRACT_ADDRESS}
            </span>
            <button 
              onClick={handleCopy}
              className="text-amber-400 hover:text-white transition-colors p-1 md:p-2"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
          </div>
        </div>

        {/* Socials & CTA */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-6">
           <a 
            href={TWITTER_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-black rounded-xl border-2 border-white/20 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300"
          >
            {/* X Logo SVG */}
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 md:h-8 md:w-8 fill-white group-hover:fill-amber-400 transition-colors">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>

          <a 
            href="#buy"
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-white font-chinese text-xl md:text-2xl px-8 py-3 md:px-12 md:py-4 rounded-full shadow-lg transform hover:scale-105 hover:rotate-1 transition-all border-2 border-yellow-300"
          >
            Buy $PENG
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;