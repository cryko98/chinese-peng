import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col justify-start overflow-hidden pt-32 md:pt-48">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${IMAGES.HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient overlay: Darker at top for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/60 via-transparent to-transparent h-1/3" />
        
        {/* Bottom fade for smooth transition to About section with slight blur */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-red-900 via-red-900/60 to-transparent backdrop-blur-sm" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Winter Style Title */}
        <h1 className="font-chinese text-6xl md:text-8xl text-white mb-2 animate-pulse drop-shadow-[0_0_15px_rgba(200,230,255,0.9)] tracking-wide">
          CHINESE PENG 企鹅
        </h1>
      </div>
    </div>
  );
};

export default Hero;