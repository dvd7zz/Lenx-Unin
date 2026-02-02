import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function startServer() {
  const server = createServer(app);

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const viteConfig = (await import("../vite.config")).default;
    const vite = await createViteServer({
      ...viteConfig,
      server: { middlewareMode: true, hmr: { server } },
      appType: "custom",
    });
    app.use(vite.middlewares);
    app.use(/^(?!\/api).*/, async (req, res, next) => {
      try {
        const templatePath = path.resolve(__dirname, "..", "client", "index.html");
        const template = fs.readFileSync(templatePath, "utf-8");
        const html = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve(__dirname, "..", "dist", "public");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  const port = process.env.PORT || 5000;
  server.listen(Number(port), "0.0.0.0", () => {
    console.log(`[server] serving on port ${port}`);
  });
}

startServer().catch(console.error);
