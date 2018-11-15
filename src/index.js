import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import './index.css';
import App from './views/_app';
import registerServiceWorker from './registerServiceWorker';

import RootStore from 'stores/';

ReactDOM.render(
  <Provider rootStore={new RootStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
