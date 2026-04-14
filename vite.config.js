import { defineConfig } from "vite";
import { resolve } from "node:path";

import HandlebarsPlugin from 'vite-plugin-handlebars';

import getData from "./data";

export default defineConfig({
    plugins: [
        HandlebarsPlugin({
            partialDirectory: resolve(__dirname, 'partials'),
            context: (page) => {
                return getData(page);
            }
        })
    ]
});