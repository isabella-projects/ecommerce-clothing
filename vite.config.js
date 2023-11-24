import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: "ecommerce-clothing",
    },
    // TODO: Add 'ecommerce-clothing' as base for 'base' before deploying to GitHub Pages
    base: "/",
    plugins: [react()],
});
