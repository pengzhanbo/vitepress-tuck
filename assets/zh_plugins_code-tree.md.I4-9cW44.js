import{Ft as e,H as t,at as n,bt as r,et as i,it as a,ot as o,rt as s,wt as c}from"./chunks/framework.D5NciBKD.js";import{t as l}from"./chunks/NpmBadge.o9UzI8Fp.js";import{i as u}from"./chunks/browser.ZPUTxy-v.js";import{t as d}from"./chunks/browser.CTn0DH92.js";var f=JSON.parse(`{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/plugins/code-tree.md","filePath":"zh/plugins/code-tree.md","lastUpdated":1782066503000}`),p={name:`zh/plugins/code-tree.md`},m={id:`vitepress-tuck-模式-推荐`,tabindex:`-1`};function h(t,f,p,h,g,_){let v=c(`CopyOrDownloadAsMarkdownButtons`),y=l,b=c(`Badge`),x=u,S=d;return r(),s(`div`,null,[f[38]||=i(`div`,{style:{display:`none`},hidden:`true`,"aria-hidden":`true`,"data-nosnippet":``},`Are you an LLM? You can read better optimized documentation at /zh/plugins/code-tree.md for this page in Markdown format`,-1),f[39]||=i(`h1`,{id:`code-tree`,tabindex:`-1`},[n(`Code Tree `),i(`a`,{class:`header-anchor`,href:`#code-tree`,"aria-label":`Permalink to “Code Tree”`},`​`)],-1),o(v),o(y,{name:`vitepress-plugin-code-tree`}),f[40]||=a(`<p>代码树插件，用于在 Markdown 中渲染带文件树侧边栏的代码结构，支持文件切换查看。</p><p>该插件依赖于 <a href="./file-tree">文件树</a> 插件提供的文件树侧边栏组件。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-0" id="tab-16-1" checked><label data-title="pnpm" for="tab-16-1">pnpm</label><input type="radio" name="group-0" id="tab-16-2"><label data-title="npm" for="tab-16-2">npm</label><input type="radio" name="group-0" id="tab-16-3"><label data-title="bun" for="tab-16-3">bun</label><input type="radio" name="group-0" id="tab-16-4"><label data-title="deno" for="tab-16-4">deno</label><input type="radio" name="group-0" id="tab-16-5"><label data-title="yarn" for="tab-16-5">yarn</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h2>`,5),i(`h3`,m,[f[1]||=n(`vitepress-tuck 模式 `,-1),o(b,{type:`tip`},{default:e(()=>[...f[0]||=[n(`推荐`,-1)]]),_:1}),f[2]||=n(),f[3]||=i(`a`,{class:`header-anchor`,href:`#vitepress-tuck-模式-推荐`,"aria-label":`Permalink to “vitepress-tuck 模式 推荐”`},`​`,-1)]),f[41]||=a(`<div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-tuck&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">codeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><p><a href="./../guide/quick-start" class="readmore">查看 <strong>vitepress-tuck</strong> 了解更多</a></p><h3 id="传统模式" tabindex="-1">传统模式 <a class="header-anchor" href="#传统模式" aria-label="Permalink to “传统模式”">​</a></h3><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { codeTreeMarkdownPlugin } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  markdown: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: (</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">md</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      md.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(codeTreeMarkdownPlugin)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/theme/index.ts">.vitepress/theme/index.ts</span></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Theme } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { enhanceAppWithCodeTree } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree/client&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    enhanceAppWithCodeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ctx)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">satisfies</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Theme</span></span></code></pre></div></div><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to “语法”">​</a></h2><p>插件提供两种语法来渲染代码树：用于内联文件内容的容器语法，以及用于从目录加载文件的嵌入语法。</p><h3 id="容器语法" tabindex="-1">容器语法 <a class="header-anchor" href="#容器语法" aria-label="Permalink to “容器语法”">​</a></h3><p>使用 <code>::: code-tree</code> 容器，内部包含围栏代码块。每个围栏代码块必须通过信息字符串中的 <code>[文件名]</code> 语法声明文件名。</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree title=&quot;项目结构&quot;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h4 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to “容器属性”">​</a></h4><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>代码树标题</td><td>-</td></tr><tr><td><code>height</code></td><td>代码树容器高度</td><td><code>420px</code></td></tr><tr><td><code>entry</code></td><td>入口文件，默认打开</td><td>-</td></tr><tr><td><code>show-sidebar</code></td><td>是否默认显示侧边栏</td><td><code>false</code></td></tr></tbody></table><h4 id="默认激活文件" tabindex="-1">默认激活文件 <a class="header-anchor" href="#默认激活文件" aria-label="Permalink to “默认激活文件”">​</a></h4><p>在围栏代码块的信息字符串中添加 <code>:active</code> 标记，可以将该文件设为默认激活的文件：</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts] :active</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [utils.ts]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> noop</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h3 id="嵌入语法" tabindex="-1">嵌入语法 <a class="header-anchor" href="#嵌入语法" aria-label="Permalink to “嵌入语法”">​</a></h3><p>使用 <code>@[code-tree](dir)</code> 嵌入一个目录作为代码树。目录中的文件会被自动加载并渲染。</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><code>dir</code> 支持以下路径前缀：</p><table tabindex="0"><thead><tr><th>前缀</th><th>说明</th></tr></thead><tbody><tr><td><code>@</code></td><td>相对于 VitePress <code>srcDir</code></td></tr><tr><td><code>/</code></td><td>相对于 VitePress 项目根目录</td></tr><tr><td>-</td><td>相对于当前 markdown 文件所在目录</td></tr></tbody></table><h4 id="嵌入属性" tabindex="-1">嵌入属性 <a class="header-anchor" href="#嵌入属性" aria-label="Permalink to “嵌入属性”">​</a></h4><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;源码&quot; height=&quot;500px&quot; entry=&quot;index.ts&quot; show-sidebar=true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to “配置”">​</a></h2><h3 id="codetreepluginoptions" tabindex="-1">CodeTreePluginOptions <a class="header-anchor" href="#codetreepluginoptions" aria-label="Permalink to “CodeTreePluginOptions”">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeTreePluginOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  /**</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * 代码树容器默认高度</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">420px</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   */</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  height</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  /**</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * 忽略文件的 glob 路径模式</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * 在通过嵌入语法从目录加载文件时生效</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * node_modules 和 .DS_Store 始终会被忽略</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   */</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  ignores</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">  /**</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * 资源文件加载器</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * 使用 \`@[code-tree](dir)\` 嵌入目录时，用于加载资源文件</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * 自定义加载器会合并到内置加载器之前，因此具有更高优先级</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   * </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">@default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> []</span></span>
<span class="line"><span style="--shiki-light:#62687b;--shiki-dark:#818e99;">   */</span></span>
<span class="line"><span style="--shiki-light:#c13617;--shiki-dark:#FFAB70;">  loaders</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeTreeFileLoader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="文件加载器" tabindex="-1">文件加载器 <a class="header-anchor" href="#文件加载器" aria-label="Permalink to “文件加载器”">​</a></h3><p>加载器用于嵌入语法加载文件内容。插件内置了常见文件类型的加载器，自定义加载器会合并到内置加载器之前，因此具有更高优先级。</p><p>内置加载器覆盖以下文件类型：</p><ul><li>点文件（<code>.git*</code>、<code>.env*</code>、<code>.*ignore</code>、<code>.npmrc</code>）：以纯文本渲染</li><li><code>.XXXrc</code> 配置文件（如 <code>.eslintrc</code>）：以 JSON 格式渲染</li><li>图片文件：渲染为 <code>&lt;img&gt;</code> 标签，并正确解析 <code>src</code></li><li>Shiki 支持的源文件：渲染为带语法高亮的围栏代码块</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree, { loadCodeContent } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><code>filter</code> 字段接受 glob 模式字符串、glob 模式数组，或接收 <code>CodeTreeFile</code> 并返回布尔值的断言函数。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h2><h3 id="容器语法-1" tabindex="-1">容器语法 <a class="header-anchor" href="#容器语法-1" aria-label="Permalink to “容器语法”">​</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::code-tree title=&quot;代码树&quot; show-sidebar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`rs [main.rs]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div>`,34),o(S,{title:`代码树`,"entry-file":`index.ts`,"show-sidebar":``},{"file-tree":e(()=>[o(x,{filename:`index.ts`,level:1,type:`file`,expanded:``,filepath:`index.ts`}),o(x,{filename:`main.rs`,level:1,type:`file`,expanded:``,filepath:`main.rs`})]),default:e(()=>[f[4]||=i(`div`,{"data-filepath":`index.ts`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`index.ts`},`index.ts`)]),i(`div`,{class:`language-ts`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`ts`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)])])])])],-1),f[5]||=i(`div`,{"data-filepath":`main.rs`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`main.rs`},`main.rs`)]),i(`div`,{class:`language-rs`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`rs`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`fn`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` main`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`() {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    println!`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"Hello, world!"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`);`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)])])])])],-1)]),_:1}),f[42]||=a(`<h3 id="嵌入语法-1" tabindex="-1">嵌入语法 <a class="header-anchor" href="#嵌入语法-1" aria-label="Permalink to “嵌入语法”">​</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;代码树&quot; show-sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">@/zh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,2),o(S,{title:`代码树`,"entry-file":`guide/api.md`,"show-sidebar":``},{"file-tree":e(()=>[o(x,{filename:`guide`,level:1,type:`folder`,expanded:``},{default:e(()=>[o(x,{filename:`api.md`,level:2,type:`file`,expanded:``,filepath:`guide/api.md`}),o(x,{filename:`plugin-dev.md`,level:2,type:`file`,expanded:``,filepath:`guide/plugin-dev.md`}),o(x,{filename:`quick-start.md`,level:2,type:`file`,expanded:``,filepath:`guide/quick-start.md`}),o(x,{filename:`toolkit.md`,level:2,type:`file`,expanded:``,filepath:`guide/toolkit.md`}),o(x,{filename:`wrap-plugin.md`,level:2,type:`file`,expanded:``,filepath:`guide/wrap-plugin.md`})]),_:1}),o(x,{filename:`plugins`,level:1,type:`folder`,expanded:``},{default:e(()=>[o(x,{filename:`abbr.md`,level:2,type:`file`,expanded:``,filepath:`plugins/abbr.md`}),o(x,{filename:`annotation.md`,level:2,type:`file`,expanded:``,filepath:`plugins/annotation.md`}),o(x,{filename:`caniuse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/caniuse.md`}),o(x,{filename:`code-collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-collapse.md`}),o(x,{filename:`code-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-tree.md`}),o(x,{filename:`codepen.md`,level:2,type:`file`,expanded:``,filepath:`plugins/codepen.md`}),o(x,{filename:`collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/collapse.md`}),o(x,{filename:`field.md`,level:2,type:`file`,expanded:``,filepath:`plugins/field.md`}),o(x,{filename:`file-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/file-tree.md`}),o(x,{filename:`icons.md`,level:2,type:`file`,expanded:``,filepath:`plugins/icons.md`}),o(x,{filename:`intro.md`,level:2,type:`file`,expanded:``,filepath:`plugins/intro.md`}),o(x,{filename:`jsfiddle.md`,level:2,type:`file`,expanded:``,filepath:`plugins/jsfiddle.md`}),o(x,{filename:`mark.md`,level:2,type:`file`,expanded:``,filepath:`plugins/mark.md`}),o(x,{filename:`mermaid.md`,level:2,type:`file`,expanded:``,filepath:`plugins/mermaid.md`}),o(x,{filename:`npm-to.md`,level:2,type:`file`,expanded:``,filepath:`plugins/npm-to.md`}),o(x,{filename:`obsidian.md`,level:2,type:`file`,expanded:``,filepath:`plugins/obsidian.md`}),o(x,{filename:`pdf.md`,level:2,type:`file`,expanded:``,filepath:`plugins/pdf.md`}),o(x,{filename:`plantuml.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plantuml.md`}),o(x,{filename:`plot.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plot.md`}),o(x,{filename:`qrcode.md`,level:2,type:`file`,expanded:``,filepath:`plugins/qrcode.md`}),o(x,{filename:`repo-card.md`,level:2,type:`file`,expanded:``,filepath:`plugins/repo-card.md`}),o(x,{filename:`stackblitz.md`,level:2,type:`file`,expanded:``,filepath:`plugins/stackblitz.md`}),o(x,{filename:`steps.md`,level:2,type:`file`,expanded:``,filepath:`plugins/steps.md`}),o(x,{filename:`video.md`,level:2,type:`file`,expanded:``,filepath:`plugins/video.md`}),o(x,{filename:`watermark.md`,level:2,type:`file`,expanded:``,filepath:`plugins/watermark.md`})]),_:1}),o(x,{filename:`config.ts`,level:1,type:`file`,expanded:``,filepath:`config.ts`}),o(x,{filename:`index.md`,level:1,type:`file`,expanded:``,filepath:`index.md`})]),default:e(()=>[f[6]||=i(`div`,{"data-filepath":`guide/api.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/api.md`},`guide/api.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# API 参考`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## vitepress-tuck`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### defineConfig`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`defineConfig` 是 `vitepress-tuck` 的核心函数，用于替代 VitePress 的 `defineConfig`。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function defineConfig<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`ThemeConfig`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` =`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` DefaultTheme.Config`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  config: UserConfig<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NoInfer`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<ThemeConfig`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> & TuckConfig,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): UserConfig<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NoInfer`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<ThemeConfig`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 参数`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 参数     | 类型                      | 说明                                |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ------------------------- | ----------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `config` | `UserConfig & TuckConfig` | VitePress 原始配置 + `plugins` 选项 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`TuckConfig` 定义：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface TuckConfig {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * vitepress 插件列表`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins?: VitepressPlugin[]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * unplugin-vue-components 插件选项`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @see - https://github.com/unplugin/unplugin-vue-components`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  components?: ComponentsOptions`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 返回值`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"返回合并后的完整 VitePress 配置对象 `UserConfig`。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 工作原理`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"1. 遍历 `plugins` 数组，合并每个插件的 `markdown`、`vite`、`vue` 等配置")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"2. 收集所有钩子函数（`buildEnd`、`transformHead`、`transformHtml`、`transformPageData`、`postRender`），并按照各自的策略合并：")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `markdown.config`、`buildEnd` → 并发执行")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `transformHead` → 并发执行后合并结果")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `transformHtml`、`transformPageData`、`postRender` → 顺序执行，链式传递")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"3. 将插件中的 `client` 配置注入到内置的 `virtual-enhance-app` 虚拟模块")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"4. 将插件中的 `componentResolver` 收集到内置的 `unplugin-vue-components` 解析器列表")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`5. 最后合并用户自身的配置项`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### definePlugin`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用于定义 VitePress 插件。它是一个类型辅助函数，帮助开发者以规范化的方式创建插件。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function definePlugin<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugin: (option?: T) => VitepressPlugin,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): (option?: T) => VitepressPlugin`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 参数`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 参数     | 类型                              | 说明                                       |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | --------------------------------- | ------------------------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `plugin` | `(option?: T) => VitepressPlugin` | 插件工厂函数，接收可选配置项，返回插件对象 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VitepressPlugin`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件对象的类型定义：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface VitepressPlugin extends Pick<`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  UserConfig,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  'markdown' | 'vite' | 'vue' | 'buildEnd' | 'transformHead' | 'transformHtml' | 'transformPageData' | 'postRender'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 插件名称（必填，用于标识和调试）`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: string`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 客户端配置，用于自动注入到 virtual:enhance-app`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client?: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * 自定义的 import 语句列表`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     *`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * @example`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * imports: ['import "my-plugin/style.css"']`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports?: string[]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * 客户端增强函数名。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * - 未设置: 不注入 enhanceApp 函数`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * - true: 默认函数名为 `enhanceApp`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * - 字符串: 指定函数名`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     *`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * @example`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * enhance: 'enhanceAppWithMyPlugin'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance?: string | boolean`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 组件解析器，用于 unplugin-vue-components 自动按需导入。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - 字符串数组：声明的组件名将从 `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`插件名`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">/client` 自动解析")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - ComponentResolver 对象：自定义解析逻辑`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @example`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * ```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` // 简单形式`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * componentResolver: ['MyComponent', 'OtherComponent']`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * ```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver?: string[] | ComponentResolver`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 支持的 VitePress 配置项`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性                | 类型                              | 说明                                                              |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | --------------------------------- | ----------------------------------------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `markdown`          | `UserConfig['markdown']`          | Markdown 相关配置，常用于 `markdown.config` 注册 markdown-it 插件 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `vite`              | `UserConfig['vite']`              | Vite 配置，用于注册 Vite 插件和优化配置                           |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `vue`               | `UserConfig['vue']`               | Vue 应用级别的配置                                                |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `buildEnd`          | `UserConfig['buildEnd']`          | 构建完成钩子（并发执行）                                          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHead`     | `UserConfig['transformHead']`     | 转换 HTML 头部钩子（并发执行，合并结果）                          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHtml`     | `UserConfig['transformHtml']`     | 转换 HTML 钩子（顺序执行，链式传递）                              |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformPageData` | `UserConfig['transformPageData']` | 转换页面数据钩子（顺序执行，链式传递）                            |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `postRender`        | `UserConfig['postRender']`        | 页面渲染后钩子（顺序执行，链式传递）                              |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### virtual:enhance-app`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`virtual:enhance-app` 是一个虚拟模块，由 `vitepress-tuck` 内置提供。它自动收集所有插件的 `client` 配置并生成对应的代码。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`使用时在主题入口中导入：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import enhanceApp from 'virtual:enhance-app'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceApp(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`TypeScript 类型支持需要添加类型引用：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [tsconfig.json]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "compilerOptions": {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "types": ["vitepress-tuck/client-types"]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 内置插件：auto-components`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-tuck` 内置集成了 [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) 插件，提供自动按需组件导入能力。该插件作为内置插件自动启用，无需手动注册。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 默认行为`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 扫描 `.vue` 和 `.md` 文件中的组件使用")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 类型声明文件生成到 `node_modules/.vite/components.d.ts`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 自动收集所有插件的 `componentResolver` 声明")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 自定义配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `defineConfig` 的 `components` 选项可以自定义 `unplugin-vue-components` 的行为：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  components: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // 自定义扫描目录`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    dirs: ['src/components'],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // 目录作为命名空间`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    directoryAsNamespace: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // 其他 unplugin-vue-components 选项...`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"插件的 `componentResolver` 声明会与用户在 `components` 中的配置合并。插件开发者只需在插件中声明 `componentResolver`，用户即可直接在 Markdown 或 Vue 文件中使用对应组件，无需手动 import。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[7]||=i(`div`,{"data-filepath":`guide/plugin-dev.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/plugin-dev.md`},`guide/plugin-dev.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 插件开发`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-tuck` 提供了 `definePlugin` 函数来帮助开发者便捷地创建 VitePress 插件。通过 `definePlugin`，你可以将原本需要用户分散配置的 `markdown`、`vite`、`vue` 等选项集中在一个插件函数中。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 基本结构`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"一个基于 `vitepress-tuck` 的插件由以下部分组成：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin((options?: MyPluginOptions) => ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 客户端配置：自动注入到 virtual:enhance-app`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: 'enhanceAppWithMyPlugin',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 组件解析器：声明插件提供的组件，支持自动按需导入`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: ['MyComponent', 'OtherComponent'],`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Markdown 配置：注册 markdown-it 插件`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(myMarkdownPlugin, options?.markdownOptions)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Vite 配置`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [myVitePlugin(options?.viteOptions)],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 其他 VitePress 钩子`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  buildEnd: (site) => { /* ... */ },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformHead: (ctx) => { /* ... */ },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformHtml: (code, id, ctx) => { /* ... */ },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformPageData: (pageData, ctx) => { /* ... */ },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  postRender: (context) => { /* ... */ },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 核心概念`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### name`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"每个插件必须有一个唯一的 `name`，用于标识和调试：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### client`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`client` 配置用于向客户端注入代码。`vitepress-tuck` 会自动将这些代码注入到 `virtual:enhance-app` 虚拟模块中。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### client.imports`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`添加自定义的 import 语句，常用于导入样式文件：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      'import "vitepress-plugin-my-plugin/style.css"',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### client.enhance`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"指定插件的客户端增强函数名。该函数会在 VitePress 主题的 `enhanceApp(ctx)` 中被调用。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 设置为 `true` 时，默认函数名为 `enhanceApp`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 设置为字符串时，函数名为该字符串`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: 'enhanceAppWithMyPlugin',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`对应的，在插件的客户端入口文件中导出同名函数：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// client/index.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { EnhanceAppContext } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 注册组件、指令等`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.component('MyComponent', MyComponent)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### componentResolver`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`componentResolver` 用于声明插件提供的 Vue 组件，使其能被内置的 `unplugin-vue-components` 自动按需导入。用户在 Markdown 或 Vue 文件中直接使用组件名即可，无需手动 import。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 字符串数组形式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"最简单的形式是传入组件名数组，这些组件会从 `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`插件名`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">/client` 自动解析：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: ['MyComponent', 'OtherComponent'],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`对应的，在插件的客户端入口中导出这些组件：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// client/index.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import MyComponent from './components/MyComponent.vue'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import OtherComponent from './components/OtherComponent.vue'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export { MyComponent, OtherComponent }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 自定义 ComponentResolver`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"对于更复杂的解析逻辑，可以传入来自 `unplugin-vue-components` 的 `ComponentResolver` 对象：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { ComponentResolver } from 'unplugin-vue-components'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const myResolver: ComponentResolver = {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: 'component',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolve: (name) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    if (name.startsWith('My')) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      return { name, from: 'vitepress-plugin-my-plugin/client' }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin(() => ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: myResolver,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"当插件同时设置了 `client.enhance` 用于注册组件和 `componentResolver` 时，推荐使用 `componentResolver` 来实现按需导入，这样可以减少不必要的组件打包。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### markdown`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`配置 markdown-it 插件，用于扩展 Markdown 语法：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 注册自定义容器`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(containerPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 注册行内规则`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.inline.ruler.before('emphasis', 'my_rule', myRule)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vite`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`配置 Vite 插件和优化选项：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [myVitePlugin()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: ['my-plugin-package'],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 钩子函数`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`definePlugin` 支持 VitePress 的各种钩子函数：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 钩子                | 说明           | 执行方式           |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | -------------- | ------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `buildEnd`          | 构建完成时触发 | 并发执行           |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHead`     | 转换 HTML 头部 | 并发执行，合并结果 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHtml`     | 转换 HTML 内容 | 顺序执行，链式传递 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformPageData` | 转换页面数据   | 顺序执行，链式传递 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `postRender`        | 页面渲染后触发 | 顺序执行，链式传递 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 客户端代码组织`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`当插件需要提供客户端代码（如 Vue 组件）时，推荐以下目录结构：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="my-plugin"`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- my-plugin`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - src`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - client`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - components`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        - MyComponent.vue`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - index.ts # 导出 enhanceApp 函数`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - node`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - myPlugin.ts # 插件核心逻辑`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - index.ts # 插件入口，使用 definePlugin`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - package.json`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - tsconfig.json`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 `package.json` 中配置 `exports`，将客户端代码单独导出：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "exports": {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ".": {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "types": "./dist/node/index.d.ts",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "default": "./dist/node/index.js"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "./client": {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "browser": "./dist/client/browser/index.js",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "default": "./dist/client/ssr/index.js"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 推荐使用 vitepress-plugin-toolkit`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` 提供了丰富的工具函数来辅助插件开发，包括：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createContainerPlugin` - 创建 markdown-it 自定义容器")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createContainerSyntaxPlugin` - 创建自定义语法容器")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createEmbedRuleBlock` - 创建嵌入语法块")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `resolveAttrs` / `stringifyAttrs` - 属性解析和序列化")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createLogger` - 日志工具")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createLocales` - 国际化支持")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `useSize` - 响应式尺寸计算")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`详细 API 请参考 [Toolkit API 文档](./toolkit)。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 完整示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"以下是一个基于 `definePlugin` 开发的简单步骤插件：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [node/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerPlugin } from 'vitepress-plugin-toolkit'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export const stepsPlugin = (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin(md, 'steps', {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    before: () => '<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vp-steps"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin(() => ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-steps',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: ['import "vitepress-plugin-steps/style.css"'],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stepsPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户使用时只需：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import steps from 'vitepress-plugin-steps'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [steps()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[8]||=i(`div`,{"data-filepath":`guide/quick-start.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/quick-start.md`},`guide/quick-start.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 快速开始`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 什么是 vitepress-tuck？`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 为 VitePress 提供了简单灵活、低门槛的插件开发与接入能力。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`它通过包装 VitePress 的 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`，提供额外的 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 选项，将插件接入的复杂度转移到插件内部，用户只需在 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 数组中添加插件。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-tuck`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 在 VitePress 站点中使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### 替换配置文件`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  将 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/config.ts`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中的 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 替换为 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 的 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line diff remove`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  import { defineConfig } from 'vitepress-tuck' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  export default defineConfig({`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    plugins: [`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 在这里添加插件`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    // 其他 VitePress 配置项 ...`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### 配置客户端入口`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  在 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/theme/index.ts`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中引入 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`virtual:enhance-app`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` enhanceApp `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'virtual:enhance-app'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      enhanceApp(ctx) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  } satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"  `virtual:enhance-app`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 是一个虚拟模块，`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 会自动将插件的客户端代码注入其中，无需手动配置。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### TypeScript 支持`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  如果项目使用 TypeScript，在 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tsconfig.json`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中添加类型引用：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```json")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`    "compilerOptions"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "types"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck/client-types"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 使用插件`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件使用非常简单，只需在 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中导入并调用即可：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` steps `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` mermaid `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-mermaid-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    steps`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    mermaid`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 可以传入插件配置项`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`每个插件的配置项请参考对应的插件文档。`)])])])])],-1),f[9]||=i(`div`,{"data-filepath":`guide/toolkit.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/toolkit.md`},`guide/toolkit.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Toolkit API`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-toolkit"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` 是 VitePress 插件开发工具包，提供了丰富的工具函数来辅助插件开发。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`安装：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-toolkit`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Node 端 API`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"从 `vitepress-plugin-toolkit` 导入：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttrs,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttr,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  stringifyAttrs,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLogger,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLocales,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getVitepressConfig,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getLocaleWithPath,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveRouteLink,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  parseRect,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  slugify,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  treatAsHtml,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerPlugin`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"创建 markdown-it 自定义容器插件。用于处理 `::: type` 语法，内容会被 markdown-it 正常解析。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerPlugin(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options?: ContainerOptions,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**ContainerOptions：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface ContainerOptions {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 渲染容器起始标签时的回调`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  before?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 渲染容器结束标签时的回调`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  after?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerPlugin } from 'vitepress-plugin-toolkit'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin(md, 'steps', {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    before: () => '<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vp-steps"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerSyntaxPlugin`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"创建自定义语法容器插件。与 `createContainerPlugin` 不同，内容不会被 markdown-it 解析，需要自行处理。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerSyntaxPlugin(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: RenderRule,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"容器内的原始内容通过 `token.content` 获取，元数据通过 `token.meta` 获取。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerSyntaxPlugin } from 'vitepress-plugin-toolkit'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin(md, 'file-tree', (tokens, index) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    const { content, meta } = tokens[index]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"    return `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"file-tree"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">${content}</"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createEmbedRuleBlock`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"创建嵌入规则块，用于处理 `@[type info](source)` 语法。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createEmbedRuleBlock<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: EmbedRuleBlockOptions<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**EmbedRuleBlockOptions：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface EmbedRuleBlockOptions<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 嵌入类型，如 'pdf'、'qrcode' */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Token 名称，默认与 type 相同 */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name?: string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 插入到哪个规则之前，默认 'code' */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  beforeName?: string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 规则选项 */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ruleOptions?: RuleOptions`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  /** 解析 `@[type info](source)` 中的 `info` 和 `source`，转换为元数据对象 */")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  meta: (info: string, source: string) => Meta`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 从元数据生成内容 */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content?: (meta: Meta, env: MarkdownEnv) => string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 渲染函数 */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: (tokens: Token[], index: number, env: MarkdownEnv) => string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createEmbedRuleBlock, resolveAttrs } from 'vitepress-plugin-toolkit'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock(md, {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    type: 'pdf',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    meta: (info, source) => ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      attrs: info,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      src: source,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    content: (meta) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"      return `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPPdf`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},'"${meta.src}"'),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}}," ${meta.attrs}"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," />`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttrs`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将属性字符串解析为对象。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttrs<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> = Record<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(info: string): T`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`resolveAttrs('width="100%" height="400" dark')`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => { width: '100%', height: '400', dark: true }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttr`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`从信息字符串中解析单个属性值。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttr(info: string, key: string): string | undefined`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### stringifyAttrs`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将属性对象序列化为 HTML 属性字符串。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function stringifyAttrs<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` object`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` = `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`object`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  attrs: T,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  withUndefinedOrNull?: boolean,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  forceStringify?: (keyof T)[],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stringifyAttrs({ width: '100%', height: 400, dark: true })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => ' width="100%" :height="400" dark'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLogger`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建日志记录器实例。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLogger(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: string,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  defaultLevel?: LogLevel,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Logger`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**LogLevel：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'silent'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const logger = createLogger('my-plugin', 'info')`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.info('插件已加载')       // [my-plugin] 插件已加载`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.warn('可能存在问题')     // [my-plugin] 可能存在问题`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.error('发生了错误')     // [my-plugin] 发生了错误`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.debug('调试信息', true)  // [my-plugin] 调试信息`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLocales`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建多语言配置，自动匹配 VitePress 的语言设置。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLocales<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`LocaleData`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` unknown`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  builtinLocales: BuiltinLocales<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`LocaleData`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales?: Record<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Record<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const locales = createLocales(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['en', 'en-US'], { chart: 'Chart', source: 'Source' }],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['zh', 'zh-CN'], { chart: '图表', source: '源码' }],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getVitepressConfig`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`获取当前的 VitePress 站点配置。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getVitepressConfig(): SiteConfig`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getLocaleWithPath`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`根据文件路径获取语言信息。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getLocaleWithPath(path: string): { lang: string, locale: string }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveRouteLink`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将相对路径转换为 VitePress 的路由链接。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveRouteLink(url: string, env: MarkdownEnv): string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### parseRect`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`解析尺寸字符串，如果传入数字则自动添加单位。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function parseRect(str: string, unit?: string): string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('400')     // => '400px'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('50%')     // => '50%'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('10', 'rem') // => '10rem'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### slugify`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将字符串转换为 URL 友好的 slug 格式。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function slugify(str: string): string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### treatAsHtml`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`判断文件名是否应作为 HTML 处理（非已知资源扩展名即为 HTML）。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function treatAsHtml(filename: string): boolean`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Client 端 API`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"从 `vitepress-plugin-toolkit/client` 导入：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPCopyButton,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPLoading,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  useSize,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPhone,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isWindows,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPad,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isIOS,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMacOS,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMobile,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isSafari,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPCopyButton`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`复制按钮组件。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPCopyButton`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` :text`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"code"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPLoading`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`加载状态组件。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPLoading`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### useSize`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`响应式尺寸计算 composable。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function useSize<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` HTMLElement`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  el: TemplateRef<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: ToRefs<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`SizeOptions`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extraHeight?: MaybeRef<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`number`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: Ref<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: Ref<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resize: () => void`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**SizeOptions：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface SizeOptions {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width?: string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height?: string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ratio?: number | string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 设备检测工具`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 函数          | 说明                     |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------- | ------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPhone()`  | 检测是否为 iPhone        |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPad()`    | 检测是否为 iPad          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIOS()`     | 检测是否为 iOS 设备      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMacOS()`   | 检测是否为 macOS         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isWindows()` | 检测是否为 Windows       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMobile()`  | 检测是否为移动设备       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isSafari()`  | 检测是否为 Safari 浏览器 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Shared 工具`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"从 `vitepress-plugin-toolkit` 或 `vitepress-plugin-toolkit/client` 均可导入：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isExternal`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`判断链接是否为外部链接。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isExternal(path: string): boolean`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isLinkWithProtocol`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`判断链接是否包含协议前缀。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isLinkWithProtocol(link: string): boolean`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## CSS 过渡动画`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` 提供了预定义的 CSS 过渡动画，可在插件中导入：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-up.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-down.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-left.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-right.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-up.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-down.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-left.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-right.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-scale-up.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-width-expand.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-height-expand.css';`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[10]||=i(`div`,{"data-filepath":`guide/wrap-plugin.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/wrap-plugin.md`},`guide/wrap-plugin.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 包装现有插件`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果你的 VitePress 站点已经在使用一些插件，或者你有一个尚未封装为 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 模式的插件，你可以轻松地将其包装为兼容的插件形式。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 为什么需要包装？`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`传统的 VitePress 插件通常需要用户在配置文件中多处配置：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// 传统的接入方式 —— 配置散落在多处`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`通过包装为 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 插件，用户只需在 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 数组中添加，所有配置由插件内部处理。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 包装方法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 使用 definePlugin 包装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`对于任何已有的插件逻辑，使用 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 进行包装：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someVitePlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin/vite'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`options`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`?:`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-some-plugin'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin, options)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 包装仅有 markdown 配置的插件`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果插件只涉及 markdown-it 扩展，包装非常简单：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownItPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 包装仅有 vite 配置的插件`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果插件只需要 Vite 配置：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myVitePlugin `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vite-plugin-my'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`options`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`?:`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myVitePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 包装需要客户端注入的插件`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果插件需要在客户端注入组件或样式，需要配置 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 选项：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 注入样式`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      'import "my-plugin/style.css"'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'enhanceAppWithMyPlugin'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 确保服务端渲染时能正确打包`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'my-plugin'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`并在客户端入口文件中导出 enhance 函数：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// client/index.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { EnhanceAppContext } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` MyComponent `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './components/MyComponent.vue'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` function`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` enhanceAppWithMyPlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ `),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`app`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` }`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`:`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` EnhanceAppContext`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`component`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'MyComponent'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, MyComponent)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 实际案例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`以下是将 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-group-icons`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 包装为 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 插件的示例：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { groupIconMdPlugin, groupIconVitePlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-group-icons'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-group-icons'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'import `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`virtual:group-icons.css`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(groupIconMdPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`      groupIconVitePlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`        'vitepress-plugin-group-icons'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 保持兼容性`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`包装后的插件仍然可以独立使用（不依赖 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`）。只需在插件的 README 中同时提供两种使用方式：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// 方式一：vitepress-tuck 模式（推荐）`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myPlugin `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myPlugin`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// 方式二：传统 VitePress 模式`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { myPlugin } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin/raw'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[11]||=i(`div`,{"data-filepath":`plugins/abbr.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/abbr.md`},`plugins/abbr.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 缩写词`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-abbr"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`缩写词插件，为 Markdown 中的缩写词添加可交互的提示框，鼠标悬停或聚焦时显示其完整描述。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"基于 [`markdown-it-abbr`](https://github.com/markdown-it/markdown-it-abbr) 分叉并修改。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-abbr`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import abbr from 'vitepress-plugin-abbr'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [abbr()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { abbrMarkdownPlugin } from 'vitepress-plugin-abbr' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(abbrMarkdownPlugin, {`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: 'HyperText Markup Language',`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        W3C: 'World Wide Web Consortium',`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在主题中注册组件：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithAbbr } from 'vitepress-plugin-abbr/client' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithAbbr(ctx) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `*[缩写]: 完整描述` 语法定义缩写词，定义后该缩写词在文档中出现的所有位置都会被自动识别并渲染为带有提示框的文本。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML 规范由 W3C 维护。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML 规范由 W3C 维护。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 描述支持内联 Markdown`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`缩写词的完整描述支持内联 Markdown 语法，例如加粗、斜体、链接和代码等。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**HTML** 规范由 W3C 维护。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World [Wide Web](https://www.w3.org/) Consortium`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**HTML** 规范由 W3C 维护。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World [Wide Web](https://www.w3.org/) Consortium`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 全局缩写词`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`除了在每个 Markdown 文件中内联定义缩写词外，还可以通过插件选项配置全局缩写词预设。当全局定义与内联定义存在相同的缩写词时，内联定义优先。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import abbr from 'vitepress-plugin-abbr'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    abbr({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: 'HyperText Markup Language',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      W3C: 'World Wide Web Consortium',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"配置后，所有页面中出现的 `HTML` 和 `W3C` 都会自动渲染为缩写词，无需在每个文件中重复定义。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`鼠标移动或聚焦到下方缩写词上，查看完整描述：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[API]: Application Programming Interface`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[CSS]: Cascading Style Sheets`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[API]: Application Programming Interface`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[CSS]: Cascading Style Sheets`)])])])])],-1),f[12]||=i(`div`,{"data-filepath":`plugins/annotation.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/annotation.md`},`plugins/annotation.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 注释`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-annotation"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释插件，为 Markdown 中的内容添加可交互的注释标记，点击标记后弹出浮层显示注释内容。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释内容支持完整的块级 Markdown 语法，同一标签可多次定义，所有定义会作为独立条目展示在浮层中。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-annotation`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import annotation from 'vitepress-plugin-annotation'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [annotation()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { annotationMarkdownPlugin } from 'vitepress-plugin-annotation' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(annotationMarkdownPlugin, {`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: 'HyperText Markup Language',`)]),n(`
`),i(`span`,{class:`line diff add`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在主题中注册组件：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithAnnotation } from 'vitepress-plugin-annotation/client' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithAnnotation(ctx) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `[+标签]: 注释内容` 语法定义注释，然后在文档中使用 `[+标签]` 引用。引用会渲染为一个小的可交互标记，点击后弹出浮层显示注释内容。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著] 家喻户晓。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]: **《三国演义》** — 以三国时期为背景的历史小说。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著1] 家喻户晓。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著1]: **《三国演义》** — 以三国时期为背景的历史小说。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 注释内容支持块级 Markdown`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释内容支持完整的块级 Markdown 语法，包括标题、段落、列表、代码块等。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`该框架基于 [+vue] 构建。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+vue]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ## Vue`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  渐进式 JavaScript 框架，用于构建用户界面。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - 响应式数据绑定`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - 组件化架构`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - [了解更多](https://vuejs.org/)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多行定义`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释定义可以跨多行。续行必须至少缩进两个空格。缩进块内的空行会作为注释内容的一部分被保留。非缩进的内容行（如下一个定义或新段落）会终止多行定义。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这个概念在 [+detail] 中有详细说明。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+detail]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  这是注释的第一段。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  这是第二段，中间隔了一个空行，`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  但仍然是同一个注释的一部分。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这一行没有缩进，注释定义到此结束。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多次定义同一标签`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`同一标签可以多次定义。所有定义会被收集并作为独立条目展示在浮层中，适合为同一引用提供多条相关信息。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript 有多个版本 [+js]。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2015 (ES6)** — 引入了类、模块、箭头函数等。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2020** — 新增了可选链、空值合并运算符、BigInt 等。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript 有多个版本 [+js]。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2015 (ES6)** — 引入了类、模块、箭头函数等。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2020** — 新增了可选链、空值合并运算符、BigInt 等。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 全局注释`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`除了在每个 Markdown 文件中内联定义注释外，还可以通过插件选项配置全局注释预设。这对于需要在所有页面中一致注释的术语很有用。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import annotation from 'vitepress-plugin-annotation'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    annotation({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: 'HyperText Markup Language',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      CSS: ['Cascading Style Sheets', '一种用于描述文档表现的样式表语言。'],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`每个全局注释值可以是字符串或字符串数组。当提供数组时，每个元素成为浮层中的一个独立条目，就像同一标签的多个内联定义一样。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`点击下方注释标记，查看完整内容：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著] 家喻户晓。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《三国演义》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《西游记》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  讲述了唐僧师徒四人西天取经的故事，充满了神话色彩和奇幻冒险。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《红楼梦》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉等人的爱情悲剧。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《水浒传》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  描写了北宋末年以宋江为首的 108 位好汉在梁山泊聚义的故事。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著] 家喻户晓。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《三国演义》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《西游记》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  讲述了唐僧师徒四人西天取经的故事，充满了神话色彩和奇幻冒险。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《红楼梦》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉等人的爱情悲剧。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《水浒传》：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  描写了北宋末年以宋江为首的 108 位好汉在梁山泊聚义的故事。`)])])])])],-1),f[13]||=i(`div`,{"data-filepath":`plugins/caniuse.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/caniuse.md`},`plugins/caniuse.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Can I Use`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-caniuse"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 [caniuse.com](https://caniuse.com/) 的浏览器兼容性数据，在页面中展示 CSS/JS 特性的浏览器支持情况。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-caniuse`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import caniuse from 'vitepress-plugin-caniuse'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [caniuse()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { caniuseMarkdownPlugin } from 'vitepress-plugin-caniuse' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(caniuseMarkdownPlugin) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCaniuse } from 'vitepress-plugin-caniuse/client' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCaniuse(ctx) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[caniuse]()` 嵌入浏览器兼容性数据：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](feature_name)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Baseline 模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`使用 baseline 模式显示特性支持概览：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](feature_name)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 自定义版本范围`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `{}` 指定版本范围：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse{-2,4}](feature_name)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline{-3,2}](feature_name)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `{past, future}`: past 表示回溯的版本数，future 表示前瞻的版本数")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 默认值为 `{5, 2}`，即回溯 5 个版本，前瞻 3 个版本")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 获取 特性名称`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 [caniuse.com](https://caniuse.com/) 中搜索需要展示的特性，点击卡片左侧的 `#` ，即可在浏览器地址栏中获得特性名称。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: details 不知道哪个部分为特性名称？`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"**以 css `grid` 为例**")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 caniuse.com 中搜索 `grid`，然后点击第一个卡片的 `#` ，浏览器地址栏地址变更为 `https://caniuse.com/css-grid`。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"则特性名称为 `css-grid`。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在此处进行验证： <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`https://caniuse.com/?search=grid`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### 显示 `fetch` 特性的浏览器支持情况")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](fetch)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](fetch)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### 显示 `fetch` 特性的 baseline")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](fetch)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](fetch)`)])])])])],-1),f[14]||=i(`div`,{"data-filepath":`plugins/code-collapse.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-collapse.md`},`plugins/code-collapse.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Collapse`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-code-collapse"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`代码块折叠插件，当代码块超过指定行数时自动折叠，提升页面阅读体验。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-code-collapse`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import collapsedLines from 'vitepress-plugin-code-collapse'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    collapsedLines(),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { collapsedLinesMarkdownPlugin } from 'vitepress-plugin-code-collapse'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(collapsedLinesMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCollapsedLines } from 'vitepress-plugin-code-collapse/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCollapsedLines(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 全局折叠`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"当在配置中设置 `options` 为数字时，或者为 `true`（默认为 15 行）时，所有超过该行数的代码块都会自动折叠。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 单个代码块折叠`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"可以在代码块的 info 字符串中使用 `:collapsed-lines={N}` 语法单独控制：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// 使用默认值折叠（15行）`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// 从第10行开始折叠`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 折叠行数配置`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `true`: 超过 15 行时折叠")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `number`: 超过指定行数时折叠")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `false`: 不全局启用，允许单代码块控制 （默认值）")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `'disable'`: 完全禁用插")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'false'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type options = boolean | number | 'disable'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a1 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a2 = 2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a3 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a4 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a5 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a6 = 2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a7 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a8 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a9 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a10 = 2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a11 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a12 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :line-numbers=1 :collapsed-lines=10")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a1 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a2 = 2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a3 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a4 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a5 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a6 = 2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a7 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a8 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a9 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a10 = 2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a11 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a12 = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[15]||=i(`div`,{"data-filepath":`plugins/code-tree.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-tree.md`},`plugins/code-tree.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Tree`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-code-tree"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`代码树插件，用于在 Markdown 中渲染带文件树侧边栏的代码结构，支持文件切换查看。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`该插件依赖于 [文件树](./file-tree.md) 插件提供的文件树侧边栏组件。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-code-tree`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codeTree from 'vitepress-plugin-code-tree'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [codeTree()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { codeTreeMarkdownPlugin } from 'vitepress-plugin-code-tree'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(codeTreeMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCodeTree } from 'vitepress-plugin-code-tree/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCodeTree(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件提供两种语法来渲染代码树：用于内联文件内容的容器语法，以及用于从目录加载文件的嵌入语法。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: code-tree` 容器，内部包含围栏代码块。每个围栏代码块必须通过信息字符串中的 `[文件名]` 语法声明文件名。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree title="项目结构"`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 容器属性`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性           | 说明               | 默认值  |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | ------------------ | ------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`        | 代码树标题         | -       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`       | 代码树容器高度     | `420px` |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `entry`        | 入口文件，默认打开 | -       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `show-sidebar` | 是否默认显示侧边栏 | `false` |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 默认激活文件`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在围栏代码块的信息字符串中添加 `:active` 标记，可以将该文件设为默认激活的文件：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts] :active")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [utils.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export const noop = () => {}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[code-tree](dir)` 嵌入一个目录作为代码树。目录中的文件会被自动加载并渲染。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree](./src)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`dir` 支持以下路径前缀：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 前缀 | 说明                             |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | -------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@`  | 相对于 VitePress `srcDir`        |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `/`  | 相对于 VitePress 项目根目录      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -    | 相对于当前 markdown 文件所在目录 |`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 嵌入属性`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="源码" height="500px" entry="index.ts" show-sidebar=true](./src)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### CodeTreePluginOptions`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface CodeTreePluginOptions {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 代码树容器默认高度`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default '420px'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height?: string | number`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 忽略文件的 glob 路径模式`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 在通过嵌入语法从目录加载文件时生效`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * node_modules 和 .DS_Store 始终会被忽略`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default []`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ignores?: string[]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 资源文件加载器`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * 使用 `@[code-tree](dir)` 嵌入目录时，用于加载资源文件")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 自定义加载器会合并到内置加载器之前，因此具有更高优先级`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default []`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  loaders?: CodeTreeFileLoader[]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 文件加载器`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`加载器用于嵌入语法加载文件内容。插件内置了常见文件类型的加载器，自定义加载器会合并到内置加载器之前，因此具有更高优先级。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`内置加载器覆盖以下文件类型：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 点文件（`.git*`、`.env*`、`.*ignore`、`.npmrc`）：以纯文本渲染")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.XXXrc` 配置文件（如 `.eslintrc`）：以 JSON 格式渲染")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 图片文件：渲染为 `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`img`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` 标签，并正确解析 `src`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Shiki 支持的源文件：渲染为带语法高亮的围栏代码块`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codeTree, { loadCodeContent } from 'vitepress-plugin-code-tree'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    codeTree({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      height: '500px',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ignores: ['**/*.test.ts'],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      loaders: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          filter: ['**/*.md'],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          load: (file) => loadCodeContent(file, 'md'),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`filter` 字段接受 glob 模式字符串、glob 模式数组，或接收 `CodeTreeFile` 并返回布尔值的断言函数。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="代码树" show-sidebar`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="代码树" show-sidebar`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="代码树" show-sidebar](@/zh)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="代码树" show-sidebar](@/zh)`)])])])])],-1),f[16]||=i(`div`,{"data-filepath":`plugins/codepen.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/codepen.md`},`plugins/codepen.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# CodePen`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-codepen"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 [CodePen](https://codepen.io/) 项目嵌入到 VitePress 页面中。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-codepen`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codepen from 'vitepress-plugin-codepen'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [codepen()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { codepenPlugin } from 'vitepress-plugin-codepen'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(codepenPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCodepen } from 'vitepress-plugin-codepen/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCodepen(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基本用法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](user/slash)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 带配置的用法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen preview editable title="示例" height="400px" tab="css,result" theme="dark"](leimapapa/RwOZQOW)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性       | 类型      | 默认值     | 说明                         |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | ---------- | ---------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`    | `string`  | -          | 标题                         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `user`     | `string`  | -          | CodePen 用户名（从链接解析） |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `slash`    | `string`  | -          | Pen 标识符（从链接解析）     |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tab`      | `string`  | `'result'` | 默认显示的标签页             |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`    | `string`  | -          | 主题                         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `preview`  | `boolean` | `false`    | 预览模式                     |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `editable` | `boolean` | `false`    | 可编辑模式                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`    | `string`  | `'100%'`   | 宽度                         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`   | `string`  | -          | 高度                         |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](leimapapa/RwOZQOW)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](leimapapa/RwOZQOW)`)])])])])],-1),f[17]||=i(`div`,{"data-filepath":`plugins/collapse.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/collapse.md`},`plugins/collapse.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Collapse`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-collapse"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`折叠面板容器插件，用于在 Markdown 中创建可折叠的内容区块，支持手风琴模式、卡片样式和单项展开控制。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-collapse`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import collapse from 'vitepress-plugin-collapse'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [collapse()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { collapseMarkdownPlugin } from 'vitepress-plugin-collapse'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(collapseMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCollapse } from 'vitepress-plugin-collapse/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCollapse(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: collapse` 容器配合列表来创建可折叠区块。每个列表项为一个折叠面板：")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`第一行为标题，后续缩进内容为面板正文。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基础用法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 手风琴模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"添加 `accordion` 启用手风琴模式 —— 同时只能展开一项，展开新项会自动收起其他项。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"配合 `expand` 可在没有显式 `:+` 标记时默认展开第一项。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 卡片样式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"添加 `card` 以带边框、圆角的卡片样式渲染容器，可与 `accordion` 组合使用。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 3`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 3 的回答`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 单项展开标记`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在标题前添加 `:+` 展开该项，或 `:-` 收起该项。手风琴模式下只有第一个 `:+` 标记生效；")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"未添加标记的项将遵循容器的 `expand` 属性。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :+ 默认展开`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :- 默认收起`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 无标记，遵循容器 expand 属性`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :+ 默认展开`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :- 默认收起`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 无标记，遵循容器 expand 属性`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 容器属性`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性        | 类型      | 说明                               |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | --------- | ---------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `accordion` | `boolean` | 启用手风琴模式（同时只能展开一项） |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `card`      | `boolean` | 使用卡片样式（带边框和圆角）       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `expand`    | `boolean` | 默认展开状态                       |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 标记说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 标记 | 说明                                 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | ------------------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `:+` | 展开该项（手风琴模式下仅第一个生效） |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `:-` | 收起该项                             |")])])])])],-1),f[18]||=i(`div`,{"data-filepath":`plugins/field.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/field.md`},`plugins/field.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Field`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-field"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`字段容器插件，用于在 Markdown 中渲染结构化的 API 字段/属性文档，支持字段分组和 JSDoc 风格的标签注解。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-field`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import field from 'vitepress-plugin-field'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [field()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { fieldMarkdownPlugin } from 'vitepress-plugin-field'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(fieldMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithField } from 'vitepress-plugin-field/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithField(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: field` 容器来记录 API 字段/属性，配合 JSDoc 风格标签描述元数据。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基础字段`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户总数。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 字段标签`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持 `@name`、`@type`、`@default`、`@required`、`@deprecated`、`@optional`、`@description` 标签。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field userName`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户的唯一标识名称。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field email`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default example@mail.com`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`联系邮箱。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`此字段已弃用，请使用新字段替代。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field userName`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户的唯一标识名称。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field email`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default example@mail.com`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`联系邮箱。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`此字段已弃用，请使用新字段替代。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 标签说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 标签           | 描述                                             |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | ------------------------------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@name`        | 覆盖字段名称（默认使用 `info` 中的名称）         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@type`        | 字段类型注解                                     |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@default`     | 字段默认值                                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@required`    | 标记为必填字段                                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@optional`    | 标记为可选字段                                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@deprecated`  | 标记为已弃用字段                                 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@description` | 显式描述文本，任何非标签行也会被纳入描述         |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 字段分组`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: field-group` 容器将相关字段组合在一起。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`唯一标识符。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`显示名称。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建时间。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`唯一标识符。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`显示名称。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建时间。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 显式描述`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@description` 标签明确指定描述文本。任何非标签行也会自动作为描述内容。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@description 用户总数。此字段表示当前系统中的活跃用户数量。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[19]||=i(`div`,{"data-filepath":`plugins/file-tree.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/file-tree.md`},`plugins/file-tree.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# File Tree`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-file-tree"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`文件树展示插件，用于在 Markdown 中渲染文件目录结构。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-file-tree`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import fileTree from 'vitepress-plugin-file-tree'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [fileTree()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { fileTreeMarkdownPlugin } from 'vitepress-plugin-file-tree'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(fileTreeMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithFileTree } from 'vitepress-plugin-file-tree/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithFileTree(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: file-tree` 容器，通过缩进表示文件层级：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="项目结构"`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- src/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - components/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - Button.vue`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - Nav.vue`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- tsconfig.json`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 围栏代码语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"你也可以使用 `tree` 或 `file-tree` 作为语言标识符的围栏代码块，")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"内容采用 `tree` 命令行工具的输出格式（使用 Unicode 制表符）：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── components/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   ├── Button.vue`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   └── Nav.vue`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── index.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── package.json`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── tsconfig.json`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"当你已有 `tree` 命令的输出内容时，可以直接粘贴到 Markdown 中而无需重新格式化，非常方便。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 节点标注`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`两种语法均支持以下节点标注：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 语法            | 说明                 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------------- | -------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `**文件名**`    | 高亮聚焦该文件       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `-- 文件名`     | 标记为删除           |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `++ 文件名`     | 标记为新增           |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `文件名 # 注释` | 添加注释             |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `folder/`       | 标记为文件夹, 并折叠 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `…`             | 省略标记             |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`容器语法示例（含标注）：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="变更的文件"`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- src/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- old-file.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - ++ new-file.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - **main.ts** # 核心入口`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - …`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`围栏代码语法示例（含标注）：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── -- old-file.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── ++ new-file.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── **main.ts** # 核心入口`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── …`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- docs`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - .vitepress`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - ++ config.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- page1.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- theme  # 一个 **主题** 目录`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - client`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - components`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - **Navbar.vue**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - composables`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - useNavbar.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - styles`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - navbar.css`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - config.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - node/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- pnpm-lock.yaml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- .gitignore`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- README.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- …`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- docs`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - .vitepress`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - ++ config.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- page1.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- theme  # 一个 **主题** 目录`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - client`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - components`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - **Navbar.vue**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - composables`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - useNavbar.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - styles`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - navbar.css`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - config.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - node/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- pnpm-lock.yaml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- .gitignore`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- README.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- …`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[20]||=i(`div`,{"data-filepath":`plugins/icons.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/icons.md`},`plugins/icons.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 图标`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-icons"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标插件，使用简洁的 `::name::` 语法，在 Markdown 中内联使用来自 [Iconify](https://iconify.design/)、")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[iconfont](https://www.iconfont.cn/) 或 [FontAwesome](https://fontawesome.com/) 的图标。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-icons`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 Iconify 时，还需安装 [`@iconify/json`](https://www.npmjs.com/package/@iconify/json) 或按需安装对应的图标集。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import icons from 'vitepress-plugin-icons'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [icons()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!WARNING]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 由于插件配置复杂度较高，仅推荐在 `vitepress-tuck` 模式下使用。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::` 分隔符内联插入图标，完整语法如下：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::name =size /color::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `name` — 图标名称，格式因提供商而异（见下方说明）。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `=size` — 可选，图标大小。支持 `=宽x高`（如 `=1.2emx1.5em`）或单个 `=宽`（如 `=1.2em`，同时作用于宽高）。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `/color` — 可选，图标颜色，如 `/red` 或 `/#ff0000`。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"也可以在内容前添加提供商名称（`iconify`/`iconfont`/`fontawesome`）来为单个图标覆盖默认提供商，并为 FontAwesome 追加额外样式属性。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Iconify`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标名称使用 `图标集:图标` 格式，如 `tdesign:logo-github-filled`。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled /#f00::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px /#f00::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::skill-icons:vscode-dark =36px::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled /#f00::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px /#f00::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::skill-icons:vscode-dark =36px::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### iconfont`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标名称使用纯名称（不带 `icon-` 前缀），如 `hot` 会解析为 `icon-hot`。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot =24px::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot =24px /#f00::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### FontAwesome`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标名称使用纯名称，如 `circle-user`。`border`、`beat`、`rotate-90`、`2xl` 等额外属性追加在名称之后，并转换为 `fa-*` 类名。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::circle-user::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::circle-user =1.2em /#fff::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user border::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user rotate-90::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user beat::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl beat::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user rotate-90::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user beat::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user border::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl beat::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"插件接受单个提供商配置、配置数组，或不传参数（默认使用 Iconify）。配置多个提供商时，通过 `default: true` 标记 `::name::` 语法使用的默认提供商。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 通用选项`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 选项       | 类型                                       | 默认值      | 说明               |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | ------------------------------------------ | ----------- | ------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `provider` | `'iconify' \\| 'iconfont' \\| 'fontawesome'` | `'iconify'` | 图标提供商         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `default`  | `boolean`                                  | `false`     | 是否作为默认提供商 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `color`    | `string`                                   | `''`        | 默认图标颜色       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `size`     | `string \\| number`                         | `'1.2em'`   | 默认图标大小       |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Iconify`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"继承 [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) 与 [`unplugin-icons/resolver`](https://github.com/unplugin/unplugin-icons#resolver) 的配置项。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'iconify',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  size: '1.2em',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // unplugin-icons 选项`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  scale: 1,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  customCollections: { /* ... */ },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### iconfont`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 选项     | 类型                               | 默认值    | 说明              |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ---------------------------------- | --------- | ----------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `prefix` | `string`                           | `'icon-'` | 图标类名前缀      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `assets` | `IconAssetLink \\| IconAssetLink[]` | -         | iconfont 资源链接 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'iconfont',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: 'icon-',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  assets: '//at.alicdn.com/w/font_xxx.css',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### FontAwesome`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 选项     | 类型                                                  | 默认值          | 说明                       |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ----------------------------------------------------- | --------------- | -------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `prefix` | `LiteralUnion<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`FontAwesomePrefix`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                     | `'fas'`         | 默认图标前缀               |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `assets` | `Arrayable<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`FontAwesomeAssetBuiltIn`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` \\|`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` IconAssetLink`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` | `'fontawesome'` | 内置资源名或自定义资源链接 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`assets` 选项接受：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `'fontawesome'` — 从 jsDelivr CDN 注入 solid、regular 和 base 套件。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `'fontawesome-with-brands'` — 仅从 jsDelivr CDN 注入 brands 套件。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 自定义的 `.css` 或 `.js` 资源链接。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'fontawesome',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: 'fas',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  assets: 'fontawesome',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`prefix` 支持以下别名：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 前缀    | 别名  | 对应类名                            |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------- | ----- | ----------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fas`   | `s`   | `fa-solid fa-name`                  |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `far`   | `r`   | `fa-regular fa-name`                |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fal`   | `l`   | `fa-light fa-name`                  |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fat`   | `t`   | `fa-thin fa-name`                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fads`  | `ds`  | `fa-duotone fa-solid fa-name`       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fass`  | `ss`  | `fa-sharp fa-solid fa-name`         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasr`  | `sr`  | `fa-sharp fa-regular fa-name`       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasl`  | `sl`  | `fa-sharp fa-light fa-name`         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fast`  | `st`  | `fa-sharp fa-thin fa-name`          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasds` | `sds` | `fa-sharp-duotone fa-solid fa-name` |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fab`   | `b`   | `fa-brands fa-name`                 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"也可以在图标名称中使用 `prefix:name` 格式为单个图标指定前缀，如 `fab:github`。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多提供商组合`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons([`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'iconify' },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font_xxx.css' },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'fontawesome', assets: 'fontawesome' },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`])`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"上述配置中，`::name::` 默认使用 iconfont，`::iconify name::` 和 `::fontawesome name::` 则显式选择其他提供商。")])])])])],-1),f[21]||=i(`div`,{"data-filepath":`plugins/intro.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/intro.md`},`plugins/intro.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 插件总览`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 生态提供了丰富的插件，涵盖 Markdown 语法扩展、内容嵌入、代码增强等场景。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`所有插件均支持两种使用方式：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`1.`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **vitepress-tuck 模式（推荐）**`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：通过 `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 配置一键接入`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`2.`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **传统模式**`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：手动在 VitePress 配置中接入`)])])])])],-1),f[22]||=i(`div`,{"data-filepath":`plugins/jsfiddle.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/jsfiddle.md`},`plugins/jsfiddle.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# JSFiddle`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-jsfiddle"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 [JSFiddle](https://jsfiddle.net/) 项目嵌入到 VitePress 页面中。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-jsfiddle`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import jsfiddle from 'vitepress-plugin-jsfiddle'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [jsfiddle()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { jsfiddleMarkdownPlugin } from 'vitepress-plugin-jsfiddle'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(jsfiddleMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithJsFiddle } from 'vitepress-plugin-jsfiddle/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithJsFiddle(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基本用法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](user/id)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 带配置的用法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle title="JS Fiddle" theme="dark" tab="js,css,html,result" height="400px"](pengzhanbo/1xbwz2p9)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性     | 类型               | 默认值                 | 说明                                   |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ------------------ | ---------------------- | -------------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`  | `string`           | `'JS Fiddle'`          | 标题                                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`  | `string`           | -                      | 主题（如 `dark`）                      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tab`    | `string`           | `'js,css,html,result'` | 显示的标签页（用逗号分隔，会去除空格） |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`  | `string`           | `'100%'`               | 宽度                                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height` | `string`           | -                      | 高度                                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `ratio`  | `number \\| string` | -                      | 宽高比                                 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](pengzhanbo/1xbwz2p9)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](pengzhanbo/1xbwz2p9)`)])])])])],-1),f[23]||=i(`div`,{"data-filepath":`plugins/mark.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/mark.md`},`plugins/mark.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 马克笔`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-mark"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"马克笔插件，为 Markdown 添加 `==高亮==` 语法支持，渲染为带滚动触发动画的高亮文本，支持多种颜色变体。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-mark`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import mark from 'vitepress-plugin-mark'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [mark()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { markdownPlugin } from 'vitepress-plugin-mark' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(markdownPlugin) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在主题中注册组件并引入样式：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithMark } from 'vitepress-plugin-mark/client' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithMark(ctx) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `==` 包裹内联内容，将其渲染为高亮的 `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`mark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` 元素。当元素滚动进入视口时，")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`会播放一次从左向右填充的高亮动画，使马克笔文本具有生动的强调效果。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==马克笔== 文本`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==马克笔== 文本`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`标记内部支持完整的内联 Markdown 语法（加粗、斜体、链接、代码等）：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"==**加粗**==、==*斜体*==、==[链接](https://example.com)==、==`代码`==")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"==**加粗**==、==*斜体*==、==[链接](https://example.com)==、==`代码`==")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 颜色变体`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`通过在标记后追加 [attrs 属性语法](https://vitepress.dev/guide/markdown#attribute) 指定不同的高亮颜色。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`变体名与 VitePress 容器类型对应，并自动适配暗色模式。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==默认==`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==note=={.note}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==info=={.info}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==tip=={.tip}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==warning=={.warning}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==caution=={.caution}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==important=={.important}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==默认==`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==note=={.note}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==info=={.info}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==tip=={.tip}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==warning=={.warning}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==caution=={.caution}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==important=={.important}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 变体说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 变体         | 说明                       |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------ | -------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| _(默认)_     | 黄色高亮                   |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.note`      | 青色高亮                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.info`      | 中性灰色高亮               |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.tip`       | 绿色高亮                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.warning`   | 金色/琥珀色高亮            |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.caution`   | 粉色高亮（别名 `.danger`） |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.important` | 淡紫色高亮                 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 自定义`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`通过覆盖以下 CSS 变量自定义高亮外观，在你的主题样式中覆盖：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:root {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  --vp-mark-linear-color: #f0a;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 变量                     | 说明                       | 默认值                               |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------------ | -------------------------- | ------------------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-text`         | 文本颜色                   | `currentcolor`                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg`           | 背景颜色                   | `transparent`                        |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-linear-color` | 高亮填充颜色               | `#ff0`                               |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg-image`     | 用于填充的背景图像（渐变） | `linear-gradient(to right, ...)`     |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg-shift`     | 背景的垂直位置偏移         | `0.55lh`                             |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-animation`    | 动画简写                   | `mark-highlight 1.25s 0.5s forwards` |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`还可以通过自定义 css 类名，扩展高亮颜色变体：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`mark.custom {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  --vp-mark-linear-color: #f0a;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==自定义变体=={.custom}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==自定义变体=={.custom}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`style`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`mark`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`.custom`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`  --vp-mark-linear-color`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`#f0a`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`style`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)])])])])],-1),f[24]||=i(`div`,{"data-filepath":`plugins/mermaid.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/mermaid.md`},`plugins/mermaid.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Mermaid`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-mermaid-tuck"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Mermaid 图表插件，支持在 Markdown 中渲染 Mermaid 图表。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-mermaid-tuck`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import mermaid from 'vitepress-plugin-mermaid-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    mermaid(),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { mermaidMarkdownPlugin, mermaidVitePlugin } from 'vitepress-plugin-mermaid-tuck'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [mermaidVitePlugin({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      options: { theme: 'default' },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    })],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(mermaidMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithMermaid } from 'vitepress-plugin-mermaid-tuck/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithMermaid(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `mermaid` 语言标记的代码块：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart LR`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Start --> Stop`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: Hello John, how are you?`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  John-->>Alice: Great!`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: See you later!`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidPluginOptions`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface MermaidPluginOptions {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Mermaid 配置项（排除 startOnLoad 和 themeVariables）`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options?: Omit<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`MermaidConfig,`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` 'startOnLoad'`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` |`),i(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` 'themeVariables'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> & {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    themeVariables?: MermaidThemeVariables`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 多语言配置`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  locales?: Record<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MermaidLocaleData`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidThemeVariables`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`支持对 Mermaid 各类图表的主题变量进行自定义，涵盖：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 基础变量（背景色、文字颜色、线条颜色等）`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- C4、Class、ER 图变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Flowchart 变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Gantt 图变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Git 图变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Journey 图变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Pie 图变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Requirement 图变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- State 图变量`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Sequence 图变量`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidLocaleData`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface MermaidLocaleData {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  chart?: string       // 默认 'Chart'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  source?: string      // 默认 'Source'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fullscreen?: string  // 默认 'Fullscreen'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  download?: string    // 默认 'Download'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 内置语言`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件内置了以下语言的支持：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- English (en, en-US)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 简体中文 (zh, zh-CN)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 日本語 (ja)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 한국어 (ko)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Español (es)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Français (fr)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Русский (ru)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Deutsch (de)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Português (pt)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Flowchart`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart TB`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->a2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph one`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    a1-->a2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph two`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    b1-->b2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph three`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->c2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    one --> two`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    three --> two`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    two --> c2`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Sequence Diagram`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice ->> Bob: Hello Bob, how are you?`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->>John: How about you John?`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob--x Alice: I am good thanks!`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-x John: I am good thanks!`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Note right of John: Bob thinks a long<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>long time, so long<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>that the text does<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>not fit on a row.`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->Alice: Checking with John...`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->John: Yes... John, how are you?`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Animal Example`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`classDiagram`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note "From Duck till Zebra"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Duck`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note for Duck "can fly<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can swim<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can dive<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can help in debugging"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Fish`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Zebra`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +int age`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +String gender`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +isMammal()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +mate()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Duck{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +String beakColor`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +swim()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +quack()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Fish{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -int sizeInFeet`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -canEat()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Zebra{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +bool is_wild`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +run()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`gantt`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  dateFormat  YYYY-MM-DD`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  title       Adding GANTT diagram functionality to mermaid`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  excludes    weekends`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'  %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)')]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section A section`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task            :done,    des1, 2014-01-06,2014-01-08`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Active task               :active,  des2, 2014-01-09, 3d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task               :         des3, after des2, 5d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task2              :         des4, after des3, 5d`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Critical tasks`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task in the critical line :crit, done, 2014-01-06,24h`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Implement parser                    :crit, done, after des1, 2d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for parser             :crit, active, 3d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task in critical line        :crit, 5d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for renderer           :2d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add to mermaid                      :1d`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Documentation`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :active, a1, after des1, 3d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :after a1  , 20h`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :doc1, after a1  , 48h`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Last section`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :after doc1, 3d`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :20h`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :48h`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[25]||=i(`div`,{"data-filepath":`plugins/npm-to.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/npm-to.md`},`plugins/npm-to.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Npm To`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-npm-to"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 npm 命令自动转换为其他包管理器（pnpm、yarn、bun、deno）的对应命令。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-npm-to`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import npmTo from 'vitepress-plugin-npm-to'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    npmTo(['npm', 'pnpm', 'yarn']),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { npmToPlugin } from 'vitepress-plugin-npm-to'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(npmToPlugin, ['npm', 'pnpm', 'yarn'])`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: npm-to` 容器包裹 npm 命令，插件会自动转换为多标签代码组：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`渲染后会显示为多个标签页，每个标签页展示对应包管理器的安装命令：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **npm**: `npm install vitepress-plugin-steps`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **pnpm**: `pnpm add vitepress-plugin-steps`")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **yarn**: `yarn add vitepress-plugin-steps`")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 支持的命令类型`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件支持以下 npm 命令的自动转换：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 命令                    | 示例                  | 支持                           |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------------------- | --------------------- | ------------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm install` / `npm i` | `npm install react`   | 转换为各包管理器的 add 命令    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm install` (无参数)  | `npm install`         | 转换为纯安装命令               |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm uninstall`         | `npm uninstall react` | 转换为各包管理器的 remove 命令 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm run`               | `npm run build`       | 转换为各包管理器的 run 命令    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm create`            | `npm create vite`     | 转换为各包管理器的 create 命令 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm init`              | `npm init -y`         | 转换为各包管理器的 init 命令   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npx`                   | `npx eslint .`        | 转换为各包管理器的等效命令     |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm ci`                | `npm ci`              | 转换为各包管理器的 ci 命令     |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 自定义标签`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"可以通过 `tabs` 属性指定要显示的标签：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to tabs="npm,pnpm"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type NpmToPluginOptions =`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | NpmToPackageManager[]   // 如 ['npm', 'pnpm', 'yarn']`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      tabs?: NpmToPackageManager[]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type NpmToPackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun' | 'deno'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 默认显示 `npm`、`pnpm`、`yarn` 三个标签")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 支持 `bun` 和 `deno` 的转换")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[26]||=i(`div`,{"data-filepath":`plugins/obsidian.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/obsidian.md`},`plugins/obsidian.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Obsidian`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-obsidian"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`提供 Obsidian 风格 Markdown 语法支持，包括 Wiki 链接、Callout 标注、嵌入文件和注释语法。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-obsidian`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import obsidian from 'vitepress-plugin-obsidian'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    obsidian({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 可选项，全部默认为 true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      callout: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      comment: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      embedLink: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      wikiLink: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { obsidianMarkdownPlugin } from 'vitepress-plugin-obsidian'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(obsidianMarkdownPlugin, {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        callout: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        comment: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        embedLink: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        wikiLink: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Wiki 链接`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Wiki 链接是 Obsidian 中用于链接到其他笔记的语法。使用双括号 `[[]]` 包裹内容来创建内部链接。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名#标题]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名#标题#子标题]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名|别名]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名#标题|别名]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|外部链接]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 文件名搜索规则`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`当使用 Wiki 链接时，文件名会按照以下规则进行搜索匹配：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**匹配优先级：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`1. **完整路径** - 精确匹配文件路径`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`2. **模糊匹配** - 匹配路径结尾的文件名，优先匹配最短路径`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**路径解析规则：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **相对路径**（以 `.` 开头）：相对于当前文件所在目录解析")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **绝对路径**（不以 `.` 开头）：在整个文档树中搜索，优先匹配最短路径")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **目录形式**（以 `/` 结尾）：匹配该目录下的 `index.md`")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`假设文档结构如下：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```txt")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`docs/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── index.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── guide/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── index.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── markdown/`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│       └── obsidian.md`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 `docs/guide/markdown/obsidian.md` 中：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 语法           | 匹配结果                                                 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | -------------------------------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[obsidian]]` | 匹配 `docs/guide/markdown/obsidian.md`（通过文件名检索） |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[./]]`       | 匹配 `docs/guide/markdown/index.md`（相对路径）          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[../]]`      | 匹配 `docs/guide/README.md`（上级目录）                  |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[guide/]]`   | 匹配 `docs/guide/README.md`（目录形式）                  |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**外部链接：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|外部链接]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|外部链接]]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**内部锚点链接：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[npm-to]]  `),i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 通过文件名检索 -->`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki 链接]]  `),i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 当前页面使用 heading -->`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[file-tree#配置]]  `),i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 通过文件名检索，并链接到 heading -->`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[npm-to]]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki 链接]]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[file-tree#配置]]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - **Wiki Links**](https://obsidian.md/zh/help/links){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 嵌入内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入语法允许你将其他文件资源插入到当前页面中。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文件名]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文件名#标题]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文件名#标题#子标题]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`文件名搜索规则与 [Wiki 链接](#文件名搜索规则) 相同。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"::: info 以 `/` 开头或 无路径前缀如 `./` 形式的，从 `public` 目录中加载资源")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 图片嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[图片]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[图片|宽度]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[图片|宽度x高度]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`jpg`、`jpeg`、`png`、`gif`、`avif`、`webp`、`svg`、`bmp`、`ico`、`tiff`、`apng`、`jfif`、`pjpeg`、`pjp`、`xbm`")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[tuck-logo.svg]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[tuck-logo.svg|125]]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### PDF 嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> PDF 嵌入需要添加 [vitepress-plugin-pdf](./pdf.md) 插件才能正常工作。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文档.pdf]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文档.pdf#page=1]]  `),i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- #page=1 表示第一页 -->`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文档.pdf#page=1#height=300]]  `),i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- #page=页码 #height=高度 -->`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`pdf`")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 音频嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[音频文件]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`mp3`、`flac`、`wav`、`ogg`、`opus`、`webm`、`acc`")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 视频嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 视频嵌入需要添加 [vitepress-plugin-video](./video.md) 插件才能正常工作。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[视频文件]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[视频文件#height=400]]  `),i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 设置视频高度 -->`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`mp4`、`webm`、`mov` 等")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 内容片段嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `#标题` 可以嵌入指定标题下的内容片段：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[我的笔记]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[我的笔记#标题一]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[我的笔记#标题一#子标题]]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - 插入文件](https://obsidian.md/zh/help/embeds){.readmore}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - 文件格式](https://obsidian.md/zh/help/file-formats){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Callout`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Callout 是一种用于突出显示重要信息的语法，类似于 Vitepress 的 `::: note` 提示框语法。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!note]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 内容`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**可选标题：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!tip] 自定义标题`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 内容`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 类型`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Callout 支持以下类型，别名会自动映射到对应的主要类型：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 类型        | 别名                                                                | 说明             |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------------------------------------------------------- | ---------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `note`      | `quote`, `cite`                                                     | 笔记、引用       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tip`       | `hint` ,`check`, `done`,`success`                                   | 技巧、提示       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `info`      | `todo`                                                              | 信息、待办       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `warning`   | `question`, `help`, `faq`                                           | 警告、问题、帮助 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `caution`   | `attention`, `failure`, `fail`, `missing`, `danger`, `error`, `bug` | 注意、失败、危险 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `important` | `example`                                                           | 重要、示例       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `details`   | `abstract`, `summary`, `tldr`                                       | 详情、摘要       |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**基础用法：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个笔记提示框。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个笔记提示框。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**带标题：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP] 实用技巧`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 `pnpm` 可以显著加快依赖安装速度。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP] 实用技巧`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 `pnpm` 可以显著加快依赖安装速度。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**多种类型：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!success]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 操作成功完成！`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!warning]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个警告信息。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!caution]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 请谨慎操作，此操作不可撤销。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!success]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 操作成功完成！`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!warning]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个警告信息。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!caution]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 请谨慎操作，此操作不可撤销。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Details 类型：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`details` 类型会渲染为 HTML `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`details`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` 元素，支持折叠展开：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!details]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 点我展开更多内容`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一段隐藏的内容。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!details]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 点我展开更多内容`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一段隐藏的内容。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - Callout](https://obsidian.md/zh/help/callouts){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 注释`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `%%` 包裹的内容会被当作注释，不会渲染到页面中。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**行内注释：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个 %%行内注释%% 示例。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**块级注释：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个块级注释。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`可以跨越多行。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**行内注释：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个 %%行内注释%% 示例。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个 %%行内注释%% 示例。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**块级注释：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释之前的内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个块级注释。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`可以跨越多行。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释之后的内容`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释之前的内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个块级注释。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`可以跨越多行。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - 注释](https://obsidian.md/zh/help/syntax#%E6%B3%A8%E9%87%8A){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 注意事项`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 这些插件提供的是 **兼容性支持**，并非完全实现 Obsidian 的全部功能`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 部分 Obsidian 特有的功能（如内部链接的图谱视图、双向链接等）不在支持范围内`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 嵌入内容时，被嵌入的页面也会参与主题的构建过程`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- PDF 嵌入需要添加 [vitepress-plugin-pdf](./pdf.md) 插件才能正常工作`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 视频嵌入需要添加 [vitepress-plugin-video](./video.md) 插件才能正常工作`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 以 `/` 开头或使用 `./` 形式的嵌入资源会从 `public` 目录加载")])])])])],-1),f[27]||=i(`div`,{"data-filepath":`plugins/pdf.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/pdf.md`},`plugins/pdf.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PDF`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-pdf"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PDF 文件嵌入插件，在页面中嵌入 PDF 查看器。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-pdf`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import pdf from 'vitepress-plugin-pdf'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [pdf()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(pdfMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPDF } from 'vitepress-plugin-pdf/client' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPDF(ctx) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[pdf]()` 嵌入 PDF：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://example.com/sample.pdf)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](./sample.pdf)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 指定页码`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf page="3"](https://example.com/sample.pdf)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf p="3"](https://example.com/sample.pdf)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 配置选项`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf no-toolbar width="100%" height="600px" zoom="100"](https://example.com/sample.pdf)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性         | 类型               | 默认值   | 说明       |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------ | ------------------ | -------- | ---------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`      | `string`           | `'100%'` | 宽度       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`     | `string`           | -        | 高度       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `ratio`      | `number \\| string` | -        | 宽高比     |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `zoom`       | `number`           | `50`     | 缩放比例   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `no-toolbar` | `boolean`          | `false`  | 隐藏工具栏 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)`)])])])])],-1),f[28]||=i(`div`,{"data-filepath":`plugins/plantuml.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plantuml.md`},`plugins/plantuml.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PlantUML`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-plantuml"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PlantUML 图表插件，支持在 Markdown 中渲染 PlantUML 图表。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-plantuml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import plantuml from 'vitepress-plugin-plantuml'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plantuml(),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { plantumlMarkdownPlugin, plantumlVitePlugin } from 'vitepress-plugin-plantuml'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [plantumlVitePlugin()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(plantumlMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    languageAlias: { plantuml: 'txt' },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPlantuml } from 'vitepress-plugin-plantuml/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPlantuml(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `plantuml` 语言标记的代码块：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: 认证请求`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: 认证响应`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 输出格式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"插件支持 `svg`（默认）和 `png` 两种输出格式。可在代码块中指定：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml png")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Example {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +attribute: string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +method(): void`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`或全局配置默认格式：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`plantuml({ format: 'png' }) // 默认为 'svg'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### PlantumlPluginOptions`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface PlantumlPluginOptions {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 输出格式，可选 'svg' | 'png'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'svg'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  format?: PlantumlFormat`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * PlantUML 服务器 URL`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'https://www.plantuml.com/plantuml'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  serverURL?: string`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 功能特性`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **明暗主题适配** — 自动生成明暗两套图表，跟随 VitePress 主题切换`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **图表 / 源码切换** — 在渲染结果和 PlantUML 源码之间切换查看`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **全屏查看** — 点击全屏按钮以浮层方式查看图表`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **图片下载** — 一键下载当前图表为图片文件`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **多语言支持** — 内置中、英、日、韩、西、法、俄、德、葡九种语言`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **SVG 优化** — 输出 SVG 时自动通过 SVGO 优化，移除冗余样式和背景层`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **构建缓存** — 渲染结果缓存到磁盘，加速增量构建`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 内置语言`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件内置了以下语言的支持：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- English (en, en-US)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 简体中文 (zh, zh-CN)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 日本語 (ja)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 한국어 (ko)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Español (es)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Français (fr)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Русский (ru)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Deutsch (de)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Português (pt)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 时序图`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Authentication Request`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: Authentication Response`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Another authentication Request`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice <-- Bob: Another authentication Response`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 用例图`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`left to right direction`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "顾客" as customer`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "收银员" as cashier`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`rectangle 收银系统 {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  customer -- (结账)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (结账) -- cashier`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (结账) .> (打印小票) : include`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (结账) .> (支付) : include`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (支付) .> (现金支付)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (支付) .> (扫码支付)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 类图`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Vehicle`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Car`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Bike`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Car`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Bike`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Engine`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Wheel`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Engine`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Wheel`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 活动图`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`start`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:用户登录;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`if (验证通过？) then (是)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :进入首页;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  if (有新消息？) then (是)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :显示消息提醒;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  else (否)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :继续浏览;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  endif`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`else (否)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :显示错误提示;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :返回登录页;`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`endif`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stop`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[29]||=i(`div`,{"data-filepath":`plugins/plot.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plot.md`},`plugins/plot.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plot`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-plot"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`隐文遮罩插件，通过点击或悬停来显示隐藏的文本内容。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-plot`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import plot from 'vitepress-plugin-plot'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plot({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      trigger: 'hover',  // 'hover' | 'click'，默认 'hover'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      effect: 'mask',    // 'mask' | 'blur'，默认 'mask'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { plotMarkdownPlugin } from 'vitepress-plugin-plot'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(plotMarkdownPlugin, {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        trigger: 'hover',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        effect: 'mask',`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// .vitepress/theme/index.ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPlot } from 'vitepress-plugin-plot/client' // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPlot(ctx) // [!code ++]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `!!` 包裹隐藏文本：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`答案是 !!plot!!`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `classname` 设置交互行为：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`!!plot!!{.click .blur}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持以下 `classname`")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.click / .hover`：点击显示 / 鼠标悬停显示")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.blur / .mask`：模糊效果 / 遮罩效果")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface PlotOptions {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 触发方式`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'hover': 鼠标悬停显示`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'click': 点击显示`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'hover'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  trigger?: 'hover' | 'click'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 隐藏效果`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'mask': 遮罩效果（默认）`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'blur': 模糊效果`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'mask'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  effect?: 'mask' | 'blur'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`鲁迅说过：“!!我没说这段话!!”`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`鲁迅说过：“!!我没说这段话!!”`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`书山有路勤为径，!!学海无涯苦作舟!!{.click .blur}。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`书山有路勤为径，!!学海无涯苦作舟!!{.click .blur}。`)])])])])],-1),f[30]||=i(`div`,{"data-filepath":`plugins/qrcode.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/qrcode.md`},`plugins/qrcode.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# QRCode`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-qrcode"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`二维码生成插件，将文本或链接生成二维码。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-qrcode`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import qrcode from 'vitepress-plugin-qrcode'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [qrcode()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { qrcodeMarkdownPlugin } from 'vitepress-plugin-qrcode'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(qrcodeMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithQrcode } from 'vitepress-plugin-qrcode/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithQrcode(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入块语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](任意文本)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./caniuse.md)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 带样式的卡片模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="扫码访问"](https://www.baidu.com)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`适合使用于长文本的情况`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: qrcode title="扫码访问"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`https://www.baidu.com`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性       | 类型      | 说明                          |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | ----------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `card`     | `boolean` | 以卡片模式展示                |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`    | `string`  | 卡片标题                      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `logo`     | `string`  | 二维码 logo, link 格式, 可选  |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `logoSize` | `number`  | logo 大小占比, 可选, 默认 0.2 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`    | `number`  | 二维码宽度, 可选              |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**站内链接，自动添加 logo：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./file-tree.md)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./file-tree.md)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用卡片模式：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="扫码访问 文件树插件"](./file-tree.md)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="扫码访问 文件树插件"](./file-tree.md)`)])])])])],-1),f[31]||=i(`div`,{"data-filepath":`plugins/repo-card.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/repo-card.md`},`plugins/repo-card.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Repo Card`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-repo-card"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`仓库信息卡片插件，在你的 Markdown 中展示 GitHub/Gitee 仓库的详细信息卡片，支持 embed 内嵌语法和容器多卡片网格布局。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-repo-card`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import repoCard from 'vitepress-plugin-repo-card'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [repoCard()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { repoCardMarkdownPlugin } from 'vitepress-plugin-repo-card'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(repoCardMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithRepoCard } from 'vitepress-plugin-repo-card/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithRepoCard(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[repo]()` 语法嵌入单个仓库信息卡片。不指定 `register` 时默认使用 GitHub。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](owner/name)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](owner/name)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](owner/name)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 显示完整仓库名`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `fullname` 参数显示 `owner/name` 完整路径。对于组织仓库，会自动显示完整名称。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname github](pengzhanbo/vitepress-tuck)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: repo` 容器将多个仓库卡片以响应式网格布局展示。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/core)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 单个仓库卡片`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**GitHub 仓库：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Gitee 仓库：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**显示完整名称：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多卡片网格布局`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 卡片信息`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`每个仓库卡片会展示以下信息：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 字段     | 说明                         |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ---------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| 仓库名   | 仓库名称或 `owner/name` 全名 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 可见性   | Public / Private 标签        |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 归档状态 | 已归档时显示警告标记         |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 描述     | 仓库描述文本                 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 主要语言 | 主要编程语言及对应颜色标记   |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Star 数  | 格式化展示（如 `1.2k`）      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Fork 数  | 格式化展示（如 `1.2k`）      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 许可证   | 许可证名称（如有）           |`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 组件用法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"你也可以直接使用 `VPRepoCard` 组件：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"ts"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { VPRepoCard } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-repo-card/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vuejs/vitepress"`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"github"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"owner/name"`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"gitee"`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` fullname`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Props`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性       | 类型                  | 默认值     | 说明                        |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------------------- | ---------- | --------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `repo`     | `string`              | (必填)     | `owner/name` 格式的仓库标识 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `register` | `'github' \\| 'gitee'` | `'github'` | 仓库平台                    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fullname` | `boolean`             | -          | 显示 `owner/name` 完整名称  |")])])])])],-1),f[32]||=i(`div`,{"data-filepath":`plugins/stackblitz.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/stackblitz.md`},`plugins/stackblitz.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# StackBlitz`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-stackblitz"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 [StackBlitz](https://stackblitz.com/) 项目嵌入到 VitePress 页面中。支持通过 StackBlitz ID、GitHub 仓库或本地项目文件来嵌入在线编辑器，也可以显示为按钮在新标签页中打开。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-stackblitz`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import stackblitz from 'vitepress-plugin-stackblitz'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [stackblitz()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { stackblitzMarkdownPlugin } from 'vitepress-plugin-stackblitz'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stackblitzMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithStackBlitz } from 'vitepress-plugin-stackblitz/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithStackBlitz(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件提供两种语法来嵌入 StackBlitz 项目：用于引用外部项目的嵌入语法，以及将项目文件直接内联在 Markdown 中的容器语法。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 从 StackBlitz ID 嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 从 GitHub 仓库嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz github](user/repo)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入本地项目`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在项目目录中放置 `stackblitz.config.json`（或 `.yaml`、`.yml`）配置文件，然后使用 `local` 属性：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](path/to/your/project)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`path` 支持以下路径前缀：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 前缀 | 说明                             |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | -------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@`  | 相对于 VitePress `srcDir`        |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `/`  | 相对于 VitePress 项目根目录      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -    | 相对于当前 markdown 文件所在目录 |`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`查看 [本地项目配置](#本地项目配置) 了解更多。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 按钮模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`显示为按钮，点击后在新标签页中打开项目：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](stackblitz-id)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"也可以结合 `github` 使用：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz github button](user/repo)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将项目文件直接内联在 Markdown 中，适合简单项目的快速书写和演示：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz title="Project" description="Project description" template="javascript"`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 嵌入 / 打开选项`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`适用于嵌入语法和按钮模式：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性               | 类型                                 | 默认值      | 说明                              |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------ | ------------------------------------ | ----------- | --------------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`            | `'dark' \\| 'light' \\| 'default'`     | 自动        | 主题，自动跟随 VitePress 暗色模式 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `view`             | `'default' \\| 'preview' \\| 'editor'` | `'default'` | 初始视图模式                      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`           | `number`                             | `400`       | 嵌入高度（仅嵌入模式）            |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`            | `number`                             | -           | 嵌入宽度（仅嵌入模式）            |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `clickToLoad`      | `boolean`                            | `false`     | 显示"点击运行"提示                |')]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `openFile`         | `string \\| string[]`                 | -           | 默认打开的文件                    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `hideExplorer`     | `boolean`                            | `false`     | 隐藏文件浏览器                    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `hideDevTools`     | `boolean`                            | `false`     | 隐藏开发者工具                    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `showSidebar`      | `boolean`                            | `false`     | 显示侧边栏                        |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `terminalHeight`   | `number` (0-100)                     | -           | 终端高度百分比                    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `devToolsHeight`   | `number` (0-100)                     | -           | 开发者工具高度百分比              |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `newWindow`        | `boolean`                            | `false`     | 在新标签页中打开                  |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `forceEmbedLayout` | `boolean`                            | `false`     | 强制嵌入布局（已弃用）            |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `origin`           | `string`                             | -           | StackBlitz EE 实例地址            |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 项目选项`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`仅用于本地项目嵌入模式和容器语法：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性           | 类型                                                                                                            | 默认值 | 说明                         |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | --------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`        | `string`                                                                                                        | -      | 项目标题（必填）             |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `description`  | `string`                                                                                                        | -      | 项目描述（必填）             |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `template`     | `'angular-cli' \\| 'create-react-app' \\| 'html' \\| 'javascript' \\| 'typescript' \\| 'polymer' \\| 'vue' \\| 'node'` | -      | 项目模板（必填）             |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `dependencies` | `Record<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                                                                                        | -      | npm 依赖                     |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `files`        | `Record<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                                                                                        | -      | 项目文件（本地模式自动加载） |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 构建设置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `settings` 前缀属性设置，仅用于本地项目嵌入模式和容器语法：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性                   | 类型                              | 默认值   | 说明                 |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------------------- | --------------------------------- | -------- | -------------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsTrigger`      | `'auto' \\| 'save' \\| 'keystroke'` | `'auto'` | 编译触发时机         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsAction`       | `'hmr' \\| 'refresh'`              | `'hmr'`  | 编译更新方式         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsClearConsole` | `boolean`                         | `true`   | 编译后是否清除控制台 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local title="Demo" description="A demo" template="html" settingsTrigger="save" settingsAction="refresh"](path/to/project)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 本地项目配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[stackblitz local](path)` 嵌入本地项目时，插件会自动：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"1. 加载指定目录下的所有文件（排除 `node_modules`）")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"2. 按顺序查找 `stackblitz.config.json`、`stackblitz.config.yaml`、`stackblitz.config.yml` 配置文件")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`3. 将配置文件中的选项与加载的文件合并`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"示例 `stackblitz.config.json`：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "$schema": "https://unpkg.com/vitepress-plugin-stackblitz/schema.json",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "title": "Project",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "template": "javascript",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "dependencies": {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "lodash": "^4.17.0"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "settings": {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "trigger": "save"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 `$schema` 字段可以在编辑器中获得配置文件的智能提示和校验支持。")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> ```json")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>   "$schema": "https://unpkg.com/vitepress-plugin-stackblitz/schema.json"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> }`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> ```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### StackBlitz ID 嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 按钮模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](sdk-github-project)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](sdk-github-project)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz button`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "main": "index.js",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "keywords": ["project"],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "author": "Project Author",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "license": "MIT"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` charset`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"UTF-8"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"viewport"`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` content`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"width=device-width, initial-scale=1.0"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Project</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz button`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "main": "index.js",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "keywords": ["project"],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "author": "Project Author",`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "license": "MIT"`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` charset`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"UTF-8"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"viewport"`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` content`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"width=device-width, initial-scale=1.0"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Project</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 本地项目嵌入`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="本地项目目录" entry="stackblitz.config.json"](@/snippets/stack)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](@/snippets/stack)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](@/snippets/stack)`)])])])])],-1),f[33]||=i(`div`,{"data-filepath":`plugins/steps.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/steps.md`},`plugins/steps.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Steps`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-steps"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`步骤容器插件，用于在 Markdown 中创建步骤引导内容。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import steps from 'vitepress-plugin-steps'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [steps()],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { stepsMarkdownPlugin } from 'vitepress-plugin-steps'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stepsMarkdownPlugin)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`同时在主题中引入样式：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import 'vitepress-plugin-steps/style.css'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: steps` 容器包裹步骤内容，每个步骤以无序/有序列表项开头：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第一步`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第一步的描述内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第二步`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第二步的描述内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第三步`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第三步的描述内容，支持标题语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第一步`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第一步的描述内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第二步`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第二步的描述内容`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第三步`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第三步的描述内容，支持标题语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[34]||=i(`div`,{"data-filepath":`plugins/video.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/video.md`},`plugins/video.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Video`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-video"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`视频嵌入插件，支持 Bilibili、YouTube、AcFun 和 ArtPlayer。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-video`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import video from 'vitepress-plugin-video'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    video({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 可选项，全部默认为 true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      artplayer: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      youtube: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      bilibili: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      acfun: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { videoMarkdownPlugin } from 'vitepress-plugin-video'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(videoMarkdownPlugin, {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        artplayer: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        youtube: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        bilibili: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        acfun: true,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithVideo } from 'vitepress-plugin-video/client'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithVideo(ctx)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Bilibili`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 Bilibili 视频`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](bvid)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](aid cid)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili p2 autoplay time=30](bvid)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 配置项      | 类型               | 描述                           |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------ | ------------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `p{number}` | -                  | 视频分 P 号                    |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay`  | `boolean`          | 自动播放                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `time`      | `number \\| string` | 开始时间，秒数或 HH:MM:SS 格式 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### YouTube`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 YouTube 视频`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](video_id)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube autoplay loop start=10 end=120](video_id)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 配置项     | 类型      | 描述           |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay` | `boolean` | 自动播放       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `loop`     | `boolean` | 循环播放       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `start`    | `number`  | 开始时间，秒数 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `end`      | `number`  | 结束时间，秒数 |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### AcFun`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 AcFun 视频`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac_id)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### ArtPlayer`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`使用 ArtPlayer 播放器嵌入本地或远程视频：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](/videos/demo.mp4)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer muted autoplay poster="/cover.jpg" width="800px"](/videos/demo.mp4)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 配置项     | 类型      | 默认值   | 描述              |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------- | ----------------- |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay` | `boolean` | `false`  | 自动播放          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `muted`    | `boolean` | `false`  | 静音              |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `loop`     | `boolean` | `false`  | 循环播放          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `volume`   | `number`  | `0.75`   | 音量等级          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `poster`   | `string`  | -        | 封面图片 URL      |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoMini` | `boolean` | `false`  | 自 mini模式       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `width`    | `string`  | `"100%"` | 播放器宽度        |')]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`   | `string`  | -        | 播放器高度        |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `ratio`    | `string`  | -        | 比例，例如 "16:9" |')]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持 `mp4`, `mp3`, `webm`, `ogg`, `mkv`, `mov` 格式。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"如果您的视频格式为 `'mpd'`, `'dash'`, 还需要再手动安装 `dashjs` ：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i dashjs`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"如果您的视频格式为 `'m3u8'`, `'hls'`, 还需要再手动安装 `hls.js` ：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i hls.js`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"如果您的视频格式为 `'ts'`, `'flv'`, 还需要再手动安装 `mpegts.js` ：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i mpegts.js`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface VideoPluginOptions {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 ArtPlayer 播放器`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  artplayer?: boolean`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 YouTube 视频嵌入`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  youtube?: boolean`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 Bilibili 视频嵌入`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  bilibili?: boolean`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 AcFun 视频嵌入`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  acfun?: boolean`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Bilibili`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](BV1EZ42187Hg)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](BV1EZ42187Hg)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### YouTube`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](0JJPfz5dg20)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](0JJPfz5dg20)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### AcFun`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac47431669)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac47431669)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### ArtPlayer`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](https://artplayer.org/assets/sample/video.mp4)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](https://artplayer.org/assets/sample/video.mp4)`)])])])])],-1),f[35]||=i(`div`,{"data-filepath":`plugins/watermark.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/watermark.md`},`plugins/watermark.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`watermark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 水印`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-watermark"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`给站点添加水印的插件，纯客户端实现，无需 Node 侧配置。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-watermark`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"此插件仅提供客户端 `setupWatermark` 函数，需要在 Layout 包装组件的 `<"),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` 中调用。")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`创建一个自定义的 Layout 包装组件：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` vue [.vitepress`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`/`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`theme`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`/`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Layout.vue]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"ts"`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { setupWatermark } from 'vitepress-plugin-watermark'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import Theme from 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { h, useAttrs, useSlots } from 'vue'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const slots = useSlots()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const attrs = useAttrs()`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const Layout = () => h(Theme.Layout, attrs, slots)`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`setupWatermark()`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`Layout`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`然后在主题中注册此 Layout：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`ts [.vitepress`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`/`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`theme`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`/`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`index.ts]`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` type`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` DefaultTheme `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress/theme'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` Layout `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './Layout.vue'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Layout,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`satisfies`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Theme`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`## 配置`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`setupWatermark`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` 接受一个可选的配置对象：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`setupWatermark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enabled: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'我的水印'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontColor: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'#76747f'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  globalAlpha: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.165`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`200`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`200`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  rotate: `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`-`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`22`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontSize: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'16px'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontFamily: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'sans-serif'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`| 选项                | 类型                                           | 默认值                                     | 说明                           |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`| ------------------- | ---------------------------------------------- | ------------------------------------------ | ------------------------------ |`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`enabled`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`           | `"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`boolean \\`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`|`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ((`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`pageData`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`:`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` PageData`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` boolean)`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                     | 是否启用水印，支持函数动态判断 |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`content`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`           | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | 站点标题                                   | 水印文本内容                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontColor`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`         | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | `'#76747f'`                                | 字体颜色                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`globalAlpha`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`       | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | `"),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.165`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`（普通模式）/ `"),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.005`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`（盲水印模式） | 透明度                         |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`mode`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`              | `'default'"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` \\`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`|`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}}," 'blind'`                         | `'default'`                                | 水印模式，`'blind'` 为盲水印   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`width`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`             | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 单个水印区域宽度               |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`height`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`            | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 单个水印区域高度               |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`rotate`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`            | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 旋转角度                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontSize`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`          | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 字体大小                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontFamily`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`        | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 字体                           |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontStyle`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`         | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 字体样式                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`fontWeight`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`        | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 字体粗细                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`image`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`             | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | 图片水印 URL                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`layout`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`            | `'default'"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` \\`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`|`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}}," 'grid'`                          | —                                          | 布局模式                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`zIndex`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`            | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`number`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                       | —                                          | CSS 层级                       |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`mutationObserve`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`   | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`boolean`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                      | —                                          | 启用 DOM 变化监听保护          |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`monitorProtection`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`boolean`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                      | —                                          | 启用监控保护                   |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`movable`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`           | `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`boolean`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                                      | —                                          | 允许拖拽移动水印               |")]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"| `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`parent`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`            | `"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Element \\`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`|`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`                            | —                                          | 挂载的父元素                   |")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`更多配置项请参阅 [watermark-js-plus](https://github.com/zhensherlock/watermark-js-plus) 文档。`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`## 单页水印`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`通过页面的 frontmatter 控制单个页面的水印行为：`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### 启用水印`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### 自定义文本`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: 机密文件`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### 完全自定义`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  content`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: 草稿`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  fontColor`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'#ff0000'`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  globalAlpha`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`0.3`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  rotate`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`30`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### 禁用特定页面`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`yaml`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`watermark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`### 动态启用水印`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"通过 `"),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`enabled`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"` 函数基于页面路径动态控制：")]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`ts`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`setupWatermark`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`  enabled`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),i(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`pageData`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    // 仅在 guide/ 目录下的页面启用水印`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`    return`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` pageData.relativePath.`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`startsWith`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'guide/'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"```")])])])])],-1),f[36]||=i(`div`,{"data-filepath":`config.ts`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`config.ts`},`config.ts`)]),i(`div`,{class:`language-ts`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`ts`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineAdditionalConfig } `),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineAdditionalConfig`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  lang: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'zh-CN'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  themeConfig: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    nav: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'指南'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/guide/quick-start'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, activeMatch: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/guide/'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'插件'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/plugins/intro'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, activeMatch: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/plugins/'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    sidebar: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      '/zh/guide/'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: { base: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/guide/'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'快速开始'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'quick-start'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'插件开发'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'plugin-dev'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'包装现有插件'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'wrap-plugin'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Core API'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'api'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Toolkit API'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'toolkit'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      '/zh/plugins/'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: { base: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/plugins/'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'概述'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'intro'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'语法扩展'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'缩写词'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'abbr'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'内容注释'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'annotation'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Mark'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'mark'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'隐秘文本'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'plot'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'图标'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'icons'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Obsidian 兼容'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'obsidian'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'内容容器'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'步骤'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'steps'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'字段'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'field'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'折叠内容'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'collapse'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'图表'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Mermaid'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'mermaid'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'PlantUML'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'plantuml'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'代码增强'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'代码块折叠'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'code-collapse'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'文件树'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'file-tree'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'代码树'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'code-tree'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Npm To'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'npm-to'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Can I Use'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'caniuse'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Repo Card'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'repo-card'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'CodePen'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'codepen'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'JSFiddle'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'jsfiddle'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Stackblitz'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'stackblitz'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'资源嵌入'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'视频'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'video'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'PDF'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'pdf'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'QRCode'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'qrcode'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'工具'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'水印'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'watermark'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ] },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    search: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      options: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        translations: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          button: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            buttonText: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'搜索'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            buttonAriaLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'搜索'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          modal: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            displayDetails: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'显示详细列表'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            resetButtonTitle: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'清除查询条件'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            backButtonTitle: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'返回'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            noResultsText: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'没有找到相关结果'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            footer: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              selectText: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'选择'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              selectKeyAriaLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'键入'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              navigateText: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'导航'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              navigateUpKeyAriaLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'向上'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              navigateDownKeyAriaLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'向下'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              closeText: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'关闭'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              closeKeyAriaLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'退出'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    editLink: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      pattern: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'https://github.com/pengzhanbo/vitepress-tuck/edit/main/docs/:path'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'在 Github 编辑此页'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    footer: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      message: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'基于 MIT 许可发布'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      copyright: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`版权所有 © 2022-${"),i(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`new`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Date`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`().`),i(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`getFullYear`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`()`),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"} pengzhanbo`"),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    docFooter: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      prev: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'上一页'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      next: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'下一页'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    outline: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      label: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'页面导航'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      level: [`),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`2`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),i(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`3`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    lastUpdated: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      text: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'最后更新于'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    notFound: {`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      title: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'页面未找到'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      quote:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      linkLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'前往首页'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      linkText: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'带我回首页'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),n(`
`),i(`span`,{class:`line`}),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    langMenuLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'多语言'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    returnToTopLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'回到顶部'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    sidebarMenuLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'菜单'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    darkModeSwitchLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'主题'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    lightModeSwitchTitle: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'切换到浅色模式'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    darkModeSwitchTitle: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'切换到深色模式'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    skipToContentLabel: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'跳转到内容'`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)])])])])],-1),f[37]||=i(`div`,{"data-filepath":`index.md`,class:`vp-code-block-title`},[i(`div`,{class:`vp-code-block-title-bar`},[i(`span`,{class:`vp-code-block-title-text`,"data-title":`index.md`},`index.md`)]),i(`div`,{class:`language-md`},[i(`button`,{title:`Copy Code`,class:`copy`}),i(`span`,{class:`lang`},`md`),i(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[i(`code`,null,[i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`layout`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`home`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`hero`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  name`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  text`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`增强 vitepress 配置，提供插件能力。`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  actions`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - `),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`text`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`开始使用`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      link`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`/zh/guide/quick-start`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - `),i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`text`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Github`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      link`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`https://github.com/pengzhanbo/vitepress-tuck`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      theme`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`alt`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  image`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`    src`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`/tuck-logo.svg`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`    alt`),i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),i(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),n(`
`),i(`span`,{class:`line`},[i(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)])])])])],-1)]),_:1})])}var g=t(p,[[`render`,h]]);export{f as __pageData,g as default};