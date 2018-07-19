import { observable } from 'mobx';


class AppStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    // To track user state
    this.user = observable({
      loggedIn: false,
      username: '',
    });
  }
}

export default AppStore;
