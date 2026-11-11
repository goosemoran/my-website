/* ---------- state & helpers ---------- */
const VIEWS=["home","catalogue","mechasia","rights","animation","network","coproduction","about","contact"];
let lang="en";
try{const s=localStorage.getItem("bb-lang");if(s)lang=s;else{const n=(navigator.language||"en").toLowerCase();lang=n.startsWith("zh")?"zh":n.startsWith("es")||n.startsWith("pt")?"es":"en"}}catch(e){const n=(navigator.language||"en").toLowerCase();lang=n.startsWith("zh")?"zh":n.startsWith("es")?"es":"en"}
let view="home";
const F={q:"",cat:"all",genre:"all",terr:"all",status:"all",src:"all"};
let contactTab="buy";
const i=(en,es,zh)=>lang==="es"?es:lang==="zh"?zh:en;
const pick=o=>o?(o[lang]||o.en||""):"";
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $=s=>document.querySelector(s);
const MAIL="distri-cicc@foxmail.com",MAIL2="moranproduction@foxmail.com",MAIL3="bellotablancafilm@gmail.com",WA="8613533059826",PHONE="+86 135 3305 9826";
const byId=id=>ITEMS.find(x=>x.id===id);

/* ---------- vocab ---------- */
const NAV={home:["HOME","INICIO","首页"],catalogue:["CONTENT CATALOGUE","CATÁLOGO","版权目录"],mechasia:["MECHASIA & TOYS","MECHASIA Y JUGUETES","机变战队·衍生品"],rights:["RIGHTS & SALES","DERECHOS Y VENTAS","版权贸易"],animation:["ANIMATION","ANIMACIÓN","动画"],network:["DISTRIBUTION NETWORK","RED DE DISTRIBUCIÓN","发行网络"],coproduction:["CO-PRODUCTION & IP","COPRODUCCIÓN E IP","联合制作与IP"],about:["ABOUT US","NOSOTROS","关于我们"],contact:["CONTACT","CONTACTO","联系我们"]};
const nav=k=>NAV[k][lang==="es"?1:lang==="zh"?2:0];
const CATS=[
 ["drama","BL Drama · Thailand & China","Series BL · Tailandia y China","耽美剧 · 泰国与中国","Boys’ Love (耽美) romance series from Thailand and China, for platforms, broadcasters and YouTube.","Series románticas Boys’ Love (耽美) de Tailandia y China, para plataformas, cadenas y YouTube.","泰国与中国的耽美（BL）爱情剧集，面向平台、电视台与YouTube。"],
 ["animation","Animation & Family","Animación y familiar","动画与儿童家庭","Animated series, films and IP, plus family entertainment, for TV, streaming and licensing.","Series, películas e IP de animación y entretenimiento familiar para TV, streaming y licencias.","面向电视、流媒体与授权的动画剧集、电影与IP，以及儿童与家庭内容。"],
 ["short","Vertical Drama","Series verticales","竖屏剧","3,000+ vertical micro dramas: AI vertical drama, live action for English and Spanish-speaking regions, and Chinese titles. Full list on request.","Más de 3.000 microdramas verticales: series verticales con IA, acción real en inglés y español, y títulos chinos. Lista completa bajo petición.","3000+竖屏短剧：AI竖屏剧、面向英语与西语地区的真人竖屏剧、中文竖屏剧。完整片单可索取。"],
 ["doc","Documentary","Documental","纪录片","History, culture, society and business documentary.","Documental de historia, cultura, sociedad y empresa.","历史、文化、社会与商业纪录片。"],
 ["variety","Variety & Formats","Entretenimiento y formatos","综艺与Format","Shows, reality and format rights.","Programas, reality y derechos de formato.","综艺、真人秀与Format版权。"],
 ["film","Films","Cine","电影","Features from Greater China, from classics to recent releases.","Largometrajes de la Gran China, de clásicos a estrenos recientes.","大中华区电影，从经典到近年新作。"]];
const catName=k=>{const c=CATS.find(x=>x[0]===k);return c?c[lang==="es"?2:lang==="zh"?3:1]:k};
const GEN={action:["Action","Acción","动作"],drama:["Drama","Drama","剧情"],comedy:["Comedy","Comedia","喜剧"],romance:["Romance","Romance","爱情"],thriller:["Thriller","Thriller","惊悚"],horror:["Horror","Terror","恐怖"],crime:["Crime","Crimen","犯罪"],martial:["Martial Arts","Artes marciales","武侠功夫"],history:["History","Historia","历史"],suspense:["Suspense","Suspense","悬疑"],mystery:["Mystery","Misterio","推理"],epic:["Epic","Épica","史诗"],women:["Women's","Drama femenino","女性题材"],documentary:["Documentary","Documental","纪录片"],business:["Business & Society","Economía y sociedad","经贸与社会"],scifi:["Sci-Fi","Ciencia ficción","科幻"],fantasy:["Fantasy","Fantasía","奇幻"],adventure:["Adventure","Aventura","冒险"],family:["Family","Familiar","家庭"],edutainment:["Edutainment","Edutainment","寓教于乐"],animation2d:["2D Animation","Animación 2D","2D动画"],animation3d:["3D Animation","Animación 3D","3D动画"],bl:["BL","BL","耽美"],vertical:["Vertical screen","Pantalla vertical","竖屏"],ai:["AI content","Contenido con IA","AI内容"],campus:["Campus","Universitario","校园"],sports:["Sports","Deportes","运动"],supernatural:["Supernatural","Sobrenatural","超自然"],showbiz:["Showbiz","Mundo del espectáculo","娱乐圈"],youth:["Youth","Juvenil","青春"]};
const gen=k=>(GEN[k]||[k,k,k])[lang==="es"?1:lang==="zh"?2:0];
const ST={done:["Completed","Finalizado","已完成"],prod:["In production","En producción","制作中"]};
const st=k=>ST[k][lang==="es"?1:lang==="zh"?2:0];
const LIC={own:["Own production · BELLOTA BLANCA","Producción propia · BELLOTA BLANCA","自有制作 · 白橡树"],alpha:["Partner catalogue","Catálogo de socios","合作片库"],od:["Original Dream · Guangzhou Yuanchu Animation Co., Ltd. · presented by F5","Original Dream · Guangzhou Yuanchu Animation Co., Ltd. · presentado por F5","Original Dream · 广州原初动画有限公司 · F5出品"],lib:["Partner library","Catálogo de socios","合作片库"],pkg:["Latin America film package (Aug 2025 edition)","Paquete de cine para América Latina (ed. ago. 2025)","拉美电影片包（2025年8月版）"]};
const lic=k=>LIC[k][lang==="es"?1:lang==="zh"?2:0];
const CTRY={cn:["China","China","中国"],gc:["Greater China","Gran China","大中华区"],th:["Thailand","Tailandia","泰国"],cnth:["China–Thailand co-production","Coproducción China–Tailandia","中泰合拍"]};
const ctry=k=>(CTRY[k]||[k,k,k])[lang==="es"?1:lang==="zh"?2:0];
const TERR={latam:["Latin America","América Latina","拉丁美洲"],iberoam:["Ibero-America","Iberoamérica","伊比利亚美洲"],request:["By territory, on request","Por territorio, bajo petición","按地区洽谈"],world:["Worldwide","Todo el mundo","全球"],world_noyt:["Worldwide, excluding YouTube","Todo el mundo, excepto YouTube","全球（YouTube除外）"],world_noyt_jpkr:["Worldwide, excluding YouTube, Japan and Korea","Todo el mundo, excepto YouTube, Japón y Corea","全球（YouTube、日本、韩国除外）"],world_nojpkr:["Worldwide, excluding Japan and Korea","Todo el mundo, excepto Japón y Corea","全球（日本、韩国除外）"],latam_etc:["North America, Latin America, Korea, Hong Kong / Macau / Taiwan, Southeast Asia (excl. Thailand)","Norteamérica, América Latina, Corea, Hong Kong / Macao / Taiwán, Sudeste Asiático (excl. Tailandia)","北美、拉美、韩国、港澳台、东南亚（泰国除外）"]};
const terr=k=>(TERR[k]||[k,k,k])[lang==="es"?1:lang==="zh"?2:0];
const tg=it=>it.terr==="request"?"request":it.terr.startsWith("world")?"world":"latam";
const RIGHTS={free:["Free TV","TV en abierto","免费电视"],pay:["Pay TV","TV de pago","付费电视"],tv:["TV broadcast","Emisión en TV","电视播出"],svod:["SVOD","SVOD","SVOD订阅点播"],avod:["AVOD","AVOD","AVOD广告点播"],fast:["FAST / CTV","FAST / CTV","FAST / CTV"],digital:["Digital & vertical-screen platforms","Plataformas digitales y verticales","数字与竖屏平台"],social:["Social media","Redes sociales","社交媒体"],format:["Format","Formato","Format版权"],remake:["Remake","Remake","翻拍权"],toy:["Toy distribution","Distribución de juguetes","玩具分销"],license:["IP licensing & merchandise","Licencias de IP y merchandising","IP授权与衍生品"]};
const rt=k=>(RIGHTS[k]||[k,k,k])[lang==="es"?1:lang==="zh"?2:0];
const LANGS={zh:["Chinese","Chino","中文"],es:["Spanish / Portuguese (broadcast)","Español / portugués (emisión)","西班牙语 / 葡萄牙语（播出）"],en:["English","Inglés","英语"],zhonly:["Chinese dubbing only","Solo doblaje en chino","仅中文配音"],Mandarin:["Mandarin Chinese","Chino mandarín","国语"],Thai:["Thai","Tailandés","泰语"]};
const lg=k=>LANGS[k]?LANGS[k][lang==="es"?1:lang==="zh"?2:0]:(k||i("On request","Bajo petición","洽谈"));
const title1=it=>lang==="zh"&&it.zh?it.zh:it.en;
const title2=it=>lang==="zh"?(it.zh&&it.zh!==it.en?it.en:""):(it.zh&&it.zh!==it.en?it.zh:"");
const isOwn=it=>it.lic==="own";

/* ---------- inline pieces ---------- */
const LOGO=`<img src="img/logo.png" alt="" width="54" height="54">`;
function poster(it,opts={}){
  const own=it.lic==="own";
  const badge=it.status==="prod"?`<span class="badge prod">${esc(st("prod"))}</span>`:own?`<span class="badge">${esc(i("Own production","Producción propia","自有制作"))}</span>`:"";
  if(it.img){
    const sq=it.sq?` sq" style="--bgimg:url('${it.img}')`:"";
    return `<div class="poster${sq}">${badge}<img src="${it.img}" alt="${esc(title1(it))}" loading="${opts.eager?"eager":"lazy"}" decoding="async"></div>`;
  }
  const h=(it.id.split("").reduce((a,c)=>a+c.charCodeAt(0),0)*37)%360;
  const kind=it.cats[0]==="short"?"VERTICAL · 9:16":it.cats[0]==="drama"?"BL SERIES":"TITLE";
  return `<div class="poster"><div class="art" style="--h:${h}"><i>${kind}</i><b>${esc(title1(it))}</b><small>${esc((it.genres||[]).slice(0,2).map(gen).join(" · "))}</small></div>${badge}</div>`;
}
function metaLine(it){
  const bits=[];
  if(it.year)bits.push(`<b>${esc(it.year)}</b>`);
  const e=it.eps?pick(it.eps):"";
  if(e)bits.push(esc(e));
  if(it.run&&!/total/.test(it.run)&&!e.includes("30"))bits.push(esc(it.run));
  return bits.join(" · ");
}
function card(it){
  return `<button class="card" data-open="${it.id}" aria-label="${esc(title1(it))}">${poster(it)}
  <div><div class="ctitle">${esc(title1(it))}</div>${title2(it)?`<div class="csub">${esc(title2(it))}</div>`:""}
  <div class="csub" style="margin-top:4px">${(it.genres||[]).slice(0,2).map(gen).join(" · ")}</div>
  <div class="csub">${metaLine(it)}</div></div></button>`;
}

