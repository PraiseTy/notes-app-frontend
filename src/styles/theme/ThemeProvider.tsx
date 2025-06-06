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
