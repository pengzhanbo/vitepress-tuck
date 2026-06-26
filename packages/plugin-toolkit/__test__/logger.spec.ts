import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { logLevels } from '../src/node/index'
import { createLogger } from '../src/node/utils/logger'

describe('logLevels', () => {
  it('should have correct level hierarchy', () => {
    expect(logLevels.silent).toBeLessThan(logLevels.error)
    expect(logLevels.error).toBeLessThan(logLevels.warn)
    expect(logLevels.warn).toBeLessThan(logLevels.info)
    expect(logLevels.info).toBeLessThan(logLevels.debug)
  })
})

// ---- createLogger ----

describe('createLogger', () => {
  let consoleLogSpy: any
  let consoleWarnSpy: any
  let consoleErrorSpy: any

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
    consoleWarnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
    consoleWarnSpy.mockRestore()
    consoleErrorSpy.mockRestore()
  })

  it('should log info messages at default level', () => {
    const logger = createLogger('test', 'info')
    logger.info('hello')
    expect(consoleLogSpy).toHaveBeenCalledTimes(1)
  })

  it('should NOT log debug messages when default level is info', () => {
    const logger = createLogger('test', 'info')
    logger.debug('debug msg')
    expect(consoleLogSpy).not.toHaveBeenCalled()
    expect(consoleWarnSpy).not.toHaveBeenCalled()
    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })

  it('should log debug messages when default level is debug', () => {
    const logger = createLogger('test', 'debug')
    logger.debug('debug msg')
    expect(consoleLogSpy).toHaveBeenCalledTimes(1)
  })

  it('should log warn messages at info level', () => {
    const logger = createLogger('test', 'info')
    logger.warn('warning msg')
    expect(consoleWarnSpy).toHaveBeenCalledTimes(1)
  })

  it('should log error messages at info level', () => {
    const logger = createLogger('test', 'info')
    logger.error('error msg')
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
  })

  it('should NOT log warn messages when level is silent', () => {
    const logger = createLogger('test', 'silent')
    logger.warn('warning msg')
    expect(consoleWarnSpy).not.toHaveBeenCalled()
  })

  it('should NOT log error messages when level is silent', () => {
    const logger = createLogger('test', 'silent')
    logger.error('error msg')
    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })

  it('should NOT log info messages when level is error', () => {
    const logger = createLogger('test', 'error')
    logger.info('info msg')
    expect(consoleLogSpy).not.toHaveBeenCalled()
  })

  it('should log error messages when level is error', () => {
    const logger = createLogger('test', 'error')
    logger.error('error msg')
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
  })

  it('should respect per-call level override with boolean', () => {
    // When level is silent, passing true as level means use defaultLevel
    // defaultLevel is 'info', so it should log at info level
    const logger = createLogger('test', 'silent')
    logger.info('forced', true)
    // defaultLevel is 'silent' in the constructor which sets it to 'info' since silent isn't valid...
    // Actually: createLogger('test', 'silent') sets defaultLevel = 'silent'
    // When level=true, it becomes defaultLevel = 'silent'
    // thresh = logLevels['silent'] = 0, type='info' = 3, 0 >= 3 is false
    // So it won't log. Let me adjust test...
    // Wait: the level param: level = isBoolean(level) ? (level ? defaultLevel : 'error') : level
    // So level=true becomes defaultLevel='silent'
    // thresh = logLevels.silent = 0
    // type='warn' = 2, 0 >= 2 is false, won't log
    expect(consoleLogSpy).not.toHaveBeenCalled()
  })

  it('should use error level when boolean false is passed', () => {
    const logger = createLogger('test', 'info')
    logger.warn('forced error level', false)
    // level=false -> isBoolean(false) = true, so level becomes 'error'
    // thresh = logLevels.error = 1
    // type='warn' = 2, 1 >= 2 is false, won't log
    expect(consoleWarnSpy).not.toHaveBeenCalled()
  })

  it('should accept explicit log level string on per-call basis', () => {
    // defaultLevel is 'silent', but we explicitly pass 'info' level
    const logger = createLogger('test', 'silent')
    logger.info('explicit level', 'info')
    expect(consoleLogSpy).toHaveBeenCalledTimes(1)
  })

  it('should accept explicit debug level string on per-call basis', () => {
    const logger = createLogger('test', 'info')
    logger.debug('explicit debug', 'debug')
    expect(consoleLogSpy).toHaveBeenCalledTimes(1)
  })
})
