import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // permite usar describe, it, expect, vi sem importar
    environment: "jsdom", // simula o DOM para testes de componentes
    setupFiles: "./src/test/setup.js", // arquivo opcional de configuração
  },
});
