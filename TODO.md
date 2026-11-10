# Build outcomes and acceptance criteria

## Current release scope — first public tranche
- Publish the first content-focused tranche now using the project’s explicit Publish flow; automatic publishing remains off.
- First tranche includes `/`, `/property-for-sale/` (a truthful page stating no verified properties are live), `/areas/` and its eight researched area pages, `/guides/` and the researched guides, `/market/`, `/market/property-price-tracker/`, `/market/quarterly-market-update/`, `/market/methodology/`, `/journal/` and its reviewed articles, `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/cookies/`, the Astro sitemap index at `/sitemap-index.xml` with `/sitemap.xml` redirect alias, `/robots.txt` and a real 404.
- Do not expose the 30 fictional sample listings, sample prices, fictional agents or fictional developments as live homes, providers or market evidence. Exclude them from homepage featured cards, property search/results, sitemap, indexing and route links.
- The first release is a statically generated content site. It has no first-party form, account, saved-search, email, alert or application-analytics collection. Project-level analytics and badge scripts are disabled; the privacy/cookie notices must still disclose possible technical request processing and other platform/CDN analytics. The contact and privacy pages must say that contact and lead capture are not yet open; do not invite submission to a non-functioning form or fabricate an operator address.
- Use the platform-generated public URL unless a custom domain is explicitly connected. Do not claim that `gibraltarforsale.com` is attached or operational.
- Preserve all research citations, reference links and qualifications. Do not show sample charts or invented market values. This follow-up specifically authorizes an image and editorial-content refresh, including original AI-generated illustrative images and carefully licensed photography.

## 1. Brand system, responsive shell and accessible navigation — [ ]
- Brand name is Gibraltar For Sale and its positioning is “The independent guide to buying property in Gibraltar — search curated listings, understand areas, residency, costs and investment potential, then connect with vetted local agents.”
- Tone is knowledgeable, calm, independent, premium, practical and locally credible. Visual style is clean editorial real estate design, with generous white space, strong photography, clear typography, deep navy or charcoal, warm off-white, muted stone/sand and a refined Mediterranean blue or terracotta accent.
- Avoid cluttered classified-ad styling, aggressive sales language, fake urgency, generic stock imagery and low-quality AI-looking visuals.
- Mobile-first design is mandatory. Meet WCAG 2.2 AA with visible focus states, semantic HTML, alt text, keyboard navigation, sufficient contrast and accessible forms.
- Provide reusable Header.astro, Footer.astro, MobileNav.tsx, Breadcrumb.astro, CtaBanner.astro and TrustSignals.astro components. Use React only where interactivity is necessary.

## 2. Information architecture and indexable public pages — [ ]
- Implement `/`, `/property-for-sale/`, `/apartments-for-sale/`, `/villas-for-sale/`, `/houses-for-sale/`, `/new-developments/`, `/rent/`, `/areas/`, `/guides/`, `/market/`, `/market/property-price-tracker/`, `/market/quarterly-market-update/`, `/market/methodology/`, `/guides/best-areas-to-buy-property-in-gibraltar/`, `/developments/`, `/agents/`, `/about/`, `/contact/`, `/privacy/`, `/terms/`, `/cookies/`, `/sitemap.xml` and `/robots.txt`.
- Implement `/areas/south-district/`, `/areas/ocean-village/`, `/areas/queensway-quay/`, `/areas/upper-town/`, `/areas/town-area/`, `/areas/westside/`, `/areas/eastside/` and `/areas/europa-point/`.
- Implement `/guides/buying-property-in-gibraltar/`, `/guides/gibraltar-property-taxes-and-costs/`, `/guides/gibraltar-residency-and-property/`, `/guides/mortgages-in-gibraltar/`, `/guides/renting-vs-buying-in-gibraltar/`, `/guides/gibraltar-property-viewing-checklist/` and `/guides/gibraltar-new-build-buying-guide/`.
- Use clean, descriptive, lowercase URLs with hyphens. Avoid unnecessary URL parameters in canonical URLs. No indexable empty search-result pages; apply noindex to filtered search URLs, pagination duplicates, staging pages and internal utility pages. Provide a clean 404 page with helpful links and an actual 404 status for missing records.
- Phase 1 publishes only the routes explicitly listed in “Current release scope”; all other routes above remain Phase 2 outcomes. The current listing landing page must state that there are no verified live properties, not present fictional records as empty search results.

