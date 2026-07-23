import { useState, useRef, useEffect } from 'react';

interface IModal {
  buttonText: string;
  children: React.ReactNode;
}

const Modal = (props: IModal) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    dialogRef.current?.showModal();
  }, [isOpen]);

  const { children, buttonText } = props;
  return (
    <section>
      <button onClick={() => setIsOpen(!isOpen)}>{buttonText}</button>
      <dialog ref={dialogRef}>{isOpen && <>{children}</>}</dialog>
    </section>
  );
};

export default Modal;
