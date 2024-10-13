import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://sawhil.github.io",
  base: "/gobackend",
  integrations: [
    react(),
    tailwind(),
    starlight({
      title: "Go BackEnd",
      sidebar: [
        {
          label: "Machine Coding",
          items: [
            {
              label: "Like Button",
              slug: "machine-coding/like-button",
            },
          ],
        },
      ],
    }),
  ],
});
