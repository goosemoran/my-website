# Claude Code 提示词：BELLOTA BLANCA 三语影视版权贸易展示网站

> 用法：在空文件夹里启动 Claude Code，把下面“=== 提示词开始 ===”到“=== 提示词结束 ===”之间的全部内容粘贴给它。
> 如果同一个压缩包里带有 `src/` 和 `img/`（原网站源码和图片），把它们解压到项目目录再粘贴，Claude Code 会优先沿用，不用重写。

=== 提示词开始 ===

你是资深前端工程师兼文案编辑。请为客户做一个**三语（EN / ES / 中文）、单页应用式的 B2B 影视版权贸易展示网站**，无需后端，纯静态（HTML + CSS + 原生 JS），可直接部署到任何静态托管。

## 0. 工作方式

1. 先读项目目录。如果已有 `src/app.js`、`src/head.html`、`src/data.js`、`img/`，说明这是已完成网站的源码：以它们为准，只做我接下来提出的修改，不要重写。
2. 如果目录是空的，按本文从零实现。缺失的图片用同尺寸的占位图（海报 2:3，剧照 16:9），文件名按附录中的路径放好，我之后替换。
3. 先给我一个不超过 10 行的计划，然后直接动手，不要停下来等我确认。
4. 做完后用 Playwright（或任何无头浏览器）截图检查：桌面 1360px、手机 390px、中文、深色模式各一张，确认**无横向滚动、控制台无报错**。把发现的问题修好再交付。

## 1. 公司与定位

- 公司：**BELLOTA BLANCA FILM & PRODUCCIONES S.L.**（白橡树电影制片公司），马德里注册，2019 年成立。
- 业务：以**版权销售与发行**为先，其次代理，再其次联合制作。把中国影视内容（电影、剧集、动画、竖屏剧、纪录片）卖给西班牙与拉丁美洲的电视台、流媒体平台和发行商；同时代理国际内容进入中国和 YouTube 渠道。
- 自有制作只有 **Smart Pulse（智汇中拉）**，第二季制作中。**其他全部是版权交易/发行资源**，页面上要明确区分“自有制作”和“合作片库”。
- 姊妹公司：**XIN MOTION PICTURE**（上海，纪录片、电影联合制作、AI 竖屏内容）；**广州 AI 内容工厂基地**（AI Content Factory Base，开发并制作 AI 内容，含竖屏与横屏，可联系索要样片）。
- 合作方：我们与中国头部制作公司合作，并把内容带到电影节和影视市场（页面里以“Where we work”呈现）。
- Logo：`img/logo.png`（白色橡树圆形标志，深蓝底使用）。导航栏左上角用它，页面里再用一个很淡的水印。

## 2. 技术与结构

- 最终产物是单个 `index.html`（必须是完整文档：`<!doctype html><html lang><head><meta charset><meta viewport><title>`…）。源码分为 `src/head.html`（CSS，含 `<style>`）、`src/app.js`（逻辑）、`src/data.js`（`const ITEMS=[...]`，数据的唯一来源，直接编辑它即可）、`src/build.py`（把三者拼成页面；拼好后确保外面包着完整的 html/head/body）。如果压缩包里的 `index.html` 已是完整页面，可直接打开预览。
- **哈希路由**：`#home #catalogue #mechasia #rights #animation #network #coproduction #about #contact`。切页回到顶部，`aria-current="page"` 标记当前导航。
- 三语：`const i=(en,es,zh)=>…` 取当前语言；数据里的多语字段用 `{en,es,zh}`。语言切换按钮在顶栏（EN / ES / 中文），首次按浏览器语言选择（zh→中文，es/pt→西语，其他→英文），选择存 `localStorage`（用 try/catch 包起来）。
- 无框架、无构建依赖。字体用 Google Fonts：Bodoni Moda（标题）、Hanken Grotesk（正文）、IBM Plex Mono（元数据）、Noto Sans/Serif SC。
- 图片 `loading="lazy"`、`decoding="async"`、写好 `alt`；首屏图 eager。
- 无障碍：按钮用 `<button>`，焦点环清晰，对比度达标，尊重 `prefers-reduced-motion`。
- 所有外链 `rel="noopener"`。表单只在前端生成 `mailto:` 邮件（见 §6），不要伪造“已提交”。

## 3. 视觉设计

概念：**电影市场的“销售手册”**。深蓝页眉与英雄区，下面是象牙色目录地板；元数据像市场 screener 一样用等宽字体；金色只用于细线、标签和唯一的主按钮。

色彩变量（浅色/深色两套，深色用 `prefers-color-scheme` 并支持 `data-theme`）：

