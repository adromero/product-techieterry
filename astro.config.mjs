// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://techieterry.online',
  server: {
    port: 3013
  },

  vite: {
    plugins: [tailwindcss()]
  }
});