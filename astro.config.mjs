import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://ahmed-masoud-seo.vercel.app",
  integrations: [sitemap()],
});