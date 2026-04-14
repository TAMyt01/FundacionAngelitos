import { defineConfig } from "vite";
import { resolve } from "node:path";
import HandlebarsPlugin from "vite-plugin-handlebars";
import getData from "./data";

export default defineConfig({
  base: process.env.DEPLOY_BASE_URL || "/",
  plugins: [
    HandlebarsPlugin({
      partialDirectory: resolve(__dirname, "partials"),
      context: (page) => getData(page),
    }),
  ],
});