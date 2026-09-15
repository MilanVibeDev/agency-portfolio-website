# NovaHaus Studio

Fictional three-page agency portfolio built with React, TypeScript, Vite, React Router, and vanilla CSS.

## Run locally

Install dependencies with `npm install`, then run `npm run dev`. On Windows PowerShell, use `npm.cmd` if script execution is restricted.

## Validate and build

- `npm run lint`
- `npm run build`
- `npm run preview`

## Vercel routing

The root `vercel.json` selects Vite, builds with `npm run build`, serves `dist`, and rewrites React routes to `/index.html`. This follows [Vercel’s Vite SPA guidance](https://vercel.com/docs/frameworks/frontend/vite). Existing static assets continue to be served normally.

Deploy the project root with `vercel.json` included. A deployment built before this file was added must be redeployed before the fix takes effect. No deployment has been performed as part of the local source changes.

After deployment, open `/services`, `/about`, and `/about#contact` directly in a new tab, then refresh each URL. The first two should start at the page top; the last should land at the contact demo. A URL fragment is handled by the browser, so `/about#contact` makes the same server request as `/about`.

Also test navigation from the bottom of the homepage to Services and About. New page visits reset scroll immediately, and intentional hash links retain their section destination. A Netlify-compatible `_redirects` file remains included for that host.

## Before publishing as a real business

Replace the clearly labeled fictional team and sample testimonials with verified information. Project facts describe the website itself; case-study captions describe design intentions without fabricated outcomes. Demo contact details are noninteractive and social-platform homepage links have been removed. Connect the demo form to a real delivery service if submissions should be received; it currently validates locally and previews a confirmation without sending or storing data. Fonts load from Google Fonts with local sans-serif fallbacks. Project visuals are original CSS and SVG compositions with no remote image dependencies.

The `src/pages` directory contains the three pages; `src/components` holds navigation, footer, form, visuals, and shared sections; `src/data/content.ts` holds service and team content. Styling is in `src/index.css`.
