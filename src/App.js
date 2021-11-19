// JSX - JavaScript XML
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactRouter from "./component/ReactRouter";
// pages
import Home from './pages/Home';
import Giovanna from './pages/Giovanna';
// navbar
import Navbar from "./component/Navbar";
import ScrollToTop from "./component/ScrollToTop";
import About from "./pages/About";

function App() {
  return (
    <ReactRouter />
  );
}

export default App;
