import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './app.css';

import Header from '../../components/Header';
import PrimaryNav from '../../components/PrimaryNav';
import Footer from '../../components/Footer';

import Home from '../home';
import About from '../about';
import Examples from '../examples';
import NoMatch from '../404';


const App = () => (
  <div className="App">
    <Header />
    <Router>
      <div>
        <PrimaryNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/examples" component={Examples} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
    <Footer />
  </div>
);

export default App;
