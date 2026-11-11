import { copyFileSync, mkdirSync } from "node:fs";

// The same source files work directly on GitHub Pages and in a static deployment.
mkdirSync("dist", { recursive: true });
for (const file of ["index.html", "styles.css", "script.js", "favicon.svg"]) {
  copyFileSync(file, `dist/${file}`);
}
