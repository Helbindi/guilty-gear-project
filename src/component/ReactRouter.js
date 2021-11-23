import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Footer from './Footer';
// pages
import Home from '../pages/Home';
import About from '../pages/About';
import Giovanna from '../pages/Giovanna';
import Ramlethal from '../pages/Ramlethal';
import Sol from '../pages/Sol';
import Ky from '../pages/Ky';
import Nago from '../pages/Nago';
// navbar
import Navbar from './Navbar';

function ReactRouter() {
  return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/About' element={<About />} />
          <Route path='/Giovanna' element={<Giovanna />} />
          <Route path='/Ramlethal' element={<Ramlethal />} />
          <Route path='/Sol' element={<Sol />} />
          <Route path='/Ky' element={<Ky />} />
          <Route path='/Nagoriyuki' element={<Nago />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default ReactRouter;
