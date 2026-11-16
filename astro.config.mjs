import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE: endereço público usado em canonical, sitemap e JSON-LD.
// Troque pelo domínio próprio quando ele for ligado na Vercel.
const SITE = process.env.SITE_URL ?? "https://otica-gireh.vercel.app";

export default defineConfig({
  site: SITE,
  build: { inlineStylesheets: "always" },
  integrations: [
    sitemap({
      filter: (pagina) => !pagina.includes("/fundamentos/") && !pagina.includes("/404"),
    }),
  ],
});
