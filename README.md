# Dong Zhang — Academic Homepage

A bilingual academic homepage for Dong Zhang (张东), an undergraduate physics
student at Tianjin University.

The design adapts the compact, typography-led academic layout of
[al-folio](https://github.com/alshedivat/al-folio) to the existing React/Vinext
project. This is an independent implementation inspired by al-folio, not a
Jekyll installation or a fork of its runtime.

## Content and design

- A single profile introduction with email, GitHub, and PDF CV links.
- A fixed introduction prefix with a typing / deleting loop for research interests;
  reduced-motion visitors see static text.
- English / Chinese language switching, including the document language.
- Light and dark themes, initially following the visitor's system preference.
- Research interests and education presented as compact academic records.
- A collapsed publications / projects section until public entries are ready.
- Responsive navigation and layouts for desktop and mobile.
- No external fonts, image services, or new dependencies.

The biography remains intentionally blank. The `dz.` monogram is decorative;
it does not represent a photograph. Existing academic facts and the PDF CV
are retained.

## Local development

Node.js 22.13 or newer is required.

```bash
npm ci
npm run dev
```

## Build and publish

```bash
npm test
node scripts/export-pages.mjs
```

The first command builds the site and runs the existing rendered HTML checks.
The second exports that build to `docs/`. `npm run export:pages` builds and
exports in one step.

The included GitHub Actions workflow runs on pushes to `main` and publishes
`docs/` to [dongzhang1905.github.io](https://dongzhang1905.github.io/).
GitHub Pages must use **GitHub Actions** as its build source.

## Main files

- `app/page.tsx`: bilingual content, page structure, and theme controls.
- `app/globals.css`: typography, color themes, and responsive layout.
- `app/layout.tsx`: page metadata.
- `public/zhangdong-cv.pdf`: existing English CV.
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment.
- `scripts/export-pages.mjs`: static export.

## Acknowledgements

The current visual design references
[al-folio](https://github.com/alshedivat/al-folio).
The original site's layout referenced
[WD7ang/WowPage](https://github.com/WD7ang/WowPage); its existing MIT license
notice is retained.
