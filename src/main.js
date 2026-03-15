import "./style.css";
import bootstrapData from "./data/industry-report-navigator.json";

const app = document.querySelector("#app");

const DEFAULT_REFRESH_INTERVAL_MS = 30 * 60_000;

const state = {
  data: normalizeDataset(bootstrapData, "内置快照"),
  sectorId: "all",
  yearFilter: "all",
  query: "",
  refreshing: false,
  notice: window.location.protocol === "file:" ? "当前为离线打开模式，展示内置快照数据。" : "",
  nextRefreshAt: Date.now() + DEFAULT_REFRESH_INTERVAL_MS,
};

let refreshTimerId = 0;
let countdownTimerId = 0;

render();
startCountdown();

if (window.location.protocol !== "file:") {
  void refreshData();
}

function render() {
  const { retrievedAt, generatedAt, refreshIntervalMs, sectors, reports, deliveryMode, sourceSummary } =
    state.data;
  const visibleReports = getVisibleReports(reports, sectors);
  const timelineReports =
    visibleReports.length > 0
      ? visibleReports.slice().sort((left, right) => left.date.localeCompare(right.date))
      : reports.slice().sort((left, right) => left.date.localeCompare(right.date));
  const visibleSectors = sectors
    .map((sector) => ({
      ...sector,
      reports: visibleReports
        .filter((report) => report.sectorId === sector.id)
        .sort((left, right) => right.date.localeCompare(left.date)),
    }))
    .filter((sector) => sector.reports.length > 0);
  const sourceEntries = buildSourceEntries(reports);
  const latestDate = reports
    .map((report) => report.date)
    .sort((left, right) => right.localeCompare(left))[0];

  app.innerHTML = `
    <div class="page-shell">
      <div class="page-aura page-aura-left"></div>
      <div class="page-aura page-aura-right"></div>

      <main class="navigator">
        <section class="hero-card">
          <div class="hero-copy">
            <p class="hero-kicker">全球行业研报导航页</p>
            <h1>全球行业研报智能导航员</h1>
            <p class="hero-summary">
              以 <strong>${retrievedAt}</strong> 为检索基准，筛选 2025-2026 年公开可访问的权威行业研究报告，
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
              ${renderStat("行业模块", String(sectors.length))}
              ${renderStat("研报数量", String(reports.length))}
              ${renderStat("来源机构", String(sourceEntries.length))}
              ${renderStat("最新发布日期", latestDate)}
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
                <span class="live-dot ${state.refreshing ? "is-busy" : ""}"></span>
                <strong>${state.refreshing ? "正在更新" : "自动更新已启用"}</strong>
              </div>
              <p>
                当前模式：${escapeHtml(deliveryMode)} ｜ 数据生成：${formatDateTime(generatedAt)} ｜ 下次刷新：
                <span data-role="next-refresh">${formatCountdown(state.nextRefreshAt - Date.now())}</span>
              </p>
              <p>${buildVerificationLine(sourceSummary)}</p>
              ${
                state.notice
                  ? `<p class="live-notice">${escapeHtml(state.notice)}</p>`
                  : ""
              }
            </div>

            <button class="refresh-button ${state.refreshing ? "is-busy" : ""}" id="refresh-button" ${
              state.refreshing ? "disabled" : ""
            }>
              ${state.refreshing ? "更新中..." : "立即更新"}
            </button>
          </div>

          <div class="search-row">
            <label class="search-shell" for="query-input">
              <span>关键词检索</span>
              <input
                id="query-input"
                type="search"
                placeholder="可搜索标题、机构、摘要或关键数据"
                value="${escapeHtml(state.query)}"
              />
            </label>

            <div class="year-switch" role="tablist" aria-label="按年份筛选">
              ${renderSwitchButton("all", "全部年份", state.yearFilter)}
              ${renderSwitchButton("2026", "只看 2026", state.yearFilter)}
              ${renderSwitchButton("2025", "只看 2025", state.yearFilter)}
            </div>
          </div>

          <div class="sector-pills" role="tablist" aria-label="按行业筛选">
            ${renderSectorButton("all", "全部行业", state.sectorId)}
            ${sectors.map((sector) => renderSectorButton(sector.id, sector.title, state.sectorId)).join("")}
          </div>

          <p class="result-note">当前展示 <strong>${visibleReports.length}</strong> 篇研报，收录基准日期为 <strong>${retrievedAt}</strong>。</p>
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
            ${timelineReports
              .map(
                (report) => `
                  <article class="timeline-item">
                    <p class="timeline-date">${report.date}</p>
                    <h3>${escapeHtml(report.title)}</h3>
                    <p>${escapeHtml(report.source)} · ${escapeHtml(getSectorTitle(sectors, report.sectorId))}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        ${renderSections(visibleSectors)}

        <section class="source-card-board">
          <div class="section-head">
            <div>
              <p class="section-eyebrow">研究来源</p>
              <h2>已核验的官方发布机构</h2>
            </div>
            <p class="section-note">以下入口均为本页收录研报对应的官方报告页，用于继续阅读全文或二次核验。</p>
          </div>

          <div class="source-grid">
            ${sourceEntries
              .map(
                (entry) => `
                  <a class="source-link-card" href="${entry.link}" target="_blank" rel="noreferrer">
                    <strong>${escapeHtml(entry.name)}</strong>
                    <span>${escapeHtml(entry.label)}</span>
                  </a>
                `,
              )
              .join("")}
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
  `;

  bindEvents();
}

function renderSections(visibleSectors) {
  if (visibleSectors.length === 0) {
    return `
      <section class="empty-card">
        <p class="section-eyebrow">没有匹配结果</p>
        <h2>当前筛选条件下暂未找到研报</h2>
        <p>可以清空关键词，或切换行业和年份后继续查看。</p>
      </section>
    `;
  }

  return visibleSectors
    .map(
      (sector) => `
        <section class="sector-section" id="${sector.id}">
          <div class="section-head">
            <div>
              <p class="section-eyebrow">${escapeHtml(sector.kicker)}</p>
              <h2>${escapeHtml(sector.title)}</h2>
            </div>
            <p class="section-note">${escapeHtml(sector.intro)}</p>
          </div>

          <div class="report-grid">
            ${sector.reports.map((report) => renderCard(report)).join("")}
          </div>
        </section>
      `,
    )
    .join("");
}

function renderCard(report) {
  return `
    <article class="report-card">
      <div class="card-topline">
        <span class="source-badge">${escapeHtml(report.source)}</span>
        <span class="source-meta">${escapeHtml(report.sourceLabel)}</span>
      </div>

      <h3>${escapeHtml(report.title)}</h3>

      <div class="meta-row">
        <span>机构：<strong>${escapeHtml(report.source)}</strong></span>
        <span>日期：${report.date}</span>
        <span>状态：${escapeHtml(report.linkStatusLabel || "已收录")}</span>
      </div>

      <div class="summary-block">${escapeHtml(report.summary)}</div>

      <div class="fact-list">
        ${report.facts.map((fact) => `<span>${escapeHtml(fact)}</span>`).join("")}
      </div>

      <div class="card-footer">
        <a href="${report.link}" target="_blank" rel="noreferrer">查看报告全文</a>
      </div>
    </article>
  `;
}

function renderStat(label, value) {
  return `
    <article class="stat-card">
      <p>${label}</p>
      <strong>${value}</strong>
    </article>
  `;
}

function renderSectorButton(id, label, activeId) {
  return `
    <button
      class="pill-button ${id === activeId ? "is-active" : ""}"
      type="button"
      data-sector="${id}"
    >
      ${escapeHtml(label)}
    </button>
  `;
}

function renderSwitchButton(id, label, activeId) {
  return `
    <button
      class="switch-button ${id === activeId ? "is-active" : ""}"
      type="button"
      data-year="${id}"
    >
      ${escapeHtml(label)}
    </button>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-sector]").forEach((button) => {
    button.addEventListener("click", () => {
      state.sectorId = button.getAttribute("data-sector") || "all";
      render();
    });
  });

  document.querySelectorAll("[data-year]").forEach((button) => {
    button.addEventListener("click", () => {
      state.yearFilter = button.getAttribute("data-year") || "all";
      render();
    });
  });

  const refreshButton = document.querySelector("#refresh-button");
  if (refreshButton) {
    refreshButton.addEventListener("click", () => {
      void refreshData(true);
    });
  }

  const queryInput = document.querySelector("#query-input");
  if (queryInput instanceof HTMLInputElement) {
    queryInput.addEventListener("input", (event) => {
      const inputNode = event.target instanceof HTMLInputElement ? event.target : null;
      const nextValue = inputNode ? inputNode.value : "";
      const cursorPosition = inputNode?.selectionStart ?? nextValue.length;

      state.query = nextValue.trim();
      render();

      const refreshedInput = document.querySelector("#query-input");
      if (refreshedInput instanceof HTMLInputElement) {
        refreshedInput.focus();
        refreshedInput.setSelectionRange(cursorPosition, cursorPosition);
      }
    });
  }
}