## 3. Property types, data model, samples and content components — [Deferred: Phase 2]
- Property model fields include `id`, `slug`, `title`, `description`, status (`available`, `under_offer`, `sold`, `let`, `withdrawn`), listingType (`sale`, `rent`), propertyType (`apartment`, `house`, `villa`, `penthouse`, `studio`, `new-development`), `price`, optional `priceQualifier`, currency `GBP`, `bedrooms`, `bathrooms`, optional `sizeSqM` and `sizeSqFt`, `area`, optional `development`, `addressApproximate`, `latitude`, `longitude`, `images`, `features`, `agentId`, `agentName`, `agentUrl`, `sourceUrl`, `publishedAt`, `updatedAt`, `availableFrom`, `furnished`, `parking`, `seaView` and `newBuild`.
- Create separate Agent and Development models. Use Astro Content Collections for guides, area pages, market updates, FAQs and development profiles, with Zod schemas and TypeScript types.
- Create 30 realistic but clearly labelled sample listings using placeholder images and fictional agent contact details: 12 apartments, 6 houses, 4 villas, 4 new-development listings and 4 rental listings. Mark them `SAMPLE DATA — REPLACE BEFORE LAUNCH` in code and visible listing/admin-facing surfaces. Do not publish invented prices, agent names or contact details as if they were real.
- Provide reusable PropertyCard.tsx, PropertyGrid.tsx, AreaCard.tsx, GuideCard.tsx, FaqAccordion.tsx, AgentCard.tsx, DevelopmentCard.tsx, SimilarProperties.tsx and NewsletterSignup.tsx components.

## 4. Homepage and search experience — [Deferred: Phase 2]
- Homepage H1 is “Gibraltar Property for Sale”; supporting line is “Search homes, apartments, villas and new developments across Gibraltar — with local guides, price insights and trusted agent connections.”
- Search has buy/rent toggle, location or area, property type, bedrooms, minimum and maximum price, and “Search Gibraltar property” CTA. Include “Create property alerts” as a secondary CTA. Trust indicators cover listing count, areas covered, agent partners and latest market-update date without presenting invented values as real.
- Homepage includes featured properties (6–12), property-type links (apartments, houses, villas, new developments, rentals), all eight areas, independent guidance/local insight/curated search/transparent agent connections/residency resources, market snapshot, popular guides, developments and “Get new Gibraltar property alerts” email capture.
- Search filters include buy/rent, area, type, price, bedrooms, bathrooms, minimum size, parking, furnished/unfurnished, sea view, new build and pet-friendly rentals; sort newest, price low-to-high, price high-to-low and largest size. Results show image, price, location, bedrooms, bathrooms, size and key features. Include map/list toggle, save search, create alert, useful empty state, accessible pagination (or infinite scroll with fallback) and shareable URL state.
- Build PropertyFilters.tsx and MapView.tsx. Core search content and initial results remain server-rendered where possible. Search results with no matching properties are not indexable.

## 5. Listing detail and development templates — [Deferred: Phase 2]
- Listing page includes large image gallery with lightbox; price, property type, beds, baths, size, floor, parking, furnished status, location, development and area; full description; key features and facts table; map with approximate location; similar properties; area guide link; mortgage calculator; enquiry form; request-viewing CTA; save and share; agent attribution and original source link where applicable; and clear partner-agent disclosure.
- Include useful, non-duplicated sections for “What to check before viewing”, “Nearby amenities”, “Commute and access”, “Similar properties”, “Area price context” and “Questions to ask the agent”. Avoid doorway pages: each listing must have meaningful, non-duplicated content.
- New/recent developments show developer, area, completion status, unit types, price from, key features and enquiry CTA. Do not invent availability or price.
- Implement ImageGallery.tsx, MortgageCalculator.tsx and PropertyAlertModal.tsx.

