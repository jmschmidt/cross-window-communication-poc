import React from 'react';

import Tile from 'components/tile';

import './secondaryScreen.css';

export class SecondaryScreen extends React.Component {
  static namespace = 'secondaryScreen';

  constructor(props) {
    super(props);
    this.state = {
      tiles: []
    };
  }

  componentDidMount() {
    this.updateStateWithLocalStorage();

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', () => {
        this.updateStateWithLocalStorage();
      });
    }
  }

  updateStateWithLocalStorage = () => {
    // Make copy of tiles array
    let tiles = {...this.state.tiles};

    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          tiles = value;
        } catch (e) {
          // handle empty string
          tiles = value;
        }
      }
    }

    /*
     * Empty out tiles array before repopulating state 
     * because state does not recognize the updates of single object properties in the array.
     * TODO: Figure out way to set state single objects in array and still cause state re-render
     */
    this.setState({ tiles: [] });
    this.setState({ tiles });
  }

  render() {
    return (
      <div className="SecondaryScreen">
        <div className="tile-container">
          {this.state.tiles.map((item, index) => {
            return (
              <Tile active={item.active} key={ index } />
            );
          })}
        </div>
      </div>
    )
  }
}

export default SecondaryScreen;
