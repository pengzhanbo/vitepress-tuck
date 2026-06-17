// eslint-disable-next-line no-control-regex
const rControl = /[\u0000-\u001F]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function that normalizes a string into a URL-safe slug.
 *
 * 默认的 slug 化函数，将字符串规范化为 URL 安全的 slug。
 *
 * The function removes accents, control characters, and special characters,
 * replaces separators with hyphens, and ensures the result does not start
 * with a number.
 *
 * 该函数会移除重音符号、控制字符和特殊字符，用连字符替换分隔符，
 * 并确保结果不以数字开头。
 *
 * @param str - The string to slugify / 要 slug 化的字符串
 * @returns The slugified string / slug 化后的字符串
 * @example
 * ```ts
 * slugify('Hello World!') // 'hello-world'
 * slugify('你好 World') // '你好-world'
 * slugify('1st Section') // '_1st-section'
 * ```
 */
export function slugify(str: string): string {
  return str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // Remove continuos separators
    .replace(/-{2,}/g, '-')
    // Remove prefixing and trailing separators
    .replace(/^-+|-+$/g, '')
    // ensure it doesn't start with a number
    .replace(/^(\d)/, '_$1')
    // lowercase
    .toLowerCase()
}
