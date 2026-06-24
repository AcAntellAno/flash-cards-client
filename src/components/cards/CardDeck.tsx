// import React, { type ReactNode } from 'react';
import styled from 'styled-components';
import type { CardProps } from './Card';
import CreateNewCard from '../creation/CreateNewCard';
import CreateNewDeck from '../creation/CreateNewDeck';

export interface CardDeck {
  category: string;
  displayTitle: string;
  cards: CardProps[];
}

export interface CardDeckProps {
  decks: CardDeck[];
  onSelectDeck: (deck: CardDeck) => void;
}

const CardDeckWindow = styled.div`
  border: 2px solid yellow;
  height: fit-content;
`;

const CardContainer = styled.button`
  /* border: 2px solid #897085; */
  width: stretch;
  margin: 20px;
  border-radius: 20px;
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  transform-origin: bottom center;
  transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow:
    /* The top layer shadow */
    0 -1px 1px rgba(0, 0, 0, 0.15),
    /* The second layer */ 0 -10px 0 -5px #eee,
    /* The second layer shadow */ 0 -10px 1px -4px rgba(0, 0, 0, 0.8),
    /* The third layer */ 0 -20px 0 -10px #eee,
    /* The third layer shadow */ 0 -20px 1px -9px rgba(0, 0, 0, 0.8);
  padding: 30px;
  &:hover {
    cursor: pointer;
    transform: rotate(5deg) translateY(-5px);
  }
`;

const CardDeck = (props: CardDeckProps) => {
  const { decks, onSelectDeck } = props;

  const getDeckCount = (cards: CardProps[]) => {
    if (cards.length === 0) return 0;
    return cards.length;
  };

  return (
    <CardDeckWindow>
      {decks.map((deck) => (
        <CardContainer onClick={() => onSelectDeck(deck)}>
          <h2>{deck.displayTitle}</h2> <p>{getDeckCount(deck.cards)}</p>
          <CreateNewCard />
        </CardContainer>
      ))}
      <CreateNewDeck />
    </CardDeckWindow>
  );
};

export default CardDeck;
