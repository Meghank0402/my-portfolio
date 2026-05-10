# Meghank Jubur — Portfolio

Personal portfolio site built with **React + Vite + React Router**.

## Pages
- `/` — Hero / Home
- `/skills` — Technical skills by category
- `/experience` — Work history & education timeline
- `/projects` — Project showcase
- `/contact` — Contact info

## Stack
- React 18 + React Router v6
- Vite (build tool)
- CSS Modules (no external UI library)

## Run locally
```bash
npm install
npm run dev
```

## Build & Deploy to GitHub Pages

### Option A — Manual upload
```bash
npm run build
# Upload the contents of /dist to your repo
```

### Option B — GitHub Actions (auto-deploy on push)
Create `.github/workflows/deploy.yml` — see below.

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then in your repo: **Settings → Pages → Source → gh-pages branch**.

Your site will be live at `https://<your-github-username>.github.io/<repo-name>/`

> ⚠️ If hosting in a sub-path (not root domain), update `vite.config.js`:
> ```js
> base: '/<repo-name>/'
> ```