async function refreshData(isManual = false) {
  if (state.refreshing) {
    return;
  }

  state.refreshing = true;
  if (isManual) {
    state.notice = "正在拉取最新研报数据，请稍候。";
  }
  render();

  try {
    const liveData = await loadRemoteData();
    state.data = normalizeDataset(liveData.payload, liveData.mode);
    state.notice =
      liveData.mode === "实时接口"
        ? "已完成一次在线刷新。"
        : "实时接口暂不可用，当前使用最新静态快照。";
  } catch (error) {
    state.notice =
      error instanceof Error
        ? `本次更新失败，继续展示当前数据。${error.message}`
        : "本次更新失败，继续展示当前数据。";
  } finally {
    state.refreshing = false;
    state.nextRefreshAt = Date.now() + (state.data.refreshIntervalMs || DEFAULT_REFRESH_INTERVAL_MS);
    scheduleRefresh();
    render();
  }
}

async function loadRemoteData() {
  const apiUrl = new URL("api/industry-report-navigator", window.location.href).toString();
  const snapshotUrl = new URL("industry-report-navigator.json", window.location.href).toString();

  try {
    return {
      mode: "实时接口",
      payload: await fetchJson(apiUrl),
    };
  } catch {
    return {
      mode: "静态快照",
      payload: await fetchJson(snapshotUrl),
    };
  }
}

