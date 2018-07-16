import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';
import './PrimaryNav.css';

class PrimaryNav extends Component {
  render() {
    const { t } = this.props;

    return (
      <ul className="primary-nav">
        <li className="primary-nav__item"><Link to="/">{t('nav.home')}</Link></li>
        <li className="primary-nav__item"><Link to="/about">{t('nav.about')}</Link></li>
        <li className="primary-nav__item"><Link to="/examples">{t('nav.examples')}</Link></li>
        <li className="primary-nav__item"><Link to="/this-is-not-a-valid-url">{t('nav.404')}</Link></li>
      </ul>
    );
  }
}

export default translate()(PrimaryNav);
