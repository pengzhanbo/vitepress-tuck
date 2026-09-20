import { build } from '../../scripts/tsdown'

export default build({
  clientConfig: {
    deps: { neverBundle: ['virtual:vitepress-field'] },
  },
})
