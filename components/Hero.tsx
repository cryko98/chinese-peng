import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Gradient Effect - Warm Chinese Colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 via-red-950 to-black opacity-80 z-0"></div>
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Title with Gold Glow */}
        <h1 className="font-chinese text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-600 mb-6 animate-pulse drop-shadow-[0_0_35px_rgba(245,158,11,0.6)] tracking-wide">
          {t.hero.title}
        </h1>
        
        <div className="inline-block border-y-2 border-amber-500/50 py-2 px-8 bg-black/20 backdrop-blur-sm">
            <span className="text-amber-200 font-chinese text-xl md:text-2xl tracking-[0.5em] uppercase">
                {t.nav.buyPump}
            </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;