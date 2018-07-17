import React from 'react';
import { withRouter } from 'react-router-dom';
import AuthService from 'utils/authService';

const Private = withRouter(({ history }) => (
  <div className="Private">
    <h2>You Are Logged In!</h2>
    <p>The super secret passphrase is: p@$$pHr@$3</p>
    <br/>
    <button onClick={() => { AuthService.signout(() => history.push('/')); }}>Log Out</button>
  </div>
));

export default Private;
