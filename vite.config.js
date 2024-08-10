import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
// https://vitejs.dev/config/
export default defineConfig({
  server: { watch: { usePolling: true } },
  plugins: [react({ include: "**/*.jsx" }), tailwindcss()],
  base: "get-shit-done",
});