/* ---------- views ---------- */
function vHome(){
  const wall=[[2,3,5,7,8,16,19,23],[4,12,15,20,22,24,1,11],[17,25,21,9,14,18,34,10]];
  const col=(arr,extra)=>{const imgs=arr.map(n=>`<img src="img/f/${String(n).padStart(2,"0")}.jpg" alt="" loading="eager">`).concat(extra?[`<img src="${extra}" alt="" loading="eager">`]:[]);return `<div class="col">${imgs.join("")}${imgs.join("")}</div>`};
  const total=ITEMS.length;
  const feat=["sp2","mecha","bl_jwy","f02","f03","al_superwings"].map(byId);
  return `
  <section class="hero"><div class="wrap hero-grid">
    <div>
      <div class="eyebrow">${i("International Content Sales & Rights Trading","Venta Internacional de Contenidos y Comercio de Derechos","国际影视内容销售与版权贸易")}</div>
      <h1 style="margin-top:20px">${i('<span>CHINESE CONTENT.</span><span>GLOBAL RIGHTS.</span><span>IBERO-AMERICAN REACH.</span>','<span>CONTENIDO CHINO.</span><span>DERECHOS GLOBALES.</span><span>ALCANCE IBEROAMERICANO.</span>','<span>中国内容</span><span>全球版权</span><span>伊比利亚美洲市场</span>')}</h1>
      <div class="sub">${i("Connecting Chinese Content with the Ibero-American Market","Conectamos el contenido chino con el mercado iberoamericano","连接中国影视内容与伊比利亚美洲市场")}</div>
      <p class="intro">${i("Connecting Chinese film, television and animation content with broadcasters, streaming platforms and distributors across Spain and Latin America.","Conectamos el cine, la televisión y la animación de China con cadenas, plataformas de streaming y distribuidores de España y América Latina.","连接中国电影、电视与动画内容，面向西班牙及拉丁美洲的电视台、流媒体平台与发行商。")}</p>
      <div class="cta"><button class="btn gold" data-go="catalogue">${i("Explore our catalogue","Explorar el catálogo","浏览版权目录")} →</button><button class="btn" data-go="contact">${i("Contact sales","Contactar con ventas","联系商务")}</button></div>
    </div>
    <div class="wall" aria-hidden="true">${col(wall[0],"img/sp/s2.jpg")}${col(wall[1],"img/mc/poster.jpg")}${col(wall[2])}</div>
  </div>
  <div class="route"><div class="wrap route-in"><span class="path">CHINA — SPAIN — LATIN AMERICA</span>
    <span class="terr"><b>ES</b><b>PT</b><span>MX</span><span>CO</span><span>BR</span><span>AR</span><span>CL</span><span>PE</span><span>EC</span><span>UY</span><span>PA</span></span>
    <span class="tot">${total} ${i("featured titles · 3,000+ vertical dramas","títulos destacados · más de 3.000 series verticales","部精选作品 · 3000+竖屏剧")}</span></div></div>
  </section>

  <section class="sec"><div class="wrap who">
    <div class="sec-head" style="margin:0"><div class="eyebrow">${i("Who we are","Quiénes somos","关于白橡树")}</div>
      <h2>${i("A rights company with a Madrid base and a Chinese catalogue.","Una empresa de derechos con base en Madrid y un catálogo chino.","立足马德里、以中国内容为核心的版权公司。")}</h2>
      <p class="lede">${i("BELLOTA BLANCA FILM & PRODUCCIONES S.L. was founded in 2019 to open a rights channel between Chinese producers and rights-holders and the buyers who programme Spain and Latin America. We sell and represent titles, and we produce our own: Smart Pulse, a documentary series on China–Latin America cooperation, is now in its second season.","BELLOTA BLANCA FILM & PRODUCCIONES S.L. se fundó en 2019 para abrir un canal de derechos entre productores y titulares chinos y los compradores que programan España y América Latina. Vendemos y representamos títulos, y producimos los nuestros: Smart Pulse, una serie documental sobre la cooperación China–América Latina, prepara su segunda temporada.","白橡树电影制片公司（BELLOTA BLANCA FILM & PRODUCCIONES S.L.）成立于2019年，旨在为中国制作公司与版权方，以及西班牙和拉美的采购方搭建版权渠道。我们销售并代理作品，也自主制作：关于中拉合作的纪录片系列《Smart Pulse》第二季正在制作中。")}</p></div>
    <div class="facts"><div><b>2019</b><span>${i("Founded","Fundación","成立")}</span></div><div><b>Madrid</b><span>${i("European base","Base europea","欧洲基地")}</span></div><div><b>${total}</b><span>${i("Featured titles","Títulos destacados","精选作品")}</span></div><div><b>3,000+</b><span>${i("Vertical dramas","Series verticales","竖屏剧")}</span></div></div>
  </div></section>

  ${mechaBand()}

  <section class="sec tint"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Our business","Nuestro negocio","我们的业务")}</div><h2>${i("Sell first. Represent second. Build with partners third.","Primero vender, después representar, y construir con socios.","先销售，再代理，后合作共建。")}</h2></div>
    <div class="biz">
      <article><span class="n">01</span><h3>${i("Content Sales","Venta de contenidos","内容销售")}</h3><p>${i("Chinese series, films, animation, vertical drama and documentary offered to broadcasters, platforms and distributors.","Series, cine, animación, series verticales y documental chinos ofrecidos a cadenas, plataformas y distribuidores.","向电视台、平台与发行商销售中国剧集、电影、动画、竖屏剧与纪录片。")}</p><ul><li>${i("TV drama & series","Series y dramas de TV","电视剧与剧集")}</li><li>${i("Films & animation","Cine y animación","电影与动画")}</li><li>${i("Vertical drama & documentary","Series verticales y documental","竖屏剧与纪录片")}</li></ul></article>
      <article><span class="n">02</span><h3>${i("Rights Trading","Comercio de derechos","版权贸易")}</h3><p>${i("Territory-by-territory, platform-by-platform licensing, plus acquisition of international titles.","Licencias por territorio y plataforma, y adquisición de títulos internacionales.","按地区、按平台授权，并引进国际影视作品版权。")}</p><ul><li>${i("Free TV, pay TV, SVOD, AVOD, FAST","TV en abierto, de pago, SVOD, AVOD, FAST","免费/付费电视、SVOD、AVOD、FAST")}</li><li>${i("Format and remake rights","Derechos de formato y remake","Format与翻拍权")}</li><li>${i("Content acquisition for China and YouTube","Adquisición de contenidos para China y YouTube","为中国与YouTube渠道采购内容")}</li></ul></article>
      <article><span class="n">03</span><h3>${i("International Distribution","Distribución internacional","国际发行")}</h3><p>${i("Representing Chinese producers abroad and opening buyer channels with local broadcasters, platforms and distributors.","Representamos a productores chinos en el exterior y abrimos canales de compra con cadenas, plataformas y distribuidores locales.","代表中国制作方出海发行，并与当地电视台、平台及发行商建立采购渠道。")}</p><ul><li>${i("Sales agency","Agencia de ventas","版权销售代理")}</li><li>${i("Regional licensing","Licencias regionales","区域授权")}</li><li>${i("Local-language delivery","Entrega en idioma local","本地语言交付")}</li></ul></article>
    </div></div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-head row"><div><div class="eyebrow">${i("Featured content","Contenido destacado","精选内容")}</div><h2 style="margin-top:12px">${i("Six titles to start with.","Seis títulos para empezar.","六部作品，由此开始。")}</h2></div><button class="btn" data-go="catalogue">${i("Full catalogue","Catálogo completo","完整目录")} →</button></div>
    <div class="grid six">${feat.map(card).join("")}</div>
    <div style="margin-top:44px">${vdBand()}</div></div></section>

  <section class="sec tint"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Content categories","Categorías","内容分类")}</div><h2>${i("Browse by what you programme.","Explora según lo que programas.","按您的编排需求浏览。")}</h2></div>
    <div class="cats">${CATS.map(c=>{const n=c[0]==="short"?"3,000+":ITEMS.filter(x=>x.cats.includes(c[0])).length;return `<button class="cat${n?"":" empty"}" data-cat="${c[0]}"><span class="ct">${esc(c[lang==="es"?2:lang==="zh"?3:1])}</span><span style="font-size:14px;color:var(--ink-soft)">${esc(c[lang==="es"?5:lang==="zh"?6:4])}</span><span class="cn">${n?n+" "+i("titles","títulos","部作品"):i("On request","Bajo petición","可洽谈")}</span></button>`}).join("")}</div></div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Our markets","Nuestros mercados","目标市场")}</div><h2>${i("Spain and Latin America, reached from China.","España y América Latina, desde China.","从中国出发，抵达西班牙与拉丁美洲。")}</h2>
      <p class="lede">${i("Our own series Smart Pulse (智汇中拉) has already reached Latin American screens. Season 1 aired in 5 countries on 10+ channels and was screened at the Bogotá Audiovisual Market.","Nuestra serie Smart Pulse ya ha llegado a las pantallas latinoamericanas. La temporada 1 se emitió en 5 países y más de 10 canales y se proyectó en el Bogotá Audiovisual Market.","我们自制的《Smart Pulse》已走上拉美荧屏：第一季在5个国家、10余个频道播出，并在波哥大视听市场展映。")}</p></div>
    ${mapSVG()}
    <div style="margin-top:22px"><button class="btn" data-go="network">${i("See the network","Ver la red","查看发行网络")} →</button></div></div></section>

  ${wantBand()}

  ${contactEntries()}`;
}
function contactEntries(){
  return `<section class="sec"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Contact us","Contacto","联系我们")}</div><h2>${i("Three ways in.","Tres puertas de entrada.","三个入口。")}</h2></div>
    <div class="three">
      <div class="entry"><h3>${i("Buy content","Comprar contenido","购买内容")}</h3><p>${i("For broadcasters, platforms and distributors. Tell us the titles, rights, territories and platforms you need.","Para cadenas, plataformas y distribuidores. Indícanos títulos, derechos, territorios y plataformas.","面向电视台、平台与发行商。告诉我们您需要的作品、权利、地区与平台。")}</p><button class="btn gold" data-contact="buy">${i("Send an inquiry","Enviar consulta","提交询价")} →</button></div>
      <div class="entry"><h3>${i("Submit content","Enviar contenido","提交内容")}</h3><p>${i("For Chinese producers and rights-holders who want international sales and representation.","Para productores y titulares chinos que buscan ventas internacionales y representación.","面向希望获得国际销售与代理的中国制作公司和版权方。")}</p><button class="btn gold" data-contact="submit">${i("Submit your project","Enviar proyecto","提交项目")} →</button></div>
      <div class="entry"><h3>${i("Partner with us","Colabora con nosotros","合作洽谈")}</h3><p>${i("For overseas distributors, producers and institutions interested in long-term cooperation.","Para distribuidores, productores e instituciones interesados en cooperar a largo plazo.","面向有意长期合作的海外发行商、制作公司与机构。")}</p><button class="btn gold" data-contact="partner">${i("Start a conversation","Iniciar conversación","开启合作")} →</button></div>
    </div></div></section>`;
}
function mapSVG(){
  const c=(x,y,a,b,cc)=>`<g><circle cx="${x}" cy="${y}" r="7" fill="var(--gold)"/><circle cx="${x}" cy="${y}" r="15" fill="none" stroke="var(--gold)" stroke-opacity=".45"/><text x="${x}" y="${y-30}" text-anchor="middle" font-family="IBM Plex Mono,monospace" font-size="15" letter-spacing="2.4" fill="var(--head)" font-weight="500">${a}</text><text x="${x}" y="${y+40}" text-anchor="middle" font-family="Hanken Grotesk,Noto Sans SC,sans-serif" font-size="14" fill="var(--ink-soft)">${b}</text></g>`;
  return `<div class="map"><svg viewBox="0 0 960 230" role="img" aria-label="China, Spain, Latin America"><defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="var(--gold)"/></marker></defs>
  <path d="M135 112 C 250 30, 360 30, 465 108" fill="none" stroke="var(--gold)" stroke-width="2" marker-end="url(#ar)"/>
  <path d="M495 108 C 600 30, 710 30, 825 112" fill="none" stroke="var(--gold)" stroke-width="2" marker-end="url(#ar)"/>
  <path d="M135 126 C 330 220, 630 220, 825 126" fill="none" stroke="var(--gold)" stroke-width="1.2" stroke-dasharray="4 6" opacity=".7"/>
  ${c(120,118,"CHINA",i("Content resources","Recursos de contenido","内容资源"))}${c(480,118,"SPAIN",i("Madrid · European base","Madrid · base europea","马德里 · 欧洲基地"))}${c(840,118,"LATIN AMERICA",i("Broadcasters, platforms, distributors","Cadenas, plataformas, distribuidores","电视台、平台、发行商"))}
  </svg></div>`;
}

function vCatalogue(){
  const gset=[...new Set(ITEMS.flatMap(x=>x.genres||[]))].sort((a,b)=>gen(a).localeCompare(gen(b),lang==="zh"?"zh":lang));
  const cnt=k=>k==="all"?ITEMS.length:k==="short"?"3,000+":ITEMS.filter(x=>x.cats.includes(k)).length;
  return `<section class="sec" style="padding-top:44px"><div class="wrap">
  <div class="sec-head"><div class="eyebrow">${i("Content catalogue","Catálogo de contenidos","影视版权目录")}</div><h2>${i("Browse titles, check rights, send an inquiry.","Explora títulos, consulta derechos y envía tu consulta.","浏览作品、查看版权、提交询价。")}</h2>
  <p class="lede">${i("Availability shown here is indicative. Every right, territory and window is confirmed against the signed licence for that title.","La disponibilidad mostrada es orientativa. Cada derecho, territorio y ventana se confirma con el contrato firmado de cada título.","此处展示的授权信息仅供参考，每项权利、地区与窗口期均以该作品的实际授权合同为准。")}</p></div>
  <div class="filters">
    <div class="tabs" role="group" aria-label="${i("Category","Categoría","分类")}">
      <button data-cat="all" aria-pressed="${F.cat==="all"}">${i("All","Todo","全部")}<span>${cnt("all")}</span></button>
      ${CATS.map(c=>`<button data-cat="${c[0]}" aria-pressed="${F.cat===c[0]}">${esc(c[lang==="es"?2:lang==="zh"?3:1])}<span>${cnt(c[0])}</span></button>`).join("")}
    </div>
    <div class="ctrls">
      <div class="fld"><label for="f-q">${i("Search","Buscar","搜索")}</label><input id="f-q" type="search" value="${esc(F.q)}" placeholder="${i("Title, genre, director, cast","Título, género, director, reparto","片名、类型、导演、演员")}"></div>
      <div class="fld"><label for="f-g">${i("Genre","Género","类型")}</label><select id="f-g"><option value="all">${i("All genres","Todos","全部类型")}</option>${gset.map(g=>`<option value="${g}"${F.genre===g?" selected":""}>${esc(gen(g))}</option>`).join("")}</select></div>
      <div class="fld"><label for="f-t">${i("Territory","Territorio","地区")}</label><select id="f-t"><option value="all">${i("Any","Cualquiera","不限")}</option><option value="latam"${F.terr==="latam"?" selected":""}>${esc(terr("latam"))}</option><option value="world"${F.terr==="world"?" selected":""}>${esc(terr("world"))}</option><option value="request"${F.terr==="request"?" selected":""}>${esc(terr("request"))}</option></select></div>
      <div class="fld"><label for="f-s">${i("Status","Estado","状态")}</label><select id="f-s"><option value="all">${i("Any","Cualquiera","不限")}</option><option value="done"${F.status==="done"?" selected":""}>${esc(st("done"))}</option><option value="prod"${F.status==="prod"?" selected":""}>${esc(st("prod"))}</option></select></div>
      <div class="fld"><label for="f-o">${i("Source","Origen","来源")}</label><select id="f-o"><option value="all">${i("Any","Cualquiera","不限")}</option><option value="own"${F.src==="own"?" selected":""}>${i("Own production","Producción propia","自有制作")}</option><option value="partner"${F.src==="partner"?" selected":""}>${i("Partner catalogues","Catálogos de socios","合作片库")}</option></select></div>
      <button class="link" id="f-reset" type="button">${i("Reset","Restablecer","重置")}</button>
    </div>
  </div>
  ${F.cat==="short"?`<div style="margin-bottom:26px">${vdBand(true)}</div>`:""}${F.cat==="drama"?`<div style="margin-bottom:26px">${blBand()}</div>`:""}${F.cat==="short"?"":`<div id="count" class="count"></div><div id="grid" class="grid"></div>`}</div></section>`;
}
function filtered(){
  const q=F.q.trim().toLowerCase();
  return ITEMS.filter(it=>{
    if(F.cat!=="all"&&!it.cats.includes(F.cat))return false;
    if(F.genre!=="all"&&!(it.genres||[]).includes(F.genre))return false;
    if(F.terr!=="all"&&tg(it)!==F.terr)return false;
    if(F.status!=="all"&&it.status!==F.status)return false;
    if(F.src==="own"&&!isOwn(it))return false;
    if(F.src==="partner"&&isOwn(it))return false;
    if(q){const hay=[it.en,it.zh,it.dir,it.cast,(it.genres||[]).map(gen).join(" "),(it.genres||[]).join(" "),pick(it.lines)].join(" ").toLowerCase();if(!hay.includes(q))return false}
    return true;
  });
}
function renderGrid(){
  const g=$("#grid");if(!g)return;
  const list=filtered();
  g.innerHTML=list.length?list.map(card).join(""):`<div class="empty-state" style="grid-column:1/-1"><p>${F.cat==="variety"&&!F.q?i("Variety and format titles are available on request. Contact sales for the current list.","Los títulos de entretenimiento y formatos están disponibles bajo petición. Contacta con ventas para la lista actual.","综艺与Format作品可按需提供，请联系商务获取最新清单。"):i("No titles match these filters.","Ningún título coincide con estos filtros.","没有符合条件的作品。")}</p><p style="margin-top:14px"><button class="btn sm" data-contact="buy">${i("Ask sales","Preguntar a ventas","咨询商务")}</button></p></div>`;
  $("#count").textContent=`${list.length} / ${ITEMS.length} ${i("titles","títulos","部作品")}`;
}

