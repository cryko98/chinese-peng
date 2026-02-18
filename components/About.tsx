import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background with Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-black to-red-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Swapped layout: flex-row-reverse for desktop */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          
          {/* Image Side with Gold/Chinese Frame */}
          <div className="w-full lg:w-1/2">
            <div className="relative p-1.5 bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-700 shadow-[0_0_40px_rgba(251,191,36,0.3)] rounded-lg transform hover:scale-[1.02] transition-transform duration-500">
              <div className="bg-red-950 p-1 rounded-lg border-2 border-red-900">
                 <img 
                  src={IMAGES.ABOUT_BANNER} 
                  alt="Gou Story Banner" 
                  className="rounded-md w-full h-auto object-cover opacity-100"
                />
              </div>
              
              {/* Decorative Corner Ornaments */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-amber-300 rounded-tl-lg"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-amber-300 rounded-tr-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-amber-300 rounded-bl-lg"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-amber-300 rounded-br-lg"></div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-800 rounded-full flex items-center justify-center text-amber-400 font-bold text-3xl border-4 border-amber-500 shadow-[0_0_20px_rgba(251,191,36,0.5)] hidden md:flex font-chinese">
                {t.about.sticker}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-chinese text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {t.about.title}
            </h2>
            
            <div className="space-y-6 text-lg text-amber-50 leading-relaxed font-body">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p className="bg-red-900/40 backdrop-blur-md p-6 rounded-xl border-l-4 border-amber-500 italic text-amber-200 shadow-inner">
                {t.about.quote}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;