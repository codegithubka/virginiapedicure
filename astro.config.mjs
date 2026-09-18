import { defineConfig } from 'astro/config';

// Live at https://virginiapedicure.nl
//
// `base` is '/' because the site sits at the root of its own domain.
//
// The custom domain itself is set in the GitHub repo under Settings > Pages >
// Custom domain. This site deploys through a GitHub Actions workflow, and for
// Actions deploys GitHub ignores any CNAME file, so public/CNAME has no effect
// here. It is kept only so the domain still works if the repo is ever switched
// to deploying from a branch.
export default defineConfig({
  site: 'https://virginiapedicure.nl',
  base: '/',
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
