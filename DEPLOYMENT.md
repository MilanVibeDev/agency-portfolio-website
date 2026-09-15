# NovaHaus Studio

Fictional three-page agency portfolio built with React, TypeScript, Vite, React Router, and vanilla CSS.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`. On Windows PowerShell, use `npm.cmd` if script execution is restricted.

## Validate and build

- `npm run lint`
- `npm run build`
- `npm run preview`

Deploy the generated `dist` directory to a static host. Configure all non-file requests to serve `index.html` so `/services` and `/about` work on direct navigation and refresh. A Netlify-compatible `_redirects` file is included. Other hosts need an equivalent SPA fallback.

## Before publishing as a real business

Replace the fictional contact information, example case studies, statistics, testimonials, and social-platform homepage links. Connect the demo form to a real delivery service if submissions should be received. It currently validates locally and displays a confirmation without sending or storing data. Fonts load from Google Fonts with local sans-serif fallbacks. Project visuals are original CSS and SVG compositions with no remote image dependencies.

The `src/pages` directory contains the three pages; `src/components` holds navigation, footer, form, visuals, and shared sections; `src/data/content.ts` holds service and team content. Styling is in `src/index.css`.
