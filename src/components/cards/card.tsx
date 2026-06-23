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

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #faebd7;
  color: #2b2b2b;
  border: 1px solid #faebd7;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 20px;
`;

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardItem = styled.div`
  /* border: 2px solid green; */
`;

const CenterItem = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RevealButton = styled.button`
  border: 2px solid #2b2b2b;
  border-radius: 20%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Card = (props: CardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const { question, answer, category } = props;
  return (
    <CardContainer>
      <StyledCard>
        <CardItem>Question Category: {category}</CardItem>
        <CardItem>
          <CenterItem>{question}</CenterItem>
        </CardItem>
        {isFlipped ? (
          <CardItem>
            <CenterItem>{answer}</CenterItem>
          </CardItem>
        ) : null}
        <ButtonContainer>
          <RevealButton onClick={() => setIsFlipped(!isFlipped)}>
            Flip
          </RevealButton>
        </ButtonContainer>
      </StyledCard>
    </CardContainer>
  );
};

export default Card;
