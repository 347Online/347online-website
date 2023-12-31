import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  server: {
    port: 4000,
  },
  preview: {
    port: 5000,
  },
  optimizeDeps: {
    exclude: ["cubing"],
  },

  worker: {
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
    },
  },
});
