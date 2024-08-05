import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: "remote2",
      filename: "remote2-entry.js",
      exposes: {
        "./DemoApp": "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
