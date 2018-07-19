import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import logger from 'utils/logger';
import observeRootStore from 'components/hoc/observeRootStore';

export class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    logger.log('this.login!');
    this.props.rootStore.appStore.authenticate(() => {
      logger.log('.authenticate cb');
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;
    logger.log('render: ', from, redirectToReferrer);

    if (redirectToReferrer) {
      return ( <Redirect to={from} /> );
    }

    return (
      <div className="Login">
        <h2>Login Page</h2>
        <p>Login by clicking this button!</p>
        <button onClick={this.login}>Login Now</button>
      </div>
    )
  }
}

export default observeRootStore(Login);
