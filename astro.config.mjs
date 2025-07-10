import { defineConfig } from 'astro/config';

export default defineConfig({
  base: process.env.BASE || '/',
  // ...other config...
});

//used with gpt 4.1, as well as on deploy.yml