```
--navy:#102F4B; --gold:#C6A46A; --ivory:#F5F3EE; --char:#263746;
浅色: --bg:#F5F3EE --surface:#FBFAF6 --surface-2:#ECE8DD --ink:#263746 --ink-soft:#56657A --head:#102F4B --rule:#D8D1C0 --gold-ink:#8A6824 --band:#102F4B
深色: --bg:#091B2B --surface:#0F2840 --surface-2:#133252 --ink:#DDE3E8 --ink-soft:#9DAAB8 --head:#F3EEE2 --rule:#244462 --gold-ink:#D6B67A --band:#0A2238
```

要点：
- 标题 Bodoni Moda 700，`text-wrap:balance`；英雄区 `clamp(38px,5.4vw,76px)`。
- `.eyebrow`：Plex Mono 11.5px，字距 .16em，大写，金色。
- 主按钮金底深字；次按钮描边；带 `→` 箭头。
- **背景要有设计感但克制**：页面背景是固定的细腻渐变层（象牙色 + 极淡的对角纹和竖向网格线），区块交替使用 `.band`（深蓝渐变）、`.tint`（surface-2 斜纹）；页脚深蓝渐变加 logo 水印。不要用大面积插画。
- 卡片：海报 2:3，hover 轻微上浮；元数据行用等宽字体。
- 响应式：手机宽度 16px 边距；导航在窄屏折叠为汉堡菜单；任何 `grid-template-columns` 不要写在 inline style 里（会覆盖媒体查询），用 class。

## 4. 页面与内容

> 英文为主文案，ES/ZH 需提供对应译文。西语不要出现性别化称呼；“受众”一律写 **“Ages 6+ / Mayores de 6 años / 6岁以上”**，不加性别。

### 4.1 Home（#home）
1. **英雄区**：Eyebrow “International Content Sales & Rights Trading”；H1 “Connecting Chinese Content with the Ibero-American Market”；副标 “Connecting Chinese film, television and animation content with broadcasters, streaming platforms and distributors across Spain and Latin America.”；按钮 “Explore our catalogue”（金）、“Contact sales”；一行统计 `{N} featured titles · 3,000+ vertical dramas`；右侧是“中国 — 西班牙 — 拉美”的路线示意（路线 + 地区标注）。
2. **Who we are**：“A rights company with a Madrid base and a Chinese catalogue.” + 简介 + 四个数据块：2019 Founded / Madrid European base / {N} Featured titles / 3,000+ Vertical dramas。
3. **Our business**：“Sell first. Represent second. Build with partners third.” 三栏：Content Sales / Rights Trading / International Distribution，各 3 个要点（见原站文案，沿用上面的业务定位撰写）。
4. **Featured content**：“Six titles to start with.”，6 张卡片（featured 项优先：MECHASIA、Smart Pulse 等），按钮 “Full catalogue”。
5. **Content categories**：“Browse by what you programme.” 分类卡片，点击进入目录对应分类；数量 0 时显示 “On request”；竖屏剧卡片显示 **“3,000+”** 而不是真实数量。
6. **Vertical-drama band**（见 §4.9）。
7. **Our markets**：“Spain and Latin America, reached from China.” 说明 Smart Pulse 第一季已在拉美 5 国、10+ 频道播出，并在波哥大视听市场展映；按钮 “See the network”。
8. **Our partnerships**：只列允许公开的合作方：CICC（China Intercontinental Communication Center，Smart Pulse 的制作合作方）、Alpha Group（**只写成“Animation: Super Wings, Balala the Fairies, Quantum Heroes, Infinity Nado and more”这样的项目列表，不展示合作关系细节**）、Original Dream · F5（MECHASIA 制作方）。脚注：“Only partners cleared for public display are listed here. Target markets are shown separately on the Distribution Network page and are not partners.”
9. **Content wanted band**（见 §4.10）。

### 4.2 Content Catalogue（#catalogue）
- 标题 “Browse titles, check rights, send an inquiry.”；说明：“Availability shown here is indicative. Every right, territory and window is confirmed against the signed licence for that title.”
- 分类标签（带数量）：All / BL Drama · Thailand & China / Animation & Family / Vertical Drama / Documentary / Variety & Formats / Films。**Vertical Drama 标签显示 “3,000+”**。**没有单独的 Children’s & Family 分类**（已并入 Animation & Family）。
- 筛选：搜索（片名/类型/导演/演员）、Genre、Territory、Status、Source、Reset。结果计数 “X / N titles”。
- 选中 **Vertical Drama** 时：**不显示网格和计数**，只显示 §4.9 的大横幅，突出“Request the full list”按钮。选中 BL Drama 时在网格上方显示 BL 说明条（见 §4.8）。
- 点击卡片打开**详情弹窗**：海报/剧照、中英西片名、简介、元数据表（国家/地区、授权类型、状态、地区、语言、集数/时长、导演、主演、首播、平台、受众）、“Rights offered” 标签、按钮 “Inquire about this title”（预填询价表单）。弹窗可用 Esc 关闭，焦点管理正确。
- 卡片元数据行不要重复时长（如 “45 min · 45 min”）。

