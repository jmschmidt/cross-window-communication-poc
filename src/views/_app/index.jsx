import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.css';

import observeRootStore from 'components/hoc/observeRootStore';

import Home from 'views/home';
import SecondaryScreen from 'views/secondaryScreen';


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/secondary" component={SecondaryScreen} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default observeRootStore(App);
