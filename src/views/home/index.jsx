import React from 'react';

import './home.css';

import Tile from 'components/tile';
import PopupLauncher from 'components/popupLauncher';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false }
      ]
    };
    // Empty out any saved state from previous tests
    const tilesList = this.state.tiles;
    localStorage.setItem('tiles', JSON.stringify(tilesList));
  }

  setTileState = (index) => {
    const tilesList = this.state.tiles;
    tilesList[index].active = !tilesList[index].active
    this.setState({ tilesList });

    localStorage.setItem('tiles', JSON.stringify(tilesList));
  };

  render() {
    return (
      <div className="Home">
        <div className="tile-container">
          {this.state.tiles.map((item, index) => {
            return (
              <div onClick={this.setTileState.bind(this, index)} key={ index }>
                <Tile active={item.active} />
              </div>
            );
          })}
        </div>
        <PopupLauncher />
      </div>
    );
  }
}

export default Home;
