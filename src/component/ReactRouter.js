import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Giovanna' component={Giovanna} />
          <Route exact path='/Ramlethal' component={Ramlethal} />
          <Route exact path='/Sol' component={Sol} />
          <Route exact path='/Ky' component={Ky} />
          <Route exact path='/Nagoriyuki' component={Nago} />
        </Switch>
      </Router>
  );
};

export default ReactRouter;
