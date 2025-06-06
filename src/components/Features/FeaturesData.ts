import { MdLightMode, MdDarkMode } from 'react-icons/md';

export const ColorThemeData = [
  {
    svg: MdLightMode,
    mode: 'Light Mode',
    text: 'Pick a clean and classic light theme'
  },
  {
    svg: MdDarkMode,
    mode: 'Dark Mode',
    text: 'Select a sleek and modern dark theme'
  }
];

export const FontThemeData = [
  {
    style: 'font-sans',
    mode: 'Sans-serif',
    text: 'Clean and modern, easy to read'
  },
  {
    style: 'font-serif',
    mode: 'Serif',
    text: 'Classic and elegant for a timeless feel'
  },
  {
    style: 'font-mono',
    mode: 'Monospace',
    text: 'Code-like, great for a technical vibe'
  }
];
