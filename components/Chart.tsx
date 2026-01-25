import React from 'react';
import { CONTRACT_ADDRESS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Chart: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="chart" className="py-24 bg-black relative border-t border-cyan-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-4xl md:text-5xl text-white mb-4">
            {t.chart.title}
          </h2>
          <p className="text-gray-400">{t.chart.subtitle}</p>
        </div>

        <div className="max-w-6xl mx-auto h-[600px] bg-gray-900/50 rounded-xl border border-cyan-500/30 overflow-hidden relative shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            
          {/* Placeholder */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-sm text-center p-6">
             <div className="w-24 h-24 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-8 shadow-[0_0_15px_rgba(34,211,238,0.3)]"></div>
             <h3 className="font-chinese text-3xl text-amber-400 mb-4">{t.chart.opening}</h3>
             <p className="text-cyan-200 max-w-lg mb-6">
               {t.chart.desc}
             </p>
             <div className="bg-black/50 px-4 py-2 rounded border border-cyan-500/20">
                <span className="text-xs text-gray-400 block mb-1">{t.chart.caLabel}</span>
                <span className="font-mono text-cyan-400 text-sm md:text-base">{CONTRACT_ADDRESS}</span>
             </div>
          </div>

          {/* 
            // TODO: Uncomment this after launch and replace the placeholder above
            <iframe 
                width="100%" 
                height="100%" 
                src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
                title="DexScreener Chart"
                frameBorder="0"
            ></iframe>
          */}
        </div>
      </div>
    </section>
  );
};

export default Chart;