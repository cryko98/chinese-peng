import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { RefreshCw, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Card {
  id: number;
  pairId: number;
  filterClass: string; 
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame: React.FC = () => {
  const { t } = useLanguage();
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // Filters for dog variations
  const filters = [
    'hue-rotate-0',    
    'hue-rotate-60',   
    'hue-rotate-180',  
    'hue-rotate-270',  
    'sepia',           
    'grayscale',       
  ];

  const initializeGame = () => {
    const gameCards: Card[] = [];
    filters.forEach((filter, index) => {
      gameCards.push({ id: index * 2, pairId: index, filterClass: filter, isFlipped: false, isMatched: false });
      gameCards.push({ id: index * 2 + 1, pairId: index, filterClass: filter, isFlipped: false, isMatched: false });
    });

    const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
    setFlippedCards([]);
    setMoves(0);
    setIsWon(false);
    setIsLocked(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleCardClick = (clickedCard: Card) => {
    if (isLocked || clickedCard.isFlipped || clickedCard.isMatched) return;

    const newCards = cards.map(card => 
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    const newFlippedCards = [...flippedCards, clickedCard];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setIsLocked(true);
      setMoves(m => m + 1);
      checkForMatch(newFlippedCards, newCards);
    }
  };

  const checkForMatch = (currentFlipped: Card[], currentCards: Card[]) => {
    const [card1, card2] = currentFlipped;

    if (card1.pairId === card2.pairId) {
      const matchedCards = currentCards.map(card => 
        card.pairId === card1.pairId ? { ...card, isMatched: true } : card
      );
      setCards(matchedCards);
      setFlippedCards([]);
      setIsLocked(false);

      if (matchedCards.every(card => card.isMatched)) {
        setIsWon(true);
      }
    } else {
      setTimeout(() => {
        const resetCards = currentCards.map(card => 
          card.id === card1.id || card.id === card2.id 
            ? { ...card, isFlipped: false } 
            : card
        );
        setCards(resetCards);
        setFlippedCards([]);
        setIsLocked(false);
      }, 1000);
    }
  };

  return (
    <section id="game" className="py-24 relative overflow-hidden">
      {/* Background - Deep Red */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-4xl md:text-5xl text-amber-400 mb-4 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">
            {t.game.title}
          </h2>
          <p className="text-amber-100 text-lg mb-4">{t.game.subtitle}</p>
          
          <div className="flex justify-center items-center gap-6 font-chinese text-xl text-white">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-amber-500/50">
              {t.game.moves}: <span className="text-amber-400">{moves}</span>
            </div>
            <button 
              onClick={initializeGame}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white px-4 py-2 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(251,191,36,0.4)]"
            >
              <RefreshCw size={20} /> {t.game.restart}
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {cards.map((card) => (
              <div 
                key={card.id}
                onClick={() => handleCardClick(card)}
                className={`aspect-square relative cursor-pointer perspective-1000 group ${card.isMatched ? 'invisible md:visible md:opacity-50' : ''}`}
              >
                <div className={`w-full h-full transition-all duration-500 preserve-3d ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}>
                  
                  {/* Card Back (Jade/Gold Style) */}
                  <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-green-900 to-emerald-950 border-2 border-amber-400/60 rounded-xl flex items-center justify-center shadow-lg group-hover:border-amber-200 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.4)] transition-all z-10">
                    <span className="font-chinese text-4xl text-amber-500/70 select-none drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]">福</span>
                  </div>

                  {/* Card Front (Image) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white border-4 border-amber-400 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                    <img 
                      src={IMAGES.LOGO} 
                      alt="Gou" 
                      className={`w-full h-full object-cover ${card.filterClass}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isWon && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20 rounded-xl backdrop-blur-sm">
            <div className="text-center p-8 bg-red-900/90 border-4 border-amber-400 rounded-2xl animate-bounce shadow-[0_0_50px_rgba(251,191,36,0.5)]">
              <Trophy size={64} className="text-amber-400 mx-auto mb-4 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <h3 className="font-chinese text-4xl text-white mb-2">{t.game.victory}</h3>
              <p className="text-amber-200 mb-6">{t.game.found} {moves} {t.game.moves === '步数' ? '' : 'moves'}.</p>
              <button 
                onClick={initializeGame}
                className="bg-amber-400 text-red-900 px-8 py-3 rounded-full font-bold font-chinese text-xl hover:scale-110 transition-transform shadow-lg"
              >
                {t.game.playAgain}
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MemoryGame;