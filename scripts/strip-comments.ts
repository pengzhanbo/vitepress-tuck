import type { Token as JSToken } from 'js-tokens'
import jsTokens from 'js-tokens'

/**
 * 移除代码中的注释，保留代码本身
 */
export function strip(code: string) {
  let result = ''

  for (const token of jsTokens(code, { jsx: false })) {
    result += stripFromToken(token)
  }

  return result
}

function stripFromToken(token: JSToken): string {
  if (token.type === 'SingleLineComment') {
    return ''
  }

  // 对于多行注释，如果包含 `webpackChunkName:`，则保留注释内容
  if (token.type === 'MultiLineComment' && !token.value.includes('webpackChunkName:')) {
    return ''
  }
  return token.value
}

export function stripRegionComments(code: string) {
  const result: string[] = []
  for (const line of code.split('\n')) {
    if (line.startsWith('//#region') || line.startsWith('//#endregion')) {
      continue
    }
    result.push(line)
  }
  return result.join('\n')
}
