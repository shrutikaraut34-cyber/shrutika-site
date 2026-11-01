import { defineConfig } from 'astro/config';

// The site lives at the root of her own domain, so there is no base path.
export default defineConfig({
  site: 'https://shrutika.com.np',
  trailingSlash: 'ignore',
});
