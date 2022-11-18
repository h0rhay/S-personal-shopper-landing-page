import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/lightTheme';
import { darkTheme } from '../theme/darkTheme';
import { GlobalStyles } from '../theme/globalStyles';
import { ThemeModeContext } from './themeModeProvider';

const Layout = ({ children }) => {
  const { themeMode } = useContext(ThemeModeContext);
  const theme = themeMode === 'light' ? lightTheme : darkTheme;
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(!ready);
  }, []);

  // TODO: This line below isnt best practice.. we should revisit this.
  if (!ready) return null;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
