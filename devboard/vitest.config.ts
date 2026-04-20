import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    exclude: [
      'node_modules',
      'dist',
      'playwright',
      'e2e',
      'tests/e2e/**'
    ]  ,    
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      reportsDirectory: "./coverage",
      exclude: [ /*Solo exportan datos no hace falta medirlos*/
        "**/index.ts"
      ] ,
    }
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});