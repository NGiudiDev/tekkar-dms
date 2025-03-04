import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import path from "path";

//? view: https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@router": path.resolve(__dirname, "src/router"),
      "@store": path.resolve(__dirname, "src/store"),
      //? modules
      "@car": path.resolve(__dirname, "src/modules/car"),
      "@client": path.resolve(__dirname, "src/modules/client"),
      "@common": path.resolve(__dirname, "src/modules/common"),
      "@person": path.resolve(__dirname, "src/modules/person"),
      "@service": path.resolve(__dirname, "src/modules/service"),
      "@service_report": path.resolve(__dirname, "src/modules/service_report"),
      "@session": path.resolve(__dirname, "src/modules/session"),
      "@user": path.resolve(__dirname, "src/modules/user"),
    },
  },
});