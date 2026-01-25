import React from 'react';
import { CONTRACT_ADDRESS } from '../constants';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-24 bg-black relative border-t-4 border-red-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-4xl md:text-5xl text-white mb-4">
            Live Chart
          </h2>
          <p className="text-gray-400">Track the Emperor's Wealth</p>
        </div>

        <div className="max-w-6xl mx-auto h-[600px] bg-gray-900 rounded-xl border-2 border-gray-800 overflow-hidden relative shadow-[0_0_50px_rgba(220,38,38,0.2)]">
            
          {/* This acts as the pre-launch placeholder. After launch, you would uncomment the iframe below and remove this overlay logic or conditionally render it. */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-center p-6">
             <div className="w-24 h-24 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-8"></div>
             <h3 className="font-chinese text-3xl text-amber-400 mb-4">Market Opening Soon</h3>
             <p className="text-gray-300 max-w-lg mb-6">
               The chart will be live immediately after the launch on Pump.fun. Prepare your wallets!
             </p>
             <div className="bg-gray-800 px-4 py-2 rounded border border-gray-700">
                <span className="text-xs text-gray-500 block">CA for DexScreener</span>
                <span className="font-mono text-amber-500">{CONTRACT_ADDRESS}</span>
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