import React from 'react';
import { translate } from 'react-i18next';

const Home = ({ t }) => (
  <div className="Home">
    <h2>{t('home.title')}</h2>
    <p>
      {t('greeting')}
    </p>
  </div>
);

export default translate()(Home);
