/**
 * File tree node structure
 *
 * 文件树节点结构
 */
export interface FileTreeNode {
  filename: string
  comment?: string
  focus?: boolean
  expanded?: boolean
  type: 'folder' | 'file'
  diff?: 'add' | 'remove'
  level: number
  children: FileTreeNode[]
}

/**
 * File tree container attributes
 *
 * 文件树容器属性
 */
export interface FileTreeAttrs {
  title?: string
}
