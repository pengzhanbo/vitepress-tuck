import type { FileTreeNode } from './types.js'
import { parseNodeInfo } from './parseNodeInfo.js'

/**
 * Parse the content from the `::: file-tree` container into a node tree structure.
 *
 * 从 `::: file-tree` 容器中解析内容为节点树结构
 *
 * @param content - Raw file tree text content / 文件树的原始文本内容
 * @returns File tree node array / 文件树节点数组
 */
export function parseContentWithContainer(content: string): FileTreeNode[] {
  const root: FileTreeNode = { level: -1, children: [] } as unknown as FileTreeNode
  const stack: FileTreeNode[] = [root]
  const lines = content.trimEnd().split('\n')
  const spaceLength = lines[0]?.match(/^\s*/)?.[0].length ?? 0 // Remove leading spaces

  for (const line of lines) {
    const match = line.match(/^(\s*)-(.*)$/)
    if (!match)
      continue

    const level = Math.floor((match[1]!.length - spaceLength) / 2) // Two spaces per level
    const info = match[2]!.trim()

    // Find parent node at current level
    while (stack.length > 0 && stack[stack.length - 1]!.level >= level) {
      stack.pop()
    }

    const parent = stack[stack.length - 1]!
    const node: FileTreeNode = { level, children: [], ...parseNodeInfo(info) }
    parent.children.push(node)
    stack.push(node)
  }

  return root.children
}
