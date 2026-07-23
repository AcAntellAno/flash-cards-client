import type { CardDeck } from '../cards/CardDeck';
import { saveDeck } from '../../utils/deckStorage';

const CreateDeckForm = () => {
  const onSubmitHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get('name');
    const topic = formData.get('topic');

    const newDeck: CardDeck = {
      id: crypto.randomUUID(),
      category: String(topic),
      displayTitle: String(name),
      cards: [],
    };

    saveDeck(newDeck);
  };
  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Deck Name:</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="topic">Topic Name:</label>
        <input type="text" name="topic" id="topic" />
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateDeckForm;
