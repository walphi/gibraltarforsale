# Gibraltar For Sale — content-first release

This project is a static, content-led Gibraltar property guide built with Astro, TypeScript and Tailwind CSS v4. It publishes original area guides, buyer resources, market-data status pages and a journal. The public site intentionally does not show prototype properties, sample prices, fictional agents or fictional developments as real inventory.

## Local development

Use Node.js compatible with the committed Astro version and the pinned package manager `pnpm@11.25.0`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Astro serves on port 3000. Public pages are statically rendered at build time. Run checks and build with:

```sh
pnpm check
pnpm build
```

The static output is in `dist/`; the Netlify build publishes that directory. The route declaration file is `public/manus-routes.json`. Update it whenever a public page is added, removed or renamed. Astro emits `sitemap-index.xml`; `robots.txt` points to that index, and Netlify redirects `/sitemap.xml` to it for compatibility.

## Content and imagery

Area articles are in `src/content/areas/`, buyer guides in `src/content/guides/`, market articles in `src/content/market/`, and journal articles in `src/content/journal/`. Their frontmatter is validated by `src/content.config.ts`. Preserve citations, qualifications and source links when editing factual content. Search for future-dated or unusually specific tax, lending, yield and market claims and source-check them before presenting them as current.

Page templates are under `src/pages/`. Shared brand, header, footer and cards are under `src/components/astro/`; area imagery is mapped in `src/data/areas.ts`. Location-photo sources, license terms, modifications and AI image disclosures are recorded in `ASSET_CREDITS.md` and the public `/image-credits/` page. Photo captions are intentionally omitted; descriptive alt text remains for accessibility. Original source photographs and generated masters are in `assets/source/` and `assets/generated/`; compressed WebP versions are in `public/images/editorial/`.

## Public launch status

There is currently no first-party form, account, saved search, email-alert service or property enquiry endpoint. Contact, sale and rental pages therefore show a status message and do not ask visitors to submit personal data. Verified operator identity/contact details, property inventory, agent consent, a working lead processor and a retention/privacy plan remain prerequisites to activating those features.

No verified listings or market-data feed have been supplied. Property and rental pages state this directly; fictional records in `src/data/properties.ts` and `src/data/developments.ts` are not rendered as live inventory. Do not publish those data as real without replacing each field with source-verified material.

The custom `.com` domain did not resolve during the 9 November 2026 review. For now, canonical URLs, structured-data URLs, Astro sitemap generation and `robots.txt` use the deployed `https://gibraltarforsale.netlify.app` origin. Once `gibraltarforsale.com` is verified in DNS and attached in Netlify, update the origin consistently in `astro.config.mjs`, `SiteLayout.astro`, `Breadcrumb.astro`, journal/area canonical generation and `robots.txt`; rebuild, then inspect canonical links, the sitemap index and child sitemap URLs on the live custom domain. Do not switch the origin based on an environment variable until it points to a working canonical host.

The website source does not add GA4, Meta Pixel, advertising or session-replay scripts. The Netlify account's optional analytics setting cannot be determined from this repository; check it and update the Privacy/Cookie notices before making claims about host-level analytics. Hosting may process technical request data. The legal operator and a monitored privacy contact also need to be supplied before collecting personal data.

## Remaining launch work

The high-priority quick fixes and owner prerequisites are summarized in [`docs/launch-review-plan.md`](docs/launch-review-plan.md). The existing `TODO.md` retains the full marketplace scope and launch criteria. Before enabling search and enquiries, source and verify authorized listings, provide accurate operator/contact details, choose and configure secure form/CRM/email services, establish retention and consent processes, and obtain appropriate local review for legal, tax, immigration and mortgage guidance. Review dated 2027 market and mortgage claims against dated primary evidence before promoting them as current.
