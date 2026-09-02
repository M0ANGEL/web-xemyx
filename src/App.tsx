import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app/routes';
import { ComingSoonProvider } from './context/ComingSoonContext';
import { WhatsAppButton } from './components/feedback/WhatsAppButton';
import { ThemeProvider } from './theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ComingSoonProvider>
          <AppRoutes />
          <WhatsAppButton />
        </ComingSoonProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
