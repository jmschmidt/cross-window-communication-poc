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

  /**
   * Output a logging message to the browser console
   * @param {LEVELS} level - The logging output level
   * @param {*} msg - The value to log
   */
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

    // Submit the message to a remote destination
    this._yell(level, msg);
  }

  /**
   * A place to set up logging to a remote server
   * @param {LEVELS} level - The logging output level
   * @param {*} msg - The value to log
   */
  _yell(level, msg) {
  }

  /**
   * DEBUG message
   * @param {*} msg - The value to log
   */
  debug(msg) {
    this._speak(LEVELS.DEBUG, msg);
  }

  /**
   * INFO message
   * @param {*} msg - The value to log
   */
  info(msg) {
    this._speak(LEVELS.INFO, msg);
  }

  /**
   * LOG message
   * @param {*} msg - The value to log
   */
  log(msg) {
    this._speak(LEVELS.LOG, msg);
  }

  /**
   * WARN message
   * @param {*} msg - The value to log
   */
  warn(msg) {
    this._speak(LEVELS.WARN, msg);
  }

  /**
   * ERROR message
   * @param {*} msg - The value to log
   */
  error(msg) {
    this._speak(LEVELS.ERROR, msg);
  }
}

const logger = new Logger();

export default logger;
