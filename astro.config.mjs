import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://droneo.fr',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