### 4.3 Mechasia & Toys（#mechasia）——重点项目
- 导航里这一项用金色强调。英雄区：Eyebrow “Flagship project · global rights open”，大标题 **MECHASIA / AWAKENING**（第二行金色），一句剧情，标签：3D realistic · Sci-fi · 26 × 13′ · 338 min · Ages 6+ · Third season of the franchise · **IP 10th anniversary, 2026** · **Fan base in Asia** · Seeking toy & derivative partners。按钮 “Inquire: global rights”、“Title sheet”。右侧海报 `img/mc/poster.jpg`。
- 两个标签页（`data-mtab`）：**Series & global rights** 和 **Derivatives & toy partners**。
- **Series 页**：
  - “Rights offered — Worldwide, territory by territory.” 四个权利模块：TV broadcast / Streaming & digital / IP licensing & merchandise / Toy distribution。
  - 剧情：“A thousand-year war, paused.” 讲述 Lumisarians 与 Nocturians 两大机甲阵营的千年战争，Divine Wind 的飞船带着和平信息出现，Gear 号的年轻继承人 Epsilon 离家寻找偶像，被 Wicked Hunting Group 欺骗卷入帮派战争，Gladius 王子追来……
  - 数据块：**2026 · IP 10th anniversary**；**Asia · Established fan base**；**4.71% · Peak TVRR, #1 in channel**（脚注：“Historical broadcast data from prior Chinese TV broadcasts of the franchise; channel-level detail on request.”）。
  - 规格表：26 × 13′、338 min、Ages 6+、3D realistic、Sci-fi、原语言 Chinese、配音/字幕 On request。
  - 剧照墙 `img/mc/still1–6.jpg`；制作方 Original Dream（Guangzhou Yuanchu Animation Co., Ltd. · presented by F5），数据 4,000+ minutes produced / 50+ digital artists / 300+ projects。
- **Toys 页**（衍生品开发与玩具伙伴，iUBEST 玩具线）：
  - 标题 “We are looking for toy and derivative partners.” 说明：MECHASIA 已有**双形态**玩具线，在中国和亚洲销售强劲，围绕**六个载具主题**；现在寻找合作伙伴把它带到世界其他地区，并围绕剧集开发新产品。
  - 四个数据块：6 Vehicle themes / 7 Collectible heroes / China & Asia Proven sales / 6+ Age grading（另有 24 pcs per carton）。
  - **“Six themes. Seven heroes. Two forms each.”**：每个玩具是“机器人英雄 + 载具”二合一（**不要使用 “transform/变形” 一词**，用 “switch between robot and vehicle” / “dual-form” / “双形态”）。载具给每款玩具一个主题；第一波 5 个首发角色，第二波再加 2 个，货架上可摆满全部 7 个。7 个英雄（用 `img/mc/<id>.jpg`）：

    | 图片 id | 角色 | 货号 | 载具主题 | 高度 | 波次 | 角色简介（EN，ES/ZH 需译） |
    |---|---|---|---|---|---|---|
    | divine | Divine Wind | WY1001 | Sports car 跑车 | 15 cm | 1 | Determined to choose his own path, he founds the Liberty’s Bounty and steps into the war between the Lumisarians and the Nocturians, becoming an enemy to both factions. |
    | gladius | Prince Gladius | WY1002 | Truck 卡车 | 16.6 cm | 1 | A new-age hero on the surface, in truth a prince seeking revenge who carries out his plans with calm, cool-headed rationality. |
    | epsilon | Epsilon | WY1003 | Train 火车 | 15 cm | 1 | A young rookie who, by chance, acquires powerful technology and is swept into the middle of the action. |
    | mystic | Mystic Lock | WY1004 | Lunar rover 月球车 | 15 cm | 1 | A member of the Four Wicked Hunting Group who often vanishes without a trace. Role: sniper and necromancer. |
    | machiapter | Machiapter | WY1005 | Helicopter 直升机 | 15 cm | 1 | A lazy genius and a core member of the main combat faction. |
    | deathtone | Deathtone | WY1006 | Sports car 跑车 | 15 cm | 2 | The comic relief. Cunning strategist of the hunting group and Epsilon’s companion, always scheming, but later reformed. |
    | sidewinder | Sidewinder | WY1007 | Spaceship 飞船 | 15 cm | 2 | A passionate hero with a heart full of fire and a core member of the main combat faction. |

  - **三种合作方式 “Three ways in.”**：Distribution partner（区域分销商和进口商，把整套 7 英雄引入本地市场：开窗彩盒，每外箱 24 件，6+）；IP licensing（品牌方和制造商授权 MECHASIA: AWAKENING IP，在自己地区生产/销售产品）；Derivative development（合作开发新产品和系列延伸，超出现有 7 款，有剧集在屏幕上背书）。说明：剧集和玩具一起卖——平台播出让玩具有了荧幕，玩具让剧集有了货架。
  - **零售包装 “The figure sells itself.”**：Open-window colour box（货架上展示玩具）、Dual-form artwork（机器人与载具并带标注）、Range panel（侧面展示整个系列）、Age grading 6+（每盒标注，24 pcs/外箱）；图用 `img/mc/packaging.jpg`。
  - **Trade information 规格表**：Item no. / Character / Alt. form / Height / Pack size (mm) / Pcs/ctn / Carton (mm) / Wave。默认包装尺寸 200 × 85 × 260，外箱 535 × 418 × 540，每箱 24 件，毛重相关字段 0.121；WY1002 为 220 × 85 × 285 / 535 × 458 × 592 / 0.145。脚注 “Prices, EAN / barcodes, weights and shipping terms on request.” **不要写价格**。
  - 底部 CTA：“Distributor, licensee or developer?” 按钮 “Start a conversation”（预填询价）。

