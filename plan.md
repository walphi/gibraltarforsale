# Gibraltar For Sale — revised first-release plan

## Current authorization and launch scope

The owner has asked to publish the first pages now, keeping the remaining 94 credits available. Deliver a lean, content-first first release rather than finishing the complete listing, CRM, alert and marketing stack in this pass. Use the current Manus project’s explicit publication flow, with automatic publishing left off. The current project has no configured custom domain, so the public result will initially use the platform-generated URL; do not imply `gibraltarforsale.com` is connected.

The first release is a static Astro site so its useful buyer guidance is fully present in crawlable HTML without a listing database, external email provider or ongoing compute. Include the home page; verified-listings landing page with a truthful “no verified listings live yet” state; area index and all eight researched area pages; guides index and all researched buyer guides including Best Areas; market index, tracker, quarterly update and methodology; About, Contact, Privacy, Terms, Cookies and a custom 404. The researched articles contain citations, qualifications and reference sections and must retain them. All pages must use real internal routes, not dead links.

Do not display the 30 fictional property records, fictional agents, fictional developers or sample prices as real inventory. Keep any prototype sample data out of public navigation, search, the sitemap and indexable HTML. Publish no unverified market measurements, testimonials, partner claims or agency contacts. The first release will not intentionally collect visitor personal data through first-party forms, accounts, alerts or analytics; project-level analytics and badge scripts are disabled, while the notice must explain that host/CDN systems may process request data and that other platform analytics may remain. Contact and privacy copy will say that no public enquiry channel is open rather than inventing an operator or soliciting user information. These capabilities are deferred until real listing/agent evidence, verified business and privacy details, confirmed email settings and the relevant integrations are supplied.

This revision is a staged release of the previously approved broader marketplace plan, not a replacement of its Phase 2 requirements. Preserve the full criteria in `TODO.md`, mark Phase 2 outcomes deferred, and complete only work supported by the first-release scope. Project-level analytics and badge scripts are disabled. The privacy notice must still explain that the underlying hosting/CDN may process technical request data and that this does not assert all platform analytics are stopped. Do not run migrations or seed the shared development/production database for this static tranche.

## Implementation approach and project structure

Use Astro as the primary framework, React only for a small hydrated mobile navigation if necessary, TypeScript throughout, Tailwind CSS v4 through the Vite plugin, and Astro Content Collections with Zod for editorial content. Build statically to `dist/` using the pinned pnpm lockfile. The production contract is the static `build` domain; no container, database or email provider is needed for this tranche. Preserve a straightforward route to add the server adapter later rather than coupling public pages to an unavailable backend.

- `src/pages/` — homepage, content indexes, static content routes, basic policy pages, 404, sitemap and robots handlers.
- `src/layouts/` — shared page shell, metadata, navigation and editorial presentation.
- `src/components/astro/` — brand mark, header/footer, breadcrumbs, area/guide cards and notice/CTA sections.
- `src/components/react/` — only purposeful interactive components required by the live first tranche, principally accessible mobile navigation.
- `src/content/` and `src/content.config.ts` — the existing eight areas, buyer guides, market articles and FAQ/development collections with validated schemas.
- `src/data/` — area descriptors, navigation and non-public Phase 2 sample models; no sample data is rendered on the public first tranche.
- `public/` — generated route manifest, robots and favicon; responsive, correctly licensed Gibraltar imagery.
- `README.md`, `TODO.md` and `ASSET_CREDITS.md` — local setup, publication facts, staged launch limits and asset attribution.

Do not load MySQL, Resend, GA4, Clarity or Plausible in Phase 1. Do not make a network request to a data service at build time. The static build must not depend on protected secrets. Keep any unused Phase 2 code out of the live route graph and remove unused dependencies or prototype files when they cause type or build errors.

## Search, listings and non-fabrication policy

The public property-for-sale route is a useful editorial landing page explaining the listing verification policy and that no verified listings are currently available. Do not render an empty “search result count” or put fictional examples into public results. The original property model, search, detail, map/list switch, alerts, enquiries, saved searches, calculators, CRM persistence and email workflow remain Phase 2 requirements in `TODO.md`.

The tracker and market update publish their evidence status and proposed methodology only. They must not render a dummy chart, fabricated price range, sale count, rental yield or performance claim. Keep the market CSV endpoint absent until a genuine documented dataset is available.

## SEO, accessibility and performance

Every live indexable route must render meaningful initial HTML, a unique title and meta description, one H1, sensible heading order, descriptive image alternatives, breadcrumbs on nested pages, internal links and canonical/OG/Twitter metadata based on the explicitly configured public origin. Until a verified public domain is attached, do not emit a misleading canonical that asserts the user's custom domain is live. Generate the Astro sitemap index at `/sitemap-index.xml`, declare it in `robots.txt`, retain `/sitemap.xml` as a redirect alias, and keep `public/manus-routes.json` synchronized with real page routes. Exclude sample records and utility states from the sitemap. Keep the 404 a true 404 page.

Use semantic landmarks, keyboard-operable navigation, visible focus and sufficient contrast; honor reduced-motion preferences. Compress the accurate Gibraltar panorama and use responsive image sizes. Lazy-load below-the-fold imagery; avoid blocking fonts and third-party scripts. The public site should remain usable with JavaScript unavailable apart from optional mobile navigation.

## Design direction

### Design movement

Mediterranean modernism through an independent property journal: contemporary Riviera clarity with restrained British editorial structure.

### Core principles

