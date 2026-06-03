import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'dist',
  format: 'esm',
  dts: true,
  target: 'node20.19.0',
  fixedExtension: false,
})