### 4.4 Rights & Sales（#rights）
- Eyebrow “Rights & sales”，“The core of the company: licensing Chinese content abroad.”
- 双入口：**BUY CONTENT**（国际买家：浏览目录、询价、谈判；按钮 “Open catalogue”“Inquiry”）与 **SUBMIT YOUR CONTENT**（制作公司/动画工作室/版权方提交项目；我们也为中国发行和 YouTube 频道收购内容；按钮 “Submit a project”）。
- “What we do — Six services around one rights chain.”：International Content Sales / Content Acquisition / Territory Licensing / Distribution Representation / Platform Licensing / Rights Management。
- “How a deal moves — From browsing to a signed licence.”：Browse a title → See the rights → Pick territory and platform → Send your interest → Sales follow-up。
- “Rights we license”：Free TV、Pay TV、SVOD、AVOD、FAST/CTV、Social & digital（含竖屏）、Format、Remake；末句 “Rights offered vary by title. All rights information is confirmed against the actual licence before any offer.”

### 4.5 Animation（#animation）
- 标题 “Animation projects for television, streaming and licensing.” 分类名统一为 **Animation & Family / 动画与儿童家庭**。
- 顶部：MECHASIA 旗舰（全球授权播放 + 寻找衍生品玩具伙伴，链接到 #mechasia）。
- **7 个 Alpha Group 动画项目**（只写项目，不写合作关系）：目前针对 **Ibero-America** 做**剧集发行**和**玩具发行**。附录有清单与图片。
- 关注领域：Television distribution / Streaming distribution / Children’s channels / Family entertainment / Toy distribution / Animation IP licensing / Local-language adaptation / Co-production。按钮 “Ask about animation rights”。

### 4.6 Distribution Network（#network）
- “China — Spain — Latin America.” 内容来自中国，交易在马德里完成，买家在伊比利亚和拉美。**金色标记的国家**是已播出 Smart Pulse 的市场（第一季，5 个国家；完整国家名单“按需提供”），其余为目标市场，**注明 “Target market, no partnership implied”**。
- 用内联 SVG 画一张简化的世界/区域示意图（西班牙、葡萄牙、拉美各国，巴西作为葡语独立市场，美国西语市场为下一阶段）。
- 五层网络：Chinese content resources / Spain business base（马德里办公室）/ Latin American buyers / TV and streaming channels / Rights markets（如波哥大视听市场）。

### 4.7 Co-production & IP（#coproduction）
- 六项：Chinese–Spanish projects、Chinese–Latin American projects、IP development、Format adaptation、Remake opportunities、Animation co-production。
- “In practice”：Smart Pulse Season 2——中国与拉美的纪录片，拉美主持人先走访在本国的中资企业，再到中国探访技术源头；2026 年开拍，2027 年播出（西语与葡语）。按钮 “Open title”“Propose a project”。

