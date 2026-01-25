import React from 'react';
import { IMAGES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-red-900">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl p-2 bg-gradient-to-br from-amber-300 to-red-600 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src={IMAGES.ABOUT_BANNER} 
                alt="Peng Story Banner" 
                className="rounded-xl w-full h-auto object-cover border-4 border-red-950"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-400 rounded-full flex items-center justify-center text-red-900 font-bold text-2xl border-4 border-red-950 shadow-lg hidden md:flex font-chinese">
                幸运
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="font-chinese text-5xl text-amber-400 mb-8 drop-shadow-md">
              The Legend of Peng
            </h2>
            
            <div className="space-y-6 text-lg text-red-100 leading-relaxed font-body">
              <p>
                On the frozen peaks of the digital Orient, <strong className="text-amber-300">Peng</strong> was born. Unlike other penguins who just wanted to slide on ice, Peng wanted to slide into the global economy.
              </p>
              <p>
                Legend says Peng ate a magical dumpling filled with blockchain data. Suddenly, he wasn't just a bird; he was a financial visionary. He traded his fish for Solana and swam all the way from the Yangtze River to the Moon.
              </p>
              <p className="bg-red-950/50 p-6 rounded-xl border-l-4 border-amber-400 italic">
                "Why waddle when you can pump?" - Peng, 2024
              </p>
              <p>
                $PENG is not just a coin; it is a movement. A movement of prosperity, red envelopes, and zero-tax transactions. Join the dynasty before the dragons wake up!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" className="fill-amber-400">
           <path d="M10,50 Q50,5 90,50 T10,50" />
        </svg>
      </div>
    </section>
  );
};

export default About;