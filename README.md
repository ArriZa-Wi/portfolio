# Arriza Wibowo — Portfolio

Personal portfolio built with **Next.js 15** (App Router), **React 19**, and deployed on **Vercel**.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment Guide

### Step 1: Buy a Domain (~$10/year)

1. Go to [porkbun.com](https://porkbun.com) and create an account
2. Search for your domain (e.g. `arriza.dev`, `arrizawibowo.com`)
3. `.dev` domains are ~$10/year, `.com` is ~$9/year — Porkbun has no markup or renewal hikes
4. Complete the purchase

### Step 2: Push to GitHub

```bash
# In this project directory
git init
git add .
git commit -m "Initial portfolio"

# Create a new repo on GitHub (github.com/new), then:
git remote add origin https://github.com/ArriZa-Wi/portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. Click **"Add New..."** → **"Project"**
3. Import your `portfolio` repo from GitHub
4. Vercel auto-detects Next.js — leave all settings as default
5. Click **"Deploy"**
6. In ~30 seconds you'll have a live URL like `portfolio-xyz.vercel.app`

### Step 4: Connect Your Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Type your domain (e.g. `arriza.dev`) and click **Add**
3. Vercel will show you DNS records to add. Go to Porkbun:
   - Log in → **Domain Management** → click your domain → **DNS Records**
   - Add the records Vercel shows you (usually an `A` record pointing to `76.76.21.21` and a `CNAME` for `www` pointing to `cname.vercel-dns.com`)
4. Back in Vercel, click **Verify** — it'll detect the records within a few minutes
5. SSL certificate is auto-provisioned. You're live at your domain.

### Step 5: Update Your Domain in the Code

Once you have your domain, update these three files:

- `app/layout.js` — change `SITE_URL` on line 4
- `app/sitemap.js` — change `SITE_URL` on line 2
- `app/robots.js` — change `SITE_URL` on line 2

Commit and push — Vercel auto-deploys on every push to `main`.

---

## SEO Checklist (Already Done)

- [x] Next.js Metadata API — title, description, keywords
- [x] Open Graph tags — for LinkedIn/Facebook/Discord link previews
- [x] Twitter Card tags — for Twitter/X link previews
- [x] JSON-LD structured data — `Person` schema for Google
- [x] `robots.txt` — allows all crawlers
- [x] `sitemap.xml` — auto-generated
- [x] Canonical URL — prevents duplicate content
- [x] Semantic HTML — proper heading hierarchy, landmarks, alt text
- [x] `next/image` — automatic image optimization, lazy loading, WebP/AVIF

## SEO TODO (After Deploy)

- [ ] Create an `og-image.png` (1200×630px) and place it in `/public/` — this is what shows when your site is shared on social media
- [ ] Submit your sitemap to [Google Search Console](https://search.google.com/search-console) — sign up, verify your domain, then submit `https://yourdomain.dev/sitemap.xml`
- [ ] Optionally submit to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Add your portfolio URL to your GitHub profile, LinkedIn, and resume

---

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # All styles (design tokens, components, responsive)
│   ├── layout.js         # Root layout + SEO metadata + JSON-LD
│   ├── page.js           # Main page entry
│   ├── sitemap.js        # Auto-generated sitemap
│   └── robots.js         # Crawler rules
├── components/
│   ├── Cursor.jsx        # Custom cursor, useReveal hook, LiveClock, Counter
│   ├── PortfolioApp.jsx  # Client shell — scroll tracking, nav, section layout
│   ├── Sections.jsx      # Hero, About, Projects, Experience, Awards, etc.
│   ├── Terminal.jsx      # Terminal easter egg (backtick key)
│   └── ThemeToggle.jsx   # Light/dark mode toggle (persists to localStorage)
├── lib/
│   └── data.js           # All portfolio content — single source of truth
├── public/
│   └── assets/           # Portrait, project screenshots
├── next.config.js
├── package.json
└── jsconfig.json
```

## Editing Content

All portfolio text, projects, experience, awards, and skills live in **`lib/data.js`**. Edit that one file to update your content — no digging through components.
