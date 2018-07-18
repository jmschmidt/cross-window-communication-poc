import logger, { LEVELS } from './logger';


describe('Logger', () => {
  beforeEach(() => {
    console.debug = jest.fn();
    console.info = jest.fn();
    console.log = jest.fn();
    console.warn = jest.fn();
    console.error = jest.fn();
  });

  it('should output debug statement to console when not in Production mode', () => {
    logger.debug('foo');
    expect(console.debug).toHaveBeenCalled();
  });

  it('should output info statement to console when not in Production mode', () => {
    logger.info('foo');
    expect(console.info).toHaveBeenCalled();
  });

  it('should output log statement to console when not in Production mode', () => {
    logger.log('foo');
    expect(console.log).toHaveBeenCalled();
  });

  it('should output warn statement to console when not in Production mode', () => {
    logger.warn('foo');
    expect(console.warn).toHaveBeenCalled();
  });

  it('should output error statement to console when not in Production mode', () => {
    logger.error('foo');
    expect(console.error).toHaveBeenCalled();
  });

  it('should not output to console in production', () => {
    logger.consoleOut = false;
    logger.log('foo');
    expect(console.log).not.toHaveBeenCalled();
  });

  it('PLACEHOLDER - should trigger remote logging (if configured)', () => {
    logger._remoteLogging = jest.fn();
    const msg = 'foo';
    logger.log(msg);
    expect(logger._remoteLogging).toHaveBeenCalled();
    expect(logger._remoteLogging).toHaveBeenCalledWith(LEVELS.LOG, msg);
  });
});
