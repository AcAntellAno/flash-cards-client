import styled from 'styled-components';
import { getStoredDecks, saveCard } from '../../utils/deckStorage';

const Container = styled.section`
  display: flex;
  gap: 1rem;
`;

export interface ICard {
  id: string;
  category?: string;
  question: string;
  answer: string;
}

const CreateCardForm = () => {
  const getCardCategories = () => {
    const decks = getStoredDecks();
    const categories = decks.map((deck) => ({
      id: deck.id,
      category: deck.category,
    }));
    return categories;
  };
  const onSubmitHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const question = formData.get('question');
    const category = formData.get('category');
    const answer = formData.get('answer');
    console.log('cateogyr: ', category);

    const newCard: ICard = {
      id: crypto.randomUUID(),
      question: String(question),
      answer: String(answer),
    };

    saveCard(String(category), newCard);
  };

  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Category:</label>
        <select name="category" id="category" onClick={getCardCategories}>
          {getCardCategories().map((item) => (
            <option value={item.id} key={item.id}>
              {item.category}
            </option>
          ))}
        </select>

        <label htmlFor="topic">Question:</label>
        <input type="text" name="question" id="question" />

        <label htmlFor="name">Answer:</label>
        <input type="text" name="answer" id="answer" />

        <button type="submit">Create</button>
      </form>
    </Container>
  );
};

export default CreateCardForm;
