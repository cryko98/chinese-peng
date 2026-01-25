import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CommunityDivider from './components/CommunityDivider';
import HowToBuy from './components/HowToBuy';
import MemoryGame from './components/MemoryGame';
import Chart from './components/Chart';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-900">
        {/* Base Background: Deep Red with Ice Gradient Overlay */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-sky-950 via-red-950 to-slate-900 pointer-events-none"></div>
        
        {/* Pattern Overlay */}
        <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/chinese-pattern.png')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        
        {/* Frost/Ice Grain Overlay */}
        <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-10 pointer-events-none"></div>

        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <About />
          <CommunityDivider />
          <HowToBuy />
          <MemoryGame />
          <Chart />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;