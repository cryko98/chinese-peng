import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

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
        {/* Gradient overlay: Darker at top for text readability, with ice tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/70 via-transparent to-transparent h-1/3" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        {/* Winter Style Title with Icy Glow */}
        <h1 className="font-chinese text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 mb-2 animate-pulse drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] tracking-wide">
          {t.hero.title}
        </h1>
      </div>
    </div>
  );
};

export default Hero;