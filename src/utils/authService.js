const AuthService = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 250); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 250);
  }
};

export default AuthService;
