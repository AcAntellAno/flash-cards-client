import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface IModal {
  buttonText: string;
  children: React.ReactNode;
}

const ModalContainer = styled.section`
  max-width: 90vw;
  max-height: 90vw;
`;

const StyledModal = styled.dialog`
  height: 10vw;
  // below line could create issues since we are overwritting default behavior of dialog modal
  // this allows our X button to close the modal to display on top right corner of modal
  // this default behavior probably creates scrollable content, but in our case we dont care, so should be fine
  overflow: visible;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
  }
`;

const ModalContents = styled.div`
  position: relative;
  z-index: 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1.5rem;
  right: -1.5rem;
  z-index: 1;
  border-radius: 15px;
  border-color: transparent;
`;

const Modal = (props: IModal) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // had to sync isOpen and dialog.close() because user can hit escape key
  // which is a valid (and browser native way) way to escape a modal, but my states wont update
  // so need to sync the 2
  useEffect(() => {
    const dialog = dialogRef?.current;
    if (!dialog) return;

    if (isOpen) dialog.showModal();
    else dialog.close();
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef?.current;
    if (!dialog) return;

    const handleNativeClose = () => {
      setIsOpen(false);
    };
    dialog.addEventListener('close', handleNativeClose);
    return () => dialog.removeEventListener('close', handleNativeClose);
  }, []);

  const openModal = () => {
    setOpenCount((prev) => prev + 1);
    setIsOpen(true);
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setIsOpen(!isOpen);
  };
  const { children, buttonText } = props;
  return (
    <ModalContainer>
      <button onClick={openModal}>{buttonText}</button>
      <StyledModal ref={dialogRef}>
        {isOpen && (
          <ModalContents key={openCount}>
            <CloseButton onClick={() => closeModal()}>X</CloseButton>
            {children}
          </ModalContents>
        )}
      </StyledModal>
    </ModalContainer>
  );
};

export default Modal;
