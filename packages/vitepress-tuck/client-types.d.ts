declare module 'virtual:enhance-app' {

  import type { Awaitable } from '@pengzhanbo/utils'
  import type { EnhanceAppContext } from 'vitepress/client'

  const enhanceApp: (ctx: EnhanceAppContext) => Awaitable<void>
  export default enhanceApp
}
