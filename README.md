<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# MAXMVS Portfolio

Professional portfolio showcasing structural engineering expertise, specializing in luxury custom homes designed in ArchiCAD. Expert structural engineer for high-end residential and commercial projects, plus fine woodworking, fitness programming, and software development.

**Live Site:** [maxmvs.com](https://maxmvs.com)

## Run Locally

**Prerequisites:** Node.js 20+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in `.env.local` (optional, only needed for AI Assistant feature):
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

This project is automatically deployed to [Cloudflare Pages](https://pages.cloudflare.com/) on every push to the `main` branch.

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Production URL:** [maxmvs.com](https://maxmvs.com)

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Cloudflare Pages** - Hosting
- **Google Gemini AI** - AI Assistant feature