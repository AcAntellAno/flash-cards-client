import styled from 'styled-components';
import Card from './components/cards/Card';
import CardDeck from './components/cards/CardDeck';
import GameLoop from './components/main/GameLoop';

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  padding-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftItem = styled.div`
  flex: 2;
`;

const CenterItem = styled.div`
  flex: 4;
`;

const RightItem = styled.div`
  flex: 2;
`;

function App() {
  return (
    <AppContainer>
      <LeftItem>
        <h2>Note Card Topics:</h2>
        <CardDeck
          decks={[
            {
              category: 'React',
              displayTitle: 'React',
              cards: [
                {
                  category: 'React',
                  question: <div>This is my question</div>,
                  answer: <div>This is my answer</div>,
                },
              ],
            },
            {
              category: 'interview',
              displayTitle: 'Interview Prep',
              cards: [
                {
                  category: 'Interview',
                  question: <div>This is my question</div>,
                  answer: <div>This is my answer</div>,
                },
                {
                  category: 'Interview',
                  question: <div>This is my question</div>,
                  answer: <div>This is my answer</div>,
                },
                {
                  category: 'Interview',
                  question: <div>This is my question</div>,
                  answer: <div>This is my answer</div>,
                },
              ],
            },
          ]}
        />
      </LeftItem>
      <CenterItem>
        <h2>Current Card:</h2>
        <GameLoop />
      </CenterItem>
      <RightItem>
        <h2>Study Buddy LLM Chat</h2>
        <Card
          category="react"
          question="This is my question"
          answer="this is my answer"
        />
      </RightItem>
    </AppContainer>
  );
}

export default App;
