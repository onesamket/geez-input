'use client';

import { useTheme } from 'next-themes';

export const useThemeStore = () => {
  const { theme, setTheme } = useTheme();
  
  return {
    isDarkMode: theme === 'dark',
    toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    setTheme: (isDark: boolean) => setTheme(isDark ? 'dark' : 'light'),
  };
};
