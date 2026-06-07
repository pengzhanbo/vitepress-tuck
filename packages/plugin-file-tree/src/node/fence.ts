import type { FileTreeNode } from './types.js'
import { parseNodeInfo } from './parseNodeInfo.js'

/**
 * Regex for matching a single line of `tree` command output.
 *
 * Matches lines like:
 *   ├── filename
 *   │   ├── filename
 *   │   └── filename
 *   └── filename  # optional comment
 *
 * - Group 1: prefix segments, each is either `│   ` (has next sibling) or `    ` (last sibling)
 * - Group 2: branch marker, either `├── ` (non-last) or `└── ` (last)
 * - Group 3: the filename with optional comment
 *
 * 匹配 `tree` 命令输出的单行正则
 */
const TREE_LINE_RE = /^((?:│ {3}| {4})*)([├└]── )(.+)$/u

/**
 * Parse `tree` command output format into a structured file tree node array.
 *
 * Converts text like:
 * ```
 * .
 * ├── src
 * │   ├── index.ts
 * │   └── utils.ts
 * └── package.json  # project config
 * ```
 *
 * into a `FileTreeNode[]` tree structure, with support for inline comments
 * (text after `#`) on each entry.
 *
 * 将 `tree` 命令行输出格式解析为结构化的文件树节点数组
 *
 * @param content - Raw `tree` command output text / `tree` 命令输出的原始文本
 * @returns Structured file tree node array / 结构化的文件树节点数组
 */
export function parseContentWithFence(content: string): FileTreeNode[] {
  const root: FileTreeNode = { level: -1, children: [] } as unknown as FileTreeNode
  const stack: FileTreeNode[] = [root]
  const lines = content.trimEnd().split('\n')

  // Skip the first line if it is the root marker "."
  const start = lines[0]?.trim() === '.' ? 1 : 0

  for (let i = start; i < lines.length; i++) {
    const line = lines[i]!
    const match = line.match(TREE_LINE_RE)
    if (!match)
      continue

    const prefix = match[1]!
    const info = match[3]!.trim()

    // Each indentation level is a 4-character segment: "│   " or "    "
    const level = prefix.length / 4

    // Pop the stack until we find the parent at a lower level
    while (stack.length > 0 && stack[stack.length - 1]!.level >= level) {
      stack.pop()
    }

    const parent = stack[stack.length - 1]!

    // A node that has children must be a folder
    if (parent !== root && parent.type === 'file') {
      parent.type = 'folder'
    }

    const node: FileTreeNode = { level, children: [], ...parseNodeInfo(info) }
    parent.children.push(node)
    stack.push(node)
  }

  return root.children
}
