import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CommunityDivider from './components/CommunityDivider';
import HowToBuy from './components/HowToBuy';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-red-950 bg-[url('https://www.transparenttextures.com/patterns/chinese-pattern.png')]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <CommunityDivider />
        <HowToBuy />
      </main>
      <Footer />
    </div>
  );
};

export default App;