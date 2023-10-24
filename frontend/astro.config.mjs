import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import aws from "astro-sst/lambda";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    configFile: "tailwind.config.mjs"
  }), react()],
  output: "hybrid",
  adapter: aws()
});