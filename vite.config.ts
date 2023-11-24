import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [ react() ],
  server: {
    port: 3000,
    host: "localhost",
  },
  optimizeDeps: {
    include: [ "react", "react-dom", "react-router-dom", "react-icons" ],
  },
});
