# Yoonho's portfolio

A short, text-focused personal page. Plain HTML and CSS, with no dependencies or JavaScript.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8000` and visit `http://localhost:8000`.

## Contact links

In `index.html`, replace each of the three `pending-link` spans with a link to your email, LinkedIn, or new GitHub account. For example:

```html
<li><a href="mailto:you@example.com">email</a></li>
<li><a href="https://www.linkedin.com/in/your-profile/">linkedin</a></li>
<li><a href="https://github.com/your-new-account">github</a></li>
```

Until you add them, these labels are plain text rather than broken links. The note about your new GitHub account is directly below them.

## Résumé

The résumé link opens `resume.pdf` in a new tab. Replace that file whenever you update your résumé, keeping the same filename so the link continues to work.

## Hosting

GitHub Pages can serve these files directly from the repository root. `node build.mjs` copies the page, stylesheet, favicon, and PDF into `dist/` for static hosts. `.openai/hosting.json` preserves the existing private Sites deployment identity.
