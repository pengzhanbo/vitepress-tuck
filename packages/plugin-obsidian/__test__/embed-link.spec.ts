import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { embedLinkMarkdownPlugin } from '../src/embedLink'

// fixtures 目录路径，用于测试块级 markdown 文件嵌入
const fixturesDir = path.join(__dirname, 'fixtures')

let previousVitepressConfig: unknown

// embedLink 的 else 分支会调用 findFirstFile，
// 后者依赖 globalThis.VITEPRESS_CONFIG，需在 beforeAll 中设置
beforeAll(() => {
  previousVitepressConfig = (globalThis as any).VITEPRESS_CONFIG
  ;(globalThis as any).VITEPRESS_CONFIG = {
    srcDir: __dirname,
    root: __dirname,
    userConfig: { locales: {} },
  }
})

afterAll(() => {
  if (previousVitepressConfig === undefined) {
    delete (globalThis as any).VITEPRESS_CONFIG
  }
  else {
    (globalThis as any).VITEPRESS_CONFIG = previousVitepressConfig
  }
})

describe('embedLinkMarkdownPlugin', () => {
  // 图片嵌入 ![[image.png]] 渲染为 <img>
  it('should render image embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[image.png]]', { relativePath: 'index.md' })
    expect(result).toContain('<img')
    expect(result).toContain('src="/image.png"')
  })

  // 图片带尺寸 ![[image.png|300x200]]
  it('should render image embed with size', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[image.png|300x200]]', { relativePath: 'index.md' })
    expect(result).toContain('<img')
    expect(result).toContain('src="/image.png"')
    expect(result).toContain('width: 300px')
    expect(result).toContain('height: 200px')
  })

  // 音频嵌入 ![[audio.mp3]] 渲染为 <audio>（.mp3 在 audio 和 video 扩展名中均有，audio 优先）
  it('should render audio embed for mp3', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[audio.mp3]]', { relativePath: 'index.md' })
    expect(result).toContain('<audio')
    expect(result).toContain('src="/audio.mp3"')
    expect(result).not.toContain('VPArtPlayer')
  })

  // PDF 嵌入 ![[doc.pdf]] 渲染为 <VPPdf>
  it('should render PDF embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[doc.pdf]]', { relativePath: 'index.md' })
    expect(result).toContain('<VPPdf')
    expect(result).toContain('src="/doc.pdf"')
    expect(result).toContain('width="100%"')
  })

  // HTTP 外部资源 ![[https://example.com/data.json]] 渲染为 <a> 含 target="_blank"
  it('should render HTTP external resource as link', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[https://example.com/data.json]]', { relativePath: 'index.md' })
    expect(result).toContain('<a')
    expect(result).toContain('href="https://example.com/data.json"')
    expect(result).toContain('target="_blank"')
    expect(result).toContain('rel="noopener noreferrer"')
  })

  // 不支持的扩展名 ![[file.xyz]] 渲染为链接
  it('should render unsupported extension as link', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[file.xyz]]', { relativePath: 'index.md' })
    expect(result).toContain('<a')
    expect(result).toContain('href="file.xyz"')
    expect(result).toContain('target="_blank"')
  })

  // 空 ![[ ]] 不匹配（长度不足）
  it('should not match empty embed link', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[]]', { relativePath: 'index.md' })
    expect(result).not.toContain('<img')
    expect(result).not.toContain('<audio')
    expect(result).not.toContain('<VPPdf')
  })

  // 视频嵌入 ![[video.mp4]] 渲染为 VPArtPlayer
  it('should render video embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[video.mp4]]', { relativePath: 'index.md' })
    expect(result).toContain('VPArtPlayer')
    expect(result).toContain('src="/video.mp4"')
    expect(result).toContain('type="mp4"')
  })

  // 行内嵌入：文本中的 ![[image.png]] 也应渲染为图片
  it('should render inline image embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('text ![[image.png]] more', { relativePath: 'index.md' })
    expect(result).toContain('<img')
    expect(result).toContain('src="/image.png"')
  })

  // .md 文件嵌入但无匹配内部文件时渲染为链接
  it('should render md file as link when no match', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[guide.md]]', { relativePath: 'index.md' })
    expect(result).toContain('<a')
    expect(result).toContain('href="guide.md"')
  })

  // 不传 options 时触发 loadFiles() 回退（依赖 VITEPRESS_CONFIG）
  it('should work without options by calling loadFiles', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin)

    const result = md.render('![[image.png]]', { relativePath: 'index.md' })
    expect(result).toContain('<img')
  })

  // 绝对路径图片：src 原样返回
  it('should keep absolute path for image', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[/images/test.png]]', { relativePath: 'index.md' })
    expect(result).toContain('<img')
    expect(result).toContain('src="/images/test.png"')
  })

  // 相对路径图片：src 原样返回
  it('should keep relative path for image', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[./image.png]]', { relativePath: 'index.md' })
    expect(result).toContain('<img')
    expect(result).toContain('src="./image.png"')
  })

  // 行内嵌入无闭合 ]] 时不匹配（覆盖 inline 规则的 found=false 分支）
  it('should not match inline embed without closing brackets', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('text ![[image.png more', { relativePath: 'index.md' })
    // 未匹配时原样输出
    expect(result).toContain('![[image.png')
  })

  // PDF 带 hash 属性 ![[doc.pdf#page=1#height=300]]
  it('should render PDF embed with hash attributes', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[doc.pdf#page=1#height=300]]', { relativePath: 'index.md' })
    expect(result).toContain('<VPPdf')
    expect(result).toContain('page="1"')
    expect(result).toContain('height="300"')
  })

  // 图片只设宽度 ![[image.png|300]]
  it('should render image embed with width only', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[image.png|300]]', { relativePath: 'index.md' })
    expect(result).toContain('<img')
    expect(result).toContain('width: 300px')
    expect(result).not.toContain('height')
  })

  // 图片带尺寸 ![[image.png|300x200]]，验证 style 含 width 和 height
  it('should render image embed with width and height in style', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[image.png|300x200]]', { relativePath: 'index.md' })
    expect(result).toContain('<img')
    expect(result).toContain('width: 300px')
    expect(result).toContain('height: 200px')
  })
})

