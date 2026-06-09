# 301 Redirect Map — gdental.com.sg Migration

Add every old indexed URL to `vercel.json` under `"redirects"` before go-live.

## Format

```json
{ "source": "/old-path", "destination": "/new-path", "permanent": true }
```

- `"permanent": true` → 301 (passes SEO equity, cached by browsers) — use for all migrated pages
- `"permanent": false` → 302 (temporary) — avoid for SEO
- Wildcards: `"/old-section/:path*"` → `"/new-section/:path*"` captures subpaths

## New Site URL Structure

| Old path (to confirm from crawl) | New path |
|----------------------------------|----------|
| `/dental-services`               | `/services` |
| `/our-team`                      | `/team`     |
| `/contact-us`                    | `/contact`  |
| `/about-us`                      | `/about`    |

## Steps Before Launch

1. Run a crawl of the live `gdental.com.sg` (e.g. Screaming Frog) to export all indexed URLs.
2. Map every found URL to a new destination and add it to `vercel.json`.
3. Replace/narrow the `/home`, `/index.html`, `/index.php` catch-alls with explicit entries.
4. After deploying, verify each redirect returns HTTP 301 (not 302 or 404).
5. Submit new sitemap to Google Search Console and request re-indexing.
