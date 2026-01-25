import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with Ice Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side with Icy Frame */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl p-1 bg-gradient-to-br from-cyan-300 via-white to-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.4)] rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="bg-red-950 p-2 rounded-xl">
                 <img 
                  src={IMAGES.ABOUT_BANNER} 
                  alt="Peng Story Banner" 
                  className="rounded-lg w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-full flex items-center justify-center text-red-900 font-bold text-2xl border-4 border-white shadow-[0_0_20px_rgba(251,191,36,0.5)] hidden md:flex font-chinese">
                {t.about.sticker}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-chinese text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {t.about.title}
            </h2>
            
            <div className="space-y-6 text-lg text-cyan-50 leading-relaxed font-body">
              <p>
                {t.about.p1}
              </p>
              <p>
                {t.about.p2}
              </p>
              <p className="bg-white/10 backdrop-blur-md p-6 rounded-xl border-l-4 border-cyan-400 italic text-cyan-100 shadow-inner">
                {t.about.quote}
              </p>
              <p>
                {t.about.p3}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Ice Crystals */}
      <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" className="fill-cyan-400 blur-2xl">
           <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
    </section>
  );
};

export default About;