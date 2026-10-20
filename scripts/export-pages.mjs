import { cp, mkdir, rm, writeFile } from "node:fs/promises";

const outputRoot = new URL("../docs/", import.meta.url);
const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${Date.now()}`);

const { default: worker } = await import(workerUrl.href);
const response = await worker.fetch(
  new Request("https://dongzhang1905.github.io/", {
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

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

const html = await response.text();
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });
await cp(new URL("../dist/client/", import.meta.url), outputRoot, {
  recursive: true,
  filter: (source) => !source.includes("_vinext_fonts"),
});
await writeFile(new URL("index.html", outputRoot), html, "utf8");
await writeFile(new URL("404.html", outputRoot), html, "utf8");
await writeFile(new URL(".nojekyll", outputRoot), "", "utf8");

console.log(`GitHub Pages export written to ${outputRoot.pathname}`);
