import type { InjectionKey, Ref } from 'vue'

/**
 * Injection key for the collapse container context, shared between
 * `<VPCollapse>` and its child `<VPCollapseItem>` components.
 *
 * 折叠面板容器上下文的注入键，在 `<VPCollapse>` 与其子级 `<VPCollapseItem>`
 * 组件之间共享。
 *
 * - `accordion`: whether accordion mode is enabled / 是否启用手风琴模式
 * - `index`: the currently expanded item index (writable ref), used to
 *   coordinate mutual exclusion in accordion mode / 当前展开项的索引（可写
 *   ref），用于在手风琴模式下协调互斥展开
 */
export const COLLAPSE_KEY: InjectionKey<{
  accordion: boolean
  index: Ref<number | undefined>
}> = Symbol(
  import.meta.env.DEV ? 'collapse' : '',
)
