import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36";

const CACHE_TTL_MS = 15 * 60_000;
const REFRESH_INTERVAL_MS = 30 * 60_000;
const FETCH_TIMEOUT_MS = 10_000;

const currentFile = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(currentFile), "..");
const sourceFile = path.join(rootDir, "src", "data", "industry-report-navigator.json");

let cachedPayload = null;
let cacheExpiresAt = 0;
let inflightPayload = null;

export async function getIndustryReportNavigatorData() {
  const now = Date.now();

  if (cachedPayload && now < cacheExpiresAt) {
    return cachedPayload;
  }

  if (inflightPayload) {
    return inflightPayload;
  }

  inflightPayload = buildNavigatorData()
    .then((payload) => {
      cachedPayload = payload;
      cacheExpiresAt = Date.now() + CACHE_TTL_MS;
      return payload;
    })
    .finally(() => {
      inflightPayload = null;
    });

  return inflightPayload;
}

async function buildNavigatorData() {
  const dataset = await loadDataset();
  const verificationResults = await Promise.allSettled(
    dataset.reports.map((report) => verifyReportLink(report.link)),
  );
  const generatedAt = new Date().toISOString();

  const reports = dataset.reports.map((report, index) => {
    const result = verificationResults[index];

    if (result.status === "fulfilled") {
      return {
        ...report,
        linkStatus: "online",
        linkStatusLabel: "链接已核验",
        checkedAt: generatedAt,
      };
    }

    const reason =
      result.reason instanceof Error ? result.reason.message : String(result.reason);

    if (/HTTP 403/i.test(reason)) {
      return {
        ...report,
        linkStatus: "restricted",
        linkStatusLabel: "站点限制校验",
        checkedAt: generatedAt,
        linkError: reason,
      };
    }

    return {
      ...report,
      linkStatus: "warning",
      linkStatusLabel: "链接待复核",
      checkedAt: generatedAt,
      linkError: reason,
    };
  });

  return {
    ...dataset,
    reports,
    generatedAt,
    refreshIntervalMs: REFRESH_INTERVAL_MS,
    sourceSummary: {
      total: reports.length,
      online: reports.filter((report) => report.linkStatus === "online").length,
      restricted: reports.filter((report) => report.linkStatus === "restricted").length,
      warning: reports.filter((report) => report.linkStatus === "warning").length,
      checked: reports.length,
    },
  };
}

async function loadDataset() {
  const raw = await readFile(sourceFile, "utf8");
  return JSON.parse(raw);
}

async function verifyReportLink(url) {
  const response = await fetchWithTimeout(url, FETCH_TIMEOUT_MS);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return true;
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timerId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
  } finally {
    clearTimeout(timerId);
  }
}