function vRights(){
  const mods=[
   [i("International Content Sales","Venta internacional de contenidos","国际内容销售"),i("Packages and single titles for broadcasters, streamers and distributors.","Paquetes y títulos sueltos para cadenas, plataformas y distribuidores.","面向电视台、流媒体与发行商的片包与单片销售。")],
   [i("Content Acquisition","Adquisición de contenidos","内容采购"),i("Sourcing international titles for Chinese buyers and platforms.","Búsqueda de títulos internacionales para compradores y plataformas chinas.","为中国买家与平台引进国际影视作品。")],
   [i("Territory Licensing","Licencias por territorio","区域授权"),i("Deals built country by country and window by window.","Acuerdos construidos país por país y ventana por ventana.","按国家、按窗口期逐一设计的授权方案。")],
   [i("Distribution Representation","Representación de distribución","发行代理"),i("We act as sales agent for Chinese producers and rights-holders.","Actuamos como agente de ventas de productores y titulares chinos.","作为中国制作方与版权方的海外销售代理。")],
   [i("Platform Licensing","Licencias para plataformas","平台授权"),i("Free TV, pay TV, SVOD, AVOD, FAST/CTV and digital rights.","Derechos de TV en abierto, de pago, SVOD, AVOD, FAST/CTV y digitales.","免费电视、付费电视、SVOD、AVOD、FAST/CTV与数字版权。")],
   [i("Rights Management","Gestión de derechos","版权管理"),i("Rights chains checked against contracts, with clear availability by title.","Cadenas de derechos verificadas con contrato y disponibilidad clara por título.","依据合同核对权利链，按作品清晰呈现可授权情况。")]];
  const steps=[[i("Browse a title","Explora un título","浏览作品"),i("Open any title in the catalogue.","Abre cualquier título del catálogo.","在目录中打开任一作品。")],[i("See the rights","Consulta los derechos","查看版权"),i("Check what is offered and where.","Revisa qué se ofrece y dónde.","了解可授权的权利与地区。")],[i("Pick territory and platform","Elige territorio y plataforma","选择地区与平台"),i("Say what you need to programme.","Indica lo que necesitas programar.","说明您的编排需求。")],[i("Send your interest","Envía tu interés","提交采购意向"),i("One short form per title.","Un formulario breve por título.","每部作品一份简短表单。")],[i("Sales follow-up","Seguimiento comercial","商务跟进"),i("Our team confirms rights and sends terms and screeners.","Nuestro equipo confirma derechos y envía condiciones y enlaces de visionado.","团队确认版权，并发送条款与审片链接。")]];
  return `<section class="sec" style="padding-top:44px"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Rights & sales","Derechos y ventas","版权贸易")}</div><h2>${i("The core of the company: licensing Chinese content abroad.","El núcleo de la empresa: licenciar contenido chino en el exterior.","公司的核心：把中国内容授权到海外。")}</h2></div>
    <div class="three t2">
      <div class="entry"><h3>${i("BUY CONTENT","COMPRAR CONTENIDO","购买内容")}</h3><p>${i("For international buyers: browse the catalogue, ask about rights and negotiate.","Para compradores internacionales: explora el catálogo, consulta derechos y negocia.","面向国际买家：浏览目录、咨询版权、洽谈采购。")}</p><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:auto"><button class="btn gold" data-go="catalogue">${i("Open catalogue","Abrir catálogo","打开目录")}</button><button class="btn" data-contact="buy">${i("Inquiry","Consulta","询价")}</button></div></div>
      <div class="entry"><h3>${i("SUBMIT YOUR CONTENT","ENVÍA TU CONTENIDO","提交您的内容")}</h3><p>${i("For production companies, animation studios and rights-holders: submit a project for international sales and representation. We also acquire content for distribution in China and on YouTube channels.","Para productoras, estudios de animación y titulares de derechos: envía un proyecto para venta internacional y representación. También adquirimos contenido para distribuirlo en China y en canales de YouTube.","面向制作公司、动画公司与版权方：提交项目，申请国际版权代理与销售合作。我们也采购内容，用于中国发行及YouTube渠道发行。")}</p><button class="btn gold" data-contact="submit" style="margin-top:auto">${i("Submit a project","Enviar proyecto","提交项目")} →</button></div>
    </div></div></section>
  <section class="sec tint"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("What we do","Qué hacemos","服务内容")}</div><h2>${i("Six services around one rights chain.","Seis servicios en torno a una cadena de derechos.","围绕同一条权利链的六项服务。")}</h2></div>
    <div class="mods">${mods.map(m=>`<div class="mod"><h3>${m[0]}</h3><p>${m[1]}</p></div>`).join("")}</div></div></section>
  <section class="sec band"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("How a deal moves","Cómo avanza un acuerdo","合作流程")}</div><h2>${i("From browsing to a signed licence.","De la exploración a la licencia firmada.","从浏览到签署授权。")}</h2></div>
    <div class="steps">${steps.map((s,k)=>`<div class="step"><span class="n">0${k+1}</span><b>${s[0]}</b><p>${s[1]}</p></div>`).join("")}</div></div></section>
  <section class="sec"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("Rights menu","Menú de derechos","权利类型")}</div><h2>${i("Rights we license","Derechos que licenciamos","可授权的权利类型")}</h2></div>
    <ul class="list">${["free","pay","svod","avod","fast","digital","format","remake"].map(k=>`<li><b>${esc(rt(k))}</b> ${({free:i("Terrestrial and national broadcasters.","Cadenas terrestres y nacionales.","地面及全国性电视台。"),pay:i("Cable, satellite and operator channels.","Canales de cable, satélite y operadores.","有线、卫星与运营商频道。"),svod:i("Subscription streaming platforms.","Plataformas de streaming por suscripción.","订阅制流媒体平台。"),avod:i("Ad-supported on-demand services.","Servicios bajo demanda con publicidad.","广告支持的点播服务。"),fast:i("Free ad-supported linear channels and connected TV.","Canales lineales gratuitos con publicidad y TV conectada.","免费广告支持的线性频道与联网电视。"),digital:i("Apps, vertical-screen and online video.","Apps, pantalla vertical y vídeo online.","App、竖屏与在线视频。"),format:i("Local adaptation of a show format.","Adaptación local de un formato.","节目Format的本地化改编。"),remake:i("Local remake of a drama or film.","Remake local de una serie o película.","剧集或电影的本地翻拍。")})[k]}</li>`).join("")}</ul>
    <p class="note" style="margin-top:22px">${i("Rights offered vary by title. All rights information is confirmed against the actual licence before any offer.","Los derechos ofrecidos varían según el título. Toda la información se confirma con la licencia real antes de cualquier oferta.","各作品可授权的权利不同，任何报价之前均以实际授权合同核实。")}</p></div></section>
  ${wantBand()}`;
}

/* ---------- shared bands ---------- */
const waLink=`https://wa.me/${WA}`;
function contactLines(cls=""){
  return `<div class="cline ${cls}"><a href="mailto:${MAIL}">${MAIL}</a><a href="mailto:${MAIL3}">${MAIL3}</a><a href="${waLink}" target="_blank" rel="noopener">WhatsApp ${PHONE}</a></div>`;
}
function blBand(){
  const bl=ITEMS.filter(x=>x.id.startsWith("bl_")&&x.cats[0]==="drama");
  const th=bl.filter(x=>x.country==="th").length, co=bl.filter(x=>x.country==="cnth").length, cn=bl.length-th-co;
  const pts=[
   [i("What it is","Qué es","是什么"),i("A romance genre built around the love story between two male leads. Called 耽美 (danmei) in Chinese, BL (Boys’ Love) in Japanese and international usage, and “Y series” in Thailand.","Un género romántico centrado en la historia de amor entre dos protagonistas masculinos. Se llama 耽美 (danmei) en chino, BL (Boys’ Love) en japonés y a nivel internacional, y “serie Y” en Tailandia.","以两位男主角之间的爱情故事为核心的爱情类型。中文称“耽美”，日语与国际通称BL（Boys’ Love），泰国称“Y系列”。")],
   [i("Where it comes from","De dónde viene","从哪里来"),i("It began in Japanese manga and fan fiction, grew into a mainstream television genre in Thailand in the 2010s, and in China is often adapted from popular web novels.","Nació en el manga y el fan fiction japoneses, se convirtió en un género televisivo mayoritario en Tailandia en la década de 2010 y, en China, suele adaptarse de novelas web populares.","源于日本漫画与同人创作；2010年代在泰国发展为主流电视类型；中国的耽美剧多改编自热门网络小说。")],
   [i("Why buyers want it","Por qué interesa a los compradores","为什么值得采购"),i("It has a devoted international fan base that follows the actors and the story across platforms. Fans watch, share and buy, so these titles do well on streaming services and YouTube.","Tiene una base de fans internacional muy fiel que sigue a los actores y la historia en todas las plataformas. Los fans ven, comparten y compran, por lo que estos títulos funcionan bien en plataformas de streaming y YouTube.","拥有忠实的国际粉丝群，会跟随演员与剧情跨平台追看。粉丝愿意观看、传播并付费，因此这类作品在流媒体平台与YouTube上表现出色。")]];
  return `<div class="blband"><div><div class="eyebrow">${i("Genre guide","Guía del género","类型说明")}</div><h3 style="margin:10px 0 6px">${i("What is a BL (耽美) drama?","¿Qué es una serie BL (耽美)?","什么是耽美剧？")}</h3>
   <p style="color:var(--ink-soft);font-size:15.5px;max-width:60ch">${i("Romance series about two men falling in love, made for a young, largely female and LGBTQ+ audience. This catalogue brings together the strongest titles from Thailand and China.","Series románticas sobre dos hombres que se enamoran, hechas para un público joven, mayoritariamente femenino y LGTBQ+. Este catálogo reúne los títulos más fuertes de Tailandia y China.","讲述两位男性相爱的爱情剧集，面向年轻、以女性和LGBTQ+群体为主的观众。本目录汇集泰国与中国最具实力的作品。")}</p>
   <div class="facts-line" style="margin-top:18px"><div><b>${th}</b><span>${i("Thai titles","Títulos tailandeses","泰国作品")}</span></div><div><b>${cn}</b><span>${i("Chinese titles","Títulos chinos","中国作品")}</span></div><div><b>${co}</b><span>${i("China–Thailand co-productions","Coproducciones China–Tailandia","中泰合拍")}</span></div></div></div>
   <div class="blpts">${pts.map(x=>`<div><h4>${x[0]}</h4><p>${x[1]}</p></div>`).join("")}</div></div>`;
}
function vdBand(onPage){
  const chips=[i("AI vertical micro drama","Microdrama vertical con IA","AI竖屏剧"),i("Live-action micro drama for English and Spanish-speaking regions","Microdrama de acción real para regiones de habla inglesa e hispana","面向英语与西语地区的真人竖屏剧"),i("Chinese micro drama","Microdrama chino","中文竖屏剧")];
  return `<div class="vband"><div class="big"><b>3,000+</b><span>${i("vertical micro dramas","microdramas verticales","部竖屏短剧")}</span></div>
   <div><div class="eyebrow">${i("Vertical drama library · Latin America distribution","Biblioteca de series verticales · distribución en América Latina","竖屏剧片库 · 拉美发行")}</div>
   <h3 style="margin:10px 0 8px">${i("One library, three kinds of vertical content.","Una biblioteca, tres tipos de contenido vertical.","一个片库，三类竖屏内容。")}</h3>
   <div class="chips">${chips.map(c=>`<span class="chip g">${c}</span>`).join("")}</div>
   <p style="margin-top:14px;color:var(--ink-soft);font-size:15.5px;max-width:64ch">${i("We distribute the library in Latin America. Contact us for the title list, with synopses, languages and available rights.","Distribuimos la biblioteca en América Latina. Contáctanos para recibir la lista de títulos, con sinopsis, idiomas y derechos disponibles.","我们在拉丁美洲发行该片库。欢迎联系索取片单，含简介、语言版本与可授权权利。")}</p>
   <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap">${onPage?"":`<button class="btn sm" data-cat="short">${i("About vertical dramas","Sobre las series verticales","了解竖屏剧")} →</button>`}<button class="btn sm gold" data-contact="buy">${i("Request the full list","Pedir la lista completa","索取片单")} →</button></div></div></div>`;
}
function wantBand(){
  return `<section class="sec band"><div class="wrap want"><div><div class="eyebrow">${i("Content wanted","Buscamos contenido","征集内容")}</div>
   <h2 style="margin-top:12px">${i("We buy and take on content too.","También compramos y distribuimos contenido.","我们也采购、也代理内容。")}</h2>
   <p class="lede" style="margin-top:12px">${i("If you hold rights to series, films, animation or vertical dramas, we can distribute them in China or through YouTube distribution channels. Send us the title, the rights you hold and the territories you can offer.","Si tienes derechos de series, películas, animación o series verticales, podemos distribuirlos en China o a través de canales de distribución en YouTube. Envíanos el título, los derechos que posees y los territorios que puedes ofrecer.","如果您持有剧集、电影、动画或竖屏剧的版权，我们可以在中国发行，或通过YouTube发行渠道推广。请告诉我们作品名称、所持权利与可授权地区。")}</p></div>
   <div class="want-box"><div class="chips" style="margin-bottom:16px"><span class="chip g" style="background:transparent">${i("Distribution in China","Distribución en China","中国发行")}</span><span class="chip g" style="background:transparent">${i("YouTube distribution channels","Canales de distribución en YouTube","YouTube发行渠道")}</span></div>
   ${contactLines("on-dark")}<div style="margin-top:18px"><button class="btn gold" data-contact="submit">${i("Submit your content","Enviar contenido","提交内容")} →</button></div></div></div></section>`;
}
function mechaBand(){
  const m=byId("mecha");
  return `<section class="sec band flagship"><div class="wrap flag"><div class="flag-poster">${poster(m)}</div>
   <div><div class="eyebrow">${i("Flagship project · global rights open","Proyecto estrella · derechos globales disponibles","重点项目 · 全球版权开放")}</div>
   <h2 style="margin-top:12px;font-size:clamp(30px,4vw,48px)">MECHASIA: AWAKENING</h2>
   <p class="lede" style="margin-top:12px">${i("A 3D sci-fi mecha series, 26 × 13′, with a ready-made dual-form toy line. We are pushing it worldwide for broadcast and streaming, and looking for toy and derivative partners: the toy line already sells strongly in China and Asia.","Una serie mecha de ciencia ficción en 3D, 26 × 13′, con una línea de juguetes de doble forma lista para el mercado. La impulsamos en todo el mundo para emisión y streaming, y buscamos socios de juguetes y derivados: la línea ya vende con fuerza en China y Asia.","3D科幻机甲剧集，26集 × 13分钟，配有成熟的双形态玩具线。我们面向全球推广播出与流媒体版权，并寻找玩具与衍生品合作伙伴：玩具线已在中国和亚洲取得出色销售。")}</p>
   <div class="chips" style="margin:16px 0 22px"><span class="chip g" style="background:transparent">${i("Worldwide rights","Derechos mundiales","全球版权")}</span><span class="chip g" style="background:transparent">${i("Seeking toy & derivative partners","Buscamos socios de juguetes y derivados","寻找玩具与衍生品伙伴")}</span><span class="chip g" style="background:transparent">${i("IP licensing","Licencias de IP","IP授权")}</span><span class="chip g" style="background:transparent">${i("10th anniversary in 2026","10.º aniversario en 2026","2026年十周年")}</span></div>
   <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn gold" data-mtab="series">${i("Series & global rights","Serie y derechos globales","剧集与全球版权")} →</button><button class="btn" data-mtab="toys">${i("Derivatives & toy partners","Derivados y socios de juguetes","衍生品开发与玩具伙伴")}</button></div></div></div></section>`;
}

