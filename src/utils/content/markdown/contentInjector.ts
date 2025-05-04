import fs from "fs";
import path from "path";
import { convertMarkdownToHtml } from "./loader";

export async function injectContentInTemplate(
  slugArray: string[]
): Promise<string | null> {
  const content = await convertMarkdownToHtml(slugArray);
  if (!content) {
    return "";
  }

  const templatePath = path.join(process.cwd(), "template.html");
  try {
    const template = await fs.promises.readFile(templatePath, "utf-8");

    const hmtl = template.replace("{{content}}", content);
    return hmtl;
  } catch (error) {
    console.error("Error loading template.html:", error);
    return null;
  }
}
