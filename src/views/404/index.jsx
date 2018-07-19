import React from 'react';
import { translate } from 'react-i18next';

export const NoMatch = ({ t, location }) => (
  <div className="NoMatch">
    <h2 dangerouslySetInnerHTML={ {__html: t('404.title', { path: location.pathname })} }></h2>
  </div>
);

export default translate()(NoMatch);
