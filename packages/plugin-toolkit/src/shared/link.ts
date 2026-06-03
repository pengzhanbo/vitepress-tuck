export const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i

export function isExternal(path: string): boolean {
  return EXTERNAL_URL_RE.test(path)
}

export const URL_PROTOCOL_RE = /^[a-z][a-z0-9+.-]*:/

export function isLinkWithProtocol(link: string) {
  return URL_PROTOCOL_RE.test(link) || link.startsWith('//')
}