## 6. Original area guides — [ ]
- Build each of the eight area pages with 800–1,200 words of original, useful content; do not make boilerplate pages with only changed place names.
- Each includes H1 `[Area] Property for Sale`, area overview, property types, typical price bands only when supported, local character, transport/commute, relevant schools/amenities/beaches/marinas, pros and cons, rental yield context only when data exists, current listings, nearby areas, FAQs and enquiry CTA.
- Include unique and responsible local context. Do not fabricate experience, credentials, yields, availability, prices or agent claims.
- On the first tranche, area pages link to the no-verified-listings state instead of fictional inventory or dummy enquiry forms.

## 7. Buyer guides and market content — [ ]
- Create cornerstone content for Buying Property in Gibraltar; Gibraltar Property Taxes and Costs; Gibraltar Residency and Property; Mortgages in Gibraltar; Renting vs Buying in Gibraltar; Gibraltar Property Viewing Checklist; Gibraltar New-Build Buying Guide; Gibraltar Property Price Tracker; Gibraltar Property Market Update; and Best Areas to Buy Property in Gibraltar.
- Guide template includes title, publication/updated date, truthful author/reviewer field, table of contents, summary, Gibraltar-specific practical information, sources/disclaimers, internal listing/area links, FAQs, useful download where relevant and enquiry CTA.
- Use plain English. Explain local terminology including leasehold/freehold where applicable, service charges, community fees, stamp duty, notary, conveyancing and residency. Include practical costs, timelines, risks and buyer questions. Cite official or authoritative sources for legal, tax and immigration claims. Clearly state content is general information, not legal, tax or financial advice. Avoid duplicate content and mass-produced generic copy.
- Property Price Tracker includes monthly/quarterly update framework, median asking price by area, price per square metre, property-type breakdown, new listings, price reductions, average time on market, rental yields only where reliable, explanatory commentary, charts, downloadable CSV and methodology for sources, limitations and frequency. Until genuine data is available, clearly show that measurements are unavailable rather than inventing statistics.
- Phase 1 may publish the researched guides, tracker-status page and methodology only; it must not render invented market numbers, dummy charts or fake author credentials.

## 8. Lead capture, alerts, persistence and privacy — [Deferred: Phase 2]
- Property enquiry fields: name, email, phone number, message, property reference, preferred viewing date, budget, buying or renting, consent checkbox.
- Property alert fields: email, buying or renting, areas of interest, property type, bedrooms, budget, frequency (instant, daily or weekly).
- Agent/partner enquiry fields: agency name, contact name, email, phone, number of active listings, services required, message.
- Mortgage or relocation enquiry fields: name, email, phone, property budget, residency status, employment status, message, consent.
- Forms use server-side validation, honeypot and basic spam protection, store consent and timestamp, send confirmation email to the user and notification to site owner/relevant partner when email service is configured, and never expose API keys in client-side code. Explain when outbound email is not configured; do not claim a message was sent if it failed.
- Store enquiries, saved searches, property alerts and basic analytics events durably using the managed database. Include a clear privacy policy and data-processing notice. GDPR-aware alert copy explains what the user receives and obtains consent.
- Provide LeadForm.tsx and the required alert/signup interactions. Phase 1 must not expose inactive forms or accept personal details.

