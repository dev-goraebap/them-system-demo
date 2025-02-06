import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    root: './src',
    build: {
        outDir: '../dist',
        minify: false,
        emptyOutDir: true,
    },
    plugins: [
        tailwindcss(),
    ],
})