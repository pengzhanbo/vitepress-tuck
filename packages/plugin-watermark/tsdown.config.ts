import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: 'src/index.ts',
  outDir: 'dist',
  platform: 'browser',
  clean: true,
  format: 'esm',
  dts: true,
  fixedExtension: false,
})