## 9. Metadata, structured data and analytics integrations — [ ]
- Every indexable page has a unique compelling title (under 60 characters where possible), unique meta description (under 155 characters), one clear H1, logical H2/H3, original intro copy (250–400 words for major landing pages), descriptive image alt text, internal links, breadcrumb navigation, canonical URL, Open Graph/Twitter metadata and JSON-LD structured data.
- Add WebSite and Organization sitewide; BreadcrumbList on nested pages; Article/BlogPosting for guides and market updates; FAQPage only where visible FAQs answer genuine questions; accurate property schema for genuine individual listings; Offer, Place, ImageObject, GeoCoordinates and AggregateRating only when their facts exist; Dataset only when the tracker contains real reusable market data. Do not fabricate reviews, ratings, availability, prices or agent claims.
- Generate an XML sitemap and robots.txt; include safe canonicals, redirect plan for future URL changes and 404 monitoring. Do not index filtered/duplicate states or sample listing detail pages.
- Add integration points for Google Search Console verification; GA4 events for property enquiry submitted, property alert created, phone click, email click, WhatsApp click, agent profile click, search performed, listing viewed and guide download; Microsoft Clarity or Hotjar; and Plausible. No third-party analytics run in Phase 1 without consent and supplied identifiers.

## 10. Premium visual refresh and original editorial feature — [x]
- Replace the byte-identical placeholder images currently reused under the eight area-image and twelve journal-image filenames with at least 12 distinct, relevant visual assets. Reuse an image only for closely related subject matter; do not imply any editorial photograph is a live property listing.
- Add at least three original, upmarket Mediterranean/luxury editorial images. They must not depict or be presented as a specific real Gibraltar property, named development, or verified view. Disclose conceptual scenes as illustrative and not available listings on the central `/image-credits/` page, not in captions beside the images.
- Select Gibraltar landmark/location photographs only from their actual source pages; preserve the creator, license, source URL and any modifications in `ASSET_CREDITS.md`. Use descriptive alt text and do not use watermarked, rights-unclear or low-resolution stock images.
- Add one original, useful, premium-voiced journal feature about making a considered property choice in Gibraltar. Keep it practical and non-duplicative, cite or link any factual local/legal claims, avoid unsupported prices/yields/market forecasts, and state that illustrative imagery is not a listing.
- Keep all new assets optimized, responsive and mobile-friendly; preserve the editorial ivory/navy/stone/Mediterranean-blue visual system and readable type.

## 11. Performance, setup and launch handoff — [ ]
- Performance targets: Lighthouse mobile 90+, LCP under 2.5 seconds, CLS under 0.1 and INP under 200 ms. Use responsive modern images with appropriate srcset, lazy-load below-the-fold images, minimize client JavaScript, preload critical fonts, use system fallbacks, avoid render-blocking third-party scripts and optimize/compress imagery.
- Use Astro as the primary framework; React only for interactive components; Tailwind CSS v4 via its Vite plugin, not deprecated `@astrojs/tailwind`; TypeScript throughout; Zod validation; Astro Content Collections; deployment-compatible server rendering; no client-side rendering for core SEO content. Phase 1 uses static generation; server rendering is deferred until data/forms need it.
- README explains setup, environment variables, deployment, content editing and how to replace sample data. Include a launch checklist and recommended next-phase roadmap.
- Launch checklist covers replacing sample data; functioning form persistence and email; image alt text; unique metadata; submitting sitemap to Search Console; robots policy; mobile nav/forms; alerts; cookie consent; accurate privacy/terms/cookie policy; accurate company/contact information; analytics events; mobile Core Web Vitals; structured data validation; and 301 redirects for removed/renamed URLs.
- Do not copy competitor content, expose secrets, invent market data, or publish sample listings as real. Phase 1 is authorized for one public publication on the platform-generated URL; a custom domain, real listings, forms and email remain launch dependencies.


## 12. Hero image, desktop scale and image-caption treatment — [x]
- Use the existing Gibraltar Bay image from the previous hero design, with its full natural landscape framing rather than a tight desktop crop.
- Reduce the desktop typography and visual scale so the site does not appear zoomed in at desktop sizes; preserve the current mobile layout and readability.
- Remove visible captions, credits, notes and image-specific titles around splash photographs and editorial artwork. Keep descriptive alt text for accessibility.
- Preserve required creator, source, license and AI-concept disclosures on a central Image Credits page linked in the footer, not adjacent to the images. Add the route to the route manifest and generated sitemap.
