import { defineConfig } from 'astro/config';

// Temporary home: GitHub Pages serves this repo at
//   https://codegithubka.github.io/virginiapedicure/
// so every internal URL sits under that "/virginiapedicure/" prefix.
//
// WHEN THE REAL DOMAIN IS BOUGHT: change `site` to the new domain and set
// `base` back to '/'. Nothing else needs to change — every link and asset
// path in the templates is built from BASE_URL rather than hard-coded.
export default defineConfig({
  site: 'https://codegithubka.github.io',
  base: '/virginiapedicure',
  output: 'static',
  build: { format: 'file' },
  devToolbar: { enabled: false },
});
