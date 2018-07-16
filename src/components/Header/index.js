import React from 'react';
import { translate } from 'react-i18next';

import logo from 'assets/images/logo.svg';
import './Header.css';

const Header = ({ t }) => (
  <header className="Header">
    <img src={logo} className="Header-logo" alt="logo" />
    <h1 className="Header-title">{t('header.title')}</h1>
  </header>
);

export default translate()(Header);
