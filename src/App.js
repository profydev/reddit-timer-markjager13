import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Search from './components/Search/Search';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Normalize />
          <GlobalStyle />
          <Header />
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
