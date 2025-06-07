import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FontProvider, ThemeProvider } from './styles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <FontProvider>
        <App />
      </FontProvider>
    </ThemeProvider>
  </StrictMode>
);
