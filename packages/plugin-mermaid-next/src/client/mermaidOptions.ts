import type { MermaidOptions } from './types.js'

let options: MermaidOptions = {}

export function defineMermaidOptions(opts: MermaidOptions) {
  options = opts
}

export function useMermaidOptions(): MermaidOptions {
  return options
}
