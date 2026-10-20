# Dong Zhang — Academic Homepage

A bilingual academic homepage for Dong Zhang (张东), an undergraduate physics
student at Tianjin University.

The design adapts the compact, typography-led academic layout of
[al-folio](https://github.com/alshedivat/al-folio) to the existing React/Vinext
project. This is an independent implementation inspired by al-folio, not a
Jekyll installation or a fork of its runtime.

## Content and design

- A single profile introduction with email and GitHub links.
- A fixed introduction prefix with a typing / deleting loop for research interests;
  reduced-motion visitors see static text.
- English / Chinese language switching, including the document language.
- Light and dark themes, initially following the visitor's system preference.
- Four illustrated research interests: high-energy theory, AI for Science,
  learning theory, and embodied intelligence.
- Education with the official Tianjin University emblem.
- Contact navigation linking directly to the contact section.
- A collapsed publications / projects section until public entries are ready.
- Responsive navigation and layouts for desktop and mobile.
- Native fragment navigation and browser scroll restoration for this static,
  single-page deployment; fragment history does not invoke the RSC router.
- Locally hosted images and rounded typography using Nunito and ChillRoundF.
  No external font requests, image services, or new dependencies.

The hero illustration was generated with OpenAI image generation around the
theme of books, stars, philosophy, and a curious robot. Decorative research
drawings are inline SVGs. The cream, forest-green, and terracotta palette
supports both light and dark themes. Existing academic facts are retained;
the CV download and publicly served PDF have been removed.

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
- `public/images/`: the hero illustration and university emblem.
- `public/fonts/`: self-hosted webfonts and their OFL licenses.
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment.
- `scripts/export-pages.mjs`: static export.

## Acknowledgements

The current visual design references
[al-folio](https://github.com/alshedivat/al-folio).
The university emblem comes from the official
[Tianjin University branding page](https://tju.edu.cn/tdgk/tdbs.htm).
Fonts: [Nunito](https://fonts.google.com/specimen/Nunito) from Google Fonts
and [ChillRoundF](https://github.com/Warren2060/ChillRound).
Both use the SIL Open Font License; license files are included with the fonts.
The Chinese font is subset to the current page's characters for faster loading;
refresh this subset when adding new Chinese copy.
The subset is named Dong Rounded, respecting the upstream reserved font name.
The original site's layout referenced
[WD7ang/WowPage](https://github.com/WD7ang/WowPage); its existing MIT license
notice is retained.
