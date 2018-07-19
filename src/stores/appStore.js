import { extendObservable } from 'mobx';


class AppStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    extendObservable(this, {
      // To track user state
      user: {
        loggedIn: false,
        username: '',
      }
    });
  }

  /**
   * Actions that modify state
   */
  authenticate(cb) {
    this.rootStore.uiStore.isLoading = true;
    setTimeout(() => {
      this.rootStore.uiStore.isLoading = false;
      this.user.loggedIn = true;
      this.user.username = 'DHAPUser';
      cb();
    }, 250); // fake async
  }

  logOut(cb) {
    this.rootStore.uiStore.isLoading = true;
    setTimeout(() => {
      this.rootStore.uiStore.isLoading = false;
      this.user.loggedIn = false;
      this.user.username = '';
      cb();
    }, 250);
  }
}

export default AppStore;
