import react from "@vitejs/plugin-react";
import { globSync } from "glob";
import { fileURLToPath } from "node:url";
import { extname, relative, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.ts"),
            name: "bw-ui",
            fileName: "bw-ui",
            formats: ["es"]
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["react", "react/jsx-runtime"],
            input: Object.fromEntries(
                globSync("src/**/*.{ts,tsx}").map((file) => [
                    // This remove `src/` as well as the file extension from each
                    // file, so e.g. src/nested/foo.js becomes nested/foo
                    relative(
                        "src",
                        file.slice(0, file.length - extname(file).length)
                    ),
                    // This expands the relative paths to absolute paths, so e.g.
                    // src/nested/foo becomes /project/src/nested/foo.js
                    fileURLToPath(new URL(file, import.meta.url))
                ])
            ),
            output: {
                // Put chunk styles at <output>/assets
                assetFileNames: "assets/[name][extname]",
                entryFileNames: "[name].js"
            }
        }
    },
    plugins: [dts(), react(), libInjectCss()]
});
