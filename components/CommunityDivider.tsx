import React from 'react';
import { IMAGES } from '../constants';

const CommunityDivider: React.FC = () => {
  return (
    <section id="vision" className="relative py-24 bg-red-950">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-4xl md:text-6xl text-white mb-4">
            Emperor of the Blockchain
          </h2>
          <div className="h-1 w-32 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-700">
          <div className="border-8 border-amber-500 rounded-lg shadow-[0_0_30px_rgba(251,191,36,0.2)] overflow-hidden">
            <img 
              src={IMAGES.EXTRA_BANNER} 
              alt="Peng Emperor" 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
            <p className="text-amber-200/80 font-chinese text-xl tracking-widest uppercase">
                2026: The Year of the Peng
            </p>
        </div>
      </div>
    </section>
  );
};

export default CommunityDivider;