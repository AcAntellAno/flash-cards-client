import CreateCardForm from './CreateCardForm';
import Modal from '../cards/Modal';

const CreateNewCard = () => {
  return <Modal buttonText="Create New Card" children={<CreateCardForm />} />;
};

export default CreateNewCard;
