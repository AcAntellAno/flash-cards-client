import { useState } from 'react';
import Card from '../cards/Card';
import type { CardDeck } from '../cards/CardDeck';

interface GameLoopProps {
  activeDeck: CardDeck;
}

const GameLoop = ({ activeDeck }: GameLoopProps) => {
  const { displayTitle, cards } = activeDeck;
  const [currentCard, setCurrentCard] = useState(0);

  const handleNext = () => {
    setCurrentCard((prevIdx) => (prevIdx + 1) % cards.length);
  };

  const handlePrevious = () => {
    setCurrentCard((prevIdx) => {
      if (prevIdx === 0) return 0;
      return (prevIdx - 1) % cards.length;
    });
  };
  console.log('activeDeck: ', activeDeck);
  console.log('currIdx: ', currentCard);
  return (
    <div>
      <h2>{displayTitle}</h2>
      <Card
        category={cards[currentCard].category}
        question={cards[currentCard].question}
        answer={cards[currentCard].answer}
      />
      <button
        onClick={handlePrevious}
        disabled={currentCard === 0 ? true : false}
      >
        Previous
      </button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default GameLoop;
