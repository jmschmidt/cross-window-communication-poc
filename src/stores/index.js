import AppStore from './appStore';
import UIStore from './uiStore';

class RootStore {
  constructor() {
    this.appStore = new AppStore(this);
    this.uiStore = new UIStore(this);
  }
}

export default RootStore;
