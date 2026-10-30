import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bangkv22.github.io',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
