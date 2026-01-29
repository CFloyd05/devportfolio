// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://cfloyd.ca',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
