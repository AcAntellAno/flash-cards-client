// import React, { type ReactNode } from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card';
import CreateNewCard from '../creation/CreateNewCard';

interface CardDeck {
  category: string;
  displayTitle: string;
  cards: CardProps[];
}

interface CardDeckProps {
  decks: CardDeck[];
}

const CardDeckWindow = styled.div`
  border: 2px solid yellow;
  height: fit-content;
`;

const CardDeck = (props: CardDeckProps) => {
  const { decks } = props;

  const getDeckCount = (cards: CardProps[]) => {
    if (cards.length === 0) return 0;
    return cards.length;
  };

  if (decks.length === 0) return <CreateNewCard />;

  return (
    <CardDeckWindow>
      {decks.map((deck) => (
        <>
          <h2>{deck.displayTitle}</h2> <p>{getDeckCount(deck.cards)}</p>
          <CreateNewCard />
        </>
      ))}
      <h2>Create new deck</h2>
    </CardDeckWindow>
  );
};

export default CardDeck;