async function fetchJson(url) {
  const response = await fetch(url, {
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

function scheduleRefresh() {
  window.clearTimeout(refreshTimerId);
  refreshTimerId = window.setTimeout(() => {
    void refreshData();
  }, Math.max(1_000, state.nextRefreshAt - Date.now()));
}

function startCountdown() {
  window.clearInterval(countdownTimerId);
  countdownTimerId = window.setInterval(() => {
    const nextRefreshNode = document.querySelector("[data-role='next-refresh']");
    if (nextRefreshNode) {
      nextRefreshNode.textContent = formatCountdown(state.nextRefreshAt - Date.now());
    }
  }, 1_000);
}

function normalizeDataset(inputData, deliveryMode) {
  const sourceSummary =
    inputData.sourceSummary ||
    {
      total: inputData.reports.length,
      online: inputData.reports.filter((report) => report.linkStatus === "online").length,
      restricted: inputData.reports.filter((report) => report.linkStatus === "restricted").length,
      warning: inputData.reports.filter((report) => report.linkStatus === "warning").length,
      checked: inputData.reports.filter((report) => report.linkStatus).length,
    };

  return {
    ...inputData,
    deliveryMode,
    generatedAt: inputData.generatedAt || new Date().toISOString(),
    refreshIntervalMs: inputData.refreshIntervalMs || DEFAULT_REFRESH_INTERVAL_MS,
    sourceSummary,
    reports: inputData.reports.map((report) => ({
      ...report,
      linkStatusLabel: report.linkStatusLabel || "待在线核验",
    })),
  };
}

function getVisibleReports(reports, sectors) {
  return reports.filter((report) => {
    if (state.sectorId !== "all" && report.sectorId !== state.sectorId) {
      return false;
    }

    if (state.yearFilter !== "all" && !report.date.startsWith(state.yearFilter)) {
      return false;
    }

    if (!state.query) {
      return true;
    }

    const combinedText = [
      report.title,
      report.source,
      report.summary,
      ...report.facts,
      getSectorTitle(sectors, report.sectorId),
    ]
      .join(" ")
      .toLowerCase();

    return combinedText.includes(state.query.toLowerCase());
  });
}

function getSectorTitle(sectors, sectorId) {
  return sectors.find((sector) => sector.id === sectorId)?.title || "";
}

function buildSourceEntries(reports) {
  const seen = new Map();

  reports.forEach((report) => {
    if (!seen.has(report.source)) {
      seen.set(report.source, {
        name: report.source,
        label: report.sourceLabel,
        link: report.link,
      });
    }
  });

  return Array.from(seen.values());
}

function formatCountdown(remainingMs) {
  if (remainingMs <= 0) {
    return "即将刷新";
  }

  const totalSeconds = Math.floor(remainingMs / 1_000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes === 0) {
    return `${seconds} 秒`;
  }

  return `${minutes} 分 ${String(seconds).padStart(2, "0")} 秒`;
}

function formatDateTime(value) {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleString("zh-CN", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function buildVerificationLine(sourceSummary) {
  if (!sourceSummary.checked) {
    return `链接核验：尚未在线检测，共 ${sourceSummary.total} 条链接`;
  }

  return `链接核验：${sourceSummary.online}/${sourceSummary.total} 在线${
    sourceSummary.restricted > 0 ? `，${sourceSummary.restricted} 条受站点限制` : ""
  }${sourceSummary.warning > 0 ? `，${sourceSummary.warning} 条待复核` : ""}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
