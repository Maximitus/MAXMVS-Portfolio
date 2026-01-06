# Cloudflare Pages Deployment Guide

## Configuration in Cloudflare Dashboard

When setting up your project in Cloudflare Pages (via GitHub integration), use these settings:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave empty)
- **Node version:** `20` (or latest LTS)

## Environment Variables

If you need the Gemini API key in production, add it in Cloudflare Pages:
- Go to Settings → Environment Variables
- Add `GEMINI_API_KEY` with your API key value

## Files Created

1. **`.github/workflows/deploy.yml`** - GitHub Actions workflow (optional, if you want CI/CD)
2. **`wrangler.toml`** - Cloudflare configuration
3. **`public/_redirects`** - SPA routing support (copied to `dist` during build)

## Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
npx wrangler pages deploy dist
```

## Troubleshooting

If only the background shows:
1. Check browser console for JavaScript errors
2. Verify build output directory is set to `dist` in Cloudflare
3. Ensure the build command runs successfully
4. Check that all assets are loading (Network tab in DevTools)

