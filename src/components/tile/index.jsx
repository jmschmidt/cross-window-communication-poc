import React from 'react';

import './tile.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: props.active
    };
  }

  toggleClass() {
    this.setState({
      active: !this.state.active
    });
  }

  render() {
    return (
      <div
        className={`tile ` + (this.state.active ? 'active' : ``) }
        onClick={this.toggleClass}
      >
      </div>
    );
  }
}

export default Tile;