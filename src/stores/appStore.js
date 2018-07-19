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

  /**
   * Actions that modify state
   */
  authenticate(cb) {
    this.user.loggedIn = true;
    this.user.username = 'DHAPUser';
    setTimeout(cb, 250); // fake async
  }

  logOut(cb) {
    this.user.loggedIn = false;
    this.user.username = '';
    setTimeout(cb, 250);
  }
}

export default AppStore;
