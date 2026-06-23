import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

interface CardProps {
  category: string;
  question: ReactNode;
  answer: ReactNode;
  prev?: ReactNode;
  next?: ReactNode;
}

// 1. Explicitly type the transient prop for StyledCard
interface StyledCardProps {
  $isFlipped: boolean;
}

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  perspective: 1000px; /* Crucial for the 3D depth effect */
`;

const StyledCard = styled.section<StyledCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 300px; /* Give the card a structural baseline height */
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Added slight bounce */
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform: ${(props) =>
    props.$isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

// Separate Layout into Front and Back Faces
const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  backface-visibility: hidden; /* Hides the reverse side when turned away */
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #faebd7;
  color: #2b2b2b;
  border: 1px solid #faebd7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardFaceBack = styled(CardFace)`
  transform: rotateY(180deg);
`;

const CardItem = styled.div`
  margin-bottom: 12px;
`;

const CenterItem = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

const RevealButton = styled.button`
  border: 2px solid #2b2b2b;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  background: transparent;
  font-weight: bold;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Card = (props: CardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { question, answer, category } = props;

  return (
    <CardContainer>
      <StyledCard $isFlipped={isFlipped}>
        {/* FRONT FACE */}
        <CardFace>
          <CardItem>Question Category: {category}</CardItem>
          <CenterItem>{question}</CenterItem>
          <ButtonContainer>
            <RevealButton onClick={() => setIsFlipped(true)}>
              Reveal Answer
            </RevealButton>
          </ButtonContainer>
        </CardFace>

        {/* BACK FACE */}
        <CardFaceBack>
          <CardItem>Answer Category: {category}</CardItem>
          <CenterItem>{answer}</CenterItem>
          <ButtonContainer>
            <RevealButton onClick={() => setIsFlipped(false)}>
              Show Question
            </RevealButton>
          </ButtonContainer>
        </CardFaceBack>
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
