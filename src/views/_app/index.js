import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import './app.css';

import Home from '../home';
import About from '../about';
import Examples from '../examples';
import NoMatch from '../404';


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
          <li><Link to="/examples">Examples</Link></li>
          <li><Link to="/this-is-not-a-valid-url">404 Page</Link></li>
        </ul>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/examples" component={Examples} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;