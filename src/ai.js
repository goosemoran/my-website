
/* ---------- Custom AI content ---------- */
const T=(en,es,zh)=>({en,es,zh});
const AI_TAG={revenge:T("Revenge","Venganza","复仇"),mecha:T("Mecha","Mecha","机甲"),scifi:T("Sci-fi","Ciencia ficción","科幻"),romance:T("Romance","Romance","爱情"),modern:T("Contemporary","Contemporáneo","现代"),fantasy:T("Fantasy","Fantasía","西幻"),action:T("Action","Acción","动作"),campus:T("Campus","Universitario","校园"),ensemble:T("Ensemble","Coral","群像"),sports:T("Sports","Deportes","运动"),comeback:T("Comeback","Regreso triunfal","逆袭"),thriller:T("Thriller","Thriller","惊悚"),saga:T("Family saga","Saga familiar","豪门"),mystery:T("Mystery","Misterio","悬疑"),crime:T("Crime","Crimen","黑帮"),vampire:T("Vampire","Vampiros","吸血鬼")};
const AI_CASES=[
 {en:"War Goddess: Mecha Revenge",zh:"战争女神：机甲复仇",tags:["revenge","mecha","scifi"],st:6,l:T("An abandoned test subject returns at the head of a mecha army. Mecha design, battlefields and battle-damaged characters stay consistent from the first episode to the last.","Abandonada tras ser objeto de experimentos, regresa al frente de un ejército de mechas. El diseño de los mechas, los campos de batalla y el desgaste de los personajes se mantienen coherentes del primer al último episodio.","被遗弃的试验体带着整支机甲军团归来。机甲设定、战场场景与人物战损状态，从第一集到最后一集全程统一。")},
 {en:"My Enemy's Husband Fell for Me",zh:"仇人的丈夫爱上了我",tags:["revenge","romance","modern"],st:5,l:T("She gets close to her enemy's husband to take revenge, and loses control of the act. The relationship turns in every episode.","Se acerca al marido de su enemiga para vengarse y pierde el control del juego. La relación da un giro en cada episodio.","为复仇接近仇人的丈夫，却在假戏中失控。人物关系每集反转。")},
 {en:"Arena Mage King",zh:"魔法竞技场王者",tags:["fantasy","action","comeback"],st:6,l:T("From nameless contestant to king of the arena. Every fight is a level-up.","De concursante sin nombre a rey de la arena. Cada combate es un nuevo nivel.","从无名选手到竞技场王者，每一场战斗都是一次升级。")},
 {en:"Heartbeat Quartet",zh:"心跳四重奏",tags:["romance","campus","ensemble"],st:6,l:T("Four love stories cross on one campus. Each male lead has his own personality, and the audience picks a side.","Cuatro historias de amor se cruzan en un mismo campus. Cada protagonista masculino tiene su propia personalidad y el público elige bando.","四条感情线交织的青春群像，每位男主性格鲜明，观众自然站队。")},
 {en:"The Depths of the Pool",zh:"泳池深渊",tags:["romance","modern"],st:6,l:T("An aristocratic heir and a swimmer from the other side of town. A sweet romance across a class divide, set between the pool, an elite school and the ballroom.","Un heredero aristocrático y una nadadora de otro mundo social. Un romance que desafía las diferencias de clase, entre la piscina, un colegio de élite y el salón de baile.","贵族少爷与泳池边的平凡女孩，跨越阶级的甜宠拉扯，泳池、贵族校园与宴会三大场景贯穿。")},
 {en:"Spoiled by the Quarterback",zh:"被四分卫弟弟宠上天",tags:["romance","campus","sports"],st:6,l:T("College football, a younger leading man and a campus romance with an American look.","Fútbol americano universitario, un protagonista más joven y un romance de campus con estética estadounidense.","校园橄榄球题材，美式青春质感，年下男主宠溺线。")},
 {en:"Twenty Years Later",zh:"二十年后归来",tags:["comeback","modern"],st:6,l:T("Thrown out of his family home, he returns twenty years later as a billionaire.","Expulsado de su casa, vuelve veinte años después convertido en multimillonario.","被赶出家门的他，二十年后以亿万富翁的身份归来。")},
 {en:"Rise of the Blood Moon Queen",zh:"血月女王的崛起",tags:["fantasy","revenge"],st:6,l:T("Awakened under the blood moon, she claims the throne. A dark visual world, with the moon, the throne and the castle consistent throughout.","Despierta bajo la luna de sangre y reclama el trono. Un universo visual oscuro, con la luna, el trono y el castillo coherentes en toda la serie.","血月之下觉醒，一路登上王座。暗黑美学贯穿始终，血月、王座与城堡符号全程统一。")},
 {en:"Agent Returns",zh:"特工归来",tags:["action","revenge"],st:6,l:T("To save her son, a suburban mother switches back to elite agent.","Para salvar a su hijo, una madre de familia vuelve a ser agente de élite.","为了儿子，家庭主妇切换回顶级特工。")},
 {en:"Whoever I Marry Rules Olympus",zh:"我嫁谁，谁就是奥林匹斯之主",tags:["fantasy","romance"],st:6,l:T("Whoever marries her takes the throne of Olympus.","Quien se case con ella reinará en el Olimpo.","她嫁给谁，谁就是奥林匹斯之主。")},
 {en:"The Black Swan",zh:"黑天鹅",tags:["saga","thriller"],eps:"30",st:6,l:T("A high-society drama of power and family secrets, graded cold and high-contrast.","Un drama de alta sociedad sobre poder y secretos familiares, con un etalonaje frío y contrastado.","豪门权谋正剧，冷峻影调强张力。")},
 {en:"The True Heiress",zh:"被当孤女的女继承人",tags:["saga","revenge"],eps:"30",st:6,l:T("Raised as an orphan, she strikes back the day her identity is revealed: the core genre for paid platforms abroad.","Criada como huérfana, contraataca el día en que se revela su identidad: el género estrella de las plataformas de pago internacionales.","被当作孤女长大的她，在身份揭晓那天开始反击——海外付费平台的核心赛道。")},
 {en:"The Disabled Duke",zh:"我的残疾公爵为我站了起来",tags:["fantasy","romance"],eps:"38",st:5,l:T("A fantasy romance of healing and court intrigue. Characters and sets hold steady across all 38 episodes.","Un romance de fantasía entre la sanación y la intriga cortesana. Personajes y escenarios coherentes en los 38 episodios.","西幻言情长篇，治愈与权谋双线。全38集人物与场景资产保持一致。")},
 {en:"The Night of Forbidden Desire",zh:"禁忌欲望之夜",tags:["romance","thriller"],eps:"38",st:6,l:T("An emotional drama whose intensity rises episode after episode, without a dip across 38 episodes.","Un drama emocional cuya intensidad crece episodio a episodio, sin decaer en 38 capítulos.","强情节情感长篇，38集情绪张力层层递进。")},
 {en:"The Fog Detective",zh:"迷雾侦探",tags:["mystery","crime"],eps:"38",st:6,l:T("A mystery series made end to end on our pipeline, from script and visual assets to final cut.","Una serie de misterio hecha de principio a fin en nuestro flujo de trabajo, del guion y los recursos visuales al montaje final.","悬疑推理题材，从剧本、视觉资产到成片全流程制作。")},
 {en:"The Stylist · The Fallen Saint",zh:"裁缝的秘密 · 堕落圣女",tags:["revenge","vampire","fantasy"],eps:"20 × 2",st:6,l:T("Two series: a tailor whose craft becomes her weapon, and a vampire fantasy in which a fallen saint turns the tables.","Dos series: una costurera cuyo oficio se convierte en su arma, y una fantasía de vampiros en la que una santa caída se cobra su venganza.","两部系列剧：以裁缝手艺为武器的逆袭，与吸血鬼西幻中堕落圣女的反杀。")}
];
const AI_PROMO=[
 {t:T("Museum campaign · Zodiac heads exhibition","Campaña de museo · exposición de las cabezas del zodiaco","戏曲百戏博物馆 · 兽首展宣传片"),d:T("The twelve zodiac bronze heads meet Chinese opera, for a younger audience. 1080p with branding, delivered October 2026.","Las doce cabezas de bronce del zodiaco y la ópera china, para un público joven. 1080p con marca, entregado en octubre de 2026.","十二生肖兽首文物×戏曲文化，国风年轻化。1080P带LOGO成片，2026年10月交付。")},
 {t:T("Provincial museum · Renaissance exhibition","Museo provincial · exposición del Renacimiento","省博物馆 · 文艺复兴展宣传片"),d:T("Classical art reimagined in AI imagery. 1080p release version, delivered July 2026.","El arte clásico reinterpretado con imágenes de IA. Versión de difusión en 1080p, entregada en julio de 2026.","古典艺术与AI影像融合，1080P传播版，2026年7月交付。")},
 {t:T("Theme park Halloween series","Serie de Halloween para parque temático","主题乐园万圣节短剧"),d:T("A 7 × 3′ vertical horror series for Douyin, built around the park's Halloween event (October 2025).","Una serie vertical de terror de 7 × 3′ para Douyin, construida en torno al evento de Halloween del parque (octubre de 2025).","抖音AI竖屏短剧，7集×3分钟，围绕乐园万圣节活动打造（2025年10月）。")},
 {t:T("Fashion market · brand film","Mercado de moda · película de marca","服装城 · 品牌宣传片"),d:T("A brand film for a garment market: commercial settings with a fashion look. 1080p.","Película de marca para un mercado textil: espacios comerciales con estética de moda. 1080p.","服装城品牌成片，商业场景+时尚质感，1080P。")},
 {t:T("Workplace drama · single episode","Drama laboral · episodio","职场短剧 · 单集成片"),d:T("A self-contained episode of a workplace drama, showing pacing and character performance.","Un episodio autónomo de un drama laboral que muestra ritmo y trabajo de personajes.","职场题材强情节单集，展示叙事节奏与人物表演。")},
 {t:T("Corporate film in drama form","Película corporativa en formato drama","企业宣传片 · 短剧形式"),d:T("A company story told as a 30-episode drama; episode 1 sets up the characters and the conflict.","La historia de una empresa contada como un drama de 30 episodios; el episodio 1 presenta personajes y conflicto.","以30集短剧讲述企业故事，第一集建立人物关系与核心冲突。")}
];
const AI_DESK=[
 ["t16",T("Node workflow · full pipeline","Flujo de nodos · proceso completo","节点工作流 · 管线全景")],
 ["t17",T("Node workflow · character generation","Flujo de nodos · generación de personajes","节点工作流 · 角色生成")]
];
const pad=n=>String(n).padStart(2,"0");
function aiCard(c,n){
  const meta=[c.eps?`${c.eps} ${i("eps","ep.","集")}`:"",c.tags.slice(0,2).map(t=>pick(AI_TAG[t])).join(" · ")].filter(Boolean).join(" · ");
  return `<button class="card" data-ai="${n}" aria-label="${esc(lang==="zh"?c.zh:c.en)}"><div class="poster"><span class="badge">AI</span><img src="img/ai/c${pad(n+1)}.jpg" alt="${esc(c.en)}" loading="lazy" decoding="async"></div>
  <div><div class="ctitle">${esc(lang==="zh"?c.zh:c.en)}</div><div class="csub">${esc(lang==="zh"?c.en:c.zh)}</div><div class="csub" style="margin-top:4px">${esc(meta)}</div></div></button>`;
}
const AI_REEL=[
 {g:T("Sci-fi thriller","Thriller de ciencia ficción","科幻惊悚"),d:"3:57"},
 {g:T("Sports & action drama","Drama deportivo y de acción","运动动作剧"),d:"2:27"},
 {g:T("Family drama","Drama familiar","家庭情感剧"),d:"1:53"},
 {g:T("Romantic thriller","Romance y suspense","爱情悬疑"),d:"1:54"}];
