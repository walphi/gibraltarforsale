# Gibraltar For Sale — prioritized launch review

**Review date:** 9 November 2026; quick fixes continued 10 November 2026.
**Reviewed public site:** `https://gibraltarforsale.netlify.app/`
**Reviewed source:** `https://github.com/walphi/gibraltarforsale`, base commit `465ab47944b3ae4660dba73a3d91373e8f53f0a6`

## Urgent order

### P0 — Stop collecting data through dead forms

The live contact, property and rental pages rendered POST forms to `/contact/`, but the static repository had no Netlify Forms declaration, function or POST handler. Those forms also lacked explicit consent while Privacy claimed waitlist collection, processing, email updates and unsubscribe. The fix in this tranche removes those forms and waitlist promises. The pages now say enquiry services are not open and do not collect names, emails or preferences.

Do not add a replacement form until a processing service is configured, operator/controller and contact details are published, consent text and data use are reviewed, retention/deletion procedures are agreed, and notification delivery is tested.

### P0 — Fact-check time-sensitive tax, mortgage and investment claims

Several public Journal drafts use dates in 2027, which are future-dated relative to this review. The examined investment/trends and mortgage articles make exact yield, price, lender and rate claims; their references point broadly to institutions rather than underlying datasets or current product rate sheets. A market-outlook piece contains forward-looking claims with similarly broad references. Tax and rental pieces also need current-source review.

This remains open. Review each affected article against dated Gibraltar Government, Financial Services Commission, lender/product and underlying market evidence; remove unsupported numbers and projections; correct publication/review dates only after an actual review. Obtain local professional review for tax, immigration and mortgage wording. A disclaimer is not a substitute for evidence.

### P1 — Repair production origin, canonicals and sitemap

The `.com` domain did not resolve during the 9 November live review. `robots.txt` pointed at `.com/sitemap.xml` (404 on the deployed Netlify host); the generated Netlify sitemap index was `/sitemap-index.xml`, whose child URLs used the unresolved `.com` hostname.

This tranche now pins canonical, breadcrumb structured data, Astro sitemap and robots sitemap references to the currently live Netlify hostname and adds a 301 redirect from `/sitemap.xml` to `/sitemap-index.xml`. The custom domain still requires owner action: verify DNS and Netlify domain attachment, change the origin consistently, republish, and check every canonical and sitemap child URL.

### P1 — Improve legibility and mobile navigation

The repository set the root font size to 12px, making common Tailwind small-text classes about 10.5px and 9px. The muted text token measured 4.09:1 on the off-white background, below WCAG AA's 4.5:1 normal-text threshold. The prior mobile menu exposed stale `aria-expanded=false` state.

This tranche restores a 16px root scale, darkens muted text, uses a native keyboard-operable `<details>/<summary>` menu and removes the obsolete interactive menu from the active header. This is a code-level correction, not a full WCAG audit; actual keyboard/device review remains worthwhile.

### P1 — Replace repeated and unclear imagery

The original area and journal image paths included byte-identical files and lacked consistent useful alt text and attribution. This tranche adds eight distinct, source-verified Gibraltar location photos to area guides, original generated editorial concepts, responsive WebP files, descriptive alt text and visible source/license or AI-concept disclosures. None is presented as a listing or exact property view.

## Changes addressed in this quick-fix tranche

- Removed nonfunctional property, rental and contact lead forms and all visible waitlist/unsubscribe promises in those pages.
- Rewrote privacy, cookie, terms, About and contact-status copy to describe what is and is not active; left Netlify dashboard analytics as an explicit owner verification item.
- Corrected canonical and sitemap hostnames to the live Netlify hostname and added `/sitemap.xml` redirect compatibility.
- Raised base type size, improved muted text contrast and replaced the small-screen menu with native disclosure navigation.
- Added eight licensed Gibraltar location photos, five original AI concept images and responsive variants, plus photo credits and visible context notes.
- Added the original buyer-planning journal feature “A More Considered Property Search in Gibraltar.”

## Owner actions still required

1. Supply the legal operator name and monitored contact/privacy address; no address or credentials were invented.
2. Verify and attach `gibraltarforsale.com` in DNS/Netlify. Until then the site uses the current `.netlify.app` origin.
3. Check whether Netlify Analytics is enabled in the account and align the Privacy/Cookie notices with that real setting.
4. Provide current, agent-authorized listings and a reliable data source before activating search or publishing market measurements.
5. Arrange qualified local review of tax, immigration, mortgage, rental and investment claims, especially the dated 2027 Journal articles.
6. Select a lead/CRM/email provider and approve consent, security, retention and delivery workflows before adding any enquiry form.

The personal access token pasted in chat should be revoked and replaced. It was not used. Repository access for this work used the already-authorized GitHub account session.
