import React from 'react';
import { translate } from 'react-i18next';

const Home = (props) => {
  const { t, tReady } = props;

  return (
    <div className="Home">
      <h2>Home</h2>
      <p>
        {t('greeting')}
      </p>
    </div>
  )
};

export default translate()(Home);
