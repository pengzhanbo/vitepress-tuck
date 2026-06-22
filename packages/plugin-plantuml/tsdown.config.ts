import { build } from '../../scripts/tsdown'

export default build({
  styleAssets: ['virtual:tuck-icons.css'],
  nodeConfig: {
    deps: { neverBundle: ['vite'] },
  },
  clientConfig: {
    deps: { neverBundle: ['virtual:vitepress-plantuml'] },
  },
})
