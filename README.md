# Phantom Portfolio — Valijonov Valijon

Personal portfolio website for Valijonov Valijon (Phantom) — Software Engineer, Ethical Cybersecurity Specialist, and Scientific Innovator based in Tashkent, Uzbekistan.

**Live site:** `https://<your-github-username>.github.io/<repo-name>/`

---

## File structure

```
phantom-portfolio/
├── index.html                      ← Main page
├── styles-v2.css                   ← All styles
├── portfolio-v2.js                 ← Animations & interactions
├── app.js                          ← Supabase auth & CMS logic
├── phantom-car-concept.jpg         ← Research images (web-optimized)
├── phantom-block-concept.jpg
├── phantom-wind-concept.jpg
├── achievement-phantom-trinity-x3.jpg
└── achievement-phantom-block.jpg
```

## Deploy to GitHub Pages

### First time setup

```bash
git init
git add .
git commit -m "Initial portfolio deploy"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then in GitHub:
1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Click **Save**

Your site will be live at `https://<your-username>.github.io/<repo-name>/` in ~1 minute.

### Updating the site

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages auto-deploys on every push to `main`.

---

## Supabase (optional — for admin panel)

The project/achievement management panel uses Supabase. The credentials in `app.js` are safe to expose publicly as long as **Row Level Security (RLS)** is enabled on your Supabase project (see `supabase.sql`).

If you want to reset or change credentials, edit these lines in `app.js`:

```js
const SUPABASE_URL  = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key";
const OWNER_EMAIL   = "your@email.com";
```

---

## Tech stack

- Vanilla HTML / CSS / JS — no build tools, no dependencies
- [Syne](https://fonts.google.com/specimen/Syne) + [Inter](https://fonts.google.com/specimen/Inter) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) via Google Fonts
- [Supabase](https://supabase.com) for backend (optional)
