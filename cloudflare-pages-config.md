# Cloudflare Pages Configuration

## Important: If using Cloudflare Pages built-in build system

If your Cloudflare Pages project is configured to build automatically (not using GitHub Actions), you need to configure it in the Cloudflare Dashboard:

1. Go to Cloudflare Dashboard → Pages → Your Project → Settings → Builds & deployments
2. Set these values:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Node version:** `20`

## If using GitHub Actions (recommended)

Make sure these secrets are set in your GitHub repository:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `GEMINI_API_KEY` (optional, only if needed for build)

Then the `.github/workflows/main.yml` will handle the deployment automatically.

## Troubleshooting

If you're still seeing old files:
1. Clear Cloudflare cache: Cloudflare Dashboard → Caching → Purge Everything
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check that the latest build succeeded in Cloudflare Pages dashboard