### 4.8 BL Drama · Thailand & China（分类名）
- 中文名 **“耽美剧 · 泰国与中国”**，西语 “Series BL · Tailandia y China”。
- 说明条：**What is a BL (耽美) drama?** 讲清楚——两位男主的爱情故事类型；中文叫耽美（danmei），日语及国际通称 BL（Boys’ Love），泰国叫 “Y series”；起源于日本漫画和同人小说，2010 年代在泰国成为主流电视类型，在中国常改编自热门网络小说；有忠实的国际粉丝，会跟着演员和故事跨平台追，所以在流媒体和 YouTube 表现好。目标受众是年轻、以女性和 LGBTQ+ 为主的观众。分组展示：Thai titles / Chinese titles / China–Thailand co-productions。
- **《室友 / Roommate the Series》属于这个分类**（中泰合拍，32 集，每集 1–3 分钟），不要放进竖屏剧。

### 4.9 Vertical Drama（竖屏剧）横幅 `vdBand`
- 大数字 **“3,000+ vertical micro dramas”**。
- Eyebrow “Vertical drama library · Latin America distribution”；标题 “One library, three kinds of vertical content.”
- 三个标签：**AI vertical micro drama** / **Live-action micro drama for English and Spanish-speaking regions** / **Chinese micro drama**（不再有“AI 动画片”）。
- 说明：“We distribute the library in Latin America. Contact us for the title list, with synopses, languages and available rights.”
- 主按钮：**“Request the full list”**（`data-contact="buy"`，跳联系页）；在首页版本里再加一个次按钮 “About vertical dramas” 跳到分类页；在分类页本身不显示这个次按钮。
- **目录里不要放竖屏剧样片条目**（数据里没有 vertical 的 ITEMS，片单一律“联系索取”）。

### 4.10 Content wanted band `wantBand`
“We buy and take on content too.” 如果您拥有剧集、电影、动画或竖屏剧的版权，我们可在**中国发行**或通过 **YouTube 发行渠道**分发；请发来片名、您持有的权利、可授权的地区。两个标签：Distribution in China / YouTube distribution channels；按钮 “Submit your content”。联系方式用 §6 的邮箱和 WhatsApp。

### 4.11 About us（#about）
- 标题 “Connecting China, Spain and Latin America through content and rights.”
- **Company profile**：BELLOTA BLANCA FILM & PRODUCCIONES S.L.（白橡树电影制片公司）是马德里注册的公司，在中国与西语、葡语世界之间销售、代理并制作视听内容；与中国头部制作公司合作并把内容带到电影节和市场；与上海的中国公司 XIN MOTION PICTURE 一起在市场两端工作；首要业务是版权销售，代理、收购、联合制作和 IP 开发随后。
- **Our companies**（`dl.spec` 三行）：Spain — BELLOTA BLANCA FILM & PRODUCCIONES S.L.（马德里，国际版权销售与代理）；China — XIN MOTION PICTURE（上海，纪录片、电影联合制作与 AI 竖屏内容）；China — AI Content Factory Base（广州，开发并制作 AI 内容，含竖屏与横屏；金色按钮 “Request sample reels” → 联系页）。
- **Where we work**：China business network（头部制作公司、动画集团、版权方）/ Festivals & markets / Spain business base: Madrid / Latin American market network（电视台、平台、发行商）。
- **不要**放创始人个人简介、**不要**放公司发展年表。

### 4.12 Contact（#contact）
- “Tell us what you want to buy, sell or build.” 三个标签页（`data-ctab`）：Buy content（面向电视台、平台、发行商）/ Submit content（面向中国制作公司与版权方）/ Partner with us（面向海外发行商、制作人、机构）。
- 联系信息（见 §6），每个邮箱旁有 “Copy” 按钮，WhatsApp 是 `wa.me` 链接。
- 表单字段随标签变化（姓名、公司、国家、邮箱、感兴趣的片名/权利/地区/平台、留言），提交后生成 `mailto:` 并提示用户在邮件客户端里发送。支持从详情弹窗、Mechasia、竖屏剧、AI 样片按钮**预填**。

### 4.13 页脚与法律
- 页脚：logo 水印、口号 “Connecting China, Spain and Latin America through Content & Rights.”，Explore / Company 两列链接，Privacy Policy / Cookie Policy / Legal Notice / Terms of Use（点开是简短弹窗，内容写合理的占位法律文本，并在文末注明“由公司法务确认”）。
- 版权行：“© BELLOTA BLANCA FILM & PRODUCCIONES S.L. · Madrid, Spain · {邮箱} · WhatsApp {号码}” 与 “Titles, artwork and trademarks belong to their respective owners. Availability is indicative and subject to contract.”

## 5. 数据模型（`ITEMS`）

