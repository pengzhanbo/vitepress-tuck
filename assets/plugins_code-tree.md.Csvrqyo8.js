import{F as e,Y as t,c as n,d as r,g as i,h as a,j as o,m as s,t as c}from"./chunks/plugin-vue_export-helper.vJjyT6FU.js";import{t as l}from"./chunks/NpmBadge.K4AjvmRQ.js";import{i as u}from"./chunks/browser.Bw3nazFb.js";import{t as d}from"./chunks/browser.-aJ5TFBJ.js";var f=JSON.parse(`{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/code-tree.md","filePath":"en/plugins/code-tree.md","lastUpdated":1782066503000}`),p={name:`plugins/code-tree.md`},m={id:`vitepress-tuck-mode-recommended`,tabindex:`-1`};function h(c,f,p,h,g,_){let v=e(`CopyOrDownloadAsMarkdownButtons`),y=l,b=e(`Badge`),x=u,S=d;return o(),r(`div`,null,[f[34]||=n(`div`,{style:{display:`none`},hidden:`true`,"aria-hidden":`true`,"data-nosnippet":``},`Are you an LLM? You can read better optimized documentation at /pluginscode-tree.md for this page in Markdown format`,-1),f[35]||=n(`h1`,{id:`code-tree`,tabindex:`-1`},[a(`Code Tree `),n(`a`,{class:`header-anchor`,href:`#code-tree`,"aria-label":`Permalink to “Code Tree”`},`​`)],-1),i(v),i(y,{name:`vitepress-plugin-code-tree`}),f[36]||=s(`<p>Code tree plugin for rendering code structures with a file tree sidebar in Markdown, supporting file switching.</p><p>This plugin depends on the <a href="./file-tree">File Tree</a> plugin for the file tree sidebar components.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to “Installation”">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-0" id="tab-16-1" checked><label data-title="pnpm" for="tab-16-1">pnpm</label><input type="radio" name="group-0" id="tab-16-2"><label data-title="npm" for="tab-16-2">npm</label><input type="radio" name="group-0" id="tab-16-3"><label data-title="bun" for="tab-16-3">bun</label><input type="radio" name="group-0" id="tab-16-4"><label data-title="deno" for="tab-16-4">deno</label><input type="radio" name="group-0" id="tab-16-5"><label data-title="yarn" for="tab-16-5">yarn</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to “Usage”">​</a></h2>`,5),n(`h3`,m,[f[1]||=a(`vitepress-tuck Mode `,-1),i(b,{type:`tip`},{default:t(()=>[...f[0]||=[a(`Recommended`,-1)]]),_:1}),f[2]||=a(),f[3]||=n(`a`,{class:`header-anchor`,href:`#vitepress-tuck-mode-recommended`,"aria-label":`Permalink to “vitepress-tuck Mode Recommended”`},`​`,-1)]),f[37]||=s(`<div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-tuck&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">codeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><p><a href="./../guide/quick-start" class="readmore">Learn more about <strong>vitepress-tuck</strong></a></p><h3 id="native-mode" tabindex="-1">Native Mode <a class="header-anchor" href="#native-mode" aria-label="Permalink to “Native Mode”">​</a></h3><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { codeTreeMarkdownPlugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      md.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(codeTreeMarkdownPlugin)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/theme/index.ts">.vitepress/theme/index.ts</span></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Theme } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { enhanceAppWithCodeTree } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree/client&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    enhanceAppWithCodeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">satisfies</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Theme</span></span></code></pre></div></div><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to “Syntax”">​</a></h2><p>The plugin provides two syntaxes to render a code tree: a container syntax for inline file content, and an embed syntax to load files from a directory.</p><h3 id="container-syntax" tabindex="-1">Container Syntax <a class="header-anchor" href="#container-syntax" aria-label="Permalink to “Container Syntax”">​</a></h3><p>Use the <code>::: code-tree</code> container with fenced code blocks inside. Each fence must declare a filename via the <code>[filename]</code> syntax in its info string.</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree title=&quot;Project Structure&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`rs [main.rs]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h4 id="container-attributes" tabindex="-1">Container Attributes <a class="header-anchor" href="#container-attributes" aria-label="Permalink to “Container Attributes”">​</a></h4><table tabindex="0"><thead><tr><th>Attribute</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Code tree title</td><td>-</td></tr><tr><td><code>height</code></td><td>Code tree container height</td><td><code>420px</code></td></tr><tr><td><code>entry</code></td><td>Entry file, opened by default</td><td>-</td></tr><tr><td><code>show-sidebar</code></td><td>Show sidebar by default</td><td><code>false</code></td></tr></tbody></table><h4 id="active-file" tabindex="-1">Active File <a class="header-anchor" href="#active-file" aria-label="Permalink to “Active File”">​</a></h4><p>Add <code>:active</code> to a fence&#39;s info string to mark it as the default active file:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts] :active</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [utils.ts]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> noop</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h3 id="embed-syntax" tabindex="-1">Embed Syntax <a class="header-anchor" href="#embed-syntax" aria-label="Permalink to “Embed Syntax”">​</a></h3><p>Use <code>@[code-tree](dir)</code> to embed a directory as a code tree. Files in the directory are loaded and rendered automatically.</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The <code>dir</code> supports the following prefixes:</p><table tabindex="0"><thead><tr><th>Prefix</th><th>Description</th></tr></thead><tbody><tr><td><code>@</code></td><td>Relative to VitePress <code>srcDir</code></td></tr><tr><td><code>/</code></td><td>Relative to VitePress project root</td></tr><tr><td>-</td><td>Relative to the current markdown file&#39;s directory</td></tr></tbody></table><h4 id="embed-attributes" tabindex="-1">Embed Attributes <a class="header-anchor" href="#embed-attributes" aria-label="Permalink to “Embed Attributes”">​</a></h4><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;Source&quot; height=&quot;500px&quot; entry=&quot;index.ts&quot; show-sidebar=true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to “Configuration”">​</a></h2><h3 id="codetreepluginoptions" tabindex="-1">CodeTreePluginOptions <a class="header-anchor" href="#codetreepluginoptions" aria-label="Permalink to “CodeTreePluginOptions”">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeTreePluginOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Default code tree container height</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">420px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  height</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Glob patterns to ignore files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Applied when loading files from a directory via the embed syntax</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * node_modules and .DS_Store are always ignored</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  ignores</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * File loaders</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Used to load resource files when embedding a directory with \`@[code-tree](dir)\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * Custom loaders are merged before the built-in ones, so they take precedence</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  loaders</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeTreeFileLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="file-loaders" tabindex="-1">File Loaders <a class="header-anchor" href="#file-loaders" aria-label="Permalink to “File Loaders”">​</a></h3><p>Loaders are used by the embed syntax to load file content. The plugin ships with built-in loaders for common file types, and custom loaders are merged before the built-in ones, so they take precedence.</p><p>Built-in loaders cover the following file types:</p><ul><li>Dot files (<code>.git*</code>, <code>.env*</code>, <code>.*ignore</code>, <code>.npmrc</code>): Rendered as plain text</li><li><code>.XXXrc</code> config files (e.g. <code>.eslintrc</code>): Rendered as JSON</li><li>Image files: Rendered as <code>&lt;img&gt;</code> tags with proper <code>src</code> resolution</li><li>Source files supported by Shiki: Rendered as fenced code blocks with syntax highlighting</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree, { loadCodeContent } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-tuck&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    codeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;500px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ignores: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;**/*.test.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loaders: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          filter: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;**/*.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadCodeContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>The <code>filter</code> field accepts a glob pattern string, an array of glob patterns, or a predicate function that receives a <code>CodeTreeFile</code> and returns a boolean.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to “Example”">​</a></h2><h3 id="container-syntax-1" tabindex="-1">Container Syntax <a class="header-anchor" href="#container-syntax-1" aria-label="Permalink to “Container Syntax”">​</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::code-tree title=&quot;Code Tree&quot; show-sidebar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`rs [main.rs]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div>`,34),i(S,{title:`Code Tree`,"entry-file":`index.ts`,"show-sidebar":``},{"file-tree":t(()=>[i(x,{filename:`index.ts`,level:1,type:`file`,expanded:``,filepath:`index.ts`}),i(x,{filename:`main.rs`,level:1,type:`file`,expanded:``,filepath:`main.rs`})]),default:t(()=>[f[4]||=n(`div`,{"data-filepath":`index.ts`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`index.ts`},`index.ts`)]),n(`div`,{class:`language-ts`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`ts`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)])])])])],-1),f[5]||=n(`div`,{"data-filepath":`main.rs`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`main.rs`},`main.rs`)]),n(`div`,{class:`language-rs`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`rs`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`fn`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` main`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`() {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    println!`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"Hello, world!"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`);`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)])])])])],-1)]),_:1}),f[38]||=s(`<h3 id="embed-syntax-1" tabindex="-1">Embed Syntax <a class="header-anchor" href="#embed-syntax-1" aria-label="Permalink to “Embed Syntax”">​</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;Code Tree&quot; show-sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">@/en</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,2),i(S,{title:`Code Tree`,"entry-file":`guide/api.md`,"show-sidebar":``},{"file-tree":t(()=>[i(x,{filename:`guide`,level:1,type:`folder`,expanded:``},{default:t(()=>[i(x,{filename:`api.md`,level:2,type:`file`,expanded:``,filepath:`guide/api.md`}),i(x,{filename:`plugin-dev.md`,level:2,type:`file`,expanded:``,filepath:`guide/plugin-dev.md`}),i(x,{filename:`quick-start.md`,level:2,type:`file`,expanded:``,filepath:`guide/quick-start.md`}),i(x,{filename:`toolkit.md`,level:2,type:`file`,expanded:``,filepath:`guide/toolkit.md`}),i(x,{filename:`wrap-plugin.md`,level:2,type:`file`,expanded:``,filepath:`guide/wrap-plugin.md`})]),_:1}),i(x,{filename:`plugins`,level:1,type:`folder`,expanded:``},{default:t(()=>[i(x,{filename:`abbr.md`,level:2,type:`file`,expanded:``,filepath:`plugins/abbr.md`}),i(x,{filename:`annotation.md`,level:2,type:`file`,expanded:``,filepath:`plugins/annotation.md`}),i(x,{filename:`caniuse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/caniuse.md`}),i(x,{filename:`code-collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-collapse.md`}),i(x,{filename:`code-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-tree.md`}),i(x,{filename:`codepen.md`,level:2,type:`file`,expanded:``,filepath:`plugins/codepen.md`}),i(x,{filename:`collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/collapse.md`}),i(x,{filename:`field.md`,level:2,type:`file`,expanded:``,filepath:`plugins/field.md`}),i(x,{filename:`file-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/file-tree.md`}),i(x,{filename:`intro.md`,level:2,type:`file`,expanded:``,filepath:`plugins/intro.md`}),i(x,{filename:`jsfiddle.md`,level:2,type:`file`,expanded:``,filepath:`plugins/jsfiddle.md`}),i(x,{filename:`mermaid.md`,level:2,type:`file`,expanded:``,filepath:`plugins/mermaid.md`}),i(x,{filename:`npm-to.md`,level:2,type:`file`,expanded:``,filepath:`plugins/npm-to.md`}),i(x,{filename:`obsidian.md`,level:2,type:`file`,expanded:``,filepath:`plugins/obsidian.md`}),i(x,{filename:`pdf.md`,level:2,type:`file`,expanded:``,filepath:`plugins/pdf.md`}),i(x,{filename:`plantuml.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plantuml.md`}),i(x,{filename:`plot.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plot.md`}),i(x,{filename:`qrcode.md`,level:2,type:`file`,expanded:``,filepath:`plugins/qrcode.md`}),i(x,{filename:`repo-card.md`,level:2,type:`file`,expanded:``,filepath:`plugins/repo-card.md`}),i(x,{filename:`steps.md`,level:2,type:`file`,expanded:``,filepath:`plugins/steps.md`}),i(x,{filename:`video.md`,level:2,type:`file`,expanded:``,filepath:`plugins/video.md`}),i(x,{filename:`watermark.md`,level:2,type:`file`,expanded:``,filepath:`plugins/watermark.md`})]),_:1}),i(x,{filename:`index.md`,level:1,type:`file`,expanded:``,filepath:`index.md`})]),default:t(()=>[f[6]||=n(`div`,{"data-filepath":`guide/api.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/api.md`},`guide/api.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# API Reference`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-tuck" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## vitepress-tuck`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### defineConfig`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` is the core function of `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, used as a replacement for VitePress's `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`function`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`ThemeConfig`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` DefaultTheme`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`Config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  config`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` UserConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`NoInfer`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`ThemeConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`&`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` TuckConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` UserConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`NoInfer`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`ThemeConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Parameters`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Parameter | Type                      | Description                                  |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------- | ------------------------- | -------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`config`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig & TuckConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | VitePress original config + `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`TuckConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` definition:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` TuckConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * vitepress plugin list`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  plugins`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` VitepressPlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Options for the unplugin-vue-components plugin.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   *`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@see`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` -`),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},` https://github.com/unplugin/unplugin-vue-components`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  components`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` ComponentsOptions`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Return Value`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Returns the merged and complete VitePress `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` object.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### How It Works`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`1.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Iterates through the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` array, merging each plugin's `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`markdown`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vite`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vue`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` and other configurations.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`2.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Collects all hooks (`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`buildEnd`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformHead`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformHtml`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformPageData`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`postRender`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   and merges them according to their respective strategies:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`   -`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `markdown.config`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`buildEnd`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` → concurrent execution`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`   -`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `transformHead`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` → concurrent execution with result merging`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`   -`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `transformHtml`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformPageData`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`postRender`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` → sequential execution, chained`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`3.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Injects the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` configuration from plugins into the built-in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`virtual-enhance-app`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` virtual module.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`4.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Collects `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`componentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` declarations from plugins into the built-in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`unplugin-vue-components`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` resolver list.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`5.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Finally merges the user's own configuration.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### definePlugin`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Used to define VitePress plugins. It is a type helper function that helps developers create plugins in a standardized way.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`function`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`T`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  plugin`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`option`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` T`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` VitepressPlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`option`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` T`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` VitepressPlugin`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Parameters`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Parameter | Type                              | Description                                                                 |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------- | --------------------------------- | --------------------------------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`(option?: T) => VitepressPlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Plugin factory function, receives optional options, returns a plugin object |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### VitepressPlugin`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Type definition for plugin objects:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` VitepressPlugin`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` extends`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Pick`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  UserConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`  'markdown'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vite'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vue'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'buildEnd'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'transformHead'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'transformHtml'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'transformPageData'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'postRender'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Plugin name (required, for identification and debugging)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  name`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Client configuration, automatically injected into virtual:enhance-app`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  client`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * Custom import statement list`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     *`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@example`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"     * ```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * imports: ['import "my-plugin/style.css"']`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"     * ```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    imports`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * Client-side enhance function name.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * - Not set: no enhanceApp function is injected`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"     * - true: default function name is `enhanceApp`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * - string: the specified function name`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     *`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@example`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"     * ```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     * enhance: 'enhanceAppWithMyPlugin'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"     * ```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`     */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    enhance`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` boolean`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Component resolvers for unplugin-vue-components auto-import.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   *`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"   * - String array: declared component names are resolved from `<plugin-name>/client`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * - ComponentResolver object: custom resolve logic`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   *`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@example`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"   * ```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   *`),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},` // Simple form`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * componentResolver: ['MyComponent', 'OtherComponent']`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"   * ```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  componentResolver`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[] `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`|`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` ComponentResolver`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Supported VitePress Configuration Options`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Property            | Type                              | Description                                                                                          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`markdown`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['markdown']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | Markdown-related configuration, commonly used with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`markdown.config`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to register markdown-it plugins |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vite`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['vite']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              | Vite configuration, for registering Vite plugins and optimization options                            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vue`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`               | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['vue']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`               | Vue application-level configuration                                                                  |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`buildEnd`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['buildEnd']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | Build completion hook (concurrent)                                                                   |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformHead`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['transformHead']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | HTML head transform hook (concurrent, results merged)                                                |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformHtml`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['transformHtml']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | HTML content transform hook (sequential, chained)                                                    |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformPageData`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['transformPageData']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Page data transform hook (sequential, chained)                                                       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`postRender`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`UserConfig['postRender']`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Post-render hook (sequential, chained)                                                               |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### virtual:enhance-app`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`virtual:enhance-app`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` is a virtual module provided by `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It automatically collects all plugins' `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` configurations and generates the corresponding code.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Import it in the theme entry:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` enhanceApp `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'virtual:enhance-app'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`TypeScript support requires adding the type reference:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [tsconfig.json]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`  "compilerOptions"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`    "types"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck/client-types"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Built-in Plugin: auto-components`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` integrates [`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#79B8FF`,"--shiki-dark-text-decoration":`underline`}},"`unplugin-vue-components`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://github.com/unplugin/unplugin-vue-components`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) as`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`a built-in plugin, providing automatic on-demand component importing. This plugin is enabled by default — no manual registration required.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Default Behavior`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Scans `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vue`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` and `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.md`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` files for component usage`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Generates type declarations at `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`node_modules/.vite/components.d.ts`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Automatically collects `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`componentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` declarations from all plugins`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Custom Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Customize `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`unplugin-vue-components`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` behavior via the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`components`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  components: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    // Custom scan directories`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    dirs: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'src/components'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    // Use directory as namespace`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    directoryAsNamespace: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    // Other unplugin-vue-components options...`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Plugin `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`componentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` declarations are merged with the user's `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`components`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` configuration.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Plugin developers only need to declare `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`componentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` in their plugin,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and users can use the corresponding components directly in Markdown or Vue files without manual imports.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[7]||=n(`div`,{"data-filepath":`guide/plugin-dev.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/plugin-dev.md`},`guide/plugin-dev.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plugin Development`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-tuck" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` provides the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` function to help developers easily create VitePress plugins.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`With `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, you can centralize options like `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`markdown`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vite`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, and `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vue`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — which would`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`otherwise require scattered configuration by users — into a single plugin function.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Basic Structure`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A plugin based on `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` consists of the following parts:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`options`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyPluginOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  // Client configuration: auto-injected into virtual:enhance-app`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'enhanceAppWithMyPlugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  // Component resolver: declare plugin components for auto on-demand import`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'MyComponent'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'OtherComponent'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  // Markdown configuration: register markdown-it plugins`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownPlugin, options?.markdownOptions)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  // Vite configuration`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options?.viteOptions)],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  // Other VitePress hooks`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  buildEnd`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`site`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`/* ... */`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  transformHead`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`/* ... */`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  transformHtml`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`code`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`id`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`/* ... */`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  transformPageData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`pageData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`/* ... */`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  postRender`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`context`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`/* ... */`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Core Concepts`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### name`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Each plugin must have a unique `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`name`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` for identification and debugging:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### client`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` configuration is used to inject code into the client side. `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` automatically`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`injects this code into the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`virtual:enhance-app`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` virtual module.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### client.imports`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Add custom import statements, commonly used for importing style files:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  client`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    imports`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      'import "vitepress-plugin-my-plugin/style.css"'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### client.enhance`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Specifies the client-side enhance function name. This function will be called within the VitePress theme's `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`enhanceApp(ctx)`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` When set to `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`true`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, the default function name is `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`enhanceApp`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` When set to a string, that string is the function name`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  client`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhance`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'enhanceAppWithMyPlugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Correspondingly, export a function with the same name in the plugin's client entry file:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// client/index.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { EnhanceAppContext } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` function`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` enhanceAppWithMyPlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ `),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`app`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` }`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` EnhanceAppContext`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  // Register components, directives, etc.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`component`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'MyComponent'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, MyComponent)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### componentResolver`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`componentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` declares the Vue components a plugin provides, enabling automatic on-demand import via`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`the built-in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`unplugin-vue-components`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`. Users can use component names directly in Markdown or Vue files without manual imports.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### String Array Form`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The simplest form is an array of component names — they are resolved from `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`<plugin-name>/client`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  componentResolver`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'MyComponent'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'OtherComponent'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Correspondingly, export these components in the plugin's client entry:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// client/index.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` MyComponent `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './components/MyComponent.vue'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` OtherComponent `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './components/OtherComponent.vue'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { MyComponent, OtherComponent }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Custom ComponentResolver`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`For more complex resolution logic, pass a `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ComponentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` object from `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`unplugin-vue-components`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { ComponentResolver } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'unplugin-vue-components'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` myResolver`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` ComponentResolver`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'component'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  resolve`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`    if`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (name.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`startsWith`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'My'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`      return`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { name, from: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin/client'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: myResolver,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`When a plugin uses both `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client.enhance`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` for component registration and `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`componentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`prefer `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`componentResolver`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` for on-demand importing to reduce unnecessary component bundling.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### markdown`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Configure markdown-it plugins to extend Markdown syntax:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  markdown`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // Register custom containers`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(containerPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // Register inline rules`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.inline.ruler.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`before`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'emphasis'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'my_rule'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, myRule)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vite`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Configure Vite plugins and optimization options:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  vite`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    plugins`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    ssr`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`      noExternal`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'my-plugin-package'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Hooks`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` supports various VitePress lifecycle hooks:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Hook                | Description                    | Execution                  |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | ------------------------------ | -------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`buildEnd`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | Triggered on build completion  | Concurrent                 |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformHead`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | Transforms HTML head           | Concurrent, results merged |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformHtml`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | Transforms HTML content        | Sequential, chained        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`transformPageData`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Transforms page data           | Sequential, chained        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`postRender`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Triggered after page rendering | Sequential, chained        |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Client Code Organization`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`When a plugin needs to provide client-side code (e.g., Vue components), the recommended directory structure is:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="my-plugin"`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` my-plugin`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` src`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` client`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` components`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`        -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` MyComponent.vue`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` index.ts # Export enhanceApp function`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` node`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myPlugin.ts # Plugin core logic`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` index.ts # Plugin entry, using definePlugin`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` package.json`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` tsconfig.json`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Configure `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`exports`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`package.json`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to export client code separately:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`  "exports"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`    "."`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "types"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./dist/node/index.d.ts"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "default"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./dist/node/index.js"`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`    "./client"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "browser"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./dist/client/browser/index.js"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "default"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./dist/client/ssr/index.js"`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Recommended: vitepress-plugin-toolkit`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-toolkit`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` provides a rich set of utility functions to assist plugin development, including:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `createContainerPlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Create markdown-it custom containers`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `createContainerSyntaxPlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Create custom syntax containers`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `createEmbedRuleBlock`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Create embed syntax blocks`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `resolveAttrs`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` / `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`stringifyAttrs`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Attribute parsing and serialization`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `createLogger`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Logging utility`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `createLocales`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Internationalization support`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `useSize`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Responsive size calculation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`See the [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Toolkit API documentation`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./toolkit`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) for details.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Complete Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Here is a simple step plugin built with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [node/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { createContainerPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-toolkit'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` const`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` stepsPlugin`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  createContainerPlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(md, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'steps'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    before`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: () `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` '<div class="vp-steps">'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-steps'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'import "vitepress-plugin-steps/style.css"'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(stepsPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Users simply need to:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` steps `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`steps`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[8]||=n(`div`,{"data-filepath":`guide/quick-start.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/quick-start.md`},`guide/quick-start.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Quick Start`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## What is vitepress-tuck?`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` provides simple, flexible, and low-barrier plugin development and integration capabilities`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`for VitePress. It wraps VitePress's `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to provide an additional `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option, shifting the`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`complexity of plugin integration into the plugins themselves, so users only need to add plugins to the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` array.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-tuck`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Using in a VitePress Site`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### Replace the Configuration File`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Replace `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/config.ts`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`'s `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line diff remove`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`  import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  import { defineConfig } from 'vitepress-tuck' // [!code ++]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  export default defineConfig({`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    plugins: [`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // Add plugins here`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    // Other VitePress config options ...`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### Configure the Client Entry`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Import `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`virtual:enhance-app`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/theme/index.ts`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`  import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`  import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` enhanceApp `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'virtual:enhance-app'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  import DefaultTheme from 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  export default {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    enhanceApp(ctx) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      enhanceApp(ctx) // [!code ++]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  } satisfies Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"  `virtual:enhance-app`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` is a virtual module. `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` automatically injects plugin client code into it — no manual configuration required.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### TypeScript Support`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  If your project uses TypeScript, add the type reference in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tsconfig.json`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```json")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`    "compilerOptions"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "types"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck/client-types"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Using Plugins`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Using plugins is simple — just import and invoke them in the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` array:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` steps `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` mermaid `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-mermaid-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    steps`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    mermaid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // Plugin options can be passed here`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Refer to each plugin's documentation for its configuration options.`)])])])])],-1),f[9]||=n(`div`,{"data-filepath":`guide/toolkit.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/toolkit.md`},`guide/toolkit.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Toolkit API`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`NpmBadge`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-toolkit"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` is a VitePress plugin development toolkit that provides a rich set of utility functions to assist plugin development.")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Installation:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-toolkit`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Node-side API`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Import from `vitepress-plugin-toolkit`:")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttrs,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttr,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  stringifyAttrs,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLogger,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLocales,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getVitepressConfig,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getLocaleWithPath,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveRouteLink,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  parseRect,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  slugify,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  treatAsHtml,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerPlugin`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Create a markdown-it custom container plugin. Used for processing `::: type` syntax, where content is parsed normally by markdown-it.")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerPlugin(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options?: ContainerOptions,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**ContainerOptions:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface ContainerOptions {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Callback for rendering container opening tag`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  before?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Callback for rendering container closing tag`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  after?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Usage Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerPlugin } from 'vitepress-plugin-toolkit'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin(md, 'steps', {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    before: () => '<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`div`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vp-steps"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>',`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerSyntaxPlugin`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Create a custom syntax container plugin. Unlike `createContainerPlugin`, the content is not parsed by markdown-it and must be handled manually.")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerSyntaxPlugin(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: RenderRule,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Raw content inside the container is accessible via `token.content`, and metadata via `token.meta`.")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Usage Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerSyntaxPlugin } from 'vitepress-plugin-toolkit'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin(md, 'file-tree', (tokens, index) => {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    const { content, meta } = tokens[index]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"    return `<"),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`div`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"file-tree"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">${content}</"),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`div`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createEmbedRuleBlock`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Create an embed rule block for handling `@[type ...](args)` syntax.")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createEmbedRuleBlock<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`Meta`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),n(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: EmbedRuleBlockOptions<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`Meta`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**EmbedRuleBlockOptions:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface EmbedRuleBlockOptions<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`Meta`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),n(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Embed type, e.g. 'pdf', 'qrcode' */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Token name, defaults to type */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name?: string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Name of the rule to insert before, default 'code' */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  beforeName?: string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Rule options */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ruleOptions?: RuleOptions`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  /** Parse the `info` and `source` in `@[type info](source)` and convert them into a metadata object. */")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  meta: (info: string, source: string) => Meta`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Generate content from metadata */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content?: (meta: Meta, env: MarkdownEnv) => string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Render function */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: (tokens: Token[], index: number, env: MarkdownEnv) => string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Usage Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createEmbedRuleBlock } from 'vitepress-plugin-toolkit'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock(md, {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    type: 'pdf',`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    meta: (info, source) => ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      attrs: info,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      src: source,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    content: (meta, env) => {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"      return `<"),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`VPPdf`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},'"${meta.src}"'),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}}," ${meta.attrs}"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," />`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttrs`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Parse an attribute string into an object.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttrs<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`T`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),n(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> = Record<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`string,`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(info: string): T`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`resolveAttrs('width="100%" height="400" dark')`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => { width: '100%', height: '400', dark: true }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttr`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Parse a single attribute value from an info string.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttr(info: string, key: string): string | undefined`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### stringifyAttrs`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Serialize an attributes object into an HTML attribute string.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function stringifyAttrs<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`T`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` object`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` = `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`object`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  attrs: T,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  withUndefinedOrNull?: boolean,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  forceStringify?: (keyof T)[],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stringifyAttrs({ width: '100%', height: 400, dark: true })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => ' width="100%" :height="400" dark'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLogger`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Create a logger instance.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLogger(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: string,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  defaultLevel?: LogLevel,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Logger`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**LogLevel:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'silent'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const logger = createLogger('my-plugin', 'info')`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.info('Plugin loaded')       // [my-plugin] Plugin loaded`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.warn('Potential issue')     // [my-plugin] Potential issue`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.error('An error occurred')  // [my-plugin] An error occurred`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.debug('Debug info', true)   // [my-plugin] Debug info`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLocales`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Create multi-language configuration, automatically matching VitePress's language settings.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLocales<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`LocaleData`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),n(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` unknown`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  builtinLocales: BuiltinLocales<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`LocaleData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales?: Record<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`string,`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Record<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`string,`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const locales = createLocales(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['en', 'en-US'], { chart: 'Chart', source: 'Source' }],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['zh', 'zh-CN'], { chart: '图表', source: '源码' }],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getVitepressConfig`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Get the current VitePress site configuration.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getVitepressConfig(): SiteConfig`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getLocaleWithPath`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Get language information based on a file path.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getLocaleWithPath(path: string): { lang: string, locale: string }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveRouteLink`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Convert a relative path to a VitePress route link.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveRouteLink(url: string, env: MarkdownEnv): string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### parseRect`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Parse a size string, automatically appending a unit if a number is passed.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function parseRect(str: string, unit?: string): string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('400')     // => '400px'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('50%')     // => '50%'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('10', 'rem') // => '10rem'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### slugify`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Convert a string to a URL-friendly slug format.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function slugify(str: string): string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### treatAsHtml`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Determine whether a filename should be treated as HTML (non-known-resource extensions are treated as HTML).`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function treatAsHtml(filename: string): boolean`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Client-side API`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Import from `vitepress-plugin-toolkit/client`:")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPCopyButton,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPLoading,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  useSize,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPhone,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isWindows,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPad,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isIOS,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMacOS,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMobile,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isSafari,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPCopyButton`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Copy button component.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`VPCopyButton`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` :text`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"code"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPLoading`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Loading state component.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`VPLoading`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### useSize`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Responsive size calculation composable.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function useSize<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`T`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` HTMLElement`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  el: TemplateRef<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`T`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: ToRefs<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`SizeOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extraHeight?: MaybeRef<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`number`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: Ref<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`string`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: Ref<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`string`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resize: () => void`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**SizeOptions:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface SizeOptions {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width?: string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height?: string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ratio?: number | string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Device Detection Utilities`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Function | Description |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ----------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPhone()` | Check if iPhone |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPad()` | Check if iPad |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIOS()` | Check if iOS device |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMacOS()` | Check if macOS |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isWindows()` | Check if Windows |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMobile()` | Check if mobile device |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isSafari()` | Check if Safari browser |")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Shared Utilities`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Can be imported from either `vitepress-plugin-toolkit` or `vitepress-plugin-toolkit/client`:")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isExternal`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Check if a link is an external link.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isExternal(path: string): boolean`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isLinkWithProtocol`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Check if a link contains a protocol prefix.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isLinkWithProtocol(link: string): boolean`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## CSS Transition Animations`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` provides predefined CSS transition animations that can be imported in plugins:")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-up.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-down.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-left.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-right.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-up.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-down.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-left.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-right.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-scale-up.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-width-expand.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-height-expand.css';`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[10]||=n(`div`,{"data-filepath":`guide/wrap-plugin.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/wrap-plugin.md`},`guide/wrap-plugin.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Wrapping Existing Plugins`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If your VitePress site is already using plugins, or you have a plugin that hasn't been packaged`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`for `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` mode, you can easily wrap it into a compatible form.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Why Wrap?`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Traditional VitePress plugins often require users to configure multiple locations:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// Traditional approach — configuration scattered across multiple places`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`By wrapping into a `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` plugin, users only need to add it to the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` array — all`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`configuration is handled internally by the plugin.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Wrapping Methods`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping with definePlugin`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`For any existing plugin logic, use `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to wrap it:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someVitePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin/vite'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`options`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-some-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin, options)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping a Markdown-Only Plugin`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If the plugin only involves a markdown-it extension, wrapping is very simple:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownItPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping a Vite-Only Plugin`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If the plugin only needs Vite configuration:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myVitePlugin `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vite-plugin-my'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`options`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping a Plugin That Requires Client Injection`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If the plugin needs to inject components or styles on the client side, configure the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // Inject styles`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      'import "my-plugin/style.css"'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'enhanceAppWithMyPlugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // Ensure correct bundling during SSR`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'my-plugin'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`And export the enhance function in the client entry file:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// client/index.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { EnhanceAppContext } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` MyComponent `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './components/MyComponent.vue'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` function`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` enhanceAppWithMyPlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ `),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`app`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` }`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` EnhanceAppContext`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`component`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'MyComponent'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, MyComponent)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Real-World Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Here's how to wrap `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-group-icons`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` into a `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` plugin:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { groupIconMdPlugin, groupIconVitePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-group-icons'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-group-icons'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'import `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`virtual:group-icons.css`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(groupIconMdPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`      groupIconVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`        'vitepress-plugin-group-icons'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Maintaining Compatibility`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Wrapped plugins can still be used independently (without `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`). Simply provide both usage modes in the plugin's README:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// Method 1: vitepress-tuck mode (recommended)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myPlugin `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myPlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// Method 2: Native VitePress mode`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { myPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin/raw'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[11]||=n(`div`,{"data-filepath":`plugins/abbr.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/abbr.md`},`plugins/abbr.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Abbr`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-abbr" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Abbreviation plugin that adds an interactive tooltip to abbreviations in Markdown, displaying the full description on hover or focus.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Forked and modified from [`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#79B8FF`,"--shiki-dark-text-decoration":`underline`}},"`markdown-it-abbr`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://github.com/markdown-it/markdown-it-abbr`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`).`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-abbr`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` abbr `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-abbr'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`abbr`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { abbrMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-abbr'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(abbrMarkdownPlugin, {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'HyperText Markup Language'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        W3C: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'World Wide Web Consortium'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Register the component in the theme:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithAbbr } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-abbr/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithAbbr`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx) `)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Define an abbreviation using the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`*[ABBR]: Full description`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` syntax. Once defined,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`every occurrence of the abbreviation throughout the document is automatically recognized`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and rendered with an interactive tooltip.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The HTML specification is maintained by the W3C.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`HTML`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: HyperText Markup Language`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`W3C`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: World Wide Web Consortium`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The HTML specification is maintained by the W3C.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`HTML`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: HyperText Markup Language`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`W3C`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: World Wide Web Consortium`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Inline Markdown in Descriptions`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The full description of an abbreviation supports inline Markdown syntax, such as bold, italic, links, and code.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**HTML**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` specification is maintained by the W3C.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`HTML`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: HyperText Markup Language`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`W3C`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: World [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Wide Web`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://www.w3.org/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) Consortium`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**HTML**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` specification is maintained by the W3C.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`HTML`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: HyperText Markup Language`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`W3C`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: World [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Wide Web`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://www.w3.org/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) Consortium`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Global Abbreviations`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Instead of defining abbreviations inline in each Markdown file, you can provide a global preset of abbreviations`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`through the plugin options. When both a global definition and an inline definition exist for the same abbreviation,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`the inline definition takes precedence.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` abbr `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-abbr'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    abbr`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'HyperText Markup Language'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      W3C: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'World Wide Web Consortium'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`With this configuration, every occurrence of `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`HTML`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` and `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`W3C`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` across all pages will be rendered as`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`abbreviations automatically, without needing to define them in each file.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Hover over or focus the abbreviations below to see their full descriptions:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`HTML`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: HyperText Markup Language`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`W3C`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: World Wide Web Consortium`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`API`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: Application Programming Interface`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`CSS`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: Cascading Style Sheets`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`HTML`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: HyperText Markup Language`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`W3C`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: World Wide Web Consortium`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`API`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: Application Programming Interface`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`CSS`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: Cascading Style Sheets`)])])])])],-1),f[12]||=n(`div`,{"data-filepath":`plugins/annotation.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/annotation.md`},`plugins/annotation.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Annotation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-annotation" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation plugin that adds interactive annotation markers to Markdown content.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Clicking a marker reveals a popover displaying the annotation content.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation content supports full block-level Markdown syntax.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A single label can be defined multiple times — all definitions are collected and displayed as separate items in the popover.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-annotation`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` annotation `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-annotation'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`annotation`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { annotationMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-annotation'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(annotationMarkdownPlugin, {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'HyperText Markup Language'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Register the component in the theme:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithAnnotation } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-annotation/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithAnnotation`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx) `)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Define an annotation using the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[+label]: annotation content`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` syntax, then reference it anywhere in your document`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[+label]`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`. The reference is rendered as a small interactive marker that, on click,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`reveals a popover displaying the annotation content.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**four great classical novels**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`] of Chinese literature are widely known.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Romance of the Three Kingdoms**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — a historical novel set in the Three Kingdoms period.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**four great classical novels**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels1`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`] of Chinese literature are widely known.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels1`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Romance of the Three Kingdoms**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — a historical novel set in the Three Kingdoms period.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Block-level Markdown in Annotations`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation content supports full block-level Markdown syntax, including headings, paragraphs, lists, code blocks, and more.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The framework is built on [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+vue`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`].`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+vue`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`  ## Vue`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  A progressive framework for building user interfaces.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Reactive data binding`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Component-based architecture`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://vuejs.org/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Multi-line Definitions`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation definitions can span multiple lines. Continuation lines must be indented by at least two spaces.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Empty lines within the indented block are preserved as part of the annotation content.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A non-indented content line (such as the next definition or a new paragraph) terminates the multi-line definition.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This concept is explained in [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+detail`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`].`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+detail`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  This is the first paragraph of the annotation.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  This is the second paragraph, separated by an empty line`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  but still part of the same annotation.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This line is not indented, so the annotation definition ends here.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Multiple Definitions per Label`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A single label can be defined multiple times. All definitions are collected and displayed as separate items`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`in the popover, allowing you to provide multiple pieces of related information for the same reference.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript has multiple versions [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+js`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`].`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+js`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**ES2015 (ES6)**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Introduced classes, modules, arrow functions, and more.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+js`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**ES2020**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Added optional chaining, nullish coalescing, and BigInt.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript has multiple versions [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+js`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`].`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+js`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**ES2015 (ES6)**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Introduced classes, modules, arrow functions, and more.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+js`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]: `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**ES2020**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Added optional chaining, nullish coalescing, and BigInt.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Global Annotations`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Instead of defining annotations inline in each Markdown file, you can provide a global preset of annotations through the plugin options. This is useful for terms that should be annotated consistently across all pages.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` annotation `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-annotation'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    annotation`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'HyperText Markup Language'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      CSS: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Cascading Style Sheets'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'A style sheet language used for describing the presentation of a document.'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Each global annotation value can be a string or an array of strings. When an array is provided, each element becomes a separate item in the popover, just like multiple inline definitions for the same label.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Click the annotation markers below to see the full content:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**four great classical novels**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`] of Chinese literature are widely known.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Romance of the Three Kingdoms**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the backdrop of the Three Kingdoms period, it depicts the political and military struggles among Wei, Shu, and Wu.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Journey to the West**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Tells the story of the Tang Monk and his three disciples on their journey to obtain Buddhist scriptures, filled with mythology and fantastical adventures.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Dream of the Red Chamber**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the rise and fall of the four great families — Jia, Shi, Wang, and Xue — it depicts the love tragedy of Jia Baoyu and Lin Daiyu.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Water Margin**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Depicts the story of 108 outlaws led by Song Jiang who gathered at Mount Liang during the late Northern Song dynasty.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**four great classical novels**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`] of Chinese literature are widely known.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Romance of the Three Kingdoms**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the backdrop of the Three Kingdoms period, it depicts the political and military struggles among Wei, Shu, and Wu.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Journey to the West**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Tells the story of the Tang Monk and his three disciples on their journey to obtain Buddhist scriptures, filled with mythology and fantastical adventures.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Dream of the Red Chamber**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the rise and fall of the four great families — Jia, Shi, Wang, and Xue — it depicts the love tragedy of Jia Baoyu and Lin Daiyu.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`+novels`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`  **Water Margin**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Depicts the story of 108 outlaws led by Song Jiang who gathered at Mount Liang during the late Northern Song dynasty.`)])])])])],-1),f[13]||=n(`div`,{"data-filepath":`plugins/caniuse.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/caniuse.md`},`plugins/caniuse.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Can I Use`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-caniuse" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed browser compatibility data from [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse.com`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://caniuse.com/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`), displaying browser support for CSS/JS features on the page.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-caniuse`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` caniuse `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-caniuse'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`caniuse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { caniuseMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-caniuse'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(caniuseMarkdownPlugin) `)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithCaniuse } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-caniuse/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithCaniuse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx) `)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@[caniuse]()`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to embed browser compatibility data:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`feature_name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Baseline Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use baseline mode to display a feature support overview:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse baseline`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`feature_name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Custom Version Range`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`{}`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to specify a version range:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse{-2,4}`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`feature_name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse baseline{-3,2}`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`feature_name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `{past, future}`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: past is the number of versions to look back, future is the number to look ahead`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Default is `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`{5, 2}`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — 5 versions back,  2 versions forward`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Getting Feature Names`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Search for the feature you want to display on [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse.com`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://caniuse.com/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`click the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`#`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` on the left side of the card, and you'll get the feature name in the browser's address bar.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: details Not sure which part is the feature name?`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Take CSS `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},"`grid`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` as an example**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Search for `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`grid`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` on caniuse.com, then click the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`#`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` on the first card. The address bar will change to `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`https://caniuse.com/css-grid`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The feature name is `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`css-grid`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Verify here: <`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://caniuse.com/?search=grid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Display browser support for the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},"`fetch`"),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` feature`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`fetch`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`fetch`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Display baseline for the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},"`fetch`"),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` feature`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse baseline`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`fetch`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`caniuse baseline`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`fetch`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)])])])])],-1),f[14]||=n(`div`,{"data-filepath":`plugins/code-collapse.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-collapse.md`},`plugins/code-collapse.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Collapse`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-code-collapse" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Code block folding plugin that automatically collapses code blocks exceeding a specified number of lines, improving page readability.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-code-collapse`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` collapsedLines `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-code-collapse'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    collapsedLines`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { collapsedLinesMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-code-collapse'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(collapsedLinesMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithCollapsedLines } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-code-collapse/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithCollapsedLines`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Global Folding`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`When `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`options`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` is set to a number, or `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`true`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (defaults to 15 lines), all code blocks exceeding that line count will be automatically folded.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Per-Block Folding`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:collapsed-lines={N}`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` syntax in the code block's info string to control individual blocks:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// Folds using the default value (15 lines)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// Folds starting from line 10`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`/**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},` * Collapsed lines configuration`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}}," * - `true`: Fold when exceeding 15 lines")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}}," * - `number`: Fold when exceeding the specified line count")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}}," * - `false`: No global folding, allows per-block control (default)")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}}," * - `'disable'`: Fully disable the plugin")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},` * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` '`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`false`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},` */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`type`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` options`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` boolean`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` number`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'disable'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a1`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a2`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a3`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a4`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a5`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a6`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a7`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a8`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a9`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a10`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a11`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a12`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :line-numbers=1 :collapsed-lines=10")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a1`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a2`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a3`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a4`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a5`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a6`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a7`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a8`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a9`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a10`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a11`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a12`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[15]||=n(`div`,{"data-filepath":`plugins/code-tree.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-tree.md`},`plugins/code-tree.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Tree`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-code-tree" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Code tree plugin for rendering code structures with a file tree sidebar in Markdown, supporting file switching.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This plugin depends on the [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`File Tree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./file-tree.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) plugin for the file tree sidebar components.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-code-tree`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` codeTree `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-code-tree'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`codeTree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { codeTreeMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-code-tree'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(codeTreeMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithCodeTree } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-code-tree/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithCodeTree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin provides two syntaxes to render a code tree: a container syntax for inline file content,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and an embed syntax to load files from a directory.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Container Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: code-tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` container with fenced code blocks inside.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Each fence must declare a filename via the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[filename]`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` syntax in its info string.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree title="Project Structure"`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`fn`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` main`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`() {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    println!`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"Hello, world!"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`);`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Container Attributes`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute      | Description                   | Default |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | ----------------------------- | ------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`title`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Code tree title               | -       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`height`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | Code tree container height    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`420px`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`entry`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Entry file, opened by default | -       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`show-sidebar`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Show sidebar by default       | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Active File`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Add `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:active`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to a fence's info string to mark it as the default active file:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts] :active")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [utils.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` const`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` noop`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` () `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Embed Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@[code-tree](dir)`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to embed a directory as a code tree. Files in the directory are loaded and rendered automatically.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`code-tree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./src`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`dir`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` supports the following prefixes:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Prefix | Description                                       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------ | ------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | Relative to VitePress `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`srcDir`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                    |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`/`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | Relative to VitePress project root                |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -      | Relative to the current markdown file's directory |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`#### Embed Attributes`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`code-tree title="Source" height="500px" entry="index.ts" show-sidebar=true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./src`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### CodeTreePluginOptions`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` CodeTreePluginOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Default code tree container height`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` '`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`420px`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  height`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` number`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Glob patterns to ignore files`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Applied when loading files from a directory via the embed syntax`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * node_modules and .DS_Store are always ignored`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` []`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  ignores`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * File loaders`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},"   * Used to load resource files when embedding a directory with `@[code-tree](dir)`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Custom loaders are merged before the built-in ones, so they take precedence`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` []`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  loaders`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` CodeTreeFileLoader`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### File Loaders`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Loaders are used by the embed syntax to load file content. The plugin ships with built-in loaders for common file types,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and custom loaders are merged before the built-in ones, so they take precedence.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Built-in loaders cover the following file types:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Dot files (`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.git*`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.env*`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.*ignore`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.npmrc`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Rendered as plain text`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `.XXXrc`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` config files (e.g. `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.eslintrc`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Rendered as JSON`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Image files: Rendered as `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`<img>`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` tags with proper `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`src`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` resolution`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Source files supported by Shiki: Rendered as fenced code blocks with syntax highlighting`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` codeTree, { loadCodeContent } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-code-tree'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    codeTree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      height: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'500px'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ignores: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'**/*.test.ts'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      loaders: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          filter: [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'**/*.md'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`          load`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`file`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` loadCodeContent`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(file, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'md'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`filter`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` field accepts a glob pattern string, an array of glob patterns,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`or a predicate function that receives a `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`CodeTreeFile`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` and returns a boolean.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Container Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="Code Tree" show-sidebar`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`fn`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` main`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`() {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    println!`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"Hello, world!"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`);`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="Code Tree" show-sidebar`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`const`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`fn`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` main`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`() {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    println!`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"Hello, world!"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`);`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Embed Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`code-tree title="Code Tree" show-sidebar`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`@/en`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`code-tree title="Code Tree" show-sidebar`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`@/en`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)])])])])],-1),f[16]||=n(`div`,{"data-filepath":`plugins/codepen.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/codepen.md`},`plugins/codepen.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# CodePen`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-codepen" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`CodePen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://codepen.io/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) projects into VitePress pages.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-codepen`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` codepen `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-codepen'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`codepen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { codepenPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-codepen'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(codepenPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithCodepen } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-codepen/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithCodepen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Basic Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`codepen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`user/slash`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### With Options`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`codepen preview editable title="Example" height="400px" tab="css,result" theme="dark"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`leimapapa/RwOZQOW`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Attribute Reference`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute  | Type      | Default    | Description                         |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | ---------- | ----------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`title`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -          | Title                               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`user`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -          | CodePen username (parsed from link) |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`slash`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -          | Pen identifier (parsed from link)   |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tab`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`'result'`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Default tab to display              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`theme`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -          | Theme                               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`preview`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | Preview mode                        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`editable`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | Editable mode                       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`width`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`'100%'`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | Width                               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`height`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -          | Height                              |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`codepen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`leimapapa/RwOZQOW`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`codepen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`leimapapa/RwOZQOW`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)])])])])],-1),f[17]||=n(`div`,{"data-filepath":`plugins/collapse.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/collapse.md`},`plugins/collapse.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Collapse`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-collapse" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Collapse container plugin for creating collapsible content sections in Markdown, with support for accordion mode,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`card style, and per-item expand control.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-collapse`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` collapse `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-collapse'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`collapse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { collapseMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-collapse'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(collapseMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithCollapse } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-collapse/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithCollapse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: collapse`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` container with a list to create collapsible sections. Each`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`list item becomes a collapse panel: the first line is the title, and the`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`following indented content is the panel body.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Basic`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Title 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Title 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Title 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Title 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Accordion`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Add `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`accordion`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to enable accordion mode — only one item can be expanded at a`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`time; expanding a new item collapses all others. Use `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`expand`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to expand the`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`first item by default when no explicit `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:+`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` flag is set.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Card Style`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Add `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`card`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to render the container with a bordered, rounded card style. It can`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`be combined with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`accordion`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Question 3`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 3`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Per-item Expand Flag`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Prefix a title with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:+`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to expand an item, or `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:-`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to collapse it. In accordion`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`mode, only the first `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:+`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` flag takes effect. Items without a flag follow the`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`container's `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`expand`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` attribute.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` :+ Expanded by default`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` :- Collapsed by default`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` No flag, follows container expand attribute`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` :+ Expanded by default`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` :- Collapsed by default`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` No flag, follows container expand attribute`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Container Attributes`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute   | Type      | Description                                              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | --------- | -------------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`accordion`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Enable accordion mode (only one item expanded at a time) |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`card`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Render with card style (bordered and rounded)            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`expand`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Default expanded state                                   |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Item Flags`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Flag | Description                                                  |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | ------------------------------------------------------------ |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:+`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Expand this item (only the first one wins in accordion mode) |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`:-`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Collapse this item                                           |`)])])])])],-1),f[18]||=n(`div`,{"data-filepath":`plugins/field.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/field.md`},`plugins/field.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Field`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-field" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Field container plugin for rendering structured API fields and properties documentation in Markdown,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`with support for field grouping and JSDoc-style tag annotations.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-field`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` field `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-field'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`field`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { fieldMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-field'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(fieldMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithField } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-field/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithField`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: field`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` container to document API fields and properties, with JSDoc-style tags for metadata.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Basic Field`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Total number of users.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Field Tags`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supported tags: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@name`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@type`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@default`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@required`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@deprecated`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@optional`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@description`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field userName`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier for the user.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field email`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default example@mail.com`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Contact email address.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This field is deprecated, please use the new field instead.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field userName`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier for the user.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field email`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default example@mail.com`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Contact email address.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This field is deprecated, please use the new field instead.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Tag Reference`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Tag            | Description                                                          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | -------------------------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@name`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Override the field name (defaults to the name from `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`info`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)           |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@type`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Field type annotation                                                |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@default`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | Default value for the field                                          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@required`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | Mark the field as required                                           |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@optional`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | Mark the field as optional                                           |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@deprecated`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Mark the field as deprecated                                         |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@description`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Explicit description text; any non-tag line also becomes description |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Field Group`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: field-group`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` container to group related fields together.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Display name.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Creation timestamp.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Display name.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Creation timestamp.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Explicit Description`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@description`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` tag to specify description text explicitly. Any non-tag lines are also automatically treated as description content.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@description Total number of users. This field represents the count of active users in the system.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[19]||=n(`div`,{"data-filepath":`plugins/file-tree.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/file-tree.md`},`plugins/file-tree.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# File Tree`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-file-tree" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`File tree display plugin for rendering file directory structures in Markdown.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-file-tree`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` fileTree `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-file-tree'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fileTree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { fileTreeMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-file-tree'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(fileTreeMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithFileTree } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-file-tree/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithFileTree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Container Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: file-tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` container to represent file hierarchy via indentation:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="Project Structure"`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` src/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` components/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Button.vue`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Nav.vue`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` index.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` package.json`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` tsconfig.json`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Fenced Code Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alternatively, use a fenced code block with the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` or `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`file-tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` language identifier.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The content follows the output format of the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` command-line tool (using Unicode`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`box-drawing characters):`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── components/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   ├── Button.vue`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   └── Nav.vue`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── index.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── package.json`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── tsconfig.json`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is especially useful when you already have a `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` command output and want to`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`paste it directly into your Markdown without reformatting.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Node Annotations`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Both syntaxes support the following node annotations:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Syntax               | Description                          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------------- | ------------------------------------ |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`**filename**`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | Highlight/focus the file             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`-- filename`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Mark as removed                      |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`++ filename`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Mark as added                        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`filename # comment`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Add a comment                        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`folder/`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            | Mark as folder, collapsed by default |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`…`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                  | Ellipsis marker                      |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Container example with annotations:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="Changed Files"`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` src/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` -- old-file.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ++ new-file.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **main.ts**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` # Core entry`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` …`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Fenced code example with annotations:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── -- old-file.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── ++ new-file.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── **main.ts** # Core entry`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── …`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` docs`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` .vitepress`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ++ config.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` -- page1.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` index.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` theme  # A `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**theme**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` directory`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` client`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` components`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Navbar.vue**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` composables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` useNavbar.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` styles`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` navbar.css`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` config.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` node/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` package.json`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` pnpm-lock.yaml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` .gitignore`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` README.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` …`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` docs`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` .vitepress`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ++ config.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` -- page1.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` index.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` theme  # A `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**theme**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` directory`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` client`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` components`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Navbar.vue**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` composables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` useNavbar.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` styles`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` navbar.css`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` config.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  -`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` node/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` package.json`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` pnpm-lock.yaml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` .gitignore`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` README.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` …`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[20]||=n(`div`,{"data-filepath":`plugins/intro.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/intro.md`},`plugins/intro.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plugin Overview`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ecosystem provides a rich set of plugins covering Markdown syntax extensions,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`content embedding, code enhancement, and more.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`All plugins support two usage modes:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`1.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **vitepress-tuck mode (recommended)**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: One-click integration via the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`2.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Native mode**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: Manual configuration in VitePress`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Plugin List`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Plugin                           | Package                          | Description                                                     |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------------------------- | -------------------------------- | --------------------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Steps`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./steps`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)                 | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-steps`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`         | Step container for creating guided content                      |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Obsidian`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./obsidian`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-obsidian`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | Obsidian syntax support: Wiki links, Callouts, embeds, comments |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Video`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./video`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)                 | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-video`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`         | Video embedding: Bilibili, YouTube, AcFun, ArtPlayer            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Mermaid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./mermaid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)             | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-mermaid-tuck`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Mermaid diagram support                                         |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`PlantUML`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./plantuml`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-plantuml`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | PlantUML diagram support                                        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Field`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./field`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)                 | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-field`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`         | API field documentation, with JSDoc-style tags for metadata     |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Collapse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./collapse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-collapse`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | Collapsible sections with accordion mode                        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Npm To`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./npm-to`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)               | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-npm-to`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Auto-convert npm commands to other package managers             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Repo Card`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./repo-card`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)         | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-repo-card`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | GitHub / Gitee repository card display                          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`File Tree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./file-tree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)         | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-file-tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | File tree display                                               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Code Tree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./code-tree`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)         | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-code-tree`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | Code tree with file tree sidebar                                |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`PDF`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)                     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-pdf`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | PDF file embedding                                              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`QRCode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)               | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-qrcode`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | QR code generation                                              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Abbr`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./abbr`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)                   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-abbr`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | Abbreviation tooltip, reveals full description on hover/focus   |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Plot`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./plot`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)                   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-plot`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | Hidden text reveal on click/hover                               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Can I Use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./caniuse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-caniuse`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | Embed browser compatibility data from caniuse.com               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Code Collapse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./code-collapse`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-code-collapse`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Code block folding                                              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`CodePen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./codepen`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)             | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-codepen`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | CodePen embedding                                               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`JSFiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./jsfiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-jsfiddle`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | JSFiddle embedding                                              |`)])])])])],-1),f[21]||=n(`div`,{"data-filepath":`plugins/jsfiddle.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/jsfiddle.md`},`plugins/jsfiddle.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# JSFiddle`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-jsfiddle" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`JSFiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://jsfiddle.net/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) projects into VitePress pages.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-jsfiddle`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` jsfiddle `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-jsfiddle'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`jsfiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { jsfiddleMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-jsfiddle'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(jsfiddleMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithJsFiddle } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-jsfiddle/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithJsFiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Basic Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`jsfiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`user/id`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### With Options`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`jsfiddle title="JS Fiddle" theme="dark" tab="js,css,html,result" height="400px"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`pengzhanbo/1xbwz2p9`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Attribute Reference`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute | Type               | Default                | Description                                       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------- | ------------------ | ---------------------- | ------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`title`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`'JS Fiddle'`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | Title                                             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`theme`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | -                      | Theme (e.g. `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`dark`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)                               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tab`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`'js,css,html,result'`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Tabs to display (comma-separated, spaces removed) |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`width`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`'100%'`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`               | Width                                             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`height`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | -                      | Height                                            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ratio`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number \\| string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | -                      | Aspect ratio                                      |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`jsfiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`pengzhanbo/1xbwz2p9`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`jsfiddle`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`pengzhanbo/1xbwz2p9`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)])])])])],-1),f[22]||=n(`div`,{"data-filepath":`plugins/mermaid.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/mermaid.md`},`plugins/mermaid.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Mermaid`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-mermaid-tuck" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Mermaid diagram plugin, supporting Mermaid chart rendering in Markdown.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-mermaid-tuck`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` mermaid `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-mermaid-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    mermaid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { mermaidMarkdownPlugin, mermaidVitePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-mermaid-tuck'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`mermaidVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      options: { theme: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'default'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    })],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(mermaidMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithMermaid } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-mermaid-tuck/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithMermaid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use code blocks with the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mermaid`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` language tag:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart LR`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Start --> Stop`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: Hello John, how are you?`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  John-->>Alice: Great!`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: See you later!`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### MermaidPluginOptions`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MermaidPluginOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Mermaid configuration (excluding startOnLoad and themeVariables)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  options`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Omit`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`MermaidConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'startOnLoad'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'themeVariables'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`&`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`    themeVariables`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MermaidThemeVariables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Locale configuration`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  locales`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`string`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`MermaidLocaleData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### MermaidThemeVariables`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supports custom theme variables for various Mermaid diagram types, covering:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Basic variables (background, text color, line color, etc.)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` C4, Class, ER diagram variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Flowchart variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Gantt chart variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Git graph variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Journey diagram variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Pie chart variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Requirement diagram variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` State diagram variables`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Sequence diagram variables`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### MermaidLocaleData`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MermaidLocaleData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  chart`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`       // Default 'Chart'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  source`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // Default 'Source'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  fullscreen`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  // Default 'Fullscreen'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  download`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    // Default 'Download'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Built-in Languages`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin includes built-in support for the following languages:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` English (en, en-US)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 简体中文 (zh, zh-CN)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 日本語 (ja)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 한국어 (ko)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Español (es)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Français (fr)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Русский (ru)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Deutsch (de)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Português (pt)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Flowchart`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart TB`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->a2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph one`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    a1-->a2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph two`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    b1-->b2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph three`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->c2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    one --> two`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    three --> two`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    two --> c2`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Sequence Diagram`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice ->> Bob: Hello Bob, how are you?`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->>John: How about you John?`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob--x Alice: I am good thanks!`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-x John: I am good thanks!`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->Alice: Checking with John...`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->John: Yes... John, how are you?`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Animal Example`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`classDiagram`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note "From Duck till Zebra"`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Duck`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note for Duck "can fly<br>can swim<br>can dive<br>can help in debugging"`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Fish`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Zebra`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +int age`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +String gender`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +isMammal()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +mate()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Duck{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +String beakColor`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +swim()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +quack()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Fish{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -int sizeInFeet`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -canEat()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Zebra{`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +bool is_wild`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +run()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`gantt`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  dateFormat  YYYY-MM-DD`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  title       Adding GANTT diagram functionality to mermaid`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  excludes    weekends`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'  %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)')]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section A section`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task            :done,    des1, 2014-01-06,2014-01-08`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Active task               :active,  des2, 2014-01-09, 3d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task               :         des3, after des2, 5d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task2              :         des4, after des3, 5d`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Critical tasks`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task in the critical line :crit, done, 2014-01-06,24h`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Implement parser                    :crit, done, after des1, 2d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for parser             :crit, active, 3d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task in critical line        :crit, 5d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for renderer           :2d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add to mermaid                      :1d`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Documentation`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :active, a1, after des1, 3d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :after a1  , 20h`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :doc1, after a1  , 48h`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Last section`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :after doc1, 3d`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :20h`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :48h`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[23]||=n(`div`,{"data-filepath":`plugins/npm-to.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/npm-to.md`},`plugins/npm-to.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Npm To`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-npm-to" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Automatically converts npm commands to equivalent commands for other package managers (pnpm, yarn, bun, deno).`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-npm-to`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` npmTo `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-npm-to'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    npmTo`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`([`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'npm'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'pnpm'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'yarn'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { npmToPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-npm-to'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(npmToPlugin, [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'npm'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'pnpm'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'yarn'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`])`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: npm-to`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` container to wrap npm commands. The plugin automatically converts them into multi-tab code groups:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-steps`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`After rendering, it displays as multiple tabs, each showing the corresponding package manager's install command:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **npm**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm install vitepress-plugin-steps`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **pnpm**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`pnpm add vitepress-plugin-steps`")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **yarn**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`yarn add vitepress-plugin-steps`")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Supported Command Types`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin supports automatic conversion of the following npm commands:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Command                 | Example               | Support                                   |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------------------- | --------------------- | ----------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm install`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` / `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm i`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm install react`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | Converts to each manager's add command    |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm install`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (no args) | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm install`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`         | Converts to pure install command          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm uninstall`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`         | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm uninstall react`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Converts to each manager's remove command |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm run`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`               | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm run build`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | Converts to each manager's run command    |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm create`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm create vite`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | Converts to each manager's create command |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm init`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm init -y`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`         | Converts to each manager's init command   |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npx`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npx eslint .`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        | Converts to each manager's equivalent     |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm ci`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm ci`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              | Converts to each manager's ci command     |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Custom Tabs`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`You can specify which tabs to display using the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tabs`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` attribute:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to tabs="npm,pnpm"`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-steps`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`type`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` NpmToPluginOptions`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`  |`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` NpmToPackageManager`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[]   `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// e.g. ['npm', 'pnpm', 'yarn']`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`  |`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`      tabs`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` NpmToPackageManager`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`type`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` NpmToPackageManager`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` =`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'npm'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'pnpm'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'yarn'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'bun'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'deno'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Displays `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`npm`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`pnpm`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`yarn`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` tabs by default`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Supports `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`bun`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` and `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`deno`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` conversion`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-steps`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-steps`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[24]||=n(`div`,{"data-filepath":`plugins/obsidian.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/obsidian.md`},`plugins/obsidian.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Obsidian`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-obsidian" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Provides Obsidian-style Markdown syntax support, including Wiki links, Callout annotations, embedded files, and comment syntax.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-obsidian`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` obsidian `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-obsidian'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    obsidian`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // All optional, default to true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      callout: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      comment: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      embedLink: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      wikiLink: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { obsidianMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-obsidian'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(obsidianMarkdownPlugin, {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        callout: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        comment: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        embedLink: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        wikiLink: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Wiki Links`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Wiki links are Obsidian's syntax for linking to other notes. Use double brackets `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[[ ]]`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to create internal links.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename#heading`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename#heading#subheading`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename|alias`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename#heading|alias`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|external link]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### File Name Search Rules`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`When using Wiki links, file names are matched according to the following search rules:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Matching Priority:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`1.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Full Path**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — exact match of the file path`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`2.`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Fuzzy Match**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — match by filename at the end of the path, preferring the shortest path`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Path Resolution Rules:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Relative paths**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (starting with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): resolved relative to the current file's directory`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Absolute paths**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (not starting with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): searched across the entire document tree, preferring the shortest match`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Directory form**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (ending with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`/`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): matches the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`index.md`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` in that directory`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Given the following document structure:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```txt")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`docs/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── index.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── guide/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── index.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── markdown/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│       └── obsidian.md`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`In `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`docs/guide/markdown/obsidian.md`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Syntax         | Match Result                                                    |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | --------------------------------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[[obsidian]]`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | matches `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`docs/guide/markdown/obsidian.md`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (via filename search) |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[[./]]`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | matches `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`docs/guide/markdown/index.md`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (relative path)          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[[../]]`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | matches `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`docs/guide/README.md`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (parent directory)               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`[[guide/]]`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | matches `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`docs/guide/README.md`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (directory form)                 |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**External Link:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|external link]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|external link]]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Internal Anchor Links:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`npm-to`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]  <!-- via filename search -->`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki Links]]  <!-- current page heading -->`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`file-tree#Configuration`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]  <!-- via filename search, link to heading -->`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`npm-to`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki Links]]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`file-tree#Configuration`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Obsidian Official - `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Wiki Links**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://help.obsidian.md/links`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Embedded Content`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed syntax allows you to insert content from other files into the current page.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename#heading`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`filename#heading#subheading`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`File name search rules are the same as [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Wiki Links`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`#file-name-search-rules`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`).`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: info Paths starting with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`/`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` or without a `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`./`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` prefix load resources from the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`public`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` directory`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Image Embedding`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Syntax:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`image`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`image|width`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`image|widthxheight`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supported formats: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`jpg`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`jpeg`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`png`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`gif`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`avif`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`webp`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`svg`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`bmp`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ico`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tiff`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`apng`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`jfif`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`pjpeg`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`pjp`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`xbm`")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`tuck-logo.svg`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`tuck-logo.svg|125`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### PDF Embedding`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!NOTE`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> PDF embedding requires the [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`vitepress-plugin-pdf`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`](`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#85E89D`,"--shiki-dark-text-decoration":`underline`}},`./pdf.md`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`) plugin to work properly.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Syntax:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`document.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`document.pdf#page=1`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]  <!-- #page=1 for first page -->`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`document.pdf#page=1#height=300`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]  <!-- #page=page #height=height -->`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supported formats: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`pdf`")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Example:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`https://plume.pengzhanbo.cn/files/sample-1.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`https://plume.pengzhanbo.cn/files/sample-1.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Audio Embedding`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Syntax:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[audio file]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supported formats: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mp3`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`flac`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`wav`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ogg`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`opus`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`webm`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`acc`")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Video Embedding`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!NOTE`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Video embedding requires the [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`vitepress-plugin-video`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`](`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#85E89D`,"--shiki-dark-text-decoration":`underline`}},`./video.md`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`) plugin to work properly.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Syntax:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[video file]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[video file#height=400]]  <!-- Set video height -->`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supported formats: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mp4`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`webm`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mov`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, etc.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Content Fragment Embedding`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`#heading`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to embed content fragments under specific headings:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`my-note`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`my-note#heading-one`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`my-note#heading-one#subheading`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Obsidian Official - Embed Files`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://help.obsidian.md/embeds`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Obsidian Official - File Formats`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://help.obsidian.md/file-formats`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Callout`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Callout is a syntax for highlighting important information, similar to VitePress's `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: note`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` alert syntax.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!note`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Content`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Optional Title:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!tip`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`] Custom Title`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Content`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Types`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Callout supports the following types, with aliases automatically mapping to the corresponding main type:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Type        | Aliases                                                             | Description                |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------------------------------------------------------- | -------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`note`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`quote`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`cite`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                                                     | Notes, quotes              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tip`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`hint`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`check`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`done`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`success`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                                  | Tips, hints                |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`info`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`todo`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                                                              | Info, todos                |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`warning`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`question`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`help`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`faq`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                                           | Warnings, questions, help  |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`caution`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`attention`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`failure`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`fail`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`missing`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`danger`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`error`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`bug`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Cautions, failures, danger |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`important`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`example`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                                                           | Important, examples        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`details`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`abstract`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`summary`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tldr`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`                                       | Details, summaries         |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Basic Usage:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!NOTE`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> This is a note callout.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!NOTE`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> This is a note callout.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**With Title:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!TIP`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`] Useful Tip`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Using `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`pnpm`"),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},` can significantly speed up dependency installation.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!TIP`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`] Useful Tip`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Using `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`pnpm`"),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},` can significantly speed up dependency installation.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Multiple Types:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!success`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Operation completed successfully!`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!warning`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> This is a warning message.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!caution`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Proceed with caution, this operation is irreversible.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!success`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Operation completed successfully!`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!warning`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> This is a warning message.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!caution`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Proceed with caution, this operation is irreversible.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Details Type:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`details`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` type renders as an HTML `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`<details>`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` element, supporting expand/collapse:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!details`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Click to expand more content`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> This is hidden content.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`!details`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> Click to expand more content`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`> This is hidden content.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Obsidian Official - Callouts`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://help.obsidian.md/callouts`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Comments`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Content wrapped with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`%%`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` is treated as a comment and will not be rendered on the page.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Inline Comments:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is an %%inline comment%% example.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Block Comments:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is a block comment.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It can span multiple lines.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Inline Comment:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is an %%inline comment%% example.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is an %%inline comment%% example.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Block Comment:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Input:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Content before the comment`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is a block comment.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It can span multiple lines.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Content after the comment`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Output:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Content before the comment`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is a block comment.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It can span multiple lines.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Obsidian Official - Comments`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://help.obsidian.md/syntax#comments`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Notes`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` These plugins provide `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**compatibility support**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, not a full implementation of all Obsidian features`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Some Obsidian-specific features (such as graph view for internal links, backlinks, etc.) are not supported`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` When embedding content, the embedded page also participates in the theme's build process`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` PDF embedding requires the [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`vitepress-plugin-pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./pdf.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) plugin to work properly`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Video embedding requires the [`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`vitepress-plugin-video`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./video.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) plugin to work properly`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Embedded resources starting with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`/`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` or using `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`./`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` form will be loaded from the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`public`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` directory`)])])])])],-1),f[25]||=n(`div`,{"data-filepath":`plugins/pdf.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/pdf.md`},`plugins/pdf.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PDF`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-pdf" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PDF file embedding plugin for displaying a PDF viewer in the page.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-pdf`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` pdf `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-pdf'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { pdfMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-pdf'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(pdfMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithPDF } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-pdf/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithPDF`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx) `)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed a PDF using `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`@[pdf]()`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://example.com/sample.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./sample.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Specifying a Page`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`pdf page="3"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://example.com/sample.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`pdf p="3"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://example.com/sample.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Configuration Options`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`pdf no-toolbar width="100%" height="600px" zoom="100"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://example.com/sample.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Attribute Reference`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute    | Type               | Default  | Description  |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------ | ------------------ | -------- | ------------ |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`width`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`'100%'`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Width        |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`height`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | -        | Height       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ratio`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number \\| string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | -        | Aspect ratio |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`zoom`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`       | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`           | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`50`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | Zoom level   |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`no-toolbar`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Hide toolbar |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Example`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://plume.pengzhanbo.cn/files/sample-1.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://plume.pengzhanbo.cn/files/sample-1.pdf`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)])])])])],-1),f[26]||=n(`div`,{"data-filepath":`plugins/plantuml.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plantuml.md`},`plugins/plantuml.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PlantUML`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-plantuml" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PlantUML diagram plugin, supporting PlantUML chart rendering in Markdown.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-plantuml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` plantuml `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-plantuml'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    plantuml`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { plantumlMarkdownPlugin, plantumlVitePlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-plantuml'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`plantumlVitePlugin`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(plantumlMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    languageAlias: { plantuml: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'txt'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithPlantuml } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-plantuml/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithPlantuml`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use code blocks with the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plantuml`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` language tag:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Authentication Request`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: Authentication Response`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Output Format`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin supports `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`svg`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` (default) and `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`png`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` output formats. You can specify the format per diagram:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml png")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Example {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +attribute: string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +method(): void`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Or set a global default:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`plantuml`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ format: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'png'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` }) `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// default is 'svg'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### PlantumlPluginOptions`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` PlantumlPluginOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Output format, 'svg' | 'png'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` '`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`svg`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  format`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` PlantumlFormat`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * PlantUML server URL`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` '`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`https://www.plantuml.com/plantuml`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  serverURL`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` string`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Features`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Dark / Light mode**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Automatically generates both dark and light diagram variants, following the VitePress theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Chart / Source tabs**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Toggle between the rendered diagram and its PlantUML source code`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Fullscreen mode**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Click the fullscreen button to view the diagram in an overlay`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Download**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Download the current diagram as an image file`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Multi-language**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Built-in support for English, Chinese, Japanese, Korean, Spanish, French, Russian, German, and Portuguese`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **SVG optimization**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — SVGs are automatically optimized via SVGO, removing redundant styles and background layers`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Build caching**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` — Rendered diagrams are cached to disk for faster incremental builds`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Built-in Languages`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin includes built-in support for the following languages:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` English (en, en-US)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 简体中文 (zh, zh-CN)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 日本語 (ja)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 한국어 (ko)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Español (es)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Français (fr)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Русский (ru)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Deutsch (de)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Português (pt)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Sequence Diagram`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Authentication Request`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: Authentication Response`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Another authentication Request`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice <-- Bob: Another authentication Response`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Use Case Diagram`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`left to right direction`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "Customer" as customer`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "Cashier" as cashier`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`rectangle "POS System" {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  customer -- (Checkout)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Checkout) -- cashier`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Checkout) .> (Print Receipt) : include`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Checkout) .> (Payment) : include`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Payment) .> (Cash Payment)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Payment) .> (Scan to Pay)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Class Diagram`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Vehicle`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Car`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Bike`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Car`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Bike`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Engine`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Wheel`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Engine`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Wheel`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Activity Diagram`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`start`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:User Login;`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`if (Authenticated?) then (yes)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :Enter Dashboard;`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  if (New Messages?) then (yes)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :Show Notification;`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  else (no)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :Continue Browsing;`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  endif`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`else (no)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :Show Error;`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :Return to Login;`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`endif`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stop`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[27]||=n(`div`,{"data-filepath":`plugins/plot.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plot.md`},`plugins/plot.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plot`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-plot" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Hidden text plugin that reveals concealed text content on click or hover.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-plot`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` plot `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-plot'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    plot`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      trigger: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'hover'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,  `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// 'hover' | 'click', default 'hover'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      effect: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'mask'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,    `),n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// 'mask' | 'blur', default 'mask'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { plotMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-plot'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(plotMarkdownPlugin, {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        trigger: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'hover'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        effect: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'mask'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`// .vitepress/theme/index.ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithPlot } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-plot/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line diff add`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithPlot`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx) `)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Wrap hidden text with `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`!!`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The answer is !!plot!!`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`classname`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to set interaction behavior:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`!!plot!!{.click .blur}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supported `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`classname`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` values:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `.click`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` / `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.hover`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: Reveal on click / Reveal on hover`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}}," `.blur`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` / `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.mask`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: Blur effect / Mask effect`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` PlotOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Trigger method`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * - 'hover': Reveal on hover`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * - 'click': Reveal on click`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` '`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`hover`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  trigger`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'hover'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'click'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Hide effect`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * - 'mask': Mask effect (default)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * - 'blur': Blur effect`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` '`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`mask`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  effect`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'mask'`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` |`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'blur'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Lu Xun once said: "!!I never said that!!"`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Lu Xun once said: "!!I never said that!!"`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`There is no royal road to learning, !!but hard work pays off!!{.click .blur}.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`There is no royal road to learning, !!but hard work pays off!!{.click .blur}.`)])])])])],-1),f[28]||=n(`div`,{"data-filepath":`plugins/qrcode.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/qrcode.md`},`plugins/qrcode.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# QRCode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-qrcode" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`QR code generation plugin, generating QR codes from text or links.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-qrcode`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` qrcode `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-qrcode'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { qrcodeMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-qrcode'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(qrcodeMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithQrcode } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-qrcode/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithQrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Embed Block Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://www.baidu.com`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](arbitrary text)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./caniuse.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Styled Card Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode card title="Scan to visit"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://www.baidu.com`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Container Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Suitable for long text:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: qrcode title="Scan to visit"`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`https://www.baidu.com`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Attribute Reference`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute  | Type      | Description                            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`card`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Display in card mode                   |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`title`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Card title                             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`logo`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | QR code logo, link format, optional    |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`logoSize`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Logo size ratio, optional, default 0.2 |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`width`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | QR code width, optional                |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://www.baidu.com`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://www.baidu.com`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Internal links auto-add logo:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./file-tree.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./file-tree.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Using card mode:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode card title="Scan to visit File Tree Plugin"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./file-tree.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`qrcode card title="Scan to visit File Tree Plugin"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`./file-tree.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)])])])])],-1),f[29]||=n(`div`,{"data-filepath":`plugins/repo-card.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/repo-card.md`},`plugins/repo-card.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Repo Card`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`NpmBadge`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-repo-card"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A repository information card plugin that displays detailed GitHub/Gitee repository`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`cards in your Markdown. Supports embed syntax for individual cards and container`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`syntax for multi-card grid layouts.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-repo-card`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`Badge`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`Badge`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import repoCard from 'vitepress-plugin-repo-card'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [repoCard()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { repoCardMarkdownPlugin } from 'vitepress-plugin-repo-card'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(repoCardMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithRepoCard } from 'vitepress-plugin-repo-card/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithRepoCard(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `@[repo]()` syntax to embed individual repository cards. Defaults to GitHub")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"if `register` is omitted.")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](owner/name)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](owner/name)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](owner/name)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Display Full Name`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `fullname` parameter to show the `owner/name` full path. For")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`organization-owned repositories, the full name is displayed automatically.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname github](pengzhanbo/vitepress-tuck)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: repo` container to display multiple repository cards in a responsive")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`grid layout.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/core)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Single Repository Card`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**GitHub repository:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Gitee repository:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Display full name:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Multi-Card Grid Layout`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Card Information`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Each repository card displays the following:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Field       | Description                          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------------------------ |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Name        | Repository name or `owner/name` full |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Visibility  | Public / Private badge               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Archived    | Warning badge if archived            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Description | Repository description text          |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Language    | Primary language with color dot      |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Stars       | Formatted count (e.g. `1.2k`)        |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Forks       | Formatted count (e.g. `1.2k`)        |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| License     | License name (if available)          |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Component Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"You can also use the `VPRepoCard` component directly:")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`script`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"ts"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { VPRepoCard } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-repo-card/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`script`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vuejs/vitepress"`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"github"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"owner/name"`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"gitee"`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` fullname`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Props`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Prop       | Type                  | Default    | Description                       |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------------------- | ---------- | --------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `repo`     | `string`              | (required) | Repository in `owner/name` format |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `register` | `'github' \\| 'gitee'` | `'github'` | Repository platform               |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fullname` | `boolean`             | -          | Display full name (`owner/name`)  |")])])])])],-1),f[30]||=n(`div`,{"data-filepath":`plugins/steps.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/steps.md`},`plugins/steps.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Steps`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-steps" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Step container plugin for creating step-by-step guided content in Markdown.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-steps`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` steps `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`steps`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { stepsMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(stepsMarkdownPlugin)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Also import the styles in the theme:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps/style.css'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use the `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`::: steps`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` container to wrap step content, with each step starting from an unordered/ordered list item:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Step One`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step one`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Step Two`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step two`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Step Three`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step three, supports heading syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**Rendered Result:**`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Step One`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step one`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Step Two`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step two`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`-`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Step Three`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step three, supports heading syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[31]||=n(`div`,{"data-filepath":`plugins/video.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/video.md`},`plugins/video.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Video`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<NpmBadge name="vitepress-plugin-video" />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Multi-platform video embedding plugin, supporting Bilibili, YouTube, AcFun, and ArtPlayer.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-plugin-video`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### vitepress-tuck Mode <Badge type="tip">Recommended</Badge>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` video `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-video'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    video`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`      // All optional, default to true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      artplayer: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      youtube: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      bilibili: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      acfun: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`Learn more about `),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},`**vitepress-tuck**`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`../guide/quick-start.md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`){.readmore}`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Native Mode`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { videoMarkdownPlugin } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-video'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`md`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(videoMarkdownPlugin, {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        artplayer: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        youtube: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        bilibili: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        acfun: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { enhanceAppWithVideo } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-video/client'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enhanceApp`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`ctx`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    enhanceAppWithVideo`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(ctx)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Syntax`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Bilibili`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed Bilibili videos:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`bilibili`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`bvid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`bilibili`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](aid cid)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`bilibili p2 autoplay time=30`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`bvid`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option      | Type               | Description                            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------ | -------------------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`p{number}`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | -                  | Video part number                      |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`autoplay`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          | Auto play                              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`time`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number \\| string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Start time, seconds or HH:MM:SS format |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### YouTube`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed YouTube videos:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`youtube`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`video_id`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`youtube autoplay loop start=10 end=120`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`video_id`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option     | Type      | Description           |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | --------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`autoplay`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Auto play             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`loop`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Loop playback         |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`start`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Start time in seconds |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`end`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | End time in seconds   |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### AcFun`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed AcFun videos:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`acfun`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`ac_id`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### ArtPlayer`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use ArtPlayer to embed local or remote videos:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`artPlayer`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`/videos/demo.mp4`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`artPlayer muted autoplay poster="/cover.jpg" width="800px"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`/videos/demo.mp4`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option     | Type      | Default  | Description               |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------- | ------------------------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`autoplay`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Auto play                 |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`muted`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Muted                     |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`loop`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Loop playback             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`volume`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`number`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`0.75`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | Volume level              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`poster`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -        | Cover image URL           |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`autoMini`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`boolean`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`false`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | Auto mini mode            |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`width`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},'`"100%"`'),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` | Player width              |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`height`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -        | Player height             |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ratio`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    | `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`string`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | -        | Aspect ratio, e.g. "16:9" |`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supports `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mp4`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mp3`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`webm`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ogg`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mkv`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mov`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` formats.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If your video is in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mpd`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` or `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`dash`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` format, you'll also need to install `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`dashjs`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` i`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` dashjs`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If your video is in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`m3u8`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` or `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`hls`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` format, you'll also need to install `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`hls.js`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` i`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` hls.js`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If your video is in `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`ts`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` or `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`flv`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` format, you'll also need to install `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`mpegts.js`"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` i`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` mpegts.js`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`interface`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` VideoPluginOptions`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Enable ArtPlayer`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  artplayer`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` boolean`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Enable YouTube video embedding`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  youtube`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` boolean`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Enable Bilibili video embedding`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  bilibili`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` boolean`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`  /**`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * Enable AcFun video embedding`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   * `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`@default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`   */`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`  acfun`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`?:`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` boolean`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Examples`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Bilibili`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`bilibili`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`BV1EZ42187Hg`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`bilibili`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`BV1EZ42187Hg`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### YouTube`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`youtube`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`0JJPfz5dg20`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`youtube`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`0JJPfz5dg20`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### AcFun`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`acfun`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`ac47431669`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`acfun`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`ac47431669`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### ArtPlayer`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`artPlayer`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://artplayer.org/assets/sample/video.mp4`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#DBEDFF`,"--shiki-dark-text-decoration":`underline`}},`artPlayer`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`](`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-text-decoration":`underline`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-text-decoration":`underline`}},`https://artplayer.org/assets/sample/video.mp4`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)])])])])],-1),f[32]||=n(`div`,{"data-filepath":`plugins/watermark.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/watermark.md`},`plugins/watermark.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`watermark`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Watermark`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`NpmBadge`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-watermark"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Add watermark to your site. Pure client-side implementation, no node-side configuration required.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-watermark`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"This plugin only provides a client-side `setupWatermark` function, which must be called inside the")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`<"),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`script`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` block of a Layout wrapper component.")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Create a custom Layout wrapper component:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`vue [.vitepress`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`theme`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Layout.vue]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`script`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"ts"`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { setupWatermark } from 'vitepress-plugin-watermark'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import Theme from 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { h, useAttrs, useSlots } from 'vue'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const slots = useSlots()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const attrs = useAttrs()`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const Layout = () => h(Theme.Layout, attrs, slots)`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`setupWatermark()`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`script`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`Layout`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),n(`span`,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`}},`template`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Then register this Layout in your theme:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`ts [.vitepress`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`theme`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`/`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`index.ts]`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` type`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`import`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Layout `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`from`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './Layout.vue'`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`export`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},` default`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Layout,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`satisfies`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`## Configuration`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`setupWatermark`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` accepts an optional configuration object:")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`setupWatermark`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enabled: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'My Watermark'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontColor: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'#76747f'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  globalAlpha: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.165`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`200`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`200`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  rotate: `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`-`),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`22`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontSize: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'16px'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontFamily: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'sans-serif'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`| Option | Type | Default | Description |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`| ------ | ---- | ------- | ----------- |`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`enabled`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`boolean \\`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`|`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ((`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`pageData`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`:`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` PageData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` boolean)`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | Enable watermark; supports a function for dynamic control |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`content`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | Site title | Watermark text content |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontColor`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `'#76747f'` | Font color |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`globalAlpha`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.165`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` (normal) / `"),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.005`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` (blind mode) | Opacity |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`mode`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `'default'"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` \\`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`|`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}}," 'blind'` | `'default'` | Watermark mode: `'blind'` for blind watermark |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`width`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Width of each watermark cell |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`height`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Height of each watermark cell |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`rotate`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Rotation angle in degrees |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontSize`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Font size |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontFamily`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Font family |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontStyle`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Font style |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontWeight`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Font weight |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`image`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Image watermark URL |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`layout`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `'default'"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` \\`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`|`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}}," 'grid'` | — | Layout mode |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`zIndex`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | CSS z-index |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`mutationObserve`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`boolean`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Enable DOM mutation observer protection |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`monitorProtection`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`boolean`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Enable monitoring protection |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`movable`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`boolean`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Allow dragging the watermark |")]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`parent`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Element \\`),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`|`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | — | Mount target element |")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`For more options, see the [watermark-js-plus](https://github.com/zhensherlock/watermark-js-plus) documentation.`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`## Per-Page Watermark`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Control watermark on individual pages via frontmatter:`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### Enable Watermark`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### Custom Text`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`CONFIDENTIAL`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### Full Customization`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  content`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`DRAFT`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  fontColor`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'#ff0000'`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  globalAlpha`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.3`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  rotate`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`30`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### Disable on Specific Pages`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### Dynamic Enable via Function`)]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"Use an `"),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`enabled`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` function to dynamically control watermark based on the page path:")]),a(`
`),n(`span`,{class:`line`}),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`ts`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`setupWatermark`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enabled`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),n(`span`,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`}},`pageData`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`=>`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`}},`    // Only enable on pages under guide/`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`}},`    return`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` pageData.relativePath.`),n(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`startsWith`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'guide/'`),n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")])])])])],-1),f[33]||=n(`div`,{"data-filepath":`index.md`,class:`vp-code-block-title`},[n(`div`,{class:`vp-code-block-title-bar`},[n(`span`,{class:`vp-code-block-title-text`,"data-title":`index.md`},`index.md`)]),n(`div`,{class:`language-md`},[n(`button`,{title:`Copy Code`,class:`copy`}),n(`span`,{class:`lang`},`md`),n(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[n(`code`,null,[n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`layout: home`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: VitePress Tuck`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`hero:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: VitePress Tuck`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  text: Enhance vitepress configuration, provide plugins capability.`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  actions:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - text: Get Started`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      link: /guide/quick-start`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - text: Github`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      link: https://github.com/pengzhanbo/vitepress-tuck`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      theme: alt`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  image:`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    src: /tuck-logo.svg`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    alt: VitePress Tuck`)]),a(`
`),n(`span`,{class:`line`},[n(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`---`)])])])])],-1)]),_:1})])}var g=c(p,[[`render`,h]]);export{f as __pageData,g as default};