import Header from './components/navigation/header/header';
import OurOffers from './components/SericesOffered/Offfers';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <OurOffers />
    </ThemeProvider>
  );
}

export default App;
