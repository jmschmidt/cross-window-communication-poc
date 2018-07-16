import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { translate } from 'react-i18next';
import './app.css';

import Header from 'components/Header';
import PrimaryNav from 'components/PrimaryNav';
import Footer from 'components/Footer';

import Home from 'views/home';
import About from 'views/about';
import Examples from 'views/examples';
import NoMatch from 'views/404';

import i18n from 'i18n.js';


class App extends Component {
  changeLanguage() {
    const nextLang = i18n.language === 'en-US' ? 'ja-JP' : 'en-US';
    i18n.changeLanguage(nextLang)
  }

  render() {
    const { t } = this.props;

    return (
      <div className="App">
      <Header />
      <div>
        <button onClick={this.changeLanguage}>{t('global.changeLanguage')} ({i18n.language})</button>
      </div>
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
  }
}

export default translate()(App);