/* ---------- animation ---------- */
function vAnimation(){
  const alpha=ITEMS.filter(x=>x.lic==="alpha");
  const mech=byId("mecha");
  return `<section class="sec" style="padding-top:44px"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Animation","Animación","动画专区")}</div><h2>${i("Animation projects for television, streaming and licensing.","Proyectos de animación para televisión, streaming y licencias.","面向电视、流媒体与授权的动画项目。")}</h2>
    <p class="lede">${i("Our flagship MECHASIA is open worldwide for broadcast and streaming, and we are looking for toy and derivative partners. The seven animated IPs below are currently offered for Ibero-America: series distribution and toy distribution.","Nuestra serie estrella MECHASIA está abierta en todo el mundo para emisión y streaming, y buscamos socios de juguetes y derivados. Los siete IP de animación de abajo se ofrecen actualmente para Iberoamérica: distribución de la serie y distribución de juguetes.","重点项目《机变战队》面向全球开放播出与流媒体授权，并寻找玩具与衍生品合作伙伴。下方七部动画IP目前面向伊比利亚美洲：剧集发行与玩具发行。")}</p></div>
    <button class="card feat-mecha" data-go="mechasia"><div class="fm-poster">${poster(mech)}</div><div><div class="eyebrow">${i("Flagship · global rights","Estrella · derechos globales","重点项目 · 全球版权")}</div><div class="ctitle" style="font-size:28px;margin-top:8px">MECHASIA: AWAKENING</div><p style="margin-top:10px;color:var(--ink-soft);font-size:15.5px">${esc(pick(mech.lines))}</p><div class="chips" style="margin-top:14px"><span class="chip g">3D · 26 × 13′</span><span class="chip">${esc(pick(mech.audience))}</span><span class="chip">${i("Toy & derivative partners wanted","Se buscan socios de juguetes y derivados","寻找玩具与衍生品伙伴")}</span></div><p class="link" style="margin-top:16px;display:inline-block">${i("Series, global rights and derivative development","Serie, derechos globales y desarrollo de derivados","剧集、全球版权与衍生品开发")} →</p></div></button>
    <hr style="border:0;border-top:1px solid var(--rule);margin:40px 0 34px">
    <div class="animhero"><img src="img/al/banner.jpg" alt="Quantum Heroes: Dinoster, Infinity Nado, Balala the Fairies" loading="lazy">
      <div><div class="eyebrow">${i("Children's & family animation","Animación infantil y familiar","儿童与家庭动画")}</div><h2 style="margin-top:10px">${i("Seven animated IPs for Ibero-America.","Siete IP de animación para Iberoamérica.","面向伊比利亚美洲的七部动画IP。")}</h2>
      <p style="margin-top:12px;color:var(--ink-soft);max-width:56ch">${i("Action, adventure, fantasy and comedy series for pre-school to teen audiences, in 3D and 2D, with long-running seasons.","Series de acción, aventura, fantasía y comedia para audiencias desde preescolar hasta adolescentes, en 3D y 2D, con temporadas de largo recorrido.","面向学龄前到青少年观众的动作、冒险、奇幻与喜剧系列，3D与2D兼有，季数长线持续。")}</p>
      <div class="chips" style="margin-top:16px"><span class="chip g">${i("Series distribution","Distribución de la serie","剧集发行")}</span><span class="chip g">${i("Toy distribution","Distribución de juguetes","玩具发行")}</span><span class="chip g">${i("Ibero-America","Iberoamérica","伊比利亚美洲")}</span></div></div></div>
    <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr));margin-top:30px">${alpha.map(card).join("")}</div>
  </div></section>
  <section class="sec band"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("Focus areas","Áreas de enfoque","重点方向")}</div><h2>${i("Where we want to place animation.","Dónde queremos colocar la animación.","我们希望落地动画的方向。")}</h2></div>
    <div class="focus">${[i("Television distribution","Distribución en televisión","电视发行"),i("Streaming distribution","Distribución en streaming","流媒体发行"),i("Children's channels","Canales infantiles","儿童频道"),i("Family entertainment","Entretenimiento familiar","家庭娱乐"),i("Toy distribution","Distribución de juguetes","玩具发行"),i("Animation IP licensing","Licencias de IP de animación","动画IP授权"),i("Local-language adaptation","Adaptación al idioma local","本地语言改编"),i("Co-production","Coproducción","联合制作")].map(x=>`<span class="chip" style="background:transparent;color:var(--band-ink);border-color:rgba(245,243,238,.4);font-size:12.5px;padding:10px 12px">${x}</span>`).join("")}</div>
    <div style="margin-top:28px"><button class="btn gold" data-contact="buy">${i("Ask about animation rights","Consultar derechos de animación","咨询动画版权")} →</button></div></div></section>`;
}

