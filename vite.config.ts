import { resolve } from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["packages/core", "packages/react"],
      tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: {
        main: resolve(__dirname, "packages/core/main.ts"),
        react: resolve(__dirname, "packages/react/index.ts"),
        core: resolve(__dirname, "packages/core/index.ts"),
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-dom"],
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: (chunkInfo) => {
          if (chunkInfo.name === "main") {
            return "[name].js";
          }
          return "[name]/index.js";
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./packages/test/setup.ts"],
    include: ["packages/**/*.{test,spec}.{ts,tsx}"],
  },
});
