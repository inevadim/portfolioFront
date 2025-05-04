import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";


export default defineConfig({
  base: '/portfolioFront/',
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
    svgr(),
  ],

  resolve: {
    alias: {
      "@": "/src",
    },
  }
});