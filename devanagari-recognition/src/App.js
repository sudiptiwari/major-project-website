// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Introduction from './components/Introduction';
import Methodology from './components/Methodology';
import Progress from './components/Progress';
import Team from './components/Team';

function App() {
  return (
    <>
    <GlobalStyles />
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
