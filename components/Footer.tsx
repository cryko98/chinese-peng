import React from 'react';
import { IMAGES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { TWITTER_URL } from '../constants';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-amber-400 py-12 border-t border-cyan-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-20"></div>
              <img 
                src={IMAGES.LOGO} 
                alt="Logo" 
                className="relative w-16 h-16 rounded-full border-2 border-cyan-500/50 grayscale hover:grayscale-0 transition-all" 
              />
            </div>
            <div>
              <h3 className="font-chinese text-2xl tracking-wider text-white">CHINESE PENG 企鹅</h3>
              <p className="text-cyan-500 text-sm">$PENG</p>
            </div>
          </div>

          <div className="flex gap-8 font-chinese text-lg">
            <a href="#about" className="hover:text-cyan-300 transition-colors">{t.nav.about}</a>
            <a href="#buy" className="hover:text-cyan-300 transition-colors">{t.nav.buy}</a>
            <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">X</a>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 font-mono text-sm">
          <p>{t.footer.rights}</p>
          <p className="mt-2 text-xs opacity-60">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;