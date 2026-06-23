import styled from 'styled-components';
import Card from './components/cards/card';

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
        <Card
          category="react"
          question="This is my question"
          answer="this is my answer"
        />
      </LeftItem>
      <CenterItem>
        <Card
          category="react"
          question="This is my question"
          answer="this is my answer"
        />
      </CenterItem>
      <RightItem>
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
