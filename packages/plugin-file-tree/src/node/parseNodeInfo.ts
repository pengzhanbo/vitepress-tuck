import type { FileTreeNode } from './types.js'
import { removeTrailingSlash } from '@pengzhanbo/utils'

/**
 * Regex for focus marker
 *
 * 高亮标记正则
 */
const RE_FOCUS = /^\*\*(.*)\*\*(?:$|\s+)/

/**
 * Parse single node info string, extract filename, comment, type, etc.
 *
 * 解析单个节点的 info 字符串，提取文件名、注释、类型等属性
 *
 * @param info - Node description string / 节点描述字符串
 * @returns File tree node props / 文件树节点属性
 */
export function parseNodeInfo(info: string): Omit<FileTreeNode, 'children' | 'level'> {
  let filename = ''
  let comment = ''
  let focus = false
  let expanded: boolean | undefined = true
  let type: 'folder' | 'file' = 'file'
  let diff: 'add' | 'remove' | undefined

  // Process diff marker
  if (info.startsWith('++')) {
    info = info.slice(2).trim()
    diff = 'add'
  }
  else if (info.startsWith('--')) {
    info = info.slice(2).trim()
    diff = 'remove'
  }

  // Process focus marker
  info = info.replace(RE_FOCUS, (_, matched) => {
    filename = matched
    focus = true
    return ''
  })

  // Extract filename and comment
  if (filename === '' && !focus) {
    const sharpIndex = info.indexOf('#')
    filename = info.slice(0, sharpIndex === -1 ? info.length : sharpIndex).trim()
    info = sharpIndex === -1 ? '' : info.slice(sharpIndex)
  }

  comment = info.trim()

  // Determine if folder
  if (filename.endsWith('/')) {
    type = 'folder'
    expanded = false
    filename = removeTrailingSlash(filename)
  }

  return { filename, comment, focus, expanded, type, diff }
}
