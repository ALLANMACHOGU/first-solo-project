// filepath: /workspaces/apcsp-portfolio-ALLANMACHOGU/astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  base: process.env.BASE_PATH || "/",
  vite: {
    build: {
      minify: false,
    },
  },
});