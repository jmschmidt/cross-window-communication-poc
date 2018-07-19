import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const AuthenticatedRoute = inject('rootStore')(observer(({ component: Component, rootStore, ...rest }) => (
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
)));

export default AuthenticatedRoute;
