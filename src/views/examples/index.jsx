import React from 'react';
import { translate } from 'react-i18next';

import LocalizedComponent from 'components/localizedComponent';

class ExamplePage extends LocalizedComponent {
  static namespace = 'examples';

  render() {
    const { t } = this.props;
    return (
      <div className="Examples">
        <h2>{t('examples:title')}</h2>
      </div>
    );
  }
}


export default translate(ExamplePage.namespace)(ExamplePage);
