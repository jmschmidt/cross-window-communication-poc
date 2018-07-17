import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from 'react-i18next';
import './PrimaryNav.css';

class PrimaryNav extends Component {
  render() {
    const { t } = this.props;

    return (
      <ul className="primary-nav">
        <li className="primary-nav__item"><NavLink activeClassName="current" exact to="/">{t('nav.home')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/about">{t('nav.about')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/examples">{t('nav.examples')}</NavLink></li>
        <li className="primary-nav__item"><NavLink activeClassName="current" to="/this-is-not-a-valid-url">{t('nav.404')}</NavLink></li>
      </ul>
    );
  }
}

export default translate()(PrimaryNav);
