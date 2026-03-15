(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(i){if(i.ep)return;i.ep=!0;const c=s(i);fetch(i.href,c)}})();const R="2026-03-15",T=[{id:"ai-digital",title:"人工智能与数字经济",kicker:"从单点工具走向系统级重构",intro:"这一组研报的共同结论是，2025 年之后的数字竞争，不再由单个模型或单项技术决定，而是取决于企业能否把人工智能、数据与跨技术协同真正嵌入经营主流程。"},{id:"green-energy",title:"绿色能源",kicker:"投资逻辑从装机规模扩展到系统韧性",intro:"能源行业的关注点已经从单纯扩产，切换到电网、储能、用能侧电气化与全球制造能力的联动配置，资本结构正在发生更深层的迁移。"},{id:"finance",title:"金融与金融科技",kicker:"高增长之后，行业进入质量竞争",intro:"金融科技的增长仍在继续，但市场焦点已经从单纯获客转向盈利质量、监管适配、风控效率与普惠覆盖能力，行业正在进入更成熟的运营阶段。"},{id:"healthcare",title:"大健康",kicker:"医疗体系重心转向生产率与院外服务",intro:"新一轮医疗数字化不再只是采购软件，而是围绕生产率、护理人力、远程随访与数据安全重做交付模型，技术投入正开始与服务模式同步演进。"},{id:"semiconductor",title:"半导体与消费电子",kicker:"算力需求拉动景气，但结构分化更明显",intro:"芯片行业在 2026 年仍有增长弹性，但收益将更集中于算力、封装、存储与互连环节，终端消费电子的复苏则更依赖系统级升级而非单次换机。"}],M=[{id:"mckinsey-ai-2025",sectorId:"ai-digital",title:"2025 年人工智能现状：智能体、创新与组织转型",source:"McKinsey",sourceLabel:"全球咨询机构",date:"2025-11-05",link:"https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",facts:["覆盖 105 个国家、1993 名受访者","88% 企业已在至少一个职能使用人工智能","62% 企业已试水智能体","39% 企业看到企业级利润改善影响"],summary:"麦肯锡的最新调查显示，人工智能已经从概念验证进入组织级渗透阶段，但真正把技术转化为经营结果的企业仍不多。报告最有价值的结论，在于揭示了“普及”和“兑现价值”之间的断层：虽然绝大多数企业已经把人工智能引入研发、营销、客服或运营，但只有少数企业同步重构了流程、治理、数据资产和人才机制，因此收入增长、创新加速与利润改善并未全面释放。报告判断，2026 年企业竞争力的分水岭，不是有没有模型能力，而是谁能围绕高价值场景完成规模化部署、风险治理和跨部门协同，把人工智能从局部提效工具推进成可持续的增长引擎。"},{id:"wef-convergence-2025",sectorId:"ai-digital",title:"2025 年技术融合报告",source:"World Economic Forum",sourceLabel:"国际组织",date:"2025-06-03",link:"https://www.weforum.org/publications/technology-convergence-report-2025/",facts:["调研 2000 名全球高管","梳理 8 大技术域与 23 组高潜力配对","覆盖 18 个国家、10 个行业","提出技术融合分析框架"],summary:"这份报告把“技术融合”从趋势口号做成了一张决策地图。世界经济论坛指出，未来的领先优势越来越少来自单项技术突破，而更多来自人工智能、量子、机器人、先进材料和工程生物学等能力的交叉叠加。基于全球高管调研，报告筛选出 23 组高潜力技术组合，并强调企业需要从“采购单点能力”转向“建设可复用底座”，包括统一数据层、跨业务团队、生态伙伴协作与更灵活的试验机制。其核心启示是，数字经济下一轮增长不会由某一个热门赛道单独驱动，而会由多技术协同重塑产品、供应链和服务模式。对企业而言，2026 年最值得投入的，不是更多概念性试点，而是能放大协同效应的系统工程。"},{id:"iea-energy-investment-2025",sectorId:"green-energy",title:"2025 年世界能源投资",source:"IEA",sourceLabel:"国际能源机构",date:"2025-06-05",link:"https://www.iea.org/reports/world-energy-investment-2025",facts:["全球能源投资预计升至 3.3 万亿美元","清洁能源投资约 2.2 万亿美元","清洁能源投资约为化石能源两倍","太阳能单项投资接近 4500 亿美元"],summary:"IEA 的判断十分明确：全球能源资本开支正在进入“清洁能源占主导、电力系统补短板”的新阶段。2025 年全球能源投资预计达到 3.3 万亿美元，其中清洁能源相关投资约 2.2 万亿美元，规模已经约为油气和煤炭投资总和的两倍。报告强调，市场逻辑已经不只是低碳转型，更是电力安全、制造竞争力和产业链主导权之争，因此电网、储能、核能、电气化设备以及关键矿产的配置价值持续上升。对产业观察而言，新能源行业下一步的利润重心不在单纯装机增速，而在发电、储能、输配电和终端用能的系统协同能力。谁能解决消纳、波动和回报周期，谁就更可能获得下一轮估值溢价。"},{id:"wef-fintech-2025",sectorId:"finance",title:"全球金融科技的未来：从快速扩张到可持续增长（第二版）",source:"World Economic Forum",sourceLabel:"国际组织",date:"2025-06-25",link:"https://www.weforum.org/publications/the-future-of-global-fintech-2025/",facts:["覆盖 6 大区域、240 家金融科技企业","客户增速 37%，收入增速 40%","利润增速 39%","中小微企业客户占比达到 57%"],summary:"世界经济论坛与剑桥大学 CCAF 的联合研究显示，全球金融科技行业已经从“拼速度”进入“拼质量”的新阶段。虽然样本企业的客户增速较上一轮调查回落，但收入和利润仍保持较强增长，说明行业正在从粗放扩张走向更成熟的经营模型。报告最值得关注的地方在于其对普惠金融价值的量化：中小微企业、低收入人群和女性用户仍是重要客户来源，意味着金融科技并没有脱离真实需求，反而在高利率和强监管环境下验证了自身韧性。面向 2026 年，行业胜负手将不再只是获客，而是嵌入式金融、合规能力、欺诈控制、人工智能驱动运营和跨区域监管适配的综合效率。"},{id:"deloitte-health-2026",sectorId:"healthcare",title:"2026 年全球医疗行业展望",source:"Deloitte",sourceLabel:"全球咨询机构",date:"2025-12-02",link:"https://www.deloitte.com/us/en/insights/industry/health-care/global-health-care-outlook.html",facts:["调研 180 位全球医疗系统高管","约 70% 的非美国机构预计收入与利润率改善","超过 90% 的机构把生产率列为重点","仅 2% 机构已在全企业范围部署生成式人工智能"],summary:"德勤认为，2026 年全球医疗行业的关键词不是“更激进地上技术”，而是“用技术重塑交付模式”。调研显示，医疗系统普遍面临利润率压力、护理人才短缺和网络安全风险，但多数机构对下一阶段收入与经营表现仍持谨慎乐观态度。报告的真正亮点，是指出生成式人工智能目前仍处于局部试点向系统落地过渡的阶段，大多数机构更关注可量化的生产率提升，例如自动化文书、临床运营优化、远程监测和门诊外移。换言之，医疗行业下一轮增长不会只来自新增设备和软件，而会来自流程自动化、院外管理、数据治理和支付效率的联动升级。谁能降低单位服务成本，谁就更具扩张弹性。"},{id:"deloitte-semiconductor-2026",sectorId:"semiconductor",title:"2026 年全球半导体行业展望",source:"Deloitte",sourceLabel:"全球咨询机构",date:"2026-02-05",link:"https://www.deloitte.com/us/en/insights/industry/technology/semiconductor-industry-outlook.html",facts:["2026 年算力芯片市场预计达到 5000 亿美元","算力芯片或贡献行业近一半收入","非算力终端复苏仍相对温和","先进封装与高带宽互连成为关键瓶颈"],summary:"德勤对 2026 年半导体景气度保持乐观，但也明确提示行业进入“高增长与高集中并存”的新结构。报告预计，面向人工智能的芯片将在 2026 年贡献约 5000 亿美元市场规模，并带动算力、存储、封装和高速互连等环节同步受益；不过，这种增长并不会平均分配到所有细分赛道，智能手机、个人电脑等传统消费电子链条的修复仍较温和。最重要的趋势变化是，行业竞争重点正在从单颗芯片性能转向系统协同，包括先进封装、散热、电源管理、服务器整机架构与供应链韧性。对投资者和产业方而言，2026 年既是算力红利释放期，也是产能错配、客户集中和地缘分散风险被重新定价的阶段。"}],x={retrievedAt:R,sectors:T,reports:M},C=document.querySelector("#app"),g=30*6e4,r={data:k(x,"内置快照"),sectorId:"all",yearFilter:"all",query:"",refreshing:!1,notice:window.location.protocol==="file:"?"当前为离线打开模式，展示内置快照数据。":"",nextRefreshAt:Date.now()+g};let y=0,w=0;u();H();window.location.protocol!=="file:"&&m();function u(){const{retrievedAt:e,generatedAt:t,refreshIntervalMs:s,sectors:n,reports:i,deliveryMode:c,sourceSummary:l}=r.data,p=O(i,n),L=p.length>0?p.slice().sort((o,d)=>o.date.localeCompare(d.date)):i.slice().sort((o,d)=>o.date.localeCompare(d.date)),A=n.map(o=>({...o,reports:p.filter(d=>d.sectorId===o.id).sort((d,q)=>q.date.localeCompare(d.date))})).filter(o=>o.reports.length>0),v=P(i),E=i.map(o=>o.date).sort((o,d)=>d.localeCompare(o))[0];C.innerHTML=`
    <div class="page-shell">
      <div class="page-aura page-aura-left"></div>
      <div class="page-aura page-aura-right"></div>

      <main class="navigator">
        <section class="hero-card">
          <div class="hero-copy">
            <p class="hero-kicker">全球行业研报导航页</p>
            <h1>全球行业研报智能导航员</h1>
            <p class="hero-summary">
              以 <strong>${e}</strong> 为检索基准，筛选 2025-2026 年公开可访问的权威行业研究报告，
              按赛道归档、提炼核心结论，并以可直达原文的交互卡片方式集中展示。
            </p>
            <div class="hero-tags">
              <span>人工智能</span>
              <span>数字经济</span>
              <span>绿色能源</span>
              <span>金融科技</span>
              <span>大健康</span>
              <span>半导体</span>
            </div>
          </div>

          <div class="hero-side">
            <div class="snapshot-card">
              <p class="snapshot-label">自动更新说明</p>
              <ul class="snapshot-list">
                <li>优先读取实时接口，失败时回退到静态快照</li>
                <li>页面会按计划周期自动刷新</li>
                <li>每篇研报会附带官方链接核验状态</li>
                <li>离线打开时仍可使用内置内容浏览</li>
              </ul>
            </div>

            <div class="stats-grid">
              ${f("行业模块",String(n.length))}
              ${f("研报数量",String(i.length))}
              ${f("来源机构",String(v.length))}
              ${f("最新发布日期",E)}
            </div>
          </div>
        </section>

        <section class="control-card">
          <div class="control-intro">
            <div>
              <p class="section-eyebrow">导航筛选</p>
              <h2>按行业、年份和关键词快速定位</h2>
            </div>
            <p class="section-note">面向正式浏览场景设计，适合快速筛查赛道变化、确定阅读优先级和进入原文深读。</p>
          </div>

          <div class="live-strip">
            <div class="live-info">
              <div class="live-pill">
                <span class="live-dot ${r.refreshing?"is-busy":""}"></span>
                <strong>${r.refreshing?"正在更新":"自动更新已启用"}</strong>
              </div>
              <p>
                当前模式：${a(c)} ｜ 数据生成：${U(t)} ｜ 下次刷新：
                <span data-role="next-refresh">${S(r.nextRefreshAt-Date.now())}</span>
              </p>
              <p>${V(l)}</p>
              ${r.notice?`<p class="live-notice">${a(r.notice)}</p>`:""}
            </div>

            <button class="refresh-button ${r.refreshing?"is-busy":""}" id="refresh-button" ${r.refreshing?"disabled":""}>
              ${r.refreshing?"更新中...":"立即更新"}
            </button>
          </div>

          <div class="search-row">
            <label class="search-shell" for="query-input">
              <span>关键词检索</span>
              <input
                id="query-input"
                type="search"
                placeholder="可搜索标题、机构、摘要或关键数据"
                value="${a(r.query)}"
              />
            </label>

            <div class="year-switch" role="tablist" aria-label="按年份筛选">
              ${h("all","全部年份",r.yearFilter)}
              ${h("2026","只看 2026",r.yearFilter)}
              ${h("2025","只看 2025",r.yearFilter)}
            </div>
          </div>

          <div class="sector-pills" role="tablist" aria-label="按行业筛选">
            ${$("all","全部行业",r.sectorId)}
            ${n.map(o=>$(o.id,o.title,r.sectorId)).join("")}
          </div>

          <p class="result-note">当前展示 <strong>${p.length}</strong> 篇研报，收录基准日期为 <strong>${e}</strong>。</p>
        </section>

        <section class="timeline-card">
          <div class="section-head">
            <div>
              <p class="section-eyebrow">时间观察</p>
              <h2>2025-2026 研报发布时间轴</h2>
            </div>
            <p class="section-note">从 2025 年中期到 2026 年初，焦点从技术试验逐渐转向规模化兑现与产业链韧性。</p>
          </div>

          <div class="timeline-track">
            ${L.map(o=>`
                  <article class="timeline-item">
                    <p class="timeline-date">${o.date}</p>
                    <h3>${a(o.title)}</h3>
                    <p>${a(o.source)} · ${a(I(n,o.sectorId))}</p>
                  </article>
                `).join("")}
          </div>
        </section>

        ${F(A)}

        <section class="source-card-board">
          <div class="section-head">
            <div>
              <p class="section-eyebrow">研究来源</p>
              <h2>已核验的官方发布机构</h2>
            </div>
            <p class="section-note">以下入口均为本页收录研报对应的官方报告页，用于继续阅读全文或二次核验。</p>
          </div>

          <div class="source-grid">
            ${v.map(o=>`
                  <a class="source-link-card" href="${o.link}" target="_blank" rel="noreferrer">
                    <strong>${a(o.name)}</strong>
                    <span>${a(o.label)}</span>
                  </a>
                `).join("")}
          </div>
        </section>

        <section class="footer-card">
          <div>
            <p class="section-eyebrow">交付说明</p>
            <h2>网页已生成</h2>
          </div>
          <p>
            当前页面已支持实时接口、静态快照和内置数据三层回退，可继续扩展为自动发现新研报或后台可维护版。
            若需要，我下一步可以继续加入封面图、行业锚点导航，或改造成可直接部署到静态托管平台的版本。
          </p>
        </section>
      </main>
    </div>
  `,N()}function F(e){return e.length===0?`
      <section class="empty-card">
        <p class="section-eyebrow">没有匹配结果</p>
        <h2>当前筛选条件下暂未找到研报</h2>
        <p>可以清空关键词，或切换行业和年份后继续查看。</p>
      </section>
    `:e.map(t=>`
        <section class="sector-section" id="${t.id}">
          <div class="section-head">
            <div>
              <p class="section-eyebrow">${a(t.kicker)}</p>
              <h2>${a(t.title)}</h2>
            </div>
            <p class="section-note">${a(t.intro)}</p>
          </div>

          <div class="report-grid">
            ${t.reports.map(s=>j(s)).join("")}
          </div>
        </section>
      `).join("")}function j(e){return`
    <article class="report-card">
      <div class="card-topline">
        <span class="source-badge">${a(e.source)}</span>
        <span class="source-meta">${a(e.sourceLabel)}</span>
      </div>

      <h3>${a(e.title)}</h3>

      <div class="meta-row">
        <span>机构：<strong>${a(e.source)}</strong></span>
        <span>日期：${e.date}</span>
        <span>状态：${a(e.linkStatusLabel||"已收录")}</span>
      </div>

      <div class="summary-block">${a(e.summary)}</div>

      <div class="fact-list">
        ${e.facts.map(t=>`<span>${a(t)}</span>`).join("")}
      </div>

      <div class="card-footer">
        <a href="${e.link}" target="_blank" rel="noreferrer">查看报告全文</a>
      </div>
    </article>
  `}function f(e,t){return`
    <article class="stat-card">
      <p>${e}</p>
      <strong>${t}</strong>
    </article>
  `}function $(e,t,s){return`
    <button
      class="pill-button ${e===s?"is-active":""}"
      type="button"
      data-sector="${e}"
    >
      ${a(t)}
    </button>
  `}function h(e,t,s){return`
    <button
      class="switch-button ${e===s?"is-active":""}"
      type="button"
      data-year="${e}"
    >
      ${a(t)}
    </button>
  `}function N(){document.querySelectorAll("[data-sector]").forEach(s=>{s.addEventListener("click",()=>{r.sectorId=s.getAttribute("data-sector")||"all",u()})}),document.querySelectorAll("[data-year]").forEach(s=>{s.addEventListener("click",()=>{r.yearFilter=s.getAttribute("data-year")||"all",u()})});const e=document.querySelector("#refresh-button");e&&e.addEventListener("click",()=>{m(!0)});const t=document.querySelector("#query-input");t instanceof HTMLInputElement&&t.addEventListener("input",s=>{const n=s.target instanceof HTMLInputElement?s.target:null,i=n?n.value:"",c=n?.selectionStart??i.length;r.query=i.trim(),u();const l=document.querySelector("#query-input");l instanceof HTMLInputElement&&(l.focus(),l.setSelectionRange(c,c))})}async function m(e=!1){if(!r.refreshing){r.refreshing=!0,e&&(r.notice="正在拉取最新研报数据，请稍候。"),u();try{const t=await _();r.data=k(t.payload,t.mode),r.notice=t.mode==="实时接口"?"已完成一次在线刷新。":"实时接口暂不可用，当前使用最新静态快照。"}catch(t){r.notice=t instanceof Error?`本次更新失败，继续展示当前数据。${t.message}`:"本次更新失败，继续展示当前数据。"}finally{r.refreshing=!1,r.nextRefreshAt=Date.now()+(r.data.refreshIntervalMs||g),D(),u()}}}async function _(){const e=new URL("api/industry-report-navigator",window.location.href).toString(),t=new URL("industry-report-navigator.json",window.location.href).toString();try{return{mode:"实时接口",payload:await b(e)}}catch{return{mode:"静态快照",payload:await b(t)}}}async function b(e){const t=await fetch(e,{cache:"no-store",headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.json()}function D(){window.clearTimeout(y),y=window.setTimeout(()=>{m()},Math.max(1e3,r.nextRefreshAt-Date.now()))}function H(){window.clearInterval(w),w=window.setInterval(()=>{const e=document.querySelector("[data-role='next-refresh']");e&&(e.textContent=S(r.nextRefreshAt-Date.now()))},1e3)}function k(e,t){const s=e.sourceSummary||{total:e.reports.length,online:e.reports.filter(n=>n.linkStatus==="online").length,restricted:e.reports.filter(n=>n.linkStatus==="restricted").length,warning:e.reports.filter(n=>n.linkStatus==="warning").length,checked:e.reports.filter(n=>n.linkStatus).length};return{...e,deliveryMode:t,generatedAt:e.generatedAt||new Date().toISOString(),refreshIntervalMs:e.refreshIntervalMs||g,sourceSummary:s,reports:e.reports.map(n=>({...n,linkStatusLabel:n.linkStatusLabel||"待在线核验"}))}}function O(e,t){return e.filter(s=>r.sectorId!=="all"&&s.sectorId!==r.sectorId||r.yearFilter!=="all"&&!s.date.startsWith(r.yearFilter)?!1:r.query?[s.title,s.source,s.summary,...s.facts,I(t,s.sectorId)].join(" ").toLowerCase().includes(r.query.toLowerCase()):!0)}function I(e,t){return e.find(s=>s.id===t)?.title||""}function P(e){const t=new Map;return e.forEach(s=>{t.has(s.source)||t.set(s.source,{name:s.source,label:s.sourceLabel,link:s.link})}),Array.from(t.values())}function S(e){if(e<=0)return"即将刷新";const t=Math.floor(e/1e3),s=Math.floor(t/60),n=t%60;return s===0?`${n} 秒`:`${s} 分 ${String(n).padStart(2,"0")} 秒`}function U(e){const t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleString("zh-CN",{hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}function V(e){return e.checked?`链接核验：${e.online}/${e.total} 在线${e.restricted>0?`，${e.restricted} 条受站点限制`:""}${e.warning>0?`，${e.warning} 条待复核`:""}`:`链接核验：尚未在线检测，共 ${e.total} 条链接`}function a(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}
