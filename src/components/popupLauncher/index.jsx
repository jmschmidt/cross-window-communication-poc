import React from 'react';
import NewWindow from 'react-new-window'

import './popupLauncher.css';

class PopupLauncher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPoppedOut: false
    };
  }

  popupClosed() {
    this.setState({isPoppedOut: false});
  }

  openSecondaryWindow = () => {
    this.setState({isPoppedOut: true});
  }

  render() {
    if (this.state.isPoppedOut) {
      return (
        <NewWindow 
          url='/secondary' 
          title='Secondary Window'
          onUnload={this.popupClosed}
        />
      )
    } else {
      return (
        <div className={`popupLauncher ` + (this.state.visible ? 'visible' : ``) }>
          <button onClick={this.openSecondaryWindow}>
            Open Secondary Window
          </button>
        </div>
      );
    }
  }
}

export default PopupLauncher;