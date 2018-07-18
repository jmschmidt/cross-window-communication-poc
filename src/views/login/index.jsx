import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import AuthService from 'utils/authService';
import logger from 'utils/logger';

class Login extends Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    logger.log('this.login!');
    AuthService.authenticate(() => {
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

export default Login;
