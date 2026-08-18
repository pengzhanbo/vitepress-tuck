# Repository Guidelines

Guidance for AI assistants and developers working in this repository. Companion to `CLAUDE.md` (conventions) and `README.md` (user-facing docs); this file focuses on how the codebase is built, tested, and extended.

## Project Overview

`vitepress-tuck` is a pnpm monorepo (name: `vitepress-tuck-monorepo`) providing a plugin development framework and plugin ecosystem for VitePress.

- **Core** (`packages/vitepress-tuck`): an enhanced `defineConfig` that adds a `plugins` field, merges plugin lifecycle hooks, and auto-wires client-side injection via virtual modules.
- **Toolkit** (`packages/plugin-toolkit`): shared markdown-it, Vite, VitePress, and Vue client utilities for plugin authors.
- **26 published plugins** (`packages/plugin-*`, e.g. `vitepress-plugin-qrcode`, `vitepress-plugin-mermaid-tuck`, `vitepress-plugin-obsidian`): markdown-it containers/embeds, Vue components, and Vite integrations.
- **Docs site** (`docs/`): a VitePress workspace package that dogfoods every plugin; bilingual (`en/` + `zh/`, zh is the primary audience).

Note: `packages/plugin-card/` is an empty, unfinished directory — ignore it. All published packages share version `0.12.0` and are bumped in lockstep.

## Architecture & Data Flow

### Plugin contract

Every plugin is a factory function returning a `VitepressPlugin` (see `packages/vitepress-tuck/src/types.ts`):

```ts
{
  name: string
  markdown?: { config: (md: MarkdownIt) => void }        // register markdown-it plugins
  vite?: UserConfig['vite']                              // vite plugins, optimizeDeps, ssr.noExternal
  vue?: UserConfig['vue']
  client?: { imports?: string[]; enhance?: string }      // CSS imports / enhanceAppWith* function name
  componentResolver?: string[]                            // Vue components auto-imported from `<pkg>/client`
  buildEnd? / transformHead? / transformHtml? / transformPageData? / postRender?
}
```

### `defineConfig` flow (`packages/vitepress-tuck/src/define-config.ts`)

1. Iterates user plugins, extracting client config, lifecycle hooks, and VitePress config fragments.
2. Merges hooks with two strategies (`packages/vitepress-tuck/src/hooks.ts`):
   - **Parallel** (results merged): `markdown.config`, `buildEnd`, `transformHead`
   - **Chained** (each receives the previous result): `transformHtml`, `transformPageData`, `postRender`
   - User-provided hooks append last in each chain.
3. Auto-appends three builtin plugins after user plugins (`src/builtin-plugins/`):
   - `virtual:enhance-app` — generates a virtual module that imports each plugin's `enhanceAppWith*` from `<pkg>/client` and chains them; consumed once in `.vitepress/theme/index.ts`
   - `auto-components` — wraps `unplugin-vue-components`; collects `componentResolver` entries from all plugins
   - `vitepress-tuck:deps` — marks `vitepress-plugin-toolkit` as `ssr.noExternal`
4. Returns a plain VitePress `UserConfig`.

### Markdown data flow

- Plugins register markdown-it rules in `src/node/markdown.ts` (or `src/node/plugin.ts` → `markdown.config`).
- Toolkit helpers: `createContainerPlugin(md, name, ...)` for `::: name` containers, `createContainerSyntaxPlugin` for raw-content containers, `createEmbedRuleBlock` for `@[type info](source)` embeds (`packages/plugin-toolkit/src/node/markdown/container.ts`, `embed.ts`).
- Embeds render as component tags (`<VPStackBlitz .../>`); components are auto-imported client-side via `componentResolver` (resolved by `unplugin-vue-components` to `<pkg>/client`).

### Build data flow

Single shared builder (`scripts/tsdown.ts`) produces per package, from `src/`:

| Output | Entry | Platform |
| --- | --- | --- |
| `dist/node/` | `src/node/index.ts` | node, `dts: true` |
| `dist/client/ssr/` | `src/client/index.ts` | SSR (unplugin-vue `ssr: true`) |
| `dist/client/browser/` | `src/client/index.ts` | browser, banner `import "../style.css"` |

Post-build, `.js` files are comment-stripped (`scripts/strip-comments.ts`); `.d.ts` keeps `//#region` markers removed.

## Key Directories

