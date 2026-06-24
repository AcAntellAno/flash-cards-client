import type { CardDeck } from './components/cards/CardDeck';

export const cardDecks: CardDeck[] = [
  {
    category: 'React',
    displayTitle: 'React Fundamentals',
    cards: [
      {
        category: 'React',
        question: 'How does react render a component?',
        answer: 'A function that remembers its outer variables',
      },
      {
        category: 'React',
        question: 'What are refs in react',
        answer: 'A function that remembers its outer variables',
      },
    ],
  },
  {
    category: 'interview',
    displayTitle: 'Interview Prep',
    cards: [
      {
        category: 'interview',
        question: 'What is bigger O(n) or O(n^2)?',
        answer: 'O(n^2)',
      },
      {
        category: 'interview',
        question: 'What is a React closure?',
        answer: 'A function that remembers its outer variables',
      },
      {
        category: 'interview',
        question: 'What is state in react?',
        answer: 'state is a variable',
      },
    ],
  },
];
