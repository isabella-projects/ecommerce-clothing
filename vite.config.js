import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: "ecommerce-clothing",
    },
    base: "/ecommerce-clothing",
    plugins: [react()],
});
