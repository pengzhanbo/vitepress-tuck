declare module 'virtual:enhance-app' {

  import type { EnhanceAppContext } from 'vitepress/client'

  const enhanceApp: (ctx: EnhanceAppContext) => void
  export default enhanceApp
}
