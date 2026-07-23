import { useState } from 'react';

interface IModal {
  buttonText: string;
  children: React.ReactNode;
}

const Modal = (props: IModal) => {
  const [isOpen, setIsOpen] = useState(false);

  const { children, buttonText } = props;
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{buttonText}</button>
      <dialog id="modal">{isOpen ? <>{children}</> : null}</dialog>
    </div>
  );
};

export default Modal;
