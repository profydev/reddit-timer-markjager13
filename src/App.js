import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/globalStyles';
import Landing from './components/Landing';
import Search from './components/Search';

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
