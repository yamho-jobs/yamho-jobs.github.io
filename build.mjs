import { copyFileSync, mkdirSync } from "node:fs";

// The same source files work directly on GitHub Pages and in a static deployment.
mkdirSync("dist", { recursive: true });
for (const file of ["index.html", "styles.css", "favicon.svg", "resume.pdf"]) {
  copyFileSync(file, `dist/${file}`);
}
