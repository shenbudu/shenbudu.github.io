import{_ as a,c as n,f as i,o as t}from"./app-CsMVs4h3.js";const e={};function l(p,s){return t(),n("div",null,s[0]||(s[0]=[i(`<h2 id="🧩-什么是-java" tabindex="-1"><a class="header-anchor" href="#🧩-什么是-java"><span>🧩 什么是 Java？</span></a></h2><p>Java 是一种广泛使用的 <strong>面向对象编程语言</strong>，最早由 Sun Microsystems 公司于 1995 年发布，现由 Oracle 公司维护和发展。其核心理念是：<strong>一次编写，到处运行（Write Once, Run Anywhere）</strong>。</p><h2 id="🚀-java-的主要特点" tabindex="-1"><a class="header-anchor" href="#🚀-java-的主要特点"><span>🚀 Java 的主要特点</span></a></h2><ul><li><strong>跨平台性</strong>：通过 JVM（Java 虚拟机）实现代码在不同系统上运行。</li><li><strong>面向对象</strong>：支持封装、继承和多态，代码结构清晰、易于维护。</li><li><strong>丰富的类库</strong>：拥有庞大的标准库和第三方生态，开发效率高。</li><li><strong>安全性高</strong>：Java 拥有健壮的内存管理机制和访问控制策略。</li><li><strong>多线程支持</strong>：原生支持并发编程，适合构建高性能应用。</li></ul><h2 id="🔧-java-应用场景" tabindex="-1"><a class="header-anchor" href="#🔧-java-应用场景"><span>🔧 Java 应用场景</span></a></h2><ul><li>Web 应用（如：Spring 框架）</li><li>Android 开发（Kotlin 和 Java 均支持）</li><li>企业级后台系统（如银行、电信系统）</li><li>大数据处理（Hadoop 生态）</li><li>分布式系统和微服务架构</li></ul><h2 id="🧱-java-文章格式规范" tabindex="-1"><a class="header-anchor" href="#🧱-java-文章格式规范"><span>🧱 Java 文章格式规范</span></a></h2><h3 id="🧿文章结构规范" tabindex="-1"><a class="header-anchor" href="#🧿文章结构规范"><span>🧿文章结构规范</span></a></h3><ul><li>为了构建一个高可读、易维护的 Java 知识库，所有笔记文章请严格遵循以下格式标准：</li></ul><table><thead><tr><th><strong>规范项</strong></th><th><strong>要求</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>标题格式</td><td>二级起始</td><td>使用 <code>##</code> 开始主标题，子内容用 <code>###</code>。</td></tr><tr><td>内容结构</td><td>模块化</td><td>包括简介、正文、代码示例、要点、小结、订正等结构。</td></tr><tr><td>段落规范</td><td>简明扼要</td><td>每段控制在 2-4 句内，可使用列表清晰表达。</td></tr><tr><td>代码块规范</td><td>高亮带注释</td><td>使用 <code>\`\`\`java [文件名.java]</code>，Plume 可自动标注复制按钮。</td></tr><tr><td>表格规范</td><td>简洁清晰</td><td>使用标准 Markdown 表格，避免嵌套复杂表格。</td></tr><tr><td>Mermaid 图表</td><td>可选增强</td><td>用于展示结构/流程，使用 \`\`\`mermaid 块。</td></tr><tr><td>图片插入</td><td>路径+说明</td><td><code>![说明](路径)</code>，必须包含替代文本，提升可访问性。</td></tr><tr><td>外链引用</td><td>统一格式</td><td>使用 <code>[标题](URL)</code>，注明来源（如官方文档）。</td></tr><tr><td>术语一致性</td><td>统一标准</td><td>如 <code>JVM</code>、<code>JDK</code>，首次出现加粗并解释，之后统一用标准缩写。</td></tr><tr><td>更新记录</td><td>明确标注</td><td>每篇文章末尾添加：<code>最后更新：2025-07-02，JDK 17</code>。</td></tr></tbody></table><h3 id="🧰-markdown-示例模板-建议复制使用" tabindex="-1"><a class="header-anchor" href="#🧰-markdown-示例模板-建议复制使用"><span>🧰 Markdown 示例模板（建议复制使用）</span></a></h3><p>以下是每篇 Java 笔记推荐使用的结构模板：</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes github-light github-dark vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">title: Java 集合框架详解</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">date: 2025-07-02</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">icon: structure</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tag:</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 集合</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 面试常考</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">---</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 📖 简介</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">本篇讲解 Java 中常用的集合类，包括 List、Set、Map 等。集合是 Java 基础中的重点与难点。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## ✨ 核心概念</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`List\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：有序可重复，如 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`ArrayList\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`Set\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：无序不可重复，如 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`HashSet\`</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \`Map\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">：键值对结构，如 </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`HashMap\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 💡 示例代码</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`java [HashSetExample.java]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import java.util.HashSet;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">public class HashSetExample {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    public static void main(String[] args) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        HashSet&lt;String&gt; set = new HashSet&lt;&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set.add(&quot;Java&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set.add(&quot;Python&quot;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        set.add(&quot;Java&quot;); // 重复元素将被忽略</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        System.out.println(set);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip 说明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">HashSet 不允许重复元素，插入顺序不保证。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## 🔍 重点整理</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- \`HashSet\` 基于哈希表实现，查找快，元素无序。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- \`TreeSet\` 自动排序，实现了 \`SortedSet\` 接口。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- 遍历集合可使用 \`for-each\` 或 \`Iterator\`。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## ❓常见问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 💬 Q：List 和 Set 的区别？  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">A：List 可重复、有序；Set 不可重复、无序或有序（如 TreeSet）。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## ✅ 本章小结</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">集合框架是 Java 编程的基础，合理选用集合可以大幅提升程序性能与可读性。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">## 🛠️ 订正与补充</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: details 📅 2025-07-02 更新说明</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">增加了 TreeSet 的结构说明，补充了遍历方式。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">最后更新：2025-07-02，JDK 17</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="🧭-目录规划建议" tabindex="-1"><a class="header-anchor" href="#🧭-目录规划建议"><span>🧭 目录规划建议</span></a></h3><p>为保证条理清晰，知识库建议以编号+模块命名：</p><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;"><pre class="shiki shiki-themes github-light github-dark vp-code"><code class="language-text"><span class="line"><span>01-java-intro.md           Java 简介</span></span>
<span class="line"><span>02-java-datatype.md        数据类型</span></span>
<span class="line"><span>03-java-oop.md             面向对象三大特性</span></span>
<span class="line"><span>04-java-collection.md      集合框架</span></span>
<span class="line"><span>05-java-exception.md       异常处理机制</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="📌-总结" tabindex="-1"><a class="header-anchor" href="#📌-总结"><span>📌 总结</span></a></h2><p>本构建前言明确了 Java 知识库的结构规范、写作模板和样式要求。强烈建议每篇文章统一使用此结构，确保整个知识库风格一致、内容严谨，便于维护和扩展。</p><p>若在编写中发现模板不足或样式冲突，可通过在文章末尾添加订正补充区块方式进行修正。</p><blockquote><p>🛠 最后更新：2025-07-02，适用于 JDK 17，Plume 主题 v2+</p></blockquote>`,20)]))}const d=a(e,[["render",l]]),r=JSON.parse('{"path":"/notes/Code/Java-Knowledge-Base/","title":"Java 知识库构建前言","lang":"zh-CN","frontmatter":{"title":"Java 知识库构建前言","createTime":"2025/07/02 22:22:00","tags":["Java","前言"],"description":"🧩 什么是 Java？ Java 是一种广泛使用的 面向对象编程语言，最早由 Sun Microsystems 公司于 1995 年发布，现由 Oracle 公司维护和发展。其核心理念是：一次编写，到处运行（Write Once, Run Anywhere）。 🚀 Java 的主要特点 跨平台性：通过 JVM（Java 虚拟机）实现代码在不同系统上...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 知识库构建前言\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://me.tometo.me/notes/Code/Java-Knowledge-Base/"}],["meta",{"property":"og:site_name","content":"Tritium"}],["meta",{"property":"og:title","content":"Java 知识库构建前言"}],["meta",{"property":"og:description","content":"🧩 什么是 Java？ Java 是一种广泛使用的 面向对象编程语言，最早由 Sun Microsystems 公司于 1995 年发布，现由 Oracle 公司维护和发展。其核心理念是：一次编写，到处运行（Write Once, Run Anywhere）。 🚀 Java 的主要特点 跨平台性：通过 JVM（Java 虚拟机）实现代码在不同系统上..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"前言"}],["meta",{"property":"article:tag","content":"Java"}]]},"readingTime":{"minutes":3.5,"words":1050},"git":{},"autoDesc":true,"filePathRelative":"notes/Code/Java-Knowledge-Base/README.md","headers":[],"categoryList":[{"id":"4358b5","sort":10001,"name":"notes"},{"id":"b5f10a","sort":10012,"name":"Code"},{"id":"bb832f","sort":10019,"name":"Java-Knowledge-Base"}]}');export{d as comp,r as data};