/* ---------- Mechasia ---------- */
const MH=[
 ["divine","Divine Wind","WY1001",["Sports car","Coche deportivo","跑车"],"15 cm",1,
  ["Determined to choose his own path, he founds the Liberty’s Bounty and steps into the war between the Lumisarians and the Nocturians, becoming an enemy to both factions.","Decidido a elegir su propio camino, funda el Liberty’s Bounty y entra en la guerra entre lumisarios y nocturnos, y se convierte en enemigo de ambos bandos.","执意走自己的路，创立 Liberty’s Bounty，卷入 Lumisarians 与 Nocturians 之间的战争，成为两大阵营共同的敌人。"]],
 ["gladius","Prince Gladius","WY1002",["Truck","Camión","卡车"],"16.6 cm",1,
  ["A new-age hero on the surface, in truth a prince seeking revenge who carries out his plans with calm, cool-headed rationality.","Un héroe moderno en apariencia; en realidad, un príncipe que busca venganza y ejecuta sus planes con serenidad y raciocinio.","表面是新时代英雄，实则是为复仇而来的王子，冷静理性地推进自己的计划。"]],
 ["epsilon","Epsilon","WY1003",["Train","Tren","火车"],"15 cm",1,
  ["A young rookie who, by chance, acquires powerful technology and is swept into the middle of the action.","Un joven novato que, por azar, adquiere una tecnología poderosa y se ve arrastrado al centro de la acción.","一名年轻新人，偶然获得强大科技，被卷入风暴中心。"]],
 ["mystic","Mystic Lock","WY1004",["Lunar rover","Vehículo lunar","月球车"],"15 cm",1,
  ["A member of the Four Wicked Hunting Group who often vanishes without a trace. Role: sniper and necromancer.","Miembro del Grupo de Caza Perverso que a menudo desaparece sin dejar rastro. Rol: francotirador y nigromante.","“邪恶猎杀团”四人组成员，常常神出鬼没。定位：狙击手与亡灵法师。"]],
 ["machiapter","Machiapter","WY1005",["Helicopter","Helicóptero","直升机"],"15 cm",1,
  ["A lazy genius and a core member of the main combat faction.","Un genio perezoso y miembro clave de la facción de combate principal.","懒散的天才，主战阵营的核心成员。"]],
 ["deathtone","Deathtone","WY1006",["Sports car","Coche deportivo","跑车"],"15 cm",2,
  ["The comic relief. Cunning strategist of the hunting group and Epsilon’s companion, always scheming, but later reformed.","El alivio cómico. Astuto estratega del grupo de caza y compañero de Epsilon: siempre maquinando, aunque luego se redime.","搞笑担当。猎杀团里的狡猾军师，也是 Epsilon 的同伴，总爱耍心眼，后来改过自新。"]],
 ["sidewinder","Sidewinder","WY1007",["Spaceship","Nave espacial","飞船"],"15 cm",2,
  ["A passionate hero with a heart full of fire and a core member of the main combat faction.","Un héroe apasionado, con el corazón en llamas, y miembro clave de la facción de combate principal.","满腔热血的热情英雄，主战阵营的核心成员。"]],
];
const MH_PACK={"WY1002":["220 × 85 × 285","535 × 458 × 592","0.145"]};
const mhp=n=>MH_PACK[n]||["200 × 85 × 260","535 × 418 × 540","0.121"];
let mtab="series";
function vMechasia(){
  const m=byId("mecha");
  const L3=a=>a[lang==="es"?1:lang==="zh"?2:0];
  const tabs=[["series",i("Series & global rights","Serie y derechos globales","剧集与全球版权")],["toys",i("Derivatives & toy partners","Derivados y socios de juguetes","衍生品开发与玩具伙伴")]];
  const hero=`<section class="sec band mhero"><div class="wrap mh-grid"><div>
    <div class="eyebrow">${i("Flagship project · global rights open","Proyecto estrella · derechos globales disponibles","重点项目 · 全球版权开放")}</div>
    <h1 style="margin-top:14px">MECHASIA<br><span>AWAKENING</span></h1>
    <p class="lede" style="margin-top:16px">${esc(pick(m.lines))}</p>
    <div class="chips" style="margin:18px 0 24px">${[i("3D realistic","3D realista","3D写实"),i("Sci-fi","Ciencia ficción","科幻"),"26 × 13′ · 338 min",i("Ages 6+","Mayores de 6 años","6岁以上"),i("Third season of the franchise","Tercera temporada de la franquicia","系列第三季"),i("IP 10th anniversary, 2026","10.º aniversario de la IP, 2026","2026年IP十周年"),i("Fan base in Asia","Base de fans en Asia","亚洲拥有粉丝基础"),i("Seeking toy & derivative partners","Buscamos socios de juguetes y derivados","寻找玩具与衍生品伙伴")].map(c=>`<span class="chip g" style="background:transparent">${c}</span>`).join("")}</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn gold" data-contact="buy">${i("Inquire: global rights","Consultar derechos globales","咨询全球版权")} →</button><button class="btn" data-open="mecha">${i("Title sheet","Ficha del título","作品信息")}</button></div></div>
    <div class="mh-poster">${poster(m,{eager:true})}</div></div></section>`;
  const tabbar=`<div class="wrap" style="padding-top:34px"><div class="tabs" role="group">${tabs.map(t=>`<button data-mtab="${t[0]}" aria-pressed="${mtab===t[0]}">${t[1]}</button>`).join("")}</div></div>`;
  let body="";
  if(mtab==="series"){
    const rc=[
     [i("TV broadcast","Emisión en TV","电视播出"),i("Free TV, pay TV and children's channels, territory by territory.","TV en abierto, de pago y canales infantiles, territorio por territorio.","免费电视、付费电视与儿童频道，按地区洽谈。")],
     [i("Streaming & digital","Streaming y digital","流媒体与数字"),i("SVOD, AVOD and FAST / CTV platforms.","Plataformas SVOD, AVOD y FAST / CTV.","SVOD、AVOD与FAST / CTV平台。")],
     [i("IP licensing & merchandise","Licencias de IP y merchandising","IP授权与衍生品"),i("Brand owners and manufacturers who want to build on the MECHASIA IP.","Titulares de marcas y fabricantes que quieran desarrollar la IP MECHASIA.","希望基于机变战队IP开发产品的品牌方与制造商。")],
     [i("Toy distribution","Distribución de juguetes","玩具分销"),i("Regional distributors and importers for the seven-hero line.","Distribuidores e importadores regionales para la línea de siete héroes.","面向七款英雄玩具的区域分销商与进口商。")]];
    const facts=[[i("Episodes","Episodios","集数"),"26 × 13′"],[i("Total running time","Duración total","总时长"),"338 min"],[i("Audience","Público","受众"),pick(m.audience)],[i("Animation style","Estilo de animación","动画风格"),i("3D realistic","3D realista","3D写实")],[i("Genre","Género","类型"),i("Sci-fi","Ciencia ficción","科幻")],[i("Original language","Idioma original","原语言"),lg("zh")],[i("Dubbing / subtitles","Doblaje / subtítulos","配音 / 字幕"),i("On request","Bajo petición","按需提供")]];
    body=`<section class="sec"><div class="wrap">
      <div class="sec-head"><div class="eyebrow">${i("Rights offered","Derechos ofrecidos","可授权权利")}</div><h2>${i("Worldwide, territory by territory.","En todo el mundo, territorio por territorio.","面向全球，按地区洽谈。")}</h2>
      <p class="lede">${i("We are pushing MECHASIA: AWAKENING to buyers in every region. Scope and exclusivity are confirmed per contract.","Impulsamos MECHASIA: AWAKENING entre compradores de todas las regiones. El alcance y la exclusividad se confirman por contrato.","我们面向各地区买家推广《机变战队：觉醒》。权利范围与独家性以合同确认。")}</p></div>
      <div class="mods m4">${rc.map(r=>`<div class="mod"><h3>${r[0]}</h3><p>${r[1]}</p></div>`).join("")}</div>
      <div style="margin-top:26px;display:flex;gap:12px;flex-wrap:wrap"><button class="btn gold" data-contact="buy">${i("Send a rights inquiry","Enviar consulta de derechos","提交版权询价")} →</button></div></div></section>
     <section class="sec tint"><div class="wrap studio">
      <div><div class="eyebrow">${i("The story so far","La historia hasta ahora","剧情简介")}</div><h2 style="margin-top:12px">${i("A thousand-year war, paused.","Una guerra milenaria, en pausa.","持续千年的战争，暂时停火。")}</h2>
      <p style="margin-top:14px;color:var(--ink-soft)">${i("A thousand-year war between two mecha factions, the Lumisarians and the Nocturians, pauses when Divine Wind’s ship appears with a message of peace. Epsilon, young heir of the Nocturian ship Gear, leaves home to find his idol, is tricked by the Wicked Hunting Group and dragged into a gang war, and Prince Gladius arrives in pursuit. When Epsilon claims an ancient Star Disc, predators close in from every side, and a long-missing teacher returns, ready to reveal the secret that overturned the star region.","Una guerra milenaria entre dos facciones de mechas, lumisarios y nocturnos, se detiene cuando aparece la nave de Divine Wind con un mensaje de paz. Epsilon, joven heredero de la nave nocturna Gear, deja su hogar para buscar a su ídolo, cae en la trampa del Grupo de Caza Perverso y es arrastrado a una guerra de bandas; el príncipe Gladius llega en su persecución. Cuando Epsilon se hace con un antiguo Disco Estelar, los depredadores acuden de todas partes y regresa un maestro desaparecido hace tiempo, dispuesto a revelar el secreto que dio la vuelta a la región estelar.","两大机甲阵营 Lumisarians 与 Nocturians 之间持续千年的战争，因 Divine Wind 带着和平讯息的飞船出现而暂歇。Nocturians 飞船 Gear 的年轻继承人 Epsilon 为寻找偶像离家出走，被“邪恶猎杀团”设计卷入帮派之争，Gladius 王子随后追至，三方冲突升级。Epsilon 意外得到远古星盘，各方猎手蜂拥而至，而失踪已久的恩师归来，准备揭开颠覆星域的秘密。")}</p>
      <div class="facts-line" style="margin-top:24px"><div><b>2026</b><span>${i("IP 10th anniversary","10.º aniversario de la IP","IP十周年")}</span></div><div><b>Asia</b><span>${i("Established fan base","Base de fans consolidada","拥有一定粉丝基础")}</span></div><div><b>4.71%</b><span>${i("Peak TVRR, #1 in channel","TVRR máx., n.º 1 del canal","最高TVRR，频道第一")}</span></div></div>
      <p class="fine">${i("Historical broadcast data from prior Chinese TV broadcasts of the franchise; channel-level detail on request.","Datos históricos de emisiones anteriores de la franquicia en TV china; detalle por canal bajo petición.","该系列此前在中国电视台播出的历史数据；分频道明细可按需提供。")}</p></div>
      <div><dl class="spec" style="margin:0">${facts.map(f=>`<dt>${f[0]}</dt><dd>${esc(f[1])}</dd>`).join("")}</dl></div></div></section>
     <section class="sec band"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("IP 10th anniversary · 2016–2026","10.º aniversario de la IP · 2016–2026","IP十周年 · 2016–2026")}</div><h2>${i("Ten years of light and shadow.","Diez años de luz y sombra.","光影十年。")}</h2>
      <p>${i("November 11, 2026 marks ten years of the franchise: Season 1 in 2016, Season 2 in 2017 and Season 3, AWAKENING, in 2026. The anniversary opens with a week of fan events from November 11 to 20.","El 11 de noviembre de 2026 la franquicia cumple diez años: temporada 1 en 2016, temporada 2 en 2017 y temporada 3, AWAKENING, en 2026. El aniversario se celebra con una semana de actividades para fans del 11 al 20 de noviembre.","2026年11月11日，系列迎来十周年：2016年第一季，2017年第二季，2026年第三季《觉醒》。十周年以11月11日至20日的粉丝活动周开启。")}</p></div>
      <a href="img/mc/anniversary10.jpg" target="_blank" rel="noopener" style="display:block"><img src="img/mc/anniversary10.jpg" alt="${i("MECHASIA 10th anniversary poster: fan event schedule, November 11–20, and ten-year timeline 2016–2026","Cartel del 10.º aniversario de MECHASIA: calendario de actividades del 11 al 20 de noviembre y cronología 2016–2026","MECHASIA十周年海报：11月11日至20日粉丝活动日程及2016–2026十年时间线")}" loading="lazy" decoding="async" width="1448" height="1086" style="width:100%;height:auto;border-radius:4px"></a>
      <p class="fine" style="border-top:0;padding-top:0;margin-top:14px">${i("Click the poster to view it at full size.","Haga clic en el cartel para verlo a tamaño completo.","点击海报可查看大图。")}</p></div></section>
     <section class="sec"><div class="wrap"><div class="sec-head" style="margin-bottom:22px"><div class="eyebrow">${i("Stills","Imágenes","剧照")}</div></div>
      <div class="gallery">${[1,2,3,4,5,6].map(n=>`<img src="img/mc/still${n}.jpg" alt="MECHASIA: AWAKENING still ${n}" loading="lazy">`).join("")}</div></div></section>
     <section class="sec tint"><div class="wrap studio" style="align-items:center"><div><div class="eyebrow">${i("Producer","Productor","制作方")}</div><h2 style="margin-top:10px">Original Dream</h2>
      <p style="margin-top:6px;font:500 13px var(--mono);color:var(--ink-soft)">Guangzhou Yuanchu Animation Co., Ltd.${lang==="zh"?" · 广州原初动画有限公司":""} · F5</p></div>
      <div><p style="color:var(--ink-soft)">${i("A film and animation company that joins toy products, IP content and digital assets: content drives product, product spreads content. Credits include MECHASIA, Fruity Robo, Arc of War and Dragon Force.","Una compañía de cine y animación que une juguetes, contenido de IP y activos digitales: el contenido impulsa el producto y el producto difunde el contenido. Entre sus créditos figuran MECHASIA, Fruity Robo, Arc of War y Dragon Force.","一家融合玩具产品、IP内容与数字资产的影视动画公司，奉行“内容驱动产品、产品传播内容”。代表作包括《机变战队》《Fruity Robo》《Arc of War》《Dragon Force》。")}</p>
      <div class="facts-line"><div><b>4,000+</b><span>${i("Minutes produced","Minutos producidos","累计制作分钟")}</span></div><div><b>50+</b><span>${i("Digital artists","Artistas digitales","数字艺术家")}</span></div><div><b>300+</b><span>${i("Projects","Proyectos","项目")}</span></div></div></div></div></section>`;
  }else{
    const TH=[
     ["sportscar",["Sports car","Coche deportivo","跑车"],["divine","deathtone"],"WY1001 · WY1006","15 cm",
      ["Speed and rebellion. Two heroes share this form: Divine Wind, the free-spirited captain who becomes an enemy to both factions, and Deathtone, the scheming comic relief who later reforms.","Velocidad y rebeldía. Dos héroes comparten esta forma: Divine Wind, el capitán libre que se enfrenta a ambos bandos, y Deathtone, el alivio cómico intrigante que luego se redime.","速度与叛逆。两位英雄共用这一形态：不受约束、同时成为两大阵营之敌的 Divine Wind，以及爱耍心眼、后来改过自新的搞笑担当 Deathtone。"]],
     ["truck",["Truck","Camión","卡车"],["gladius"],"WY1002","16.6 cm",
      ["Heavy-duty presence. Prince Gladius, the cool-headed avenger behind a hero’s mask, is the tallest figure in the range at 16.6 cm.","Presencia de gran potencia. El príncipe Gladius, el vengador sereno tras la máscara de héroe, es la figura más alta de la gama con 16,6 cm.","重型气场。藏在英雄面具后的冷静复仇者 Gladius 王子，是整个系列中最高的一款，达16.6厘米。"]],
     ["train",["Train","Tren","火车"],["epsilon"],"WY1003","15 cm",
      ["The story’s heart. Epsilon, the young rookie who by chance claims powerful technology, is the character children follow from the first episode.","El corazón de la historia. Epsilon, el joven novato que por azar obtiene una tecnología poderosa, es el personaje al que los niños siguen desde el primer episodio.","故事的核心。偶然获得强大科技的年轻新人 Epsilon，是孩子们从第一集起就追随的主角。"]],
     ["lunar",["Lunar rover","Vehículo lunar","月球车"],["mystic"],"WY1004","15 cm",
      ["The mysterious one. Mystic Lock, sniper and necromancer of the Wicked Hunting Group, who often vanishes without a trace.","El misterioso. Mystic Lock, francotirador y nigromante del Grupo de Caza Perverso, que a menudo desaparece sin dejar rastro.","神秘担当。“邪恶猎杀团”的狙击手与亡灵法师 Mystic Lock，常常神出鬼没。"]],
     ["heli",["Helicopter","Helicóptero","直升机"],["machiapter"],"WY1005","15 cm",
      ["Takes to the air. Machiapter, the lazy genius and core member of the main combat faction.","Se lanza al aire. Machiapter, el genio perezoso y miembro clave de la facción de combate principal.","翱翔天际。懒散的天才、主战阵营的核心成员 Machiapter。"]],
     ["ship",["Spaceship","Nave espacial","飞船"],["sidewinder"],"WY1007","15 cm",
      ["Takes the range into space. Sidewinder, the passionate hero with a heart full of fire and a core fighter of the main faction.","Lleva la gama al espacio. Sidewinder, el héroe apasionado con el corazón en llamas y combatiente clave de la facción principal.","把系列带入太空。满腔热血的热情英雄 Sidewinder，主战阵营的核心战士。"]]];
    const waveOf=n=>MH.find(h=>h[0]===n)[5];
    const rows=MH.map(h=>{const p=mhp(h[2]);return `<tr><td>${h[2]}</td><td><b>${h[1]}</b></td><td>${L3(h[3])}</td><td>${h[4]}</td><td>${p[0]}</td><td>24</td><td>${p[1]}</td><td>${p[2]}</td><td>${h[5]}</td></tr>`}).join("");
    const models=[
     [i("Distribution partner","Socio de distribución","分销伙伴"),i("Regional distributors and importers who bring the full seven-hero range to their market: open-window colour boxes, 24 pieces per master carton, ages 6+.","Distribuidores e importadores regionales que llevan la gama completa de siete héroes a su mercado: cajas de color con ventana, 24 piezas por caja máster, mayores de 6 años.","把完整七款英雄系列带入本地市场的区域分销商与进口商：开窗彩盒，每外箱24件，适龄6岁以上。")],
     [i("IP licensing","Licencias de IP","IP授权"),i("Brand owners and manufacturers who want to license the MECHASIA: AWAKENING IP and make or sell products for their own territory.","Titulares de marcas y fabricantes que quieren licenciar la IP de MECHASIA: AWAKENING y fabricar o vender productos en su territorio.","希望获得《机变战队：觉醒》IP授权，在本地区生产或销售产品的品牌方与制造商。")],
     [i("Derivative development","Desarrollo de derivados","衍生品开发"),i("Partners who want to co-develop new MECHASIA products and line extensions beyond the current seven figures, backed by the series on screen.","Socios que quieren codesarrollar nuevos productos y extensiones de línea de MECHASIA más allá de las siete figuras actuales, respaldados por la serie en pantalla.","希望与我们共同开发新的机变战队产品与系列延伸、突破现有七款玩具的合作伙伴，并有剧集内容的支持。")]];
    body=`<section class="sec"><div class="wrap">
      <div class="sec-head"><div class="eyebrow">${i("Derivative development · iUBEST toy line","Desarrollo de derivados · línea de juguetes iUBEST","衍生品开发 · iUBEST玩具线")}</div><h2>${i("We are looking for toy and derivative partners.","Buscamos socios de juguetes y derivados.","我们正在寻找玩具与衍生品合作伙伴。")}</h2>
      <p class="lede">${i("MECHASIA already has a dual-form toy line with strong sales in China and Asia, built around six vehicle themes. We now want partners to take it to the rest of the world and to develop new products around the series.","MECHASIA ya cuenta con una línea de juguetes de doble forma con grandes ventas en China y Asia, construida en torno a seis temas de vehículos. Ahora buscamos socios que la lleven al resto del mundo y desarrollen nuevos productos en torno a la serie.","机变战队已有一条围绕六大座驾主题打造、在中国和亚洲销售成绩出色的双形态玩具线。现在我们希望找到合作伙伴，把它带到世界其他地区，并围绕剧集开发新的产品。")}</p></div>
      <div class="facts-line" style="margin-top:0"><div><b>6</b><span>${i("Vehicle themes","Temas de vehículo","座驾主题")}</span></div><div><b>7</b><span>${i("Collectible heroes","Héroes coleccionables","收藏英雄")}</span></div><div><b>${i("China & Asia","China y Asia","中国与亚洲")}</b><span>${i("Proven sales","Ventas probadas","已验证销售")}</span></div><div><b>6+</b><span>${i("Age grading","Edad recomendada","适龄")}</span></div><div><b>24</b><span>${i("Pcs per carton","Piezas por caja","每箱件数")}</span></div></div></div></section>
     <section class="sec tint"><div class="wrap">
      <div class="sec-head"><div class="eyebrow">${i("The six themed toys","Los seis juguetes temáticos","六大主题玩具")}</div><h2>${i("Six themes. Seven heroes. Two forms each.","Seis temas. Siete héroes. Dos formas cada uno.","六大主题，七位英雄，各有两种形态。")}</h2>
      <p class="lede">${i("Every figure is a robot hero and a vehicle in one. The vehicle gives each toy its theme, and each theme gives a hero his place in the story. Wave 1 is the five launch characters; wave 2 adds two more so shops can build one shelf from the full seven.","Cada figura es un héroe robot y un vehículo a la vez. El vehículo da a cada juguete su tema y cada tema da a un héroe su lugar en la historia. La oleada 1 son los cinco personajes de lanzamiento; la oleada 2 añade dos más para que las tiendas monten un lineal con los siete.","每一款都是机器人英雄与座驾合二为一。座驾决定了玩具的主题，主题也让每位英雄在故事里各有定位。第一批为五款首发角色，第二批再加两款，零售商可用全部七款陈列一整个货架。")}</p></div>
      <div class="hcards">${TH.map((t,n)=>`<article class="hcard"><div class="himg ${t[2].length>1?"two":""}">${t[2].map(k=>`<img src="img/mc/${k}.jpg" alt="${esc(MH.find(h=>h[0]===k)[1])}" loading="lazy">`).join("")}</div><div><div class="hno">${i("Theme","Tema","主题")} ${n+1} · ${t[3]}</div><h3>${L3(t[1])}</h3><div class="chips" style="margin:8px 0 10px">${t[2].map(k=>`<span class="chip g">${esc(MH.find(h=>h[0]===k)[1])}</span>`).join("")}<span class="chip">${t[4]}</span><span class="chip">${i("Wave","Oleada","第")} ${[...new Set(t[2].map(waveOf))].join("/")}${lang==="zh"?" 批":""}</span></div><p>${esc(L3(t[5]))}</p></div></article>`).join("")}</div></div></section>
     <section class="sec"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("How we can work together","Cómo podemos colaborar","合作方式")}</div><h2>${i("Three ways in.","Tres formas de entrar.","三种合作方式。")}</h2>
      <p class="lede">${i("The series and the toys are sold together. A broadcaster or platform carrying MECHASIA gives the toy line a screen, and the toy line gives the series a shelf.","La serie y los juguetes se venden juntos. Una cadena o plataforma que emite MECHASIA da pantalla a la línea de juguetes, y la línea de juguetes da estantería a la serie.","剧集与玩具捆绑推广：电视台或平台播出机变战队，为玩具提供屏幕；玩具产品则为剧集提供货架。")}</p></div>
      <div class="mods">${models.map(m=>`<div class="mod"><h3>${m[0]}</h3><p>${m[1]}</p></div>`).join("")}</div></div></section>
     <section class="sec tint"><div class="wrap studio" style="align-items:center"><div><div class="eyebrow">${i("Retail packaging","Embalaje comercial","零售包装")}</div><h2 style="margin-top:10px">${i("The figure sells itself.","La figura se vende sola.","让玩具自己说话。")}</h2>
      <ul class="list" style="grid-template-columns:1fr;margin-top:18px"><li><b>${i("Open-window colour box","Caja de color con ventana","开窗彩盒")}</b> ${i("shows the figure on shelf","muestra la figura en el lineal","货架上直接展示玩具")}</li><li><b>${i("Dual-form artwork","Arte de doble forma","双形态画面")}</b> ${i("robot and vehicle with a call-out","robot y vehículo con distintivo","机器人与座驾画面，附双形态标识")}</li><li><b>${i("Range panel","Panel de gama","系列侧面板")}</b> ${i("side panel shows the whole collection","el lateral muestra toda la colección","侧面展示整个系列角色")}</li><li><b>${i("Age grading 6+","Edad 6+","适龄6岁以上")}</b> ${i("on every box, 24 pcs per master carton","en cada caja, 24 piezas por caja máster","每盒标注，每外箱24件")}</li></ul></div>
      <img src="img/mc/packaging.jpg" alt="MECHASIA: AWAKENING retail packaging" loading="lazy" style="width:100%;border-radius:2px"></div></section>
     <section class="sec"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("Trade information","Información comercial","贸易信息")}</div><h2>${i("Specifications at a glance.","Especificaciones de un vistazo.","规格一览。")}</h2></div>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${i("Item no.","Ref.","货号")}</th><th>${i("Character","Personaje","角色")}</th><th>${i("Alt. form","Forma alt.","第二形态")}</th><th>${i("Height","Altura","高度")}</th><th>${i("Pack size (mm)","Envase (mm)","彩盒尺寸 (mm)")}</th><th>${i("Pcs/ctn","Uds/caja","件/箱")}</th><th>${i("Carton (mm)","Caja (mm)","外箱 (mm)")}</th><th>m³</th><th>${i("Wave","Oleada","批次")}</th></tr></thead><tbody>${rows}</tbody></table></div>
      <p class="fine" style="margin-top:12px">${i("Prices, EAN / barcodes, weights and shipping terms on request.","Precios, EAN / códigos de barras, pesos y condiciones de envío bajo petición.","价格、EAN条码、重量与运输条款可按需提供。")}</p></div></section>
     <section class="sec band"><div class="wrap"><div class="eyebrow">${i("Talk to us","Hable con nosotros","联系我们")}</div><h2 style="margin-top:10px">${i("Distributor, licensee or developer?","¿Distribuidor, licenciatario o desarrollador?","分销商、授权方还是产品开发方？")}</h2><div style="margin-top:16px">${contactLines("on-dark")}</div><div style="margin-top:18px"><button class="btn gold" data-contact="partner">${i("Start a conversation","Iniciar conversación","开启合作")} →</button></div></div></section>`;
  }
  return hero+tabbar+body;
}

