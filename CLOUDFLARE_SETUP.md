# Cloudflare Pages Setup - Built-in Build System

## Step 1: Connect GitHub Repository to Cloudflare Pages

1. Go to Cloudflare Dashboard: https://dash.cloudflare.com/
2. Look for **"Pages"** in the sidebar (or try direct URL: https://dash.cloudflare.com/pages)
3. Click **"Create a project"** or **"Connect to Git"**
4. Select **GitHub** as your Git provider
5. Authorize Cloudflare to access your GitHub account (if needed)
6. Select your repository: **MAXMVS-Portfolio**

## Step 2: Configure Build Settings

When setting up the project, configure these settings:

- **Project name:** `maxmvs-portfolio` (or any name you prefer)
- **Production branch:** `main`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (leave empty)
- **Node version:** `20` (or latest LTS)

## Step 3: Environment Variables (Optional)

If your build needs the Gemini API key:
1. After creating the project, go to **Settings** → **Environment Variables**
2. Add:
   - Variable name: `GEMINI_API_KEY`
   - Value: (your API key)
   - Environment: Production (and Preview if needed)

## Step 4: Deploy

1. Click **"Save and Deploy"**
2. Cloudflare will:
   - Pull your code from GitHub
   - Install dependencies
   - Run the build command
   - Deploy the `dist` folder

## Step 5: Disable GitHub Actions (Optional)

Since Cloudflare is now handling the build, you can disable the GitHub Actions workflow:

1. Go to your GitHub repo → **Settings** → **Actions** → **General**
2. Under "Workflow permissions", you can disable workflows
3. Or just leave it - it won't interfere if Cloudflare is building

## Automatic Deployments

After setup, Cloudflare will automatically:
- Build and deploy on every push to `main`
- Create preview deployments for pull requests
- Show build logs in the Cloudflare dashboard

## Troubleshooting

If the build fails:
1. Check build logs in Cloudflare Dashboard → Your Project → Deployments
2. Verify build settings match the configuration above
3. Check that `package.json` has the correct build script
4. Ensure Node version is set to 20

