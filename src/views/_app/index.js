import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import './app.css';

import Home from '../home';
import About from '../about';


const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </div>
);

export default App;
