import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Dong Zhang's academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Dong Zhang \| Academic Homepage<\/title>/i);
  assert.match(html, /Dong Zhang/);
  assert.match(html, /张东/);
  assert.match(html, /High-Energy Theory/);
  assert.match(html, /AI for Science/);
  assert.match(html, /Tianjin University/);
  assert.match(html, /Learning Theory/);
  assert.match(html, /Embodied Intelligence/);
  assert.match(html, /href="#contact"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /src="\/images\/tju-emblem\.jpg"/);
  assert.match(html, /src="\/images\/curiosity-studio\.png"/);
  assert.doesNotMatch(html, /zhangdong-cv\.pdf/);
  assert.doesNotMatch(html, /class="eyebrow"/);
  assert.match(html, /href="https:\/\/github\.com\/DongZhang1905"/);
  assert.doesNotMatch(html, /codex-preview|loading skeleton|Starter Project/i);
});

test("keeps the bilingual interface and project assets wired", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /"use client"/);
  assert.match(page, /type Language = "en" \| "zh"/);
  assert.match(page, /setLanguage\(language === "en" \? "zh" : "en"\)/);
  assert.match(page, /mailto:yanyandreamer@tju\.edu\.cn/);
  assert.match(layout, /title: "Dong Zhang \| Academic Homepage"/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("../public/zhangdong-cv.pdf", import.meta.url)));
  await access(new URL("../public/images/curiosity-studio.png", import.meta.url));
  await access(new URL("../public/images/tju-emblem.jpg", import.meta.url));
  await access(new URL("../public/fonts/nunito-latin-variable.woff2", import.meta.url));
  await access(new URL("../public/fonts/dong-rounded-chinese.woff2", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
