import type { NpmToPackageManager } from './types.js'

/**
 * Categories of package commands recognized by the plugin.
 *
 * Each value corresponds to a `npm` subcommand (or `npx`) that the plugin
 * knows how to translate into the equivalent invocation for other package
 * managers.
 *
 * 插件识别的包命令类别。
 *
 * 每个值对应一个 `npm` 子命令（或 `npx`），插件能够将其翻译为
 * 其他包管理器的等价调用。
 */
export type PackageCommand = 'install' | 'add' | 'remove' | 'run' | 'create' | 'init' | 'npx' | 'ci'

/**
 * Configuration item describing how a single package manager handles a
 * given npm command.
 *
 * 描述单个包管理器如何处理给定 npm 命令的配置项。
 */
export interface CommandConfigItem {
  /**
   * The CLI invocation used by this package manager, for example
   * `pnpm add` or `yarn remove`.
   *
   * 该包管理器使用的 CLI 调用，例如 `pnpm add` 或 `yarn remove`。
   */
  cli: string
  /**
   * Map of npm flag to the equivalent flag for this package manager.
   * An empty string means the flag is unsupported and will be dropped.
   *
   * npm 标志到该包管理器等价标志的映射。
   * 空字符串表示该标志不受支持，将被移除。
   */
  flags?: Record<string, string>
}

/**
 * Per-manager command configuration for a single npm command, excluding
 * `npm` itself (the source).
 *
 * 单个 npm 命令在各包管理器上的配置（不含源管理器 `npm`）。
 */
export type CommandConfig = Record<Exclude<NpmToPackageManager, 'npm'>, CommandConfigItem | false>

/**
 * Full configuration table mapping every supported {@link PackageCommand}
 * to its detection pattern and per-manager translations.
 *
 * 完整的配置表，将每个支持的 {@link PackageCommand} 映射到其检测正则
 * 与各包管理器的翻译配置。
 */
export type CommandConfigs = Record<PackageCommand, { pattern: RegExp } & CommandConfig>

/**
 * Allow-list of package manager names accepted by the plugin.
 *
 * Any tab name not present in this list is filtered out during validation.
 *
 * 插件接受的包管理器名称白名单。
 *
 * 校验时，不在此列表中的选项卡名称将被过滤掉。
 */
export const ALLOW_LIST = ['npm', 'pnpm', 'yarn', 'bun', 'deno'] as const

/**
 * npm flags that behave as boolean switches (they take no value).
 *
 * Used by the argument parser to distinguish a flag that expects a
 * following value from one that does not.
 *
 * 作为布尔开关的 npm 标志（不接受值）。
 *
 * 参数解析器据此区分需要后续值的标志与不需要值的标志。
 */
export const BOOL_FLAGS: string[] = ['--no-save', '-B', '--save-bundle', '--save-dev', '-D', '--save-prod', '-P', '--save-peer', '-O', '--save-optional', '-E', '--save-exact', '-y', '--yes', '-g', '--global']

/**
 * Default package manager tabs rendered when the user does not specify
 * a `tabs` option.
 *
 * 用户未指定 `tabs` 选项时渲染的默认包管理器选项卡。
 */
export const DEFAULT_TABS: NpmToPackageManager[] = ['npm', 'pnpm', 'yarn']

/**
 * Translation table from npm/npx commands to equivalent commands for
 * each supported package manager.
 *
 * Each entry contains a `pattern` used to detect the command in source
 * text, plus per-manager configs that specify the replacement CLI and
 * any flag mappings. Flag values of `''` indicate the flag is not
 * supported by that manager and is dropped from the output.
 *
 * 将 npm/npx 命令翻译为各支持包管理器等价命令的对照表。
 *
 * 每个条目包含用于在源文本中检测命令的 `pattern`，以及各管理器的
 * 配置（指定替换 CLI 和标志映射）。标志值为 `''` 表示该管理器不支持
 * 该标志，输出时会将其移除。
 *
 * @example
 * // `npm install` becomes:
 * // - pnpm install
 * // - yarn
 * // - bun install
 * // - deno install
 * MANAGERS_CONFIG.install
 */
