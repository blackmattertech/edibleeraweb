# 🌿 Edible Era — SEO Master Instructions for Cursor

> **CURSOR DIRECTIVE:** This file is the single source of truth for all SEO decisions on this project.
> You MUST read and apply every rule in this document before creating any page, route, component,
> layout, sitemap, robots file, metadata, heading, link, or image. No page, section, or route
> may be shipped without satisfying every applicable rule below. When in doubt, refer back here first.

---

## 0. Project Context

**Client:** Edible Era Oil & Fats
**Type:** B2B Strategy Consulting & Market Intelligence firm
**Website:** [www.edibleera.in](https://www.edibleera.in)
**Email:** aasif@edibleera.in
**Geography:** India + Nepal (primary); South Asia (secondary)
**Sector:** Edible Oils & Fats — Palm Oil, Soybean Oil, Mustard Oil, Sunflower Oil, Rice Bran Oil
**Target Audience:** Refiners, Producers, Traders, Institutional Buyers, Policy Teams, Investors

---

## 1. Keyword Strategy

### 1.1 Tier 1 — Primary Brand Keywords
> These appear on the homepage, title tags, and primary OG metadata.

| Keyword | Intent | Volume Signal |
|---|---|---|
| edible oil market intelligence India | Informational / Commercial | High |
| edible oil consulting firm India | Commercial | High |
| edible fats industry analysis India Nepal | Informational | Medium-High |
| edible oil sector strategy consulting | Commercial | Medium |
| edible oil market research South Asia | Informational | Medium |

### 1.2 Tier 2 — Commodity Keywords
> These anchor individual service pages and blog/insight articles.

| Keyword | Target Page |
|---|---|
| palm oil market India | /insights/palm-oil-india |
| soybean oil price trends India | /insights/soybean-oil-india |
| mustard oil industry India 2025 | /insights/mustard-oil-india |
| sunflower oil import India | /insights/sunflower-oil-india |
| rice bran oil market India | /insights/rice-bran-oil-india |
| groundnut oil market analysis | /insights/groundnut-oil-india |
| vanaspati and hydrogenated fats India | /insights/vanaspati-india |
| edible oil refining margins India | /insights/refining-margins |
| palm oil import Indonesia Malaysia India | /insights/palm-oil-imports |
| edible oil price volatility India | /insights/price-volatility |

### 1.3 Tier 3 — Long-Tail + High-Intent Keywords
> These power blog posts, FAQ schema, and deep insight pages.

```
edible oil market forecast India 2025 2026
India edible oil import duty analysis
NMEO oilseeds mission India impact
edible oil refinery investment India
palm olein vs RBD palm oil India
soybean oil vs sunflower oil India market share
Nepal edible oil import demand
edible oil policy India government subsidy
edible oil consumption per capita India
vanaspati market decline India trends
specialty fats industry India
interesterified fats India food industry
oleochemicals market India
edible oil supply chain India
India oilseed production outlook
cottonseed oil market India
rice bran oil demand India food processing
edible oil packaging trends India FMCG
HoReCa edible oil demand India
India edible oil self-sufficiency 2030
```

### 1.4 Competitor Keyword Gaps to Target
> Based on competitive analysis of imarcgroup.com, mordorintelligence.com, fortunebusinessinsights.com

These high-value informational terms are underserved by competitors for India/Nepal-specific angles:

```
edible oil market Nepal 2025
Nepal palm oil import statistics
mustard oil hill district Nepal demand
India Nepal edible oil trade
edible oil consulting South Asia
fats and oils regulatory India FSSAI
edible oil blending regulations India
trans fat ban India impact on vanaspati
India edible oil sector investor report
edible oil company valuation India
```

---

## 2. Site Architecture & URL Structure

> Every route listed below must be created. Every route must have complete metadata.
> No route may go live without being present in the sitemap.

### 2.1 Required Routes

```
/                                       ← Homepage
/about                                  ← About Edible Era
/services                               ← Services index
/services/market-intelligence           ← Market intelligence service
/services/strategy-consulting           ← Strategy consulting service
/services/investment-advisory           ← Investment advisory service
/services/policy-analysis               ← Policy analysis service
/insights                               ← Insights index / blog listing
/insights/[slug]                        ← Individual insight articles (dynamic)
/insights/palm-oil-india                ← Pillar page
/insights/soybean-oil-india             ← Pillar page
/insights/mustard-oil-india             ← Pillar page
/insights/sunflower-oil-india           ← Pillar page
/insights/rice-bran-oil-india           ← Pillar page
/insights/refining-margins              ← Pillar page
/insights/price-volatility              ← Pillar page
/markets                                ← Markets index
/markets/india                          ← India market overview
/markets/nepal                          ← Nepal market overview
/reports                                ← Reports listing
/reports/[slug]                         ← Individual report pages (dynamic)
/contact                                ← Contact page
```

### 2.2 Required Static Files

```
/robots.txt                             ← See Section 5
/sitemap.xml                            ← See Section 5
/favicon.ico
/apple-touch-icon.png
/og/default.png                         ← OG image 1200×630
/og/insights.png                        ← OG image 1200×630
/og/services.png                        ← OG image 1200×630
/og/markets.png                         ← OG image 1200×630
/og/reports.png                         ← OG image 1200×630
```

---

## 3. Metadata Rules — Apply to Every Page

### 3.1 Required Metadata Per Page

Every page MUST declare all of the following — no exceptions, not even internal pages:

- `<title>` tag
- `<meta name="description">`
- `<link rel="canonical">`
- `<meta property="og:title">`
- `<meta property="og:description">`
- `<meta property="og:image">` (1200×630 PNG)
- `<meta property="og:url">`
- `<meta property="og:type">`
- `<meta name="twitter:card">`
- `<meta name="twitter:title">`
- `<meta name="twitter:description">`
- `<meta name="twitter:image">`
- `<html lang="en">` on the root HTML element

### 3.2 Title Tag Formula

```
[Primary Keyword] — [Secondary Qualifier] | Edible Era
```

**Rules:**
- Max 60 characters
- Primary keyword FIRST — never start with the brand name
- Always end with `| Edible Era`
- Use em-dash (—) not hyphen (-) as separator
- One clear topic per title — no keyword stuffing

**Correct examples:**
```
Edible Oil Market Intelligence India & Nepal | Edible Era
Palm Oil Import Trends India 2025 | Edible Era
Mustard Oil Market Analysis India Nepal | Edible Era
Soybean Oil Price Forecast — India & Nepal | Edible Era
Edible Oil Consulting Services | Edible Era
```

**Wrong — never do this:**
```
Edible Era - Home                    ← brand first, no keyword
Best Edible Oil Company India        ← wrong positioning
Edible Era | Palm Oil | Soybean Oil  ← keyword stuffing
```

### 3.3 Meta Description Formula

- 140–160 characters
- Include primary keyword naturally in the first 100 characters
- End with a value proposition or action signal
- Must be unique per page — never duplicate

**Template:**
```
[Primary keyword context] — [specific value Edible Era provides]. [Geography/scope qualifier].
```

**Examples:**
```
India's palm oil market analysis: import volumes, price trends, and refinery dynamics.
Strategic intelligence for producers, refiners, and investors. Updated quarterly.

Edible oil consulting firm specialising in India and Nepal market strategy. Deep sector
data, policy analysis, and investment advisory for the oils and fats industry.
Contact: aasif@edibleera.in
```

### 3.4 Canonical URL Rules

- Every page MUST declare its canonical URL
- Use absolute URLs: `https://www.edibleera.in/insights/palm-oil-india`
- **No trailing slashes** — always strip them
- Lowercase only — redirect uppercase URLs via server rules
- Dynamic pages: canonical must point to the clean URL, never a `?query=` variant

---

## 4. On-Page SEO Rules — Every Page, Every Section

### 4.1 Heading Hierarchy (Non-Negotiable)

```
H1  → One per page. Contains primary keyword. Never purely decorative.
H2  → Section topics. 2–5 per page. Each contains a secondary keyword.
H3  → Subsections under H2. Supporting detail.
H4  → Only for deeply nested content (tables, glossaries).
```

**Rules:**
- H1 must be the first semantic heading encountered by a crawler
- Never skip levels (H1 → H3 without H2 is forbidden)
- Never use headings only for visual styling — use CSS classes for that
- Hero taglines that are not keyword-rich must use `<p>` or `<span>`, not `<h1>`
- The H1 text and the `<title>` tag should be semantically aligned but NOT identical word-for-word

**Example:**
```
Title tag: "Palm Oil Market India — Import Trends & Analysis | Edible Era"
H1 on page: "India Palm Oil Market: Import Volumes, Refining Margins & 2025 Outlook"
```

### 4.2 Image SEO Rules

Every image MUST have:

```html
<img
  src="/images/palm-oil-refinery-india.webp"
  alt="Palm oil refinery plant in Kandla Gujarat India — edible oil processing"
  title="Palm oil refinery — India edible oil sector"
  width="1200"
  height="675"
  loading="lazy"
/>
```

**Rules:**
- `alt` text: descriptive, contains keyword naturally — never `alt="image1"` or missing alt on informational images
- Decorative images (pure visual design): `alt=""` (empty string, not missing)
- File names: hyphens only, include keywords: `palm-oil-price-chart-india-2025.webp`
- Format: always WebP. Provide JPEG fallback inside `<picture>` if needed.
- Hero/above-fold images: add `loading="eager"` or preload them — do not lazy-load the first visible image
- All other images: `loading="lazy"`
- Never exceed 200KB for images above the fold

### 4.3 Internal Linking Rules

- Every page must link to at least 2 other internal pages contextually within body content
- Anchor text must be descriptive and keyword-rich
- Insights/articles must link back to at least one relevant Service page
- Service pages must link to at least 2 relevant Insights articles
- Homepage must link to all major sections: Services, Markets, Insights

**Correct anchor text:**
```
India edible oil market analysis
palm oil import trends in India
our edible oil consulting services
mustard oil price outlook India Nepal
```

**Never use these as sole anchor text:**
```
read more    ←  BAD
click here   ←  BAD
here         ←  BAD
this article ←  BAD
```

### 4.4 URL Rules

- Lowercase, hyphens only — no underscores, no camelCase, no spaces
- Max 4 levels deep: `/insights/palm-oil-india` ✓ — `/a/b/c/d/e` ✗
- No dates in URLs: `/insights/palm-oil-india` not `/insights/2025/01/palm-oil`
- No stop words where avoidable: no `the`, `and`, `of` unless core to keyword
- All URLs must be declared in `sitemap.xml` with correct priority and changefreq

---

## 5. Technical SEO Files

### 5.1 robots.txt

Create at the webroot as `robots.txt` (accessible at `https://www.edibleera.in/robots.txt`):

```
User-agent: *
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /drafts/
Disallow: /*?*
Disallow: /404
Disallow: /500

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

Sitemap: https://www.edibleera.in/sitemap.xml
```

### 5.2 sitemap.xml

Create at `/sitemap.xml`. Update `<lastmod>` dates whenever a page is meaningfully updated.

See `public/sitemap.xml` in this project for the live implementation.

> **Rule:** Every time a new page goes live, add it to `sitemap.xml` before or on the same day of publish.
> Dynamic insight/report pages must be added within 24 hours of publishing.

---

## 6. Structured Data (JSON-LD Schema)

> Inject JSON-LD via a `<script type="application/ld+json">` tag in the `<head>` of every page.
> Use the appropriate schema type per page — listed below.

### 6.1 Organization Schema — Every page (via shared header/layout)

See `src/config/site.ts` for the live Organization schema.

### 6.2 WebSite Schema — Homepage only

### 6.3 Article Schema — All /insights/[slug] pages

### 6.4 BreadcrumbList Schema — All non-homepage pages

### 6.5 FAQ Schema — Use on all pillar insight pages

---

## 7. Page-by-Page SEO Targets

> Apply these exact keyword targets when building each page.

### Homepage `/`
- **H1:** `Edible Oil Market Intelligence for India & Nepal`
- **Primary keyword:** edible oil market intelligence India
- **Secondary keywords:** edible oil consulting firm, edible fats strategy South Asia
- **Schema:** Organization + WebSite + BreadcrumbList

### `/about`
- **H1:** `About Edible Era — Edible Oil & Fats Sector Specialists`
- **Primary keyword:** edible oil consulting firm India
- **Secondary keywords:** oils and fats market intelligence South Asia
- **Schema:** Organization + BreadcrumbList

### `/services/market-intelligence`
- **H1:** `Edible Oil Market Intelligence Services — India & Nepal`
- **Primary keyword:** edible oil market intelligence India
- **Secondary keywords:** palm oil market analysis, soybean oil market data India
- **Schema:** BreadcrumbList

### `/services/strategy-consulting`
- **H1:** `Edible Oil Strategy Consulting — India & Nepal`
- **Primary keyword:** edible oil consulting firm India
- **Secondary keywords:** edible oil sector strategy, fats industry consulting South Asia
- **Schema:** BreadcrumbList

### `/services/investment-advisory`
- **H1:** `Edible Oil Investment Advisory — India & Nepal Market`
- **Primary keyword:** edible oil refinery investment India
- **Secondary keywords:** edible oil company valuation India, India edible oil sector investor report
- **Schema:** BreadcrumbList

### `/services/policy-analysis`
- **H1:** `Edible Oil Policy Analysis — FSSAI, Import Duty & NMEO`
- **Primary keyword:** edible oil policy India government
- **Secondary keywords:** NMEO oilseeds India, import duty edible oil India, FSSAI fats regulations
- **Schema:** BreadcrumbList

### `/markets/india`
- **H1:** `India Edible Oil Market — Overview, Data & Analysis`
- **Primary keyword:** India edible oil market
- **Secondary keywords:** India palm oil import, India oilseed production, NMEO oilseeds India
- **Schema:** Article + BreadcrumbList

### `/markets/nepal`
- **H1:** `Nepal Edible Oil Market — Import Trends & Demand Analysis`
- **Primary keyword:** Nepal edible oil market
- **Secondary keywords:** Nepal palm oil import, mustard oil Nepal demand, India Nepal edible oil trade
- **Schema:** Article + BreadcrumbList

### `/insights/palm-oil-india`
- **H1:** `India Palm Oil Market: Import Volumes, Pricing & 2025 Outlook`
- **Primary keyword:** palm oil market India
- **Secondary keywords:** palm oil import India, crude palm oil price, RBD palm olein India, palm oil import duty India
- **Schema:** Article + FAQ + BreadcrumbList

### `/insights/mustard-oil-india`
- **H1:** `Mustard Oil Industry India: Production, Demand & Price Trends`
- **Primary keyword:** mustard oil industry India
- **Secondary keywords:** sarson oil market India, mustard oil price India, mustard oil North India
- **Schema:** Article + FAQ + BreadcrumbList

### `/insights/soybean-oil-india`
- **H1:** `Soybean Oil Market India: Import Data, Prices & Demand Forecast`
- **Primary keyword:** soybean oil price trends India
- **Secondary keywords:** soya oil import India, soybean crushing India, degummed soybean oil
- **Schema:** Article + FAQ + BreadcrumbList

### `/insights/sunflower-oil-india`
- **H1:** `Sunflower Oil Market India: Import Dependency & Price Outlook`
- **Primary keyword:** sunflower oil import India
- **Secondary keywords:** sunflower oil price India, Ukraine sunflower oil India supply
- **Schema:** Article + FAQ + BreadcrumbList

### `/insights/rice-bran-oil-india`
- **H1:** `Rice Bran Oil Market India: Demand, Refining & Industry Trends`
- **Primary keyword:** rice bran oil market India
- **Secondary keywords:** rice bran oil food processing India, rice bran oil health India
- **Schema:** Article + FAQ + BreadcrumbList

### `/contact`
- **H1:** `Contact Edible Era — Edible Oil & Fats Market Intelligence`
- **Primary keyword:** edible oil consulting contact India
- **Include on page:** aasif@edibleera.in · www.edibleera.in
- **Schema:** Organization + BreadcrumbList

---

## 8. Content SEO Rules

### 8.1 Minimum Content Length

| Page Type | Minimum Word Count |
|---|---|
| Homepage | 800 words |
| Service pages | 600 words |
| Market overview pages | 1,200 words |
| Pillar insight pages | 1,800 words |
| Regular insight articles | 900 words |
| Contact page | 200 words |

### 8.2 Keyword Density Guardrails

- Primary keyword: appear in H1, within the first 100 words of body, and at least 2 more times naturally
- Secondary keywords: 1–2 natural mentions each
- **NEVER exceed 2.5% keyword density** — over-optimised pages are penalised
- Never repeat the exact keyword phrase more than 4 times on a single page
- Use semantic variants freely: "edible oil sector" / "oils and fats industry" / "vegetable oil market" / "cooking oil industry"

### 8.3 Content Structure Template for Insight Pages

Every insight/pillar page must follow this structure:

```
[H1]  — Primary keyword in headline
[Intro paragraph] — 80–120 words. Primary keyword in first sentence.

[H2]  — Overview / What is X?
  [H3] — Key market data point 1
  [H3] — Key market data point 2

[H2]  — Market Size & Growth (India / Nepal context)
  → Data table or stats block

[H2]  — Key Drivers & Trends
  [H3] — Driver 1 (contains secondary keyword)
  [H3] — Driver 2

[H2]  — Challenges & Risks

[H2]  — Outlook: 2025–2026

[H2]  — Frequently Asked Questions
  → Minimum 4 Q&A pairs using long-tail keywords from Section 1.3

[CTA Block] — Link to relevant service page
[Internal links] — At least 2 links to other insight or market pages
```

### 8.4 Contact Information Inclusion

- The `/contact` page must display `aasif@edibleera.in` as a clickable `mailto:` link
- Footer across all pages must include: `aasif@edibleera.in` and `www.edibleera.in`
- The `/about` and homepage must reference the website URL in body copy at least once

---

## 9. Performance SEO (Core Web Vitals)

> Google uses Core Web Vitals as a ranking signal. All three targets must be met.

### LCP (Largest Contentful Paint) — Target: < 2.5s

- Preload hero images — do not lazy-load the first visible image on any page
- Preload critical fonts with `<link rel="preload" as="style">`
- No render-blocking scripts in `<head>` — defer everything non-critical
- All images must be served in WebP format
- Hero images: max 200KB. Full-width section images: max 400KB.

### CLS (Cumulative Layout Shift) — Target: < 0.1

- Always declare explicit `width` and `height` attributes on every `<img>` tag
- Reserve space for dynamic content (charts, embeds) using `aspect-ratio` CSS
- Never inject content above existing page content via JS after initial load
- Fonts: use `font-display: swap` and define `size-adjust` in fallback `@font-face` to prevent layout shift

### INP (Interaction to Next Paint) — Target: < 200ms

- Defer all non-critical JavaScript — do not block the main thread on page load
- Load analytics scripts (GA4, GTM, etc.) with `async` or `defer` attributes only — never synchronously
- No synchronous operations in event handlers

---

## 10. SEO Checklist — Cursor Must Verify Before Every Commit

Run through this checklist before completing any feature, page, or content update.

See sections 3–9 above for full checklist items.

---

## 11. Guardrails — Things Cursor Must NEVER Do

```
✗ Never create a page without full metadata (title, description, canonical, OG, Twitter)
✗ Never use generic anchor text: "click here", "read more", "here", "this link"
✗ Never create a URL with uppercase letters, underscores, or spaces
✗ Never add a trailing slash to any URL
✗ Never place two <h1> tags on the same page
✗ Never skip heading levels (H1 → H3 without H2 is forbidden)
✗ Never put a date in a URL path
✗ Never load analytics or third-party scripts synchronously in <head>
✗ Never leave alt attribute missing on an informational image
✗ Never duplicate a meta description across two pages
✗ Never publish a new page without adding it to sitemap.xml
✗ Never block /insights, /services, /markets, or /reports in robots.txt
✗ Never set noindex on any public-facing page without explicit written instruction
✗ Never keyword-stuff — max 2 keywords in a title, max 2.5% density in body
✗ Never use inline CSS `display:none` or `visibility:hidden` to hide text from users
✗ Never use a raw <img> without width and height attributes declared
```

---

## 12. OG Image Specifications

All OG images must be placed at the root `/og/` path. Required files:

| File | Dimensions | Used On |
|---|---|---|
| `og/default.png` | 1200 × 630 px | Homepage, fallback for any page missing a specific OG image |
| `og/insights.png` | 1200 × 630 px | All /insights pages |
| `og/services.png` | 1200 × 630 px | All /services pages |
| `og/markets.png` | 1200 × 630 px | All /markets pages |
| `og/reports.png` | 1200 × 630 px | All /reports pages |

**OG Image Design Rules:**
- Background: #0A0A0A (Midnight)
- Edible Era logo — top-left
- Page title in large DM Serif Display, Ivory (#F0F0EE)
- Green (#3EC45A) accent bar or geometric element
- `edibleera.in` URL — bottom-right, small DM Sans, Ash (#888884)
- No generic stock photos — use abstract oil/green visual motifs consistent with brand

---

## 13. Domain & Hosting Checklist (One-Time Setup)

Complete before going live:

- [ ] HTTPS enforced — HTTP redirects to HTTPS permanently (301)
- [ ] `www.edibleera.in` is the canonical domain — non-www redirects to www (301)
- [ ] Submit sitemap to Google Search Console: `https://www.edibleera.in/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify property ownership in Google Search Console
- [ ] Set up GA4 with `async` script and proper consent mode
- [ ] Confirm `robots.txt` is publicly accessible at `https://www.edibleera.in/robots.txt`
- [ ] Confirm all redirects are 301 (permanent), not 302 (temporary)
- [ ] Verify no pages return 404 that should exist
- [ ] Check that `aasif@edibleera.in` mailto link works on the contact page

---

*End of SEO Master Instructions — Edible Era Oil & Fats*
*Website: www.edibleera.in · Email: aasif@edibleera.in*
*Maintained by: BlackMatter Technologies*
*Last updated: June 2026 · Version: 1.0*
*Review quarterly or whenever major new pages are added.*
