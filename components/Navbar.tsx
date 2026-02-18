import React, { useState } from 'react';
import { Menu, X, Copy, Check } from 'lucide-react';
import { IMAGES, CONTRACT_ADDRESS, TWITTER_URL, TELEGRAM_URL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.vision, href: '#vision' },
    { name: t.nav.buy, href: '#buy' },
    { name: t.nav.chart, href: '#chart' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'cn' : 'en');
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  // Reusable Language Toggle Component (Gold Style)
  const LanguageToggle = () => (
    <div 
      onClick={toggleLanguage}
      className="relative w-16 h-8 bg-black/40 border border-amber-500/30 rounded-full cursor-pointer flex items-center justify-between px-1 shadow-inner hover:border-amber-400/60 transition-colors select-none"
      title="Switch Language / 切换语言"
    >
      {/* Sliding indicator */}
      <div 
        className={`absolute top-1 bottom-1 w-[28px] bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.4)] transition-all duration-300 ease-in-out ${language === 'en' ? 'left-1' : 'left-[34px]'}`}
      />
      
      {/* Labels */}
      <span className={`relative z-10 text-[10px] font-bold w-1/2 text-center transition-colors duration-300 ${language === 'en' ? 'text-red-950' : 'text-amber-500/50'}`}>EN</span>
      <span className={`relative z-10 text-[10px] font-bold w-1/2 text-center transition-colors duration-300 ${language === 'cn' ? 'text-red-950' : 'text-amber-500/50'}`}>CN</span>
    </div>
  );

  return (
    <nav className="fixed w-full z-50 top-0 bg-red-950/90 backdrop-blur-xl border-b-2 border-amber-500/50 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400 rounded-full blur-sm opacity-50"></div>
              <img 
                src={IMAGES.LOGO} 
                alt="Gou Logo" 
                className="relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-amber-200"
              />
            </div>
            <span className="font-chinese text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 tracking-wider hidden sm:block drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">
              $GOU
            </span>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Nav Links */}
            <div className="flex space-x-4 mr-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 py-2 rounded-md text-sm font-bold text-amber-100 hover:text-amber-400 transition-all duration-300 font-chinese uppercase tracking-widest hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Language Toggle Slider */}
            <LanguageToggle />

            {/* CA Display */}
            <div 
              onClick={handleCopy}
              className="flex items-center gap-2 bg-black/40 hover:bg-black/60 px-3 py-1.5 rounded-full border border-amber-500/30 cursor-pointer transition-colors group"
              title={t.nav.copyCa}
            >
              <span className="text-amber-200 text-xs font-mono">CA:</span>
              <span className="text-white text-xs font-mono">{truncateAddress(CONTRACT_ADDRESS)}</span>
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-amber-400 group-hover:text-white" />}
            </div>

            {/* Telegram Logo */}
            <a 
              href={TELEGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-10 h-10 bg-black rounded-full border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all duration-300"
              title={t.nav.joinTg}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white group-hover:fill-amber-400 transition-colors">
                <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
              </svg>
            </a>

            {/* X Logo */}
             <a 
              href={TWITTER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-10 h-10 bg-black rounded-full border border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all duration-300"
              title={t.nav.follow}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-white group-hover:fill-amber-400 transition-colors">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>

            {/* Buy Button */}
            <a 
              href="#buy" 
              className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-400 hover:to-red-500 text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(251,191,36,0.4)] border border-amber-200 text-sm"
            >
              {t.nav.buyNow}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-4">
             {/* Mobile Language Toggle */}
             <LanguageToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-white hover:bg-red-900/50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-red-950/95 backdrop-blur-xl border-t border-amber-900">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {/* Mobile CA */}
            <div 
              onClick={handleCopy}
              className="flex items-center justify-between bg-black/40 px-4 py-3 rounded-lg border border-amber-500/30 cursor-pointer active:bg-black/60"
            >
              <span className="text-amber-200 font-mono text-sm">CA: {truncateAddress(CONTRACT_ADDRESS)}</span>
              {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-amber-400" />}
            </div>

            <div className="flex gap-2">
              {/* Mobile Telegram Link */}
              <a 
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 bg-black hover:bg-gray-900 text-white py-3 rounded-lg border border-amber-500/30"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
                  <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l-.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"></path>
                </svg>
                <span>Telegram</span>
              </a>

              {/* Mobile X Link */}
              <a 
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 bg-black hover:bg-gray-900 text-white py-3 rounded-lg border border-amber-500/30"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span>X</span>
              </a>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-white hover:bg-red-900/30 text-center font-chinese uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#buy"
              onClick={() => setIsOpen(false)} 
              className="block w-full text-center bg-gradient-to-r from-amber-500 to-red-600 text-white font-bold py-3 mt-4 rounded-md uppercase shadow-[0_0_15px_rgba(251,191,36,0.3)]"
            >
              {t.nav.buyPump}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;