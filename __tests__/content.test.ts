import fs from "fs";
import path from "path";
import request from "supertest";
import { startTestServer, stopTestServer } from "./utlis/testServer";
import { getAllContentPaths } from "../src/utils/content/markdown/paths";

const CONTENT_TEST_DIR = path.join(process.cwd(), "content/test-page");
const INDEX_MD = path.join(CONTENT_TEST_DIR, "index.md");

let baseUrl: string;

// Create temporary markdown file
beforeAll(async () => {
  fs.mkdirSync(CONTENT_TEST_DIR, { recursive: true });
  fs.writeFileSync(
    INDEX_MD,
    `---\ntitle: Test Page\n---\n# Hello from test\n\nThis is a dynamic test page.`
  );

  baseUrl = await startTestServer();
});

// Clean file and stop server
afterAll(async () => {
  await stopTestServer();
  setTimeout(() => {
    fs.rmSync(CONTENT_TEST_DIR, { recursive: true, force: true });
  }, 100);
});

describe("Static Markdown content routing", () => {
  it("returns 200 for a valid content route", async () => {
    const res = await request(baseUrl).get("/test-page");
    expect(res.status).toBe(200);
  });

  it("returns HTML rendered from index.md", async () => {
    const res = await request(baseUrl).get("/test-page");
    expect(res.text).toContain("<h1>Hello from test</h1>");
    expect(res.text).toContain("This is a dynamic test page");
  });

  it("returns 404 for a non-existent content path", async () => {
    const res = await request(baseUrl).get("/non-existent-page");
    expect(res.status).toBe(404);
  });

  it("returns all content paths from markdown files", async () => {
    const paths = await getAllContentPaths();
    expect(paths).toContainEqual(["test-page"]);
  });
});
