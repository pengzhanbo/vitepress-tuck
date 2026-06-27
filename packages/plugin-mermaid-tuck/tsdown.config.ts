import { build } from '../../scripts/tsdown'

export default build({
  styleAssets: ['virtual:tuck-icons.css'],
  clientConfig: {
    deps: { neverBundle: ['virtual:vitepress-mermaid'] },
  },
})
