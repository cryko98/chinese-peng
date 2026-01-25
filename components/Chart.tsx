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
            <iframe 
                width="100%" 
                height="100%" 
                src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
                title="DexScreener Chart"
                frameBorder="0"
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Chart;