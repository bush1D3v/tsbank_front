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
    host: "localhost",
  },
  optimizeDeps: {
    include: [ "react", "react-dom", "react-router-dom", "react-icons", "@storybook" ],
  },
});
