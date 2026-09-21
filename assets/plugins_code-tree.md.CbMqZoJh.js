import{Et as e,Ft as t,St as n,at as r,ct as i,n as a,nt as o,ot as s,st as c}from"./chunks/framework.BVFX0sDx.js";import{t as l}from"./chunks/NpmBadge.Cmk8QZyk.js";import{i as u}from"./chunks/browser.CjnLLGwi.js";import{t as d}from"./chunks/browser.CJ5o5bK7.js";var f=JSON.parse(`{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/code-tree.md","filePath":"en/plugins/code-tree.md","lastUpdated":1782066503000}`),p={name:`plugins/code-tree.md`},m={id:`vitepress-tuck-mode-recommended`,tabindex:`-1`};function h(a,f,p,h,g,_){let v=e(`CopyOrDownloadAsMarkdownButtons`),y=l,b=e(`Badge`),x=u,S=d;return n(),r(`div`,null,[f[37]||=o(`h1`,{id:`code-tree`,tabindex:`-1`},[c(`Code Tree `),o(`a`,{class:`header-anchor`,href:`#code-tree`,"aria-label":`Permalink to “Code Tree”`},`​`)],-1),i(v),i(y,{name:`vitepress-plugin-code-tree`}),f[38]||=s(`<p>Code tree plugin for rendering code structures with a file tree sidebar in Markdown, supporting file switching.</p><p>This plugin depends on the <a href="./file-tree">File Tree</a> plugin for the file tree sidebar components.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to “Installation”">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-0" id="tab-15-1" checked><label data-title="pnpm" for="tab-15-1">pnpm</label><input type="radio" name="group-0" id="tab-15-2"><label data-title="npm" for="tab-15-2">npm</label><input type="radio" name="group-0" id="tab-15-3"><label data-title="bun" for="tab-15-3">bun</label><input type="radio" name="group-0" id="tab-15-4"><label data-title="deno" for="tab-15-4">deno</label><input type="radio" name="group-0" id="tab-15-5"><label data-title="yarn" for="tab-15-5">yarn</label></div><div class="blocks"><div class="language-sh active"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to “Usage”">​</a></h2>`,5),o(`h3`,m,[f[1]||=c(`vitepress-tuck Mode `,-1),i(b,{type:`tip`},{default:t(()=>[...f[0]||=[c(`Recommended`,-1)]]),_:1}),f[2]||=c(),f[3]||=o(`a`,{class:`header-anchor`,href:`#vitepress-tuck-mode-recommended`,"aria-label":`Permalink to “vitepress-tuck Mode Recommended”`},`​`,-1)]),f[39]||=s(`<div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-tuck&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">codeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><p><a href="./../guide/quick-start" class="readmore">Learn more about <strong>vitepress-tuck</strong></a></p><h3 id="native-mode" tabindex="-1">Native Mode <a class="header-anchor" href="#native-mode" aria-label="Permalink to “Native Mode”">​</a></h3><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { codeTreeMarkdownPlugin } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      md.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(codeTreeMarkdownPlugin)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/theme/index.ts">.vitepress/theme/index.ts</span></div><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Theme } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { enhanceAppWithCodeTree } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree/client&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    enhanceAppWithCodeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">satisfies</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Theme</span></span></code></pre></div></div><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-label="Permalink to “Syntax”">​</a></h2><p>The plugin provides two syntaxes to render a code tree: a container syntax for inline file content, and an embed syntax to load files from a directory.</p><h3 id="container-syntax" tabindex="-1">Container Syntax <a class="header-anchor" href="#container-syntax" aria-label="Permalink to “Container Syntax”">​</a></h3><p>Use the <code>::: code-tree</code> container with fenced code blocks inside. Each fence must declare a filename via the <code>[filename]</code> syntax in its info string.</p><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree title=&quot;Project Structure&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`rs [main.rs]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h4 id="container-attributes" tabindex="-1">Container Attributes <a class="header-anchor" href="#container-attributes" aria-label="Permalink to “Container Attributes”">​</a></h4><table tabindex="0"><thead><tr><th>Attribute</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Code tree title</td><td>-</td></tr><tr><td><code>height</code></td><td>Code tree container height</td><td><code>420px</code></td></tr><tr><td><code>entry</code></td><td>Entry file, opened by default</td><td>-</td></tr><tr><td><code>show-sidebar</code></td><td>Show sidebar by default</td><td><code>false</code></td></tr></tbody></table><h4 id="active-file" tabindex="-1">Active File <a class="header-anchor" href="#active-file" aria-label="Permalink to “Active File”">​</a></h4><p>Add <code>:active</code> to a fence&#39;s info string to mark it as the default active file:</p><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts] :active</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [utils.ts]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> noop</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h3 id="embed-syntax" tabindex="-1">Embed Syntax <a class="header-anchor" href="#embed-syntax" aria-label="Permalink to “Embed Syntax”">​</a></h3><p>Use <code>@[code-tree](dir)</code> to embed a directory as a code tree. Files in the directory are loaded and rendered automatically.</p><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The <code>dir</code> supports the following prefixes:</p><table tabindex="0"><thead><tr><th>Prefix</th><th>Description</th></tr></thead><tbody><tr><td><code>@</code></td><td>Relative to VitePress <code>srcDir</code></td></tr><tr><td><code>/</code></td><td>Relative to VitePress project root</td></tr><tr><td>-</td><td>Relative to the current markdown file&#39;s directory</td></tr></tbody></table><h4 id="embed-attributes" tabindex="-1">Embed Attributes <a class="header-anchor" href="#embed-attributes" aria-label="Permalink to “Embed Attributes”">​</a></h4><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;Source&quot; height=&quot;500px&quot; entry=&quot;index.ts&quot; show-sidebar=true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to “Configuration”">​</a></h2><h3 id="codetreepluginoptions" tabindex="-1">CodeTreePluginOptions <a class="header-anchor" href="#codetreepluginoptions" aria-label="Permalink to “CodeTreePluginOptions”">​</a></h3><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeTreePluginOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  /**</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * Default code tree container height</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">420px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   */</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  height</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  /**</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * Glob patterns to ignore files</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * Applied when loading files from a directory via the embed syntax</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * node_modules and .DS_Store are always ignored</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   */</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  ignores</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  /**</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * File loaders</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * Used to load resource files when embedding a directory with \`@[code-tree](dir)\`</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * Custom loaders are merged before the built-in ones, so they take precedence</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   */</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  loaders</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeTreeFileLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="file-loaders" tabindex="-1">File Loaders <a class="header-anchor" href="#file-loaders" aria-label="Permalink to “File Loaders”">​</a></h3><p>Loaders are used by the embed syntax to load file content. The plugin ships with built-in loaders for common file types, and custom loaders are merged before the built-in ones, so they take precedence.</p><p>Built-in loaders cover the following file types:</p><ul><li>Dot files (<code>.git*</code>, <code>.env*</code>, <code>.*ignore</code>, <code>.npmrc</code>): Rendered as plain text</li><li><code>.XXXrc</code> config files (e.g. <code>.eslintrc</code>): Rendered as JSON</li><li>Image files: Rendered as <code>&lt;img&gt;</code> tags with proper <code>src</code> resolution</li><li>Source files supported by Shiki: Rendered as fenced code blocks with syntax highlighting</li></ul><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree, { loadCodeContent } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-tuck&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    codeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;500px&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ignores: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;**/*.test.ts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      loaders: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          filter: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;**/*.md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loadCodeContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(file, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;md&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p>The <code>filter</code> field accepts a glob pattern string, an array of glob patterns, or a predicate function that receives a <code>CodeTreeFile</code> and returns a boolean.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to “Example”">​</a></h2><h3 id="container-syntax-1" tabindex="-1">Container Syntax <a class="header-anchor" href="#container-syntax-1" aria-label="Permalink to “Container Syntax”">​</a></h3><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::code-tree title=&quot;Code Tree&quot; show-sidebar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`rs [main.rs]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div>`,34),i(S,{title:`Code Tree`,"entry-file":`index.ts`,"show-sidebar":``},{"file-tree":t(()=>[i(x,{filename:`index.ts`,level:1,type:`file`,expanded:``,filepath:`index.ts`}),i(x,{filename:`main.rs`,level:1,type:`file`,expanded:``,filepath:`main.rs`})]),default:t(()=>[f[4]||=o(`div`,{"data-filepath":`index.ts`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`index.ts`},`index.ts`)]),o(`div`,{class:`language-ts`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`ts`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)])])])])],-1),f[5]||=o(`div`,{"data-filepath":`main.rs`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`main.rs`},`main.rs`)]),o(`div`,{class:`language-rs`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`rs`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`fn`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` main`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`() {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    println!`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"Hello, world!"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`);`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)])])])])],-1)]),_:1}),f[40]||=s(`<h3 id="embed-syntax-1" tabindex="-1">Embed Syntax <a class="header-anchor" href="#embed-syntax-1" aria-label="Permalink to “Embed Syntax”">​</a></h3><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;Code Tree&quot; show-sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">@/en</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,2),i(S,{title:`Code Tree`,"entry-file":`guide/api.md`,"show-sidebar":``},{"file-tree":t(()=>[i(x,{filename:`guide`,level:1,type:`folder`,expanded:``},{default:t(()=>[i(x,{filename:`api.md`,level:2,type:`file`,expanded:``,filepath:`guide/api.md`}),i(x,{filename:`plugin-dev.md`,level:2,type:`file`,expanded:``,filepath:`guide/plugin-dev.md`}),i(x,{filename:`quick-start.md`,level:2,type:`file`,expanded:``,filepath:`guide/quick-start.md`}),i(x,{filename:`toolkit.md`,level:2,type:`file`,expanded:``,filepath:`guide/toolkit.md`}),i(x,{filename:`wrap-plugin.md`,level:2,type:`file`,expanded:``,filepath:`guide/wrap-plugin.md`})]),_:1}),i(x,{filename:`plugins`,level:1,type:`folder`,expanded:``},{default:t(()=>[i(x,{filename:`abbr.md`,level:2,type:`file`,expanded:``,filepath:`plugins/abbr.md`}),i(x,{filename:`annotation.md`,level:2,type:`file`,expanded:``,filepath:`plugins/annotation.md`}),i(x,{filename:`caniuse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/caniuse.md`}),i(x,{filename:`code-collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-collapse.md`}),i(x,{filename:`code-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-tree.md`}),i(x,{filename:`codepen.md`,level:2,type:`file`,expanded:``,filepath:`plugins/codepen.md`}),i(x,{filename:`collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/collapse.md`}),i(x,{filename:`field.md`,level:2,type:`file`,expanded:``,filepath:`plugins/field.md`}),i(x,{filename:`file-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/file-tree.md`}),i(x,{filename:`icons.md`,level:2,type:`file`,expanded:``,filepath:`plugins/icons.md`}),i(x,{filename:`intro.md`,level:2,type:`file`,expanded:``,filepath:`plugins/intro.md`}),i(x,{filename:`jsfiddle.md`,level:2,type:`file`,expanded:``,filepath:`plugins/jsfiddle.md`}),i(x,{filename:`mark.md`,level:2,type:`file`,expanded:``,filepath:`plugins/mark.md`}),i(x,{filename:`mermaid.md`,level:2,type:`file`,expanded:``,filepath:`plugins/mermaid.md`}),i(x,{filename:`npm-to.md`,level:2,type:`file`,expanded:``,filepath:`plugins/npm-to.md`}),i(x,{filename:`obsidian.md`,level:2,type:`file`,expanded:``,filepath:`plugins/obsidian.md`}),i(x,{filename:`pdf.md`,level:2,type:`file`,expanded:``,filepath:`plugins/pdf.md`}),i(x,{filename:`plantuml.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plantuml.md`}),i(x,{filename:`plot.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plot.md`}),i(x,{filename:`qrcode.md`,level:2,type:`file`,expanded:``,filepath:`plugins/qrcode.md`}),i(x,{filename:`repo-card.md`,level:2,type:`file`,expanded:``,filepath:`plugins/repo-card.md`}),i(x,{filename:`stackblitz.md`,level:2,type:`file`,expanded:``,filepath:`plugins/stackblitz.md`}),i(x,{filename:`steps.md`,level:2,type:`file`,expanded:``,filepath:`plugins/steps.md`}),i(x,{filename:`video.md`,level:2,type:`file`,expanded:``,filepath:`plugins/video.md`}),i(x,{filename:`watermark.md`,level:2,type:`file`,expanded:``,filepath:`plugins/watermark.md`})]),_:1}),i(x,{filename:`index.md`,level:1,type:`file`,expanded:``,filepath:`index.md`})]),default:t(()=>[f[6]||=o(`div`,{"data-filepath":`guide/api.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/api.md`},`guide/api.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# API Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## vitepress-tuck`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### defineConfig`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`defineConfig` is the core function of `vitepress-tuck`, used as a replacement for VitePress's `defineConfig`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function defineConfig<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`ThemeConfig`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` =`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` DefaultTheme.Config`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  config: UserConfig<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NoInfer`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<ThemeConfig`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> & TuckConfig,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): UserConfig<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NoInfer`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<ThemeConfig`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Parameters`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Parameter | Type                      | Description                                  |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------- | ------------------------- | -------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `config`  | `UserConfig & TuckConfig` | VitePress original config + `plugins` option |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`TuckConfig` definition:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface TuckConfig {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * vitepress plugin list`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins?: VitepressPlugin[]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Options for the unplugin-vue-components plugin.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @see - https://github.com/unplugin/unplugin-vue-components`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  components?: ComponentsOptions`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Return Value`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Returns the merged and complete VitePress `UserConfig` object.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### How It Works`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"1. Iterates through the `plugins` array, merging each plugin's `markdown`, `vite`, `vue` and other configurations.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"2. Collects all hooks (`buildEnd`, `transformHead`, `transformHtml`, `transformPageData`, `postRender`)")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   and merges them according to their respective strategies:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `markdown.config`, `buildEnd` → concurrent execution")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `transformHead` → concurrent execution with result merging")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `transformHtml`, `transformPageData`, `postRender` → sequential execution, chained")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"3. Injects the `client` configuration from plugins into the built-in `virtual-enhance-app` virtual module.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"4. Collects `componentResolver` declarations from plugins into the built-in `unplugin-vue-components` resolver list.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`5. Finally merges the user's own configuration.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### definePlugin`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Used to define VitePress plugins. It is a type helper function that helps developers create plugins in a standardized way.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function definePlugin<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugin: (option?: T) => VitepressPlugin,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): (option?: T) => VitepressPlugin`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Parameters`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Parameter | Type                              | Description                                                                 |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------- | --------------------------------- | --------------------------------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `plugin`  | `(option?: T) => VitepressPlugin` | Plugin factory function, receives optional options, returns a plugin object |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VitepressPlugin`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Type definition for plugin objects:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface VitepressPlugin extends Pick<`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  UserConfig,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  'markdown' | 'vite' | 'vue' | 'buildEnd' | 'transformHead' | 'transformHtml' | 'transformPageData' | 'postRender'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Plugin name (required, for identification and debugging)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: string`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Client configuration, automatically injected into virtual:enhance-app`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client?: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * Custom import statement list`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     *`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * @example`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * imports: ['import "my-plugin/style.css"']`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports?: string[]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * Client-side enhance function name.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * - Not set: no enhanceApp function is injected`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * - true: default function name is `enhanceApp`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * - string: the specified function name`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     *`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * @example`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * enhance: 'enhanceAppWithMyPlugin'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance?: string | boolean`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Component resolvers for unplugin-vue-components auto-import.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - String array: declared component names are resolved from `<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`plugin-name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">/client`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - ComponentResolver object: custom resolve logic`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @example`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * ```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` // Simple form`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * componentResolver: ['MyComponent', 'OtherComponent']`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * ```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver?: string[] | ComponentResolver`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Supported VitePress Configuration Options`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Property            | Type                              | Description                                                                                          |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `markdown`          | `UserConfig['markdown']`          | Markdown-related configuration, commonly used with `markdown.config` to register markdown-it plugins |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `vite`              | `UserConfig['vite']`              | Vite configuration, for registering Vite plugins and optimization options                            |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `vue`               | `UserConfig['vue']`               | Vue application-level configuration                                                                  |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `buildEnd`          | `UserConfig['buildEnd']`          | Build completion hook (concurrent)                                                                   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHead`     | `UserConfig['transformHead']`     | HTML head transform hook (concurrent, results merged)                                                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHtml`     | `UserConfig['transformHtml']`     | HTML content transform hook (sequential, chained)                                                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformPageData` | `UserConfig['transformPageData']` | Page data transform hook (sequential, chained)                                                       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `postRender`        | `UserConfig['postRender']`        | Post-render hook (sequential, chained)                                                               |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### virtual:enhance-app`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`virtual:enhance-app` is a virtual module provided by `vitepress-tuck`.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"It automatically collects all plugins' `client` configurations and generates the corresponding code.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Import it in the theme entry:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import enhanceApp from 'virtual:enhance-app'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceApp(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`TypeScript support requires adding the type reference:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [tsconfig.json]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "compilerOptions": {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "types": ["vitepress-tuck/client-types"]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Built-in Plugin: auto-components`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-tuck` integrates [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) as")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`a built-in plugin, providing automatic on-demand component importing. This plugin is enabled by default — no manual registration required.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Default Behavior`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Scans `.vue` and `.md` files for component usage")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Generates type declarations at `node_modules/.vite/components.d.ts`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Automatically collects `componentResolver` declarations from all plugins")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Custom Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Customize `unplugin-vue-components` behavior via the `components` option in `defineConfig`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  components: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // Custom scan directories`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    dirs: ['src/components'],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // Use directory as namespace`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    directoryAsNamespace: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // Other unplugin-vue-components options...`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Plugin `componentResolver` declarations are merged with the user's `components` configuration.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Plugin developers only need to declare `componentResolver` in their plugin,")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and users can use the corresponding components directly in Markdown or Vue files without manual imports.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[7]||=o(`div`,{"data-filepath":`guide/plugin-dev.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/plugin-dev.md`},`guide/plugin-dev.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plugin Development`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-tuck` provides the `definePlugin` function to help developers easily create VitePress plugins.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"With `definePlugin`, you can centralize options like `markdown`, `vite`, and `vue` — which would")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`otherwise require scattered configuration by users — into a single plugin function.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Basic Structure`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"A plugin based on `vitepress-tuck` consists of the following parts:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin((options?: MyPluginOptions) => ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Client configuration: auto-injected into virtual:enhance-app`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: 'enhanceAppWithMyPlugin',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Component resolver: declare plugin components for auto on-demand import`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: ['MyComponent', 'OtherComponent'],`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Markdown configuration: register markdown-it plugins`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(myMarkdownPlugin, options?.markdownOptions)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Vite configuration`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [myVitePlugin(options?.viteOptions)],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Other VitePress hooks`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  buildEnd: (site) => { /* ... */ },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformHead: (ctx) => { /* ... */ },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformHtml: (code, id, ctx) => { /* ... */ },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformPageData: (pageData, ctx) => { /* ... */ },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  postRender: (context) => { /* ... */ },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Core Concepts`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### name`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Each plugin must have a unique `name` for identification and debugging:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### client`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `client` configuration is used to inject code into the client side. `vitepress-tuck` automatically")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"injects this code into the `virtual:enhance-app` virtual module.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### client.imports`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Add custom import statements, commonly used for importing style files:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      'import "vitepress-plugin-my-plugin/style.css"',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### client.enhance`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Specifies the client-side enhance function name. This function will be called within the VitePress theme's `enhanceApp(ctx)`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- When set to `true`, the default function name is `enhanceApp`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- When set to a string, that string is the function name`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: 'enhanceAppWithMyPlugin',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Correspondingly, export a function with the same name in the plugin's client entry file:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// client/index.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { EnhanceAppContext } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Register components, directives, etc.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.component('MyComponent', MyComponent)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### componentResolver`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `componentResolver` declares the Vue components a plugin provides, enabling automatic on-demand import via")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"the built-in `unplugin-vue-components`. Users can use component names directly in Markdown or Vue files without manual imports.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### String Array Form`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The simplest form is an array of component names — they are resolved from `<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`plugin-name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">/client`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: ['MyComponent', 'OtherComponent'],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Correspondingly, export these components in the plugin's client entry:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// client/index.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import MyComponent from './components/MyComponent.vue'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import OtherComponent from './components/OtherComponent.vue'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export { MyComponent, OtherComponent }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Custom ComponentResolver`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"For more complex resolution logic, pass a `ComponentResolver` object from `unplugin-vue-components`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { ComponentResolver } from 'unplugin-vue-components'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const myResolver: ComponentResolver = {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: 'component',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolve: (name) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    if (name.startsWith('My')) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      return { name, from: 'vitepress-plugin-my-plugin/client' }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin(() => ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: myResolver,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"When a plugin uses both `client.enhance` for component registration and `componentResolver`,")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"prefer `componentResolver` for on-demand importing to reduce unnecessary component bundling.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### markdown`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Configure markdown-it plugins to extend Markdown syntax:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // Register custom containers`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(containerPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // Register inline rules`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.inline.ruler.before('emphasis', 'my_rule', myRule)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vite`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Configure Vite plugins and optimization options:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [myVitePlugin()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: ['my-plugin-package'],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Hooks`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`definePlugin` supports various VitePress lifecycle hooks:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Hook                | Description                    | Execution                  |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | ------------------------------ | -------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `buildEnd`          | Triggered on build completion  | Concurrent                 |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHead`     | Transforms HTML head           | Concurrent, results merged |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHtml`     | Transforms HTML content        | Sequential, chained        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformPageData` | Transforms page data           | Sequential, chained        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `postRender`        | Triggered after page rendering | Sequential, chained        |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Client Code Organization`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`When a plugin needs to provide client-side code (e.g., Vue components), the recommended directory structure is:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="my-plugin"`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- my-plugin`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - src`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - client`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - components`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        - MyComponent.vue`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - index.ts # Export enhanceApp function`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - node`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - myPlugin.ts # Plugin core logic`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - index.ts # Plugin entry, using definePlugin`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - package.json`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - tsconfig.json`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Configure `exports` in `package.json` to export client code separately:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "exports": {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ".": {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "types": "./dist/node/index.d.ts",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "default": "./dist/node/index.js"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "./client": {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "browser": "./dist/client/browser/index.js",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "default": "./dist/client/ssr/index.js"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Recommended: vitepress-plugin-toolkit`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` provides a rich set of utility functions to assist plugin development, including:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createContainerPlugin` — Create markdown-it custom containers")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createContainerSyntaxPlugin` — Create custom syntax containers")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createEmbedRuleBlock` — Create embed syntax blocks")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `resolveAttrs` / `stringifyAttrs` — Attribute parsing and serialization")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createLogger` — Logging utility")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createLocales` — Internationalization support")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `useSize` — Responsive size calculation")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`See the [Toolkit API documentation](./toolkit) for details.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Complete Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Here is a simple step plugin built with `definePlugin`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [node/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerPlugin } from 'vitepress-plugin-toolkit'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export const stepsPlugin = (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin(md, 'steps', {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    before: () => '<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vp-steps"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin(() => ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-steps',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: ['import "vitepress-plugin-steps/style.css"'],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stepsPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Users simply need to:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import steps from 'vitepress-plugin-steps'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [steps()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[8]||=o(`div`,{"data-filepath":`guide/quick-start.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/quick-start.md`},`guide/quick-start.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Quick Start`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## What is vitepress-tuck?`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` provides simple, flexible, and low-barrier plugin development and integration capabilities`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`for VitePress. It wraps VitePress's `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to provide an additional `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option, shifting the`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`complexity of plugin integration into the plugins themselves, so users only need to add plugins to the `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` array.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-tuck`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Using in a VitePress Site`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### Replace the Configuration File`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Replace `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` in `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/config.ts`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` with `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`'s `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line diff remove`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  import { defineConfig } from 'vitepress-tuck' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  export default defineConfig({`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    plugins: [`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // Add plugins here`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    // Other VitePress config options ...`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### Configure the Client Entry`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Import `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`virtual:enhance-app`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` in `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/theme/index.ts`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` enhanceApp `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'virtual:enhance-app'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      enhanceApp(ctx) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  } satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"  `virtual:enhance-app`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` is a virtual module. `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` automatically injects plugin client code into it — no manual configuration required.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### TypeScript Support`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  If your project uses TypeScript, add the type reference in `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tsconfig.json`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```json")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`    "compilerOptions"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "types"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck/client-types"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Using Plugins`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Using plugins is simple — just import and invoke them in the `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` array:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` steps `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` mermaid `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-mermaid-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    steps`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    mermaid`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // Plugin options can be passed here`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Refer to each plugin's documentation for its configuration options.`)])])])])],-1),f[9]||=o(`div`,{"data-filepath":`guide/toolkit.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/toolkit.md`},`guide/toolkit.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Toolkit API`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-toolkit"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` is a VitePress plugin development toolkit that provides a rich set of utility functions to assist plugin development.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Installation:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-toolkit`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Node-side API`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Import from `vitepress-plugin-toolkit`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttrs,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttr,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  stringifyAttrs,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLogger,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLocales,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getVitepressConfig,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getLocaleWithPath,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveRouteLink,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  parseRect,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  slugify,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  treatAsHtml,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerPlugin`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Create a markdown-it custom container plugin. Used for processing `::: type` syntax, where content is parsed normally by markdown-it.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerPlugin(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options?: ContainerOptions,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**ContainerOptions:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface ContainerOptions {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Callback for rendering container opening tag`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  before?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Callback for rendering container closing tag`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  after?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Usage Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerPlugin } from 'vitepress-plugin-toolkit'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin(md, 'steps', {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    before: () => '<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vp-steps"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerSyntaxPlugin`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Create a custom syntax container plugin. Unlike `createContainerPlugin`, the content is not parsed by markdown-it and must be handled manually.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerSyntaxPlugin(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: RenderRule,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Raw content inside the container is accessible via `token.content`, and metadata via `token.meta`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Usage Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerSyntaxPlugin } from 'vitepress-plugin-toolkit'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin(md, 'file-tree', (tokens, index) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    const { content, meta } = tokens[index]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"    return `<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"file-tree"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">${content}</"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createEmbedRuleBlock`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Create an embed rule block for handling `@[type ...](args)` syntax.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createEmbedRuleBlock<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: EmbedRuleBlockOptions<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**EmbedRuleBlockOptions:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface EmbedRuleBlockOptions<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Embed type, e.g. 'pdf', 'qrcode' */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Token name, defaults to type */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name?: string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Name of the rule to insert before, default 'code' */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  beforeName?: string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Rule options */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ruleOptions?: RuleOptions`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  /** Parse the `info` and `source` in `@[type info](source)` and convert them into a metadata object. */")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  meta: (info: string, source: string) => Meta`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Generate content from metadata */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content?: (meta: Meta, env: MarkdownEnv) => string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Render function */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: (tokens: Token[], index: number, env: MarkdownEnv) => string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Usage Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createEmbedRuleBlock } from 'vitepress-plugin-toolkit'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock(md, {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    type: 'pdf',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    meta: (info, source) => ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      attrs: info,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      src: source,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    content: (meta, env) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"      return `<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPPdf`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},'"${meta.src}"'),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}}," ${meta.attrs}"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," />`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttrs`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Parse an attribute string into an object.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttrs<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> = Record<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(info: string): T`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`resolveAttrs('width="100%" height="400" dark')`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => { width: '100%', height: '400', dark: true }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttr`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Parse a single attribute value from an info string.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttr(info: string, key: string): string | undefined`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### stringifyAttrs`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Serialize an attributes object into an HTML attribute string.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function stringifyAttrs<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` object`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` = `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`object`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  attrs: T,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  withUndefinedOrNull?: boolean,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  forceStringify?: (keyof T)[],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stringifyAttrs({ width: '100%', height: 400, dark: true })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => ' width="100%" :height="400" dark'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLogger`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Create a logger instance.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLogger(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: string,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  defaultLevel?: LogLevel,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Logger`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**LogLevel:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'silent'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const logger = createLogger('my-plugin', 'info')`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.info('Plugin loaded')       // [my-plugin] Plugin loaded`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.warn('Potential issue')     // [my-plugin] Potential issue`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.error('An error occurred')  // [my-plugin] An error occurred`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.debug('Debug info', true)   // [my-plugin] Debug info`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLocales`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Create multi-language configuration, automatically matching VitePress's language settings.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLocales<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`LocaleData`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` unknown`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  builtinLocales: BuiltinLocales<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`LocaleData`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales?: Record<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Record<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const locales = createLocales(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['en', 'en-US'], { chart: 'Chart', source: 'Source' }],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['zh', 'zh-CN'], { chart: '图表', source: '源码' }],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getVitepressConfig`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Get the current VitePress site configuration.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getVitepressConfig(): SiteConfig`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getLocaleWithPath`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Get language information based on a file path.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getLocaleWithPath(path: string): { lang: string, locale: string }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveRouteLink`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Convert a relative path to a VitePress route link.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveRouteLink(url: string, env: MarkdownEnv): string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### parseRect`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Parse a size string, automatically appending a unit if a number is passed.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function parseRect(str: string, unit?: string): string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('400')     // => '400px'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('50%')     // => '50%'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('10', 'rem') // => '10rem'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### slugify`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Convert a string to a URL-friendly slug format.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function slugify(str: string): string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### treatAsHtml`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Determine whether a filename should be treated as HTML (non-known-resource extensions are treated as HTML).`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function treatAsHtml(filename: string): boolean`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Client-side API`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Import from `vitepress-plugin-toolkit/client`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPCopyButton,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPLoading,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  useSize,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPhone,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isWindows,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPad,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isIOS,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMacOS,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMobile,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isSafari,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPCopyButton`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Copy button component.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPCopyButton`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` :text`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"code"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPLoading`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Loading state component.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPLoading`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### useSize`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Responsive size calculation composable.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function useSize<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` HTMLElement`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  el: TemplateRef<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: ToRefs<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`SizeOptions`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extraHeight?: MaybeRef<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`number`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: Ref<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: Ref<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resize: () => void`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**SizeOptions:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface SizeOptions {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width?: string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height?: string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ratio?: number | string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Device Detection Utilities`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Function | Description |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ----------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPhone()` | Check if iPhone |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPad()` | Check if iPad |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIOS()` | Check if iOS device |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMacOS()` | Check if macOS |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isWindows()` | Check if Windows |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMobile()` | Check if mobile device |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isSafari()` | Check if Safari browser |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Shared Utilities`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Can be imported from either `vitepress-plugin-toolkit` or `vitepress-plugin-toolkit/client`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isExternal`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Check if a link is an external link.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isExternal(path: string): boolean`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isLinkWithProtocol`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Check if a link contains a protocol prefix.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isLinkWithProtocol(link: string): boolean`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## CSS Transition Animations`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` provides predefined CSS transition animations that can be imported in plugins:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-up.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-down.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-left.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-right.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-up.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-down.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-left.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-right.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-scale-up.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-width-expand.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-height-expand.css';`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[10]||=o(`div`,{"data-filepath":`guide/wrap-plugin.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/wrap-plugin.md`},`guide/wrap-plugin.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Wrapping Existing Plugins`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If your VitePress site is already using plugins, or you have a plugin that hasn't been packaged`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`for `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` mode, you can easily wrap it into a compatible form.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Why Wrap?`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Traditional VitePress plugins often require users to configure multiple locations:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// Traditional approach — configuration scattered across multiple places`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`By wrapping into a `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` plugin, users only need to add it to the `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` array — all`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`configuration is handled internally by the plugin.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Wrapping Methods`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping with definePlugin`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`For any existing plugin logic, use `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` to wrap it:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someVitePlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin/vite'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`options`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`?:`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-some-plugin'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin, options)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping a Markdown-Only Plugin`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If the plugin only involves a markdown-it extension, wrapping is very simple:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownItPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping a Vite-Only Plugin`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If the plugin only needs Vite configuration:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myVitePlugin `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vite-plugin-my'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`options`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`?:`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myVitePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### Wrapping a Plugin That Requires Client Injection`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`If the plugin needs to inject components or styles on the client side, configure the `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // Inject styles`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      'import "my-plugin/style.css"'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'enhanceAppWithMyPlugin'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // Ensure correct bundling during SSR`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'my-plugin'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`And export the enhance function in the client entry file:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// client/index.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { EnhanceAppContext } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` MyComponent `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './components/MyComponent.vue'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` function`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` enhanceAppWithMyPlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ `),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`app`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` }`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`:`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` EnhanceAppContext`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`component`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'MyComponent'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, MyComponent)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Real-World Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Here's how to wrap `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-group-icons`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` into a `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` plugin:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { groupIconMdPlugin, groupIconVitePlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-group-icons'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-group-icons'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'import `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`virtual:group-icons.css`),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(groupIconMdPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`      groupIconVitePlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`        'vitepress-plugin-group-icons'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## Maintaining Compatibility`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Wrapped plugins can still be used independently (without `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`). Simply provide both usage modes in the plugin's README:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// Method 1: vitepress-tuck mode (recommended)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myPlugin `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myPlugin`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// Method 2: Native VitePress mode`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { myPlugin } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin/raw'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[11]||=o(`div`,{"data-filepath":`plugins/abbr.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/abbr.md`},`plugins/abbr.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Abbr`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-abbr"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Abbreviation plugin that adds an interactive tooltip to abbreviations in Markdown, displaying the full description on hover or focus.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Forked and modified from [`markdown-it-abbr`](https://github.com/markdown-it/markdown-it-abbr).")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-abbr`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import abbr from 'vitepress-plugin-abbr'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [abbr()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { abbrMarkdownPlugin } from 'vitepress-plugin-abbr' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(abbrMarkdownPlugin, {`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: 'HyperText Markup Language',`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        W3C: 'World Wide Web Consortium',`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Register the component in the theme:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithAbbr } from 'vitepress-plugin-abbr/client' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithAbbr(ctx) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Define an abbreviation using the `*[ABBR]: Full description` syntax. Once defined,")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`every occurrence of the abbreviation throughout the document is automatically recognized`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and rendered with an interactive tooltip.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The HTML specification is maintained by the W3C.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The HTML specification is maintained by the W3C.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Inline Markdown in Descriptions`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The full description of an abbreviation supports inline Markdown syntax, such as bold, italic, links, and code.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The **HTML** specification is maintained by the W3C.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World [Wide Web](https://www.w3.org/) Consortium`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The **HTML** specification is maintained by the W3C.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World [Wide Web](https://www.w3.org/) Consortium`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Global Abbreviations`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Instead of defining abbreviations inline in each Markdown file, you can provide a global preset of abbreviations`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`through the plugin options. When both a global definition and an inline definition exist for the same abbreviation,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`the inline definition takes precedence.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import abbr from 'vitepress-plugin-abbr'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    abbr({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: 'HyperText Markup Language',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      W3C: 'World Wide Web Consortium',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"With this configuration, every occurrence of `HTML` and `W3C` across all pages will be rendered as")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`abbreviations automatically, without needing to define them in each file.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Hover over or focus the abbreviations below to see their full descriptions:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[API]: Application Programming Interface`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[CSS]: Cascading Style Sheets`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[API]: Application Programming Interface`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[CSS]: Cascading Style Sheets`)])])])])],-1),f[12]||=o(`div`,{"data-filepath":`plugins/annotation.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/annotation.md`},`plugins/annotation.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Annotation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-annotation"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation plugin that adds interactive annotation markers to Markdown content.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Clicking a marker reveals a popover displaying the annotation content.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation content supports full block-level Markdown syntax.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A single label can be defined multiple times — all definitions are collected and displayed as separate items in the popover.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-annotation`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import annotation from 'vitepress-plugin-annotation'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [annotation()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { annotationMarkdownPlugin } from 'vitepress-plugin-annotation' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(annotationMarkdownPlugin, {`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: 'HyperText Markup Language',`)]),c(`
`),o(`span`,{class:`line diff add`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Register the component in the theme:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithAnnotation } from 'vitepress-plugin-annotation/client' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithAnnotation(ctx) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Define an annotation using the `[+label]: annotation content` syntax, then reference it anywhere in your document")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"with `[+label]`. The reference is rendered as a small interactive marker that, on click,")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`reveals a popover displaying the annotation content.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The **four great classical novels** [+novels] of Chinese literature are widely known.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]: **Romance of the Three Kingdoms** — a historical novel set in the Three Kingdoms period.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The **four great classical novels** [+novels1] of Chinese literature are widely known.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels1]: **Romance of the Three Kingdoms** — a historical novel set in the Three Kingdoms period.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Block-level Markdown in Annotations`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation content supports full block-level Markdown syntax, including headings, paragraphs, lists, code blocks, and more.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The framework is built on [+vue].`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+vue]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ## Vue`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  A progressive framework for building user interfaces.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - Reactive data binding`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - Component-based architecture`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - [Learn more](https://vuejs.org/)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Multi-line Definitions`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Annotation definitions can span multiple lines. Continuation lines must be indented by at least two spaces.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Empty lines within the indented block are preserved as part of the annotation content.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A non-indented content line (such as the next definition or a new paragraph) terminates the multi-line definition.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This concept is explained in [+detail].`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+detail]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  This is the first paragraph of the annotation.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  This is the second paragraph, separated by an empty line`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  but still part of the same annotation.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This line is not indented, so the annotation definition ends here.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Multiple Definitions per Label`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A single label can be defined multiple times. All definitions are collected and displayed as separate items`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`in the popover, allowing you to provide multiple pieces of related information for the same reference.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript has multiple versions [+js].`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2015 (ES6)** — Introduced classes, modules, arrow functions, and more.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2020** — Added optional chaining, nullish coalescing, and BigInt.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript has multiple versions [+js].`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2015 (ES6)** — Introduced classes, modules, arrow functions, and more.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2020** — Added optional chaining, nullish coalescing, and BigInt.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Global Annotations`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Instead of defining annotations inline in each Markdown file, you can provide a global preset of annotations through the plugin options. This is useful for terms that should be annotated consistently across all pages.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import annotation from 'vitepress-plugin-annotation'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    annotation({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: 'HyperText Markup Language',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      CSS: ['Cascading Style Sheets', 'A style sheet language used for describing the presentation of a document.'],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Each global annotation value can be a string or an array of strings. When an array is provided, each element becomes a separate item in the popover, just like multiple inline definitions for the same label.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Click the annotation markers below to see the full content:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The **four great classical novels** [+novels] of Chinese literature are widely known.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Romance of the Three Kingdoms**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the backdrop of the Three Kingdoms period, it depicts the political and military struggles among Wei, Shu, and Wu.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Journey to the West**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Tells the story of the Tang Monk and his three disciples on their journey to obtain Buddhist scriptures, filled with mythology and fantastical adventures.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Dream of the Red Chamber**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the rise and fall of the four great families — Jia, Shi, Wang, and Xue — it depicts the love tragedy of Jia Baoyu and Lin Daiyu.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Water Margin**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Depicts the story of 108 outlaws led by Song Jiang who gathered at Mount Liang during the late Northern Song dynasty.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The **four great classical novels** [+novels] of Chinese literature are widely known.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Romance of the Three Kingdoms**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the backdrop of the Three Kingdoms period, it depicts the political and military struggles among Wei, Shu, and Wu.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Journey to the West**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Tells the story of the Tang Monk and his three disciples on their journey to obtain Buddhist scriptures, filled with mythology and fantastical adventures.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Dream of the Red Chamber**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Set against the rise and fall of the four great families — Jia, Shi, Wang, and Xue — it depicts the love tragedy of Jia Baoyu and Lin Daiyu.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+novels]:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **Water Margin**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Depicts the story of 108 outlaws led by Song Jiang who gathered at Mount Liang during the late Northern Song dynasty.`)])])])])],-1),f[13]||=o(`div`,{"data-filepath":`plugins/caniuse.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/caniuse.md`},`plugins/caniuse.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Can I Use`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-caniuse"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed browser compatibility data from [caniuse.com](https://caniuse.com/), displaying browser support for CSS/JS features on the page.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-caniuse`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import caniuse from 'vitepress-plugin-caniuse'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [caniuse()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { caniuseMarkdownPlugin } from 'vitepress-plugin-caniuse' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(caniuseMarkdownPlugin) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCaniuse } from 'vitepress-plugin-caniuse/client' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCaniuse(ctx) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use `@[caniuse]()` to embed browser compatibility data:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](feature_name)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Baseline Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use baseline mode to display a feature support overview:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](feature_name)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Custom Version Range`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use `{}` to specify a version range:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse{-2,4}](feature_name)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline{-3,2}](feature_name)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `{past, future}`: past is the number of versions to look back, future is the number to look ahead")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Default is `{5, 2}` — 5 versions back,  2 versions forward")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Getting Feature Names`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Search for the feature you want to display on [caniuse.com](https://caniuse.com/),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"click the `#` on the left side of the card, and you'll get the feature name in the browser's address bar.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: details Not sure which part is the feature name?`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"**Take CSS `grid` as an example**")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Search for `grid` on caniuse.com, then click the `#` on the first card. The address bar will change to `https://caniuse.com/css-grid`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The feature name is `css-grid`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Verify here: <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`https://caniuse.com/?search=grid`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### Display browser support for the `fetch` feature")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](fetch)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](fetch)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### Display baseline for the `fetch` feature")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](fetch)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](fetch)`)])])])])],-1),f[14]||=o(`div`,{"data-filepath":`plugins/code-collapse.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-collapse.md`},`plugins/code-collapse.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Collapse`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-code-collapse"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Code block folding plugin that automatically collapses code blocks exceeding a specified number of lines, improving page readability.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-code-collapse`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import collapsedLines from 'vitepress-plugin-code-collapse'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    collapsedLines(),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { collapsedLinesMarkdownPlugin } from 'vitepress-plugin-code-collapse'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(collapsedLinesMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCollapsedLines } from 'vitepress-plugin-code-collapse/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCollapsedLines(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Global Folding`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"When `options` is set to a number, or `true` (defaults to 15 lines), all code blocks exceeding that line count will be automatically folded.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Per-Block Folding`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `:collapsed-lines={N}` syntax in the code block's info string to control individual blocks:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// Folds using the default value (15 lines)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// Folds starting from line 10`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` * Collapsed lines configuration`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," * - `true`: Fold when exceeding 15 lines")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," * - `number`: Fold when exceeding the specified line count")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," * - `false`: No global folding, allows per-block control (default)")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," * - `'disable'`: Fully disable the plugin")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` * @default 'false'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type options = boolean | number | 'disable'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a1 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a2 = 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a3 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a4 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a5 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a6 = 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a7 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a8 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a9 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a10 = 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a11 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a12 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :line-numbers=1 :collapsed-lines=10")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a1 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a2 = 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a3 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a4 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a5 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a6 = 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a7 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a8 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a9 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a10 = 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a11 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a12 = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[15]||=o(`div`,{"data-filepath":`plugins/code-tree.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-tree.md`},`plugins/code-tree.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Tree`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-code-tree"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Code tree plugin for rendering code structures with a file tree sidebar in Markdown, supporting file switching.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This plugin depends on the [File Tree](./file-tree.md) plugin for the file tree sidebar components.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-code-tree`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codeTree from 'vitepress-plugin-code-tree'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [codeTree()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { codeTreeMarkdownPlugin } from 'vitepress-plugin-code-tree'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(codeTreeMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCodeTree } from 'vitepress-plugin-code-tree/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCodeTree(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin provides two syntaxes to render a code tree: a container syntax for inline file content,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and an embed syntax to load files from a directory.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: code-tree` container with fenced code blocks inside.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Each fence must declare a filename via the `[filename]` syntax in its info string.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree title="Project Structure"`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Container Attributes`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute      | Description                   | Default |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | ----------------------------- | ------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`        | Code tree title               | -       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`       | Code tree container height    | `420px` |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `entry`        | Entry file, opened by default | -       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `show-sidebar` | Show sidebar by default       | `false` |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Active File`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Add `:active` to a fence's info string to mark it as the default active file:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts] :active")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [utils.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export const noop = () => {}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use `@[code-tree](dir)` to embed a directory as a code tree. Files in the directory are loaded and rendered automatically.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree](./src)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `dir` supports the following prefixes:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Prefix | Description                                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------ | ------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@`    | Relative to VitePress `srcDir`                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `/`    | Relative to VitePress project root                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -      | Relative to the current markdown file's directory |`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Embed Attributes`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="Source" height="500px" entry="index.ts" show-sidebar=true](./src)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### CodeTreePluginOptions`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface CodeTreePluginOptions {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Default code tree container height`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default '420px'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height?: string | number`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Glob patterns to ignore files`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Applied when loading files from a directory via the embed syntax`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * node_modules and .DS_Store are always ignored`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default []`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ignores?: string[]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * File loaders`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * Used to load resource files when embedding a directory with `@[code-tree](dir)`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Custom loaders are merged before the built-in ones, so they take precedence`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default []`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  loaders?: CodeTreeFileLoader[]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### File Loaders`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Loaders are used by the embed syntax to load file content. The plugin ships with built-in loaders for common file types,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`and custom loaders are merged before the built-in ones, so they take precedence.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Built-in loaders cover the following file types:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Dot files (`.git*`, `.env*`, `.*ignore`, `.npmrc`): Rendered as plain text")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.XXXrc` config files (e.g. `.eslintrc`): Rendered as JSON")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Image files: Rendered as `<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`img`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` tags with proper `src` resolution")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Source files supported by Shiki: Rendered as fenced code blocks with syntax highlighting`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codeTree, { loadCodeContent } from 'vitepress-plugin-code-tree'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    codeTree({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      height: '500px',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ignores: ['**/*.test.ts'],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      loaders: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          filter: ['**/*.md'],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          load: (file) => loadCodeContent(file, 'md'),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `filter` field accepts a glob pattern string, an array of glob patterns,")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"or a predicate function that receives a `CodeTreeFile` and returns a boolean.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="Code Tree" show-sidebar`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="Code Tree" show-sidebar`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="Code Tree" show-sidebar](@/en)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="Code Tree" show-sidebar](@/en)`)])])])])],-1),f[16]||=o(`div`,{"data-filepath":`plugins/codepen.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/codepen.md`},`plugins/codepen.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# CodePen`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-codepen"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed [CodePen](https://codepen.io/) projects into VitePress pages.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-codepen`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codepen from 'vitepress-plugin-codepen'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [codepen()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { codepenPlugin } from 'vitepress-plugin-codepen'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(codepenPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCodepen } from 'vitepress-plugin-codepen/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCodepen(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Basic Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](user/slash)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### With Options`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen preview editable title="Example" height="400px" tab="css,result" theme="dark"](leimapapa/RwOZQOW)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Attribute Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute  | Type      | Default    | Description                         |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | ---------- | ----------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`    | `string`  | -          | Title                               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `user`     | `string`  | -          | CodePen username (parsed from link) |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `slash`    | `string`  | -          | Pen identifier (parsed from link)   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tab`      | `string`  | `'result'` | Default tab to display              |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`    | `string`  | -          | Theme                               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `preview`  | `boolean` | `false`    | Preview mode                        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `editable` | `boolean` | `false`    | Editable mode                       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`    | `string`  | `'100%'`   | Width                               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`   | `string`  | -          | Height                              |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](leimapapa/RwOZQOW)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](leimapapa/RwOZQOW)`)])])])])],-1),f[17]||=o(`div`,{"data-filepath":`plugins/collapse.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/collapse.md`},`plugins/collapse.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Collapse`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-collapse"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Collapse container plugin for creating collapsible content sections in Markdown, with support for accordion mode,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`card style, and per-item expand control.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-collapse`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import collapse from 'vitepress-plugin-collapse'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [collapse()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { collapseMarkdownPlugin } from 'vitepress-plugin-collapse'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(collapseMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCollapse } from 'vitepress-plugin-collapse/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCollapse(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: collapse` container with a list to create collapsible sections. Each")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`list item becomes a collapse panel: the first line is the title, and the`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`following indented content is the panel body.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Basic`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Title 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Title 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Title 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Title 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Accordion`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Add `accordion` to enable accordion mode — only one item can be expanded at a")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"time; expanding a new item collapses all others. Use `expand` to expand the")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"first item by default when no explicit `:+` flag is set.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Card Style`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Add `card` to render the container with a bordered, rounded card style. It can")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"be combined with `accordion`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 1`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 2`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Question 3`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Answer 3`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Per-item Expand Flag`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Prefix a title with `:+` to expand an item, or `:-` to collapse it. In accordion")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"mode, only the first `:+` flag takes effect. Items without a flag follow the")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"container's `expand` attribute.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :+ Expanded by default`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :- Collapsed by default`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- No flag, follows container expand attribute`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :+ Expanded by default`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :- Collapsed by default`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- No flag, follows container expand attribute`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Content`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Container Attributes`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute   | Type      | Description                                              |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | --------- | -------------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `accordion` | `boolean` | Enable accordion mode (only one item expanded at a time) |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `card`      | `boolean` | Render with card style (bordered and rounded)            |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `expand`    | `boolean` | Default expanded state                                   |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Item Flags`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Flag | Description                                                  |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | ------------------------------------------------------------ |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `:+` | Expand this item (only the first one wins in accordion mode) |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `:-` | Collapse this item                                           |")])])])])],-1),f[18]||=o(`div`,{"data-filepath":`plugins/field.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/field.md`},`plugins/field.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Field`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-field"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Field container plugin for rendering structured API fields and properties documentation in Markdown,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`with support for JSDoc-style tag annotations and field grouping.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-field`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import field from 'vitepress-plugin-field'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [field()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { fieldMarkdownPlugin, fieldVitePlugin } from 'vitepress-plugin-field'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(fieldMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [fieldVitePlugin(/* options */)],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithField } from 'vitepress-plugin-field/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithField(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: field` container to document fields and properties: the text after `::: field`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`on the opening line is the field name, while the container body uses JSDoc-style tags to`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`describe field metadata. Any non-tag line is treated as the field description.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Basic Field`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Total number of users.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Total number of users.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Tag Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Tag             | Value         | Description                                                          |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------------- | ------------- | -------------------------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@name`         | string        | Override the field name (defaults to the name from `info`)           |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@type`         | string        | Field type annotation                                                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@typeLink`     | string        | Type reference link, rendered as a clickable link                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@default`      | string        | Default value for the field                                          |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@required`     | flag          | Mark the field as required                                           |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@deprecated`   | flag / string | Mark the field as deprecated, optionally with a version or date      |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@experimental` | flag / string | Mark the field as experimental, optionally with a version or date    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@description`  | string        | Explicit description text; any non-tag line also becomes description |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@enum`         | string        | Candidate values separated by `\\|`, appended across lines            |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@since`        | string        | Version the field was introduced in; only the first value is kept    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@unit`         | string        | Unit annotation                                                      |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@format`       | string        | Format annotation                                                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@constraint`   | string        | Constraint annotation                                                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@optional`     | —             | Deprecated, no longer parsed (fields are optional by default)        |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@name` — Override the Field Name")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `info` on the opening line is used as the field name by default; `@name` overrides it:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field rawName`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@name userName`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier for the user.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field rawName`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@name userName`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier for the user.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@type` and `@typeLink` — Type and Type Reference Link")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`@type` declares the field type, and `@typeLink` provides a reference link for it:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field options`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Record<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` unknown`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@typeLink /plugins/field`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Configuration options.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field options`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Record<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` unknown`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@typeLink /plugins/field`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Configuration options.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@default` — Default Value")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Creation timestamp.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Creation timestamp.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@required` — Required Field")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"A boolean flag; any value after it is ignored (`@required yes` is equivalent to `@required`):")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@deprecated` — Deprecated Field")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Used alone it is a boolean flag; with a value it describes the version or date of deprecation:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field legacy`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This field is deprecated.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated v2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Deprecated in v2.0, please use `newField` instead.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field legacy`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This field is deprecated.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated v2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Deprecated in v2.0, please use `newField` instead.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@experimental` — Experimental Field")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Similar to `@deprecated`: it is a boolean flag when used alone, and may carry the version or")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`date it was introduced in:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field stream`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Boolean`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@experimental v3.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Experimental capability; the API may change.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field stream`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Boolean`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@experimental v3.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Experimental capability; the API may change.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@description` — Explicit Description")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Declare the description text explicitly; non-tag lines are also treated as description and`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"can be mixed with `@description`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@description Total number of users. This field represents the count of active users in the system.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@description Total number of users. This field represents the count of active users in the system.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@enum` — Candidate Values")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Separate candidate values with `|`; surrounding whitespace is trimmed and quotes are preserved:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field status`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default active`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enum active | inactive | pending`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Multiple `@enum` lines are appended to the same set of candidates:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field level`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enum 1 | 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enum 3`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field status`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default active`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enum active | inactive | pending`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field level`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enum 1 | 2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enum 3`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@since` — Version Introduced")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Only the first value is kept:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field pageSize`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@since 1.2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Page size.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field pageSize`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@since 1.2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Page size.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### `@unit`, `@format` and `@constraint` — Unit, Format and Constraint")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field timeout`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 3000`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@unit ms`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@constraint 1..60000`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Timeout in milliseconds.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field date`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@format YYYY-MM-DD`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Date string.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field timeout`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 3000`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@unit ms`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@constraint 1..60000`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Timeout in milliseconds.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field date`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@format YYYY-MM-DD`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Date string.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Combined Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Tags can be freely combined:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field pageSize`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@typeLink /plugins/field`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 20`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@unit items`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@constraint 1..100`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@since 1.2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@experimental v2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Number of records returned per page when paginating.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field pageSize`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@typeLink /plugins/field`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 20`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@unit items`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@constraint 1..100`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@since 1.2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@experimental v2.0`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Number of records returned per page when paginating.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Field Group`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: field-group` container to group related fields together:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Display name.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Creation timestamp.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Unique identifier.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Display name.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Creation timestamp.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Parsing Rules`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- A tag must occupy its own line and start with `@`; only one tag is parsed per line. Lines that")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  do not start with `@` are treated as description text.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Tag names are case-insensitive: `@Type` is equivalent to `@type`.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Surrounding backticks are removed from tag values: `` @type `String` `` is equivalent to `@type String`.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Tags without a value are ignored (except boolean flags such as `@required` and `@deprecated`).")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- When a scalar tag is repeated the last value wins (e.g. `@name`, `@type`, `@default`); `@enum`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  appends values; `@since` keeps only the first.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Unknown tags (e.g. `@author`) are kept as description text and do not interrupt the current")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  description paragraph.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Blank lines do not interrupt a description paragraph; they are preserved as line breaks in`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  the description.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Fields with the same name on the same page get unique anchors automatically:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  `field-<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`, `field-<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">-1`, `field-<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">-2`…")])])])])],-1),f[19]||=o(`div`,{"data-filepath":`plugins/file-tree.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/file-tree.md`},`plugins/file-tree.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# File Tree`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-file-tree"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`File tree display plugin for rendering file directory structures in Markdown.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-file-tree`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import fileTree from 'vitepress-plugin-file-tree'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [fileTree()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { fileTreeMarkdownPlugin } from 'vitepress-plugin-file-tree'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(fileTreeMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithFileTree } from 'vitepress-plugin-file-tree/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithFileTree(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: file-tree` container to represent file hierarchy via indentation:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="Project Structure"`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- src/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - components/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - Button.vue`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - Nav.vue`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- tsconfig.json`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Fenced Code Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Alternatively, use a fenced code block with the `tree` or `file-tree` language identifier.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The content follows the output format of the `tree` command-line tool (using Unicode")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`box-drawing characters):`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── components/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   ├── Button.vue`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   └── Nav.vue`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── index.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── package.json`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── tsconfig.json`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"This is especially useful when you already have a `tree` command output and want to")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`paste it directly into your Markdown without reformatting.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Node Annotations`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Both syntaxes support the following node annotations:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Syntax               | Description                          |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------------- | ------------------------------------ |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `**filename**`       | Highlight/focus the file             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `-- filename`        | Mark as removed                      |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `++ filename`        | Mark as added                        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `filename # comment` | Add a comment                        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `folder/`            | Mark as folder, collapsed by default |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `…`                  | Ellipsis marker                      |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Container example with annotations:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="Changed Files"`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- src/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- old-file.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - ++ new-file.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - **main.ts** # Core entry`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - …`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Fenced code example with annotations:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── -- old-file.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── ++ new-file.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── **main.ts** # Core entry`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── …`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- docs`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - .vitepress`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - ++ config.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- page1.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- theme  # A **theme** directory`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - client`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - components`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - **Navbar.vue**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - composables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - useNavbar.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - styles`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - navbar.css`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - config.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - node/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- pnpm-lock.yaml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- .gitignore`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- README.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- …`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- docs`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - .vitepress`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - ++ config.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- page1.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- theme  # A **theme** directory`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - client`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - components`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - **Navbar.vue**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - composables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - useNavbar.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - styles`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - navbar.css`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - config.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - node/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- pnpm-lock.yaml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- .gitignore`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- README.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- …`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[20]||=o(`div`,{"data-filepath":`plugins/icons.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/icons.md`},`plugins/icons.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Icons`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-icons"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Icons plugin that uses a simple `::name::` syntax to inline icons from [Iconify](https://iconify.design/), [iconfont](https://www.iconfont.cn/), or [FontAwesome](https://fontawesome.com/) in Markdown.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-icons`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> When using Iconify, you also need to install [`@iconify/json`](https://www.npmjs.com/package/@iconify/json) or the specific icon collections you need.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import icons from 'vitepress-plugin-icons'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [icons()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!WARNING]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> Due to the high complexity of plugin configuration, it is only recommended for use in `vitepress-tuck` mode.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use `::` delimiters to insert an icon inline. The full syntax is:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::name =size /color::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `name` — Icon name. The format depends on the provider (see below).")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `=size` — Optional. Icon size. Supports `=widthxheight` (e.g. `=1.2emx1.5em`) or a single `=width` (e.g. `=1.2em`) which applies to both width and height.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `/color` — Optional. Icon color, e.g. `/red` or `/#ff0000`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"You can also prefix the content with a provider name (`iconify`/`iconfont`/`fontawesome`) to override the default provider for a single icon, and append extra attributes for FontAwesome.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Iconify`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Icon names use the `collection:icon` format, e.g. `tdesign:logo-github-filled`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled /#f00::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px /#f00::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::skill-icons:vscode-dark =36px::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled /#f00::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px /#f00::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::skill-icons:vscode-dark =36px::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### iconfont`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Icon names use the plain name (without the `icon-` prefix), e.g. `hot` resolves to `icon-hot`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot =24px::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot =24px /#f00::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### FontAwesome`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Icon names use the plain name, e.g. `circle-user`. Extra attributes like `border`, `beat`, `rotate-90`, `2xl` are appended after the name and converted to `fa-*` classes.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::circle-user::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::circle-user =1.2em /#fff::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user border::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user rotate-90::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user beat::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl beat::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user rotate-90::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user beat::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user border::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl beat::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The plugin accepts a single provider option, an array of provider options, or no options (defaults to Iconify). When multiple providers are configured, mark one with `default: true` to set the default provider used by the `::name::` syntax.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Common Options`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option    | Type                                       | Default     | Description                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------- | ------------------------------------------ | ----------- | --------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `provider`| `'iconify' \\| 'iconfont' \\| 'fontawesome'` | `'iconify'` | Icon provider                     |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `default` | `boolean`                                  | `false`     | Use as the default provider       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `color`   | `string`                                   | `''`        | Default icon color                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `size`    | `string \\| number`                         | `'1.2em'`   | Default icon size                 |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Iconify`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Extends [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) options and [`unplugin-icons/resolver`](https://github.com/unplugin/unplugin-icons#resolver) options.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'iconify',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  size: '1.2em',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // unplugin-icons options`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  scale: 1,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  customCollections: { /* ... */ },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### iconfont`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option   | Type                               | Default   | Description                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ---------------------------------- | --------- | --------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `prefix` | `string`                           | `'icon-'` | Class name prefix for icons       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `assets` | `IconAssetLink \\| IconAssetLink[]` | -         | iconfont CSS/JS resource URLs     |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'iconfont',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: 'icon-',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  assets: '//at.alicdn.com/w/font_xxx.css',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### FontAwesome`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option   | Type                                                  | Default         | Description                                          |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ----------------------------------------------------- | --------------- | ---------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `prefix` | `LiteralUnion<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`FontAwesomePrefix`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                     | `'fas'`         | Default icon prefix                                  |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `assets` | `Arrayable<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`FontAwesomeAssetBuiltIn`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` \\|`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` IconAssetLink`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` | `'fontawesome'` | Built-in asset name or custom URL                    |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `assets` option accepts:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `'fontawesome'` — Injects the solid, regular, and base kits from the jsDelivr CDN.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `'fontawesome-with-brands'` — Injects only the brands kit from the jsDelivr CDN.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- A custom `.css` or `.js` URL.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'fontawesome',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: 'fas',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  assets: 'fontawesome',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `prefix` option supports the following aliases:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Prefix   | Alias   | Resulting Classes                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ------- | --------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fas`    | `s`     | `fa-solid fa-name`                      |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `far`    | `r`     | `fa-regular fa-name`                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fal`    | `l`     | `fa-light fa-name`                      |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fat`    | `t`     | `fa-thin fa-name`                       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fads`   | `ds`    | `fa-duotone fa-solid fa-name`           |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fass`   | `ss`    | `fa-sharp fa-solid fa-name`             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasr`   | `sr`    | `fa-sharp fa-regular fa-name`           |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasl`   | `sl`    | `fa-sharp fa-light fa-name`             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fast`   | `st`    | `fa-sharp fa-thin fa-name`              |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasds`  | `sds`   | `fa-sharp-duotone fa-solid fa-name`     |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fab`    | `b`     | `fa-brands fa-name`                     |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"You can also use the `prefix:name` format in the icon name to specify a prefix for a single icon, e.g. `fab:github`.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Multiple Providers`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons([`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'iconify' },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font_xxx.css' },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'fontawesome', assets: 'fontawesome' },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`])`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"With the configuration above, `::name::` uses iconfont by default, while `::iconify name::` and `::fontawesome name::` explicitly select the other providers.")])])])])],-1),f[21]||=o(`div`,{"data-filepath":`plugins/intro.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/intro.md`},`plugins/intro.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plugin Overview`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ecosystem provides a rich set of plugins covering Markdown syntax extensions,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`content embedding, code enhancement, and more.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`All plugins support two usage modes:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`1.`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **vitepress-tuck mode (recommended)**`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: One-click integration via the `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` option`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`2.`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **Native mode**`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: Manual configuration in VitePress`)])])])])],-1),f[22]||=o(`div`,{"data-filepath":`plugins/jsfiddle.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/jsfiddle.md`},`plugins/jsfiddle.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# JSFiddle`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-jsfiddle"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed [JSFiddle](https://jsfiddle.net/) projects into VitePress pages.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-jsfiddle`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import jsfiddle from 'vitepress-plugin-jsfiddle'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [jsfiddle()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { jsfiddleMarkdownPlugin } from 'vitepress-plugin-jsfiddle'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(jsfiddleMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithJsFiddle } from 'vitepress-plugin-jsfiddle/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithJsFiddle(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Basic Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](user/id)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### With Options`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle title="JS Fiddle" theme="dark" tab="js,css,html,result" height="400px"](pengzhanbo/1xbwz2p9)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Attribute Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute | Type               | Default                | Description                                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------- | ------------------ | ---------------------- | ------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`   | `string`           | `'JS Fiddle'`          | Title                                             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`   | `string`           | -                      | Theme (e.g. `dark`)                               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tab`     | `string`           | `'js,css,html,result'` | Tabs to display (comma-separated, spaces removed) |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`   | `string`           | `'100%'`               | Width                                             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`  | `string`           | -                      | Height                                            |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `ratio`   | `number \\| string` | -                      | Aspect ratio                                      |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](pengzhanbo/1xbwz2p9)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](pengzhanbo/1xbwz2p9)`)])])])])],-1),f[23]||=o(`div`,{"data-filepath":`plugins/mark.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/mark.md`},`plugins/mark.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Mark`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-mark"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Mark plugin that adds `==highlight==` syntax support to Markdown,")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`rendering highlighted text with a scroll-triggered animation and multiple color variants.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-mark`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import mark from 'vitepress-plugin-mark'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [mark()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { markdownPlugin } from 'vitepress-plugin-mark' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(markdownPlugin) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Register the component in the theme and import the styles:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithMark } from 'vitepress-plugin-mark/client' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithMark(ctx) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Wrap inline content with `==` to render it as a highlighted `<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`mark`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` element. When the element")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`scrolls into the viewport, a fill-from-left highlight animation plays once, giving the marked text`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`a vivid emphasis effect.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==Marked== text`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==Marked== text`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Inline content inside the markers fully supports Markdown syntax (bold, italic, links, code, etc.):`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"==**bold**==, ==*italic*==, ==[link](https://example.com)==, ==`code`==")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"==**bold**==, ==*italic*==, ==[link to](https://example.com)==, ==`code`==")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Color Variants`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Specify different highlight colors by appending an [attrs syntax](https://vitepress.dev/guide/markdown#attribute)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`to the marker. Variant names correspond to VitePress container types and automatically adapt to dark mode.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==Default==`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==note=={.note}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==info=={.info}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==tip=={.tip}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==warning=={.warning}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==caution=={.caution}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==important=={.important}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==Default==`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==note=={.note}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==info=={.info}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==tip=={.tip}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==warning=={.warning}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==caution=={.caution}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==important=={.important}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Variant Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Variant      | Description                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------ | --------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| _(default)_  | Yellow highlight                  |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.note`      | Cyan highlight                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.info`      | Neutral gray highlight            |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.tip`       | Green highlight                   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.warning`   | Gold/amber highlight              |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.caution`   | Pink highlight (alias: `.danger`) |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.important` | Lavender/purple highlight         |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Customization`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Customize the highlight appearance by overriding the following CSS variables in your theme styles:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:root {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  --vp-mark-linear-color: #f0a;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Variable                 | Description                                   | Default                              |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------------ | --------------------------------------------- | ------------------------------------ |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-text`         | Text color                                    | `currentcolor`                       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg`           | Background color                              | `transparent`                        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-linear-color` | Highlight fill color                          | `#ff0`                               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg-image`     | Background image used for the fill (gradient) | `linear-gradient(to right, ...)`     |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg-shift`     | Vertical position shift of the background     | `0.55lh`                             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-animation`    | Animation shorthand                           | `mark-highlight 1.25s 0.5s forwards` |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`You can also extend highlight color variants by customizing CSS class names:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`mark.custom {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  --vp-mark-linear-color: #f0a;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==Custom variant=={.custom}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Rendered result:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==Custom variant=={.custom}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`style`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`mark`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`.custom`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`  --vp-mark-linear-color`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`#f0a`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`style`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)])])])])],-1),f[24]||=o(`div`,{"data-filepath":`plugins/mermaid.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/mermaid.md`},`plugins/mermaid.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Mermaid`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-mermaid-tuck"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Mermaid diagram plugin, supporting Mermaid chart rendering in Markdown.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-mermaid-tuck`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import mermaid from 'vitepress-plugin-mermaid-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    mermaid(),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { mermaidMarkdownPlugin, mermaidVitePlugin } from 'vitepress-plugin-mermaid-tuck'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [mermaidVitePlugin({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      options: { theme: 'default' },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    })],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(mermaidMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithMermaid } from 'vitepress-plugin-mermaid-tuck/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithMermaid(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use code blocks with the `mermaid` language tag:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart LR`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Start --> Stop`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: Hello John, how are you?`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  John-->>Alice: Great!`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: See you later!`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidPluginOptions`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface MermaidPluginOptions {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Mermaid configuration (excluding startOnLoad and themeVariables)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options?: Omit<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`MermaidConfig,`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` 'startOnLoad'`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` |`),o(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` 'themeVariables'`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> & {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    themeVariables?: MermaidThemeVariables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Locale configuration`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  locales?: Record<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MermaidLocaleData`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidThemeVariables`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supports custom theme variables for various Mermaid diagram types, covering:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Basic variables (background, text color, line color, etc.)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- C4, Class, ER diagram variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Flowchart variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Gantt chart variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Git graph variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Journey diagram variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Pie chart variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Requirement diagram variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- State diagram variables`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Sequence diagram variables`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidLocaleData`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface MermaidLocaleData {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  chart?: string       // Default 'Chart'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  source?: string      // Default 'Source'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fullscreen?: string  // Default 'Fullscreen'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  download?: string    // Default 'Download'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Built-in Languages`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin includes built-in support for the following languages:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- English (en, en-US)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 简体中文 (zh, zh-CN)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 日本語 (ja)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 한국어 (ko)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Español (es)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Français (fr)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Русский (ru)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Deutsch (de)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Português (pt)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Flowchart`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart TB`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->a2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph one`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    a1-->a2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph two`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    b1-->b2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph three`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->c2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    one --> two`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    three --> two`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    two --> c2`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Sequence Diagram`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice ->> Bob: Hello Bob, how are you?`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->>John: How about you John?`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob--x Alice: I am good thanks!`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-x John: I am good thanks!`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Note right of John: Bob thinks a long<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>long time, so long<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>that the text does<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>not fit on a row.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->Alice: Checking with John...`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->John: Yes... John, how are you?`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Animal Example`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`classDiagram`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note "From Duck till Zebra"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Duck`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note for Duck "can fly<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can swim<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can dive<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can help in debugging"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Fish`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Zebra`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +int age`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +String gender`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +isMammal()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +mate()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Duck{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +String beakColor`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +swim()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +quack()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Fish{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -int sizeInFeet`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -canEat()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Zebra{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +bool is_wild`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +run()`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`gantt`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  dateFormat  YYYY-MM-DD`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  title       Adding GANTT diagram functionality to mermaid`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  excludes    weekends`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'  %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)')]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section A section`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task            :done,    des1, 2014-01-06,2014-01-08`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Active task               :active,  des2, 2014-01-09, 3d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task               :         des3, after des2, 5d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task2              :         des4, after des3, 5d`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Critical tasks`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task in the critical line :crit, done, 2014-01-06,24h`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Implement parser                    :crit, done, after des1, 2d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for parser             :crit, active, 3d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task in critical line        :crit, 5d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for renderer           :2d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add to mermaid                      :1d`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Documentation`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :active, a1, after des1, 3d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :after a1  , 20h`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :doc1, after a1  , 48h`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Last section`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :after doc1, 3d`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :20h`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :48h`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[25]||=o(`div`,{"data-filepath":`plugins/npm-to.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/npm-to.md`},`plugins/npm-to.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Npm To`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-npm-to"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Automatically converts npm commands to equivalent commands for other package managers (pnpm, yarn, bun, deno).`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-npm-to`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import npmTo from 'vitepress-plugin-npm-to'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    npmTo(['npm', 'pnpm', 'yarn']),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { npmToPlugin } from 'vitepress-plugin-npm-to'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(npmToPlugin, ['npm', 'pnpm', 'yarn'])`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: npm-to` container to wrap npm commands. The plugin automatically converts them into multi-tab code groups:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`After rendering, it displays as multiple tabs, each showing the corresponding package manager's install command:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **npm**: `npm install vitepress-plugin-steps`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **pnpm**: `pnpm add vitepress-plugin-steps`")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **yarn**: `yarn add vitepress-plugin-steps`")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Supported Command Types`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin supports automatic conversion of the following npm commands:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Command                 | Example               | Support                                   |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------------------- | --------------------- | ----------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm install` / `npm i` | `npm install react`   | Converts to each manager's add command    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm install` (no args) | `npm install`         | Converts to pure install command          |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm uninstall`         | `npm uninstall react` | Converts to each manager's remove command |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm run`               | `npm run build`       | Converts to each manager's run command    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm create`            | `npm create vite`     | Converts to each manager's create command |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm init`              | `npm init -y`         | Converts to each manager's init command   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npx`                   | `npx eslint .`        | Converts to each manager's equivalent     |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm ci`                | `npm ci`              | Converts to each manager's ci command     |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Custom Tabs`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"You can specify which tabs to display using the `tabs` attribute:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to tabs="npm,pnpm"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type NpmToPluginOptions =`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | NpmToPackageManager[]   // e.g. ['npm', 'pnpm', 'yarn']`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      tabs?: NpmToPackageManager[]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type NpmToPackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun' | 'deno'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Displays `npm`, `pnpm`, `yarn` tabs by default")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Supports `bun` and `deno` conversion")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[26]||=o(`div`,{"data-filepath":`plugins/obsidian.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/obsidian.md`},`plugins/obsidian.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Obsidian`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-obsidian"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Provides Obsidian-style Markdown syntax support, including Wiki links, Callout annotations, embedded files, and comment syntax.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-obsidian`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import obsidian from 'vitepress-plugin-obsidian'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    obsidian({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // All optional, default to true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      callout: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      comment: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      embedLink: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      wikiLink: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { obsidianMarkdownPlugin } from 'vitepress-plugin-obsidian'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(obsidianMarkdownPlugin, {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        callout: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        comment: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        embedLink: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        wikiLink: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Wiki Links`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Wiki links are Obsidian's syntax for linking to other notes. Use double brackets `[[ ]]` to create internal links.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[filename]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[filename#heading]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[filename#heading#subheading]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[filename|alias]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[filename#heading|alias]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|external link]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### File Name Search Rules`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`When using Wiki links, file names are matched according to the following search rules:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Matching Priority:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`1. **Full Path** — exact match of the file path`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`2. **Fuzzy Match** — match by filename at the end of the path, preferring the shortest path`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Path Resolution Rules:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **Relative paths** (starting with `.`): resolved relative to the current file's directory")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **Absolute paths** (not starting with `.`): searched across the entire document tree, preferring the shortest match")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **Directory form** (ending with `/`): matches the `index.md` in that directory")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Given the following document structure:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```txt")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`docs/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── index.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── guide/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── index.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── markdown/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│       └── obsidian.md`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"In `docs/guide/markdown/obsidian.md`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Syntax         | Match Result                                                    |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | --------------------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[obsidian]]` | matches `docs/guide/markdown/obsidian.md` (via filename search) |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[./]]`       | matches `docs/guide/markdown/index.md` (relative path)          |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[../]]`      | matches `docs/guide/README.md` (parent directory)               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[guide/]]`   | matches `docs/guide/README.md` (directory form)                 |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**External Link:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|external link]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|external link]]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Internal Anchor Links:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[npm-to]]  `),o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- via filename search -->`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki Links]]  `),o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- current page heading -->`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[file-tree#Configuration]]  `),o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- via filename search, link to heading -->`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[npm-to]]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki Links]]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[file-tree#Configuration]]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian Official - **Wiki Links**](https://help.obsidian.md/links){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Embedded Content`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed syntax allows you to insert content from other files into the current page.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[filename]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[filename#heading]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[filename#heading#subheading]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`File name search rules are the same as [Wiki Links](#file-name-search-rules).`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"::: info Paths starting with `/` or without a `./` prefix load resources from the `public` directory")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Image Embedding`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Syntax:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[image]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[image|width]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[image|widthxheight]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Supported formats: `jpg`, `jpeg`, `png`, `gif`, `avif`, `webp`, `svg`, `bmp`, `ico`, `tiff`, `apng`, `jfif`, `pjpeg`, `pjp`, `xbm`")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[tuck-logo.svg]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[tuck-logo.svg|125]]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### PDF Embedding`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> PDF embedding requires the [vitepress-plugin-pdf](./pdf.md) plugin to work properly.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Syntax:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[document.pdf]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[document.pdf#page=1]]  `),o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- #page=1 for first page -->`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[document.pdf#page=1#height=300]]  `),o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- #page=page #height=height -->`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Supported formats: `pdf`")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Example:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Audio Embedding`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Syntax:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[audio file]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Supported formats: `mp3`, `flac`, `wav`, `ogg`, `opus`, `webm`, `acc`")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Video Embedding`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Video embedding requires the [vitepress-plugin-video](./video.md) plugin to work properly.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Syntax:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[video file]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[video file#height=400]]  `),o(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- Set video height -->`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Supported formats: `mp4`, `webm`, `mov`, etc.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Content Fragment Embedding`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use `#heading` to embed content fragments under specific headings:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[my-note]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[my-note#heading-one]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[my-note#heading-one#subheading]]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian Official - Embed Files](https://help.obsidian.md/embeds){.readmore}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian Official - File Formats](https://help.obsidian.md/file-formats){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Callout`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Callout is a syntax for highlighting important information, similar to VitePress's `::: note` alert syntax.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!note]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Content`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Optional Title:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!tip] Custom Title`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Content`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Types`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Callout supports the following types, with aliases automatically mapping to the corresponding main type:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Type        | Aliases                                                             | Description                |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------------------------------------------------------- | -------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `note`      | `quote`, `cite`                                                     | Notes, quotes              |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tip`       | `hint`, `check`, `done`, `success`                                  | Tips, hints                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `info`      | `todo`                                                              | Info, todos                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `warning`   | `question`, `help`, `faq`                                           | Warnings, questions, help  |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `caution`   | `attention`, `failure`, `fail`, `missing`, `danger`, `error`, `bug` | Cautions, failures, danger |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `important` | `example`                                                           | Important, examples        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `details`   | `abstract`, `summary`, `tldr`                                       | Details, summaries         |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Basic Usage:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> This is a note callout.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> This is a note callout.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**With Title:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP] Useful Tip`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> Using `pnpm` can significantly speed up dependency installation.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP] Useful Tip`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> Using `pnpm` can significantly speed up dependency installation.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Multiple Types:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!success]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Operation completed successfully!`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!warning]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> This is a warning message.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!caution]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Proceed with caution, this operation is irreversible.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!success]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Operation completed successfully!`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!warning]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> This is a warning message.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!caution]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Proceed with caution, this operation is irreversible.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Details Type:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The `details` type renders as an HTML `<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`details`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` element, supporting expand/collapse:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!details]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Click to expand more content`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> This is hidden content.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!details]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> Click to expand more content`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> This is hidden content.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian Official - Callouts](https://help.obsidian.md/callouts){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Comments`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Content wrapped with `%%` is treated as a comment and will not be rendered on the page.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Inline Comments:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is an %%inline comment%% example.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Block Comments:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is a block comment.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It can span multiple lines.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Inline Comment:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is an %%inline comment%% example.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is an %%inline comment%% example.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Block Comment:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Input:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Content before the comment`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is a block comment.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It can span multiple lines.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Content after the comment`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Output:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Content before the comment`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`This is a block comment.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It can span multiple lines.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian Official - Comments](https://help.obsidian.md/syntax#comments){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Notes`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- These plugins provide **compatibility support**, not a full implementation of all Obsidian features`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Some Obsidian-specific features (such as graph view for internal links, backlinks, etc.) are not supported`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- When embedding content, the embedded page also participates in the theme's build process`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- PDF embedding requires the [vitepress-plugin-pdf](./pdf.md) plugin to work properly`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Video embedding requires the [vitepress-plugin-video](./video.md) plugin to work properly`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- Embedded resources starting with `/` or using `./` form will be loaded from the `public` directory")])])])])],-1),f[27]||=o(`div`,{"data-filepath":`plugins/pdf.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/pdf.md`},`plugins/pdf.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PDF`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-pdf"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PDF file embedding plugin for displaying a PDF viewer in the page.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-pdf`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import pdf from 'vitepress-plugin-pdf'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [pdf()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(pdfMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPDF } from 'vitepress-plugin-pdf/client' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPDF(ctx) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Embed a PDF using `@[pdf]()`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://example.com/sample.pdf)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](./sample.pdf)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Specifying a Page`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf page="3"](https://example.com/sample.pdf)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf p="3"](https://example.com/sample.pdf)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Configuration Options`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf no-toolbar width="100%" height="600px" zoom="100"](https://example.com/sample.pdf)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Attribute Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute    | Type               | Default  | Description  |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------ | ------------------ | -------- | ------------ |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`      | `string`           | `'100%'` | Width        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`     | `string`           | -        | Height       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `ratio`      | `number \\| string` | -        | Aspect ratio |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `zoom`       | `number`           | `50`     | Zoom level   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `no-toolbar` | `boolean`          | `false`  | Hide toolbar |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)`)])])])])],-1),f[28]||=o(`div`,{"data-filepath":`plugins/plantuml.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plantuml.md`},`plugins/plantuml.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PlantUML`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-plantuml"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PlantUML diagram plugin, supporting PlantUML chart rendering in Markdown.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-plantuml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import plantuml from 'vitepress-plugin-plantuml'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plantuml(),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { plantumlMarkdownPlugin, plantumlVitePlugin } from 'vitepress-plugin-plantuml'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [plantumlVitePlugin()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(plantumlMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    languageAlias: { plantuml: 'txt' },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPlantuml } from 'vitepress-plugin-plantuml/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPlantuml(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use code blocks with the `plantuml` language tag:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Authentication Request`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: Authentication Response`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Output Format`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"The plugin supports `svg` (default) and `png` output formats. You can specify the format per diagram:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml png")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Example {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +attribute: string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +method(): void`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Or set a global default:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`plantuml({ format: 'png' }) // default is 'svg'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### PlantumlPluginOptions`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface PlantumlPluginOptions {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Output format, 'svg' | 'png'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'svg'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  format?: PlantumlFormat`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * PlantUML server URL`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'https://www.plantuml.com/plantuml'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  serverURL?: string`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Features`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **Dark / Light mode** — Automatically generates both dark and light diagram variants, following the VitePress theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **Chart / Source tabs** — Toggle between the rendered diagram and its PlantUML source code`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **Fullscreen mode** — Click the fullscreen button to view the diagram in an overlay`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **Download** — Download the current diagram as an image file`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **Multi-language** — Built-in support for English, Chinese, Japanese, Korean, Spanish, French, Russian, German, and Portuguese`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **SVG optimization** — SVGs are automatically optimized via SVGO, removing redundant styles and background layers`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **Build caching** — Rendered diagrams are cached to disk for faster incremental builds`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Built-in Languages`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin includes built-in support for the following languages:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- English (en, en-US)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 简体中文 (zh, zh-CN)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 日本語 (ja)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 한국어 (ko)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Español (es)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Français (fr)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Русский (ru)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Deutsch (de)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Português (pt)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Sequence Diagram`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Authentication Request`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: Authentication Response`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Another authentication Request`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice <-- Bob: Another authentication Response`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Use Case Diagram`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`left to right direction`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "Customer" as customer`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "Cashier" as cashier`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`rectangle "POS System" {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  customer -- (Checkout)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Checkout) -- cashier`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Checkout) .> (Print Receipt) : include`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Checkout) .> (Payment) : include`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Payment) .> (Cash Payment)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (Payment) .> (Scan to Pay)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Class Diagram`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Vehicle`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Car`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Bike`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Car`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Bike`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Engine`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Wheel`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Engine`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Wheel`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Activity Diagram`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`start`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:User Login;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`if (Authenticated?) then (yes)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :Enter Dashboard;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  if (New Messages?) then (yes)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :Show Notification;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  else (no)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :Continue Browsing;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  endif`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`else (no)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :Show Error;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :Return to Login;`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`endif`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stop`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[29]||=o(`div`,{"data-filepath":`plugins/plot.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plot.md`},`plugins/plot.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plot`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-plot"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Hidden text plugin that reveals concealed text content on click or hover.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-plot`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import plot from 'vitepress-plugin-plot'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plot({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      trigger: 'hover',  // 'hover' | 'click', default 'hover'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      effect: 'mask',    // 'mask' | 'blur', default 'mask'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { plotMarkdownPlugin } from 'vitepress-plugin-plot'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(plotMarkdownPlugin, {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        trigger: 'hover',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        effect: 'mask',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// .vitepress/theme/index.ts`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPlot } from 'vitepress-plugin-plot/client' // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPlot(ctx) // [!code ++]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Wrap hidden text with `!!`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The answer is !!plot!!`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use `classname` to set interaction behavior:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`!!plot!!{.click .blur}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Supported `classname` values:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.click` / `.hover`: Reveal on click / Reveal on hover")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.blur` / `.mask`: Blur effect / Mask effect")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface PlotOptions {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Trigger method`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'hover': Reveal on hover`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'click': Reveal on click`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'hover'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  trigger?: 'hover' | 'click'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Hide effect`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'mask': Mask effect (default)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'blur': Blur effect`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'mask'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  effect?: 'mask' | 'blur'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Lu Xun once said: "!!I never said that!!"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Lu Xun once said: "!!I never said that!!"`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`There is no royal road to learning, !!but hard work pays off!!{.click .blur}.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`There is no royal road to learning, !!but hard work pays off!!{.click .blur}.`)])])])])],-1),f[30]||=o(`div`,{"data-filepath":`plugins/qrcode.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/qrcode.md`},`plugins/qrcode.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# QRCode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-qrcode"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`QR code generation plugin, generating QR codes from text or links.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-qrcode`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import qrcode from 'vitepress-plugin-qrcode'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [qrcode()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { qrcodeMarkdownPlugin } from 'vitepress-plugin-qrcode'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(qrcodeMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithQrcode } from 'vitepress-plugin-qrcode/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithQrcode(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed Block Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](arbitrary text)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./caniuse.md)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Styled Card Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="Scan to visit"](https://www.baidu.com)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Suitable for long text:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: qrcode title="Scan to visit"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`https://www.baidu.com`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Attribute Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute  | Type      | Description                            |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `card`     | `boolean` | Display in card mode                   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`    | `string`  | Card title                             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `logo`     | `string`  | QR code logo, link format, optional    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `logoSize` | `number`  | Logo size ratio, optional, default 0.2 |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`    | `number`  | QR code width, optional                |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Internal links auto-add logo:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./file-tree.md)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./file-tree.md)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Using card mode:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="Scan to visit File Tree Plugin"](./file-tree.md)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="Scan to visit File Tree Plugin"](./file-tree.md)`)])])])])],-1),f[31]||=o(`div`,{"data-filepath":`plugins/repo-card.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/repo-card.md`},`plugins/repo-card.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Repo Card`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-repo-card"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`A repository information card plugin that displays detailed GitHub/Gitee repository`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`cards in your Markdown. Supports embed syntax for individual cards and container`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`syntax for multi-card grid layouts.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-repo-card`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import repoCard from 'vitepress-plugin-repo-card'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [repoCard()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { repoCardMarkdownPlugin } from 'vitepress-plugin-repo-card'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(repoCardMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithRepoCard } from 'vitepress-plugin-repo-card/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithRepoCard(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `@[repo]()` syntax to embed individual repository cards. Defaults to GitHub")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"if `register` is omitted.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](owner/name)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](owner/name)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](owner/name)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Display Full Name`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `fullname` parameter to show the `owner/name` full path. For")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`organization-owned repositories, the full name is displayed automatically.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname github](pengzhanbo/vitepress-tuck)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: repo` container to display multiple repository cards in a responsive")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`grid layout.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/core)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Single Repository Card`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**GitHub repository:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Gitee repository:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Display full name:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Multi-Card Grid Layout`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Card Information`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Each repository card displays the following:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Field       | Description                          |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------------------------ |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Name        | Repository name or `owner/name` full |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Visibility  | Public / Private badge               |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Archived    | Warning badge if archived            |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Description | Repository description text          |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Language    | Primary language with color dot      |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Stars       | Formatted count (e.g. `1.2k`)        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Forks       | Formatted count (e.g. `1.2k`)        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| License     | License name (if available)          |`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Component Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"You can also use the `VPRepoCard` component directly:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"ts"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { VPRepoCard } `),o(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-repo-card/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vuejs/vitepress"`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"github"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"owner/name"`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"gitee"`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` fullname`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Props`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Prop       | Type                  | Default    | Description                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------------------- | ---------- | --------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `repo`     | `string`              | (required) | Repository in `owner/name` format |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `register` | `'github' \\| 'gitee'` | `'github'` | Repository platform               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fullname` | `boolean`             | -          | Display full name (`owner/name`)  |")])])])])],-1),f[32]||=o(`div`,{"data-filepath":`plugins/stackblitz.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/stackblitz.md`},`plugins/stackblitz.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# StackBlitz`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-stackblitz"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed [StackBlitz](https://stackblitz.com/) projects into VitePress pages.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Supports embedding online editors via StackBlitz ID, GitHub repository, or local project files.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Can also display as a button to open in a new tab.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-stackblitz`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import stackblitz from 'vitepress-plugin-stackblitz'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [stackblitz()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { stackblitzMarkdownPlugin } from 'vitepress-plugin-stackblitz'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stackblitzMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithStackBlitz } from 'vitepress-plugin-stackblitz/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithStackBlitz(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`The plugin provides two syntaxes for embedding StackBlitz projects:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`embed syntax for referencing external projects, and container syntax for writing project`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`files directly inline within Markdown.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed by StackBlitz ID`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed by GitHub Repository`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz github](user/repo)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Embed Local Project`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Place a `stackblitz.config.json` (or `.yaml`, `.yml`) configuration file in your project directory, then use the `local` attribute:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](path/to/your/project)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`path` supports the following prefixes:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Prefix | Description                                       |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------ | ------------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@`    | Relative to VitePress `srcDir`                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `/`    | Relative to VitePress project root                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -      | Relative to the current markdown file's directory |`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`See [Local Project Configuration](#local-project-configuration) for more details.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Button Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Display as a button that opens the project in a new tab:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](stackblitz-id)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`It can also be combined with GitHub:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz github button](user/repo)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Write project files directly inline within Markdown, ideal for quickly demonstrating simple projects:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz title="Project" description="Project description" template="javascript"`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Attribute Reference`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Embed / Open Options`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Applicable to both embed syntax and button mode:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute          | Type                                 | Default     | Description                                   |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------ | ------------------------------------ | ----------- | --------------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`            | `'dark' \\| 'light' \\| 'default'`     | auto        | Color theme, auto follows VitePress dark mode |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `view`             | `'default' \\| 'preview' \\| 'editor'` | `'default'` | Initial UI view                               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`           | `number`                             | `400`       | Embed height (embed mode only)                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`            | `number`                             | -           | Embed width (embed mode only)                 |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `clickToLoad`      | `boolean`                            | `false`     | Show "click to run" dialog                    |')]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `openFile`         | `string \\| string[]`                 | -           | File(s) to open on load                       |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `hideExplorer`     | `boolean`                            | `false`     | Hide the file explorer                        |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `hideDevTools`     | `boolean`                            | `false`     | Hide the dev tools console                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `showSidebar`      | `boolean`                            | `false`     | Show sidebar as open on load                  |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `terminalHeight`   | `number` (0-100)                     | -           | Terminal height percentage                    |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `devToolsHeight`   | `number` (0-100)                     | -           | Dev tools height percentage                   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `newWindow`        | `boolean`                            | `false`     | Open project in a new tab                     |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `forceEmbedLayout` | `boolean`                            | `false`     | Force embed layout (deprecated)               |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `origin`           | `string`                             | -           | StackBlitz EE instance URL                    |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Project Options`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Only applicable to local project embed mode and container syntax:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute      | Type                                                                                                            | Default | Description                                |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | --------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------ |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`        | `string`                                                                                                        | -       | Project title (required)                   |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `description`  | `string`                                                                                                        | -       | Project description (required)             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `template`     | `'angular-cli' \\| 'create-react-app' \\| 'html' \\| 'javascript' \\| 'typescript' \\| 'polymer' \\| 'vue' \\| 'node'` | -       | Project template (required)                |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `dependencies` | `Record<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                                                                                        | -       | npm dependencies                           |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `files`        | `Record<"),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                                                                                        | -       | Project files (auto-loaded for local mode) |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### Build Settings`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Set via `settings`-prefixed attributes, only applicable to local project embed mode and container syntax:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Attribute              | Type                              | Default  | Description                     |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------------------- | --------------------------------- | -------- | ------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsTrigger`      | `'auto' \\| 'save' \\| 'keystroke'` | `'auto'` | Compilation trigger timing      |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsAction`       | `'hmr' \\| 'refresh'`              | `'hmr'`  | How to inject compiled changes  |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsClearConsole` | `boolean`                         | `true`   | Clear console after compilation |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local title="Demo" description="A demo" template="html" settingsTrigger="save" settingsAction="refresh"](path/to/project)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Local Project Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"When using `@[stackblitz local](path)` to embed a local project, the plugin automatically:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"1. Loads all files from the specified directory (excluding `node_modules`)")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"2. Searches for `stackblitz.config.json`, `stackblitz.config.yaml`, `stackblitz.config.yml` in order")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`3. Merges the configuration file options with the loaded files`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Example `stackblitz.config.json`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "$schema": "../../node_modules/vitepress-plugin-stackblitz/schema.json",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "title": "Project",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "template": "javascript",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "dependencies": {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "lodash": "^4.17.0"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "settings": {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "trigger": "save"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP]`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> Including the `$schema` field provides intelligent autocompletion and validation for configuration files in your editor.")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> ```json")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>   "$schema": "https://unpkg.com/vitepress-plugin-stackblitz/schema.json"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> }`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> ```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Example`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### StackBlitz ID Embed`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Button Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](sdk-github-project)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](sdk-github-project)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Container Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz button`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "main": "index.js",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "keywords": ["project"],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "author": "Project Author",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "license": "MIT"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` charset`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"UTF-8"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"viewport"`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` content`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"width=device-width, initial-scale=1.0"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Project</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz button`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "main": "index.js",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "keywords": ["project"],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "author": "Project Author",`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "license": "MIT"`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` charset`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"UTF-8"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"viewport"`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` content`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"width=device-width, initial-scale=1.0"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Project</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Local Project Embed`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="Local Project Directory" entry="stackblitz.config.json"](@/snippets/stack)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](@/snippets/stack)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](@/snippets/stack)`)])])])])],-1),f[33]||=o(`div`,{"data-filepath":`plugins/steps.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/steps.md`},`plugins/steps.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Steps`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-steps"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Step container plugin for creating step-by-step guided content in Markdown.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import steps from 'vitepress-plugin-steps'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [steps()],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { stepsMarkdownPlugin } from 'vitepress-plugin-steps'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stepsMarkdownPlugin)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Also import the styles in the theme:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import 'vitepress-plugin-steps/style.css'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use the `::: steps` container to wrap step content, with each step starting from an unordered/ordered list item:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Step One`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step one`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Step Two`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step two`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Step Three`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step three, supports heading syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Rendered Result:**`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Step One`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step one`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Step Two`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step two`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Step Three`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Description for step three, supports heading syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[34]||=o(`div`,{"data-filepath":`plugins/video.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/video.md`},`plugins/video.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Video`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-video"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Multi-platform video embedding plugin, supporting Bilibili, YouTube, AcFun, and ArtPlayer.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-video`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck Mode <`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Recommended</`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import video from 'vitepress-plugin-video'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    video({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // All optional, default to true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      artplayer: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      youtube: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      bilibili: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      acfun: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Learn more about **vitepress-tuck**](../guide/quick-start.md){.readmore}`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Native Mode`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { videoMarkdownPlugin } from 'vitepress-plugin-video'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(videoMarkdownPlugin, {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        artplayer: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        youtube: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        bilibili: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        acfun: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithVideo } from 'vitepress-plugin-video/client'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithVideo(ctx)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Syntax`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Bilibili`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed Bilibili videos:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](bvid)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](aid cid)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili p2 autoplay time=30](bvid)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option      | Type               | Description                            |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------ | -------------------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `p{number}` | -                  | Video part number                      |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay`  | `boolean`          | Auto play                              |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `time`      | `number \\| string` | Start time, seconds or HH:MM:SS format |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### YouTube`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed YouTube videos:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](video_id)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube autoplay loop start=10 end=120](video_id)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option     | Type      | Description           |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | --------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay` | `boolean` | Auto play             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `loop`     | `boolean` | Loop playback         |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `start`    | `number`  | Start time in seconds |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `end`      | `number`  | End time in seconds   |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### AcFun`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Embed AcFun videos:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac_id)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### ArtPlayer`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Use ArtPlayer to embed local or remote videos:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](/videos/demo.mp4)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer muted autoplay poster="/cover.jpg" width="800px"](/videos/demo.mp4)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option     | Type      | Default  | Description               |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------- | ------------------------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay` | `boolean` | `false`  | Auto play                 |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `muted`    | `boolean` | `false`  | Muted                     |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `loop`     | `boolean` | `false`  | Loop playback             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `volume`   | `number`  | `0.75`   | Volume level              |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `poster`   | `string`  | -        | Cover image URL           |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoMini` | `boolean` | `false`  | Auto mini mode            |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `width`    | `string`  | `"100%"` | Player width              |')]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`   | `string`  | -        | Player height             |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `ratio`    | `string`  | -        | Aspect ratio, e.g. "16:9" |')]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Supports `mp4`, `mp3`, `webm`, `ogg`, `mkv`, `mov` formats.")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"If your video is in `mpd` or `dash` format, you'll also need to install `dashjs`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i dashjs`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"If your video is in `m3u8` or `hls` format, you'll also need to install `hls.js`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i hls.js`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"If your video is in `ts` or `flv` format, you'll also need to install `mpegts.js`:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i mpegts.js`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface VideoPluginOptions {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Enable ArtPlayer`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  artplayer?: boolean`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Enable YouTube video embedding`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  youtube?: boolean`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Enable Bilibili video embedding`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  bilibili?: boolean`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Enable AcFun video embedding`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  acfun?: boolean`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Examples`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Bilibili`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](BV1EZ42187Hg)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](BV1EZ42187Hg)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### YouTube`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](0JJPfz5dg20)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](0JJPfz5dg20)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### AcFun`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac47431669)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac47431669)`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### ArtPlayer`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](https://artplayer.org/assets/sample/video.mp4)`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](https://artplayer.org/assets/sample/video.mp4)`)])])])])],-1),f[35]||=o(`div`,{"data-filepath":`plugins/watermark.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/watermark.md`},`plugins/watermark.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`watermark`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Watermark`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),o(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-watermark"`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Add watermark to your site. Pure client-side implementation, no node-side configuration required.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Installation`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-watermark`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Usage`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"This plugin only provides the client-side `setupWatermark` function,")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"which needs to be called in the theme's `setup` function to configure the watermark:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { setupWatermark } from 'vitepress-plugin-watermark'`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  setup() {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    setupWatermark({ /* Configure watermark here */ })`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Configuration`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`setupWatermark` accepts an optional configuration object:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`setupWatermark({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enabled: true,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content: 'My Watermark',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontColor: '#76747f',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  globalAlpha: 0.165,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: 200,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: 200,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  rotate: -22,`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontSize: '16px',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontFamily: 'sans-serif',`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| Option | Type | Default | Description |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------ | ---- | ------- | ----------- |`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `enabled` | `boolean \\| ((pageData: PageData) => boolean)` | `true` | Enable watermark; supports a function for dynamic control |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `content` | `string` | Site title | Watermark text content |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontColor` | `string` | `'#76747f'` | Font color |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `globalAlpha` | `number` | `0.165` (normal) / `0.005` (blind mode) | Opacity |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `mode` | `'default' \\| 'blind'` | `'default'` | Watermark mode: `'blind'` for blind watermark |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width` | `number` | — | Width of each watermark cell |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height` | `number` | — | Height of each watermark cell |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `rotate` | `number` | — | Rotation angle in degrees |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontSize` | `string` | — | Font size |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontFamily` | `string` | — | Font family |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontStyle` | `string` | — | Font style |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontWeight` | `string` | — | Font weight |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `image` | `string` | — | Image watermark URL |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `layout` | `'default' \\| 'grid'` | — | Layout mode |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `zIndex` | `number` | — | CSS z-index |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `mutationObserve` | `boolean` | — | Enable DOM mutation observer protection |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `monitorProtection` | `boolean` | — | Enable monitoring protection |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `movable` | `boolean` | — | Allow dragging the watermark |")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `parent` | `Element \\| string` | — | Mount target element |")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`For more options, see the [watermark-js-plus](https://github.com/zhensherlock/watermark-js-plus) documentation.`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Per-Page Watermark`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Control watermark on individual pages via frontmatter:`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Enable Watermark`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark: true`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Custom Text`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark: CONFIDENTIAL`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Full Customization`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content: DRAFT`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontColor: '#ff0000'`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  globalAlpha: 0.3`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  rotate: 30`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Disable on Specific Pages`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark: false`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Dynamic Enable via Function`)]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Use an `enabled` function to dynamically control watermark based on the page path:")]),c(`
`),o(`span`,{class:`line`}),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`setupWatermark({`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enabled: (pageData) => {`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // Only enable on pages under guide/`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    return pageData.relativePath.startsWith('guide/')`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[36]||=o(`div`,{"data-filepath":`index.md`,class:`vp-code-block-title`},[o(`div`,{class:`vp-code-block-title-bar`},[o(`span`,{class:`vp-code-block-title-text`,"data-title":`index.md`},`index.md`)]),o(`div`,{class:`language-md`},[o(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),o(`span`,{class:`lang`},`md`),o(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[o(`code`,null,[o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`layout`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`home`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`hero`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  name`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  text`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Enhance vitepress configuration, provide plugins capability.`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  actions`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - `),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`text`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Get Started`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      link`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`/guide/quick-start`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - `),o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`text`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Github`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      link`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`https://github.com/pengzhanbo/vitepress-tuck`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      theme`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`alt`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  image`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`    src`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`/tuck-logo.svg`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`    alt`),o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),o(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),c(`
`),o(`span`,{class:`line`},[o(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)])])])])],-1)]),_:1})])}var g=a(p,[[`render`,h]]);export{f as __pageData,g as default};