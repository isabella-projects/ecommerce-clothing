import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    server: {
        open: "/",
    },
    // TODO: Add 'ecommerce-clothing' as base for 'base' before deploying to GitHub Pages
    base: "/",
    plugins: [react(), svgr()],
});
