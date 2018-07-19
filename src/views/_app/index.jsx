import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from 'utils/authenticatedRoute';
import { translate } from 'react-i18next';

import './app.css';

import Header from 'components/header';
import PrimaryNav from 'components/primaryNav';
import Footer from 'components/footer';
import Loader from 'components/loader';
import observeRootStore from 'components/hoc/observeRootStore';

import Home from 'views/home';
import About from 'views/about';
import Examples from 'views/examples';
import Login from 'views/login';
import Private from 'views/private';
import NoMatch from 'views/404';

import { LANGS } from 'i18n.js';


export class App extends Component {
  toggleLanguage = () => {
    const currLang = this.props.rootStore.uiStore.currentLanguage;
    const nextLang = currLang === LANGS.EN_US ? LANGS.JA_JP : LANGS.EN_US;
    this.props.rootStore.uiStore.currentLanguage = nextLang;
  }

  render() {
    const { t, rootStore } = this.props;

    return (
      <div className="App">
        <Header />
        <div>
          <button onClick={this.toggleLanguage}>{t('global.changeLanguage')} ({rootStore.uiStore.currentLanguage})</button>
          {rootStore.uiStore.isLoading && <Loader />}
        </div>
        <Router>
          <React.Fragment>
            <PrimaryNav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/examples" component={Examples} />
              <Route path="/login" component={Login} />
              <AuthenticatedRoute path="/private" component={Private} />
              <Route component={NoMatch} />
            </Switch>
          </React.Fragment>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default observeRootStore(translate()(App));
