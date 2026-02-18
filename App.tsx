import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CommunityDivider from './components/CommunityDivider';
import HowToBuy from './components/HowToBuy';
import Chart from './components/Chart';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col overflow-x-hidden bg-red-950">
        {/* Base Background: Deep Red/Gold Gradient with Rose hint */}
        <div className="fixed inset-0 z-0 bg-gradient-to-b from-red-900 via-rose-950 to-black pointer-events-none"></div>
        
        {/* Pattern Overlay */}
        <div className="fixed inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/chinese-pattern.png')] opacity-30 pointer-events-none mix-blend-soft-light"></div>
        
        {/* Warm Glow Overlay with Pink/Gold Fusion */}
        <div className="fixed inset-0 z-0 bg-gradient-to-tr from-rose-900/20 via-transparent to-amber-900/20 pointer-events-none"></div>

        <Navbar />
        <main className="flex-grow relative z-10">
          <Hero />
          <About />
          <CommunityDivider />
          <HowToBuy />
          <Chart />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;