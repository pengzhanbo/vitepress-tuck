import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { checkSupportType } from '../src/node/artplayer'
import { logger, timeToSeconds } from '../src/node/utils'

// 时间字符串转秒数工具函数测试
describe('timeToSeconds', () => {
  it('纯数字字符串 90 -> 90', () => {
    expect(timeToSeconds('90')).toBe(90)
  })

  it('浮点数字符串 90.5 -> 90.5', () => {
    expect(timeToSeconds('90.5')).toBe(90.5)
  })

  it('mm:ss 格式 01:30 -> 90', () => {
    expect(timeToSeconds('01:30')).toBe(90)
  })

  it('hh:mm:ss 格式 01:01:01 -> 3661', () => {
    expect(timeToSeconds('01:01:01')).toBe(3661)
  })

  it('空字符串 -> 0', () => {
    expect(timeToSeconds('')).toBe(0)
  })

  it('带空格的冒号 01 : 30 -> 90', () => {
    expect(timeToSeconds('01 : 30')).toBe(90)
  })

  it('非数字段按 0 处理 ab:cd -> 0', () => {
    expect(timeToSeconds('ab:cd')).toBe(0)
  })
})

// checkSupportType 函数测试
describe('checkSupportType', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // 抑制 logger.warn 的控制台输出
    warnSpy = vi.spyOn(logger, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    warnSpy.mockRestore()
  })

  it('无参数(type undefined)直接返回', () => {
    expect(checkSupportType(undefined)).toBeUndefined()
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('已安装的常见类型不警告(如 mp4)', () => {
    checkSupportType('mp4')
    expect(warnSpy).not.toHaveBeenCalled()
  })

  it('mp4 不抛出异常', () => {
    expect(() => checkSupportType('mp4')).not.toThrow()
  })

  it('webm 不抛出异常', () => {
    expect(() => checkSupportType('webm')).not.toThrow()
  })

  it('m3u8 类型不抛出异常', () => {
    expect(() => checkSupportType('m3u8')).not.toThrow()
  })

  it('flv 类型不抛出异常', () => {
    expect(() => checkSupportType('flv')).not.toThrow()
  })

  it('mpd 类型不抛出异常', () => {
    expect(() => checkSupportType('mpd')).not.toThrow()
  })

  it('不支持的类型不抛出异常', () => {
    expect(() => checkSupportType('xyz')).not.toThrow()
  })
})
