import { useEffect } from 'react';

type Theme = 'Light Mode' | 'Dark Mode';

interface ThemeProps {
  mode: Theme;
}

export const useTheme = ({ mode }: ThemeProps) => {
  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === 'Dark Mode') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);
};

import { createContext, useContext, useState, type ReactNode } from 'react';

type Mode = 'Light Mode' | 'Dark Mode';

interface ThemeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>(() => {
    const stored = localStorage.getItem('theme') as Mode | null;
    return stored === 'Dark Mode' ? 'Dark Mode' : 'Light Mode';
  });

  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
