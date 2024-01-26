/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
  },
  base: "/",
  plugins: [ react() ],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    origin: "http://0.0.0.0:3000",
  },
  preview: {
    port: 3000,
    host: true,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-icons",
      "@storybook/theming"
    ],
  },
});
