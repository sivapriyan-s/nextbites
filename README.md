# NextBites

A searchable recipe app built with Next.js and TypeScript. Browse recipes, filter by title or cuisine, and open a page with ingredients and steps.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run build
```

The production build creates a static site in `out/`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site when `main` or `polish-and-deploy` is updated. In the repository settings, enable **Pages** and set its source to **GitHub Actions**.

The site URL is [https://sivapriyan-s.github.io/nextbites/](https://sivapriyan-s.github.io/nextbites/).
