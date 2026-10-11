import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  $meta: { name: "ui" },

  modules: ["reka-ui/nuxt", "@nuxt/fonts"],

  css: [join(currentDir, "./app/assets/css/main.css")],

  vite: {
    plugins: [tailwindcss()],
  },
});
