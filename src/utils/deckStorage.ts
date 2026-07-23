import type { CardDeck } from '../components/cards/CardDeck';
import type { ICard } from '../components/cards/CreateCardForm';

export const DECKS_STORAGE_KEY = 'decks';

export function getStoredDecks(): CardDeck[] {
  const decks = localStorage.getItem(DECKS_STORAGE_KEY);
  if (!decks) return [];

  try {
    return JSON.parse(decks) as CardDeck[];
  } catch {
    return [];
  }
}

export function saveDeck(deck: CardDeck): CardDeck[] {
  const storedDecks = getStoredDecks();
  const deckExists = storedDecks.some(
    (storedDeck) => storedDeck.id === deck.id,
  );

  const updatedDecks = deckExists
    ? storedDecks.map((storedDeck) =>
        storedDeck.id === deck.id ? deck : storedDeck,
      )
    : [...storedDecks, deck];

  localStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(updatedDecks));
  return updatedDecks;
}

export function saveCard(deckId: string, card: ICard): CardDeck[] | null {
  const storedDecks = getStoredDecks();
  const deckExists = storedDecks.some((storedDeck) => storedDeck.id === deckId);

  if (!deckExists) return null;

  const updatedDecks = storedDecks.map((storedDeck) =>
    storedDeck.id === deckId
      ? { ...storedDeck, cards: [...storedDeck.cards, card] }
      : storedDeck,
  );

  localStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(updatedDecks));
  return updatedDecks;
}
