import { DEBUG } from 'env.js'

export const LEVELS = {
  DEBUG: 'debug',
  INFO: 'info',
  LOG: 'log',
  WARN: 'warn',
  ERROR: 'error',
};

class Logger {
  constructor() {
    this.consoleOut = DEBUG;
  }

  _speak(level, msg) {
    if (this.consoleOut) {
      switch(level) {
        case LEVELS.DEBUG:
          console.debug(msg);
          break;
        case LEVELS.INFO:
          console.info(msg);
          break;
        case LEVELS.LOG:
          console.log(msg);
          break;
        case LEVELS.WARN:
          console.warn(msg);
          break;
        case LEVELS.ERROR:
          console.error(msg);
          break;
        default:
      }
    }

    this._remoteLogging(level, msg);
  }

  _remoteLogging(level, msg) {
    // A placeholder in case a project requires centralized logging
  }

  debug(msg) { this._speak(LEVELS.DEBUG, msg); }
  info(msg) { this._speak(LEVELS.INFO, msg); }
  log(msg) { this._speak(LEVELS.LOG, msg); }
  warn(msg) { this._speak(LEVELS.WARN, msg); }
  error(msg) { this._speak(LEVELS.ERROR, msg); }
}

const logger = new Logger();

export default logger;
