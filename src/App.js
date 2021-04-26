import React from 'react';
import theme from './themes/theme';
import GlobalStyle from './themes/GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
