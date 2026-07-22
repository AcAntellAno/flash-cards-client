import styled from 'styled-components';
import Card from './components/cards/Card';
import GameLayout from './components/main/GameLayout';

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  padding-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightItem = styled.div`
  flex: 2;
`;

function App() {
  return (
    <AppContainer>
      <GameLayout />
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