/* ---------- about ---------- */
function vAbout(){
  return `<section class="sec" style="padding-top:44px"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("About us","Nosotros","关于我们")}</div><h2>${i("Connecting China, Spain and Latin America through content and rights.","Conectando China, España y América Latina a través de contenidos y derechos.","以内容与版权，连接中国、西班牙与拉丁美洲。")}</h2></div>
    <div class="people"><div><h3>${i("Company profile","Perfil de la empresa","公司简介")}</h3>
      <p style="margin-top:14px;color:var(--ink-soft)">${i("BELLOTA BLANCA FILM & PRODUCCIONES S.L. (白橡树电影制片公司) is a Madrid-registered company that sells, represents and produces audiovisual content between China and the Spanish- and Portuguese-speaking worlds. We partner with China’s leading production companies and take their content to film festivals and markets. Together with our Chinese company XIN MOTION PICTURE in Shanghai, we work on both sides of the market. Our first priority is rights sales. Representation, acquisition, co-production and IP development follow.","BELLOTA BLANCA FILM & PRODUCCIONES S.L. (白橡树电影制片公司) es una empresa con sede en Madrid que vende, representa y produce contenido audiovisual entre China y el mundo hispano y lusófono. Nos asociamos con las principales productoras de China y llevamos sus contenidos a festivales de cine y mercados. Junto con nuestra empresa china XIN MOTION PICTURE, en Shanghái, trabajamos en ambos lados del mercado. Nuestra primera prioridad es la venta de derechos. Después vienen la representación, la adquisición, la coproducción y el desarrollo de IP.","白橡树电影制片公司（BELLOTA BLANCA FILM & PRODUCCIONES S.L.）是一家位于马德里的公司，在中国与西语、葡语世界之间销售、代理并制作影视内容。我们联合中国的头部制作公司，将其内容带到电影节与影视市场。我们在上海设有中国公司 XIN MOTION PICTURE，业务覆盖市场两端。我们的首要业务是版权销售，其后依次是代理、采购、联合制作与IP开发。")}</p>
      <h3 style="margin-top:30px">${i("Our companies","Nuestras empresas","旗下公司")}</h3>
      <dl class="spec" style="margin-top:12px"><dt>${i("Spain","España","西班牙")}</dt><dd><b>BELLOTA BLANCA FILM & PRODUCCIONES S.L.</b><br>${i("Madrid · international rights sales and representation","Madrid · venta y representación internacional de derechos","马德里 · 国际版权销售与代理")}</dd>
      <dt>${i("China","China","中国")}</dt><dd><b>XIN MOTION PICTURE</b><br>${i("Shanghai · documentaries, film co-production and AI vertical content","Shanghái · documentales, coproducción de cine y contenido vertical con IA","上海 · 纪录片、电影联合制作与AI竖屏内容")}</dd>
      <dt>${i("China","China","中国")}</dt><dd><b>${i("AI Content Factory Base","Base de producción de contenido con IA","AI内容工厂基地")}</b><br>${i("Guangzhou · we develop and produce AI content in vertical and horizontal formats. Sample reels on request.","Cantón (Guangzhou) · desarrollamos y producimos contenido con IA en formato vertical y horizontal. Muestras bajo petición.","广州 · 开发并制作AI内容，含竖屏与横屏。可联系索取样片。")}<br><button class="btn sm gold" style="margin-top:12px" data-contact="buy">${i("Request sample reels","Pedir muestras","索取样片")} →</button></dd></dl></div>
      <div><h3>${i("Where we work","Dónde trabajamos","业务网络")}</h3>
      <ul class="list" style="grid-template-columns:1fr;margin-top:12px"><li><b>${i("China business network","Red de negocio en China","中国业务网络")}</b> ${i("leading production companies, animation groups, rights-holders","principales productoras, grupos de animación, titulares de derechos","头部制作公司、动画集团、版权方")}</li><li><b>${i("Festivals & markets","Festivales y mercados","电影节与市场")}</b> ${i("film festivals and content markets","festivales de cine y mercados de contenidos","电影节与影视内容市场")}</li><li><b>${i("Spain business base","Base de negocio en España","西班牙业务基地")}</b> Madrid</li><li><b>${i("Latin American market network","Red de mercados latinoamericanos","拉美市场网络")}</b> ${i("broadcasters, platforms, distributors","cadenas, plataformas, distribuidores","电视台、平台、发行商")}</li></ul></div></div></div></section>`;
}

function vNetwork(){
  const mk=(c,live)=>`<span class="${live?"live":""}">${c}</span>`;
  return `<section class="sec" style="padding-top:44px"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Distribution network","Red de distribución","国际发行网络")}</div><h2>${i("China — Spain — Latin America.","China — España — América Latina.","中国 — 西班牙 — 拉丁美洲。")}</h2>
    <p class="lede">${i("Content comes from China, deals are made from Madrid, and the buyers are in Iberia and Latin America. Markets in gold have already received our own programming; the full list of countries is available on request. The rest are markets we are working toward.","El contenido viene de China, los acuerdos se cierran desde Madrid y los compradores están en Iberia y América Latina. Los mercados en dorado ya han recibido programación propia. El resto son mercados hacia los que trabajamos.","内容来自中国，交易在马德里达成，买家在伊比利亚与拉丁美洲。金色标记的市场已播出过我们自制的节目，其余为我们正在拓展的目标市场。")}</p></div>
    ${mapSVG()}
    <div class="regions">
      <div class="region"><div class="eyebrow">IBERIA</div><h3>Spain / Portugal</h3><div class="mk">${mk("Spain")}${mk("Portugal")}</div><p style="font-size:14.5px;color:var(--ink-soft)">${i("Spain is our operating base. Portugal is a target market.","España es nuestra base operativa. Portugal es un mercado objetivo.","西班牙为我们的运营基地，葡萄牙为目标市场。")}</p></div>
      <div class="region"><div class="eyebrow">LATIN AMERICA</div><h3>${i("Latin America","América Latina","拉丁美洲")}</h3><div class="mk">${mk("Colombia",1)}${mk("Peru",1)}${mk("Mexico")}${mk("Brazil")}${mk("Argentina")}${mk("Chile")}${mk("Ecuador")}${mk("Uruguay")}${mk("Panama")}</div><p style="font-size:14.5px;color:var(--ink-soft)">${i("Brazil is run as a separate Portuguese-language market, with Portuguese catalogue and sales material planned.","Brasil se trabaja como mercado independiente en portugués, con catálogo y material de ventas en portugués previstos.","巴西作为独立的葡语市场运营，计划增加葡语目录与商务资料。")}</p></div>
      <div class="region"><div class="eyebrow">GLOBAL MARKETS</div><h3>${i("Other markets","Otros mercados","其他市场")}</h3><div class="mk">${mk("US Hispanic")}${mk(i("Other territories","Otros territorios","其他地区"))}</div><p style="font-size:14.5px;color:var(--ink-soft)">${i("The US Spanish-language market is the next stage of expansion.","El mercado hispano de EE. UU. es la siguiente fase de expansión.","美国西语市场是后续拓展方向。")}</p></div>
    </div>
    <div class="legend"><span><i style="background:var(--gold)"></i>${i("Smart Pulse Season 1 broadcast","Emisión de Smart Pulse temporada 1","《Smart Pulse》第一季播出")}</span><span><i style="border:1px dashed var(--ink-soft)"></i>${i("Target market, no partnership implied","Mercado objetivo, sin alianza implícita","目标市场，不代表合作关系")}</span></div>
  </div></section>
  <section class="sec tint"><div class="wrap"><div class="sec-head"><div class="eyebrow">${i("Network layers","Capas de la red","网络构成")}</div><h2>${i("Five layers behind each deal.","Cinco capas detrás de cada acuerdo.","每笔交易背后的五个层面。")}</h2></div>
    <div class="mods">${[
     [i("Chinese content resources","Recursos de contenido chino","中国内容资源网络"),i("Producers, animation groups and partner libraries that supply titles.","Productoras, grupos de animación y catálogos de socios que aportan títulos.","提供作品的制作公司、动画集团与合作片库。")],
     [i("Spain business base","Base de negocio en España","西班牙业务基地"),i("Madrid office for contracts, buyer relations and European events.","Oficina en Madrid para contratos, relación con compradores y eventos europeos.","马德里办公室，负责合同、买家关系与欧洲展会。")],
     [i("Latin American buyers","Compradores latinoamericanos","拉美采购与发行网络"),i("Broadcasters, platforms and local distributors we are building relationships with.","Cadenas, plataformas y distribuidores locales con los que construimos relaciones.","我们正在建立联系的电视台、平台与本地发行商。")],
     [i("TV and streaming channels","Canales de TV y streaming","电视与流媒体渠道"),i("Smart Pulse Season 1 aired in 5 countries on 10+ channels; Season 2 adds streaming and social.","Smart Pulse temporada 1 se emitió en 5 países y más de 10 canales; la 2 suma streaming y redes.","《智汇中拉》第一季在5个国家、10余个频道播出，第二季增加流媒体与社交渠道。")],
     [i("Rights markets","Mercados de derechos","国际版权交易市场"),i("Presence at industry markets such as the Bogotá Audiovisual Market.","Presencia en mercados del sector como el Bogotá Audiovisual Market.","参加波哥大视听市场等行业交易会。")],
    ].map(m=>`<div class="mod"><h3>${m[0]}</h3><p>${m[1]}</p></div>`).join("")}</div></div></section>`;
}

