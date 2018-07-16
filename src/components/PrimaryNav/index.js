import React, { Component } from 'react';
import { Link } from "react-router-dom";

class PrimaryNav extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/examples">Examples</Link></li>
        <li><Link to="/this-is-not-a-valid-url">404 Page</Link></li>
      </ul>
    );
  }
}

export default PrimaryNav;
