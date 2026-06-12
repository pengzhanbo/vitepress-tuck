import { createHash } from 'node:crypto'
import { isPrimitive } from '@pengzhanbo/utils'

export function genHash(data: unknown, length?: number): string {
  const str = isPrimitive(data) ? String(data) : JSON.stringify(data)
  const hash = createHash('sha256').update(str).digest('hex')
  return length ? hash.slice(0, length) : hash
}
