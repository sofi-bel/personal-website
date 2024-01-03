import { defineConfig } from "vite";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: resolve(__dirname, "src/"),
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
  plugins: [
    react(),
    viteStaticCopy({
      targets: [{ src: "/assets/favicon/*", dest: "/assets/favicon/" }],
    }),
  ],
  server: {
    port: 3000,
    strictPort: true,
    open: "/",
    hmr: {
      overlay: false,
    },
  },
});
