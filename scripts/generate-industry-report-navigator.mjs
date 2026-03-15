import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getIndustryReportNavigatorData } from "../server/industry-report-navigator.js";

const currentFile = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(currentFile), "..");
const publicDir = path.join(rootDir, "public");
const outputFile = path.join(publicDir, "industry-report-navigator.json");

await mkdir(publicDir, { recursive: true });

try {
  const payload = await getIndustryReportNavigatorData();
  await writeFile(outputFile, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Generated ${outputFile}`);
} catch (error) {
  try {
    await readFile(outputFile, "utf8");
    console.warn(
      `Report snapshot refresh failed, keeping existing snapshot: ${
        error instanceof Error ? error.message : String(error)
      }`,
    );
  } catch {
    throw error;
  }
}
