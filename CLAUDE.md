# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`vitepress-tuck` is a pnpm monorepo providing a plugin development framework and plugin ecosystem for VitePress.
The core library wraps VitePress's `defineConfig` with plugin lifecycle management,
while 22 standalone plugins provide features like Mermaid diagrams, QR codes, video embedding, Obsidian-style markdown, and more.

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

**Note:** The core `vitepress-tuck` package is the exception — it has no `./client` export.
It exports `"."` and `"./client-types"` (TypeScript ambient declarations for the `virtual:enhance-app` virtual module).
Its build uses `mode: 'only-node'` since it has no Vue client code.

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
  componentResolver?: ComponentResolver | string[] | (string | ComponentResolver)[]  // declare Vue components for auto-import
  // Plus all VitePress UserConfig fields: markdown, vite, vue,
  // buildEnd, transformHead, transformHtml, transformPageData, postRender
}
```

### `TuckConfig` type (in `packages/vitepress-tuck/src/types.ts`)

Extends `UserConfig` with:

- `plugins?: VitepressPlugin[]` — the plugin list
- `components?: ComponentsOptions` — options forwarded to `unplugin-vue-components` (auto-imports components in `.vue` and `.md` files)

### Built-in plugins (in `packages/vitepress-tuck/src/builtin-plugins/`)

`defineConfig` registers three built-in plugins automatically, after user plugins:

- **`virtual:enhance-app`** — A Vite virtual module that auto-generates client injection code. When a plugin sets
  `client.enhance`, the built-in plugin generates `import { <name> } from '<plugin>/client'` and chains the calls in
  a single `enhanceAppWith<name>(ctx)` export. Users import this once in `.vitepress/theme/index.ts`.
  For TypeScript support, add `"vitepress-tuck/client-types"` to `compilerOptions.types` in `tsconfig.json`.

- **`auto-components`** — Wraps [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) for
  automatic on-demand component importing in `.vue` and `.md` files. Configurable via the `components` option in
  `TuckConfig`. Plugin component resolvers are collected from each plugin's `componentResolver` field.

- **`vitepress-tuck:deps`** — Marks `vitepress-plugin-toolkit` as `ssr.noExternal` so Vite processes its ESM
  correctly during SSR.

### `plugin-toolkit`

Shared library available to all plugins:

- **Node**: `createEmbedRuleBlock`, `createContainerPlugin`, `createContainerSyntaxPlugin`
  (markdown-it helpers), VitePress config utilities (`createLocales`, `getVitepressConfig`), string/attr parsing utilities.
- **Client**: Vue components (`VPCopyButton`, `VPLoading`), composables, CSS transition utilities.
- **Shared**: Link resolution, size constants.

## Common Commands

```bash
# Build all packages
pnpm build                    # Runs clean + build:package

# Build a single package
pnpm -F vitepress-plugin-<name> build

# Watch mode for a single package during development
pnpm -F vitepress-plugin-<name> dev

# Run docs dev server
pnpm docs:dev                 # Starts VitePress dev server

# Run tests (always runs with TZ=Etc/UTC)
pnpm test                     # All tests with coverage (watch mode)
npx vitest                    # Watch mode without coverage
npx vitest --run              # Single run
npx vitest --run packages/vitepress-tuck                         # Run tests for one package
npx vitest --run packages/plugin-qrcode/__test__/qrcode.spec.ts  # Run a single test file

# Linting
pnpm lint                     # ESLint + Stylelint
pnpm lint:fix                 # Auto-fix

