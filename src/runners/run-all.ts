import { resolve, join } from "node:path";
import { readdirSync, statSync } from "node:fs";
import { pathToFileURL } from "node:url";

const SRC_DIR = resolve("src");
const IGNORED_DIRS = new Set(["scripts"]);

function findTSFiles(dir: string): string[] {
  const entries = readdirSync(dir);
  let results: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      if (IGNORED_DIRS.has(entry)) {
        continue;
      }
      results = results.concat(findTSFiles(fullPath));
    } else if (entry.endsWith(".ts") && !entry.endsWith(".test.ts")) {
      results.push(fullPath);
    }
  }

  return results;
}

async function main() {
  const files = findTSFiles(SRC_DIR);

  if (files.length === 0) {
    console.info("No problem files found in src.");
    return;
  }

  for (const file of files) {
    console.info(`\nExecution script: ${file}`);
    await import(pathToFileURL(file).href);
  }
}

main().catch((err) => {
  console.error("Execution failed:");
  console.error(err);
  process.exit(1);
});
