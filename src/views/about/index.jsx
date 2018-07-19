import React from 'react';
import { translate } from 'react-i18next';

import LocalizedComponent from 'components/localizedComponent';

export class About extends LocalizedComponent {
  static namespace = 'about';

  render() {
    const { t } = this.props;
    return (
      <div className="About">
        <h2>{t('about:title')}</h2>
      </div>
    );
  }
}

export default translate(About.namespace)(About);
