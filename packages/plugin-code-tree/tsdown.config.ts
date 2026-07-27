import { build } from '../../scripts/tsdown'

export default build({
  nodeConfig: {
    deps: {
      neverBundle: ['@types/picomatch/lib/picomatch.d.ts'],
      dts: { neverBundle: ['@types/picomatch/lib/picomatch.d.ts'] },
    },
  },
})