# Release
pnpm release:check            # lint + build (prerequisite check)
pnpm release:version          # bump version, changelog, commit, tag, push
pnpm release:publish          # publish all packages
```

## Build System

- **tsdown** is the bundler for all packages (ESM-only output). Each package has a `tsdown.config.ts` that calls
  the shared build helper from `scripts/tsdown.ts`.
- **Three-environment build**: The shared `build()` helper (in `scripts/tsdown.ts`) generates three outputs:
  1. **Node** (`dist/node/`) — server-side code, target `node20.19.0`, generates type declarations
  2. **SSR** (`dist/client/ssr/`) — Vue SSR build of client code, via `unplugin-vue` with `ssr: true`
  3. **Browser** (`dist/client/browser/`) — browser build of client code, via `unplugin-vue` with `ssr: false`; CSS
     imports are auto-prefixed via the `banner` output option
- For packages without client code, use `mode: 'only-node'` (entry: `src/index.ts`) or `mode: 'only-node-deep'`
  (entry: `src/node/index.ts`, outDir: `dist/node`).
- Packages with CSS use `cpx` to copy styles from `src/` to `dist/`. The `inlineStyle: true` option in the build
  helper auto-appends `../style.css` to the browser bundle banner.
- The `tsdown --config-loader unrun` flag resolves tsdown configs via unrun.

## Testing

- **vitest** with `@vitest/coverage-v8`. Config in `vitest.config.ts` at root.
- Test files go in `__test__/` directories, pattern: `*.spec.ts`.
- Tests use `markdown-it` directly when testing markdown plugins — no need for a full VitePress instance.
- if file system reads and writes are involved, it is strictly forbidden to use system temporary directories
  (such as `os.tmpdir()`, `/tmp`, or `mkdtempSync` pointing to the system temporary directory).
  All file operations must be confined within the project, uniformly placed under each plugin's
  `__test__/fixtures/` directory (if a temporary directory is needed, use `__test__/fixtures/tmp/`).
  Create the required directories in `beforeAll`/`beforeEach`, and clean them up in `afterAll`/`afterEach` to
  ensure that tests do not pollute the system environment or leave residue.
  The `__test__/fixtures/tmp/` directory is ignored in `.gitignore`.

## Dependencies

- Uses pnpm **catalogs** (`catalog:prod`, `catalog:dev`, `catalog:peer`) defined in `pnpm-workspace.yaml`.
- Key pnpm settings: `catalogMode: prefer` (category catalogs are preferred over plain specifiers),
  `shellEmulator: true` (ensures cross-platform script compatibility), `shamefullyHoist: true`.
- Plugins reference each other via `workspace:*` (e.g., `"vitepress-tuck": "workspace:*"`, `"vitepress-plugin-toolkit": "workspace:*"`).
- Peer dependencies: `vitepress` (^1.6.4 || ^2.0.0-alpha.17), `vue` (^3.5.0).
- Node >= 20.19.0, pnpm >= 10.

## Linting

- ESLint config is in `eslint.config.mjs` (CommonJS-style ESM file — not `.ts`).
  Uses `@pengzhanbo/eslint-config-vue` preset with TypeScript `erasableOnly: true` (type-only imports/exports
  are erased, not checked by the TypeScript compiler directly). Vue accessibility rules are enabled but relaxed for static elements.
- Stylelint uses `@pengzhanbo/stylelint-config`.
- Ignored paths: `**/*.md`, `**/__test__/fixtures/**`.

## Pre-commit Hooks

- **simple-git-hooks** + **nano-staged** runs on commit:
  - `*` → `eslint --fix`
  - `*.{css,vue}` → `stylelint --fix`
  - `*.{js,ts,mjs,cjs}` → `vitest related --run` (runs only tests related to changed files, with `TZ=Etc/UTC`)

## Release Flow

1. `pnpm release:check` — lint + build (gate check)
2. `pnpm release:version` — bumps versions via **bumpp**, generates changelog via **conventional-changelog**, commits, tags, and pushes
3. `pnpm release:publish` — publishes all packages to npm (with `--provenance` enabled)

## Creating a New Plugin

1. Copy the structure of an existing plugin (e.g., `plugin-qrcode`).
2. Package name follows `vitepress-plugin-<name>`.
3. `package.json` exports: `"."` → `./dist/node/index.js`, `"./client"` with browser/ssr conditions, `"./style.css"` if needed.
4. Use `definePlugin` from `vitepress-tuck` for the node entry; export a named `enhanceAppWith<Name>`
   function from `./client` for client-side setup.
5. Use `plugin-toolkit` for markdown-it container/embed helpers and VitePress utilities.
6. Add the plugin as a `devDependency` in `docs/package.json` and add a docs page under `docs/zh/plugins/`
   and `docs/en/plugins/` (docs are bilingual: Chinese `zh/` and English `en/`).

**Plugin node entry pattern:** Plugins typically export both:

- A **default export** — the factory function (wrapped with `definePlugin`) for use with `vitepress-tuck`'s `defineConfig`
- **Named exports** — the raw markdown-it plugin and types, enabling standalone use with native VitePress

`tsdown.config.ts` for a typical plugin with client code:

```ts
import { build } from '../../scripts/tsdown'
export default build()
```

For a plugin without client code (node-only), use `build({ mode: 'only-node' })` or `build({ mode: 'only-node-deep' })`.
