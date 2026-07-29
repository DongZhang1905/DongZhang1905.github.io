# Dong Zhang - Academic Homepage

A restrained blue, bilingual academic homepage for Dong Zhang (张东), an
undergraduate physics student at Tianjin University. The information
architecture is inspired by [WowPage](https://github.com/WD7ang/WowPage):
profile information on the left and a single-page academic record on the right.

## Included

- English and Chinese language switch
- Research directions: High-Energy Theory and AI for Science
- Education at Tianjin University, 2023-present
- Empty publication and project sections ready for future updates
- Downloadable English CV
- Responsive desktop and mobile layouts
- GitHub Pages deployment workflow

The profile image currently uses a restrained `DZ` monogram. Replace it with an
illustration later by adding `public/portrait.png` and updating the
`avatar-shell` block in `app/page.tsx`.

## Local development

Node.js 22 or newer is required.

```bash
npm ci
npm run dev
```

Useful checks:

```bash
npm test
npm run export:pages
```

The GitHub Pages-ready static output is written to `docs/`.

## Publish to GitHub Pages

1. Create a public repository named `DongZhang1905.github.io`.
2. Push this project to the repository's `main` branch.
3. Open **Settings > Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Run the included `Deploy academic homepage` workflow, or push a new commit.

The public address will be:

```text
https://dongzhang1905.github.io/
```

## Main files

- `app/page.tsx`: bilingual content and page structure
- `app/globals.css`: color system, typography, cards, and responsive layout
- `public/zhangdong-cv.pdf`: downloadable CV
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment
- `scripts/export-pages.mjs`: static Pages export

## Acknowledgement

The layout concept is inspired by
[WD7ang/WowPage](https://github.com/WD7ang/WowPage), released under the MIT
License.