1. Local specificity before portal conventions: lead with areas, buyer decisions and source context.
2. Calm hierarchy: a few deliberate calls to action, generous whitespace and clear facts.
3. Trust through evidence: cite regulated facts and disclose what is not yet verified.
4. Useful interaction: concise navigation and straightforward next steps, with no fake scarcity.

### Color philosophy

Warm ivory and pale limestone make long-form guidance inviting; ink navy and charcoal provide confidence and readable contrast. Sand tones reference Gibraltar's stone and waterfront without becoming decorative. A restrained Mediterranean blue owns actions and selection; terracotta is a secondary accent, never an alarm color.

### Layout paradigm

Use an editorial asymmetrical composition rather than a generic portal grid: a split image-and-copy hero, broad horizontal area/story rails, offset content columns and generous full-width photography. On phones, collapse into a clear reading order and keep navigation unobtrusive.

### Signature elements

- A fine contour/shoreline motif inspired by a restrained map mark, used as a section rule and brand icon.
- Small uppercase editorial chapter labels for guides, areas and market updates.
- Deep-blue keylines and compact fact chips that make the page scannable without classified-ad clutter.

### Interaction philosophy

Interactions should feel immediate and informative. Navigation and all live controls remain keyboard usable; links explain where they go. Avoid surprise overlays, disabled fake forms and motion that delays the content.

### Animation

Use short 160–220 ms transitions for focus and simple hover states. Do not use looping decoration, parallax or delayed hero reveals. Honor `prefers-reduced-motion` and keep the initial layout stable.

### Typography system

Bundle Cormorant Garamond for display headings and Manrope for body/interface text, with Georgia/system-serif and system-sans fallbacks. Use a compact responsive scale and comfortable line lengths; do not block rendering on remote font services.

### Brand essence

An independent Gibraltar property guide for people making a considered move — **locally informed, composed, practical**.

### Brand voice

Headlines are direct and specific; calls to action explain the next step; microcopy states what is and is not available. Examples: “Start with the area. Then find the right home.” “A clearer view of property in Gibraltar.”

### Wordmark and logo

Create a custom G/F monogram as a simple shoreline/arched-window mark with a fine Rock-inspired contour, paired with a carefully tracked two-line “GIBRALTAR / FOR SALE” wordmark. Use a project-owned SVG, not a default-font brand name.

### Signature brand color

Mediterranean deep blue `#1F748A`, used with restraint for primary actions, selected states and the brand mark.

## Release workflow

1. Preserve the full user requirements in `TODO.md`; identify this tranche and mark out-of-scope functionality as deferred.
2. Reuse the existing authored research and licensed imagery. Build the static pages and keep fictional listings and placeholder agents out of the live page graph.
3. Add the complete page route manifest before the first development-server start; verify it returns JSON over HTTP.
4. Run host-managed TypeScript diagnostics and the Astro check/build; correct concrete defects in the live routes.
5. Configure the actual static publish command and `dist` output; do not enable automatic publication.
6. Fetch and integrate the current canonical `origin/master`, push the intended first-release commit, and verify the GitHub commit and Netlify deploy.
7. Use one explicit publication for this user-requested launch. Report the generated public URL only after the publication job confirms success; clearly note that the custom domain and lead/alert systems remain deferred.


## Follow-up visual and editorial refresh

The owner requested more upmarket photography and original visual/content assets. Preserve the existing quiet Mediterranean-modernist system; do not replace the design with a generic luxury theme. Replace repeated byte-identical photos used under the area and journal image paths with distinct, subject-appropriate assets. Use accurately sourced Gibraltar location photography only for the place it genuinely depicts, and record creator, source page, license and image edits in `ASSET_CREDITS.md`.

Create at least three original, high-end editorial scenes in a consistent natural-light palette of limestone, warm wood, muted olive and Mediterranean blue. These are visual concepts, not real properties: use them with a visible note that they are illustrative and not listings; never attach them to a sample address, named development, exact Gibraltar view or price. Keep licensed Unsplash imagery within its terms and avoid watermarked stock.

Add one original, practical journal feature about making a considered Gibraltar property choice. Focus on useful viewing and decision questions, not invented market forecasts or professional/legal advice. Preserve existing factual articles except for image references and accurate alt/caption metadata; their date-sensitive claims still need separate source review. Optimize photos into repository-local responsive assets so Netlify builds remain self-contained.

## 10 November 2026 launch-fix continuation

The owner asked to continue the urgent website fixes and push them to the existing GitHub repository for its connected Netlify deployment. The review was performed against the live site and current `master` branch. Do not use the personal access token pasted into chat; recommend that it be revoked, and use only the already-authorized GitHub account session.

The immediate work removes forms that previously posted to a route with no handler, removes unsupported waitlist/unsubscribe promises, updates Contact/Privacy/Cookie/Terms disclosures, aligns canonical, breadcrumb, sitemap and robots origins with the currently serving Netlify hostname, and adds `/sitemap.xml` as a redirect alias. The custom `.com` hostname was unresolved on the review date and remains an owner prerequisite; do not use it as canonical until it is verified in DNS and Netlify.

Restore a readable 16px text base and stronger muted-text contrast, keep the small-screen navigation keyboard-operable through native HTML disclosure, and visibly credit location photos and label AI concepts as non-listing artwork. Preserve original high-risk 2027 market, tax and mortgage claims for a separate evidence-led review; do not say the urgent fix set has cleared their factual or legal accuracy.

The remote's current branch is `master`, not `main`. Before pushing, fetch and integrate any remote updates, install from the committed lockfile, run TypeScript checks and the Astro build, and audit route/image references. Push a normal fast-forward commit to `origin/master`; verify GitHub and Netlify results. Do not force-push or change global Git configuration.
