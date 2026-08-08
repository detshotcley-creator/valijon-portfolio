# Phantom Portfolio

A black-and-white portfolio for Valijonov Valijon (Phantom). It is a static website with a secure Supabase-backed editor, so projects and achievements can be added one at a time after it is online. The top-right controls let visitors switch between English, Russian, and Uzbek, plus daylight and night modes; their choice is remembered in the browser.

## Preview locally

Open `index.html` in a browser. For best results, serve this folder with a local web server.

## Connect the online editor (required before publishing)

1. Create a free project at [Supabase](https://supabase.com/).
2. In **SQL Editor**, run the full contents of `supabase.sql`.
3. In **Authentication > Users**, create an email/password user for `detshotcley@gmail.com`. Do not share that password.
4. In **Project Settings > API**, copy the project URL and the **anon public** key.
5. Paste those two values into `SUPABASE_URL` and `SUPABASE_ANON_KEY` at the top of `app.js`.
6. Deploy the folder to Netlify, Vercel, or GitHub Pages. The site works on any static host.

The public anon key is intended to be visible in browser code. The protection comes from the Row Level Security rules in `supabase.sql`, which only let `detshotcley@gmail.com` add or change portfolio entries.

## Using the editor

After deployment, press **Manage portfolio** (or **Add a project**) and sign in with your Supabase email and password. Fill in the small form to publish a project or achievement. Visitors will see it right away.

## Files

- `index.html` — content and layout
- `styles.css` — responsive visual design
- `app.js` — online entry editor and database connection
- `supabase.sql` — protected table and access rules
