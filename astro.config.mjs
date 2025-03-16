// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: "server",
});