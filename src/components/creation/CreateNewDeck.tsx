import CreateDeckForm from './CreateDeckForm';
import Modal from '../cards/Modal';

const CreateNewDeck = () => {
  return <Modal buttonText="Create New Deck" children={<CreateDeckForm />} />;
};

export default CreateNewDeck;
