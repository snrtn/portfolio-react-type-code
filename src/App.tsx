import React from 'react';
import Navbar from './Components/Navbar';
import Home from 'Pages/Home';
import Curriculum from 'Pages/Curriculum';
import Feedback from 'Pages/Feedback';
import Footer from 'Components/Footer';

import { Container } from './Styles/app.styles';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route caseSensitive={false} path="/" element={<Home />} />
          <Route
            caseSensitive={false}
            path="/curriculum"
            element={<Curriculum />}
          />
          <Route
            caseSensitive={false}
            path="/feedback"
            element={<Feedback />}
          />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
