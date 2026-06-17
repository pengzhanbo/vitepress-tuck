/**
 * Regular expression that matches external URLs.
 *
 * Matches URLs that start with a protocol (such as `http:` or `mailto:`) or
 * with `//` (protocol-relative URLs).
 *
 * 匹配外部链接的正则表达式。
 *
 * 匹配以协议（如 `http:` 或 `mailto:`）或 `//`（协议相对链接）开头的 URL。
 *
 * @example
 * EXTERNAL_URL_RE.test('https://example.com') // true
 * EXTERNAL_URL_RE.test('//cdn.example.com/lib.js') // true
 * EXTERNAL_URL_RE.test('/about') // false
 */
export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

/**
 * Checks whether the given path is an external URL.
 *
 * 判断给定路径是否为外部链接。
 *
 * @param path - The path to check / 要检查的路径
 * @returns `true` if the path is an external URL, otherwise `false` / 若为外部链接返回 `true`，否则返回 `false`
 * @example
 * isExternal('https://example.com') // true
 * isExternal('//cdn.example.com/lib.js') // true
 * isExternal('/about') // false
 * isExternal('mailto:foo@example.com') // true
 */
export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}

/**
 * Regular expression that matches the protocol scheme of a URL.
 *
 * Matches the leading protocol portion such as `http:`, `https:`, or
 * `mailto:`. Does not match protocol-relative URLs (`//`).
 *
 * 匹配 URL 协议部分的正则表达式。
 *
 * 匹配前导协议部分，如 `http:`、`https:` 或 `mailto:`。
 * 不匹配协议相对链接（`//`）。
 *
 * @example
 * URL_PROTOCOL_RE.test('https://example.com') // true
 * URL_PROTOCOL_RE.test('mailto:foo@example.com') // true
 * URL_PROTOCOL_RE.test('//cdn.example.com/lib.js') // false
 */
export const URL_PROTOCOL_RE = /^[a-z][a-z0-9+.-]*:/

/**
 * Checks whether the given link contains a URL protocol scheme or is a
 * protocol-relative URL.
 *
 * Unlike {@link isExternal}, this function also matches links that start with
 * `//` via an additional check, in addition to those matched by
 * {@link URL_PROTOCOL_RE}.
 *
 * 判断给定链接是否包含 URL 协议部分或为协议相对链接。
 *
 * 与 {@link isExternal} 不同，此函数除了匹配 {@link URL_PROTOCOL_RE} 之外，
 * 还会通过额外检查匹配以 `//` 开头的链接。
 *
 * @param link - The link to check / 要检查的链接
 * @returns `true` if the link has a protocol or starts with `//` / 若链接包含协议或以 `//` 开头则返回 `true`
 * @example
 * isLinkWithProtocol('https://example.com') // true
 * isLinkWithProtocol('mailto:foo@example.com') // true
 * isLinkWithProtocol('//cdn.example.com/lib.js') // true
 * isLinkWithProtocol('/about') // false
 */
export function isLinkWithProtocol(link: string) {
  return URL_PROTOCOL_RE.test(link) || link.startsWith('//')
}
