import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from "vite-plugin-svgr"
import path from "path"
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin(), TanStackRouterVite()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
