import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV === "development" && nodePolyfills(), // Include only in development
  ],

  server: {
    port: 3000,
  },
});
