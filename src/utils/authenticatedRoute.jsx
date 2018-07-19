import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import observeRootStore from 'components/hoc/observeRootStore';

const AuthenticatedRoute = observeRootStore(({ component: Component, rootStore, ...rest }) => (
  <Route
    {...rest}
    render={props => rootStore.appStore.user.loggedIn ?
      ( <Component {...props} rootStore={rootStore} /> ) :
      ( <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
));

export default AuthenticatedRoute;