function reelCards(){
  return `<div class="reels">${AI_REEL.map((r,k)=>`<button class="reel" data-reel="${k+1}" aria-label="${esc(i("Play sample: ","Ver muestra: ","播放样片：")+pick(r.g))}">
   <video src="img/ai/v/t${k+1}.mp4" poster="img/ai/v/p${k+1}.jpg" muted loop playsinline autoplay preload="metadata" aria-hidden="true"></video>
   <span class="rplay" aria-hidden="true">▶</span>
   <span class="rlab"><b>${esc(pick(r.g))}</b><i>9:16 · ${r.d} · ${i("with sound","con sonido","有声")}</i></span></button>`).join("")}</div>`;
}
function qualityNote(){
  return `<div class="qnote"><div><b>${i("Want this quality for your project, or a lighter-model option for a smaller budget?","¿Quieres esta calidad para tu proyecto o un modelo más ligero para un presupuesto menor?","想要同等质量，或用更低成本的模型版本控制预算？")}</b>
   <p>${i("Email us with your format, episode count and deadline, and we will quote both options: the same quality as these samples, and a lower-cost version made with lighter models.","Escríbenos con el formato, el número de episodios y el plazo, y te presupuestamos las dos opciones: la misma calidad que estas muestras y una versión más económica hecha con modelos más ligeros.","请发邮件告诉我们画幅、集数与工期，我们将分别报价：与样片同等质量的版本，以及使用轻量模型、成本更低的版本。")}</p></div>
   <div class="qbtn"><a class="btn gold" href="mailto:${MAIL}?subject=${encodeURIComponent("AI production quote")}">${i("Email us","Escríbenos","发邮件给我们")} →</a><button class="btn" data-contact="ai">${i("Send a brief","Enviar un briefing","提交需求")}</button></div></div>`;
}
function openReel(n){
  const r=AI_REEL[n-1];if(!r)return;
  const el=document.createElement("div");el.className="scrim";el.id="modal";el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");el.setAttribute("aria-label",pick(r.g));
  el.innerHTML=`<div class="panel reelpanel"><button class="x" data-close aria-label="${i("Close","Cerrar","关闭")}">×</button>
   <video src="img/ai/v/d${n}.mp4" poster="img/ai/v/p${n}.jpg" controls autoplay playsinline></video>
   <div class="reelcap"><div class="eyebrow">${i("Sample library","Biblioteca de muestras","样片库")}</div><h3>${esc(pick(r.g))}</h3>
   <p>${i("Made end to end: script, AI-generated cast and sets, edit, sound, and subtitles in the languages you need.","Hecho de principio a fin: guion, reparto y escenarios generados con IA, montaje, sonido y subtítulos en los idiomas que necesites.","全流程制作：剧本、AI生成演员与场景、剪辑、声音，字幕语言按需配置。")}</p>
   <button class="btn gold sm" data-contact="ai">${i("Get a quote","Pedir presupuesto","获取报价")} →</button></div></div>`;
  document.body.appendChild(el);document.body.style.overflow="hidden";el.querySelector(".x").focus();
}
function aiSteps(){
  return [
   [i("Brief","Briefing","需求沟通"),i("Audience, market, genre, format, episodes, languages and deadline.","Público, mercado, género, formato, episodios, idiomas y plazo.","受众、市场、题材、画幅、集数、语言与工期。")],
   [i("Script & look","Guion y estética","剧本与美术"),i("Script, character sheets and visual style for your approval.","Guion, fichas de personaje y estilo visual para tu aprobación.","剧本、人物设定与视觉风格，经您确认。")],
   [i("Pilot","Piloto","首集样片"),i("A first episode or sample cut before full production.","Un primer episodio o montaje de muestra antes de la producción completa.","正式量产前先交付第一集或样片。")],
   [i("Production","Producción","量产制作"),i("Storyboard, generation, edit, grade, sound and subtitles.","Storyboard, generación, montaje, color, sonido y subtítulos.","分镜、生成、剪辑、调色、声音与字幕。")],
   [i("Delivery","Entrega","交付"),i("Final cut in the languages and versions you need.","Montaje final en los idiomas y versiones que necesites.","按所需语言与版本交付成片。")]];
}
function vAI(){
  const svc=[
   [i("AI series","Series con IA","AI剧集内容"),i("Scripted series with dialogue and full character arcs, vertical 9:16 or horizontal 16:9, from 20 to 40 episodes, in any genre from romance to fantasy and mystery.","Series de ficción con diálogos y arcos de personaje completos, en vertical 9:16 u horizontal 16:9, de 20 a 40 episodios, en cualquier género: romance, fantasía o misterio.","对白驱动、人物弧光完整的正剧，竖屏9:16或横屏16:9，20–40集，覆盖言情、西幻、悬疑等各类题材。")],
   [i("Brand, museum & tourism films","Películas de marca, museos y turismo","品牌、文博与文旅宣传片"),i("Campaign films and short series for brands, museums, theme parks and destinations, delivered in 1080p with your branding.","Películas y miniseries para marcas, museos, parques temáticos y destinos, entregadas en 1080p con tu marca.","为品牌、博物馆、主题乐园与目的地定制宣传片和短剧，1080P带品牌标识交付。")],
   [i("Script & storyboard development","Desarrollo de guion y storyboard","剧本与分镜开发"),i("Original scripts or adaptations of your IP, with a shot-by-shot storyboard approved before production starts.","Guiones originales o adaptaciones de tu IP, con un storyboard plano a plano aprobado antes de producir.","原创剧本或您的IP改编，制作前逐镜确认分镜。")],
   [i("Languages & subtitles on demand","Idiomas y subtítulos a medida","语言字幕按需配置"),i("Choose the languages and subtitle versions your market needs, and we prepare the final cut to match.","Elige los idiomas y las versiones de subtítulos que necesita tu mercado y preparamos el montaje final en consecuencia.","根据目标市场自由选择语言与字幕版本，我们按需制作成片。")]];
  const steps=aiSteps();
  const tools=[
   [i("Script development","Desarrollo de guion","剧本开发"),i("A five-role writing pipeline (writer, evaluator, proofreader, reviser, chief editor) across 17 genres, with hard quality gates before a script is released.","Un flujo de escritura con cinco funciones (guionista, evaluación, corrección, revisión y edición final) en 17 géneros, con controles de calidad obligatorios antes de aprobar cada guion.","写手、评估、校对、返修、主编终审五角色管线，覆盖17类题材，剧本发出前须通过硬性质检。")],
   [i("Storyboard & prompts","Storyboard y prompts","分镜与提示词"),i("Turns each scene into a structured shot list (shot size, camera, duration, dialogue) and bilingual prompts, with shot-by-shot fine-tuning.","Convierte cada escena en una lista de planos estructurada (tamaño, cámara, duración, diálogo) y prompts bilingües, con ajuste plano a plano.","将每场戏拆成结构化镜头清单（景别、运镜、时长、台词归属），输出中英对照提示词，并可逐镜微调。")],
   [i("Node workflows","Flujos de nodos","节点式生成工作流"),i("ComfyUI pipelines with ControlNet and post-processing keep characters, sets and colour consistent from shot to shot.","Flujos ComfyUI con ControlNet y posprocesado que mantienen personajes, escenarios y color coherentes plano a plano.","ComfyUI 工作流配合 ControlNet 与后处理，保证人物、场景与色彩逐镜一致。")]];
  const edu=[
   [i("Online courses","Cursos en línea","网络课程"),i("Recorded lessons with live online sessions for students, creators and freelancers: from your first AI storyboard to a finished short-drama episode.","Clases grabadas y sesiones en directo para estudiantes, creadores y profesionales independientes: del primer storyboard con IA a un episodio de microdrama terminado.","录播课程结合线上直播答疑，面向学生、创作者与自由职业者：从第一张AI分镜，到完成一集短剧成片。"),i("For individuals and schools","Para particulares y centros educativos","适合个人与院校")],
   [i("Corporate training","Formación para empresas","企业培训"),i("In-house programmes for studios, broadcasters, agencies and brand teams, on site or remote: from a one-day introduction to a multi-week production bootcamp built around your own projects.","Programas a medida para estudios, cadenas, agencias y equipos de marca, presenciales o en remoto: desde una introducción de un día hasta un programa intensivo de varias semanas basado en los proyectos de tu empresa.","面向制作公司、电视台、广告公司与品牌团队的定制内训，线上线下均可：从一天的入门课，到围绕贵司真实项目的多周实战营。"),i("For studios, broadcasters and brands","Para estudios, cadenas y marcas","适合制作公司、电视台与品牌")],
   [i("Film festival & market workshops","Talleres para festivales y mercados de cine","电影节与影视市场工作坊"),i("Masterclasses and hands-on labs for film festivals, industry markets and film schools: from a 90-minute talk to a multi-day lab in which participants make a short AI film.","Clases magistrales y laboratorios prácticos para festivales de cine, mercados audiovisuales y escuelas de cine: desde una charla de 90 minutos hasta un laboratorio de varios días en el que los participantes realizan un cortometraje con IA.","为电影节、影视市场与电影院校提供大师课与实操工作坊：从90分钟的讲座，到学员亲手完成一部AI短片的多日训练营。"),i("For festivals, markets and film schools","Para festivales, mercados y escuelas de cine","适合电影节、影视市场与电影院校")]];
  const topics=[i("Storyboarding and shot composition","Storyboard y composición de planos","分镜与构图"),i("Turning a director’s style into prompts","Traducir el estilo de un director en prompts","导演风格转化为提示词"),i("Character consistency","Coherencia de personajes","人物一致性"),i("Character arcs and conflict","Arcos de personaje y conflicto","人物弧光与冲突升级"),i("Narrative pacing","Ritmo narrativo","叙事节奏"),i("Visual styles for AI drama","Estilos visuales para drama con IA","AI短剧视觉风格"),i("Market data and genres","Datos de mercado y géneros","市场数据与题材"),i("Editing, subtitles and delivery","Montaje, subtítulos y entrega","剪辑、字幕与交付"),i("Business models and monetisation","Modelos de negocio y monetización","商业变现路径")];
  const wall=Array.from({length:63},(_,k)=>`<img src="img/ai/w${pad(k+1)}.jpg" alt="" loading="lazy" decoding="async">`).join("");
  return `<section class="sec band aihero"><div class="wrap"><div class="sec-head" style="max-width:860px">
    <div class="eyebrow">${i("Custom AI content","Contenido con IA a medida","AI内容定制")}</div>
    <h1 style="margin-top:8px">${i("AI content, made to order.","Contenido con IA, hecho a medida.","AI内容，按需定制。")}</h1>
    <p class="lede">${i("We write, generate and deliver series and branded films for international platforms, broadcasters and brands. Tell us the audience and the format; we deliver release-ready episodes. We also train teams to work this way.","Escribimos, generamos y entregamos series y películas de marca para plataformas, cadenas y marcas de todo el mundo. Cuéntanos el público y el formato y te entregamos episodios listos para emitir. También formamos a equipos para trabajar así.","我们为国际平台、电视台与品牌编写、生成并交付剧集与品牌影片。告诉我们受众与形式，我们交付可直接上线的成片；我们也为团队提供AIGC培训。")}</p>
    <div class="cta" style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px"><button class="btn gold" data-contact="ai">${i("Commission a project","Encargar un proyecto","定制项目")} →</button><button class="btn" data-contact="ai">${i("Request sample reels","Pedir muestras","索取样片")}</button><a class="btn" href="#ai-training" data-jump="ai-training">${i("Training & courses","Formación y cursos","培训与课程")}</a></div></div>
    <div class="facts-line on-dark"><div><b>${i("1,000+","1.000+","1000+")}</b><span>${i("AI titles delivered","títulos con IA entregados","AI内容已交付")}</span></div><div><b>${i("Efficient production","Producción eficiente","高效量产")}</b><span>${i("In-house tools speed up every step, from script to final cut","herramientas propias que agilizan cada paso, del guion al montaje final","自研工具链，从剧本到成片全流程提效")}</span></div><div><b>9:16 · 16:9</b><span>${i("Vertical & horizontal","Vertical y horizontal","竖屏与横屏")}</span></div><div><b>${i("Multilingual","Multilingüe","多语言")}</b><span>${i("Languages and subtitles to suit your needs","idiomas y subtítulos según tus necesidades","语言与字幕按需配置")}</span></div></div>
  </div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("What you can commission","Qué puedes encargar","可定制服务")}</div><h2>${i("From a single campaign film to a 40-episode series.","De una sola película de campaña a una serie de 40 episodios.","从一支宣传片，到40集的完整剧集。")}</h2></div>
    <div class="mods m4">${svc.map((s,k)=>`<div class="mod"><span class="eyebrow">0${k+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></div>`).join("")}</div></div></section>

  <section class="sec tint" id="ai-reel"><div class="wrap">
    <div class="sec-head row"><div><div class="eyebrow">${i("Quality samples","Muestras de calidad","质量样片")}</div><h2 style="margin-top:12px">${i("See the quality before you commission.","Comprueba la calidad antes de encargar.","下单前，先看成片质量。")}</h2><p class="lede" style="margin-top:12px">${i("Four recent AI productions with Western-style characters for overseas platforms. Tap one to watch it with sound.","Cuatro producciones recientes con IA y personajes de estilo occidental para plataformas internacionales. Toca una para verla con sonido.","四部近期为海外平台制作的欧美风格AI剧集。点击即可有声观看。")}</p></div></div>
    ${reelCards()}${qualityNote()}</div></section>

  <section class="sec" id="ai-works"><div class="wrap">
    <div class="sec-head row"><div><div class="eyebrow">${i("Sample library","Biblioteca de muestras","样片库")}</div><h2 style="margin-top:12px">${i("Browse samples by genre and style.","Explora muestras por género y estilo.","按题材与风格浏览样片。")}</h2><p class="lede" style="margin-top:12px">${i("These samples show our range and visual quality. Open one to see stills.","Estas muestras reflejan nuestra variedad y calidad visual. Abre una para ver fotogramas.","样片仅用于展示题材范围与画面质量。点击查看剧照。")}</p></div><button class="btn gold" data-contact="ai">${i("Request screeners","Solicitar screeners","索取样片")} →</button></div>
    <div class="grid aigrid">${AI_CASES.map(aiCard).join("")}</div></div></section>

  <section class="sec tint"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Brand, museum & tourism","Marcas, museos y turismo","品牌 · 文博 · 文旅")}</div><h2>${i("Commissioned films for brands and institutions.","Películas por encargo para marcas e instituciones.","为品牌与机构定制的影片。")}</h2></div>
    <div class="promo">${AI_PROMO.map((p,k)=>`<figure><img src="img/ai/p${k+1}.jpg" alt="${esc(pick(p.t))}" loading="lazy" decoding="async"><figcaption><b>${esc(pick(p.t))}</b><span>${esc(pick(p.d))}</span></figcaption></figure>`).join("")}</div></div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("More samples","Más muestras","更多样片")}</div><h2>${i("A wider look across genres and styles.","Una mirada más amplia a géneros y estilos.","更多题材与视觉风格。")}</h2></div>
    <div class="aiwall" aria-hidden="true">${wall}</div></div></section>

  <section class="sec band"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("How a commission works","Cómo funciona un encargo","定制流程")}</div><h2>${i("Five steps from brief to delivery.","Cinco pasos del briefing a la entrega.","从需求到交付，五个步骤。")}</h2></div>
    <div class="steps">${steps.map((s,k)=>`<div class="step"><span class="n">0${k+1}</span><b>${s[0]}</b><p>${s[1]}</p></div>`).join("")}</div>
    <div style="margin-top:34px;display:flex;gap:12px;flex-wrap:wrap"><button class="btn gold" data-contact="ai">${i("Start your brief","Empezar el briefing","提交定制需求")} →</button><button class="btn" data-go="catalogue">${i("License existing titles instead","Licenciar títulos existentes","授权现有作品")}</button></div></div></section>

  <section class="sec"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("Our production tools","Nuestras herramientas de producción","自研工具")}</div><h2>${i("Built in-house to make series at scale.","Desarrolladas internamente para producir series a escala.","自研工具链，支撑规模化量产。")}</h2>
    <p class="lede">${i("We built our own tools for every step from script to final frame, so long series stay consistent and deadlines hold.","Hemos creado herramientas propias para cada paso, del guion al último fotograma, para que las series largas sean coherentes y se cumplan los plazos.","从剧本到成片，每个环节都有自研工具支撑，保证长剧一致性与交付工期。")}</p></div>
    <div class="mods">${tools.map(t=>`<div class="mod"><h3>${t[0]}</h3><p>${t[1]}</p></div>`).join("")}</div>
    <div class="desk">${AI_DESK.map(d=>`<figure><img src="img/ai/${d[0]}.jpg" alt="${esc(pick(d[1]))}" loading="lazy" decoding="async"><figcaption>${esc(pick(d[1]))}</figcaption></figure>`).join("")}</div></div></section>

  <section class="sec tint" id="ai-training"><div class="wrap">
    <div class="sec-head"><div class="eyebrow">${i("AIGC training & education","Formación y educación en IA generativa","AIGC教育与培训")}</div><h2>${i("We teach the workflow we use every day.","Enseñamos el mismo flujo de trabajo que usamos a diario.","我们教授的，正是我们每天使用的工作流。")}</h2>
    <p class="lede">${i("Our team wrote the AIGC creation textbook for China Animation Comic Game Group (中国动漫集团) and teaches at the group’s AIGC industry–education training base in Guangdong. We now offer the same programme to learners, companies and film festivals worldwide.","Nuestro equipo escribió el manual de creación con IA generativa del China Animation Comic Game Group (中国动漫集团) e imparte clases en su centro de formación en IA generativa de Guangdong, donde colaboran industria y educación. Ahora ofrecemos el mismo programa a estudiantes, empresas y festivales de cine de todo el mundo.","我们的团队为中国动漫集团编写了AIGC创作教材，并在中国动漫集团广东AIGC培训产教融合基地授课。现在，我们将同一套课程开放给全球的学员、企业与电影节。")}</p></div>
    <div class="facts-line"><div><b>8</b><span>${i("Course modules","módulos del curso","个课程模块")}</span></div><div><b>379</b><span>${i("Pages of courseware","páginas de material didáctico","页课件")}</span></div><div><b>8</b><span>${i("Lesson plans","planes de clase","份教案")}</span></div><div><b>${i("Online · on site","En línea · presencial","线上 · 线下")}</b><span>${i("Format","modalidad","授课方式")}</span></div></div>
    <div class="mods">${edu.map((m,k)=>`<div class="mod"><span class="eyebrow">0${k+1}</span><h3>${m[0]}</h3><p>${m[1]}</p><p class="fine" style="margin-top:auto;padding-top:8px">${m[2]}</p></div>`).join("")}</div>
    <div class="sec-head" style="margin:44px 0 16px"><h3>${i("What participants learn","Qué aprenden los participantes","课程内容")}</h3></div>
    <div class="chips">${topics.map(t=>`<span class="chip g">${t}</span>`).join("")}</div>
    <div class="edu-gal">${[["e1",i("Turning a director’s style into prompts","Cómo traducir el estilo de un director en prompts","将导演风格转化为提示词")],["e3",i("How AI video has evolved, 2018–2026","Evolución del vídeo con IA, 2018–2026","AI影像技术演进 2018–2026")],["e5",i("Genre structures and narrative formulas","Estructuras de género y fórmulas narrativas","题材结构与叙事公式")],["e8",i("Reading the market: genre data","Leer el mercado: datos por género","读懂市场：题材数据")],["ew1",i("Industry–education workshop, June 2026","Taller de industria y educación, junio de 2026","产教融合体验课 · 2026年6月")],["ew3",i("Hands-on lab with the AIGC toolchain","Práctica con las herramientas de IA generativa","课堂实训 · 实机操作AIGC工具链")]].map(g=>`<figure><img src="img/ai/${g[0]}.jpg" alt="${esc(g[1])}" loading="lazy" decoding="async"><figcaption>${esc(g[1])}</figcaption></figure>`).join("")}</div>
    <div style="margin-top:30px;display:flex;gap:12px;flex-wrap:wrap"><button class="btn gold" data-contact="ai">${i("Book a course or workshop","Reservar un curso o taller","预约课程或工作坊")} →</button></div></div></section>`;
}
function openAI(n){
  const c=AI_CASES[n];if(!c)return;
  const t1=lang==="zh"?c.zh:c.en,t2=lang==="zh"?c.en:c.zh;
  const stills=Array.from({length:c.st},(_,k)=>`<img src="img/ai/c${pad(n+1)}-${k+1}.jpg" alt="${esc(c.en)} · ${k+1}" loading="lazy" decoding="async">`).join("");
  const el=document.createElement("div");el.className="scrim";el.id="modal";el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");el.setAttribute("aria-label",t1);
  el.innerHTML=`<div class="panel"><button class="x" data-close aria-label="${i("Close","Cerrar","关闭")}">×</button><div class="pan-grid"><div class="poster"><img src="img/ai/c${pad(n+1)}.jpg" alt="${esc(c.en)}"></div>
   <div class="pan-main"><div><div class="eyebrow">${i("Sample library","Biblioteca de muestras","样片库")}</div><h2 style="margin-top:10px">${esc(t1)}</h2><div class="pan-sub">${esc(t2)}</div></div>
   <p style="font-size:17px">${esc(pick(c.l))}</p>
   <dl class="spec"><dt>${i("Genre","Género","类型")}</dt><dd><div class="chips">${c.tags.map(t=>`<span class="chip">${esc(pick(AI_TAG[t]))}</span>`).join("")}</div></dd>
   ${c.eps?`<dt>${i("Episodes","Episodios","集数")}</dt><dd>${esc(c.eps)}</dd>`:""}
   <dt>${i("Visual system","Sistema visual","视觉体系")}</dt><dd>${i("Character design · set design · unified grade","Diseño de personajes · escenografía · color unificado","人物设定 · 场景美术 · 调色统一")}</dd></dl>
   <div class="stills">${stills}</div>
   <div style="display:flex;gap:12px;flex-wrap:wrap"><button class="btn gold" data-contact="ai">${i("Commission something like this","Encargar algo similar","定制类似作品")} →</button></div></div></div></div>`;
  document.body.appendChild(el);document.body.style.overflow="hidden";el.querySelector(".x").focus();
}
