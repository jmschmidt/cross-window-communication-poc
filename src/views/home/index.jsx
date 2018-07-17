import React from 'react';
import { translate } from 'react-i18next';

import LocalizedComponent from 'components/localizedComponent';

class Home extends LocalizedComponent {
  static namespace = 'home';

  render() {
    const { t } = this.props;
    return (
      <div className="Home">
        <h2>{t('home:title')}</h2>
        <p>
          {t('greeting')}
        </p>
      </div>
    )
  }
}

export default translate(Home.namespace)(Home);