// 块级 markdown 文件嵌入相关测试
describe('embedLinkMarkdownPlugin - block markdown embed', () => {
  // 块级 markdown 文件嵌入：![[guide]] 展开文件内容
  it('should embed markdown file content for block embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['guide.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('![[guide]]', env)
    // 嵌入的内容应出现在输出中
    expect(result).toContain('This is the guide content')
    expect(result).toContain('Welcome to the introduction section')
    expect(result).toContain('Advanced content')
  })

  // 块级 markdown 带标题提取：![[guide#Introduction]] 只提取 Introduction 部分
  it('should extract content by heading for block embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['guide.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('![[guide#Introduction]]', env)
    // 只包含 Introduction 部分的内容
    expect(result).toContain('Welcome to the introduction section')
    // 不包含 Advanced 部分的内容
    expect(result).not.toContain('Advanced content')
    // 不包含 Guide 标题下的初始内容
    expect(result).not.toContain('This is the guide content')
  })

  // 块级 markdown 带多级标题：![[guide#Introduction#Details]]
  it('should extract content by multiple heading levels for block embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['guide.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('![[guide#Introduction#Details]]', env)
    // 只包含 Details 部分的内容
    expect(result).toContain('More details here')
    expect(result).not.toContain('Welcome to the introduction section')
    expect(result).not.toContain('Advanced content')
  })

  // 块级 markdown 标题不存在时调用 console.warn
  it('should warn when heading not found in block embed', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['guide.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const result = md.render('![[guide#NonExistent]]', env)
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('No heading found'))
    // 未找到标题时返回空内容，不嵌入
    expect(result).not.toContain('This is the guide content')
    warnSpy.mockRestore()
  })

  // 块级 markdown 文件不存在时渲染为普通链接
  it('should render as link when markdown file not found', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: [] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('![[nonexistent]]', env)
    expect(result).toContain('<a')
    expect(result).toContain('href="nonexistent"')
  })

  // 块级 markdown 文件读取失败时调用 console.warn
  it('should warn when file cannot be read', () => {
    const md = new MarkdownIt()
    // root 指向不存在的路径，但 files 包含匹配的文件名
    md.use(embedLinkMarkdownPlugin, { root: '/nonexistent/path', files: ['guide.md'] })

    const env = { path: '/nonexistent/path/index.md', relativePath: 'index.md' }
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const result = md.render('![[guide]]', env)
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('can not read file'))
    expect(result).not.toContain('This is the guide content')
    warnSpy.mockRestore()
  })

  // 空内容文件（只有 frontmatter）时调用 console.warn
  it('should warn when file content is empty after stripping frontmatter', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['empty.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const result = md.render('![[empty]]', env)
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('is empty'))
    expect(result).not.toContain('title: Empty')
    warnSpy.mockRestore()
  })

  // 行内 markdown 文件嵌入：渲染为链接而非展开内容（isInline=true 路径）
  it('should render inline markdown embed as link', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['guide.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('text ![[guide]] more', env)
    // 行内应渲染为链接而非展开内容
    expect(result).toContain('<a')
    expect(result).toContain('href="guide.md"')
    expect(result).not.toContain('This is the guide content')
  })

  // 行内 markdown 带别名：![[guide|指南]]
  it('should render inline markdown embed with alias', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['guide.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('text ![[guide|指南]] more', env)
    expect(result).toContain('<a')
    expect(result).toContain('href="guide.md"')
    expect(result).toContain('>指南</a>')
  })

  // 行内 markdown 带标题：![[guide#Introduction]]
  it('should render inline markdown embed with heading anchor', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['guide.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('text ![[guide#Introduction]] more', env)
    expect(result).toContain('<a')
    expect(result).toContain('href="guide.md#introduction"')
    expect(result).toContain('guide &gt; Introduction')
  })

  // 块级嵌入 with-container.md 验证容器内容被正确处理
  it('should handle container blocks in extractContentByHeadings', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['with-container.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    const result = md.render('![[with-container#Section A]]', env)
    // 容器内的标题不应干扰标题提取
    expect(result).toContain('Content A')
  })

  // 多级标题匹配中遇到同级标题重置匹配（覆盖 reset 分支）
  it('should reset heading match when encountering same-level heading', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['headings.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    // 搜索 Introduction#SubD 不存在，扫描中遇到 Other 同级标题会重置
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    md.render('![[headings#Introduction#SubD]]', env)
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining('No heading found'))
    warnSpy.mockRestore()
  })

  // 多级标题匹配中遇到同名同级标题重启匹配（覆盖 restart 分支）
  it('should restart heading match when encountering same heading at same level', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: ['headings.md'] })

    const env = { path: path.join(fixturesDir, 'index.md'), relativePath: 'index.md' }
    // 第一次 Introduction#SubA 不匹配 SubB，但第二次 Introduction#SubB 匹配
    const result = md.render('![[headings#Introduction#SubB]]', env)
    expect(result).toContain('SubB content')
  })
})

