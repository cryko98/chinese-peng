import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const CommunityDivider: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="relative py-24 overflow-hidden">
      {/* Golden Dust Overlay */}
      <div className="absolute inset-0 bg-amber-900/10 backdrop-blur-[1px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-4xl md:text-6xl text-white mb-4 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]">
            {t.vision.title}
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto rounded-full shadow-[0_0_10px_rgba(245,158,11,1)]"></div>
        </div>

        <div className="max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-700">
          <div className="border-[4px] border-amber-600/80 rounded-lg shadow-[0_0_50px_rgba(180,83,9,0.5)] overflow-hidden relative">
            <div className="absolute inset-0 border-2 border-white/10 rounded-lg pointer-events-none z-20"></div>
            {/* Using About Banner here if EXTRA_BANNER is same or placeholder */}
            <img 
              src={IMAGES.ABOUT_BANNER} 
              alt="Gou Emperor" 
              className="w-full h-auto relative z-10 object-cover max-h-[500px]"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
            <p className="text-amber-200 font-chinese text-xl tracking-widest uppercase drop-shadow-md border px-6 py-2 rounded-full border-amber-500/30 bg-black/30 inline-block">
                {t.vision.year}
            </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityDivider;