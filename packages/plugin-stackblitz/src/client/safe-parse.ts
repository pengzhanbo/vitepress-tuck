/**
 * Safely parse a URL-encoded JSON string or return the value as-is if it's
 * already a non-string object. Returns an empty object on parse failure.
 *
 * 安全解析 URL 编码的 JSON 字符串，如果已经是非字符串对象则直接返回。
 * 解析失败时返回空对象。
 *
 * @param str - The value to parse
 * @returns The parsed object or the original object value
 */
export function safeParse(str: unknown) {
  if (typeof str === 'object')
    return str

  try {
    return str && typeof str === 'string' ? JSON.parse(decodeURIComponent(str)) : {}
  }
  catch {}
  return {}
}