```
{ id, cats:[...], en, zh, img, genres:[...], country:'cn|gc|th|cnth', lic:'own|alpha|od|lib|pkg',
  status:'done|prod', terr:'latam|iberoam|world|world_noyt|world_nojpkr|world_noyt_jpkr|latam_etc|request',
  langs, lines:{en,es,zh}, rights:['tv','svod','avod','fast','license','toy','social'...], audience, note:{…},
  dir, cast, prem:{…}, plat:{…}|string, eps:{…}, run, featured }
```
- `cats` 取值：`drama`（BL）、`animation`、`short`（竖屏剧，**无条目**）、`doc`、`variety`（无条目则显示 On request）、`film`。**没有 `kids`**。
- 授权类型文案：own “Own production · BELLOTA BLANCA / 自有制作 · 白橡树”；alpha/lib “Partner catalogue / 合作片库”；od “Original Dream · Guangzhou Yuanchu Animation Co., Ltd. · presented by F5”；pkg “Latin America film package”。
- 状态：done “Completed / 已完成”，prod “In production / 制作中”。
- 地区文案：latam 拉丁美洲；iberoam 伊比利亚美洲；world 全球；world_noyt 全球（YouTube 除外）；world_nojpkr 全球（日韩除外）；world_noyt_jpkr 全球（YouTube、日本、韩国除外）；request 按地区洽谈。

### 精选条目
- **sp2 Smart Pulse · Season 2 / 智汇中拉·第二季**：自有制作，制作中，30 分钟纪录片 + 若干短视频；`doc`，`img/sp/s2.jpg`。
- **sp1 Smart Pulse · Season 1 / 智汇中拉·第一季**：自有制作，已完成，4 集纪录片；`doc`，`img/sp/key.jpg`。
- **mecha MECHASIA: AWAKENING / 机变战队：觉醒**：`animation`，Original Dream，全球，权利 tv/svod/avod/fast/license/toy，26×13′，audience “Ages 6+”，featured，海报 `img/mc/poster.jpg`。note：“3D realistic style, sci-fi. Third season of the franchise; the IP reaches its 10th anniversary in 2026, with an established fan base in Asia. Dual-form robot + vehicle toy line available for licensing: 7 heroes, 15–16.6 cm.”

### 电影片包（`film`，来源 Greater China，Latin America，lic=pkg，status=done）
| id | English | 中文 | 时长 | 类型 | 图片 |
|---|---|---|---|---|---|
| f01 | Fight for Tomorrow | 拼命三郎 | 101 min | action, drama | img/f/01.jpg |
| f02 | Burning Stars | 孤星計劃 | 105 min | history, suspense | img/f/02.jpg |
| f03 | Go For Broke | 重生 | 115 min | action, crime | img/f/03.jpg |
| f04 | I Want To Be Rich | 做個有錢人 | 107 min | comedy, romance | img/f/04.jpg |
| f05 | Invincible Swordsman | 笑傲江湖 | 119 min | action, martial | img/f/05.jpg |
| f06 | I Like a Rolling Stone | 出走的決心 | 106 min | drama, women | img/f/06.jpg |
| f07 | Yin Yang Mansion | 鴛鴦樓·驚魂 | 95 min | thriller | img/f/07.jpg |
| f08 | Crypto Storm | 反貪風暴之加密危機 | 101 min | action, drama | img/f/08.jpg |
| f09 | Endless Battle | 無間一戰 | 87 min | action, crime | img/f/09.jpg |
| f10 | Prison Flowers | 女子監獄 | 88 min | action, crime | img/f/10.jpg |
| f11 | Tainted Love | 鸚鵡殺 | 100 min | romance, thriller | img/f/11.jpg |
| f12 | Breakout Brothers | 逃獄兄弟 | 91 min | action, crime | img/f/12.jpg |
| f13 | Breakout Brothers 2 | 逃獄兄弟2 | 85 min | action, crime | img/f/13.jpg |
| f14 | Breakout Brothers 3 | 逃獄兄弟3 | 86 min | action, crime | img/f/14.jpg |
| f15 | Say Yes Again | 再說一次我願意 | 95 min | romance | img/f/15.jpg |
| f16 | G Storm | G風暴 | 93 min | action | img/f/16.jpg |
| f17 | All's Well End's Well 2020 | 家有囍事2020 | 98 min | comedy | img/f/17.jpg |
| f18 | Do You Love Me As I Love You | 可不可以，你也剛好喜歡我 | 108 min | drama | img/f/18.jpg |
| f19 | Wolf Pack | 狼群 | 105 min | action | img/f/19.jpg |
| f20 | Deep Evil | 緝魔 | 107 min | crime, thriller | img/f/20.jpg |
| f21 | An Inspector Calls | 浮華宴 | 92 min | comedy | img/f/21.jpg |
| f22 | Midnight Garage | 三更車庫 | 108 min | horror, thriller | img/f/22.jpg |
| f23 | Flash Point | 導火線 | 88 min | action, martial | img/f/23.jpg |
| f24 | Dragon Tiger Gate | 龍虎門 | 96 min | action, martial | img/f/24.jpg |
| f25 | Seven Swords | 七劍 | 150 min | action, epic | img/f/25.jpg |
| f26 | Love Trilogy | 三十分鐘戀愛 | 105 min | romance | img/f/26.jpg |
| f27 | Happy Family | 風流家族 | 100 min | comedy | img/f/27.jpg |
| f28 | The Mirror | 怪談之魔鏡 | 87 min | horror | img/f/28.jpg |
| f29 | Magnificent Team | 非常警察 | 92 min | action | img/f/29.jpg |
| f30 | Troublesome Night 4 | 陰陽路4：與鬼同行 | 97 min | horror | img/f/30.jpg |
| f31 | Troublesome Night | 陰陽路 | 98 min | horror | img/f/31.jpg |
| f32 | Eighteen Springs | 半生緣 | 126 min | romance | img/f/32.jpg |
| f33 | Those Were the Days | 慈雲山十三太保 | 90 min | action, drama | img/f/33.jpg |
| f34 | The Bride with White Hair | 白髮魔女傳 | 89 min | action, romance | img/f/34.jpg |
| f35 | The Bride with White Hair II | 白髮魔女傳2 | 80 min | action | img/f/35.jpg |
| f36 | Princess Fragrance | 香香公主 | 87 min | action, history | img/f/36.jpg |
| f37 | Ghost for Sale | 捉鬼專門店 | 85 min | comedy, horror | img/f/37.jpg |
| f38 | The Romance of Book and Sword | 書劍恩仇錄 | 87 min | action, drama | img/f/38.jpg |
| f39 | Kids from Shaolin | 少林小子 | 103 min | action, martial | img/f/39.jpg |
| f40 | The Enigmatic Case | 碧水寒山奪命金 | 87 min | action, mystery | img/f/40.jpg |
| f41 | White Haired Devil Lady | 白髮魔女傳 | 90 min | drama | img/f/41.jpg |
| f42 | Boiil | 波依拉 | 94 min | drama | img/f/42.jpg |

