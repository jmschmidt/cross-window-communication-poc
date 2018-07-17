import React, { Component } from 'react';
import { translate } from 'react-i18next';

class Home extends Component {
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

export default translate('home')(Home);
