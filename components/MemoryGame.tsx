import React, { useState, useEffect } from 'react';
import { IMAGES } from '../constants';
import { RefreshCw, Trophy } from 'lucide-react';

interface Card {
  id: number;
  pairId: number;
  filterClass: string; // Used to change the appearance of the penguin
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [isWon, setIsWon] = useState(false);
  const [isLocked, setIsLocked] = useState(false);

  // CSS filters to create "different colored" penguins from the same image
  const filters = [
    'hue-rotate-0',    // Original
    'hue-rotate-60',   // Orange/Green shift
    'hue-rotate-180',  // Blue shift
    'hue-rotate-270',  // Purple shift
    'sepia',           // Old photo style
    'grayscale',       // B&W
  ];

  const initializeGame = () => {
    // Create pairs
    const gameCards: Card[] = [];
    filters.forEach((filter, index) => {
      // Add pair 1
      gameCards.push({
        id: index * 2,
        pairId: index,
        filterClass: filter,
        isFlipped: false,
        isMatched: false,
      });
      // Add pair 2
      gameCards.push({
        id: index * 2 + 1,
        pairId: index,
        filterClass: filter,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle
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
      // Match found
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
      // No match
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
    <section id="game" className="py-24 bg-red-900 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/chinese-pattern.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-4xl md:text-5xl text-amber-400 mb-4">
            Peng's Memory Palace
          </h2>
          <p className="text-red-200 text-lg mb-4">Find the matching Pengs to unlock good fortune!</p>
          
          <div className="flex justify-center items-center gap-6 font-chinese text-xl text-white">
            <div className="bg-black/30 px-4 py-2 rounded-lg border border-red-700">
              Moves: <span className="text-amber-400">{moves}</span>
            </div>
            <button 
              onClick={initializeGame}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-red-900 px-4 py-2 rounded-lg font-bold transition-colors"
            >
              <RefreshCw size={20} /> Restart
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
                {/* 
                  REMOVED 'transform' class here to avoid conflict with 'rotate-y-180'. 
                  'preserve-3d' and 'transition-all' are sufficient for the flip effect.
                */}
                <div className={`w-full h-full transition-all duration-500 preserve-3d ${card.isFlipped || card.isMatched ? 'rotate-y-180' : ''}`}>
                  
                  {/* Card Back (Initially Visible - The "Cover") */}
                  <div className="absolute inset-0 backface-hidden bg-red-950 border-4 border-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-colors z-10">
                    <span className="font-chinese text-4xl text-amber-500/50 select-none">福</span>
                  </div>

                  {/* Card Front (Initially Hidden - The Image) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-amber-100 border-4 border-amber-400 rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                    <img 
                      src={IMAGES.LOGO} 
                      alt="Peng" 
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
            <div className="text-center p-8 bg-red-900 border-4 border-amber-500 rounded-2xl animate-bounce">
              <Trophy size={64} className="text-amber-400 mx-auto mb-4" />
              <h3 className="font-chinese text-4xl text-white mb-2">Victory!</h3>
              <p className="text-amber-200 mb-6">You found all the Pengs in {moves} moves.</p>
              <button 
                onClick={initializeGame}
                className="bg-amber-400 text-red-900 px-8 py-3 rounded-full font-bold font-chinese text-xl hover:scale-110 transition-transform"
              >
                Play Again
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default MemoryGame;