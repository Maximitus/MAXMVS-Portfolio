# GitHub Actions Setup for Cloudflare Pages

## Step 1: Get Your Cloudflare API Token

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Click on your profile icon (top right) → **My Profile**
3. Go to **API Tokens** tab
4. Click **Create Token**
5. Use the **Edit Cloudflare Workers** template, OR create a custom token with these permissions:
   - **Account** → **Cloudflare Pages** → **Edit**
   - **Zone** → **Zone Settings** → **Read** (if needed)
6. Click **Continue to summary** → **Create Token**
7. **IMPORTANT:** Copy the token immediately (you won't see it again!)

## Step 2: Get Your Cloudflare Account ID

1. In Cloudflare Dashboard, select your account (if you have multiple)
2. Go to **Workers & Pages** → **Overview**
3. Your **Account ID** is displayed in the right sidebar, or:
4. Go to any domain → **Overview** → **API** section shows Account ID
5. Copy the Account ID (it's a long string of characters)

## Step 3: Disable Cloudflare Pages Auto-Build

1. Go to **Workers & Pages** → Your project (`maxmvs-portfolio`)
2. Click **Settings** → **Builds & deployments**
3. Scroll to **Build configuration**
4. **Disable** or **remove** the build settings (or set to "None")
5. This ensures Cloudflare won't try to build automatically

## Step 4: Add Secrets to GitHub

1. Go to your GitHub repository: `https://github.com/Maximitus/MAXMVS-Portfolio`
2. Click **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret** and add these three secrets:

   **Secret 1: CLOUDFLARE_API_TOKEN**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: (paste the API token from Step 1)

   **Secret 2: CLOUDFLARE_ACCOUNT_ID**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: (paste the Account ID from Step 2)

   **Secret 3: GEMINI_API_KEY** (Optional - only if your build needs it)
   - Name: `GEMINI_API_KEY`
   - Value: (your Gemini API key if needed)

## Step 5: Verify Workflow File

The workflow file `.github/workflows/main.yml` should already be set up correctly. It will:
- Build your project when you push to `main` branch
- Deploy the `dist` folder to Cloudflare Pages

## Step 6: Trigger Deployment

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Configure GitHub Actions for Cloudflare Pages"
   git push origin main
   ```

2. Go to your GitHub repository → **Actions** tab
3. You should see the workflow running
4. Wait for it to complete (should show a green checkmark)

## Step 7: Verify Deployment

1. Once the workflow completes, go to Cloudflare Dashboard
2. **Workers & Pages** → Your project → **Deployments**
3. You should see a new deployment from GitHub Actions
4. Visit your domain - it should now show the correct version!

## Troubleshooting

If the workflow fails:
1. Check the **Actions** tab in GitHub for error messages
2. Verify all secrets are set correctly
3. Make sure the `projectName` in `.github/workflows/main.yml` matches your Cloudflare Pages project name
4. Check that Cloudflare Pages auto-build is disabled

