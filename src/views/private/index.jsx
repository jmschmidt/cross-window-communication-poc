import React from 'react';
import { withRouter } from 'react-router-dom';

import observeRootStore from 'components/hoc/observeRootStore';

export const Private = ({ rootStore, history }) => (
  <div className="Private">
    <h2>You Are Logged In!</h2>
    <p>The super secret passphrase is: p@$$pHr@$3</p>
    <br/>
    <button onClick={() => { rootStore.appStore.logOut(() => history.push('/')); }}>Log Out</button>
  </div>
);

export default observeRootStore(withRouter(Private));
