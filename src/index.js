import React from 'react';
import ReactDOM from 'react-dom';

import { I18nextProvider } from 'react-i18next';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

import './index.css';
import App from './views/_app';
import registerServiceWorker from './registerServiceWorker';

import i18n from './i18n';
import RootStore from 'stores/';
import { DEBUG } from 'env.js';

ReactDOM.render(
  <Provider rootStore={new RootStore()}>
    <I18nextProvider i18n={ i18n }>
      <React.Fragment>
        {DEBUG && <DevTools />}
        <App />
      </React.Fragment>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
