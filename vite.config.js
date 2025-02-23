import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Akses ke semua IP di jaringan lokal
    port: 3000, // Port custom
  },
});
