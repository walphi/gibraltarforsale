# Gibraltar For Sale — first release

This project is the content-first first release of an independent Gibraltar property guide. It is built with Astro, TypeScript and Tailwind CSS v4 and generates static, crawlable pages. The currently published tranche contains area guides, buyer resources and clear market-data status. It intentionally does not publish the prototype properties, sample prices, fictional agents or fictional developments.

## Local development

Use Node.js compatible with the committed Astro version and the pinned package manager `pnpm@11.25.0`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Astro serves the site on port 3000. The public pages are statically rendered at build time. Run the existing checks and build with:

```sh
pnpm check
pnpm build
```

The static output is written to `dist/`. There is no runtime database, contact endpoint, email provider or analytics dependency in this first release. The hosted static build installs from the committed lockfile and publishes `dist/`.

## Editing the content

Area articles are in `src/content/areas/`, buyer guides in `src/content/guides/`, and market articles in `src/content/market/`. Content uses Markdown and frontmatter validated by `src/content.config.ts`. Preserve reference links, qualifications and disclaimer copy when editing factual material. Add a matching route through the relevant content collection so the static URL and `public/manus-routes.json` remain aligned.

The homepage and index pages are Astro files under `src/pages/`. Shared brand, header, footer, cards and calls to action are under `src/components/astro/`. The project-owned SVG favicon is `public/brand-mark.svg`; source photograph credits and reuse terms are in `ASSET_CREDITS.md`. The compressed hero images are stored at the project's `/manus-storage/` URLs.

## Public launch status

The first release has no first-party form, account, alert, saved-search or application-analytics collection. Project-level optional analytics injection and platform badge scripts are disabled. The hosting/CDN may still process technical request information or other platform analytics, and the Privacy and cookie notices state this limitation rather than claiming that all infrastructure logs have stopped. Verified operator contact details are still to be supplied, and no inactive enquiry or alert form is shown. Revise the notices before forms, account features, optional analytics, advertising or email.

No verified property listings or market-data feed have been supplied. Public property and rental pages state this directly. The fictional content in `src/data/properties.ts`, `src/data/developments.ts` and related models is for a later integration phase and is not rendered by any public route. Do not change that without replacing each field with source-verified live material and removing all sample labels only after verification.

The current project has no attached custom domain. Set `PUBLIC_SITE_URL` to the real, HTTPS public origin only after that domain is configured, then rebuild and republish so canonical and social URLs use the correct origin. Until then the static metadata omits absolute canonicals rather than guessing an origin. The platform-generated publish URL is the initial public URL.

## Later marketplace phase

Before enabling property search and enquiries, supply verified live listings and agent consent, accurate company/controller and contact details, a retention/privacy plan, working database and email settings, and any relevant professional review. Then implement the deferred property listing, lead persistence, alert scheduling, analytics and search functions described in `TODO.md`. No migration, email send, recurring alert, CRM write or public sample inventory is part of the first release.
