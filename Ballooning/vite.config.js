import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({                       
      name: "ballooning",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/pages/Dashboard/index.jsx",
        "./Plans": "./src/pages/Plans/index.jsx",
        "./PlanParameters": "./src/pages/PlanParameters/index.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],  
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