> 片单里《逃獄兄弟》《慈雲山十三太保》的预告片链接曾与别的片子重复，**不要放预告片链接**，除非我另行提供。每部写一句 `lines` 简介；导演、主演、年份没有可靠来源时留空，不要编造。

### BL 剧（`drama`）
| id | English | 中文 | 国家 | 集数 | 时长 | 地区 | 平台 | 图片 |
|---|---|---|---|---|---|---|---|---|
| bl_blossom | Meet You at the Blossom | 花开有时，颓靡无声 | cnth | 12 episodes | 45 min | Worldwide | Tencent Video, iQIYI, YouTube | img/bl/p01.jpg |
| bl_shore | To My Shore | 吾岸 | cn | 15 episodes | 45 min | Worldwide excl. Japan & Korea | GagaOOLala, Rakuten Viki, friDay Video | img/bl/p02.jpg |
| bl_rival | My Rival and Me | 对家和我 | cn | 11 episodes | 30 min | Worldwide excl. YouTube | GagaOOLala, YouTube | img/bl/p03.jpg |
| bl_fall | First Fall | 叶落归池 | cn | 13 episodes | 40 min | On request | To be announced | img/bl/p04.jpg |
| bl_wuhui | Wuhui | 污秽 | cn | 14 episodes | 45 min | On request | To be announced | img/bl/p05.jpg |
| bl_jwy | Journey with You | 与君同 | cn | 8 episodes | 50 min | Worldwide excl. YouTube, Japan & Korea | GagaOOLala, FriDay Video, Heavenly | img/bl/p06.jpg |
| bl_crush | Secret Crush on You | 非你默属 | th | 15 episodes | 45 min | On request | YouTube | img/bl/p07.jpg |
| bl_ride | My Ride | 驶入心途 | th | 15 episodes | 45 min | Latin America etc. (confirm) | GagaOOLala, WeTV | img/bl/p08.jpg |
| bl_sky | You’re My Sky | 你是我的天空 | th | 8 episodes | 50 min | On request | One 31, WeTV, Rakuten Viki, Rakuten TV | img/bl/p09.jpg |
| bl_room | Something in My Room | 我和我的鬼室友 | th | 10 episodes | 45 min | On request | CH3Plus, YouTube, Rakuten TV | img/bl/p10.jpg |
| bl_year | The Year Book | 我们的年鉴 | th | 8 episodes | 45 min | On request | YouTube, iQIYI, Rakuten TV, U-NEXT, Viki | img/bl/p11.jpg |
| bl_blood | Golden Blood | 金色之血 | th | 8 episodes | 50 min | On request | Channel 3, WeTV, YouTube | img/bl/p12.jpg |
| bl_second | Second Chance | 此情可待 | th | 6 episodes | 45 min | On request | LINE TV, YouTube, Viki | img/bl/p13.jpg |
| bl_tux | The Tuxedo | 裁定终身 | th | — | 45 min | On request | GagaOOLala, WeTV | img/bl/p14.jpg |
| bl_roommate | Roommate the Series | 室友 | cnth | 32 episodes | 1–3 min | Worldwide | YouTube | img/bl/p15.jpg |

