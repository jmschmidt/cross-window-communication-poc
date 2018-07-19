import React from 'react';
import { translate } from 'react-i18next';

import './footer.css';

export const Footer = ({ t }) => (
  <div className="footer">&copy; 2018 | {t('footer.projectName')}</div>
);

export default translate()(Footer);
