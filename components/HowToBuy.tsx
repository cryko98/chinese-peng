import React from 'react';
import { Wallet, Coins, Rocket, ArrowRight } from 'lucide-react';
import { CONTRACT_ADDRESS, PUMP_FUN_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const HowToBuy: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Wallet className="w-10 h-10 text-amber-100" />,
      title: t.buy.step1,
      desc: t.buy.desc1
    },
    {
      icon: <Coins className="w-10 h-10 text-amber-100" />,
      title: t.buy.step2,
      desc: t.buy.desc2
    },
    {
      icon: <Rocket className="w-10 h-10 text-amber-100" />,
      title: t.buy.step3,
      desc: t.buy.desc3
    },
    {
      icon: <div className="font-chinese text-3xl text-amber-100 font-bold">狗</div>,
      title: t.buy.step4,
      desc: t.buy.desc4
    }
  ];

  return (
    <section id="buy" className="py-24 relative">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-black via-rose-950 to-red-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-chinese text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-400 mb-6 drop-shadow-sm">
            {t.buy.title}
          </h2>
          <p className="text-xl text-amber-200/80">{t.buy.subtitle}</p>
        </div>

        {/* 2x2 Layout on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Red Envelope / Paper Style Card */}
              <div className="bg-red-900/60 backdrop-blur-md rounded-xl p-8 h-full border-2 border-amber-600/40 hover:border-rose-400 hover:bg-red-800/80 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] transition-all duration-300 flex flex-row items-center text-left gap-6">
                
                <div className="bg-gradient-to-br from-amber-600 to-red-800 w-20 h-20 min-w-[5rem] rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform border-2 border-amber-300/50">
                  {step.icon}
                </div>
                
                <div>
                   <h3 className="font-chinese text-2xl font-bold mb-2 text-amber-100">{step.title}</h3>
                   <p className="font-medium text-amber-200/60">{step.desc}</p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 text-6xl font-chinese text-white/5 font-bold pointer-events-none select-none">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-rose-500 via-amber-300 to-rose-500 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.6)] animate-pulse">
                <a 
                    href={PUMP_FUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-12 py-4 bg-red-950 rounded-full text-2xl font-bold font-chinese hover:bg-red-900 transition-colors text-amber-100"
                >
                    {t.buy.cta}
                </a>
            </div>
            <p className="mt-6 text-sm text-amber-500/70 font-mono break-all hover:text-amber-300 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText(CONTRACT_ADDRESS)}>
                CA: {CONTRACT_ADDRESS}
            </p>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;