import { defineConfig } from 'tsdown'
import { onSuccess } from '../../scripts/tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'dist',
  platform: 'browser',
  clean: true,
  format: 'esm',
  dts: true,
  fixedExtension: false,
  onSuccess,
})
