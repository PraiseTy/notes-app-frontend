import { type ReactNode, useEffect, useState } from 'react';
import { FontContext, type FontStyle } from './FontContext.ts';

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [font, setFont] = useState<FontStyle>('font-sans');

  useEffect(() => {
    const storedFont = localStorage.getItem('font');
    if (storedFont) setFont(storedFont as FontStyle);
  }, []);

  const updateFont = (newFont: FontStyle) => {
    setFont(newFont);
    localStorage.setItem('font', newFont);
  };

  return (
    <FontContext.Provider value={{ font, setFont: updateFont }}>
      <div className={`${font} min-h-screen`}>{children}</div>
    </FontContext.Provider>
  );
};
