import { defineConfig } from 'astro/config';

// Live at https://virginiapedicure.nl
//
// `base` is '/' because the site sits at the root of its own domain. The
// CNAME file in public/ is what tells GitHub Pages to serve it there; it is
// copied into the build output on every deploy, so do not delete it.
export default defineConfig({
  site: 'https://virginiapedicure.nl',
  base: '/',
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
