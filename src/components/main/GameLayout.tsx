import { useState } from 'react';
import type { CardDeck as CardDeckType } from '../cards/CardDeck';
import styled from 'styled-components';
import GameLoop from './GameLoop';
import CardDeck from '../cards/CardDeck';
import { getStoredDecks } from '../../utils/deckStorage';
import CreateNewCard from '../creation/CreateNewCard';
import CreateNewDeck from '../creation/CreateNewDeck';

const LeftItem = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CenterItem = styled.div`
  flex: 4;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 1rem;
`;
const GameLayout = () => {
  const [activeDeck, setActiveDeck] = useState<CardDeckType | null>(null);
  const localStoreDecks = getStoredDecks();
  const [decks, setDecks] = useState(localStoreDecks);

  window.addEventListener('local-storage', () => {
    console.log('Changes to local storage');
    setDecks(getStoredDecks());
  });

  return (
    <>
      <LeftItem>
        <h2>Note Card Topics:</h2>
        <CardDeck decks={decks} onSelectDeck={(deck) => setActiveDeck(deck)} />
        <ActionRow>
          <CreateNewDeck />
          <CreateNewCard />
        </ActionRow>
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
