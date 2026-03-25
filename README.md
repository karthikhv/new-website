# Karthik HV — Personal Portfolio

A premium, minimal personal portfolio website built with Next.js, Framer Motion, React Three Fiber, and Tailwind CSS.

## 🌐 Live URL

**https://karthikhv.github.io/new-website/**

> ⚠️ **One-time setup required** — see [Enabling GitHub Pages](#enabling-github-pages) below.

---

## Design Philosophy

- **Apple-level simplicity** — extreme whitespace, clear hierarchy
- **Typography-first** — large headings, light text, minimal content
- **Subtle animations** — Framer Motion fade-in on scroll only
- **Minimal 3D** — soft floating particles in the hero, can be disabled

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS 4**
- **Framer Motion 12**
- **React Three Fiber + Drei** (hero particles only)
- **TypeScript**

## Sections

1. **Hero** — Fullscreen, large typography, subtle particles, fade-in
2. **About** — Short paragraph + 3 key metrics
3. **Experience** — Clean vertical list with company/role/bullets
4. **Skills** — Text-based, grouped by Data Engineering / Analytics / Cloud
5. **Projects** — Minimal grid with hover effects
6. **Contact** — Centered, email CTA + links

---

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build   # generates ./out/ (static HTML/CSS/JS)
npm run start   # or serve ./out/ with any static file server
```

---

## Enabling GitHub Pages

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and pushes the static site to the `gh-pages` branch on every push to `main`. To activate the live URL:

### Step 1 — Approve & run the deployment workflow

Go to **Actions** → **Deploy to GitHub Pages** → click the pending run → **Approve and run**

Or simply **merge this PR** to `main`, which will trigger a new, auto-approved run.

### Step 2 — Enable GitHub Pages in repo settings

1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Select **`gh-pages`** branch, folder **`/ (root)`**
4. Click **Save**

### Step 3 — Visit the live site

After ~1–2 minutes: **https://karthikhv.github.io/new-website/**
