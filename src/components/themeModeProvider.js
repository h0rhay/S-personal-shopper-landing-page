import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const ThemeModeContext = createContext();

const ThemeModeProvider = ({ children }) => {
  const initialThemeMode = 'dark';
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      if (themeMode === 'light') {
        setThemeMode('dark');
        window.localStorage.setItem('theme', 'dark');
      } else {
        setThemeMode('light');
        window.localStorage.setItem('theme', 'light');
      }
    }
  };

  const themeModeMemo = useMemo(() => ({ themeMode, toggleTheme }), []);

  return <ThemeModeContext.Provider value={themeModeMemo}>{children}</ThemeModeContext.Provider>;
};

ThemeModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeModeProvider, ThemeModeContext };
