import React from 'react';
import { translate } from 'react-i18next';

const About = ({ t }) => (
  <div className="About">
    <h2>{t('about.title')}</h2>
  </div>
);

export default translate()(About);
