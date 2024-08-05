import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:5001/assets/remoteEntry.js",
        remote2: "http://localhost:5002/assets/remote2-entry.js",
        mappZen: "http://localhost:5003/assets/mappZen-entry.js",
        mappEye: "http://localhost:5004/assets/mappEye-entry.js",
        inspection: "http://localhost:5005/assets/remoteEntry.js",
        ballooning: "http://localhost:5006/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
      // shared: {
      //   react: { singleton: true, requiredVersion: '>=18.0.0' },
      //   'react-dom': { singleton: true, requiredVersion: '>=18.0.0' },
      // },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