export const MANAGERS_CONFIG: CommandConfigs = {
  install: {
    pattern: /(?:^|\s)npm\s+(?:install|i)$/,
    pnpm: { cli: 'pnpm install' },
    yarn: { cli: 'yarn' },
    bun: { cli: 'bun install' },
    deno: { cli: 'deno install' },
  },
  add: {
    pattern: /(?:^|\s)npm\s+(?:install|i|add)(?:\s|$)/,
    pnpm: {
      cli: 'pnpm add',
      flags: {
        '--no-save': '', // unsupported
        '-B': '', // unsupported
        '--save-bundle': '', // unsupported
      },
    },
    yarn: {
      cli: 'yarn add',
      flags: {
        '--save-dev': '--dev',
        '--save-prod': '--prod',
        '-P': '', // in npm, `-P` same as `--save-prod`. but in yarn, `-P` same as `--peer`
        '--save-peer': '--peer',
        '--save-optional': '--optional',
        '--no-save': '', // unsupported
        '--save-exact': '--exact',
        '-B': '', // unsupported
        '--save-bundle': '', // unsupported
      },
    },
    bun: {
      cli: 'bun add',
      flags: {
        '--save-dev': '--development',
        '-P': '', // it's default
        '--save-prod': '', // it's default
        '--save-peer': '', // unsupported
        '-O': '--optional',
        '--save-optional': '--optional',
        '--no-save': '', // unsupported
        '--save-exact': '--exact',
        '-B': '', // unsupported
        '--save-bundle': '', // unsupported
      },
    },
    deno: {
      cli: 'deno add',
      flags: {
        '-g': '', // unsupported
        '--global': '', // unsupported
        '--save-dev': '--dev',
        '-P': '', // unsupported
        '--save-prod': '', // unsupported
        '--save-peer': '', // unsupported
        '-O': '', // unsupported
        '--save-optional': '', // unsupported
        '--no-save': '', // unsupported
        '-E': '', // unsupported
        '--save-exact': '', // unsupported
        '-B': '', // unsupported
        '--save-bundle': '', // unsupported
      },
    },
  },
  run: {
    pattern: /(?:^|\s)npm\s+(?:run|run-script|rum|urn)(?:\s|$)/,
    pnpm: {
      cli: 'pnpm',
      flags: {
        '-w': '-F', // same as `--workspace`
        '--workspace': '--filter', // filter by workspaces
        '--': '', // scripts flags
      },
    },
    yarn: {
      cli: 'yarn',
      flags: {
        '-w': '', // unsupported
        '--workspace': '', // unsupported
      },
    },
    bun: {
      cli: 'bun run',
      flags: {
        '-w': '--filter', // same as `--workspace`
        '--workspace': '--filter', // filter by workspaces
      },
    },
    deno: {
      cli: 'deno run',
      flags: {
        '-w': '', // unsupported
        '--workspace': '', // unsupported
      },
    },
  },
  create: {
    pattern: /(?:^|\s)npm\s+create\s/,
    pnpm: { cli: 'pnpm create', flags: { '-y': '', '--yes': '' } },
    yarn: { cli: 'yarn create', flags: { '-y': '', '--yes': '' } },
    bun: { cli: 'bun create', flags: { '-y': '', '--yes': '' } },
    deno: { cli: 'deno run -A ', flags: { '-y': '', '--yes': '' } },
  },
  init: {
    pattern: /(?:^|\s)npm\s+init/,
    pnpm: { cli: 'pnpm init', flags: { '-y': '', '--yes': '' } },
    yarn: { cli: 'yarn init', flags: { '-y': '', '--yes': '' } },
    bun: { cli: 'bun init', flags: { '-y': '', '--yes': '' } },
    deno: { cli: 'deno init', flags: { '-y': '', '--yes': '' } },
  },
  npx: {
    pattern: /(?:^|\s)npx\s+/,
    pnpm: { cli: 'pnpm dlx' },
    yarn: { cli: 'yarn dlx' },
    bun: { cli: 'bunx' },
    deno: { cli: 'deno run -A' },
  },
  remove: {
    pattern: /(?:^|\s)npm\s+(?:uninstall|r|rm|remove|unlink|un)(?:\s|$)/,
    pnpm: {
      cli: 'pnpm remove',
      flags: { '--no-save': '', '--save': '', '-S': '' },
    },
    yarn: {
      cli: 'yarn remove',
      flags: { '--save-dev': '--dev', '--save': '', '-S': '', '-g': '', '--global': '' },
    },
    bun: {
      cli: 'bun remove',
      flags: { '--save-dev': '--development', '--save': '', '-S': '', '-g': '', '--global': '' },
    },
    deno: {
      cli: 'deno uninstall',
      flags: { '--save-dev': '--dev', '--save': '', '-S': '' },
    },
  },
  ci: {
    pattern: /(?:^|\s)npm\s+ci$/,
    pnpm: { cli: 'pnpm install --frozen-lockfile' },
    yarn: { cli: 'yarn install --immutable' },
    bun: { cli: 'bun install --frozen-lockfile' },
    deno: { cli: 'deno install --frozen' },
  },
}
