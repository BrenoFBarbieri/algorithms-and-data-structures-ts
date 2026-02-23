import { join, resolve } from "node:path";
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";

const input = process.argv[2];
if (!input) {
  console.error("Provide a file path.");
  process.exit(1);
}

const filePath = join("src", input);

const file = filePath.endsWith(".ts") ? input : `${input}.ts`;

const absolutePath = resolve(file);

if (!existsSync(absolutePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

console.info(`Execution script:  ${filePath}\n`);

await import(pathToFileURL(absolutePath).href);
