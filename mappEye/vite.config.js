import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  federation({                       //exposing the MappZen dirctory
    name: "mappEye",
    filename: "mappEye-entry.js",
    exposes: {
      "./MappEye": "./src/App",
    },
    shared: ["react", "react-dom"],
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),  //to resolve dynamic import while building
    },
  },
  build: {                // Configuring the Build
    outDir: "dist",
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
