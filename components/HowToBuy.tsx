import React from 'react';
import { Wallet, Coins, Rocket, ArrowRight } from 'lucide-react';
import { CONTRACT_ADDRESS, PUMP_FUN_URL } from '../constants';

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: <Wallet className="w-10 h-10 text-red-900" />,
      title: "Create Wallet",
      desc: "Download Phantom or Solflare wallet from the app store or as a browser extension."
    },
    {
      icon: <Coins className="w-10 h-10 text-red-900" />,
      title: "Get SOL",
      desc: "Buy Solana (SOL) from an exchange like Binance or Coinbase and send it to your wallet."
    },
    {
      icon: <Rocket className="w-10 h-10 text-red-900" />,
      title: "Go to Pump.fun",
      desc: "Connect your wallet to pump.fun and paste the $PENG contract address."
    },
    {
      icon: <div className="font-chinese text-3xl text-red-900 font-bold">¥</div>,
      title: "Swap for $PENG",
      desc: "Select the amount of SOL you want to swap and confirm the transaction. Welcome to the family!"
    }
  ];

  return (
    <section id="buy" className="py-24 bg-gradient-to-b from-red-900 to-red-950 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-chinese text-5xl text-amber-400 mb-6">How to Buy</h2>
          <p className="text-xl text-red-200">Follow the path to enlightenment (and gains)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-amber-100 rounded-2xl p-8 h-full border-4 border-amber-500 hover:border-red-500 transition-colors duration-300 text-red-950 flex flex-col items-center text-center shadow-xl">
                <div className="bg-amber-400 w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="font-chinese text-2xl font-bold mb-4">{step.title}</h3>
                <p className="font-medium opacity-80">{step.desc}</p>
                
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-amber-500">
                  <ArrowRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-amber-300 to-yellow-500 rounded-full">
                <a 
                    href={PUMP_FUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-12 py-4 bg-red-900 rounded-full text-2xl font-bold font-chinese hover:bg-red-800 transition-colors text-white"
                >
                    Buy on Pump.fun Now
                </a>
            </div>
            <p className="mt-6 text-sm text-red-300 font-mono break-all">CA: {CONTRACT_ADDRESS}</p>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;