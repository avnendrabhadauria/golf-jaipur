import { About } from './components/About/Aboutus';
import { Container } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core';
import Footer from './components/Footer/Footer';
import Header from './components/navigation/header/header';
import OurOffers from './components/SericesOffered/Offfers';
import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { UpcomingEvents } from './components/UpcomingEvents/UpcomingEvenets';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <CssBaseline />
        <Header />
        <OurOffers />
        <About />
        <UpcomingEvents />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