> 国家代码：cn 中国、th 泰国、cnth 中泰合拍。“request” 表示按地区洽谈。《The Tuxedo》集数有来源冲突，**不显示集数**。

### Alpha Group 动画项目（`animation`，目标 Ibero-America，权利 tv/svod/toy，只写项目）
| id | English | 中文 | 类型 | 图片 |
|---|---|---|---|---|
| al_superwings | Super Wings | 超级飞侠 | edutainment, adventure, animation3d | img/al/superwings.jpg |
| al_balala | Balala the Fairies | 巴拉拉小魔仙 | fantasy, family, animation3d | img/al/balala.jpg |
| al_dinoster | Quantum Heroes: Dinoster | 量子特攻：恐龙战士 | adventure, comedy, animation3d | img/al/dinoster.jpg |
| al_nado | Infinity Nado | 飓风战魂 | action, adventure, animation3d | img/al/nado.jpg |
| al_screechers | Screechers Wild: Skygen World | 声鸣战士 | action, scifi, family, animation3d | img/al/screechers.jpg |
| al_armorhero | Armor Hero Star Ray | 铠甲勇士·刑天 | action, adventure, family, animation3d | img/al/armorhero.jpg |
| al_goat | Pleasant Goat and Big Big Wolf | 喜羊羊与灰太狼 | comedy, family, animation2d | img/al/goat.jpg |

## 6. 联系信息（固定写法）

- Sales & distribution：`distri-cicc@foxmail.com`
- Founder & partnerships：`moranproduction@foxmail.com`
- WhatsApp：`+86 135 3305 9826`（链接 `https://wa.me/8613533059826`）
- WeChat：`moranproduction`
- Office：Madrid, Spain
- Languages：English · Español · 中文

## 7. 文案与内容规则（务必遵守）

1. 不使用 “transform / 变形” 描述玩具，用 “switch between robot and vehicle”“dual-form”“双形态”。
2. 受众统一 “6+”，不写性别；西语不用性别化称呼。
3. 竖屏剧写 **3,000+**，类型为 AI竖屏剧、面向英语与西语地区的真人竖屏剧、中文竖屏剧；片单**联系索要**，不在目录展示样片。
4. 《室友》放“耽美剧 · 泰国与中国”。动画与儿童家庭合并为一类。
5. 自有制作只有 Smart Pulse；Alpha 只以项目名出现；合作方只展示可公开的（CICC、Alpha 项目、Original Dream · F5）。
6. 来源冲突或不确定的数字（如 Smart Pulse 的国家/频道数、BL 剧的授权地区）在页面上用保守表述：Smart Pulse 第一季写 “5 countries · 10+ channels”；不确定地区写 “By territory, on request”。**不要编造奖项、收视率、价格**。4.71% 的 TVRR 来自产品册，需保留脚注说明是该系列此前在中国电视台播出的历史数据。
7. 所有可授权权利以实际合同为准，页面里保留 “indicative / subject to contract” 的说明。
8. 西语与中文要地道，不要机翻腔；专有名词保持原文（MECHASIA、Smart Pulse、BELLOTA BLANCA、XIN MOTION PICTURE）。

## 8. 验收清单

- [ ] 9 个路由都能打开，导航高亮正确，切换语言后当前页面内容全部更新。
- [ ] 目录：分类标签数量正确（All 67、BL 15、Animation & Family 8、Vertical Drama 显示 3,000+、Documentary 2、Variety 0/On request、Films 42）；选中 Vertical Drama 时没有网格。
- [ ] 《室友》只出现在 BL 分类。
- [ ] Mechasia 页面出现 “IP 10th anniversary, 2026” 与 “Fan base in Asia”。
- [ ] About 里有三家公司（马德里、上海、广州 AI 内容工厂基地），没有创始人简介和年表。
- [ ] 全站没有 “2,000+” 或 “transform”。
- [ ] 手机 390px 无横向滚动；深色模式对比度正常；控制台零报错。
- [ ] 邮箱、WhatsApp 链接可用；表单生成的 `mailto:` 内容正确。

做完请用 5 行以内告诉我：改了什么、有哪些你不确定的地方、我需要补充哪些素材。

=== 提示词结束 ===
