import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    // Get the mode from localStorage
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' ? true : false;
  });

  const toggleDark = () => {
    setIsDark((prevIsDark) => {
      localStorage.setItem('darkMode', !prevIsDark); // Save the new mode from localStorage
      return !prevIsDark;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);
