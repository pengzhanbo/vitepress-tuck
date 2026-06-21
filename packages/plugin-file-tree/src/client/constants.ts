import type { InjectionKey, Ref } from 'vue'

/**
 * File tree node click event
 *
 * 文件树节点点击事件
 */
export const ON_NODE_CLICK: InjectionKey<(filename: string, type: 'folder' | 'file') => void> = Symbol(import.meta.env.DEV ? 'on-file-tree-node-click' : '')

/**
 * Active file tree node
 *
 * 当前激活的文件树节点
 */
export const ACTIVE_NODE_KEY: InjectionKey<Ref<string>> = Symbol(import.meta.env.DEV ? 'active-file-tree-node' : '')
