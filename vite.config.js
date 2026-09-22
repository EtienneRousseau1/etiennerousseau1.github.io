import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the domain root: this repo is the user site
// (EtienneRousseau1/etiennerousseau1.github.io), not a project page.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
