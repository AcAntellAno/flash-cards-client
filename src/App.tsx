import styled from 'styled-components';
import GameLayout from './components/main/GameLayout';
import ChatWindow from './components/llm/ChatWindow';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
    <ThemeProvider theme={darkTheme}>
      <AppContainer>
        <GameLayout />
        <RightItem>
          <ChatWindow />
        </RightItem>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