// resolveFilenameToAssetPath 函数的覆盖测试
// 该函数通过图片/音频/视频/PDF 的 src 属性间接调用
describe('embedLinkMarkdownPlugin - resolveFilenameToAssetPath', () => {
  // HTTP 链接原样返回
  it('should return HTTP url as-is for image', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[https://example.com/img.png]]', { relativePath: 'index.md' })
    expect(result).toContain('src="https://example.com/img.png"')
  })

  // 以 . 开头的路径原样返回
  it('should return dot-prefixed path as-is for image', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[./img.png]]', { relativePath: 'index.md' })
    expect(result).toContain('src="./img.png"')
  })

  // 以 / 开头的路径原样返回
  it('should return slash-prefixed path as-is for image', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[/img.png]]', { relativePath: 'index.md' })
    expect(result).toContain('src="/img.png"')
  })

  // 无 root/relativePath 时返回 /filename
  it('should return /filename when root or relativePath missing', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: '', files: [] })

    // 不传 relativePath
    const result = md.render('![[img.png]]', {})
    expect(result).toContain('src="/img.png"')
  })

  // 文件存在于 root 时返回相对路径（用 fixtures 中的真实图片文件）
  it('should return relative path when file exists in root', () => {
    const md = new MarkdownIt()
    // root 为 fixtures 目录，image.png 确实存在
    md.use(embedLinkMarkdownPlugin, { root: fixturesDir, files: [] })

    const result = md.render('![[image.png]]', { relativePath: 'index.md' })
    // image.png 存在于 root，resolveFilenameToAssetPath 返回 ./image.png
    expect(result).toContain('src="./image.png"')
  })

  // 文件存在于当前目录时返回相对路径
  it('should return relative path when file exists in current directory', () => {
    const md = new MarkdownIt()
    // root 指向 __dirname，relativePath 指向 fixtures 目录
    // image.png 在 fixtures/ 目录下
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[image.png]]', { relativePath: 'fixtures/index.md' })
    // path.join(dirname, 'image.png') = fixtures/image.png 存在
    expect(result).toContain('src="./image.png"')
  })

  // 文件不存在时返回 /filename
  it('should return /filename when file does not exist', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[nonexistent.png]]', { relativePath: 'index.md' })
    expect(result).toContain('src="/nonexistent.png"')
  })

  // ---- 额外覆盖 ----
  // 行内嵌入仅含 ![[ 未闭合（覆盖 inline 的 found=false 且 no closing brackets 分支）
  it('should not match inline embed with only opening brackets', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('text ![[abc more text', { relativePath: 'index.md' })
    // 没有闭合 ]]，不匹配，原样输出
    expect(result).toContain('![[abc')
  })

  // 块级行过短无法匹配（覆盖 max - start < 5 分支）
  it('should not match block embed line that is too short', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    // 行内容过短（少于 5 字符）
    const result = md.render('![\n[\n', { relativePath: 'index.md' })
    expect(result).not.toContain('<img')
    expect(result).not.toContain('<VPPdf')
  })

  // 块级行不以 ]] 结尾：block rule 返回 false，但 inline rule 仍可匹配
  it('should fall through to inline rule when block line does not end with ]]', () => {
    const md = new MarkdownIt()
    md.use(embedLinkMarkdownPlugin, { root: __dirname, files: [] })

    const result = md.render('![[image.png]] extra\n', { relativePath: 'index.md' })
    // block rule 对 trimmed line 不匹配(不以 ]] 结尾)，但 inline rule 仍匹配并渲染
    expect(result).toContain('<img')
    expect(result).toContain('extra')
  })
})
