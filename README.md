# 全球行业研报智能导航员

这是一个中文行业研报导航网页，聚合并展示 2025-2026 年公开可访问的权威研究报告，支持行业筛选、年份筛选、关键词检索、官方链接跳转，以及自动更新回退机制。

## 当前页面特性

- 覆盖人工智能与数字经济、绿色能源、金融与金融科技、大健康、半导体与消费电子五个模块
- 每篇研报包含中文简评、关键数据、发布日期与官方来源按钮
- 前端优先读取实时接口 `/api/industry-report-navigator`
- 接口不可用时自动回退到静态快照 `industry-report-navigator.json`
- 直接离线打开构建产物时，仍可使用内置数据浏览

## 本地运行

```bash
npm install
npm run generate:reports
npm run dev
```

## 构建产物

```bash
npm run build:pages
```

构建完成后，可直接打开 `docs/index.html`，也可执行：

```bash
npm run start
```

然后访问 [http://127.0.0.1:4173/](http://127.0.0.1:4173/)。

## GitHub Pages

- 已为 GitHub Pages 准备 `docs/` 目录
- 推送到默认分支后，可在仓库设置中将 Pages 来源指向 `main` 分支的 `/docs`
- 若需要重新生成线上静态版本，执行 `npm run build:pages`

## 数据说明

- 研报基础数据维护在 `src/data/industry-report-navigator.json`
- 静态快照由 `npm run generate:reports` 生成到 `public/industry-report-navigator.json`
- 实时接口在 Vite 开发和预览环境下由本地服务动态提供
