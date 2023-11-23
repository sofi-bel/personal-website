import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    root: resolve(__dirname, "src/"),
    build: {
        outDir: resolve(__dirname, "dist/"),
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, "src/index.html")
            }
        }
    },
    server: {
        port: 3000,
        strictPort: true,
        open: "/"
    }
});
