import MarkdownIt from 'markdown-it'
import { describe, expect, it } from 'vitest'
import { npmToMarkdownPlugin, parseLine } from '../src/markdown'
import { ALLOW_LIST, DEFAULT_TABS } from '../src/npmTo'
import { npmTo } from '../src/plugin'

// =============================================================================
// npmToMarkdownPlugin — 容器渲染测试
// =============================================================================
describe('npmToMarkdownPlugin', () => {
  it('npm install 转换为 code-group', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm install vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('code-group')
    expect(result).toContain('npm')
    expect(result).toContain('pnpm')
    expect(result).toContain('yarn')
  })

  it('npm install -D', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm install -D vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('自定义 tabs 选项', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin, ['npm', 'pnpm'])
    const result = md.render('::: npm-to\n```sh\nnpm install vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('npm')
    expect(result).toContain('pnpm')
    expect(result).not.toContain('[yarn]')
  })

  it('容器属性 tabs 覆盖全局', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to tabs="npm,bun"\n```sh\nnpm install vitepress-plugin-steps\n```\n:::')
    expect(result).toContain('npm')
    expect(result).toContain('bun')
  })

  it('npm run 命令', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm run build\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('npx 命令', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpx eslint .\n```\n:::')
    expect(result).toContain('code-group')
    expect(result).toContain('pnpm dlx')
  })

  it('npm uninstall 命令', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm uninstall react\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('npm create 命令', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm create vite@latest\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('npm init 命令', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm init -y\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('无效容器(无 fence)返回空', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\nJust text, no code fence\n:::')
    expect(result).not.toContain('code-group')
  })

  it('全部包管理器选项', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin, ['npm', 'pnpm', 'yarn', 'bun', 'deno'])
    const result = md.render('::: npm-to\n```sh\nnpm i react\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('默认 tabs', () => {
    expect(DEFAULT_TABS).toEqual(['npm', 'pnpm', 'yarn'])
  })

  it('allowed tabs', () => {
    expect(ALLOW_LIST).toContain('npm')
    expect(ALLOW_LIST).toContain('pnpm')
    expect(ALLOW_LIST).toContain('yarn')
    expect(ALLOW_LIST).toContain('bun')
    expect(ALLOW_LIST).toContain('deno')
  })

  // ---- 额外渲染测试 ----
  it('npm ci 命令', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm ci\n```\n:::')
    expect(result).toContain('code-group')
    // pnpm: pnpm install --frozen-lockfile
    expect(result).toContain('frozen-lockfile')
  })

  it('npm i (简写)', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm i react\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('fence 内多行命令(&& 连接)', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm install react && npm install -D vue\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('options 对象形式传入 tabs', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin, { tabs: ['npm', 'bun'] })
    const result = md.render('::: npm-to\n```sh\nnpm install react\n```\n:::')
    expect(result).toContain('npm')
    expect(result).toContain('bun')
  })

  it('容器属性 tabs 带空格', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to tabs="npm, pnpm"\n```sh\nnpm install react\n```\n:::')
    expect(result).toContain('npm')
    expect(result).toContain('pnpm')
  })

  it('options tabs 为空数组时回退到默认值', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin, { tabs: [] })
    const result = md.render('::: npm-to\n```sh\nnpm install react\n```\n:::')
    // 空数组被过滤后回退到 DEFAULT_TABS
    expect(result).toContain('code-group')
  })

  it('options tabs 含非法值时被过滤', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin, { tabs: ['invalid' as any] })
    const result = md.render('::: npm-to\n```sh\nnpm install react\n```\n:::')
    // 所有 tabs 被过滤，回退到 DEFAULT_TABS
    expect(result).toContain('code-group')
  })

  // ---- 渲染 — 覆盖不同命令模式 ----
  it('npm install --save-dev (长标志)', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm install --save-dev react\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('npm run -w workspace build', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm run -w pkg build\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('npm install 多包', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm install react vue\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('npm r 简写 (remove)', () => {
    const md = new MarkdownIt()
    md.use(npmToMarkdownPlugin)
    const result = md.render('::: npm-to\n```sh\nnpm r react\n```\n:::')
    expect(result).toContain('code-group')
  })
})

// =============================================================================
// parseLine 单元测试
// =============================================================================
describe('parseLine', () => {
  it('解析 npm install 命令', () => {
    const result = parseLine('npm install react')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm')
    }
  })

  it('解析 npx 命令', () => {
    const result = parseLine('npx eslint .')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toBe('npx')
    }
  })

  it('解析带环境变量的命令', () => {
    const result = parseLine('NODE_ENV=production npm run build')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.env).toContain('NODE_ENV=production')
    }
  })

  it('pnpm 被解析为 env="p" + npm cli', () => {
    const result = parseLine('pnpm install react')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.env).toBe('p')
      expect(result.cli).toContain('npm install')
    }
  })

  it('npm install -D', () => {
    const result = parseLine('npm install -D react')
    expect(result).not.toBe(false)
  })

  it('npx 无参数', () => {
    const result = parseLine('npx some-tool')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cmd).toBe('some-tool')
    }
  })

  // ---- 额外 parseLine 边界测试 ----
  it('非 npm/npx 命令返回 false', () => {
    const result = parseLine('echo hello')
    expect(result).toBe(false)
  })

  it('npm install 无包名', () => {
    const result = parseLine('npm install')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toBe('npm install')
    }
  })

  it('npm run 带脚本参数 --', () => {
    const result = parseLine('npm run build -- --mode production')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm run')
      expect(result.cmd).toBe('build')
      expect(result.scriptArgs).toContain('--mode production')
    }
  })

  it('npm install 带作用域包名', () => {
    const result = parseLine('npm install @scope/package')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
      expect(result.args || result.cmd).toBeDefined()
    }
  })

  it('npm run 带 workspace 标志', () => {
    const result = parseLine('npm run -w my-workspace build')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm run')
      expect(result.cmd).toBe('build')
    }
  })

  it('npm install --save-exact react', () => {
    const result = parseLine('npm install --save-exact react')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
    }
  })

  it('npm run build — 仅脚本名无额外参数', () => {
    const result = parseLine('npm run build')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm run')
      expect(result.cmd).toBe('build')
    }
  })

  it('npm install 带多个包', () => {
    const result = parseLine('npm install react vue')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
    }
  })

  it('npx 带参数', () => {
    const result = parseLine('npx create-react-app my-app --template typescript')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toBe('npx')
      expect(result.cmd).toBe('create-react-app')
      expect(result.scriptArgs).toContain('my-app --template typescript')
    }
  })

  it('npm add 命令', () => {
    // npm add 也匹配 add pattern
    const result = parseLine('npm add react')
    expect(result).not.toBe(false)
  })

  it('npm run-script build', () => {
    const result = parseLine('npm run-script build')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm run-script')
      expect(result.cmd).toBe('build')
    }
  })

  // ---- parseLine — 触发 parseArgs 内部分支 ----
  it('npm run 带引号脚本名', () => {
    const result = parseLine('npm run "build:prod"')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm run')
      expect(result.cmd).toContain('build:prod')
    }
  })

  it('npm install 带引号包名', () => {
    const result = parseLine('npm install "my-package"')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
    }
  })

  it('npm install 带单引号包名', () => {
    const result = parseLine('npm install \'my-package\'')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
    }
  })

  it('npm install -D 带引号参数', () => {
    const result = parseLine('npm install -D "quoted pkg" @scope/pkg')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
    }
  })

  it('npm install --save-dev react lodash', () => {
    const result = parseLine('npm install --save-dev react lodash')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
    }
  })

  it('npm init 无额外参数', () => {
    const result = parseLine('npm init')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm init')
    }
  })

  it('npm install -g react', () => {
    const result = parseLine('npm install -g react')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm install')
    }
  })

  it('npm run build --mode prod (命令后带标志)', () => {
    const result = parseLine('npm run build --mode prod')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm run')
      expect(result.cmd).toBe('build')
    }
  })

  it('npm add 带版本号', () => {
    const result = parseLine('npm add react@18.0.0')
    expect(result).not.toBe(false)
    if (result) {
      expect(result.cli).toContain('npm add')
    }
  })
})

// =============================================================================
// npmTo 插件工厂测试
// =============================================================================
describe('npmTo 插件工厂', () => {
  it('name 为 vitepress-plugin-npm-to', () => {
    const plugin = npmTo() as any
    expect(plugin.name).toBe('vitepress-plugin-npm-to')
  })

  it('markdown.config 为函数', () => {
    const plugin = npmTo() as any
    expect(typeof plugin.markdown?.config).toBe('function')
  })

  it('markdown.config 可注册 markdown-it 规则', () => {
    const plugin = npmTo() as any
    const md = new MarkdownIt()
    plugin.markdown.config(md)
    const result = md.render('::: npm-to\n```sh\nnpm install react\n```\n:::')
    expect(result).toContain('code-group')
  })

  it('支持传入数组选项', () => {
    const plugin = npmTo(['npm', 'pnpm']) as any
    expect(plugin.name).toBe('vitepress-plugin-npm-to')
  })

  it('支持传入对象选项', () => {
    const plugin = npmTo({ tabs: ['npm', 'yarn'] }) as any
    expect(plugin.name).toBe('vitepress-plugin-npm-to')
  })

  it('不传选项正常工作', () => {
    const plugin = npmTo() as any
    expect(plugin.name).toBe('vitepress-plugin-npm-to')
  })
})
