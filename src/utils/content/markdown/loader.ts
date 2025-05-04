import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

export async function convertMarkdownToHtml(
  slugArray: string[]
): Promise<string | null> {
  const contentDir = path.join(process.cwd(), "content");
  const filePath = path.join(contentDir, ...slugArray, "index.md");

  try {
    const contentFile = await fs.promises.readFile(filePath, "utf-8");
    const { content } = matter(contentFile); // separate content from metadata
    const html = marked(content);

    return html;
  } catch (error) {
    console.error("Error loading Mardown content:", error);
    return null;
  }
}
