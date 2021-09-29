import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import Nav from '../src/components/Nav.jsx';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme} >
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
};

export default App;
