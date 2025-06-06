import { createContext } from 'react';

export type FontStyle = 'font-sans' | 'font-serif' | 'font-mono';

interface FontContextProps {
  font: FontStyle;
  setFont: (font: FontStyle) => void;
}

export const FontContext = createContext<FontContextProps>({
  font: 'font-sans',
  setFont: () => {}
});
