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
    const logger = createLogger('test', 'silent')
    logger.info('forced', true)
    expect(consoleLogSpy).not.toHaveBeenCalled()
  })

  it('should use error level when boolean false is passed', () => {
    const logger = createLogger('test', 'info')
    logger.warn('forced error level', false)
    expect(consoleWarnSpy).not.toHaveBeenCalled()
  })

  it('should accept explicit log level string on per-call basis', () => {
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