function vCoprod(){
  const mods=[[i("International Co-production","Coproducción internacional","国际联合制作"),i("Shared creative and financial responsibility across borders.","Responsabilidad creativa y financiera compartida entre países.","跨国分担创作与融资责任。")],[i("Chinese–Spanish projects","Proyectos chino–españoles","中西合作项目"),i("Projects developed between Madrid and China.","Proyectos desarrollados entre Madrid y China.","在马德里与中国之间共同开发的项目。")],[i("Chinese–Latin American projects","Proyectos chino–latinoamericanos","中拉合作项目"),i("Stories and productions built with Latin American partners.","Historias y producciones con socios latinoamericanos.","与拉美伙伴共同打造的故事与制作。")],[i("IP development","Desarrollo de IP","IP开发"),i("Building a property across screen, product and licensing.","Construir una propiedad a través de pantalla, producto y licencias.","打通屏幕、产品与授权的IP开发。")],[i("Format adaptation","Adaptación de formatos","Format改编"),i("Local versions of shows and formats.","Versiones locales de programas y formatos.","节目与Format的本地化版本。")],[i("Remake opportunities","Oportunidades de remake","翻拍机会"),i("Local remakes of successful series and films.","Remakes locales de series y películas de éxito.","成功剧集与电影的本地翻拍。")],[i("Animation co-production","Coproducción de animación","动画联合制作"),i("Co-developed animated series and films.","Series y películas de animación desarrolladas en conjunto.","联合开发的动画剧集与电影。")]];
  const sp=byId("sp2");
  return `<section class="sec" style="padding-top:44px"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Co-production & IP","Coproducción e IP","联合制作与IP")}</div><h2>${i("Building new projects with partners.","Construyendo nuevos proyectos con socios.","与伙伴共同打造新项目。")}</h2>
    <p class="lede">${i("Co-production supports our sales business. We take on a small number of projects where a partner brings finance, access or a local audience.","La coproducción apoya nuestro negocio de ventas. Asumimos pocos proyectos en los que un socio aporta financiación, acceso o audiencia local.","联合制作是销售业务的补充。我们只参与少数项目，通常是合作方能带来资金、渠道或本地观众。")}</p></div>
    <ul class="list">${mods.map(m=>`<li><b>${m[0]}</b><br><span style="color:var(--ink-soft);font-size:14.5px">${m[1]}</span></li>`).join("")}</ul></div></section>
  <section class="sec tint"><div class="wrap"><div class="studio" style="align-items:center"><div><div class="eyebrow">${i("In practice","En la práctica","实例")}</div><h2 style="margin-top:12px">Smart Pulse · ${i("Season 2","Temporada 2","第二季")}</h2>
    <p class="lede" style="margin-top:14px">${i("A China–Latin America documentary built with partners on both sides. Latin American hosts visit Chinese-invested companies at home, then travel to China to see where the technology starts. Production begins in 2026; broadcast follows in 2027 in Spanish and Portuguese.","Un documental China–América Latina construido con socios de ambos lados. Presentadores latinoamericanos visitan en su país a empresas con capital chino y luego viajan a China para ver dónde nace la tecnología. La producción empieza en 2026 y la emisión llega en 2027, en español y portugués.","一部与中拉双方伙伴共同打造的纪录片。拉美主持人先在本国走访中资企业，再前往中国，探访技术的源头。2026年开拍，2027年以西语和葡语播出。")}</p>
    <div style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap"><button class="btn" data-open="sp2">${i("Open title","Abrir ficha","查看详情")}</button><button class="btn gold" data-contact="partner">${i("Propose a project","Proponer un proyecto","提出合作项目")} →</button></div></div>
    <div class="gallery"><img src="img/sp/h1.jpg" alt="" loading="lazy"><img src="img/sp/h2.jpg" alt="" loading="lazy"><img src="img/sp/h3.jpg" alt="" loading="lazy"><img src="img/sp/h4.jpg" alt="" loading="lazy"><img src="img/sp/key.jpg" alt="" loading="lazy"></div></div></div></section>`;
}

function formFields(kind,preset={}){
  const rights=["free","pay","svod","avod","fast","digital","format","remake","license"].map(k=>`<label><input type="checkbox" name="rights" value="${k}"${(preset.rights||[]).includes(k)?" checked":""}>${esc(rt(k))}</label>`).join("");
  const plat=[[i("Broadcaster","Cadena de TV","电视台"),"Broadcaster"],[i("Streaming platform","Plataforma de streaming","流媒体平台"),"Streaming"],[i("Distributor","Distribuidor","发行商"),"Distributor"],[i("FAST / AVOD","FAST / AVOD","FAST / AVOD"),"FAST/AVOD"],[i("Other","Otro","其他"),"Other"]].map(p=>`<label><input type="checkbox" name="platform" value="${p[1]}">${p[0]}</label>`).join("");
  const f=(id,label,type="text",req=false,full=false,val="")=>`<div class="fld${full?" full":""}"><label for="${id}">${label}${req?" *":""}</label>${type==="textarea"?`<textarea id="${id}" name="${id}"${req?" required":""}>${esc(val)}</textarea>`:`<input id="${id}" name="${id}" type="${type}"${req?" required":""} value="${esc(val)}" ${type==="email"?'autocomplete="email"':""}>`}</div>`;
  const common=f("q-name",i("Name","Nombre","姓名"),"text",true)+f("q-company",i("Company","Empresa","公司"),"text",true)+f("q-country",i("Country","País","国家"),"text",true)+f("q-email",i("Business email","Correo profesional","工作邮箱"),"email",true)+f("q-pos",i("Position","Cargo","职位"));
  if(kind==="submit")return common+f("q-title",i("Project title","Título del proyecto","项目名称"),"text",true)+f("q-info",i("Format, episodes, runtime","Formato, episodios, duración","类型、集数、时长"))+f("q-held",i("Rights you hold","Derechos que posee","您持有的权利"))+f("q-terr",i("Territories to offer","Territorios a ofrecer","可授权地区"))+f("q-link",i("Link to materials","Enlace a materiales","资料链接"),"text",false,true)+f("q-msg",i("Message","Mensaje","留言"),"textarea",false,true);
  if(kind==="partner")return common+f("q-type",i("Type of organisation","Tipo de organización","机构类型"),"text",false,true)+f("q-msg",i("How would you like to work together?","¿Cómo te gustaría colaborar?","希望如何合作？"),"textarea",true,true);
  return common+f("q-title",i("Interested project","Proyecto de interés","感兴趣的项目"),"text",false,true,preset.title||"")+`<div class="fld full"><label>${i("Rights required","Derechos requeridos","所需权利")}</label><div class="checks">${rights}</div></div>`+f("q-terr",i("Territory","Territorio","地区"),"text",false,false,preset.terr||"")+`<div class="fld"><label>${i("Platform","Plataforma","平台")}</label><div class="checks">${plat}</div></div>`+f("q-msg",i("Message","Mensaje","留言"),"textarea",false,true);
}
function formHTML(kind,preset){
  return `<form class="form" id="inq-form" data-kind="${kind}" novalidate>${formFields(kind,preset)}<div class="full" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><button class="btn gold" type="submit">${i("Prepare inquiry","Preparar consulta","生成询价")} →</button><span class="fine">${i("We use your details only to reply to this inquiry.","Usamos tus datos solo para responder a esta consulta.","您的信息仅用于回复本次询价。")}</span></div><div class="full" id="inq-out"></div></form>`;
}
function vContact(){
  const tabs=[["buy",i("Buy content","Comprar contenido","购买内容")],["submit",i("Submit content","Enviar contenido","提交内容")],["partner",i("Partner with us","Colabora con nosotros","合作洽谈")]];
  const sub={buy:i("For broadcasters, platforms and distributors.","Para cadenas, plataformas y distribuidores.","面向电视台、平台与发行商。"),submit:i("For Chinese production companies and rights-holders.","Para productoras y titulares de derechos chinos.","面向中国制作公司与版权方。"),partner:i("For overseas distributors, producers and institutions.","Para distribuidores, productores e instituciones del exterior.","面向海外发行商、制作公司与机构。")};
  return `<section class="sec" style="padding-top:44px"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Contact","Contacto","商务联系")}</div><h2>${i("Tell us what you want to buy, sell or build.","Cuéntanos qué quieres comprar, vender o construir.","告诉我们您想购买、销售或共建什么。")}</h2></div>
    <div class="cform"><div>
      <div class="tabs" style="margin-bottom:8px">${tabs.map(t=>`<button data-ctab="${t[0]}" aria-pressed="${contactTab===t[0]}">${t[1]}</button>`).join("")}</div>
      <p class="fine" style="margin-bottom:22px">${sub[contactTab]}</p>
      <div id="cform-host">${formHTML(contactTab,{})}</div></div>
    <aside class="addr"><div><b>${i("Company","Empresa","公司")}</b>BELLOTA BLANCA FILM & PRODUCCIONES S.L.<br>白橡树电影制片公司</div><div><b>${i("Office","Oficina","办公地点")}</b>Madrid, Spain</div><div><b>${i("Sales & distribution","Ventas y distribución","销售与发行")}</b><span class="sel">${MAIL}</span> <button class="link" data-copy="${MAIL}" style="margin-left:8px">${i("Copy","Copiar","复制")}</button></div><div><b>${i("Founder & partnerships","Fundadora y alianzas","创始人与合作")}</b><span class="sel">${MAIL2}</span> <button class="link" data-copy="${MAIL2}" style="margin-left:8px">${i("Copy","Copiar","复制")}</button></div><div><b>${i("General enquiries","Consultas generales","综合咨询")}</b><span class="sel">${MAIL3}</span> <button class="link" data-copy="${MAIL3}" style="margin-left:8px">${i("Copy","Copiar","复制")}</button></div><div><b>WhatsApp</b><a href="${waLink}" target="_blank" rel="noopener" style="color:var(--gold-ink)">${PHONE}</a></div><div><b>${i("WeChat","WeChat","微信")}</b>363141461 · moranproduction</div><div><b>${i("Contact","Contacto","联系人")}</b>Moran 默然</div><div><b>${i("Languages","Idiomas","语言")}</b>English · Español · 中文</div></aside></div></div></section>`;
}

function footer(){
  return `<footer class="foot"><div class="wrap"><div class="foot-grid">
  <div><img src="img/logo.png" width="96" height="96" alt="BELLOTA BLANCA FILM & PRODUCCIONES S.L." style="display:block;margin-bottom:18px"><div class="tag">Connecting China, Spain and Latin America through Content & Rights.</div></div>
  <div><h4>${i("Explore","Explorar","导航")}</h4>${["catalogue","mechasia","rights","animation","network"].map(v=>`<button class="fl" data-go="${v}">${nav(v)}</button>`).join("")}</div>
  <div><h4>${i("Company","Empresa","公司")}</h4>${["coproduction","about","contact"].map(v=>`<button class="fl" data-go="${v}">${nav(v)}</button>`).join("")}${["Privacy Policy","Cookie Policy","Legal Notice","Terms of Use"].map((x,k)=>`<button class="fl" data-legal="${k}">${[i("Privacy Policy","Política de privacidad","隐私政策"),i("Cookie Policy","Política de cookies","Cookie政策"),i("Legal Notice","Aviso legal","法律声明"),i("Terms of Use","Condiciones de uso","使用条款")][k]}</button>`).join("")}</div></div>
  <p class="fine">© BELLOTA BLANCA FILM & PRODUCCIONES S.L. · Madrid, Spain · ${MAIL} · ${MAIL3} · WhatsApp ${PHONE}<br>${i("Titles, artwork and trademarks belong to their respective owners. Availability is indicative and subject to contract.","Los títulos, imágenes y marcas pertenecen a sus respectivos titulares. La disponibilidad es orientativa y está sujeta a contrato.","作品、图片与商标归各自权利人所有。授权情况仅供参考，以合同为准。")}</p></div></footer>`;
}

