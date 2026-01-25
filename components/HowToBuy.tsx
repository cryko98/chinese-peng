import React from 'react';
import { Wallet, Coins, Rocket, ArrowRight } from 'lucide-react';
import { CONTRACT_ADDRESS, PUMP_FUN_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const HowToBuy: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Wallet className="w-10 h-10 text-cyan-100" />,
      title: t.buy.step1,
      desc: t.buy.desc1
    },
    {
      icon: <Coins className="w-10 h-10 text-cyan-100" />,
      title: t.buy.step2,
      desc: t.buy.desc2
    },
    {
      icon: <Rocket className="w-10 h-10 text-cyan-100" />,
      title: t.buy.step3,
      desc: t.buy.desc3
    },
    {
      icon: <div className="font-chinese text-3xl text-cyan-100 font-bold">¥</div>,
      title: t.buy.step4,
      desc: t.buy.desc4
    }
  ];

  return (
    <section id="buy" className="py-24 relative">
       {/* Background gradient */}
       <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-sky-950/50 to-slate-900"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-chinese text-5xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500 mb-6 drop-shadow-sm">
            {t.buy.title}
          </h2>
          <p className="text-xl text-cyan-200">{t.buy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Ice Card */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 h-full border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform border-2 border-cyan-200/50">
                  {step.icon}
                </div>
                <h3 className="font-chinese text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="font-medium text-cyan-100/80">{step.desc}</p>
                
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-lg z-20">
                  {index + 1}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-cyan-500/50">
                  <ArrowRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]">
                <a 
                    href={PUMP_FUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-12 py-4 bg-slate-900 rounded-full text-2xl font-bold font-chinese hover:bg-slate-800 transition-colors text-white"
                >
                    {t.buy.cta}
                </a>
            </div>
            <p className="mt-6 text-sm text-cyan-400/70 font-mono break-all hover:text-cyan-300 transition-colors cursor-pointer" onClick={() => navigator.clipboard.writeText(CONTRACT_ADDRESS)}>
                CA: {CONTRACT_ADDRESS}
            </p>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;