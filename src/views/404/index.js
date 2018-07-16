import React from 'react';

const NoMatch = ({ location }) => (
  <div className="NoMatch">
    <h2>404: No Match for <code>{ location.pathname }</code></h2>
  </div>
);

export default NoMatch;
