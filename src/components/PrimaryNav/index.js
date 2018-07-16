import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PrimaryNav.css';

class PrimaryNav extends Component {
  render() {
    return (
      <ul className="primary-nav">
        <li className="primary-nav__item"><Link to="/">Home</Link></li>
        <li className="primary-nav__item"><Link to="/about">About</Link></li>
        <li className="primary-nav__item"><Link to="/examples">Examples</Link></li>
        <li className="primary-nav__item"><Link to="/this-is-not-a-valid-url">404 Page</Link></li>
      </ul>
    );
  }
}

export default PrimaryNav;
