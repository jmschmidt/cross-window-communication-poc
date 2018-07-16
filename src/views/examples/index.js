import React from 'react';
import { translate } from 'react-i18next';

const ExamplePage = ({ t }) => (
  <div className="Examples">
    <h2>{t('examples.title')}</h2>
  </div>
);

export default translate()(ExamplePage);