| Path | Purpose |
| --- | --- |
| `packages/vitepress-tuck/` | Core: `defineConfig`, `definePlugin`, types, builtin plugins. Node-only build; exports `client-types.d.ts` for `virtual:enhance-app` typing |
| `packages/plugin-toolkit/` | Shared node helpers (containers, embeds, `iconPlugin`, `getVitepressConfig`, `createLocales`) + client components (`VPCopyButton`, `VPLoading`), composables, `./styles/*` CSS |
| `packages/plugin-*/` | One npm package per plugin; `src/node/` (server: `plugin.ts`, `markdown.ts`, `types.ts`) + `src/client/` (Vue `VP*.vue`, `style.css`, `index.ts`) |
| `docs/` | Bilingual VitePress site; `en/`, `zh/` (must stay in parity), `config.ts` + `zh/config.ts` locale configs, `.vitepress/` theme/plugins, `snippets/` demo projects |
| `scripts/` | `tsdown.ts` (shared build wrapper), `strip-comments.ts`, `mirror-sync.mjs` (npmmirror sync) |
| `packages/*/__test__/` | Vitest specs (`*.spec.ts`) + per-package `fixtures/` |

## Development Commands

```bash
pnpm install                 # pnpm ^11.21.0 required (auto-downloaded if missing)
pnpm build                   # build all packages (pnpm -r --stream build)
pnpm -F vitepress-plugin-qrcode build   # build one package
pnpm -F vitepress-plugin-qrcode dev     # tsdown watch mode
pnpm docs:dev                # VitePress dev server (docs site)
pnpm test                    # all tests + coverage (TZ=Etc/UTC forced)
npx vitest --run             # watch mode instead: npx vitest
npx vitest --run packages/plugin-qrcode/__test__/qrcode.spec.ts   # one file
pnpm lint                    # eslint . && stylelint '**/*.{css,vue}'
pnpm lint:fix
pnpm release                 # release:check (lint+build) → release:version (bumpp + changelog + tag + push)
```

There is no root `dev` or `typecheck` script; no package declares a `test` script (tests run from the root).

## Code Conventions & Common Patterns

- **ESM only.** Relative imports use explicit `.js` extensions (`import { x } from './markdown.js'`). Type-only imports use `import type`. `verbatimModuleSyntax: true`; ESLint enforces `erasableOnly` — **no enums, no namespaces**.
- **Bilingual JSDoc** (English + 简体中文) on every exported function/interface. `index.ts` files are plain `export * from './...js'`.
- **Plugin factory**: `export const mark = definePlugin((options?: Options) => ({ name: 'vitepress-plugin-mark', ... }))` — see `packages/plugin-mark/src/node/plugin.ts` (minimal reference plugin). Plugins often also export the raw markdown-it plugin for standalone (native VitePress) use.
- **Files**: `src/node/plugin.ts` (factory + `componentResolver`), `src/node/markdown.ts` (markdown-it rules), `src/node/types.ts` (options types), `src/client/VP<Name>.vue` (components, kebab-case files, camelCase exports), `src/client/index.ts` (exports + optional `enhanceAppWith<Name>`).
- **Markdown-it**: use toolkit helpers instead of hand-rolling — `createContainerPlugin(md, 'name', { render })`, `createContainerSyntaxPlugin`, `createEmbedRuleBlock`; inline rules via `@mdit/plugin-inline-rule` or custom `md.inline.ruler`.
- **Client wiring** (either, or both):
  - `componentResolver: ['VPFoo']` — component auto-imported in `.vue`/`.md` files (normalized by `normalizeComponentResolver` in core).
  - `client: { enhance: 'enhanceAppWithFoo' }` — function called from generated `virtual:enhance-app`; type via `packages/vitepress-tuck/client-types.d.ts` (`declare module 'virtual:enhance-app'`).
- **Virtual modules**: `resolveId` returns `\0`-prefixed id; `load` returns generated JS. See `packages/plugin-mermaid-tuck/src/node/vite.ts` (`virtual:vitepress-mermaid`) and toolkit `iconPlugin` (`virtual:tuck-icons.css`). Client-side ambient types go in `src/client/env.d.ts`.
- **Vite**: prefer `optimizeDeps.include` for optional deps and `ssr.noExternal` for ESM packages (see `plugin-video`); `enforce: 'post'` for the toolkit icon plugin.
- **Utilities**: `@pengzhanbo/utils` (`toArray`, `deepMerge`, `attemptAsync`, ...); `ansis`-colored `logger.ts` helpers; graceful fallbacks over throwing (e.g. plantuml emits fallback images).
- **State/errors**: options validated loosely; only `plugin-stackblitz` uses zod (for `stackblitz.config.*` files). Keep client components dependency-free of node code.

## Important Files

