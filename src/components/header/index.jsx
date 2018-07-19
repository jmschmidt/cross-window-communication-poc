import React from 'react';
import { translate } from 'react-i18next';

import logo from 'assets/images/logo.svg';
import './header.css';

export const Header = ({ t }) => (
  <header className="header">
    <img src={logo} className="header-logo" alt="logo" />
    <h1 className="header-title">{t('header.title')}</h1>
  </header>
);

export default translate()(Header);
