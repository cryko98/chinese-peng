import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const CommunityDivider: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative py-24 overflow-hidden">
      {/* Icy Overlay */}
      <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[2px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-4xl md:text-6xl text-white mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
            {t.vision.title}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded-full shadow-[0_0_10px_rgba(34,211,238,1)]"></div>
        </div>

        <div className="max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-700">
          <div className="border-[6px] border-amber-500/80 rounded-lg shadow-[0_0_50px_rgba(34,211,238,0.3)] overflow-hidden relative">
            <div className="absolute inset-0 border-2 border-white/30 rounded-lg pointer-events-none z-20"></div>
            <img 
              src={IMAGES.EXTRA_BANNER} 
              alt="Peng Emperor" 
              className="w-full h-auto relative z-10"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
            <p className="text-cyan-200 font-chinese text-xl tracking-widest uppercase drop-shadow-md border px-6 py-2 rounded-full border-cyan-500/30 bg-black/30 inline-block">
                {t.vision.year}
            </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityDivider;