import React from 'react';
import { withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const Private = inject('rootStore')(observer(withRouter(({ rootStore, history }) => (
  <div className="Private">
    <h2>You Are Logged In!</h2>
    <p>The super secret passphrase is: p@$$pHr@$3</p>
    <br/>
    <button onClick={() => { rootStore.appStore.logOut(() => history.push('/')); }}>Log Out</button>
  </div>
))));

export default Private;
