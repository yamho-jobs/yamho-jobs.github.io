# Personal portfolio

A minimal, responsive portfolio built with plain HTML, CSS, and a tiny bit of JavaScript. No install or build step is required.

## Preview

Open `index.html` in your browser, or run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Make it yours

Edit `index.html` to replace the clearly labeled sample content:

- Update your name in the page title, introduction, footer, and navigation wordmark.
- Write a headline and short introduction tailored to the roles you want.
- Replace both sample projects with your own descriptions, role, dates, screenshots, and links. The current artwork is decorative CSS, not screenshots of real projects.
- Replace the about text and skill labels with your background and strengths.
- Replace the contact placeholder with your email link using the example HTML comment. Add LinkedIn and a résumé link when available.
- Update the page description and `favicon.svg` to suit your identity.

Colors, typography, and responsive layouts live in `styles.css`. Google Fonts are optional; system fonts work when offline. The only JavaScript updates the copyright year. Navigation and project disclosures work without it.

For static hosts that expect a build folder, run `node build.mjs` to copy the site into `dist/`. `.openai/hosting.json` records the private Sites deployment identity; GitHub Pages serves the root files directly.

## GitHub Pages

These files can be served directly from the repository root. Once you are ready, push them and configure the repository’s GitHub Pages source to use the branch containing the site and the `/ (root)` folder. No generated files or package manager are needed.
