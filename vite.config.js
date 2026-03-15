import { defineConfig } from "vite";
import { getIndustryReportNavigatorData } from "./server/industry-report-navigator.js";

function industryReportNavigatorPlugin() {
  const registerRoute = (server) => {
    server.middlewares.use(async (req, res, next) => {
      const requestUrl = req.url || "";

      if (!requestUrl.startsWith("/api/industry-report-navigator")) {
        next();
        return;
      }

      if (req.method !== "GET") {
        res.statusCode = 405;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify({ message: "Method not allowed" }));
        return;
      }

      try {
        const payload = await getIndustryReportNavigatorData();
        res.statusCode = 200;
        res.setHeader("Cache-Control", "no-store");
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(payload));
      } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(
          JSON.stringify({
            message: error instanceof Error ? error.message : "Failed to build report data",
          }),
        );
      }
    });
  };

  return {
    name: "industry-report-navigator",
    configureServer: registerRoute,
    configurePreviewServer: registerRoute,
  };
}

export default defineConfig({
  base: "./",
  plugins: [industryReportNavigatorPlugin()],
  server: {
    allowedHosts: true,
  },
  preview: {
    allowedHosts: true,
  },
});
