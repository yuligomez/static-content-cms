import fs from "fs";
import path from "path";

export async function getAllContentPaths(): Promise<string[][]> {
  const paths: string[][] = [];
  const baseDir = path.join(process.cwd(), "content");

  async function walk(current: string, acc: string[] = []) {
    const entries = await fs.promises.readdir(current, { withFileTypes: true });

    for (const entry of entries) {
      const entryPath = path.join(current, entry.name);
      const slugParts = [...acc, entry.name];

      if (entry.isDirectory()) {
        await walk(entryPath, slugParts);
      } else if (entry.name === "index.md") {
        paths.push(acc);
      }
    }
  }

  await walk(baseDir);
  return paths;
}
