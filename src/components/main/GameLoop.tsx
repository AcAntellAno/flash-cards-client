import Card from '../cards/Card';
import type { CardDeck } from '../cards/CardDeck';

interface GameLoopProps {
  activeDeck: CardDeck;
}

const GameLoop = ({ activeDeck }: GameLoopProps) => {
  console.log('activeDeck: ', activeDeck);
  return (
    <>
      <Card
        category="react"
        question="This is my question"
        answer="this is my answer"
      />
    </>
  );
};

export default GameLoop;