/* ---------- detail modal ---------- */
function openTitle(id){
  const it=byId(id);if(!it)return;
  const rights=(it.rights||[]);
  const dd=(k,v)=>v?`<dt>${k}</dt><dd>${v}</dd>`:"";
  const spec=[
    dd(i("Genre","Género","类型"),`<div class="chips">${(it.genres||[]).map(g=>`<span class="chip">${esc(gen(g))}</span>`).join("")}</div>`),
    dd(i("Country of origin","País de origen","制作国家"),esc(ctry(it.country))),
    dd(i("Licensor / producer","Titular / productor","版权方 / 制作方"),esc(lic(it.lic))),
    it.year?dd(i("Year","Año","年份"),esc(it.year)):"",
    it.prem?dd(i("Premiere","Estreno","首播"),esc(pick(it.prem))):"",
    it.plat?dd(i("Broadcast platforms","Plataformas de emisión","播出平台"),esc(pick(it.plat))):"",
    it.format?dd(i("Format","Formato","形式"),esc(it.format+" · "+it.age)):"",
    it.eps?dd(i("Episodes","Episodios","集数"),esc(pick(it.eps))):"",
    it.run?dd(i("Running time","Duración","时长"),esc(it.run.replace("total",i("total","en total","合计")))):"",
    it.audience?dd(i("Audience","Público","受众"),esc(pick(it.audience))):"",
    dd(i("Original language","Idioma original","原语言"),esc(lg(it.langs))),
    dd(i("Available subtitles","Subtítulos disponibles","可提供字幕"),it.subs?esc(pick(it.subs)):esc(i("Spanish / English on request","Español / inglés bajo petición","西语 / 英语字幕按需提供"))),
    dd(i("Production status","Estado de producción","制作状态"),esc(st(it.status))),
    it.dir?dd(i("Director","Director","导演"),esc(it.dir)):"",
    it.cast?dd(i("Cast","Reparto","主演"),esc(it.cast)):"",
    it.seasons?dd(i("Seasons","Temporadas","季数"),`<div class="seasons">${esc(it.seasons)}</div>`):"",
    dd(i("Rights available","Derechos disponibles","可授权权利"),rights.length?`<div class="chips">${rights.map(r=>`<span class="chip g">${esc(rt(r))}</span>`).join("")}</div><p class="fine" style="margin-top:8px">${i("Scope and exclusivity confirmed per contract.","Alcance y exclusividad confirmados por contrato.","范围与独家性以合同确认。")}</p>`:esc(i("Available on request, confirmed per contract.","Disponible bajo petición, confirmado por contrato.","可洽谈，以合同确认。"))),
    dd(i("Available territories","Territorios disponibles","可授权地区"),esc(terr(it.terr))),
  ].join("");
  const el=document.createElement("div");el.className="scrim";el.id="modal";el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");el.setAttribute("aria-label",title1(it));
  el.innerHTML=`<div class="panel"><button class="x" data-close aria-label="${i("Close","Cerrar","关闭")}">×</button><div class="pan-grid">${poster(it,{eager:true})}
   <div class="pan-main"><div><div class="eyebrow">${esc((it.cats||[]).map(catName).join(" · "))}</div><h2 style="margin-top:10px">${esc(title1(it))}</h2>${title2(it)?`<div class="pan-sub">${esc(title2(it))}</div>`:""}${it.sub?`<div class="pan-sub">${esc(pick(it.sub))}</div>`:""}</div>
   <div><div class="eyebrow" style="margin-bottom:6px">${i("Logline","Sinopsis breve","一句话简介")}</div><p style="font-size:17px">${esc(pick(it.lines))}</p></div>
   ${it.note?`<p style="color:var(--ink-soft)">${esc(pick(it.note))}</p>`:""}
   <dl class="spec">${spec}</dl>
   <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center"><button class="btn gold" data-inq>${i("Inquire about this title","Consultar este título","咨询此作品")} →</button>${it.id==="mecha"?`<button class="btn" data-go="mechasia">${i("Series, rights & toy partners","Serie, derechos y socios de juguetes","剧集、版权与玩具伙伴")} →</button>`:""}${it.trailer?`<a class="btn" href="${esc(it.trailer)}" target="_blank" rel="noopener">${i("Trailer","Tráiler","预告片")} ↗</a>`:""}</div>
   <div class="inq" id="inq" hidden>${formHTML("buy",{title:title1(it),terr:terr(it.terr),rights:rights.filter(r=>["svod","avod","fast","digital"].includes(r))})}</div></div></div></div>`;
  document.body.appendChild(el);document.body.style.overflow="hidden";
  el.querySelector(".x").focus();
}
function closeModal(){const m=$("#modal");if(m){m.remove();document.body.style.overflow=""}}
function openLegal(k){
  const names=[i("Privacy Policy","Política de privacidad","隐私政策"),i("Cookie Policy","Política de cookies","Cookie政策"),i("Legal Notice","Aviso legal","法律声明"),i("Terms of Use","Condiciones de uso","使用条款")];
  const el=document.createElement("div");el.className="scrim";el.id="modal";el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");
  el.innerHTML=`<div class="panel" style="width:min(560px,100%)"><button class="x" data-close aria-label="Close">×</button><div style="padding:34px"><div class="eyebrow">BELLOTA BLANCA</div><h2 style="font-size:28px;margin:10px 0 14px">${names[k]}</h2><p style="color:var(--ink-soft)">${i("The final text is supplied by legal counsel before launch and covers EU data protection (GDPR) and cookie requirements. Questions in the meantime:","El texto definitivo lo aporta el asesor legal antes del lanzamiento y cubre la protección de datos de la UE (RGPD) y los requisitos de cookies. Mientras tanto:","正式文本将在上线前由法律顾问提供，涵盖欧盟数据保护（GDPR）与Cookie要求。在此之前如有疑问：")} <b class="mono">${MAIL}</b></p></div></div>`;
  document.body.appendChild(el);document.body.style.overflow="hidden";el.querySelector(".x").focus();
}

/* ---------- inquiry submit ---------- */
function handleSubmit(form){
  const kind=form.dataset.kind;const out=form.querySelector("#inq-out");
  const fd=new FormData(form);const g=k=>(fd.get(k)||"").toString().trim();
  const req=[...form.querySelectorAll("[required]")].filter(x=>!x.value.trim());
  const email=g("q-email");
  if(req.length||(email&&!/^\S+@\S+\.\S+$/.test(email))){
    out.innerHTML=`<p class="err">${i("Please complete the required fields and use a valid email.","Completa los campos obligatorios e indica un correo válido.","请填写必填项并使用有效邮箱。")}</p>`;(req[0]||form.querySelector("#q-email")).focus();return;
  }
  const L=[];
  const head={buy:"Rights inquiry",submit:"Content submission",partner:"Partnership proposal"}[kind];
  L.push(`${head}${g("q-title")?" — "+g("q-title"):""}`,"");
  L.push(`Name: ${g("q-name")}`,`Company: ${g("q-company")}`,`Country: ${g("q-country")}`,`Email: ${email}`);
  if(g("q-pos"))L.push(`Position: ${g("q-pos")}`);
  if(kind==="buy"){const r=fd.getAll("rights").map(rt);const p=fd.getAll("platform");if(g("q-title"))L.push(`Interested project: ${g("q-title")}`);if(r.length)L.push(`Rights required: ${r.join(", ")}`);if(g("q-terr"))L.push(`Territory: ${g("q-terr")}`);if(p.length)L.push(`Platform: ${p.join(", ")}`)}
  if(kind==="submit"){["q-info","q-held","q-terr","q-link"].forEach((k,n)=>{if(g(k))L.push(`${["Format / episodes / runtime","Rights held","Territories to offer","Materials"][n]}: ${g(k)}`)})}
  if(kind==="partner"&&g("q-type"))L.push(`Organisation type: ${g("q-type")}`);
  if(g("q-msg"))L.push("","Message:",g("q-msg"));
  const body=L.join("\n");const subj=head+(g("q-title")?" — "+g("q-title"):"");
  out.innerHTML=`<div class="result"><b style="font-family:var(--display);font-size:20px">${i("Your inquiry is ready to send","Tu consulta está lista para enviar","您的询价已生成")}</b><p class="fine">${i("This preview site has no mail server, so nothing has been sent yet. Copy the message and email it to","Esta vista previa no tiene servidor de correo, así que todavía no se ha enviado nada. Copia el mensaje y envíalo a","此预览站没有邮件服务器，目前尚未发送任何内容。请复制下方内容并发送至")} <b>${MAIL}</b>.</p><pre id="inq-text">${esc(body)}</pre><div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn sm gold" type="button" data-copy-pre>${i("Copy message","Copiar mensaje","复制内容")}</button><a class="btn sm" href="mailto:${MAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}">${i("Open in mail app","Abrir en correo","在邮件应用中打开")}</a></div></div>`;
  out.scrollIntoView({block:"nearest",behavior:"smooth"});
}
function copyText(t,btn){
  const done=()=>{if(btn){const o=btn.textContent;btn.textContent=i("Copied","Copiado","已复制");setTimeout(()=>btn.textContent=o,1600)}};
  const fb=()=>{try{const r=document.createRange();const p=$("#inq-text");if(p){r.selectNodeContents(p);const s=getSelection();s.removeAllRanges();s.addRange(r)}}catch(e){}};
  try{navigator.clipboard.writeText(t).then(done,fb)}catch(e){fb()}
}

/* ---------- render & events ---------- */
function setLang(l){lang=l;try{localStorage.setItem("bb-lang",l)}catch(e){}document.documentElement.lang=l==="zh"?"zh-CN":l;render()}
function go(v,scrollTop=true){if(!VIEWS.includes(v))v="home";view=v;if(location.hash.slice(1)!==v){location.hash=v}render();if(scrollTop)window.scrollTo({top:0,behavior:"instant"})}
function render(){
  document.documentElement.lang=lang==="zh"?"zh-CN":lang;
  const views={home:vHome,catalogue:vCatalogue,mechasia:vMechasia,rights:vRights,animation:vAnimation,network:vNetwork,coproduction:vCoprod,about:vAbout,contact:vContact};
  const open=$("#nav")&&$("#nav").classList.contains("open");
  $("#app").innerHTML=`<header class="mast"><div class="wrap"><div class="mast-top"><button class="brand" data-go="home" aria-label="BELLOTA BLANCA">${LOGO}<span><b>BELLOTA BLANCA</b><small>International Content Sales &amp; Rights Trading</small></span></button>
   <div class="mast-right"><div class="lang" role="group" aria-label="Language">${[["en","EN"],["es","ES"],["zh","中文"]].map(l=>`<button data-lang="${l[0]}" aria-pressed="${lang===l[0]}">${l[1]}</button>`).join("")}</div>
   <button class="contact-link" data-go="contact">${i("Contact sales","Contactar ventas","联系商务")}</button><button class="btn gold sm" data-go="catalogue">${i("Explore content","Explorar contenido","浏览内容")}</button>
   <button class="burger" id="burger" aria-label="Menu" aria-expanded="${!!open}">☰</button></div></div>
   <nav class="nav${open?" open":""}" id="nav" aria-label="Main">${VIEWS.map(v=>`<button data-go="${v}"${v===view?' aria-current="page"':""}>${nav(v)}</button>`).join("")}</nav></div></header>
   <main>${views[view]()}</main>${footer()}`;
  if(view==="catalogue")renderGrid();
  document.title="BELLOTA BLANCA";
}
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-go],[data-open],[data-mtab],[data-lang],[data-cat],[data-contact],[data-ctab],[data-close],[data-inq],[data-legal],[data-copy],[data-copy-pre],#burger,#f-reset,.scrim");
  if(!t)return;
  if(t.classList.contains("scrim")){if(e.target===t)closeModal();return}
  if(t.dataset.close!==undefined){closeModal();return}
  if(t.id==="burger"){$("#nav").classList.toggle("open");t.setAttribute("aria-expanded",$("#nav").classList.contains("open"));return}
  if(t.dataset.lang){setLang(t.dataset.lang);return}
  if(t.dataset.go){closeModal();$("#nav")&&$("#nav").classList.remove("open");go(t.dataset.go);return}
  if(t.dataset.open){openTitle(t.dataset.open);return}
  if(t.dataset.mtab){mtab=t.dataset.mtab;closeModal();if(view!=="mechasia"){go("mechasia")}else{render()}return}
  if(t.dataset.contact){closeModal();contactTab=t.dataset.contact;go("contact");return}
  if(t.dataset.ctab){contactTab=t.dataset.ctab;render();return}
  if(t.dataset.cat){F.cat=t.dataset.cat;closeModal();if(view!=="catalogue"){go("catalogue")}else{render()}return}
  if(t.dataset.inq!==undefined){const b=$("#inq");b.hidden=false;t.hidden=true;b.querySelector("input").focus();b.scrollIntoView({block:"nearest",behavior:"smooth"});return}
  if(t.dataset.legal){openLegal(+t.dataset.legal);return}
  if(t.dataset.copy){copyText(t.dataset.copy,t);return}
  if(t.dataset.copyPre!==undefined){copyText($("#inq-text").textContent,t);return}
  if(t.id==="f-reset"){Object.assign(F,{q:"",cat:"all",genre:"all",terr:"all",status:"all",src:"all"});render();return}
});
document.addEventListener("input",e=>{if(e.target.id==="f-q"){F.q=e.target.value;renderGrid()}});
document.addEventListener("change",e=>{const m={"f-g":"genre","f-t":"terr","f-s":"status","f-o":"src"}[e.target.id];if(m){F[m]=e.target.value;renderGrid()}});
document.addEventListener("submit",e=>{if(e.target.id==="inq-form"){e.preventDefault();handleSubmit(e.target)}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
window.addEventListener("hashchange",()=>{const v=location.hash.slice(1);if(VIEWS.includes(v)&&v!==view){view=v;render();window.scrollTo(0,0)}});
{const v=location.hash.slice(1);if(VIEWS.includes(v))view=v}
render();
