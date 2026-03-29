import { defineConfig } from "vite";
import { resolve } from "node:path";

import HandlebarsPlugin from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        HandlebarsPlugin({
            partialDirectory: resolve(__dirname, 'partials')
        })
    ]
});