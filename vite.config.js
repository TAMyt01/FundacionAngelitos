import { defineConfig } from "vite";
import { resolve } from "node:path";
import { glob } from "glob";

import HandlebarsPlugin from "vite-plugin-handlebars";
import PurgeCSSPlugin from "vite-plugin-purgecss";

import getData from "./data";

// Detecta automáticamente todos los .html como entradas MPA
const htmlEntries = Object.fromEntries(
  glob.sync("**/*.html", {
    ignore: ["node_modules/**", "dist/**"],
  }).map((file) => [
    file.replace(/\.html$/, ""),
    resolve(__dirname, file),
  ])
);

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL || "/",
  build: {
    rollupOptions: {
      input: htmlEntries,
    },
  },
  plugins: [
    HandlebarsPlugin({
      partialDirectory: resolve(__dirname, "partials"),
      context: (page) => getData(page),
    }),
    PurgeCSSPlugin({
      content: ["**/*.html", "**/*.js", "**/*.hbs"],
    }),
  ],
});