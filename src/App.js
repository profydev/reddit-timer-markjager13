import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Landing from './components/Landing';
import Search from './components/Search';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Normalize />
          <GlobalStyle />
          <Routes>
            <Route path="/search" element={<Search />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
