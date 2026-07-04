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

function stripFromToken(token: JSToken): string | false {
  if (token.type === 'SingleLineComment') {
    return ''
  }

  if (token.type === 'MultiLineComment') {
    return ''
  }
  return token.value
}
