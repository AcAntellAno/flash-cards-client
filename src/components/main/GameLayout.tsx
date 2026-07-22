import { useState } from 'react';
import type { CardDeck as CardDeckType } from '../cards/CardDeck';
import styled from 'styled-components';
import GameLoop from './GameLoop';
import { cardDecks } from '../../cardDeck';
import CardDeck from '../cards/CardDeck';

const LeftItem = styled.div`
  flex: 2;
`;

const CenterItem = styled.div`
  flex: 4;
`;
const GameLayout = () => {
  const [activeDeck, setActiveDeck] = useState<CardDeckType | null>(null);

  return (
    <>
      <LeftItem>
        <h2>Note Card Topics:</h2>
        <CardDeck
          decks={cardDecks}
          onSelectDeck={(deck) => setActiveDeck(deck)}
        />
      </LeftItem>
      <CenterItem>
        {activeDeck && (
          <GameLoop activeDeck={activeDeck} key={activeDeck.category} />
        )}
      </CenterItem>
    </>
  );
};

export default GameLayout;
