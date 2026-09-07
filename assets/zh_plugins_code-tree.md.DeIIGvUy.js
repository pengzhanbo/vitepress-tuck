import{Bt as e,Dt as t,ft as n,ht as r,jt as i,lt as a,mt as o,n as s,pt as c}from"./chunks/framework.SV1DZZ0b.js";import{t as l}from"./chunks/NpmBadge.xVgCJWQy.js";import{i as u}from"./chunks/browser.NlsQsEvb.js";import{t as d}from"./chunks/browser.DVSjtveL.js";var f=JSON.parse(`{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/plugins/code-tree.md","filePath":"zh/plugins/code-tree.md","lastUpdated":1782066503000}`),p={name:`zh/plugins/code-tree.md`},m={id:`vitepress-tuck-模式-推荐`,tabindex:`-1`};function h(s,f,p,h,g,_){let v=i(`CopyOrDownloadAsMarkdownButtons`),y=l,b=i(`Badge`),x=u,S=d;return t(),n(`div`,null,[f[38]||=a(`div`,{style:{display:`none`},hidden:``,"data-nosnippet":``},`Are you an LLM? You can read better optimized documentation at /zh/plugins/code-tree.md for this page in Markdown format`,-1),f[39]||=a(`h1`,{id:`code-tree`,tabindex:`-1`},[o(`Code Tree `),a(`a`,{class:`header-anchor`,href:`#code-tree`,"aria-label":`Permalink to “Code Tree”`},`​`)],-1),r(v),r(y,{name:`vitepress-plugin-code-tree`}),f[40]||=c(`<p>代码树插件，用于在 Markdown 中渲染带文件树侧边栏的代码结构，支持文件切换查看。</p><p>该插件依赖于 <a href="./file-tree">文件树</a> 插件提供的文件树侧边栏组件。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-0" id="tab-16-1" checked><label data-title="pnpm" for="tab-16-1">pnpm</label><input type="radio" name="group-0" id="tab-16-2"><label data-title="npm" for="tab-16-2">npm</label><input type="radio" name="group-0" id="tab-16-3"><label data-title="bun" for="tab-16-3">bun</label><input type="radio" name="group-0" id="tab-16-4"><label data-title="deno" for="tab-16-4">deno</label><input type="radio" name="group-0" id="tab-16-5"><label data-title="yarn" for="tab-16-5">yarn</label></div><div class="blocks"><div class="language-sh active"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div><div class="language-sh"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vitepress-plugin-code-tree</span></span></code></pre></div></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to “使用”">​</a></h2>`,5),a(`h3`,m,[f[1]||=o(`vitepress-tuck 模式 `,-1),r(b,{type:`tip`},{default:e(()=>[...f[0]||=[o(`推荐`,-1)]]),_:1}),f[2]||=o(),f[3]||=a(`a`,{class:`header-anchor`,href:`#vitepress-tuck-模式-推荐`,"aria-label":`Permalink to “vitepress-tuck 模式 推荐”`},`​`,-1)]),f[41]||=c(`<div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-tuck&#39;</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">codeTree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div><p><a href="./../guide/quick-start" class="readmore">查看 <strong>vitepress-tuck</strong> 了解更多</a></p><h3 id="传统模式" tabindex="-1">传统模式 <a class="header-anchor" href="#传统模式" aria-label="Permalink to “传统模式”">​</a></h3><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title=".vitepress/config.ts">.vitepress/config.ts</span></div><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">satisfies</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Theme</span></span></code></pre></div></div><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to “语法”">​</a></h2><p>插件提供两种语法来渲染代码树：用于内联文件内容的容器语法，以及用于从目录加载文件的嵌入语法。</p><h3 id="容器语法" tabindex="-1">容器语法 <a class="header-anchor" href="#容器语法" aria-label="Permalink to “容器语法”">​</a></h3><p>使用 <code>::: code-tree</code> 容器，内部包含围栏代码块。每个围栏代码块必须通过信息字符串中的 <code>[文件名]</code> 语法声明文件名。</p><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree title=&quot;项目结构&quot;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h4 id="容器属性" tabindex="-1">容器属性 <a class="header-anchor" href="#容器属性" aria-label="Permalink to “容器属性”">​</a></h4><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>代码树标题</td><td>-</td></tr><tr><td><code>height</code></td><td>代码树容器高度</td><td><code>420px</code></td></tr><tr><td><code>entry</code></td><td>入口文件，默认打开</td><td>-</td></tr><tr><td><code>show-sidebar</code></td><td>是否默认显示侧边栏</td><td><code>false</code></td></tr></tbody></table><h4 id="默认激活文件" tabindex="-1">默认激活文件 <a class="header-anchor" href="#默认激活文件" aria-label="Permalink to “默认激活文件”">​</a></h4><p>在围栏代码块的信息字符串中添加 <code>:active</code> 标记，可以将该文件设为默认激活的文件：</p><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: code-tree</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts] :active</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [utils.ts]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> noop</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><h3 id="嵌入语法" tabindex="-1">嵌入语法 <a class="header-anchor" href="#嵌入语法" aria-label="Permalink to “嵌入语法”">​</a></h3><p>使用 <code>@[code-tree](dir)</code> 嵌入一个目录作为代码树。目录中的文件会被自动加载并渲染。</p><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><code>dir</code> 支持以下路径前缀：</p><table tabindex="0"><thead><tr><th>前缀</th><th>说明</th></tr></thead><tbody><tr><td><code>@</code></td><td>相对于 VitePress <code>srcDir</code></td></tr><tr><td><code>/</code></td><td>相对于 VitePress 项目根目录</td></tr><tr><td>-</td><td>相对于当前 markdown 文件所在目录</td></tr></tbody></table><h4 id="嵌入属性" tabindex="-1">嵌入属性 <a class="header-anchor" href="#嵌入属性" aria-label="Permalink to “嵌入属性”">​</a></h4><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;源码&quot; height=&quot;500px&quot; entry=&quot;index.ts&quot; show-sidebar=true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">./src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to “配置”">​</a></h2><h3 id="codetreepluginoptions" tabindex="-1">CodeTreePluginOptions <a class="header-anchor" href="#codetreepluginoptions" aria-label="Permalink to “CodeTreePluginOptions”">​</a></h3><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CodeTreePluginOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="文件加载器" tabindex="-1">文件加载器 <a class="header-anchor" href="#文件加载器" aria-label="Permalink to “文件加载器”">​</a></h3><p>加载器用于嵌入语法加载文件内容。插件内置了常见文件类型的加载器，自定义加载器会合并到内置加载器之前，因此具有更高优先级。</p><p>内置加载器覆盖以下文件类型：</p><ul><li>点文件（<code>.git*</code>、<code>.env*</code>、<code>.*ignore</code>、<code>.npmrc</code>）：以纯文本渲染</li><li><code>.XXXrc</code> 配置文件（如 <code>.eslintrc</code>）：以 JSON 格式渲染</li><li>图片文件：渲染为 <code>&lt;img&gt;</code> 标签，并正确解析 <code>src</code></li><li>Shiki 支持的源文件：渲染为带语法高亮的围栏代码块</li></ul><div class="language-ts"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> codeTree, { loadCodeContent } </span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress-plugin-code-tree&#39;</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><p><code>filter</code> 字段接受 glob 模式字符串、glob 模式数组，或接收 <code>CodeTreeFile</code> 并返回布尔值的断言函数。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to “示例”">​</a></h2><h3 id="容器语法-1" tabindex="-1">容器语法 <a class="header-anchor" href="#容器语法-1" aria-label="Permalink to “容器语法”">​</a></h3><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::code-tree title=&quot;代码树&quot; show-sidebar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`ts [index.ts]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#c62739;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`rs [main.rs]</span></span>
<span class="line"><span style="--shiki-light:#c62739;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    println!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div>`,34),r(S,{title:`代码树`,"entry-file":`index.ts`,"show-sidebar":``},{"file-tree":e(()=>[r(x,{filename:`index.ts`,level:1,type:`file`,expanded:``,filepath:`index.ts`}),r(x,{filename:`main.rs`,level:1,type:`file`,expanded:``,filepath:`main.rs`})]),default:e(()=>[f[4]||=a(`div`,{"data-filepath":`index.ts`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`index.ts`},`index.ts`)]),a(`div`,{class:`language-ts`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`ts`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`const`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` a`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` =`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},` 1`)])])])])],-1),f[5]||=a(`div`,{"data-filepath":`main.rs`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`main.rs`},`main.rs`)]),a(`div`,{class:`language-rs`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`rs`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`fn`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` main`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`() {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    println!`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"Hello, world!"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`);`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)])])])])],-1)]),_:1}),f[42]||=c(`<h3 id="嵌入语法-1" tabindex="-1">嵌入语法 <a class="header-anchor" href="#嵌入语法-1" aria-label="Permalink to “嵌入语法”">​</a></h3><div class="language-md"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">code-tree title=&quot;代码树&quot; show-sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">@/zh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,2),r(S,{title:`代码树`,"entry-file":`guide/api.md`,"show-sidebar":``},{"file-tree":e(()=>[r(x,{filename:`guide`,level:1,type:`folder`,expanded:``},{default:e(()=>[r(x,{filename:`api.md`,level:2,type:`file`,expanded:``,filepath:`guide/api.md`}),r(x,{filename:`plugin-dev.md`,level:2,type:`file`,expanded:``,filepath:`guide/plugin-dev.md`}),r(x,{filename:`quick-start.md`,level:2,type:`file`,expanded:``,filepath:`guide/quick-start.md`}),r(x,{filename:`toolkit.md`,level:2,type:`file`,expanded:``,filepath:`guide/toolkit.md`}),r(x,{filename:`wrap-plugin.md`,level:2,type:`file`,expanded:``,filepath:`guide/wrap-plugin.md`})]),_:1}),r(x,{filename:`plugins`,level:1,type:`folder`,expanded:``},{default:e(()=>[r(x,{filename:`abbr.md`,level:2,type:`file`,expanded:``,filepath:`plugins/abbr.md`}),r(x,{filename:`annotation.md`,level:2,type:`file`,expanded:``,filepath:`plugins/annotation.md`}),r(x,{filename:`caniuse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/caniuse.md`}),r(x,{filename:`code-collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-collapse.md`}),r(x,{filename:`code-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/code-tree.md`}),r(x,{filename:`codepen.md`,level:2,type:`file`,expanded:``,filepath:`plugins/codepen.md`}),r(x,{filename:`collapse.md`,level:2,type:`file`,expanded:``,filepath:`plugins/collapse.md`}),r(x,{filename:`field.md`,level:2,type:`file`,expanded:``,filepath:`plugins/field.md`}),r(x,{filename:`file-tree.md`,level:2,type:`file`,expanded:``,filepath:`plugins/file-tree.md`}),r(x,{filename:`icons.md`,level:2,type:`file`,expanded:``,filepath:`plugins/icons.md`}),r(x,{filename:`intro.md`,level:2,type:`file`,expanded:``,filepath:`plugins/intro.md`}),r(x,{filename:`jsfiddle.md`,level:2,type:`file`,expanded:``,filepath:`plugins/jsfiddle.md`}),r(x,{filename:`mark.md`,level:2,type:`file`,expanded:``,filepath:`plugins/mark.md`}),r(x,{filename:`mermaid.md`,level:2,type:`file`,expanded:``,filepath:`plugins/mermaid.md`}),r(x,{filename:`npm-to.md`,level:2,type:`file`,expanded:``,filepath:`plugins/npm-to.md`}),r(x,{filename:`obsidian.md`,level:2,type:`file`,expanded:``,filepath:`plugins/obsidian.md`}),r(x,{filename:`pdf.md`,level:2,type:`file`,expanded:``,filepath:`plugins/pdf.md`}),r(x,{filename:`plantuml.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plantuml.md`}),r(x,{filename:`plot.md`,level:2,type:`file`,expanded:``,filepath:`plugins/plot.md`}),r(x,{filename:`qrcode.md`,level:2,type:`file`,expanded:``,filepath:`plugins/qrcode.md`}),r(x,{filename:`repo-card.md`,level:2,type:`file`,expanded:``,filepath:`plugins/repo-card.md`}),r(x,{filename:`stackblitz.md`,level:2,type:`file`,expanded:``,filepath:`plugins/stackblitz.md`}),r(x,{filename:`steps.md`,level:2,type:`file`,expanded:``,filepath:`plugins/steps.md`}),r(x,{filename:`video.md`,level:2,type:`file`,expanded:``,filepath:`plugins/video.md`}),r(x,{filename:`watermark.md`,level:2,type:`file`,expanded:``,filepath:`plugins/watermark.md`})]),_:1}),r(x,{filename:`config.ts`,level:1,type:`file`,expanded:``,filepath:`config.ts`}),r(x,{filename:`index.md`,level:1,type:`file`,expanded:``,filepath:`index.md`})]),default:e(()=>[f[6]||=a(`div`,{"data-filepath":`guide/api.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/api.md`},`guide/api.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# API 参考`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## vitepress-tuck`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### defineConfig`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`defineConfig` 是 `vitepress-tuck` 的核心函数，用于替代 VitePress 的 `defineConfig`。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function defineConfig<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`ThemeConfig`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` =`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` DefaultTheme.Config`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  config: UserConfig<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NoInfer`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<ThemeConfig`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> & TuckConfig,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): UserConfig<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NoInfer`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<ThemeConfig`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 参数`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 参数     | 类型                      | 说明                                |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ------------------------- | ----------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `config` | `UserConfig & TuckConfig` | VitePress 原始配置 + `plugins` 选项 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`TuckConfig` 定义：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface TuckConfig {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * vitepress 插件列表`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins?: VitepressPlugin[]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * unplugin-vue-components 插件选项`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @see - https://github.com/unplugin/unplugin-vue-components`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  components?: ComponentsOptions`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 返回值`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"返回合并后的完整 VitePress 配置对象 `UserConfig`。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 工作原理`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"1. 遍历 `plugins` 数组，合并每个插件的 `markdown`、`vite`、`vue` 等配置")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"2. 收集所有钩子函数（`buildEnd`、`transformHead`、`transformHtml`、`transformPageData`、`postRender`），并按照各自的策略合并：")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `markdown.config`、`buildEnd` → 并发执行")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `transformHead` → 并发执行后合并结果")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   - `transformHtml`、`transformPageData`、`postRender` → 顺序执行，链式传递")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"3. 将插件中的 `client` 配置注入到内置的 `virtual-enhance-app` 虚拟模块")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"4. 将插件中的 `componentResolver` 收集到内置的 `unplugin-vue-components` 解析器列表")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`5. 最后合并用户自身的配置项`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### definePlugin`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用于定义 VitePress 插件。它是一个类型辅助函数，帮助开发者以规范化的方式创建插件。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function definePlugin<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugin: (option?: T) => VitepressPlugin,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): (option?: T) => VitepressPlugin`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 参数`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 参数     | 类型                              | 说明                                       |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | --------------------------------- | ------------------------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `plugin` | `(option?: T) => VitepressPlugin` | 插件工厂函数，接收可选配置项，返回插件对象 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VitepressPlugin`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件对象的类型定义：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface VitepressPlugin extends Pick<`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  UserConfig,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  'markdown' | 'vite' | 'vue' | 'buildEnd' | 'transformHead' | 'transformHtml' | 'transformPageData' | 'postRender'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 插件名称（必填，用于标识和调试）`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: string`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 客户端配置，用于自动注入到 virtual:enhance-app`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client?: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * 自定义的 import 语句列表`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     *`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * @example`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * imports: ['import "my-plugin/style.css"']`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports?: string[]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * 客户端增强函数名。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * - 未设置: 不注入 enhanceApp 函数`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * - true: 默认函数名为 `enhanceApp`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * - 字符串: 指定函数名`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     *`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * @example`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     * enhance: 'enhanceAppWithMyPlugin'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"     * ```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`     */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance?: string | boolean`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 组件解析器，用于 unplugin-vue-components 自动按需导入。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - 字符串数组：声明的组件名将从 `<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`插件名`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">/client` 自动解析")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - ComponentResolver 对象：自定义解析逻辑`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @example`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * ```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   *`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` // 简单形式`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * componentResolver: ['MyComponent', 'OtherComponent']`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * ```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver?: string[] | ComponentResolver`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 支持的 VitePress 配置项`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性                | 类型                              | 说明                                                              |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | --------------------------------- | ----------------------------------------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `markdown`          | `UserConfig['markdown']`          | Markdown 相关配置，常用于 `markdown.config` 注册 markdown-it 插件 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `vite`              | `UserConfig['vite']`              | Vite 配置，用于注册 Vite 插件和优化配置                           |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `vue`               | `UserConfig['vue']`               | Vue 应用级别的配置                                                |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `buildEnd`          | `UserConfig['buildEnd']`          | 构建完成钩子（并发执行）                                          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHead`     | `UserConfig['transformHead']`     | 转换 HTML 头部钩子（并发执行，合并结果）                          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHtml`     | `UserConfig['transformHtml']`     | 转换 HTML 钩子（顺序执行，链式传递）                              |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformPageData` | `UserConfig['transformPageData']` | 转换页面数据钩子（顺序执行，链式传递）                            |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `postRender`        | `UserConfig['postRender']`        | 页面渲染后钩子（顺序执行，链式传递）                              |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### virtual:enhance-app`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`virtual:enhance-app` 是一个虚拟模块，由 `vitepress-tuck` 内置提供。它自动收集所有插件的 `client` 配置并生成对应的代码。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`使用时在主题入口中导入：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import enhanceApp from 'virtual:enhance-app'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceApp(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`TypeScript 类型支持需要添加类型引用：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [tsconfig.json]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "compilerOptions": {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "types": ["vitepress-tuck/client-types"]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 内置插件：auto-components`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-tuck` 内置集成了 [`unplugin-vue-components`](https://github.com/unplugin/unplugin-vue-components) 插件，提供自动按需组件导入能力。该插件作为内置插件自动启用，无需手动注册。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 默认行为`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 扫描 `.vue` 和 `.md` 文件中的组件使用")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 类型声明文件生成到 `node_modules/.vite/components.d.ts`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 自动收集所有插件的 `componentResolver` 声明")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 自定义配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `defineConfig` 的 `components` 选项可以自定义 `unplugin-vue-components` 的行为：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  components: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // 自定义扫描目录`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    dirs: ['src/components'],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // 目录作为命名空间`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    directoryAsNamespace: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // 其他 unplugin-vue-components 选项...`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"插件的 `componentResolver` 声明会与用户在 `components` 中的配置合并。插件开发者只需在插件中声明 `componentResolver`，用户即可直接在 Markdown 或 Vue 文件中使用对应组件，无需手动 import。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[7]||=a(`div`,{"data-filepath":`guide/plugin-dev.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/plugin-dev.md`},`guide/plugin-dev.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 插件开发`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-tuck` 提供了 `definePlugin` 函数来帮助开发者便捷地创建 VitePress 插件。通过 `definePlugin`，你可以将原本需要用户分散配置的 `markdown`、`vite`、`vue` 等选项集中在一个插件函数中。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 基本结构`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"一个基于 `vitepress-tuck` 的插件由以下部分组成：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin((options?: MyPluginOptions) => ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 客户端配置：自动注入到 virtual:enhance-app`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: 'enhanceAppWithMyPlugin',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 组件解析器：声明插件提供的组件，支持自动按需导入`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: ['MyComponent', 'OtherComponent'],`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Markdown 配置：注册 markdown-it 插件`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(myMarkdownPlugin, options?.markdownOptions)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // Vite 配置`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [myVitePlugin(options?.viteOptions)],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 其他 VitePress 钩子`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  buildEnd: (site) => { /* ... */ },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformHead: (ctx) => { /* ... */ },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformHtml: (code, id, ctx) => { /* ... */ },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  transformPageData: (pageData, ctx) => { /* ... */ },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  postRender: (context) => { /* ... */ },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 核心概念`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### name`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"每个插件必须有一个唯一的 `name`，用于标识和调试：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### client`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`client` 配置用于向客户端注入代码。`vitepress-tuck` 会自动将这些代码注入到 `virtual:enhance-app` 虚拟模块中。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### client.imports`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`添加自定义的 import 语句，常用于导入样式文件：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      'import "vitepress-plugin-my-plugin/style.css"',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### client.enhance`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"指定插件的客户端增强函数名。该函数会在 VitePress 主题的 `enhanceApp(ctx)` 中被调用。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 设置为 `true` 时，默认函数名为 `enhanceApp`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 设置为字符串时，函数名为该字符串`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: 'enhanceAppWithMyPlugin',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`对应的，在插件的客户端入口文件中导出同名函数：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// client/index.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { EnhanceAppContext } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export function enhanceAppWithMyPlugin({ app }: EnhanceAppContext) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // 注册组件、指令等`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.component('MyComponent', MyComponent)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### componentResolver`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`componentResolver` 用于声明插件提供的 Vue 组件，使其能被内置的 `unplugin-vue-components` 自动按需导入。用户在 Markdown 或 Vue 文件中直接使用组件名即可，无需手动 import。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 字符串数组形式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"最简单的形式是传入组件名数组，这些组件会从 `<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`插件名`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">/client` 自动解析：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: ['MyComponent', 'OtherComponent'],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`对应的，在插件的客户端入口中导出这些组件：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// client/index.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import MyComponent from './components/MyComponent.vue'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import OtherComponent from './components/OtherComponent.vue'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export { MyComponent, OtherComponent }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 自定义 ComponentResolver`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"对于更复杂的解析逻辑，可以传入来自 `unplugin-vue-components` 的 `ComponentResolver` 对象：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { ComponentResolver } from 'unplugin-vue-components'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const myResolver: ComponentResolver = {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: 'component',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolve: (name) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    if (name.startsWith('My')) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      return { name, from: 'vitepress-plugin-my-plugin/client' }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin(() => ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-my-plugin',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  componentResolver: myResolver,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: tip`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"当插件同时设置了 `client.enhance` 用于注册组件和 `componentResolver` 时，推荐使用 `componentResolver` 来实现按需导入，这样可以减少不必要的组件打包。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### markdown`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`配置 markdown-it 插件，用于扩展 Markdown 语法：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 注册自定义容器`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(containerPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 注册行内规则`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.inline.ruler.before('emphasis', 'my_rule', myRule)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vite`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`配置 Vite 插件和优化选项：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [myVitePlugin()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: ['my-plugin-package'],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 钩子函数`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`definePlugin` 支持 VitePress 的各种钩子函数：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 钩子                | 说明           | 执行方式           |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | -------------- | ------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `buildEnd`          | 构建完成时触发 | 并发执行           |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHead`     | 转换 HTML 头部 | 并发执行，合并结果 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformHtml`     | 转换 HTML 内容 | 顺序执行，链式传递 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `transformPageData` | 转换页面数据   | 顺序执行，链式传递 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `postRender`        | 页面渲染后触发 | 顺序执行，链式传递 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 客户端代码组织`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`当插件需要提供客户端代码（如 Vue 组件）时，推荐以下目录结构：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="my-plugin"`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- my-plugin`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - src`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - client`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - components`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        - MyComponent.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - index.ts # 导出 enhanceApp 函数`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - node`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - myPlugin.ts # 插件核心逻辑`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - index.ts # 插件入口，使用 definePlugin`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - package.json`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - tsconfig.json`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 `package.json` 中配置 `exports`，将客户端代码单独导出：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "exports": {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ".": {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "types": "./dist/node/index.d.ts",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "default": "./dist/node/index.js"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "./client": {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "browser": "./dist/client/browser/index.js",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      "default": "./dist/client/ssr/index.js"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 推荐使用 vitepress-plugin-toolkit`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` 提供了丰富的工具函数来辅助插件开发，包括：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createContainerPlugin` - 创建 markdown-it 自定义容器")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createContainerSyntaxPlugin` - 创建自定义语法容器")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createEmbedRuleBlock` - 创建嵌入语法块")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `resolveAttrs` / `stringifyAttrs` - 属性解析和序列化")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createLogger` - 日志工具")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `createLocales` - 国际化支持")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `useSize` - 响应式尺寸计算")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`详细 API 请参考 [Toolkit API 文档](./toolkit)。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 完整示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"以下是一个基于 `definePlugin` 开发的简单步骤插件：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [node/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { definePlugin } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerPlugin } from 'vitepress-plugin-toolkit'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export const stepsPlugin = (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin(md, 'steps', {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    before: () => '<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vp-steps"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default definePlugin(() => ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: 'vitepress-plugin-steps',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: ['import "vitepress-plugin-steps/style.css"'],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stepsPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户使用时只需：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import steps from 'vitepress-plugin-steps'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [steps()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[8]||=a(`div`,{"data-filepath":`guide/quick-start.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/quick-start.md`},`guide/quick-start.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 快速开始`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 什么是 vitepress-tuck？`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 为 VitePress 提供了简单灵活、低门槛的插件开发与接入能力。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`它通过包装 VitePress 的 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`，提供额外的 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 选项，将插件接入的复杂度转移到插件内部，用户只需在 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 数组中添加插件。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`npm`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` install`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` vitepress-tuck`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 在 VitePress 站点中使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### 替换配置文件`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  将 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/config.ts`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中的 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 替换为 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 的 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`defineConfig`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line diff remove`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  import { defineConfig } from 'vitepress-tuck' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  export default defineConfig({`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    plugins: [`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 在这里添加插件`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    // 其他 VitePress 配置项 ...`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### 配置客户端入口`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  在 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`.vitepress/theme/index.ts`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中引入 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`virtual:enhance-app`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { Theme } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`  import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` enhanceApp `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'virtual:enhance-app'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      enhanceApp(ctx) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`  } satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"  `virtual:enhance-app`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 是一个虚拟模块，`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 会自动将插件的客户端代码注入其中，无需手动配置。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`-`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},` ### TypeScript 支持`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  如果项目使用 TypeScript，在 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`tsconfig.json`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中添加类型引用：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```json")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`    "compilerOptions"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`      "types"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: [`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-tuck/client-types"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  ```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 使用插件`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件使用非常简单，只需在 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 中导入并调用即可：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` steps `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-steps'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` mermaid `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-mermaid-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    steps`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    mermaid`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 可以传入插件配置项`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`每个插件的配置项请参考对应的插件文档。`)])])])])],-1),f[9]||=a(`div`,{"data-filepath":`guide/toolkit.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/toolkit.md`},`guide/toolkit.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Toolkit API`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-toolkit"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` 是 VitePress 插件开发工具包，提供了丰富的工具函数来辅助插件开发。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`安装：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-toolkit`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Node 端 API`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"从 `vitepress-plugin-toolkit` 导入：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttrs,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveAttr,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  stringifyAttrs,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLogger,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createLocales,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getVitepressConfig,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  getLocaleWithPath,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resolveRouteLink,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  parseRect,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  slugify,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  treatAsHtml,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerPlugin`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"创建 markdown-it 自定义容器插件。用于处理 `::: type` 语法，内容会被 markdown-it 正常解析。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerPlugin(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options?: ContainerOptions,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**ContainerOptions：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface ContainerOptions {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 渲染容器起始标签时的回调`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  before?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 渲染容器结束标签时的回调`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  after?: (info: string, tokens: Token[], index: number, options: Options, env: any) => string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerPlugin } from 'vitepress-plugin-toolkit'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerPlugin(md, 'steps', {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    before: () => '<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vp-steps"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createContainerSyntaxPlugin`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"创建自定义语法容器插件。与 `createContainerPlugin` 不同，内容不会被 markdown-it 解析，需要自行处理。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createContainerSyntaxPlugin(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: RenderRule,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"容器内的原始内容通过 `token.content` 获取，元数据通过 `token.meta` 获取。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createContainerSyntaxPlugin } from 'vitepress-plugin-toolkit'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createContainerSyntaxPlugin(md, 'file-tree', (tokens, index) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    const { content, meta } = tokens[index]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"    return `<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` class`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"file-tree"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">${content}</"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`div`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createEmbedRuleBlock`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"创建嵌入规则块，用于处理 `@[type info](source)` 语法。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createEmbedRuleBlock<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  md: MarkdownIt,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: EmbedRuleBlockOptions<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): void`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**EmbedRuleBlockOptions：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface EmbedRuleBlockOptions<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Meta`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>> {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 嵌入类型，如 'pdf'、'qrcode' */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  type: string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** Token 名称，默认与 type 相同 */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name?: string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 插入到哪个规则之前，默认 'code' */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  beforeName?: string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 规则选项 */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ruleOptions?: RuleOptions`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"  /** 解析 `@[type info](source)` 中的 `info` 和 `source`，转换为元数据对象 */")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  meta: (info: string, source: string) => Meta`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 从元数据生成内容 */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content?: (meta: Meta, env: MarkdownEnv) => string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /** 渲染函数 */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  render?: (tokens: Token[], index: number, env: MarkdownEnv) => string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { createEmbedRuleBlock, resolveAttrs } from 'vitepress-plugin-toolkit'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function myPlugin(md) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  createEmbedRuleBlock(md, {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    type: 'pdf',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    meta: (info, source) => ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      attrs: info,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      src: source,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    content: (meta) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"      return `<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPPdf`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},'"${meta.src}"'),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}}," ${meta.attrs}"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}}," />`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttrs`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将属性字符串解析为对象。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttrs<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> = Record<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` any`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(info: string): T`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`resolveAttrs('width="100%" height="400" dark')`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => { width: '100%', height: '400', dark: true }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveAttr`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`从信息字符串中解析单个属性值。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveAttr(info: string, key: string): string | undefined`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### stringifyAttrs`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将属性对象序列化为 HTML 属性字符串。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function stringifyAttrs<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` object`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` = `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`object`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  attrs: T,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  withUndefinedOrNull?: boolean,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  forceStringify?: (keyof T)[],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stringifyAttrs({ width: '100%', height: 400, dark: true })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// => ' width="100%" :height="400" dark'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLogger`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建日志记录器实例。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLogger(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: string,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  defaultLevel?: LogLevel,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Logger`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**LogLevel：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type LogLevel = 'info' | 'warn' | 'error' | 'debug' | 'silent'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const logger = createLogger('my-plugin', 'info')`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.info('插件已加载')       // [my-plugin] 插件已加载`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.warn('可能存在问题')     // [my-plugin] 可能存在问题`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.error('发生了错误')     // [my-plugin] 发生了错误`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`logger.debug('调试信息', true)  // [my-plugin] 调试信息`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### createLocales`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建多语言配置，自动匹配 VitePress 的语言设置。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function createLocales<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`LocaleData`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Record`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},`<string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` unknown`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>>(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  builtinLocales: BuiltinLocales<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`LocaleData`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales?: Record<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): Record<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` LocaleData`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const locales = createLocales(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['en', 'en-US'], { chart: 'Chart', source: 'Source' }],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    [['zh', 'zh-CN'], { chart: '图表', source: '源码' }],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  userLocales,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getVitepressConfig`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`获取当前的 VitePress 站点配置。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getVitepressConfig(): SiteConfig`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### getLocaleWithPath`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`根据文件路径获取语言信息。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function getLocaleWithPath(path: string): { lang: string, locale: string }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### resolveRouteLink`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将相对路径转换为 VitePress 的路由链接。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function resolveRouteLink(url: string, env: MarkdownEnv): string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### parseRect`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`解析尺寸字符串，如果传入数字则自动添加单位。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function parseRect(str: string, unit?: string): string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('400')     // => '400px'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('50%')     // => '50%'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`parseRect('10', 'rem') // => '10rem'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### slugify`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将字符串转换为 URL 友好的 slug 格式。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function slugify(str: string): string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### treatAsHtml`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`判断文件名是否应作为 HTML 处理（非已知资源扩展名即为 HTML）。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function treatAsHtml(filename: string): boolean`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Client 端 API`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"从 `vitepress-plugin-toolkit/client` 导入：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPCopyButton,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  VPLoading,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  useSize,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPhone,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isWindows,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isiPad,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isIOS,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMacOS,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isMobile,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  isSafari,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} from 'vitepress-plugin-toolkit/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPCopyButton`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`复制按钮组件。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPCopyButton`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` :text`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"code"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### VPLoading`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`加载状态组件。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPLoading`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### useSize`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`响应式尺寸计算 composable。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function useSize<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` extends`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` HTMLElement`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>(`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  el: TemplateRef<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`T`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options: ToRefs<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`SizeOptions`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extraHeight?: MaybeRef<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`number`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`): {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: Ref<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: Ref<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  resize: () => void`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**SizeOptions：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface SizeOptions {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width?: string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height?: string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ratio?: number | string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 设备检测工具`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 函数          | 说明                     |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------- | ------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPhone()`  | 检测是否为 iPhone        |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIPad()`    | 检测是否为 iPad          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isIOS()`     | 检测是否为 iOS 设备      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMacOS()`   | 检测是否为 macOS         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isWindows()` | 检测是否为 Windows       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isMobile()`  | 检测是否为移动设备       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `isSafari()`  | 检测是否为 Safari 浏览器 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Shared 工具`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"从 `vitepress-plugin-toolkit` 或 `vitepress-plugin-toolkit/client` 均可导入：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { isExternal, isLinkWithProtocol } from 'vitepress-plugin-toolkit'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isExternal`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`判断链接是否为外部链接。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isExternal(path: string): boolean`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### isLinkWithProtocol`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`判断链接是否包含协议前缀。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`function isLinkWithProtocol(link: string): boolean`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## CSS 过渡动画`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`vitepress-plugin-toolkit` 提供了预定义的 CSS 过渡动画，可在插件中导入：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-up.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-down.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-left.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-right.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-up.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-down.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-left.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/slide-in-right.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-scale-up.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-width-expand.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@import 'vitepress-plugin-toolkit/styles/transition/fade-in-height-expand.css';`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[10]||=a(`div`,{"data-filepath":`guide/wrap-plugin.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`guide/wrap-plugin.md`},`guide/wrap-plugin.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 包装现有插件`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果你的 VitePress 站点已经在使用一些插件，或者你有一个尚未封装为 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 模式的插件，你可以轻松地将其包装为兼容的插件形式。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 为什么需要包装？`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`传统的 VitePress 插件通常需要用户在配置文件中多处配置：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// 传统的接入方式 —— 配置散落在多处`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`通过包装为 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 插件，用户只需在 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 数组中添加，所有配置由插件内部处理。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 包装方法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 使用 definePlugin 包装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`对于任何已有的插件逻辑，使用 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`definePlugin`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 进行包装：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someMarkdownPlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { someVitePlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'some-plugin/vite'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`options`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`?:`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-some-plugin'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(someMarkdownPlugin, options)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`someVitePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 包装仅有 markdown 配置的插件`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果插件只涉及 markdown-it 扩展，包装非常简单：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownItPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 包装仅有 vite 配置的插件`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果插件只需要 Vite 配置：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myVitePlugin `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vite-plugin-my'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`((`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`options`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`?:`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MyOptions`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myVitePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(options)],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`### 包装需要客户端注入的插件`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`如果插件需要在客户端注入组件或样式，需要配置 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`client`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 选项：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-my-plugin'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 注入样式`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      'import "my-plugin/style.css"'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhance: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'enhanceAppWithMyPlugin'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`      // 确保服务端渲染时能正确打包`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'my-plugin'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`并在客户端入口文件中导出 enhance 函数：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// client/index.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { EnhanceAppContext } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` MyComponent `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` './components/MyComponent.vue'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` function`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` enhanceAppWithMyPlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({ `),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`app`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` }`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`:`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` EnhanceAppContext`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  app.`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`component`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'MyComponent'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, MyComponent)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 实际案例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`以下是将 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-plugin-group-icons`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 包装为 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 插件的示例：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { groupIconMdPlugin, groupIconVitePlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-group-icons'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { definePlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` definePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(() `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` ({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  name: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'vitepress-plugin-group-icons'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  client: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    imports: [`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'import `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`virtual:group-icons.css`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`\\'`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(groupIconMdPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`      groupIconVitePlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ssr: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      noExternal: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`        'vitepress-plugin-group-icons'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}))`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`## 保持兼容性`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`包装后的插件仍然可以独立使用（不依赖 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`）。只需在插件的 README 中同时提供两种使用方式：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// 方式一：vitepress-tuck 模式（推荐）`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` myPlugin `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`myPlugin`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`// 方式二：传统 VitePress 模式`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineConfig } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { myPlugin } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'my-plugin/raw'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineConfig`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`    config`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: (`),a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`md`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`) `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`=>`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`use`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`(myPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[11]||=a(`div`,{"data-filepath":`plugins/abbr.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/abbr.md`},`plugins/abbr.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 缩写词`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-abbr"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`缩写词插件，为 Markdown 中的缩写词添加可交互的提示框，鼠标悬停或聚焦时显示其完整描述。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"基于 [`markdown-it-abbr`](https://github.com/markdown-it/markdown-it-abbr) 分叉并修改。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-abbr`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import abbr from 'vitepress-plugin-abbr'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [abbr()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { abbrMarkdownPlugin } from 'vitepress-plugin-abbr' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(abbrMarkdownPlugin, {`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: 'HyperText Markup Language',`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        W3C: 'World Wide Web Consortium',`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在主题中注册组件：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithAbbr } from 'vitepress-plugin-abbr/client' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithAbbr(ctx) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `*[缩写]: 完整描述` 语法定义缩写词，定义后该缩写词在文档中出现的所有位置都会被自动识别并渲染为带有提示框的文本。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML 规范由 W3C 维护。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML 规范由 W3C 维护。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 描述支持内联 Markdown`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`缩写词的完整描述支持内联 Markdown 语法，例如加粗、斜体、链接和代码等。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**HTML** 规范由 W3C 维护。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World [Wide Web](https://www.w3.org/) Consortium`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**HTML** 规范由 W3C 维护。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World [Wide Web](https://www.w3.org/) Consortium`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 全局缩写词`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`除了在每个 Markdown 文件中内联定义缩写词外，还可以通过插件选项配置全局缩写词预设。当全局定义与内联定义存在相同的缩写词时，内联定义优先。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import abbr from 'vitepress-plugin-abbr'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    abbr({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: 'HyperText Markup Language',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      W3C: 'World Wide Web Consortium',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"配置后，所有页面中出现的 `HTML` 和 `W3C` 都会自动渲染为缩写词，无需在每个文件中重复定义。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`鼠标移动或聚焦到下方缩写词上，查看完整描述：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[API]: Application Programming Interface`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[CSS]: Cascading Style Sheets`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`HTML W3C API CSS`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[HTML]: HyperText Markup Language`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[W3C]: World Wide Web Consortium`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[API]: Application Programming Interface`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`*[CSS]: Cascading Style Sheets`)])])])])],-1),f[12]||=a(`div`,{"data-filepath":`plugins/annotation.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/annotation.md`},`plugins/annotation.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark has-diff`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 注释`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-annotation"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释插件，为 Markdown 中的内容添加可交互的注释标记，点击标记后弹出浮层显示注释内容。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释内容支持完整的块级 Markdown 语法，同一标签可多次定义，所有定义会作为独立条目展示在浮层中。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-annotation`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import annotation from 'vitepress-plugin-annotation'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [annotation()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { annotationMarkdownPlugin } from 'vitepress-plugin-annotation' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(annotationMarkdownPlugin, {`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        HTML: 'HyperText Markup Language',`)]),o(`
`),a(`span`,{class:`line diff add`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在主题中注册组件：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithAnnotation } from 'vitepress-plugin-annotation/client' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithAnnotation(ctx) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `[+标签]: 注释内容` 语法定义注释，然后在文档中使用 `[+标签]` 引用。引用会渲染为一个小的可交互标记，点击后弹出浮层显示注释内容。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著] 家喻户晓。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]: **《三国演义》** — 以三国时期为背景的历史小说。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著1] 家喻户晓。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著1]: **《三国演义》** — 以三国时期为背景的历史小说。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 注释内容支持块级 Markdown`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释内容支持完整的块级 Markdown 语法，包括标题、段落、列表、代码块等。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`该框架基于 [+vue] 构建。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+vue]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ## Vue`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  渐进式 JavaScript 框架，用于构建用户界面。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - 响应式数据绑定`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - 组件化架构`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - [了解更多](https://vuejs.org/)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多行定义`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释定义可以跨多行。续行必须至少缩进两个空格。缩进块内的空行会作为注释内容的一部分被保留。非缩进的内容行（如下一个定义或新段落）会终止多行定义。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这个概念在 [+detail] 中有详细说明。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+detail]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  这是注释的第一段。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  这是第二段，中间隔了一个空行，`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  但仍然是同一个注释的一部分。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这一行没有缩进，注释定义到此结束。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多次定义同一标签`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`同一标签可以多次定义。所有定义会被收集并作为独立条目展示在浮层中，适合为同一引用提供多条相关信息。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript 有多个版本 [+js]。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2015 (ES6)** — 引入了类、模块、箭头函数等。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2020** — 新增了可选链、空值合并运算符、BigInt 等。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`JavaScript 有多个版本 [+js]。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2015 (ES6)** — 引入了类、模块、箭头函数等。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+js]: **ES2020** — 新增了可选链、空值合并运算符、BigInt 等。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 全局注释`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`除了在每个 Markdown 文件中内联定义注释外，还可以通过插件选项配置全局注释预设。这对于需要在所有页面中一致注释的术语很有用。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import annotation from 'vitepress-plugin-annotation'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    annotation({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      HTML: 'HyperText Markup Language',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      CSS: ['Cascading Style Sheets', '一种用于描述文档表现的样式表语言。'],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`每个全局注释值可以是字符串或字符串数组。当提供数组时，每个元素成为浮层中的一个独立条目，就像同一标签的多个内联定义一样。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`点击下方注释标记，查看完整内容：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著] 家喻户晓。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《三国演义》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《西游记》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  讲述了唐僧师徒四人西天取经的故事，充满了神话色彩和奇幻冒险。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《红楼梦》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉等人的爱情悲剧。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《水浒传》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  描写了北宋末年以宋江为首的 108 位好汉在梁山泊聚义的故事。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`中国古代 **四大名著** [+名著] 家喻户晓。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《三国演义》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以三国时期的历史为背景，描写了魏、蜀、吴三国之间的政治、军事斗争。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《西游记》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  讲述了唐僧师徒四人西天取经的故事，充满了神话色彩和奇幻冒险。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《红楼梦》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  以贾、史、王、薛四大家族的兴衰为背景，描写了贾宝玉、林黛玉等人的爱情悲剧。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[+名著]:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  **《水浒传》：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  描写了北宋末年以宋江为首的 108 位好汉在梁山泊聚义的故事。`)])])])])],-1),f[13]||=a(`div`,{"data-filepath":`plugins/caniuse.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/caniuse.md`},`plugins/caniuse.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Can I Use`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-caniuse"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 [caniuse.com](https://caniuse.com/) 的浏览器兼容性数据，在页面中展示 CSS/JS 特性的浏览器支持情况。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-caniuse`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import caniuse from 'vitepress-plugin-caniuse'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [caniuse()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { caniuseMarkdownPlugin } from 'vitepress-plugin-caniuse' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(caniuseMarkdownPlugin) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCaniuse } from 'vitepress-plugin-caniuse/client' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCaniuse(ctx) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[caniuse]()` 嵌入浏览器兼容性数据：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](feature_name)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Baseline 模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`使用 baseline 模式显示特性支持概览：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](feature_name)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 自定义版本范围`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `{}` 指定版本范围：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse{-2,4}](feature_name)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline{-3,2}](feature_name)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `{past, future}`: past 表示回溯的版本数，future 表示前瞻的版本数")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 默认值为 `{5, 2}`，即回溯 5 个版本，前瞻 3 个版本")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 获取 特性名称`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 [caniuse.com](https://caniuse.com/) 中搜索需要展示的特性，点击卡片左侧的 `#` ，即可在浏览器地址栏中获得特性名称。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: details 不知道哪个部分为特性名称？`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"**以 css `grid` 为例**")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 caniuse.com 中搜索 `grid`，然后点击第一个卡片的 `#` ，浏览器地址栏地址变更为 `https://caniuse.com/css-grid`。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"则特性名称为 `css-grid`。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在此处进行验证： <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`https://caniuse.com/?search=grid`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### 显示 `fetch` 特性的浏览器支持情况")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](fetch)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse](fetch)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"### 显示 `fetch` 特性的 baseline")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](fetch)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[caniuse baseline](fetch)`)])])])])],-1),f[14]||=a(`div`,{"data-filepath":`plugins/code-collapse.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-collapse.md`},`plugins/code-collapse.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Collapse`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-code-collapse"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`代码块折叠插件，当代码块超过指定行数时自动折叠，提升页面阅读体验。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-code-collapse`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import collapsedLines from 'vitepress-plugin-code-collapse'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    collapsedLines(),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { collapsedLinesMarkdownPlugin } from 'vitepress-plugin-code-collapse'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(collapsedLinesMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCollapsedLines } from 'vitepress-plugin-code-collapse/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCollapsedLines(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 全局折叠`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"当在配置中设置 `options` 为数字时，或者为 `true`（默认为 15 行）时，所有超过该行数的代码块都会自动折叠。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 单个代码块折叠`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"可以在代码块的 info 字符串中使用 `:collapsed-lines={N}` 语法单独控制：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// 使用默认值折叠（15行）`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// 从第10行开始折叠`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 折叠行数配置`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `true`: 超过 15 行时折叠")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `number`: 超过指定行数时折叠")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `false`: 不全局启用，允许单代码块控制 （默认值）")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * - `'disable'`: 完全禁用插")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'false'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type options = boolean | number | 'disable'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :collapsed-lines=10")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a1 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a2 = 2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a3 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a4 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a5 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a6 = 2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a7 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a8 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a9 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a10 = 2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a11 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a12 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts :line-numbers=1 :collapsed-lines=10")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a1 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a2 = 2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a3 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a4 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a5 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a6 = 2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a7 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a8 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a9 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a10 = 2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a11 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a12 = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[15]||=a(`div`,{"data-filepath":`plugins/code-tree.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/code-tree.md`},`plugins/code-tree.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Code Tree`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-code-tree"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`代码树插件，用于在 Markdown 中渲染带文件树侧边栏的代码结构，支持文件切换查看。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`该插件依赖于 [文件树](./file-tree.md) 插件提供的文件树侧边栏组件。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-code-tree`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codeTree from 'vitepress-plugin-code-tree'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [codeTree()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { codeTreeMarkdownPlugin } from 'vitepress-plugin-code-tree'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(codeTreeMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCodeTree } from 'vitepress-plugin-code-tree/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCodeTree(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件提供两种语法来渲染代码树：用于内联文件内容的容器语法，以及用于从目录加载文件的嵌入语法。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: code-tree` 容器，内部包含围栏代码块。每个围栏代码块必须通过信息字符串中的 `[文件名]` 语法声明文件名。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree title="项目结构"`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 容器属性`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性           | 说明               | 默认值  |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | ------------------ | ------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`        | 代码树标题         | -       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`       | 代码树容器高度     | `420px` |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `entry`        | 入口文件，默认打开 | -       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `show-sidebar` | 是否默认显示侧边栏 | `false` |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 默认激活文件`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在围栏代码块的信息字符串中添加 `:active` 标记，可以将该文件设为默认激活的文件：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: code-tree`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts] :active")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [utils.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export const noop = () => {}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[code-tree](dir)` 嵌入一个目录作为代码树。目录中的文件会被自动加载并渲染。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree](./src)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`dir` 支持以下路径前缀：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 前缀 | 说明                             |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | -------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@`  | 相对于 VitePress `srcDir`        |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `/`  | 相对于 VitePress 项目根目录      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -    | 相对于当前 markdown 文件所在目录 |`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 嵌入属性`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="源码" height="500px" entry="index.ts" show-sidebar=true](./src)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### CodeTreePluginOptions`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface CodeTreePluginOptions {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 代码树容器默认高度`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default '420px'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height?: string | number`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 忽略文件的 glob 路径模式`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 在通过嵌入语法从目录加载文件时生效`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * node_modules 和 .DS_Store 始终会被忽略`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default []`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ignores?: string[]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 资源文件加载器`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"   * 使用 `@[code-tree](dir)` 嵌入目录时，用于加载资源文件")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 自定义加载器会合并到内置加载器之前，因此具有更高优先级`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default []`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  loaders?: CodeTreeFileLoader[]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 文件加载器`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`加载器用于嵌入语法加载文件内容。插件内置了常见文件类型的加载器，自定义加载器会合并到内置加载器之前，因此具有更高优先级。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`内置加载器覆盖以下文件类型：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 点文件（`.git*`、`.env*`、`.*ignore`、`.npmrc`）：以纯文本渲染")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.XXXrc` 配置文件（如 `.eslintrc`）：以 JSON 格式渲染")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 图片文件：渲染为 `<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`img`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` 标签，并正确解析 `src`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Shiki 支持的源文件：渲染为带语法高亮的围栏代码块`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codeTree, { loadCodeContent } from 'vitepress-plugin-code-tree'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    codeTree({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      height: '500px',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ignores: ['**/*.test.ts'],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      loaders: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          filter: ['**/*.md'],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          load: (file) => loadCodeContent(file, 'md'),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`filter` 字段接受 glob 模式字符串、glob 模式数组，或接收 `CodeTreeFile` 并返回布尔值的断言函数。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="代码树" show-sidebar`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::code-tree title="代码树" show-sidebar`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`const a = 1`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```rs [main.rs]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`fn main() {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    println!("Hello, world!");`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="代码树" show-sidebar](@/zh)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="代码树" show-sidebar](@/zh)`)])])])])],-1),f[16]||=a(`div`,{"data-filepath":`plugins/codepen.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/codepen.md`},`plugins/codepen.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# CodePen`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-codepen"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 [CodePen](https://codepen.io/) 项目嵌入到 VitePress 页面中。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-codepen`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import codepen from 'vitepress-plugin-codepen'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [codepen()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { codepenPlugin } from 'vitepress-plugin-codepen'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(codepenPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCodepen } from 'vitepress-plugin-codepen/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCodepen(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基本用法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](user/slash)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 带配置的用法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen preview editable title="示例" height="400px" tab="css,result" theme="dark"](leimapapa/RwOZQOW)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性       | 类型      | 默认值     | 说明                         |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | ---------- | ---------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`    | `string`  | -          | 标题                         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `user`     | `string`  | -          | CodePen 用户名（从链接解析） |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `slash`    | `string`  | -          | Pen 标识符（从链接解析）     |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tab`      | `string`  | `'result'` | 默认显示的标签页             |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`    | `string`  | -          | 主题                         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `preview`  | `boolean` | `false`    | 预览模式                     |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `editable` | `boolean` | `false`    | 可编辑模式                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`    | `string`  | `'100%'`   | 宽度                         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`   | `string`  | -          | 高度                         |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](leimapapa/RwOZQOW)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[codepen](leimapapa/RwOZQOW)`)])])])])],-1),f[17]||=a(`div`,{"data-filepath":`plugins/collapse.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/collapse.md`},`plugins/collapse.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Collapse`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-collapse"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`折叠面板容器插件，用于在 Markdown 中创建可折叠的内容区块，支持手风琴模式、卡片样式和单项展开控制。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-collapse`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import collapse from 'vitepress-plugin-collapse'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [collapse()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { collapseMarkdownPlugin } from 'vitepress-plugin-collapse'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(collapseMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithCollapse } from 'vitepress-plugin-collapse/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithCollapse(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: collapse` 容器配合列表来创建可折叠区块。每个列表项为一个折叠面板：")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`第一行为标题，后续缩进内容为面板正文。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基础用法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 标题 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 手风琴模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"添加 `accordion` 启用手风琴模式 —— 同时只能展开一项，展开新项会自动收起其他项。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"配合 `expand` 可在没有显式 `:+` 标记时默认展开第一项。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion expand`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 卡片样式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"添加 `card` 以带边框、圆角的卡片样式渲染容器，可与 `accordion` 组合使用。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse accordion card`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 1`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 1 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 2`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 2 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 问题 3`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  问题 3 的回答`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 单项展开标记`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在标题前添加 `:+` 展开该项，或 `:-` 收起该项。手风琴模式下只有第一个 `:+` 标记生效；")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"未添加标记的项将遵循容器的 `expand` 属性。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :+ 默认展开`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :- 默认收起`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 无标记，遵循容器 expand 属性`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: collapse`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :+ 默认展开`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- :- 默认收起`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 无标记，遵循容器 expand 属性`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 容器属性`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性        | 类型      | 说明                               |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | --------- | ---------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `accordion` | `boolean` | 启用手风琴模式（同时只能展开一项） |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `card`      | `boolean` | 使用卡片样式（带边框和圆角）       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `expand`    | `boolean` | 默认展开状态                       |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 标记说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 标记 | 说明                                 |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | ------------------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `:+` | 展开该项（手风琴模式下仅第一个生效） |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `:-` | 收起该项                             |")])])])])],-1),f[18]||=a(`div`,{"data-filepath":`plugins/field.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/field.md`},`plugins/field.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Field`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-field"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`字段容器插件，用于在 Markdown 中渲染结构化的 API 字段/属性文档，支持字段分组和 JSDoc 风格的标签注解。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-field`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import field from 'vitepress-plugin-field'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [field()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { fieldMarkdownPlugin } from 'vitepress-plugin-field'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(fieldMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithField } from 'vitepress-plugin-field/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithField(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: field` 容器来记录 API 字段/属性，配合 JSDoc 风格标签描述元数据。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基础字段`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户总数。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 字段标签`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持 `@name`、`@type`、`@default`、`@required`、`@deprecated`、`@optional`、`@description` 标签。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field userName`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户的唯一标识名称。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field email`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default example@mail.com`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`联系邮箱。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`此字段已弃用，请使用新字段替代。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field userName`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`用户的唯一标识名称。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field email`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default example@mail.com`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`联系邮箱。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field oldField`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@deprecated`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`此字段已弃用，请使用新字段替代。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 标签说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 标签           | 描述                                             |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | ------------------------------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@name`        | 覆盖字段名称（默认使用 `info` 中的名称）         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@type`        | 字段类型注解                                     |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@default`     | 字段默认值                                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@required`    | 标记为必填字段                                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@optional`    | 标记为可选字段                                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@deprecated`  | 标记为已弃用字段                                 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@description` | 显式描述文本，任何非标签行也会被纳入描述         |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 字段分组`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: field-group` 容器将相关字段组合在一起。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`唯一标识符。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`显示名称。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建时间。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::: field-group`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field id`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@required`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`唯一标识符。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field name`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type String`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@optional`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`显示名称。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field createdAt`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Date`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default Date.now()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`创建时间。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 显式描述`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@description` 标签明确指定描述文本。任何非标签行也会自动作为描述内容。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: field count`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@description 用户总数。此字段表示当前系统中的活跃用户数量。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@type Number`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@default 0`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[19]||=a(`div`,{"data-filepath":`plugins/file-tree.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/file-tree.md`},`plugins/file-tree.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# File Tree`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-file-tree"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`文件树展示插件，用于在 Markdown 中渲染文件目录结构。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-file-tree`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import fileTree from 'vitepress-plugin-file-tree'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [fileTree()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { fileTreeMarkdownPlugin } from 'vitepress-plugin-file-tree'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(fileTreeMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithFileTree } from 'vitepress-plugin-file-tree/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithFileTree(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: file-tree` 容器，通过缩进表示文件层级：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="项目结构"`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- src/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - components/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - Button.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - Nav.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- tsconfig.json`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 围栏代码语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"你也可以使用 `tree` 或 `file-tree` 作为语言标识符的围栏代码块，")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"内容采用 `tree` 命令行工具的输出格式（使用 Unicode 制表符）：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── components/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   ├── Button.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   │   └── Nav.vue`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── index.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── package.json`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── tsconfig.json`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"当你已有 `tree` 命令的输出内容时，可以直接粘贴到 Markdown 中而无需重新格式化，非常方便。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 节点标注`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`两种语法均支持以下节点标注：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 语法            | 说明                 |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| --------------- | -------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `**文件名**`    | 高亮聚焦该文件       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `-- 文件名`     | 标记为删除           |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `++ 文件名`     | 标记为新增           |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `文件名 # 注释` | 添加注释             |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `folder/`       | 标记为文件夹, 并折叠 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `…`             | 省略标记             |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`容器语法示例（含标注）：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree title="变更的文件"`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- src/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- old-file.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - ++ new-file.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - **main.ts** # 核心入口`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - …`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`围栏代码语法示例（含标注）：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```tree")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`.`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── src/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── -- old-file.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── ++ new-file.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── **main.ts** # 核心入口`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`└── …`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- docs`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - .vitepress`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - ++ config.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- page1.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- theme  # 一个 **主题** 目录`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - client`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - components`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - **Navbar.vue**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - composables`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - useNavbar.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - styles`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - navbar.css`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - config.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - node/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- pnpm-lock.yaml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- .gitignore`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- README.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- …`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: file-tree`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- docs`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - .vitepress`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - ++ config.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - -- page1.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - index.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- theme  # 一个 **主题** 目录`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - client`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - components`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - **Navbar.vue**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - composables`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - useNavbar.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - styles`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      - navbar.css`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - config.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  - node/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- package.json`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- pnpm-lock.yaml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- .gitignore`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- README.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- …`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[20]||=a(`div`,{"data-filepath":`plugins/icons.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/icons.md`},`plugins/icons.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 图标`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-icons"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标插件，使用简洁的 `::name::` 语法，在 Markdown 中内联使用来自 [Iconify](https://iconify.design/)、")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[iconfont](https://www.iconfont.cn/) 或 [FontAwesome](https://fontawesome.com/) 的图标。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-icons`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 Iconify 时，还需安装 [`@iconify/json`](https://www.npmjs.com/package/@iconify/json) 或按需安装对应的图标集。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import icons from 'vitepress-plugin-icons'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [icons()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!WARNING]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 由于插件配置复杂度较高，仅推荐在 `vitepress-tuck` 模式下使用。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::` 分隔符内联插入图标，完整语法如下：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::name =size /color::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `name` — 图标名称，格式因提供商而异（见下方说明）。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `=size` — 可选，图标大小。支持 `=宽x高`（如 `=1.2emx1.5em`）或单个 `=宽`（如 `=1.2em`，同时作用于宽高）。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `/color` — 可选，图标颜色，如 `/red` 或 `/#ff0000`。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"也可以在内容前添加提供商名称（`iconify`/`iconfont`/`fontawesome`）来为单个图标覆盖默认提供商，并为 FontAwesome 追加额外样式属性。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Iconify`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标名称使用 `图标集:图标` 格式，如 `tdesign:logo-github-filled`。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled /#f00::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px /#f00::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::skill-icons:vscode-dark =36px::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled /#f00::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::tdesign:logo-github-filled =36px /#f00::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::skill-icons:vscode-dark =36px::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### iconfont`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标名称使用纯名称（不带 `icon-` 前缀），如 `hot` 会解析为 `icon-hot`。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot =24px::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::hot =24px /#f00::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::iconfont hot =24px /#f00::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### FontAwesome`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"图标名称使用纯名称，如 `circle-user`。`border`、`beat`、`rotate-90`、`2xl` 等额外属性追加在名称之后，并转换为 `fa-*` 类名。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::circle-user::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::circle-user =1.2em /#fff::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user border::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user rotate-90::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user beat::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl beat::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user rotate-90::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user beat::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user border::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::fontawesome circle-user 2xl beat::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"插件接受单个提供商配置、配置数组，或不传参数（默认使用 Iconify）。配置多个提供商时，通过 `default: true` 标记 `::name::` 语法使用的默认提供商。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 通用选项`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 选项       | 类型                                       | 默认值      | 说明               |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | ------------------------------------------ | ----------- | ------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `provider` | `'iconify' \\| 'iconfont' \\| 'fontawesome'` | `'iconify'` | 图标提供商         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `default`  | `boolean`                                  | `false`     | 是否作为默认提供商 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `color`    | `string`                                   | `''`        | 默认图标颜色       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `size`     | `string \\| number`                         | `'1.2em'`   | 默认图标大小       |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Iconify`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"继承 [`unplugin-icons`](https://github.com/unplugin/unplugin-icons) 与 [`unplugin-icons/resolver`](https://github.com/unplugin/unplugin-icons#resolver) 的配置项。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'iconify',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  size: '1.2em',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  // unplugin-icons 选项`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  scale: 1,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  customCollections: { /* ... */ },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### iconfont`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 选项     | 类型                               | 默认值    | 说明              |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ---------------------------------- | --------- | ----------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `prefix` | `string`                           | `'icon-'` | 图标类名前缀      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `assets` | `IconAssetLink \\| IconAssetLink[]` | -         | iconfont 资源链接 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'iconfont',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: 'icon-',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  assets: '//at.alicdn.com/w/font_xxx.css',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### FontAwesome`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 选项     | 类型                                                  | 默认值          | 说明                       |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ----------------------------------------------------- | --------------- | -------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `prefix` | `LiteralUnion<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`FontAwesomePrefix`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                     | `'fas'`         | 默认图标前缀               |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `assets` | `Arrayable<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`FontAwesomeAssetBuiltIn`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` \\|`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` IconAssetLink`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` | `'fontawesome'` | 内置资源名或自定义资源链接 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`assets` 选项接受：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `'fontawesome'` — 从 jsDelivr CDN 注入 solid、regular 和 base 套件。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `'fontawesome-with-brands'` — 仅从 jsDelivr CDN 注入 brands 套件。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 自定义的 `.css` 或 `.js` 资源链接。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  provider: 'fontawesome',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  default: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  prefix: 'fas',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  assets: 'fontawesome',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`prefix` 支持以下别名：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 前缀    | 别名  | 对应类名                            |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------- | ----- | ----------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fas`   | `s`   | `fa-solid fa-name`                  |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `far`   | `r`   | `fa-regular fa-name`                |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fal`   | `l`   | `fa-light fa-name`                  |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fat`   | `t`   | `fa-thin fa-name`                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fads`  | `ds`  | `fa-duotone fa-solid fa-name`       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fass`  | `ss`  | `fa-sharp fa-solid fa-name`         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasr`  | `sr`  | `fa-sharp fa-regular fa-name`       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasl`  | `sl`  | `fa-sharp fa-light fa-name`         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fast`  | `st`  | `fa-sharp fa-thin fa-name`          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fasds` | `sds` | `fa-sharp-duotone fa-solid fa-name` |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fab`   | `b`   | `fa-brands fa-name`                 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"也可以在图标名称中使用 `prefix:name` 格式为单个图标指定前缀，如 `fab:github`。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多提供商组合`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`icons([`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'iconify' },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'iconfont', default: true, assets: '//at.alicdn.com/w/font_xxx.css' },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  { provider: 'fontawesome', assets: 'fontawesome' },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`])`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"上述配置中，`::name::` 默认使用 iconfont，`::iconify name::` 和 `::fontawesome name::` 则显式选择其他提供商。")])])])])],-1),f[21]||=a(`div`,{"data-filepath":`plugins/intro.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/intro.md`},`plugins/intro.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 插件总览`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`vitepress-tuck`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 生态提供了丰富的插件，涵盖 Markdown 语法扩展、内容嵌入、代码增强等场景。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`所有插件均支持两种使用方式：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`1.`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **vitepress-tuck 模式（推荐）**`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：通过 `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},"`plugins`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` 配置一键接入`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`2.`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#E1E4E8`,"--shiki-dark-font-weight":`bold`}},` **传统模式**`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`：手动在 VitePress 配置中接入`)])])])])],-1),f[22]||=a(`div`,{"data-filepath":`plugins/jsfiddle.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/jsfiddle.md`},`plugins/jsfiddle.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# JSFiddle`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-jsfiddle"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 [JSFiddle](https://jsfiddle.net/) 项目嵌入到 VitePress 页面中。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-jsfiddle`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import jsfiddle from 'vitepress-plugin-jsfiddle'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [jsfiddle()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { jsfiddleMarkdownPlugin } from 'vitepress-plugin-jsfiddle'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(jsfiddleMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithJsFiddle } from 'vitepress-plugin-jsfiddle/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithJsFiddle(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 基本用法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](user/id)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 带配置的用法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle title="JS Fiddle" theme="dark" tab="js,css,html,result" height="400px"](pengzhanbo/1xbwz2p9)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性     | 类型               | 默认值                 | 说明                                   |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ------------------ | ---------------------- | -------------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`  | `string`           | `'JS Fiddle'`          | 标题                                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`  | `string`           | -                      | 主题（如 `dark`）                      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tab`    | `string`           | `'js,css,html,result'` | 显示的标签页（用逗号分隔，会去除空格） |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`  | `string`           | `'100%'`               | 宽度                                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height` | `string`           | -                      | 高度                                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `ratio`  | `number \\| string` | -                      | 宽高比                                 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](pengzhanbo/1xbwz2p9)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[jsfiddle](pengzhanbo/1xbwz2p9)`)])])])])],-1),f[23]||=a(`div`,{"data-filepath":`plugins/mark.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/mark.md`},`plugins/mark.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 马克笔`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-mark"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"马克笔插件，为 Markdown 添加 `==高亮==` 语法支持，渲染为带滚动触发动画的高亮文本，支持多种颜色变体。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-mark`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import mark from 'vitepress-plugin-mark'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [mark()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { markdownPlugin } from 'vitepress-plugin-mark' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(markdownPlugin) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`在主题中注册组件并引入样式：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithMark } from 'vitepress-plugin-mark/client' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithMark(ctx) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `==` 包裹内联内容，将其渲染为高亮的 `<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`mark`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` 元素。当元素滚动进入视口时，")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`会播放一次从左向右填充的高亮动画，使马克笔文本具有生动的强调效果。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==马克笔== 文本`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==马克笔== 文本`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`标记内部支持完整的内联 Markdown 语法（加粗、斜体、链接、代码等）：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"==**加粗**==、==*斜体*==、==[链接](https://example.com)==、==`代码`==")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"==**加粗**==、==*斜体*==、==[链接](https://example.com)==、==`代码`==")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 颜色变体`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`通过在标记后追加 [attrs 属性语法](https://vitepress.dev/guide/markdown#attribute) 指定不同的高亮颜色。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`变体名与 VitePress 容器类型对应，并自动适配暗色模式。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==默认==`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==note=={.note}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==info=={.info}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==tip=={.tip}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==warning=={.warning}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==caution=={.caution}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==important=={.important}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==默认==`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==note=={.note}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==info=={.info}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==tip=={.tip}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==warning=={.warning}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==caution=={.caution}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==important=={.important}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 变体说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 变体         | 说明                       |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------ | -------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| _(默认)_     | 黄色高亮                   |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.note`      | 青色高亮                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.info`      | 中性灰色高亮               |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.tip`       | 绿色高亮                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.warning`   | 金色/琥珀色高亮            |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.caution`   | 粉色高亮（别名 `.danger`） |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `.important` | 淡紫色高亮                 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 自定义`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`通过覆盖以下 CSS 变量自定义高亮外观，在你的主题样式中覆盖：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:root {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  --vp-mark-linear-color: #f0a;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 变量                     | 说明                       | 默认值                               |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------------ | -------------------------- | ------------------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-text`         | 文本颜色                   | `currentcolor`                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg`           | 背景颜色                   | `transparent`                        |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-linear-color` | 高亮填充颜色               | `#ff0`                               |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg-image`     | 用于填充的背景图像（渐变） | `linear-gradient(to right, ...)`     |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-bg-shift`     | 背景的垂直位置偏移         | `0.55lh`                             |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `--vp-mark-animation`    | 动画简写                   | `mark-highlight 1.25s 0.5s forwards` |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`还可以通过自定义 css 类名，扩展高亮颜色变体：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```css")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`mark.custom {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  --vp-mark-linear-color: #f0a;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==自定义变体=={.custom}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`==自定义变体=={.custom}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`style`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`mark`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`.custom`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c13617`,"--shiki-dark":`#FFAB70`}},`  --vp-mark-linear-color`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`#f0a`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`style`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)])])])])],-1),f[24]||=a(`div`,{"data-filepath":`plugins/mermaid.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/mermaid.md`},`plugins/mermaid.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Mermaid`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-mermaid-tuck"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Mermaid 图表插件，支持在 Markdown 中渲染 Mermaid 图表。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-mermaid-tuck`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import mermaid from 'vitepress-plugin-mermaid-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    mermaid(),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { mermaidMarkdownPlugin, mermaidVitePlugin } from 'vitepress-plugin-mermaid-tuck'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [mermaidVitePlugin({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      options: { theme: 'default' },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    })],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(mermaidMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithMermaid } from 'vitepress-plugin-mermaid-tuck/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithMermaid(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `mermaid` 语言标记的代码块：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart LR`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Start --> Stop`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: Hello John, how are you?`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  John-->>Alice: Great!`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->>John: See you later!`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidPluginOptions`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface MermaidPluginOptions {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * Mermaid 配置项（排除 startOnLoad 和 themeVariables）`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  options?: Omit<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`MermaidConfig,`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` 'startOnLoad'`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` |`),a(`span`,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`}},` 'themeVariables'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> & {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    themeVariables?: MermaidThemeVariables`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 多语言配置`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  locales?: Record<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` MermaidLocaleData`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidThemeVariables`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`支持对 Mermaid 各类图表的主题变量进行自定义，涵盖：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 基础变量（背景色、文字颜色、线条颜色等）`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- C4、Class、ER 图变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Flowchart 变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Gantt 图变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Git 图变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Journey 图变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Pie 图变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Requirement 图变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- State 图变量`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Sequence 图变量`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### MermaidLocaleData`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface MermaidLocaleData {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  chart?: string       // 默认 'Chart'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  source?: string      // 默认 'Source'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fullscreen?: string  // 默认 'Fullscreen'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  download?: string    // 默认 'Download'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 内置语言`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件内置了以下语言的支持：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- English (en, en-US)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 简体中文 (zh, zh-CN)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 日本語 (ja)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 한국어 (ko)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Español (es)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Français (fr)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Русский (ru)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Deutsch (de)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Português (pt)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Flowchart`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`flowchart TB`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->a2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph one`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    a1-->a2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph two`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    b1-->b2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    subgraph three`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    c1-->c2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    end`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    one --> two`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    three --> two`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    two --> c2`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Sequence Diagram`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`sequenceDiagram`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice ->> Bob: Hello Bob, how are you?`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->>John: How about you John?`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob--x Alice: I am good thanks!`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-x John: I am good thanks!`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Note right of John: Bob thinks a long<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>long time, so long<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>that the text does<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`/>not fit on a row.`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Bob-->Alice: Checking with John...`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Alice->John: Yes... John, how are you?`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Animal Example`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`classDiagram`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note "From Duck till Zebra"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Duck`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  note for Duck "can fly<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can swim<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can dive<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`br`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>can help in debugging"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Fish`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal <|-- Zebra`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +int age`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal : +String gender`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +isMammal()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Animal: +mate()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Duck{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +String beakColor`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +swim()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +quack()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Fish{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -int sizeInFeet`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    -canEat()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  class Zebra{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +bool is_wild`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    +run()`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```mermaid")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`gantt`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  dateFormat  YYYY-MM-DD`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  title       Adding GANTT diagram functionality to mermaid`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  excludes    weekends`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'  %% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)')]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section A section`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task            :done,    des1, 2014-01-06,2014-01-08`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Active task               :active,  des2, 2014-01-09, 3d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task               :         des3, after des2, 5d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task2              :         des4, after des3, 5d`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Critical tasks`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Completed task in the critical line :crit, done, 2014-01-06,24h`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Implement parser                    :crit, done, after des1, 2d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for parser             :crit, active, 3d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Future task in critical line        :crit, 5d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Create tests for renderer           :2d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add to mermaid                      :1d`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Documentation`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :active, a1, after des1, 3d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :after a1  , 20h`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :doc1, after a1  , 48h`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  section Last section`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Describe gantt syntax               :after doc1, 3d`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add gantt diagram to demo page      :20h`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  Add another diagram to demo page    :48h`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[25]||=a(`div`,{"data-filepath":`plugins/npm-to.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/npm-to.md`},`plugins/npm-to.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Npm To`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-npm-to"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 npm 命令自动转换为其他包管理器（pnpm、yarn、bun、deno）的对应命令。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-npm-to`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import npmTo from 'vitepress-plugin-npm-to'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    npmTo(['npm', 'pnpm', 'yarn']),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { npmToPlugin } from 'vitepress-plugin-npm-to'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(npmToPlugin, ['npm', 'pnpm', 'yarn'])`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: npm-to` 容器包裹 npm 命令，插件会自动转换为多标签代码组：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`渲染后会显示为多个标签页，每个标签页展示对应包管理器的安装命令：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **npm**: `npm install vitepress-plugin-steps`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **pnpm**: `pnpm add vitepress-plugin-steps`")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **yarn**: `yarn add vitepress-plugin-steps`")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 支持的命令类型`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件支持以下 npm 命令的自动转换：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 命令                    | 示例                  | 支持                           |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------------------- | --------------------- | ------------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm install` / `npm i` | `npm install react`   | 转换为各包管理器的 add 命令    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm install` (无参数)  | `npm install`         | 转换为纯安装命令               |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm uninstall`         | `npm uninstall react` | 转换为各包管理器的 remove 命令 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm run`               | `npm run build`       | 转换为各包管理器的 run 命令    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm create`            | `npm create vite`     | 转换为各包管理器的 create 命令 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm init`              | `npm init -y`         | 转换为各包管理器的 init 命令   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npx`                   | `npx eslint .`        | 转换为各包管理器的等效命令     |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `npm ci`                | `npm ci`              | 转换为各包管理器的 ci 命令     |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 自定义标签`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"可以通过 `tabs` 属性指定要显示的标签：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to tabs="npm,pnpm"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type NpmToPluginOptions =`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | NpmToPackageManager[]   // 如 ['npm', 'pnpm', 'yarn']`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  | {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      tabs?: NpmToPackageManager[]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`type NpmToPackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun' | 'deno'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 默认显示 `npm`、`pnpm`、`yarn` 三个标签")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 支持 `bun` 和 `deno` 的转换")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[26]||=a(`div`,{"data-filepath":`plugins/obsidian.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/obsidian.md`},`plugins/obsidian.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Obsidian`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-obsidian"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`提供 Obsidian 风格 Markdown 语法支持，包括 Wiki 链接、Callout 标注、嵌入文件和注释语法。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-obsidian`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import obsidian from 'vitepress-plugin-obsidian'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    obsidian({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 可选项，全部默认为 true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      callout: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      comment: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      embedLink: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      wikiLink: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { obsidianMarkdownPlugin } from 'vitepress-plugin-obsidian'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(obsidianMarkdownPlugin, {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        callout: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        comment: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        embedLink: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        wikiLink: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Wiki 链接`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Wiki 链接是 Obsidian 中用于链接到其他笔记的语法。使用双括号 `[[]]` 包裹内容来创建内部链接。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名#标题]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名#标题#子标题]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名|别名]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[文件名#标题|别名]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|外部链接]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 文件名搜索规则`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`当使用 Wiki 链接时，文件名会按照以下规则进行搜索匹配：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**匹配优先级：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`1. **完整路径** - 精确匹配文件路径`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`2. **模糊匹配** - 匹配路径结尾的文件名，优先匹配最短路径`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**路径解析规则：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **相对路径**（以 `.` 开头）：相对于当前文件所在目录解析")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **绝对路径**（不以 `.` 开头）：在整个文档树中搜索，优先匹配最短路径")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- **目录形式**（以 `/` 结尾）：匹配该目录下的 `index.md`")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`假设文档结构如下：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```txt")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`docs/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── index.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`├── guide/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   ├── index.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│   └── markdown/`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`│       └── obsidian.md`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在 `docs/guide/markdown/obsidian.md` 中：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 语法           | 匹配结果                                                 |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | -------------------------------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[obsidian]]` | 匹配 `docs/guide/markdown/obsidian.md`（通过文件名检索） |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[./]]`       | 匹配 `docs/guide/markdown/index.md`（相对路径）          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[../]]`      | 匹配 `docs/guide/README.md`（上级目录）                  |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `[[guide/]]`   | 匹配 `docs/guide/README.md`（目录形式）                  |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**外部链接：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|外部链接]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[https://example.com|外部链接]]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**内部锚点链接：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[npm-to]]  `),a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 通过文件名检索 -->`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki 链接]]  `),a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 当前页面使用 heading -->`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[file-tree#配置]]  `),a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 通过文件名检索，并链接到 heading -->`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[npm-to]]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[#Wiki 链接]]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[[file-tree#配置]]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - **Wiki Links**](https://obsidian.md/zh/help/links){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 嵌入内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入语法允许你将其他文件资源插入到当前页面中。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文件名]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文件名#标题]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文件名#标题#子标题]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`文件名搜索规则与 [Wiki 链接](#文件名搜索规则) 相同。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"::: info 以 `/` 开头或 无路径前缀如 `./` 形式的，从 `public` 目录中加载资源")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 图片嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[图片]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[图片|宽度]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[图片|宽度x高度]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`jpg`、`jpeg`、`png`、`gif`、`avif`、`webp`、`svg`、`bmp`、`ico`、`tiff`、`apng`、`jfif`、`pjpeg`、`pjp`、`xbm`")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[tuck-logo.svg]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[tuck-logo.svg|125]]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### PDF 嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> PDF 嵌入需要添加 [vitepress-plugin-pdf](./pdf.md) 插件才能正常工作。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文档.pdf]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文档.pdf#page=1]]  `),a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- #page=1 表示第一页 -->`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[文档.pdf#page=1#height=300]]  `),a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- #page=页码 #height=高度 -->`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`pdf`")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**示例：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[https://plume.pengzhanbo.cn/files/sample-1.pdf]]`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 音频嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[音频文件]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`mp3`、`flac`、`wav`、`ogg`、`opus`、`webm`、`acc`")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 视频嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 视频嵌入需要添加 [vitepress-plugin-video](./video.md) 插件才能正常工作。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**语法：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[视频文件]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[视频文件#height=400]]  `),a(`span`,{style:{"--shiki-light":`#62687b`,"--shiki-dark":`#818e99`}},`<!-- 设置视频高度 -->`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持格式：`mp4`、`webm`、`mov` 等")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 内容片段嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `#标题` 可以嵌入指定标题下的内容片段：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[我的笔记]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[我的笔记#标题一]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`![[我的笔记#标题一#子标题]]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - 插入文件](https://obsidian.md/zh/help/embeds){.readmore}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - 文件格式](https://obsidian.md/zh/help/file-formats){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## Callout`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"Callout 是一种用于突出显示重要信息的语法，类似于 Vitepress 的 `::: note` 提示框语法。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!note]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 内容`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**可选标题：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!tip] 自定义标题`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 内容`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 类型`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Callout 支持以下类型，别名会自动映射到对应的主要类型：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 类型        | 别名                                                                | 说明             |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------------------------------------------------------- | ---------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `note`      | `quote`, `cite`                                                     | 笔记、引用       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `tip`       | `hint` ,`check`, `done`,`success`                                   | 技巧、提示       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `info`      | `todo`                                                              | 信息、待办       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `warning`   | `question`, `help`, `faq`                                           | 警告、问题、帮助 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `caution`   | `attention`, `failure`, `fail`, `missing`, `danger`, `error`, `bug` | 注意、失败、危险 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `important` | `example`                                                           | 重要、示例       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `details`   | `abstract`, `summary`, `tldr`                                       | 详情、摘要       |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**基础用法：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个笔记提示框。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!NOTE]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个笔记提示框。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**带标题：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP] 实用技巧`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 `pnpm` 可以显著加快依赖安装速度。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP] 实用技巧`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 `pnpm` 可以显著加快依赖安装速度。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**多种类型：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!success]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 操作成功完成！`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!warning]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个警告信息。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!caution]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 请谨慎操作，此操作不可撤销。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!success]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 操作成功完成！`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!warning]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一个警告信息。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!caution]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 请谨慎操作，此操作不可撤销。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Details 类型：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`details` 类型会渲染为 HTML `<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`details`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">` 元素，支持折叠展开：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!details]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 点我展开更多内容`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一段隐藏的内容。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!details]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 点我展开更多内容`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> 这是一段隐藏的内容。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - Callout](https://obsidian.md/zh/help/callouts){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 注释`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `%%` 包裹的内容会被当作注释，不会渲染到页面中。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**行内注释：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个 %%行内注释%% 示例。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**块级注释：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个块级注释。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`可以跨越多行。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**行内注释：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个 %%行内注释%% 示例。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个 %%行内注释%% 示例。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**块级注释：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输入：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释之前的内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个块级注释。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`可以跨越多行。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释之后的内容`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**输出：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`注释之前的内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`这是一个块级注释。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`%%`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`可以跨越多行。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[Obsidian 官方 - 注释](https://obsidian.md/zh/help/syntax#%E6%B3%A8%E9%87%8A){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 注意事项`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 这些插件提供的是 **兼容性支持**，并非完全实现 Obsidian 的全部功能`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 部分 Obsidian 特有的功能（如内部链接的图谱视图、双向链接等）不在支持范围内`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 嵌入内容时，被嵌入的页面也会参与主题的构建过程`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- PDF 嵌入需要添加 [vitepress-plugin-pdf](./pdf.md) 插件才能正常工作`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 视频嵌入需要添加 [vitepress-plugin-video](./video.md) 插件才能正常工作`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- 以 `/` 开头或使用 `./` 形式的嵌入资源会从 `public` 目录加载")])])])])],-1),f[27]||=a(`div`,{"data-filepath":`plugins/pdf.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/pdf.md`},`plugins/pdf.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PDF`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-pdf"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PDF 文件嵌入插件，在页面中嵌入 PDF 查看器。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-pdf`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import pdf from 'vitepress-plugin-pdf'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [pdf()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { pdfMarkdownPlugin } from 'vitepress-plugin-pdf'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(pdfMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPDF } from 'vitepress-plugin-pdf/client' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPDF(ctx) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[pdf]()` 嵌入 PDF：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://example.com/sample.pdf)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](./sample.pdf)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 指定页码`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf page="3"](https://example.com/sample.pdf)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf p="3"](https://example.com/sample.pdf)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 配置选项`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf no-toolbar width="100%" height="600px" zoom="100"](https://example.com/sample.pdf)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性         | 类型               | 默认值   | 说明       |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------ | ------------------ | -------- | ---------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`      | `string`           | `'100%'` | 宽度       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`     | `string`           | -        | 高度       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `ratio`      | `number \\| string` | -        | 宽高比     |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `zoom`       | `number`           | `50`     | 缩放比例   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `no-toolbar` | `boolean`          | `false`  | 隐藏工具栏 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[pdf](https://plume.pengzhanbo.cn/files/sample-1.pdf)`)])])])])],-1),f[28]||=a(`div`,{"data-filepath":`plugins/plantuml.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plantuml.md`},`plugins/plantuml.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# PlantUML`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-plantuml"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`PlantUML 图表插件，支持在 Markdown 中渲染 PlantUML 图表。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-plantuml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import plantuml from 'vitepress-plugin-plantuml'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plantuml(),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { plantumlMarkdownPlugin, plantumlVitePlugin } from 'vitepress-plugin-plantuml'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  vite: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plugins: [plantumlVitePlugin()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(plantumlMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    languageAlias: { plantuml: 'txt' },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPlantuml } from 'vitepress-plugin-plantuml/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPlantuml(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `plantuml` 语言标记的代码块：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: 认证请求`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: 认证响应`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 输出格式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"插件支持 `svg`（默认）和 `png` 两种输出格式。可在代码块中指定：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml png")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Example {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +attribute: string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  +method(): void`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`或全局配置默认格式：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`plantuml({ format: 'png' }) // 默认为 'svg'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### PlantumlPluginOptions`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface PlantumlPluginOptions {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 输出格式，可选 'svg' | 'png'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'svg'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  format?: PlantumlFormat`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * PlantUML 服务器 URL`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'https://www.plantuml.com/plantuml'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  serverURL?: string`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 功能特性`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **明暗主题适配** — 自动生成明暗两套图表，跟随 VitePress 主题切换`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **图表 / 源码切换** — 在渲染结果和 PlantUML 源码之间切换查看`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **全屏查看** — 点击全屏按钮以浮层方式查看图表`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **图片下载** — 一键下载当前图表为图片文件`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **多语言支持** — 内置中、英、日、韩、西、法、俄、德、葡九种语言`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **SVG 优化** — 输出 SVG 时自动通过 SVGO 优化，移除冗余样式和背景层`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- **构建缓存** — 渲染结果缓存到磁盘，加速增量构建`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 内置语言`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件内置了以下语言的支持：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- English (en, en-US)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 简体中文 (zh, zh-CN)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 日本語 (ja)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 한국어 (ko)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Español (es)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Français (fr)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Русский (ru)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Deutsch (de)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- Português (pt)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 时序图`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Authentication Request`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Bob --> Alice: Authentication Response`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice -> Bob: Another authentication Request`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Alice <-- Bob: Another authentication Response`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 用例图`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`left to right direction`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "顾客" as customer`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`actor "收银员" as cashier`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`rectangle 收银系统 {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  customer -- (结账)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (结账) -- cashier`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (结账) .> (打印小票) : include`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (结账) .> (支付) : include`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (支付) .> (现金支付)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  (支付) .> (扫码支付)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 类图`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Vehicle`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Car`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Bike`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Car`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Vehicle <|-- Bike`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Engine`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`class Wheel`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Engine`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`Car *-- Wheel`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 活动图`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```plantuml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@startuml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`start`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:用户登录;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`if (验证通过？) then (是)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :进入首页;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  if (有新消息？) then (是)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :显示消息提醒;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  else (否)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    :继续浏览;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  endif`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`else (否)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :显示错误提示;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  :返回登录页;`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`endif`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`stop`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@enduml`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[29]||=a(`div`,{"data-filepath":`plugins/plot.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/plot.md`},`plugins/plot.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Plot`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-plot"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`隐文遮罩插件，通过点击或悬停来显示隐藏的文本内容。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-plot`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import plot from 'vitepress-plugin-plot'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    plot({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      trigger: 'hover',  // 'hover' | 'click'，默认 'hover'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      effect: 'mask',    // 'mask' | 'blur'，默认 'mask'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { plotMarkdownPlugin } from 'vitepress-plugin-plot'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(plotMarkdownPlugin, {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        trigger: 'hover',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        effect: 'mask',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`// .vitepress/theme/index.ts`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithPlot } from 'vitepress-plugin-plot/client' // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithPlot(ctx) // [!code ++]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `!!` 包裹隐藏文本：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`答案是 !!plot!!`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `classname` 设置交互行为：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`!!plot!!{.click .blur}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持以下 `classname`")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.click / .hover`：点击显示 / 鼠标悬停显示")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"- `.blur / .mask`：模糊效果 / 遮罩效果")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface PlotOptions {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 触发方式`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'hover': 鼠标悬停显示`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'click': 点击显示`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'hover'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  trigger?: 'hover' | 'click'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 隐藏效果`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'mask': 遮罩效果（默认）`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * - 'blur': 模糊效果`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default 'mask'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  effect?: 'mask' | 'blur'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`鲁迅说过：“!!我没说这段话!!”`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`鲁迅说过：“!!我没说这段话!!”`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`书山有路勤为径，!!学海无涯苦作舟!!{.click .blur}。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`书山有路勤为径，!!学海无涯苦作舟!!{.click .blur}。`)])])])])],-1),f[30]||=a(`div`,{"data-filepath":`plugins/qrcode.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/qrcode.md`},`plugins/qrcode.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# QRCode`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-qrcode"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`二维码生成插件，将文本或链接生成二维码。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-qrcode`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import qrcode from 'vitepress-plugin-qrcode'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [qrcode()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { qrcodeMarkdownPlugin } from 'vitepress-plugin-qrcode'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(qrcodeMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithQrcode } from 'vitepress-plugin-qrcode/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithQrcode(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入块语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](任意文本)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./caniuse.md)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 带样式的卡片模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="扫码访问"](https://www.baidu.com)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`适合使用于长文本的情况`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: qrcode title="扫码访问"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`https://www.baidu.com`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性       | 类型      | 说明                          |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | ----------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `card`     | `boolean` | 以卡片模式展示                |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`    | `string`  | 卡片标题                      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `logo`     | `string`  | 二维码 logo, link 格式, 可选  |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `logoSize` | `number`  | logo 大小占比, 可选, 默认 0.2 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`    | `number`  | 二维码宽度, 可选              |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](https://www.baidu.com)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**站内链接，自动添加 logo：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./file-tree.md)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode](./file-tree.md)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**使用卡片模式：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="扫码访问 文件树插件"](./file-tree.md)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[qrcode card title="扫码访问 文件树插件"](./file-tree.md)`)])])])])],-1),f[31]||=a(`div`,{"data-filepath":`plugins/repo-card.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/repo-card.md`},`plugins/repo-card.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Repo Card`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-repo-card"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`仓库信息卡片插件，在你的 Markdown 中展示 GitHub/Gitee 仓库的详细信息卡片，支持 embed 内嵌语法和容器多卡片网格布局。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-repo-card`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import repoCard from 'vitepress-plugin-repo-card'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [repoCard()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { repoCardMarkdownPlugin } from 'vitepress-plugin-repo-card'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(repoCardMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithRepoCard } from 'vitepress-plugin-repo-card/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithRepoCard(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[repo]()` 语法嵌入单个仓库信息卡片。不指定 `register` 时默认使用 GitHub。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](owner/name)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](owner/name)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](owner/name)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 显示完整仓库名`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `fullname` 参数显示 `owner/name` 完整路径。对于组织仓库，会自动显示完整名称。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname github](pengzhanbo/vitepress-tuck)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: repo` 容器将多个仓库卡片以响应式网格布局展示。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/core)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 单个仓库卡片`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**GitHub 仓库：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo github](vuejs/vitepress)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**Gitee 仓库：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo gitee](openharmony/kernel_liteos_a)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**显示完整名称：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 多卡片网格布局`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: repo`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo fullname](pengzhanbo/vitepress-tuck)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vite-plugin-mock-dev-server)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/utils)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[repo](pengzhanbo/vuepress-theme-plume)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 卡片信息`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`每个仓库卡片会展示以下信息：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 字段     | 说明                         |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------- | ---------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| 仓库名   | 仓库名称或 `owner/name` 全名 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 可见性   | Public / Private 标签        |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 归档状态 | 已归档时显示警告标记         |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 描述     | 仓库描述文本                 |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 主要语言 | 主要编程语言及对应颜色标记   |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Star 数  | 格式化展示（如 `1.2k`）      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| Fork 数  | 格式化展示（如 `1.2k`）      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 许可证   | 许可证名称（如有）           |`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 组件用法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"你也可以直接使用 `VPRepoCard` 组件：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```vue")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` setup`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"ts"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { VPRepoCard } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress-plugin-repo-card/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vuejs/vitepress"`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"github"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`VPRepoCard`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` repo`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"owner/name"`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` register`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"gitee"`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` fullname`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`template`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Props`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性       | 类型                  | 默认值     | 说明                        |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------------------- | ---------- | --------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `repo`     | `string`              | (必填)     | `owner/name` 格式的仓库标识 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `register` | `'github' \\| 'gitee'` | `'github'` | 仓库平台                    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fullname` | `boolean`             | -          | 显示 `owner/name` 完整名称  |")])])])])],-1),f[32]||=a(`div`,{"data-filepath":`plugins/stackblitz.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/stackblitz.md`},`plugins/stackblitz.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# StackBlitz`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-stackblitz"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将 [StackBlitz](https://stackblitz.com/) 项目嵌入到 VitePress 页面中。支持通过 StackBlitz ID、GitHub 仓库或本地项目文件来嵌入在线编辑器，也可以显示为按钮在新标签页中打开。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-stackblitz`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import stackblitz from 'vitepress-plugin-stackblitz'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [stackblitz()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { stackblitzMarkdownPlugin } from 'vitepress-plugin-stackblitz'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stackblitzMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithStackBlitz } from 'vitepress-plugin-stackblitz/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithStackBlitz(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`插件提供两种语法来嵌入 StackBlitz 项目：用于引用外部项目的嵌入语法，以及将项目文件直接内联在 Markdown 中的容器语法。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 从 StackBlitz ID 嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 从 GitHub 仓库嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz github](user/repo)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 嵌入本地项目`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"在项目目录中放置 `stackblitz.config.json`（或 `.yaml`、`.yml`）配置文件，然后使用 `local` 属性：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](path/to/your/project)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`path` 支持以下路径前缀：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 前缀 | 说明                             |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---- | -------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `@`  | 相对于 VitePress `srcDir`        |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `/`  | 相对于 VitePress 项目根目录      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -    | 相对于当前 markdown 文件所在目录 |`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`查看 [本地项目配置](#本地项目配置) 了解更多。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 按钮模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`显示为按钮，点击后在新标签页中打开项目：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](stackblitz-id)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"也可以结合 `github` 使用：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz github button](user/repo)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`将项目文件直接内联在 Markdown 中，适合简单项目的快速书写和演示：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz title="Project" description="Project description" template="javascript"`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 属性说明`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 嵌入 / 打开选项`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`适用于嵌入语法和按钮模式：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性               | 类型                                 | 默认值      | 说明                              |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------ | ------------------------------------ | ----------- | --------------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `theme`            | `'dark' \\| 'light' \\| 'default'`     | 自动        | 主题，自动跟随 VitePress 暗色模式 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `view`             | `'default' \\| 'preview' \\| 'editor'` | `'default'` | 初始视图模式                      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`           | `number`                             | `400`       | 嵌入高度（仅嵌入模式）            |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`            | `number`                             | -           | 嵌入宽度（仅嵌入模式）            |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `clickToLoad`      | `boolean`                            | `false`     | 显示"点击运行"提示                |')]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `openFile`         | `string \\| string[]`                 | -           | 默认打开的文件                    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `hideExplorer`     | `boolean`                            | `false`     | 隐藏文件浏览器                    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `hideDevTools`     | `boolean`                            | `false`     | 隐藏开发者工具                    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `showSidebar`      | `boolean`                            | `false`     | 显示侧边栏                        |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `terminalHeight`   | `number` (0-100)                     | -           | 终端高度百分比                    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `devToolsHeight`   | `number` (0-100)                     | -           | 开发者工具高度百分比              |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `newWindow`        | `boolean`                            | `false`     | 在新标签页中打开                  |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `forceEmbedLayout` | `boolean`                            | `false`     | 强制嵌入布局（已弃用）            |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `origin`           | `string`                             | -           | StackBlitz EE 实例地址            |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 项目选项`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`仅用于本地项目嵌入模式和容器语法：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性           | 类型                                                                                                            | 默认值 | 说明                         |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| -------------- | --------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `title`        | `string`                                                                                                        | -      | 项目标题（必填）             |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `description`  | `string`                                                                                                        | -      | 项目描述（必填）             |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `template`     | `'angular-cli' \\| 'create-react-app' \\| 'html' \\| 'javascript' \\| 'typescript' \\| 'polymer' \\| 'vue' \\| 'node'` | -      | 项目模板（必填）             |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `dependencies` | `Record<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                                                                                        | -      | npm 依赖                     |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `files`        | `Record<"),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`string,`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` string`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},">`                                                                                        | -      | 项目文件（本地模式自动加载） |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`#### 构建设置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `settings` 前缀属性设置，仅用于本地项目嵌入模式和容器语法：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 属性                   | 类型                              | 默认值   | 说明                 |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------------------- | --------------------------------- | -------- | -------------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsTrigger`      | `'auto' \\| 'save' \\| 'keystroke'` | `'auto'` | 编译触发时机         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsAction`       | `'hmr' \\| 'refresh'`              | `'hmr'`  | 编译更新方式         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `settingsClearConsole` | `boolean`                         | `true`   | 编译后是否清除控制台 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local title="Demo" description="A demo" template="html" settingsTrigger="save" settingsAction="refresh"](path/to/project)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 本地项目配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `@[stackblitz local](path)` 嵌入本地项目时，插件会自动：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"1. 加载指定目录下的所有文件（排除 `node_modules`）")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"2. 按顺序查找 `stackblitz.config.json`、`stackblitz.config.yaml`、`stackblitz.config.yml` 配置文件")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`3. 将配置文件中的选项与加载的文件合并`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"示例 `stackblitz.config.json`：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "$schema": "https://unpkg.com/vitepress-plugin-stackblitz/schema.json",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "title": "Project",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "template": "javascript",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "dependencies": {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "lodash": "^4.17.0"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "settings": {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    "trigger": "save"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> [!TIP]`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> 使用 `$schema` 字段可以在编辑器中获得配置文件的智能提示和校验支持。")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> ```json")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>   "$schema": "https://unpkg.com/vitepress-plugin-stackblitz/schema.json"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`> }`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"> ```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### StackBlitz ID 嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz](sdk-github-project)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 按钮模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](sdk-github-project)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz button](sdk-github-project)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 容器语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz button`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "main": "index.js",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "keywords": ["project"],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "author": "Project Author",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "license": "MIT"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` charset`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"UTF-8"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"viewport"`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` content`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"width=device-width, initial-scale=1.0"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Project</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"````")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: stackblitz button`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yml [config]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`title: Project`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`template: javascript`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`description: Project description`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```json [package.json]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`{`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "name": "project",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "version": "1.0.0",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "description": "Project description",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "main": "index.js",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "keywords": ["project"],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "author": "Project Author",`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  "license": "MIT"`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```js [index.js]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`console.log('Hello StackBlitz!');`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```html [index.html]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<!`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`DOCTYPE`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` html`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` lang`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"en"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` charset`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"UTF-8"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`meta`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"viewport"`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` content`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"width=device-width, initial-scale=1.0"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Project</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`head`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>Hello StackBlitz!</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`h1`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` src`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"./index.js"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`></`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`script`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`body`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`html`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 本地项目嵌入`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[code-tree title="本地项目目录" entry="stackblitz.config.json"](@/snippets/stack)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](@/snippets/stack)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[stackblitz local](@/snippets/stack)`)])])])])],-1),f[33]||=a(`div`,{"data-filepath":`plugins/steps.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/steps.md`},`plugins/steps.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Steps`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-steps"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`步骤容器插件，用于在 Markdown 中创建步骤引导内容。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-steps`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import steps from 'vitepress-plugin-steps'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [steps()],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { stepsMarkdownPlugin } from 'vitepress-plugin-steps'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(stepsMarkdownPlugin)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`同时在主题中引入样式：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import 'vitepress-plugin-steps/style.css'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"使用 `::: steps` 容器包裹步骤内容，每个步骤以无序/有序列表项开头：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第一步`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第一步的描述内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第二步`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第二步的描述内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第三步`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第三步的描述内容，支持标题语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`**渲染结果：**`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: steps`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第一步`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第一步的描述内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第二步`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第二步的描述内容`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`- 第三步`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  第三步的描述内容，支持标题语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)])])])])],-1),f[34]||=a(`div`,{"data-filepath":`plugins/video.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/video.md`},`plugins/video.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# Video`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-video"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`视频嵌入插件，支持 Bilibili、YouTube、AcFun 和 ArtPlayer。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-video`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### vitepress-tuck 模式 <`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` type`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"tip"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>推荐</`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`Badge`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`>`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress-tuck'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import video from 'vitepress-plugin-video'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  plugins: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    video({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      // 可选项，全部默认为 true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      artplayer: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      youtube: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      bilibili: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      acfun: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    }),`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`[查看 **vitepress-tuck** 了解更多](../guide/quick-start.md){.readmore}`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 传统模式`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/config.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { defineConfig } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { videoMarkdownPlugin } from 'vitepress-plugin-video'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default defineConfig({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  markdown: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    config: (md) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      md.use(videoMarkdownPlugin, {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        artplayer: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        youtube: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        bilibili: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        acfun: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { enhanceAppWithVideo } from 'vitepress-plugin-video/client'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enhanceApp(ctx) {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    enhanceAppWithVideo(ctx)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 语法`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Bilibili`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 Bilibili 视频`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](bvid)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](aid cid)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili p2 autoplay time=30](bvid)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 配置项      | 类型               | 描述                           |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ----------- | ------------------ | ------------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `p{number}` | -                  | 视频分 P 号                    |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay`  | `boolean`          | 自动播放                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `time`      | `number \\| string` | 开始时间，秒数或 HH:MM:SS 格式 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### YouTube`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 YouTube 视频`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](video_id)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube autoplay loop start=10 end=120](video_id)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 配置项     | 类型      | 描述           |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay` | `boolean` | 自动播放       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `loop`     | `boolean` | 循环播放       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `start`    | `number`  | 开始时间，秒数 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `end`      | `number`  | 结束时间，秒数 |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### AcFun`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`嵌入 AcFun 视频`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac_id)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### ArtPlayer`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`使用 ArtPlayer 播放器嵌入本地或远程视频：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](/videos/demo.mp4)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer muted autoplay poster="/cover.jpg" width="800px"](/videos/demo.mp4)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 配置项     | 类型      | 默认值   | 描述              |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ---------- | --------- | -------- | ----------------- |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoplay` | `boolean` | `false`  | 自动播放          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `muted`    | `boolean` | `false`  | 静音              |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `loop`     | `boolean` | `false`  | 循环播放          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `volume`   | `number`  | `0.75`   | 音量等级          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `poster`   | `string`  | -        | 封面图片 URL      |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `autoMini` | `boolean` | `false`  | 自 mini模式       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `width`    | `string`  | `"100%"` | 播放器宽度        |')]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`   | `string`  | -        | 播放器高度        |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},'| `ratio`    | `string`  | -        | 比例，例如 "16:9" |')]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"支持 `mp4`, `mp3`, `webm`, `ogg`, `mkv`, `mov` 格式。")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"如果您的视频格式为 `'mpd'`, `'dash'`, 还需要再手动安装 `dashjs` ：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i dashjs`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"如果您的视频格式为 `'m3u8'`, `'hls'`, 还需要再手动安装 `hls.js` ：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i hls.js`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"如果您的视频格式为 `'ts'`, `'flv'`, 还需要再手动安装 `mpegts.js` ：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm i mpegts.js`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`interface VideoPluginOptions {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 ArtPlayer 播放器`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  artplayer?: boolean`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 YouTube 视频嵌入`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  youtube?: boolean`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 Bilibili 视频嵌入`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  bilibili?: boolean`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  /**`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * 启用 AcFun 视频嵌入`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   * @default true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`   */`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  acfun?: boolean`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`}`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 示例`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### Bilibili`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](BV1EZ42187Hg)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[bilibili](BV1EZ42187Hg)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### YouTube`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](0JJPfz5dg20)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[youtube](0JJPfz5dg20)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### AcFun`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac47431669)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[acfun](ac47431669)`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### ArtPlayer`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```md")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](https://artplayer.org/assets/sample/video.mp4)`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`@[artPlayer](https://artplayer.org/assets/sample/video.mp4)`)])])])])],-1),f[35]||=a(`div`,{"data-filepath":`plugins/watermark.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`plugins/watermark.md`},`plugins/watermark.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`watermark`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-light-font-weight":`bold`,"--shiki-dark":`#79B8FF`,"--shiki-dark-font-weight":`bold`}},`# 水印`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`<`),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`NpmBadge`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`=`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`"vitepress-plugin-watermark"`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` />`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`给站点添加水印的插件，纯客户端实现，无需 Node 侧配置。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 安装`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`::: npm-to`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```sh")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`npm install vitepress-plugin-watermark`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:::`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 使用`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"此插件仅提供客户端 `setupWatermark` 函数，需要在主题 `setup` 函数中调用配置水印：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts [.vitepress/theme/index.ts]")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import type { Theme } from 'vitepress'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import DefaultTheme from 'vitepress/theme'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`import { setupWatermark } from 'vitepress-plugin-watermark'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`export default {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  extends: DefaultTheme,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  setup() {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    setupWatermark({ /* 配置水印 */ })`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`} satisfies Theme`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 配置`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"`setupWatermark` 接受一个可选的配置对象：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`setupWatermark({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enabled: true,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content: '我的水印',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontColor: '#76747f',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  globalAlpha: 0.165,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  width: 200,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  height: 200,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  rotate: -22,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontSize: '16px',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontFamily: 'sans-serif',`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| 选项                | 类型                                           | 默认值                                     | 说明                           |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`| ------------------- | ---------------------------------------------- | ------------------------------------------ | ------------------------------ |`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `enabled`           | `boolean \\| ((pageData: PageData) => boolean)` | `true`                                     | 是否启用水印，支持函数动态判断 |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `content`           | `string`                                       | 站点标题                                   | 水印文本内容                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontColor`         | `string`                                       | `'#76747f'`                                | 字体颜色                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `globalAlpha`       | `number`                                       | `0.165`（普通模式）/ `0.005`（盲水印模式） | 透明度                         |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `mode`              | `'default' \\| 'blind'`                         | `'default'`                                | 水印模式，`'blind'` 为盲水印   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `width`             | `number`                                       | —                                          | 单个水印区域宽度               |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `height`            | `number`                                       | —                                          | 单个水印区域高度               |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `rotate`            | `number`                                       | —                                          | 旋转角度                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontSize`          | `string`                                       | —                                          | 字体大小                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontFamily`        | `string`                                       | —                                          | 字体                           |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontStyle`         | `string`                                       | —                                          | 字体样式                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `fontWeight`        | `string`                                       | —                                          | 字体粗细                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `image`             | `string`                                       | —                                          | 图片水印 URL                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `layout`            | `'default' \\| 'grid'`                          | —                                          | 布局模式                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `zIndex`            | `number`                                       | —                                          | CSS 层级                       |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `mutationObserve`   | `boolean`                                      | —                                          | 启用 DOM 变化监听保护          |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `monitorProtection` | `boolean`                                      | —                                          | 启用监控保护                   |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `movable`           | `boolean`                                      | —                                          | 允许拖拽移动水印               |")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"| `parent`            | `Element \\| string`                            | —                                          | 挂载的父元素                   |")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`更多配置项请参阅 [watermark-js-plus](https://github.com/zhensherlock/watermark-js-plus) 文档。`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`## 单页水印`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`通过页面的 frontmatter 控制单个页面的水印行为：`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 启用水印`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark: true`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 自定义文本`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark: 机密文件`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 完全自定义`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  content: 草稿`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  fontColor: '#ff0000'`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  globalAlpha: 0.3`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  rotate: 30`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 禁用特定页面`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```yaml")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`watermark: false`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`### 动态启用水印`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"通过 `enabled` 函数基于页面路径动态控制：")]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```ts")]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`setupWatermark({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  enabled: (pageData) => {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    // 仅在 guide/ 目录下的页面启用水印`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    return pageData.relativePath.startsWith('guide/')`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},"```")])])])])],-1),f[36]||=a(`div`,{"data-filepath":`config.ts`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`config.ts`},`config.ts`)]),a(`div`,{class:`language-ts`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`ts`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`import`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` { defineAdditionalConfig } `),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`from`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},` 'vitepress'`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`export`),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},` default`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` defineAdditionalConfig`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`({`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  lang: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'zh-CN'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  themeConfig: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    nav: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'指南'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/guide/quick-start'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, activeMatch: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/guide/'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'插件'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/plugins/intro'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, activeMatch: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/plugins/'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    ],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    sidebar: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      '/zh/guide/'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: { base: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/guide/'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'快速开始'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'quick-start'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'插件开发'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'plugin-dev'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'包装现有插件'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'wrap-plugin'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Core API'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'api'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Toolkit API'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'toolkit'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`      '/zh/plugins/'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: { base: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'/zh/plugins/'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'概述'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'intro'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'语法扩展'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'缩写词'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'abbr'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'内容注释'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'annotation'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Mark'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'mark'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'隐秘文本'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'plot'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'图标'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'icons'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Obsidian 兼容'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'obsidian'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'内容容器'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'步骤'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'steps'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'字段'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'field'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'折叠内容'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'collapse'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'图表'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Mermaid'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'mermaid'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'PlantUML'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'plantuml'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'代码增强'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'代码块折叠'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'code-collapse'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'文件树'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'file-tree'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'代码树'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'code-tree'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Npm To'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'npm-to'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Can I Use'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'caniuse'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Repo Card'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'repo-card'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'CodePen'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'codepen'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'JSFiddle'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'jsfiddle'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'Stackblitz'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'stackblitz'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'资源嵌入'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'视频'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'video'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'PDF'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'pdf'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'QRCode'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'qrcode'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'工具'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, collapsed: `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`false`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, items: [`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          { text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'水印'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, link: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'watermark'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},` },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      ] },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    search: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      options: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        translations: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          button: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            buttonText: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'搜索'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            buttonAriaLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'搜索'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          modal: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            displayDetails: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'显示详细列表'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            resetButtonTitle: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'清除查询条件'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            backButtonTitle: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'返回'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            noResultsText: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'没有找到相关结果'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            footer: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              selectText: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'选择'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              selectKeyAriaLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'键入'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              navigateText: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'导航'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              navigateUpKeyAriaLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'向上'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              navigateDownKeyAriaLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'向下'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              closeText: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'关闭'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`              closeKeyAriaLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'退出'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`            },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`          },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`        },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    editLink: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      pattern: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'https://github.com/pengzhanbo/vitepress-tuck/edit/main/docs/:path'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'在 Github 编辑此页'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    footer: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      message: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'基于 MIT 许可发布'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      copyright: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"`版权所有 © 2022-${"),a(`span`,{style:{"--shiki-light":`#c62739`,"--shiki-dark":`#F97583`}},`new`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},` Date`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`().`),a(`span`,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`}},`getFullYear`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`()`),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},"} pengzhanbo`"),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    docFooter: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      prev: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'上一页'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      next: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'下一页'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    outline: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      label: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'页面导航'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      level: [`),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`2`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`, `),a(`span`,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`}},`3`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`],`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    lastUpdated: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      text: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'最后更新于'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    notFound: {`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      title: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'页面未找到'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      quote:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      linkLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'前往首页'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`      linkText: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'带我回首页'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    },`)]),o(`
`),a(`span`,{class:`line`}),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    langMenuLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'多语言'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    returnToTopLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'回到顶部'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    sidebarMenuLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'菜单'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    darkModeSwitchLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'主题'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    lightModeSwitchTitle: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'切换到浅色模式'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    darkModeSwitchTitle: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'切换到深色模式'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    skipToContentLabel: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`'跳转到内容'`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`,`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`  },`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`})`)])])])])],-1),f[37]||=a(`div`,{"data-filepath":`index.md`,class:`vp-code-block-title`},[a(`div`,{class:`vp-code-block-title-bar`},[a(`span`,{class:`vp-code-block-title-text`,"data-title":`index.md`},`index.md`)]),a(`div`,{class:`language-md`},[a(`button`,{title:`Copy code`,"data-copied":`Copied`,class:`copy`}),a(`span`,{class:`lang`},`md`),a(`pre`,{class:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabindex:`0`,dir:`ltr`},[a(`code`,null,[a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`layout`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`home`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`title`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`hero`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  name`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  text`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`增强 vitepress 配置，提供插件能力。`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  actions`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - `),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`text`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`开始使用`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      link`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`/zh/guide/quick-start`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`    - `),a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`text`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`Github`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      link`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`https://github.com/pengzhanbo/vitepress-tuck`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`      theme`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`alt`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`  image`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`:`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`    src`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`/tuck-logo.svg`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#11782a`,"--shiki-dark":`#85E89D`}},`    alt`),a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`: `),a(`span`,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`}},`VitePress Tuck`)]),o(`
`),a(`span`,{class:`line`},[a(`span`,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`}},`---`)])])])])],-1)]),_:1})])}var g=s(p,[[`render`,h]]);export{f as __pageData,g as default};