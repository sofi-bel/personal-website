import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  root: resolve(__dirname, "src/"),
  publicDir: resolve(__dirname, "public/"),
  build: {
    outDir: resolve(__dirname, "dist/"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
    },
  },
  esbuild: {
    minifyIdentifiers: false,
    keepNames: true,
  },
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    strictPort: true,
    open: "/",
    hmr: {
      overlay: false,
    },
  },
});
