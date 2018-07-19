import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';

import observeRootStore from 'components/hoc/observeRootStore';

import './primaryNav.css';

export class PrimaryNav extends Component {
  render() {
    const { t, rootStore } = this.props;

    return (
      <ul className="primary-nav">
        <li className="primary-nav__item"><NavLink activeClassName="current" exact to="/">{t('nav.home')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/about">{t('nav.about')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/examples">{t('nav.examples')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/login">{t('nav.login')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/private">{t('nav.private')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/this-is-not-a-valid-url">{t('nav.404')}</NavLink></li>
        {rootStore.appStore.user.loggedIn && <li className="primary-nav__item">Hello {rootStore.appStore.user.username}</li>}
      </ul>
    );
  }
}

export default observeRootStore(translate()(PrimaryNav));
