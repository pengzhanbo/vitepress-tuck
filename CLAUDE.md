# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`vitepress-tuck` is a pnpm monorepo providing a plugin development framework and plugin ecosystem for VitePress. The core library wraps VitePress's `defineConfig` with plugin lifecycle management, while 13+ standalone plugins provide features like Mermaid diagrams, QR codes, video embedding, Obsidian-style markdown, and more.

## Repository Structure

```
packages/
  vitepress-tuck/        # Core: defineConfig, definePlugin, virtual:enhance-app
  plugin-toolkit/        # Shared utilities (node + client) for plugin authors
  plugin-*/              # Individual plugins (qrcode, mermaid-tuck, video, obsidian, etc.)
docs/                    # VitePress documentation site (workspace package)
```

Each plugin follows a consistent layout:

- `src/node/` — server-side: markdown-it plugin, Vite plugin, config
- `src/client/` — client-side: Vue components, composables, styles
- `exports` in `package.json` map `"."` to node entry, `"./client"` to browser/ssr conditionals, `"./style.css"` to styles

## Core Architecture

### `defineConfig` (in `packages/vitepress-tuck/src/define-config.ts`)

The heart of the system. Takes a `UserConfig` with an optional `plugins: VitepressPlugin[]` field:

1. Iterates all plugins, extracting `client` config (for `virtual:enhance-app` injection), lifecycle hooks, and VitePress config fragments.
2. Hooks are collected into arrays, then merged back into the final config:
   - **Parallel/concurrent**: `markdown.config`, `buildEnd`, `transformHead` (results merged)
   - **Sequential/chained**: `transformHtml`, `transformPageData`, `postRender` (each hook receives the previous result)
3. User-provided hooks are appended as the final step in each chain.
4. Returns a standard `UserConfig` — fully compatible with native VitePress.

### `definePlugin` (in `packages/vitepress-tuck/src/define-plugin.ts`)

An identity function providing TypeScript type inference for plugin authors. Plugins are factory functions `(options?: T) => VitepressPlugin`.

### `VitepressPlugin` type (in `packages/vitepress-tuck/src/types.ts`)

```ts
interface VitepressPlugin {
  name: string
  client?: { imports?: string[]; enhance?: string | boolean }
  // Plus all VitePress UserConfig fields: markdown, vite, vue,
  // buildEnd, transformHead, transformHtml, transformPageData, postRender
}
```

### `virtual:enhance-app` (built-in plugin)

A Vite virtual module that auto-generates client injection code. When a plugin sets `client.enhance`, the built-in plugin generates `import { <name> } from '<plugin>/client'` and chains the calls in a single `enhanceApp(ctx)` export. Users import this once in `.vitepress/theme/index.ts`.

### `plugin-toolkit`

Shared library available to all plugins:

- **Node**: `createEmbedRuleBlock`, `createContainerPlugin`, `createContainerSyntaxPlugin` (markdown-it helpers), VitePress config utilities (`createLocales`, `getVitepressConfig`), string/attr parsing utilities.
- **Client**: Vue components (`VPCopyButton`, `VPLoading`), composables, CSS transition utilities.
- **Shared**: Link resolution, size constants.

## Common Commands

```bash
# Build all packages
pnpm build                    # Runs clean + build:package

# Build a single package
pnpm -F vitepress-plugin-<name> build

# Run docs dev server
pnpm docs:dev                 # Starts VitePress dev server

# Run tests
pnpm test                     # All tests with coverage (watch mode)
npx vitest                    # Watch mode without coverage
npx vitest --run              # Single run
npx vitest --run packages/vitepress-tuck  # Run tests for one package

# Linting
pnpm lint                     # ESLint + Stylelint
pnpm lint:fix                 # Auto-fix

# Release
pnpm release:check            # lint + build (prerequisite check)
pnpm release:version          # bump version, changelog, commit, tag, push
pnpm release:publish          # publish all packages
```

## Build System

- **tsdown** is the bundler for all packages (ESM-only output). Each package has a `tsdown.config.ts` with `entry`, `format: 'esm'`, `dts: true`.
- Packages with CSS use `cpx` to copy styles from `src/` to `dist/`.
- The `tsdown --config-loader unrun` flag resolves tsdown configs via unrun.

## Testing

- **vitest** with `@vitest/coverage-v8`. Config in `vitest.config.ts` at root.
- Test files go in `__test__/` directories, pattern: `*.spec.ts`.
- Tests use `markdown-it` directly when testing markdown plugins — no need for a full VitePress instance.

## Dependencies

- Uses pnpm **catalogs** (`catalog:prod`, `catalog:dev`, `catalog:peer`) defined in `pnpm-workspace.yaml`.
- Plugins reference each other via `workspace:*` (e.g., `"vitepress-tuck": "workspace:*"`, `"vitepress-plugin-toolkit": "workspace:*"`).
- Peer dependencies: `vitepress` (^1.6.4 || ^2.0.0-alpha.17), `vue` (^3.5.0).
- Node >= 20.19.0, pnpm >= 10.

## Creating a New Plugin

1. Copy the structure of an existing plugin (e.g., `plugin-qrcode`).
2. Package name follows `vitepress-plugin-<name>`.
3. `package.json` exports: `"."` → `./dist/node/index.js`, `"./client"` with browser/ssr conditions, `"./style.css"` if needed.
4. Use `definePlugin` from `vitepress-tuck` for the node entry; export a named `enhanceApp` function from `./client` for client-side setup.
5. Use `plugin-toolkit` for markdown-it container/embed helpers and VitePress utilities.
6. Add the plugin as a `devDependency` in `docs/package.json` and add a docs page under `docs/zh/plugins/` and `docs/en/plugins/`.
