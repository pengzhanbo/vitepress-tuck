import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: 'src/node/index.ts',
    clean: true,
    outDir: 'dist/node',
    format: 'esm',
    dts: true,
    target: 'node20.19.0',
    fixedExtension: false,
  },
])