| File | Why it matters |
| --- | --- |
| `packages/vitepress-tuck/src/define-config.ts` | Core plugin merging + builtin plugin registration |
| `packages/vitepress-tuck/src/types.ts` | `VitepressPlugin` / `TuckConfig` contracts |
| `packages/vitepress-tuck/src/hooks.ts` | Parallel vs chained hook merging |
| `packages/vitepress-tuck/src/builtin-plugins/virtual-enhance-app.ts` | `virtual:enhance-app` codegen |
| `scripts/tsdown.ts` | Shared 3-target build; `build({ mode, inlineStyle, styleAssets, ... })` |
| `scripts/strip-comments.ts` | Post-build comment stripping |
| `vitest.config.ts` | Single test config: `**/__test__/**/*.spec.[tj]s`, v8 coverage |
| `pnpm-workspace.yaml` | Catalogs (`catalog:prod | dev | peer`), overrides,`catalogMode: prefer` |
| `docs/.vitepress/config.ts` + `docs/.vitepress/plugins/index.ts` | Docs site config; registers all 22 workspace plugins |
| `eslint.config.mjs` / `stylelint.config.mjs` | Flat-config lint presets |

## Runtime/Tooling Preferences

- **Package manager**: pnpm `^11.21.0` (devEngines; wrong version auto-downloads). `shamefullyHoist: true`, `shellEmulator: true`. Use `pnpm -F <name>` for package-scoped commands.
- **Node**: `^20.19.0 || ^22.11.0 || ^24.11.0 || >=26` (wrong version is a hard error; CI runs Node 24).
- **Dependencies**: catalog references (`catalog:prod` / `catalog:dev` / `catalog:peer`) — do not add raw version specifiers. Workspace deps (`vitepress-tuck`, `vitepress-plugin-toolkit`) as `workspace:*`. Peer deps: `vitepress ^2.0.0-alpha.18`, `vue ^3.5.0`. Key versions: TypeScript `^6.0.3`, tsdown `^0.22.14`, vitest `^4.1.10`, vite `^8.2.1`, eslint `^10.8.1`. Do not upgrade `typescript`/`markdown-it`/`conventional-changelog*` (taze-excluded).
- **Build**: `tsdown --config-loader unrun` (each package's `tsdown.config.ts` calls `build()` from `../../scripts/tsdown`). ESM-only output, `.d.ts` always emitted, no CJS. `vue-tsc`, `@tsdown/css`, `oxc-minify` are cataloged but have **no direct usage** — don't wire them into scripts.
- **No per-package tsconfigs** — only root `tsconfig.json` (strict, `moduleResolution: bundler`, no path aliases) and `docs/tsconfig.json`.
- **Formatting**: no Prettier; ESLint/Stylelint autofix is the formatter (VS Code `source.fixAll.*` code actions, `formatOnSave: false`). `.editorconfig`: 2-space, LF, UTF-8, final newline.
- **Docs are bilingual**: any new doc page needs `docs/en/...` + `docs/zh/...` parity; new plugins get registered in `docs/.vitepress/plugins/index.ts` and as a `workspace:*` devDependency of `docs/package.json`.

## Testing & QA

- **Vitest 4** with `@vitest/coverage-v8`, single root config (`vitest.config.ts`), node environment, no globals (`describe/expect/it/vi` imported from `'vitest'`), no snapshots.
- Specs live in **`packages/*/__test__/*.spec.ts`** (never `*.test.ts`, never co-located in `src/`). 53 spec files across 25 packages; `plugin-mark` has no tests.
- **Patterns**:
  - markdown-it unit tests: `const md = new MarkdownIt(); md.use(plugin); expect(md.render('::: x', env)).toContain('...')`
  - VitePress coupling faked: `(globalThis as any).VITEPRESS_CONFIG = { srcDir, root }` in `beforeAll`, restored in `afterAll` — never run real VitePress.
  - Fixtures in `packages/*/__test__/fixtures/`, read via `path.resolve(__dirname, 'fixtures')` (e.g. `plugin-obsidian`, `plugin-code-tree`, `plugin-stackblitz`).
- **Filesystem rule** (hard constraint): tests that touch the filesystem MUST use `__test__/fixtures/` — system temp dirs (`os.tmpdir()`, `/tmp`, `mkdtempSync` outside the project) are strictly forbidden. Use `__test__/fixtures/tmp/` for scratch; create in `beforeAll`/`beforeEach`, clean up in `afterAll`/`afterEach`.
- `pnpm test` runs everything with `TZ=Etc/UTC` and coverage (v8, `text`+`clover`+`json` reporters, **no thresholds**). Pre-commit (`nano-staged` + `simple-git-hooks`) runs `eslint --fix`, `stylelint --fix`, and `vitest related --run` on changed JS/TS.
- CI (`test.yaml`): builds all packages, then `pnpm test` with `NODE_OPTIONS=--max_old_space_size=8192`; coverage uploaded to Codecov on `main`. Lint runs ESLint + Stylelint (markdown and `__test__/fixtures` ignored).
